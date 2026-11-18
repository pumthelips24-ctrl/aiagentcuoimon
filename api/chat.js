/**
 * OmniAnalyst Studio
 * Vercel Serverless Function: api/chat.js (ESM Module)
 */

export default async function handler(req, res) {
  // Bật CORS đầy đủ cho môi trường Serverless & Local dev
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(200).json({
      status: 'online',
      service: 'OmniAnalyst Studio Backend API',
      message: 'Vui lòng gửi POST request với payload { message, company, financialData, character }'
    });
  }

  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};
    const {
      message = '',
      character = 'minh_anh', // 'minh_anh' (Chiến lược) | 'quoc_bao' (Kế toán Trưởng & CFO)
      company = {},
      financialData = {},
      apiKey = '',
      provider = 'gemini'
    } = body;

    const companyName = company.name || 'Doanh Nghiệp Chưa Đặt Tên';
    const industry = company.industry || 'Thương Mại & Dịch Vụ';
    const goal = company.goal || 'Phân tích toàn diện 360 độ';

    const isQuocBao = character === 'quoc_bao' || character === 'haruto';

    // Xây dựng System Prompt chuyên gia
    const systemPrompt = isQuocBao
      ? `Bạn là Quốc Bảo — Kế toán Trưởng kỳ cựu & Giám đốc Tài chính CFO thuộc OmniAnalyst Studio.
Phong cách: Điềm đạm, sắc bén, tôn trọng số liệu thực tế, tuân thủ nghiêm ngặt Chuẩn mực Kế toán Việt Nam (Thông tư 200/2014/TT-BTC) và các chuẩn mực tài chính.
Nhiệm vụ: Phân tích sâu P&L, Cân đối kế toán, Dòng tiền CFO/CFI/CFF, cảnh báo Bẫy doanh thu ảo (Đơn nhiều nhưng lãi mỏng), hụt KPI và tối ưu cấu trúc chi phí (COGS, SG&A). Đưa ra các khuyến nghị kiểm soát tài chính cụ thể bằng tiếng Việt, giọng điệu chuyên nghiệp, tự tin.`
      : `Bạn là Minh Anh — Cố vấn Chiến lược & Vận hành Doanh nghiệp thuộc OmniAnalyst Studio.
Phong cách: Thông minh, tinh tế, truyền cảm hứng hành động, tập trung vào tăng trưởng thị phần, cải thiện hiệu quả kinh doanh, giảm tỷ lệ đổi trả/hủy đơn và tối ưu hóa chuỗi giá trị.
Nhiệm vụ: Cung cấp góc nhìn chiến lược kinh doanh đa ngành, lộ trình thực thi 4 giai đoạn, tối ưu danh mục sản phẩm và gia tăng giá trị trọn đời cho doanh nghiệp. Sử dụng tiếng Việt chuẩn mực, cuốn hút, thấu đáo.`;

    const hasCogs = financialData.hasCogsColumn !== false && financialData.cogs !== null;
    const hasKpi = financialData.hasKpiColumn !== false;
    const traps = financialData.volumeTraps || [];

    const contextDataStr = `
[DỮ LIỆU KIỂM TOÁN NGUỒN CỦA DOANH NGHIỆP: ${companyName}]:
- Phân ngành: ${industry} | Mục tiêu: ${goal}
- Doanh thu gộp: ${(financialData.grossRevenue || 0).toLocaleString('vi-VN')} VNĐ
- Giảm trừ doanh thu thực tế (Đổi trả): ${(financialData.deductions || 0).toLocaleString('vi-VN')} VNĐ (Tỷ lệ: ${financialData.returnRate || 0}%)
- Doanh thu thuần thực tế (Mã 10 = Gộp - Giảm trừ): ${(financialData.netRevenue || 0).toLocaleString('vi-VN')} VNĐ
- Cột Giá vốn COGS: ${hasCogs ? `CÓ TRONG FILE (${(financialData.cogs || 0).toLocaleString('vi-VN')} VNĐ, Biên gộp: ${financialData.grossMargin || 0}%)` : 'KHÔNG CÓ TRONG FILE (Tuyệt đối không được bịa số COGS hay Lợi nhuận gộp)'}
- Cột KPI Mục tiêu: ${hasKpi ? 'CÓ TRONG FILE' : 'KHÔNG CÓ TRONG FILE (Không suy đoán % đạt KPI)'}
- Điểm Rủi Ro & Ưu Tiên Xử Lý: ${financialData.spsScore ?? 45}/100 (${financialData.spsLevel ?? 'N/A'})
- Bẫy doanh thu ảo: ${traps.length ? traps.map(v => v.product).join(', ') : 'Không phát hiện'}
`;

    // 1. Thử gọi External API nếu người dùng truyền key hoặc có server env key
    const activeGeminiKey = apiKey || process.env.GEMINI_API_KEY;
    const activeOpenAIKey = (provider === 'openai' ? apiKey : '') || process.env.OPENAI_API_KEY;

    if (activeGeminiKey && provider === 'gemini') {
      try {
        const geminiRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${activeGeminiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [
                {
                  role: 'user',
                  parts: [
                    { text: systemPrompt + '\n\n' + contextDataStr + '\n\n[YÊU CẦU CỦA NGƯỜI DÙNG]: ' + message }
                  ]
                }
              ],
              generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 1200
              }
            })
          }
        );
        if (geminiRes.ok) {
          const geminiData = await geminiRes.json();
          const reply = geminiData.candidates?.[0]?.content?.parts?.[0]?.text;
          if (reply) {
            return res.status(200).json({
              success: true,
              character: isQuocBao ? 'quoc_bao' : 'minh_anh',
              provider: 'gemini',
              reply
            });
          }
        }
      } catch (err) {
        console.error('Gemini API Error:', err);
      }
    }

    // 2. Fallback
    const prefix = isQuocBao ? '[Quốc Bảo - Kế toán Trưởng & CFO]:' : '[Minh Anh - Cố vấn Chiến lược & Vận hành]:';
    const netRevStr = financialData.netRevenue ? `${(financialData.netRevenue / 1e9).toFixed(2)} tỷ VNĐ` : 'Chưa có dữ liệu';
    const fallbackReply = `${prefix} Kính chào Ban Giám Đốc ${companyName}! Doanh thu thuần thực tế đạt ${netRevStr}, Biên lợi nhuận gộp ${financialData.grossMargin || 0}%, Điểm rủi ro và ưu tiên xử lý là ${financialData.spsScore ?? 45}/100. Tôi khuyến nghị kiểm soát chặt chẽ các khoản chi phí bán hàng và chi phí quản lý doanh nghiệp, đồng thời rà soát tỷ lệ đổi trả để đảm bảo an toàn dòng tiền hoạt động kinh doanh (CFO).`;

    return res.status(200).json({
      success: true,
      character: isQuocBao ? 'quoc_bao' : 'minh_anh',
      provider: 'enterprise-engine',
      reply: fallbackReply
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Lỗi xử lý máy chủ: ' + error.message
    });
  }
}
