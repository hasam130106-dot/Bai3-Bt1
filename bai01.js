

class SinhVien {
    constructor(maSV, hoTen, tuoi, diem) {
        this.maSV = maSV;
        this.hoTen = hoTen;
        this.tuoi = tuoi;
        this.diem = diem;
    }
}

//  Khai bao danh sach 5 sinh vien
const danhSachSinhVien = [
    new SinhVien("SV01", "Lam Minh Khang", 20, 8.5),
    new SinhVien("SV02", "Vo Thanh Phuc", 21, 6.5),
    new SinhVien("SV03", "Pham Hoang Hai", 19, 4.5),
    new SinhVien("SV04", "Nguyen Quoc Huy", 20, 9.0),
    new SinhVien("SV05", "Ha Van Sam", 22, 3.5)
];

//  Su dung arrow function loc sinh vien co diem >= 5
const sinhVienDat = danhSachSinhVien.filter(
    (sv) => sv.diem >= 5
);

//  Hien thi danh sach sinh vien
console.log("===== DANH SACH TAT CA SINH VIEN =====");
console.log(danhSachSinhVien);

//  Hien thi sinh vien dat yeu cau
console.log("===== SINH VIEN CO DIEM TU 5 TRO LEN =====");
console.log(sinhVienDat);

