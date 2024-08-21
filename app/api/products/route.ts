import { NextResponse } from "next/server";
/*
    các phương thức làm việc với API theo chuẩn 
    
    1. GET: lấy về
    2. POST: thêm mới
    3. PUT: cập nhật tất cả
    4. PATCH: sửa 1 phần
    5. DELETE: xóa
    - tên của function là tên của phương thức và viết hoa hết lên
 */
    // data lay o dau
let products = [
    {
        id:1,
        name: "iphone5",
        price: 5000
    },
    {
        id:2,
        name: "men men",
        price: 4000
    },
    {
        id:3,
        name: "iphone15",
        price: 5000
    }
]
export async function GET() {
    return NextResponse.json({
        message:"lấy danh sách sản phẩm thành công!",
        data: products,
    });
}