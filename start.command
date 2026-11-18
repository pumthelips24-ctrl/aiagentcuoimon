#!/bin/bash
cd "$(dirname "$0")"
echo "=================================================================="
echo "  OmniAnalyst Studio — Nền tảng Quản trị & Phân tích Doanh nghiệp"
echo "  Đang khởi động máy chủ tại: http://localhost:3000..."
echo "=================================================================="
sleep 1
open "http://localhost:3000"
python3 server.py
