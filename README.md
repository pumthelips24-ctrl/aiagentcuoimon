# OmniAnalyst AI Studio 🌸 — Sakura Edition
> **Universal Multi-Company Business & Financial Intelligence Suite**  
> *Chuẩn mực Kế toán Doanh nghiệp Việt Nam (Thông tư 200/2014/TT-BTC) kết hợp Trợ lý Trí tuệ Nhân tạo Đa Ngành*

---

## 🌸 Giới Thiệu Tổng Quan

**OmniAnalyst AI Studio 🌸 — Sakura Edition** là nền tảng Web AI Agent Phân Tích Kinh Doanh Số & Kế Toán Tài Chính Cấp Cao đa năng, hoạt động theo mô hình Hybrid linh hoạt:
- **Client-Side SPA (`index.html`)**: Trực quan hóa dữ liệu, tính toán tài chính tức thì trong 0ms, biểu đồ Chart.js độ trễ zero-latency, hiệu ứng cánh hoa anh đào rơi (`sakuraFall`), bộ đọc SheetJS thông minh tự quét 15 dòng tìm tiêu đề thật, và Trợ lý ảo AI hình người tích hợp Web Speech API tiếng Việt.
- **Vercel Serverless Function (`api/chat.js` chuẩn ESM `"type": "module"`)**: Sẵn sàng deploy 1-click không lỗi lên nền tảng đám mây Vercel, hỗ trợ kết nối Google Gemini API, OpenAI API hoặc Sakura Financial Intelligence Expert Engine tích hợp sẵn.
- **Python Local Hybrid Server (`server.py`)**: Hỗ trợ chạy cục bộ mượt mà chỉ với một câu lệnh đơn giản, không cần cài đặt thêm thư viện ngoài (Zero-dependency).

---

## 🌸 Triết Lý Thiết Kế & Phong Cách Hoa Anh Đào (Sakura Yozakura)

Giao diện lấy cảm hứng từ đêm hội ngắm hoa anh đào Nhật Bản (*Yozakura*) trên nền nhung tím đen huyền ảo:
- **Nền tổng thể (Background)**: Màu nhung tối `#0f0511` (*Velvet Sakura Night*).
- **Thẻ nội dung (Cards) & Bảng điều khiển**: Màu tím mận nhung `#1a0a1a`, viền cành đào `#441840` / `#63245d`, bo góc `rounded-2xl` / `rounded-3xl`, bóng đổ `sakura-glow`.
- **Dải màu Sakura chủ đạo**:
  - **Hồng phấn hoa đào (Primary Accent)**: `#ff758f` (Nút hành động chính, tab kích hoạt, số liệu nổi bật).
  - **Đỏ hồng cánh sen**: `#ff4d6d` (Cảnh báo, vạch mục tiêu kế hoạch).
  - **Hồng pastel**: `#ff8fa3` (Thẻ phụ, phân khúc, viền phụ).
  - **Đỏ thẫm hoàng gia**: `#c9184a` (Cảnh báo nguy cấp).
  - **Vàng nhụy hoa**: `#ffd166` (Chú ý, chi phí).
  - **Xanh lá non (Matcha Green)**: `#10b981` (Lợi nhuận ròng dương, dữ liệu hợp lệ).
- **Hiệu ứng Cánh hoa rơi (Falling Sakura Petals)**: Container `#sakura-overlay` tự động sinh 24 cánh hoa anh đào gradient rơi lơ lửng, chuyển động xoay và nghiêng tự nhiên (`pointer-events: none` không cản trở thao tác click, có nút bật/tắt nhanh).
- **Nhân vật Trợ lý Ảo AI Hình Người (Floating Virtual Assistant)**: Cố định góc dưới bên phải (`fixed bottom-6 right-6 z-50`), hỗ trợ đổi 2 nhân vật:
  - 🌸 **Sakura**: Cố vấn Chiến lược & Tăng trưởng vận hành.
  - 🌸 **Haruto**: Cố vấn Kế toán Tài chính & Đầu tư cấp cao.
  - Hiệu ứng nhịp thở (`avatar-breathing`), sóng âm visualizer (`wave-bar`) khi nói và Web Speech API đọc to câu trả lời bằng tiếng Việt.

---

## 🏢 Đa Doanh Nghiệp, Đa Bộ Ngành & Đa Mục Đích

### 1. Đa Doanh Nghiệp (Multi-Company Session Switcher)
Cho phép quản lý và chuyển đổi linh hoạt nhiều doanh nghiệp độc lập trong cùng một phiên làm việc, lưu trữ riêng biệt trong `localStorage`:
1. **Công ty Bán lẻ Thời trang An Phước (Bán lẻ & TMĐT)**: Doanh thu 17.9 tỷ đ, Biên gộp 42%, Tỷ lệ hoàn đơn 3.2%, 4 khu vực bán hàng.
2. **Chuỗi Cà Phê Highlands Chi Nhánh 1 & 2 (F&B / Nhà hàng)**: Doanh thu 8.08 tỷ đ, Food Cost 31.5%, Biên lãi thuần 36.4%, so sánh Chi Nhánh 1 (Quận 1) vs Chi Nhánh 2 (Thủ Đức).
3. **Công ty Công Nghệ NovaTech SaaS B2B (Phần mềm & B2B)**: ARR 24.1 tỷ đ, Biên gộp SaaS 78.5%, OPEX kiểm soát chặt chẽ.
*Hỗ trợ tạo doanh nghiệp mới không giới hạn và khôi phục mẫu chuẩn bất kỳ lúc nào.*

### 2. Đa Bộ Ngành (Dynamic Industry Framework Matrix)
Tự động nhận diện từ khóa ngành hoặc chọn gợi ý để khớp đúng bộ KPIs đặc thù & Lộ trình hành động 4 giai đoạn:
- **Bán lẻ & Thương mại điện tử (D2C)**: Doanh thu thuần, Biên gộp >30%, Tỷ lệ hoàn đơn <4%, Vòng quay tồn kho.
- **Chuỗi F&B / Nhà hàng**: Thực thu F&B, Tỷ lệ Food Cost <35%, Biên lãi thuần HĐKD >15%, KPI chi nhánh.
- **Phần mềm SaaS & Dịch vụ B2B**: Doanh thu định kỳ ARR/MRR, Biên gộp SaaS >70%, ROA, Tỷ lệ OPEX.
- **Sản xuất & Phân phối công nghiệp**: Giá trị xuất xưởng, Giá vốn trực tiếp <70%, Tỷ số thanh toán nhanh.
- **Vận tải & Logistics**: Doanh thu cước, Biên gộp đội xe >22%, Tỷ lệ hủy chuyến <2%, Debt/Equity.
- **Y tế & Dược phẩm**: Thực thu thuốc & khám, Biên gộp dược >35%, Current ratio >1.8, ROE.
- **Thương mại tổng hợp**: Bộ 4 chỉ số tài chính cốt lõi và lộ trình quản trị tiêu chuẩn.

### 3. Đa Mục Đích Phân Tích
- Nhập hoặc bấm nút **'⚡ Chọn "Phân tích tất cả"'** để kích hoạt phân tích 360 độ (Doanh thu, Giá vốn, BCTC VAS 200, Điểm khẩn cấp SPS, Bẫy số lượng, Dự báo dòng tiền).
- Hoặc nhập mục tiêu riêng biệt: *Tối ưu biên gộp*, *Cắt giảm đơn hủy*, *Tìm sản phẩm bán lỗ*, *Lập BCTC VAS*...

---

## ⚡ Quy Trình Chuẩn Hóa 5 Bước Chi Tiết

```
[BƯỚC 1: Tiếp Nhận Dữ Liệu] ➜ [BƯỚC 2: Làm Sạch Tự Động] ➜ [BƯỚC 3: Khung Ngành & KPIs] ➜ [BƯỚC 4: Điểm SPS & Bất Thường] ➜ [BƯỚC 5: VAS 200 Studio]
```

### Bước 1 — Tiếp Nhận Dữ Liệu & Cấu Hình (Ingestion)
- 3 trường bắt buộc: (1) Tên Công Ty (*), (2) Lĩnh Vực / Ngành Nghề (*), (3) Mục Tiêu Phân Tích (*). Chặn chuyển bước nếu chưa điền đủ.
- Nạp file đa định dạng: `.xlsx`, `.xls`, `.csv`, `.json` kèm thanh đo tốc độ ETA Countdown (~8,500 dòng/giây).
- Nạp link Google Sheet công khai (tự động chuyển sang URL xuất CSV).
- Bộ đọc SheetJS thông minh:
  - Quét toàn bộ các sheets tìm sheet có dữ liệu (bỏ qua sheet bìa trống).
  - Tự động quét 15 dòng đầu tìm dòng tiêu đề thật (Header row).
  - Tránh click đúp với `triggerFileInput` và `e.stopPropagation()`.
- Tự động điền form và chuyển sang Bước 2 sau 0.4s khi nạp file thành công.

### Bước 2 — Làm Sạch Dữ Liệu Tự Động (Data Cleaning)
- **Universal Schema Mapper**: Tự động map từ điển song ngữ Việt - Anh không dấu (Mã đơn, Tên KH, Khu vực, Ngành hàng, Sản phẩm, Số lượng, Đơn giá, Doanh thu, Giá vốn COGS, KPI, Trạng thái, Ngày).
- **Khử trùng lặp**: Giữ bản ghi đầu tiên, loại bỏ các mã đơn trùng lặp.
- **Loại trừ đơn hủy**: Loại bỏ trạng thái `hủy`, `cancel`, `da huy` khỏi doanh thu thực tế để triệt tiêu số ảo.
- **Chuẩn hóa đơn đổi trả**:
  - Trạng thái `Hoàn thành` / `Completed` là đơn thành công (Doanh thu dương).
  - Chỉ các trạng thái `Đổi trả`, `Hoàn trả`, `Trả hàng`, `Return`, `Refund` mới hạch toán giảm trừ số âm (`rev = -|rev|`).
- 4 thẻ thống kê: Tổng gốc, Đơn trùng đã lọc, Đơn hủy loại trừ, Bản ghi sạch hợp lệ; kèm Bảng Preview 15 dòng dữ liệu sạch.

### Bước 3 — Khung Ngành & Bộ KPIs Đặc Thù
- Tự động gắn nhãn ngành và mô tả trọng tâm tài chính.
- 4 thẻ KPI động được tính toán trực tiếp từ dữ liệu nạp vào kèm Benchmark chuẩn ngành.
- Lộ trình chiến lược 4 giai đoạn hành động thực tế.

### Bước 4 — Điểm Khẩn Cấp SPS & Phát Hiện Bất Thường
- **Điểm khẩn cấp SPS (Strategic Priority Score / 100)**:
  - Baseline chuẩn: 20 điểm.
  - Hụt KPI (< 80% kế hoạch: +35đ; < 95%: +15đ).
  - Tỷ lệ đổi trả (> 5% doanh số: +25đ; > 2%: +10đ).
  - Biên lợi nhuận gộp (< 25%: +20đ).
  - Phân cấp: 0-35 (🟢 Ổn định), 36-65 (🟡 Cần chú ý), 66-100 (🔴 Nguy cấp).
- **Ra-đa phát hiện bất thường tự động**:
  - **Bẫy Số Lượng (Volume Trap)**: Phát hiện sản phẩm sản lượng bán cao nhưng biên lãi < 20% gây loãng biên lợi nhuận toàn công ty.
  - Hụt KPI theo khu vực/chi nhánh.
  - Tỷ lệ đổi trả đột biến.
  - Chi nhánh có hiệu suất thấp nhất cần can thiệp.

### Bước 5 — Trung Tâm Báo Cáo VAS & Bàn Làm Việc Tương Tác
- **Executive Narrative**: Bản tóm tắt điều hành viết riêng cho Ban Giám Đốc theo ngành và số liệu thực tế, kèm nút "Viết Lại Bằng AI Thật".
- **Bộ Báo Cáo Tài Chính 4 Tab chuẩn Thông tư 200/2014/TT-BTC**:
  1. **Báo cáo KQKD (P&L)**: Mã 01 (Doanh thu gộp), Mã 02 (Giảm trừ), Mã 10 (Doanh thu thuần), Mã 11 (COGS), Mã 20 (Lợi nhuận gộp), Mã 25 (CP Bán hàng 10%), Mã 26 (CP QLDN 8%), Mã 30 (Lợi nhuận thuần HĐKD), Mã 50 (LN trước thuế), Mã 51 (Thuế TNDN 20%), Mã 60 (LN sau thuế).
  2. **Bảng Cân Đối Kế Toán**: Đảm bảo cân bằng toán học tuyệt đối: `Tổng Tài Sản = Tổng Nợ Phải Trả + Vốn Chủ Sở Hữu`.
  3. **Lưu Chuyển Tiền Tệ**: Tách bạch 3 dòng tiền: CFO (HĐKD), CFI (HĐ Đầu tư), CFF (HĐ Tài chính).
  4. **8 Chỉ Số Tài Chính Cốt Lõi**: Gross Margin, Net Margin, ROA, ROE, Current Ratio, Quick Ratio, Debt-to-Equity, Vòng quay tồn kho (chặn lỗi chia 0).
- **Live Data Editor**: Sửa trực tiếp doanh thu/chi phí chi nhánh -> Bấm "Tính Lại Toàn Bộ BCTC" cập nhật ngay cả 4 bảng và biểu đồ trong 0ms không tải lại trang.
- **Biểu đồ Chart.js Zero-Latency**: Biểu đồ cột Doanh thu vs KPI theo vùng và Biểu đồ tròn cơ cấu chi phí theo tone Sakura.
- **Xuất file đa định dạng**:
  - Xuất Excel full 4 sheet (.xlsx) bằng SheetJS.
  - Xuất PDF in ấn chuyên nghiệp (Print CSS).
  - Xuất CSV dữ liệu sạch.

---

## 🚀 Hướng Dẫn Cài Đặt & Chạy Ứng Dụng

### Cách 1: Click Đúp Chạy Ngay Trên macOS (start.command) hoặc Mở Trực Tiếp file://
- **Cách nhanh nhất trên macOS**: Click đúp vào file `start.command` trong thư mục dự án. Máy chủ `server.py` sẽ tự khởi chạy và tự động mở trình duyệt `http://localhost:3000`.
- **Hoặc mở trực tiếp file `index.html` trong trình duyệt**: Ứng dụng chạy thuần Client-Side 100%, có thể kéo thả trực tiếp file `index.html` vào Google Chrome/Safari mà không cần bất kỳ server nào!

### Cách 2: Chạy Bằng Terminal (Python Server)
Ứng dụng có sẵn máy chủ hybrid `server.py` xử lý cả web static và proxy AI API:
```bash
python3 server.py
```
👉 Mở trình duyệt và truy cập: **`http://localhost:3000`**

### Cách 3: Triển Khai 1-Click Lên Vercel
Dự án đã cấu hình đầy đủ `vercel.json`, `package.json` chuẩn ESM `"type": "module"` và `api/chat.js`:
1. Đẩy mã nguồn lên GitHub.
2. Truy cập [vercel.com](https://vercel.com) -> New Project -> Chọn Repository -> Deploy.
3. *(Tùy chọn)* Cấu hình biến môi trường trên Vercel:
   - `GEMINI_API_KEY`: Khóa API Google Gemini.
   - `OPENAI_API_KEY`: Khóa API OpenAI.

---

## 📂 Cấu Trúc Mã Nguồn

```
├── index.html              # Toàn bộ giao diện SPA & Engine phân tích Client-Side
├── api/
│   └── chat.js             # Vercel Serverless Function ESM (CORS, Gemini/OpenAI/Sakura Engine)
├── data/
│   ├── an_phuoc_fashion.csv # Tệp dữ liệu mẫu Bán lẻ & TMĐT
│   ├── highlands_coffee.csv # Tệp dữ liệu mẫu Chuỗi F&B / Nhà hàng
│   └── novatech_saas.csv    # Tệp dữ liệu mẫu Phần mềm SaaS B2B
├── server.py               # Local Hybrid Server bằng Python 3 chuẩn
├── package.json            # Cấu hình chuẩn ESM "type": "module"
├── vercel.json             # Cấu hình định tuyến & serverless Vercel
└── README.md               # Tài liệu hướng dẫn chi tiết
```

---

*Phát triển bởi Chuyên Gia Kỹ Sư Phần Mềm Full-Stack & Chuyên Gia Kế Toán Tài Chính Cấp Cao — OmniAnalyst AI Studio 🌸 Sakura Edition.*
