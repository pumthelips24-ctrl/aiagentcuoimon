#!/usr/bin/env python3
"""
OmniAnalyst Studio — Nền tảng Phân tích Dữ liệu & Quản trị Tài chính Doanh nghiệp
Local Enterprise Server
"""

import os
import sys
import json
import urllib.request
from http.server import HTTPServer, SimpleHTTPRequestHandler

PORT = 3000
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

class EnterpriseRequestHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=BASE_DIR, **kwargs)

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
        self.end_headers()

    def do_POST(self):
        if self.path in ('/api/chat', '/api/chat.js'):
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length).decode('utf-8')
            
            try:
                body = json.loads(post_data) if post_data else {}
            except Exception:
                body = {}

            response_data = self.handle_ai_chat(body)
            
            resp_bytes = json.dumps(response_data, ensure_ascii=False).encode('utf-8')
            self.send_response(200)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.send_header('Content-Length', str(len(resp_bytes)))
            self.end_headers()
            self.wfile.write(resp_bytes)
        else:
            self.send_error(404, "Endpoint not found")

    def handle_ai_chat(self, body):
        message = body.get('message', '')
        character = body.get('character', 'minh_anh')
        company = body.get('company', {})
        financial_data = body.get('financialData', {})
        api_key = body.get('apiKey', '')
        provider = body.get('provider', 'gemini')

        company_name = company.get('name', 'Doanh Nghiệp')
        industry = company.get('industry', 'Thương mại')
        goal = company.get('goal', 'Phân tích tất cả')

        is_quoc_bao = character in ('quoc_bao', 'haruto')
        char_name = 'Quốc Bảo (Kế toán Trưởng & CFO)' if is_quoc_bao else 'Minh Anh (Cố vấn Chiến lược & Vận hành)'

        # Thử gọi Gemini API nếu có API key
        if api_key and provider == 'gemini':
            try:
                url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={api_key}"
                prompt_content = f"Bạn là {char_name} thuộc OmniAnalyst Studio. Doanh nghiệp: {company_name} - Phân ngành: {industry} - Mục tiêu: {goal}. Yêu cầu của người dùng: {message}. Hãy phân tích chuẩn xác theo Thông tư 200/2014/TT-BTC, văn phong kiểm toán chuyên nghiệp, không bịa đặt số liệu."
                req = urllib.request.Request(
                    url,
                    data=json.dumps({
                        "contents": [{"parts": [{"text": prompt_content}]}],
                        "generationConfig": {"temperature": 0.7}
                    }).encode('utf-8'),
                    headers={'Content-Type': 'application/json'}
                )
                with urllib.request.urlopen(req, timeout=8) as resp:
                    if resp.status == 200:
                        res_json = json.loads(resp.read().decode('utf-8'))
                        text = res_json.get('candidates', [{}])[0].get('content', {}).get('parts', [{}])[0].get('text', '')
                        if text:
                            return {"success": True, "character": character, "provider": "gemini", "reply": text}
            except Exception:
                pass

        # Embedded Fallback
        prefix = '[Quốc Bảo - Kế toán Trưởng & CFO]:' if is_quoc_bao else '[Minh Anh - Cố vấn Chiến lược & Vận hành]:'
        rev_val = financial_data.get('netRevenue')
        rev_str = f"{rev_val/1e9:.2f} tỷ VNĐ" if rev_val else "Chưa có dữ liệu"
        sps = financial_data.get('spsScore', 45)
        gm = financial_data.get('grossMargin', 0)

        reply = f"{prefix} Kính chào Ban Giám Đốc {company_name}! Doanh thu thuần thực tế đạt {rev_str}, Biên lợi nhuận gộp {gm}%, Điểm rủi ro và ưu tiên xử lý là {sps}/100. Tôi khuyến nghị kiểm soát chặt chẽ các khoản chi phí bán hàng và chi phí quản lý doanh nghiệp, đồng thời rà soát tỷ lệ đổi trả để đảm bảo an toàn dòng tiền hoạt động kinh doanh (CFO)."

        return {
            "success": True,
            "character": character,
            "provider": "enterprise-engine",
            "reply": reply
        }

def run_server():
    os.chdir(BASE_DIR)
    server_address = ('', PORT)
    httpd = HTTPServer(server_address, EnterpriseRequestHandler)
    print(f"=================================================================")
    print(f"  OmniAnalyst Studio — Nền tảng Phân tích & Quản trị Doanh nghiệp")
    print(f"  Máy chủ đang hoạt động tại: http://localhost:{PORT}")
    print(f"=================================================================")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass

if __name__ == '__main__':
    run_server()
