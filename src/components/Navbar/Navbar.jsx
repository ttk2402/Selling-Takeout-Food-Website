import React, { useState } from "react";
import logo from "../../assets/logo.png";
import cart from "../../assets/cart.png";

const Navbar = () => {
  const categories = [
    {
      id: 1,
      title: "Hạt Tách Vỏ",
      url_image_category:
        "https://picture.miafood.vn/Gallery/ThumbPhone_20240606200257218.png",
    },
    {
      id: 2,
      title: "Trái Cây Sấy Dẻo",
      url_image_category:
        "https://picture.miafood.vn/Gallery/ThumbPhone_20240606200330687.png",
    },
    {
      id: 3,
      title: "Kẹo",
      url_image_category:
        "https://picture.miafood.vn/Gallery/ThumbPhone_20240606200013156.png",
    },
    {
      id: 4,
      title: "Khô Tẩm Vị",
      url_image_category:
        "https://picture.miafood.vn/Gallery/ThumbPhone_20240606200028453.png",
    },
    {
      id: 5,
      title: "Bánh Trung Thu",
      url_image_category:
        "https://picture.miafood.vn/Gallery/ThumbPhone_20240807141354671.png",
    },
  ];

  const [quantity, setQuantity] = useState(0);

  return (
    <div className="navbar">
      <div className="navbar-start w-1/5 justify-start">
        <a className="w-full" href="/">
          <img src={logo} alt="" className="w-full" />
        </a>
      </div>
      <div className="navbar-center w-2/3 justify-around">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/trangchu" className=" text-base font-bold">
              Trang chủ
            </a>
          </li>
          <li>
            <details>
              <summary className=" text-base font-bold">Danh mục</summary>
              <ul className="p-2 w-64 z-10">
                {categories.map((category) => (
                  <li key={category.id} className="flex items-start p-2 w-full">
                    <a
                      href={`/category/${category.id}`}
                      className="text-base font-medium w-full"
                    >
                      {category.title}
                    </a>
                  </li>
                ))}
                {/* <li>
                  <a href="/thucan" className=" text-base font-bold">
                    <img src={cart} alt="" />
                    Thức ăn
                  </a>
                </li>
                <li>
                  <a href="/nuocuong" className=" text-base font-bold">
                    <img src={cart} alt="" />
                    Nước uống
                  </a>
                </li> */}
              </ul>
            </details>
          </li>
          <li>
            <a href="/donhang" className=" text-base font-bold">
              Đơn hàng
            </a>
          </li>
          <li>
            <a href="/lienhe" className=" text-base font-bold">
              Liên hệ
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end justify-around">
        <div className="indicator">
          <span className="indicator-item badge badge-info ">{quantity}</span>
          <a href="/cart" className="btn btn-ghost">
            <img src={cart} alt="" />
          </a>
        </div>
        <div className="">
          <a href="/dangnhap" className="btn btn-ghost text-base">
            Đăng nhập
          </a>
          <span>|</span>
          <a href="/dangky" className="btn btn-ghost text-base">
            Đăng ký
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
