const shop = [
  {
    id: 0,
    name: "Bún bò Thái Anh",
    imageUrl: [],
    email: "",
    phone: "",
    social: [
      {
        name: "Facebook",
        link: "https://www.facebook.com/bunbothaianh",
      },
      {
        name: "Instagram",
        link: "https://www.instagram.com/bunbothaianh",
      },
    ],
    address: [
      {
        district: "Quận 1",
        province: "Hồ Chí Minh",
        city: "Hồ Chí Minh",
        specificAddress: "123 Nguyễn Du",
      },
      {
        district: "Quận 2",
        province: "Hồ Chí Minh",
        city: "Hồ Chí Minh",
        specificAddress: "123 Nguyễn Du",
      },
    ],
    menu: [
      {
        id: 0, // menu id
        name: "Bún bò Huế",
        type: "bát",
        price: "35000",
        currency: "đ",
        rating: 3,
        reviews: {
          reviewCount: 100,
          reviewDetail: [
            {
              id: 0,
              name: "Nguyễn Phi Tuan Anh",
              email: "hihi@gmail.com",
              rating: 4,
              comment: "ngon",
            },
            {
              id: 1,
              name: "Nguyễn Phi",
              email: "hihi@gmail.com",
              rating: 3,
              comment: "bình thường",
            },
          ],
        },
      },
      {
        id: 1,
        name: "Bún bò Nam Giao",
        type: "bát",
        price: "40000",
        currency: "đ",
        rating: 2,
        reviews: 311,
      },
      {
        id: 2,
        name: "Quẩy",
        type: "cái",
        price: "5000",
        currency: "đ",
        rating: 1,
        reviews: 10,
      },
    ],
    ratting: 4.5,
    reviews: 1000,
  },
];

const shops = [
  {
    id: 0,
    name: "Bún bò Thái Anh",
    imageUrl: ["https://static.vinwonders.com/production/bun-bo-hue-cau-giay-1.jpg"],
    email: "contact@bunbothaianh.com",
    phone: "0909-123-456",
    priceRange: "35000 - 40000",
    social: [
      {
        name: "Facebook",
        link: "https://www.facebook.com/bunbothaianh",
      },
      {
        name: "Instagram",
        link: "https://www.instagram.com/bunbothaianh",
      },
    ],
    address: [
      {
        district: "Quận 1",
        province: "Hồ Chí Minh",
        city: "TP Hồ Chí Minh",
        specificAddress: "123 Nguyễn Du",
      },
      {
        district: "Quận 2",
        province: "Hồ Chí Minh",
        city: "TP Hồ Chí Minh",
        specificAddress: "123 Nguyễn Du",
      },
    ],
    menu: [
      {
        id: 0,
        name: "Bún bò Huế",
        type: "bát",
        price: "35000",
        currency: "đ",
        rating: 3,
        reviews: {
          reviewCount: 100,
          reviewDetail: [
            {
              id: 0,
              name: "Nguyễn Phi Tuấn Anh",
              email: "user1@example.com",
              rating: 4,
              comment: "Ngon lắm!",
            },
            {
              id: 1,
              name: "Trần Văn B",
              email: "user2@example.com",
              rating: 3,
              comment: "Bình thường.",
            },
          ],
        },
      },
      {
        id: 1,
        name: "Bún bò Nam Giao",
        type: "bát",
        price: "40000",
        currency: "đ",
        rating: 2,
        reviews: {
          reviewCount: 200,
          reviewDetail: [
            {
              id: 0,
              name: "Nguyễn Văn A",
              email: "nguyenvana@gmail.com",
              rating: 2,
              comment: "Nhạt.",
            },
            {
              id: 1,
              name: "Trần Văn B",
              email: "tranvanb@gmail.com",
              rating: 3,
              comment: "Bình thường",
            },
          ],
        },
      },
      {
        id: 2,
        name: "Quẩy",
        type: "cái",
        price: "5000",
        currency: "đ",
        rating: 1,
        reviews: {
          reviewCount: 0,
          reviewDetail: [],
        },
      },
    ],
    rating: 4,
    reviews: 1000,
  },
  {
    id: 1,
    name: "Phở Gia Truyền Bát Đàn",
    imageUrl: ["https://sakos.vn/wp-content/uploads/2024/07/1658123252-cover_pho-1.jpg"],
    email: "contact@phogiabatdan.com",
    phone: "0912-654-789",
    priceRange: "45000",
    social: [
      {
        name: "Facebook",
        link: "https://www.facebook.com/phogiabatdan",
      },
    ],
    address: [
      {
        district: "Quận Hoàn Kiếm",
        province: "Hà Nội",
        city: "Hà Nội",
        specificAddress: "49 Bát Đàn",
      },
    ],
    menu: [
      {
        id: 0,
        name: "Phở tái",
        type: "bát",
        price: "45000",
        currency: "đ",
        rating: 5,
        reviews: {
          reviewCount: 200,
          reviewDetail: [
            {
              id: 0,
              name: "Lê Thị C",
              email: "user3@example.com",
              rating: 5,
              comment: "Phở ngon, nước dùng đậm đà.",
            },
          ],
        },
      },
      {
        id: 1,
        name: "Phở chín",
        type: "bát",
        price: "45000",
        currency: "đ",
        rating: 4,
        reviews: 150,
      },
    ],
    rating: 4.7,
    reviews: 500,
  },
  {
    id: 2,
    name: "Cơm Tấm Cali",
    imageUrl: ["https://www.comtamcali.com/images/slider1.jpg"],
    email: "contact@comtamcali.com",
    phone: "0987-123-456",
    priceRange: "55000 - 60000",
    social: [
      {
        name: "Facebook",
        link: "https://www.facebook.com/comtamcali",
      },
    ],
    address: [
      {
        district: "Quận 3",
        province: "Hồ Chí Minh",
        city: "TP Hồ Chí Minh",
        specificAddress: "236 Pasteur",
      },
    ],
    menu: [
      {
        id: 0,
        name: "Cơm tấm sườn bì chả",
        type: "phần",
        price: "60000",
        currency: "đ",
        rating: 4,
        reviews: 300,
      },
      {
        id: 1,
        name: "Cơm tấm sườn nướng",
        type: "phần",
        price: "55000",
        currency: "đ",
        rating: 4.5,
        reviews: 250,
      },
    ],
    rating: 4.6,
    reviews: 800,
  },
  {
    id: 3,
    name: "Bánh Mì Huỳnh Hoa",
    imageUrl: ["https://kenh14cdn.com/203336854389633024/2024/4/3/photo-3-1712150817655382515566.png"],
    email: "contact@banhmihuynhhoa.com",
    phone: "0923-456-789",
    priceRange: "55000",
    social: [
      {
        name: "Facebook",
        link: "https://www.facebook.com/banhmihuynhhoa",
      },
    ],
    address: [
      {
        district: "Quận 1",
        province: "Hồ Chí Minh",
        city: "TP Hồ Chí Minh",
        specificAddress: "26 Lê Thị Riêng",
      },
    ],
    menu: [
      {
        id: 0,
        name: "Bánh mì thập cẩm",
        type: "ổ",
        price: "55000",
        currency: "đ",
        rating: 5,
        reviews: 500,
      },
    ],
    rating: 4.8,
    reviews: 1000,
  },
  {
    id: 4,
    name: "Bún Chả Hàng Mành",
    imageUrl: ["https://mms.img.susercontent.com/vn-11134513-7r98o-lsv85ff04i4k1a@resize_ss1242x600!@crop_w1242_h600_cT"],
    email: "contact@bunchahangmanh.com",
    phone: "0908-765-432",
    priceRange: "40000",
    social: [
      {
        name: "Instagram",
        link: "https://www.instagram.com/bunchahangmanh",
      },
    ],
    address: [
      {
        district: "Quận Hoàn Kiếm",
        province: "Hà Nội",
        city: "Hà Nội",
        specificAddress: "1 Hàng Mành",
      },
    ],
    menu: [
      {
        id: 0,
        name: "Bún chả",
        type: "phần",
        price: "40000",
        currency: "đ",
        rating: 4.5,
        reviews: {
          reviewCount: 400,
          reviewDetail: [
            {
              id: 0,
              name: "Phạm Văn D",
              email: "user4@example.com",
              rating: 5,
              comment: "Chả thơm, nước chấm tuyệt vời.",
            },
          ],
        },
      },
    ],
    rating: 4.5,
    reviews: 700,
  },
  {
    id: 5,
    name: "Nem Nướng Nha Trang",
    imageUrl: ["https://mia.vn/media/uploads/blog-du-lich/diem_ten_10_quan_nem_nuong_nha_trang_ngon_quen_loi_ve_1-1623088085.jpg"],
    email: "contact@nemnuongnhatrang.com",
    phone: "0934-567-890",
    priceRange: "50000",
    social: [
      {
        name: "Facebook",
        link: "https://www.facebook.com/nemnuongnhatrang",
      },
    ],
    address: [
      {
        district: "Quận Phú Nhuận",
        province: "Hồ Chí Minh",
        city: "TP Hồ Chí Minh",
        specificAddress: "123 Phan Xích Long",
      },
    ],
    menu: [
      {
        id: 0,
        name: "Nem nướng",
        type: "phần",
        price: "50000",
        currency: "đ",
        rating: 4.2,
        reviews: 250,
      },
    ],
    rating: 4.4,
    reviews: 600,
  },
];

const plan = [
  {
    id: 0,
    planCode: "plan00",
    planName: "Basic",
    monthAvailable: "1",
    status: "active",
    pricePerMonth: "20000",
    totalPrice: "20000",
  },
  {
    id: 1,
    planCode: "plan01",
    planName: "Standard",
    monthAvailable: "6",
    status: "active",
    pricePerMonth: "15000",
    totalPrice: "90000",
  },
  {
    id: 2,
    planCode: "plan02",
    planName: "Premium",
    monthAvailable: "12",
    status: "active",
    pricePerMonth: "12000",
    totalPrice: "144000",
  },
];

const user = [
  {
    id: 0,
    fullName: "Nguyễn Phi Tuan Anh",
    role: "user",
    email: "anhnpthe17099@fpt.edu.vn",
    phone: "0911111111",
    address: "Dương Liễu, Hoài Đức, Hà Nội",
    plan: {
      id: 0, // plan id
      planCode: "plan01",
      type: "6 months",
      startDate: "2021-01-01",
      endDate: "2022-01-01",
    },
    favoriteShop: [
      {
        id: 0,
        shopId: 0,
        menuId: 0,
      },
      {
        id: 1,
        shopId: 0,
        menuId: 1,
      },
    ],
    bill: [
      {
        id: 0,
        billCode: "bill01",
        bankName: "Vietcombank",
        plan: {
          planCode: "plan01",
          type: "6 months",
          pricePerMonth: "15000",
          total: "90000",
        },
        account: "Van Minh Tuan",
        title: "chuyen khoan nang cap acc",
        totalPrice: "100000",
        date: "2021-12-01 12:00:00",
        status: "success",
      },
      {
        id: 1,
        billCode: "bill02",
        bankName: "MBBank",
        plan: {
          planCode: "plan02",
          type: "12 months",
          pricePerMonth: "12000",
          total: "144000",
        },
        account: "Nguyen Phi Tuan Anh",
        title: "chuyen khoan nang cap acc",
        totalPrice: "200000",
        date: "2021-11-01 12:00:00",
        status: "success",
      },
    ],
  },
];

const food = [
  {
    id: 0,
    name: "Bún bò Huế",
  },
  {
    id: 1,
    name: "Bún bò Nam Giao",
  },
  {
    id: 2,
    name: "Quẩy",
  },
  {
    id: 3,
    name: "Cơm tấm sườn nướng",
  },
];

/**
 * - import thằng food vào shop
 * - cần có function để check xem food đã có trong db chưa - function checkFoodExist
 * - favorite shop sẽ là danh sách các shop, xong cho filter = tên món ăn thì ra các shop có món đó
 * - trang favorite thì sẽ có cái filter search = chọn tên món / tên quán  + filter khoảng giá tiền + đã ăn gần đây + khu vực/ vị trí (gọi api hết)
 */

export default { shop, shops, plan, user, food };
