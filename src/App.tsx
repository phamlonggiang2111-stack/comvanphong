/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Leaf, 
  Utensils, 
  ChevronRight, 
  CheckCircle2, 
  Star, 
  MessageSquare,
  Facebook,
  Instagram,
  ShoppingBag
} from "lucide-react";
import { useState, useEffect } from "react";

const LOGO_URL = "https://scontent.fvii1-1.fna.fbcdn.net/v/t39.30808-1/545726967_1378435964283689_6223583514549735660_n.jpg?stp=cp0_dst-jpg_s60x60_tt6&_nc_cat=101&ccb=1-7&_nc_sid=11a88f&_nc_eui2=AeFrl04KBlgLnIN5FV0BjXGvv4GuGSrD92C_ga4ZKsP3YHPMgTxkrrW5pvL9Kdf04E3Y6PLW9EKLDAaNstTTPlAr&_nc_ohc=Fooohy9hlS4Q7kNvwFAdL-I&_nc_oc=Adr7xrYUwKzJ8VpR0z5d1kPYqD5juTbndXsOdKHrLB-SDQM3w3D9MTqDkKPtab3Sa9M&_nc_zt=24&_nc_ht=scontent.fvii1-1.fna&_nc_gid=-4hDWa4plnxnJa4eim74vQ&_nc_ss=7b2a8&oh=00_Af75TyPoTP-x5pLlCYTjUnPzLpp_4hYDNFxyw84hkJ7beQ&oe=6A0FB5E1";

const MENU_ITEMS = [
  {
    name: "Suất cơm đùi gà",
    price: "45.000đ",
    image: "https://scontent.fvii1-1.fna.fbcdn.net/v/t39.30808-6/699442801_1612920034168613_6837800735730961784_n.jpg?stp=c0.241.941.941a_dst-jpg_s206x206_tt6&_nc_cat=106&ccb=1-7&_nc_sid=714c7a&_nc_eui2=AeEhA8g0YX8P_t89my7TUpLZHnta7Azikq4ee1rsDOKSrluk4fx1we-cNgUB4LN2rcoqvpRamZqUF2rlU7rL3L4x&_nc_ohc=AJ_YSeRhNeQQ7kNvwGXy4zh&_nc_oc=Adr9Qkz2x7rsr7bTnLVvASIBE_G_Pl1TgRv0mNooWepl17EkX-SXj-1ciWO3Jq1w1Zg&_nc_zt=23&_nc_ht=scontent.fvii1-1.fna&_nc_gid=5e_RrQ8scSqBzdGlPfBYkQ&_nc_ss=7b2a8&oh=00_Af5DVdeWkvSfyaLfF3H5VsVj9Yw5IzTof8NRk26ERPbdXQ&oe=6A0FAA80",
    tags: ["Best Seller", "Ngon Đậm Đà"]
  },
  {
    name: "Cơm gà chiên mắm",
    price: "40.000đ",
    image: "https://scontent.fvii1-1.fna.fbcdn.net/v/t39.30808-6/702508831_1612905830836700_6761713469729805826_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE-qcIooV55D_Jq_wPbvLkz7kb-Ay6hDkjuRv4DLqEOSNkUKh8RyXFYbav7Oen77u2r7WMkijiSI2_B3Uat5-S-&_nc_ohc=Xg3XfTjDwecQ7kNvwFc6zvT&_nc_oc=Adp1jdVoPFJX43OVeUGS9totoZ0UHjsE83-eT2GtIk1Vv4-c6gzw4fr9DatwSnhW5AM&_nc_zt=23&_nc_ht=scontent.fvii1-1.fna&_nc_gid=M-WIyYCpXASfClwDlM9YHQ&_nc_ss=7b2a8&oh=00_Af7BxcJuxLnRHlDz_30_tVLjHWe3XJStQiIR2GlrvObsNQ&oe=6A0FB334",
    tags: ["Giòn Tan", "Hấp Dẫn"]
  },
  {
    name: "Cơm sườn chua ngọt",
    price: "40.000đ",
    image: "https://scontent.fvii1-1.fna.fbcdn.net/v/t39.30808-6/657331829_1564131192380831_859003710955395740_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHn2TDxBbNAejP-3jdhJQYU-YKo4vU7Tbn5gqji9TtNuVqiOm2V0Elj0oGpcSgACSQZbWApIe0wWkqjLOpQaPgx&_nc_ohc=KmzStHkF-LEQ7kNvwEuonLr&_nc_oc=Adrcp0DnoaUKoPPFFI3DnpfXvNDW6mjW4rQn5Xt5MXrOHtgmVpISG5JykuO_5eWdP5A&_nc_zt=23&_nc_ht=scontent.fvii1-1.fna&_nc_gid=sxxY7mi50tKwfgQn6Dq60A&_nc_ss=7b2a8&oh=00_Af7FSePGGNkPEQzsFEzqaayZTMSQj28mJB_HygZuH3CJKg&oe=6A0FAB4B",
    tags: ["Chuẩn Vị", "Phổ Biến"]
  },
  {
    name: "Cơm sườn cay",
    price: "40.000đ",
    image: "https://scontent.fvii1-1.fna.fbcdn.net/v/t39.30808-6/681980343_1594782092649074_7306586276514809935_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEIJH6lUwDSXmfCuHDqKbdGhulUvAttDaCG6VS8C20NoEh8UEoHjxfA-bGMwr1enssu5Gh8YKmQWtnh96CLFCYI&_nc_ohc=JYVb72fZynMQ7kNvwH8QVcg&_nc_oc=Ado4FxxCtLph7nSLrq3EHv8_3imsHWpiCG801QdeKrYKjCsa4emxGVB2CvqZd_2DFlE&_nc_zt=23&_nc_ht=scontent.fvii1-1.fna&_nc_gid=5hGdTUXJZ22A11HA2Dv86A&_nc_ss=7b2a8&oh=00_Af7CkLzPSQeHyTdm1okBpsDzcsZnvUjsQJxC15SzTp38-g&oe=6A0FC8AE",
    tags: ["Đậm Đà", "Cay Nồng"]
  },
  {
    name: "Cơm thịt kho trứng",
    price: "40.000đ",
    image: "https://scontent.fvii1-1.fna.fbcdn.net/v/t39.30808-6/659151711_1571553658305251_2700087177016165784_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFiP92l-sAjrYJfT_-NwiCHY4YoAPyKVtVjhigA_IpW1SMZfTg92epqsEJmC7EiVw4akMRglpzI8OSK17aJgrCL&_nc_ohc=yINob0GUE20Q7kNvwFhjbOo&_nc_oc=AdolsP2hoR6uDKmmNhwiTCoZ9gWx_RfLbGaHDZs0DwvqT2TDYneW7r3iSLq5qRT2Dnk&_nc_zt=23&_nc_ht=scontent.fvii1-1.fna&_nc_gid=00Q5tRR0_ssdzOihn-i9dA&_nc_ss=7b2a8&oh=00_Af6uDhb5-e01P-D6PLvLRXpmVZzHUepDNQM_iix8YVTXRw&oe=6A0FA8F1",
    tags: ["Gia Đình", "Mềm Ngon"]
  },
  {
    name: "Cơm cá thu sốt cà",
    price: "40.000đ",
    image: "https://scontent.fvii1-1.fna.fbcdn.net/v/t39.30808-6/659588048_1571339574993326_7011893052727438333_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeE-nxOOnhCIMdz-5RKT0aGCAEFS3HOlN5YAQVLcc6U3lhNQ_RVBNBur8SCwLtNnAH5veyfXmIIdZ79Ejyu9K35W&_nc_ohc=Ez8GvwvslUMQ7kNvwFTSF0U&_nc_oc=AdpFCk6g319ebSV33_HoEUfKE28uQdwME2arHo4zGzHteAoIux1FEDW5kgcc-Qn_3Uw&_nc_zt=23&_nc_ht=scontent.fvii1-1.fna&_nc_gid=8LeQKEYpHexOAl7WQKjsow&_nc_ss=7b2a8&oh=00_Af65ElDOwAJVdvt_6pTLd5ZBI2xABd4V5CAyC8-D2_SfbQ&oe=6A0FCC7E",
    tags: ["Bổ Dưỡng", "Thanh Đạm"]
  }
];

const GALLERY_IMAGES = [
  "https://scontent.fvii1-1.fna.fbcdn.net/v/t39.30808-6/624722081_1515261240601160_1713474683718587376_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFLgr2Cgj2HJXzszg1bhCD1NkwIJZjSTUg2TAglmNJNSNX9navrJywGkZUvHdKg0BcD7nYqwSnTlASBQFp1j3M7&_nc_ohc=Edk8EaGSO9sQ7kNvwFLL_kK&_nc_oc=AdomoYfIV4QrPt63Tsm55MHsxtgNpq17z8OXK4y4hASXAowZoScJ4siEyyDZY3XzVsU&_nc_zt=23&_nc_ht=scontent.fvii1-1.fna&_nc_gid=NmyVwTWx41aqMzy0irJJSw&_nc_ss=7b2a8&oh=00_Af5jWxItxnoqEmeQK6ZJFZham4gKS0AhPSYO2Rt2kuCuMw&oe=6A0FCCE3",
  "https://scontent.fvii1-1.fna.fbcdn.net/v/t39.30808-6/625576977_1515261160601168_3856575613629463367_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGD3dpbO8zv413XbfNKOI8eyZjUE7lEU0nJmNQTuURTSaZ9qe90UZhjJJqxCVlmMvjh56oTm0YgWlV68kHyxZnf&_nc_ohc=LN1lyKHCRjoQ7kNvwHLIMvc&_nc_oc=AdpK3nkPsgtUYDDfA_OENq1CnltjFuK5Me6GbJ5-bdwNVdeIYK8raqg917-c6P0uyVo&_nc_zt=23&_nc_ht=scontent.fvii1-1.fna&_nc_gid=_gEQXpylkDs1EWj6FxXwWw&_nc_ss=7b2a8&oh=00_Af7MFydyFyNqMHcofJzMJhDp5YYHsf3Yt8XfXsf82maCAQ&oe=6A0FA726",
  "https://scontent.fvii1-1.fna.fbcdn.net/v/t39.30808-6/656945933_1560923356034948_4411157362045288773_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGV2pHEFwY6wDawpGPysdOumlTBYmgrEy-aVMFiaCsTL7ypN4DCb7zbLURg4oPCtPTsgIy4_TtVHfZuNgoUmvKY&_nc_ohc=hn8tF0CXAI0Q7kNvwFkBiYE&_nc_oc=AdqlrRojc6b2cgVWtWSSRrBgbSM_3-UjHGhYFMAJlEjh0FlkJykTFT7WoveeRwY_AOk&_nc_zt=23&_nc_ht=scontent.fvii1-1.fna&_nc_gid=JEKyqz7yz8RTODFJ4s0LfA&_nc_ss=7b2a8&oh=00_Af6kDcZCzeWlNw2QkVv5wkwL5mR8p3HmYJOuQpqXzacXQQ&oe=6A0FC1C2"
];

const AMBIANCE_IMAGES = [
  "https://scontent.fvii1-1.fna.fbcdn.net/v/t39.30808-6/654317064_1559764482817502_4649569321720575751_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEI0xVuMXJMYO_CieLe2A6B2_Qz9TIM_8jb9DP1Mgz_yGzX9EF7BwKgZLhNzb3jAr9JLRoNz__a8DIKGgXu75NX&_nc_ohc=-ullkO-QAkEQ7kNvwFXJ5IX&_nc_oc=AdqSQoFNBUT_S-GYJu2DFqjJ3BnpnbKowoBNdpGEzWRn_hEIdrv7C_611Wk003OS7gU&_nc_zt=24&_nc_ht=scontent.fvii1-1.fna&_nc_gid=BQuPzoMgfMhv__kELc4JfQ&_nc_ss=7b2a8&oh=00_Af5IWi3xmGqiBDNa1odo-OgpjugvNrhG4sCscsnhVgAuOA&oe=6A0FA389",
  "https://scontent.fvii1-1.fna.fbcdn.net/v/t39.30808-6/656049864_1558175022976448_1617341243923268378_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGJaM3S0wtKguRQmNv9fK9vNzPPllfogbQ3M8-WV-iBtABnGOEMfE7YKLBC1jkQjqgNnUfJRsOBjwz7xQCTM5uQ&_nc_ohc=tFwCAUDOlBkQ7kNvwFU6c_k&_nc_oc=AdqQy4J71HQwfScPM7hwjNiGiAxScGVEzfDiaWxJrd6diFm3Lb5HSeoRqiW-0EjX0kY&_nc_zt=23&_nc_ht=scontent.fvii1-1.fna&_nc_gid=z8gZixz1fee_B4UL4C1Orw&_nc_ss=7b2a8&oh=00_Af5stf_guwI_5RdTIL-9AEXqfUJWQZUKxz9UC5Ki1N8csw&oe=6A0FA184",
  "https://scontent.fvii1-1.fna.fbcdn.net/v/t39.30808-6/649884128_1550216163772334_1503424048536088375_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEMDL_-VMnPSaIPp1PIYrMJNsF0VuZKyKA2wXRW5krIoJGMb9uEJDJYMDhht4UsEXfKvpa674Z-x0eowiKzR4Su&_nc_ohc=K6eBPN12sh0Q7kNvwFDzBYK&_nc_oc=AdqtM8855iSzhdGlG01NA9CwjBCW7HRZ5TPXoN9uXGRVXK5OwtXRm-60y7JI1adtg3o&_nc_zt=23&_nc_ht=scontent.fvii1-1.fna&_nc_gid=_NMdvqiaf_90-6sg5bC91Q&_nc_ss=7b2a8&oh=00_Af60YoZlH_3y__mDc3j7030ItjY0F7YjlfLybjO4Z3Qk-w&oe=6A0F9C0C"
];

const TESTIMONIALS = [
  {
    name: "Chị Ngọc Lan",
    role: "Kế toán trưởng",
    content: "Suốt 2 năm qua mình chỉ đặt cơm ở đây. Cơm luôn nóng hổi, giao đúng 11h30 không bao giờ trễ. Rất yên tâm về vệ sinh!",
    stars: 5
  },
  {
    name: "Anh Minh Đức",
    role: "Lập trình viên",
    content: "Đồ ăn nêm nếm rất vừa miệng, thực đơn thay đổi hàng ngày nên không bị ngán. Giá 40k mà chất lượng như cơm nhà làm.",
    stars: 5
  },
  {
    name: "Chị Thu Trang",
    role: "Nhân viên văn phòng",
    content: "Cơm sườn chua ngọt là món tủ của mình. Giao hàng nhanh, shipper nhiệt tình, hộp cơm sạch sẽ chuyên nghiệp.",
    stars: 5
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-3 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={LOGO_URL} alt="Logo" className="w-10 h-10 rounded-full border-2 border-brand-primary" referrerPolicy="no-referrer" />
            <span className={`font-display font-bold text-xl ${isScrolled ? "text-slate-900" : "text-slate-900"}`}>
              Cơm Văn Phòng
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-medium">
            <button onClick={() => scrollToSection('pain-points')} className="hover:text-brand-primary transition-colors">Vấn đề</button>
            <button onClick={() => scrollToSection('menu')} className="hover:text-brand-primary transition-colors">Thực đơn</button>
            <button onClick={() => scrollToSection('process')} className="hover:text-brand-primary transition-colors">Quy trình</button>
            <button onClick={() => scrollToSection('testimonials')} className="hover:text-brand-primary transition-colors">Đánh giá</button>
          </div>

          <a 
            href="tel:0936677277" 
            className="flex items-center gap-2 bg-brand-primary hover:bg-red-600 text-white px-5 py-2.5 rounded-full font-bold shadow-lg shadow-red-500/30 transition-all group active:scale-95"
          >
            <Phone className="w-4 h-4 fill-current group-hover:animate-shake" />
            <span>0936.677.277</span>
          </a>
        </div>
      </nav>

      {/* [1] HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-red-50 -z-10 rounded-l-[100px] hidden lg:block" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-red-100 text-red-600 rounded-full text-sm font-bold tracking-wide mb-6 uppercase">
              🔥 Giao Cơm Tận Nơi Tại Tp. Vinh
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
              Đừng Để <span className="text-brand-primary">Cái Bụng Đói</span> Làm Giảm Hiệu Suất Làm Việc!
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
              Bạn mệt mỏi vì chờ đợi giao hàng trễ? Ngán ngẩm với cơm nguội và thực đơn lặp lại? Cơm Văn Phòng mang đến bữa trưa **Nóng Hổi - Sạch - Đúng Giờ** chỉ từ 40k.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('menu')}
                className="bg-brand-primary text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 shadow-xl shadow-red-500/40 hover:-translate-y-1 transition-all"
              >
                Đặt Cơm Ngay <ShoppingBag className="w-5 h-5" />
              </button>
              <a 
                href="https://zalo.me/0936677277" 
                target="_blank"
                className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-slate-50 transition-all"
              >
                <MessageSquare className="w-5 h-5 text-blue-500" /> Nhắn Zalo Tư Vấn
              </a>
            </div>

            <div className="mt-10 flex items-center gap-4 text-sm text-slate-500 font-medium">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="User" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <span>Hơn **1.000+** dân văn phòng tin dùng mỗi ngày</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://scontent.fvii1-1.fna.fbcdn.net/v/t39.30808-6/660332293_1567199915407292_863968850457298525_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEf68shVXq_IVZqrci--Kfu78016hPt3FXvzTXqE-3cVYu1p77M_eomKPx4GT06Q9k_e8cqiNxogaEn33E2c3eQ&_nc_ohc=lQn4wXF5uuEQ7kNvwGHsVJQ&_nc_oc=AdrKj5PVmRT154FbUPg8Y2RJCS0jgPE_IpcR-wLVH_ptqIM6VoNNaREkfQF7BqXsK6o&_nc_zt=23&_nc_ht=scontent.fvii1-1.fna&_nc_gid=dLRAuoVasSBpsqZRvqzE3Q&_nc_ss=7b2a8&oh=00_Af6Nqm-ZfUYRLMZwJJpPAtAEiedx6cZWfbQc7dZaiRhe5g&oe=6A0F9775" 
                alt="Suất cơm đùi gà hấp dẫn" 
                className="w-full h-auto object-cover aspect-[4/3] transform hover:scale-110 transition-transform duration-700" 
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Badges */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3 animate-bounce-slow">
              <div className="bg-emerald-100 p-2 rounded-xl text-emerald-600">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase">Giao hàng cực nhanh</p>
                <p className="text-sm font-bold">Dưới 30 Phút</p>
              </div>
            </div>

            <div className="absolute -bottom-10 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-3">
              <div className="bg-orange-100 p-2 rounded-xl text-orange-600">
                <Utensils className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase">Thực đơn đa dạng</p>
                <p className="text-sm font-bold">20+ Món Mỗi Tuần</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* [2] NỖI ĐAU KHÁCH HÀNG */}
      <section id="pain-points" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl mb-4">Bạn Có Đang "Chịu Đựng" Những Bữa Trưa Thế Này?</h2>
            <div className="w-20 h-1.5 bg-brand-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Đặt 10h - 12h30 mới tới?",
                desc: "Đói cồn cào, không còn tâm trí làm việc vì shipper trễ giờ.",
                icon: <Clock className="w-8 h-8 text-red-500" />
              },
              {
                title: "Cơm nguội ngắt, canh lạt lẽo?",
                desc: "Ăn cho xong bữa chứ chẳng thấy ngon lành gì, mất cả năng lượng.",
                icon: <Utensils className="w-8 h-8 text-orange-500" />
              },
              {
                title: "Quanh đi quẩn lại vài món?",
                desc: "Thực đơn nghèo nàn, ăn mãi một quán phát ngán mà không biết đổi đi đâu.",
                icon: <MessageSquare className="w-8 h-8 text-slate-500" />
              },
              {
                title: "Sợ thực phẩm không sạch?",
                desc: "Nỗi lo rau bẩn, thịt ôi thiu luôn thường trực khi ăn ngoài quán vỉa hè.",
                icon: <Leaf className="w-8 h-8 text-green-500" />
              },
              {
                title: "Không đủ no để làm chiều?",
                desc: "Suất cơm lèo tèo vài miếng thịt, 2h chiều đã thấy đói run tay.",
                icon: <ShoppingBag className="w-8 h-8 text-blue-500" />
              },
              {
                title: "Bận rộn không kịp đi mua?",
                desc: "Nắng nóng, mưa gió ngại ra đường, cuối cùng đành nhịn hoặc ăn mì gói.",
                icon: <MapPin className="w-8 h-8 text-purple-500" />
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* [3] & [4] GIẢI PHÁP & USP */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                {AMBIANCE_IMAGES.map((img, i) => (
                  <div key={i} className={`rounded-3xl overflow-hidden shadow-lg ${i === 0 ? "col-span-2 aspect-[16/9]" : "aspect-square"}`}>
                    <img src={img} alt="Không gian quán" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl mb-8 leading-tight">Tại Sao Hàng Ngàn Dân Văn Phòng Chọn Chúng Tôi?</h2>
              
              <div className="space-y-6">
                {[
                  { title: "Giao Cơm Đúng Giờ 100%", desc: "Đội ngũ shipper riêng biệt, cam kết giao đúng khung giờ bạn yêu cầu.", icon: <CheckCircle2 className="w-6 h-6 text-brand-primary" /> },
                  { title: "Thực Phẩm Sạch Có Nguồn Gốc", desc: "Nguyên liệu tươi nhập mới mỗi ngày từ các nhà cung cấp uy tín.", icon: <CheckCircle2 className="w-6 h-6 text-brand-primary" /> },
                  { title: "Thực Đơn Đổi Mới Hàng Ngày", desc: "Không bao giờ lo ngán với hơn 20 món ăn thay đổi liên tục theo tuần.", icon: <CheckCircle2 className="w-6 h-6 text-brand-primary" /> },
                  { title: "Hộp Cơm Sạch Sẽ, Nóng Hổi", desc: "Sử dụng khay cơm chuyên dụng, giữ nhiệt tốt, lịch sự cho môi trường công sở.", icon: <CheckCircle2 className="w-6 h-6 text-brand-primary" /> },
                  { title: "Tặng Kèm Canh & Tráng Miệng", desc: "Mỗi suất cơm đều có đầy đủ món chính, rau xanh, canh nóng và khăn lạnh.", icon: <CheckCircle2 className="w-6 h-6 text-brand-primary" /> }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => scrollToSection('menu')}
                className="mt-10 bg-brand-primary text-white px-8 py-4 rounded-2xl font-bold text-lg inline-flex items-center gap-2 hover:bg-red-600 transition-all active:scale-95"
              >
                Khám Phá Thực Đơn Thôi! <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* [5] MENU / SẢN PHẨM */}
      <section id="menu" className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-red-600/20 blur-[100px] rounded-full" />
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 relative z-10">
            <div>
              <h2 className="text-4xl md:text-5xl mb-4">Món Ngon "Hot" Nhất Hôm Nay</h2>
              <p className="text-slate-400 max-w-xl">
                Thực đơn thay đổi liên tục mỗi ngày. Cam kết thực phẩm tươi sạch 100%. 
                Giá chỉ từ <span className="text-brand-primary font-bold">40.000đ</span>
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10">
              <span className="text-brand-primary font-bold">🔥 Ưu đãi:</span> Giảm 5k/suất cho đoàn trên 10 người
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {MENU_ITEMS.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white/5 rounded-[32px] overflow-hidden border border-white/10 hover:bg-white/10 transition-all"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="bg-brand-primary text-[10px] uppercase font-black px-2 py-1 rounded-md tracking-tighter shadow-lg">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-display">{item.name}</h3>
                    <span className="text-2xl font-black text-brand-primary">{item.price}</span>
                  </div>
                  <button className="w-full bg-white text-slate-900 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-primary hover:text-white transition-all active:scale-95">
                    Đặt Món Này <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-400 mb-6">Bạn muốn đặt cơm cho cả phòng? Có menu riêng ưu đãi!</p>
            <a 
              href="tel:0936677277"
              className="inline-flex items-center gap-3 bg-brand-primary text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl shadow-red-500/40 hover:scale-105 transition-all"
            >
              <Phone className="w-6 h-6 fill-current" /> Gọi: 0936.677.277
            </a>
          </div>
        </div>
      </section>

      {/* [6] QUY TRÌNH ĐẶT HÀNG */}
      <section id="process" className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4 text-slate-900">Chuẩn Bị Bữa Trưa Chỉ Với 3 Bước</h2>
            <p className="text-slate-500">Giúp bạn tiết kiệm tối đa thời gian nghỉ ngơi quý báu</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-20 left-[15%] right-[15%] h-1 border-t-2 border-dashed border-slate-200 -z-10" />
            
            {[
              {
                step: "01",
                title: "Chọn Món",
                desc: "Xem menu đa dạng trên website hoặc Zalo để chọn món yêu thích cho hôm nay.",
                icon: <ShoppingBag className="w-8 h-8" />
              },
              {
                step: "02",
                title: "Đặt Hàng",
                desc: "Gọi điện hoặc nhắn tin Zalo số lượng và địa chỉ. Chúng tôi chốt đơn trong 30 giây.",
                icon: <MessageSquare className="w-8 h-8" />
              },
              {
                step: "03",
                title: "Thưởng Thức",
                desc: "Nhận cơm đúng giờ hẹn ngay tại văn phòng. Cơm nóng hổi sẵn sàng để bạn thưởng thức.",
                icon: <Utensils className="w-8 h-8" />
              }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-brand-primary text-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl shadow-red-500/30 transform rotate-3 hover:rotate-0 transition-transform">
                  {item.icon}
                </div>
                <span className="text-brand-primary font-black text-5xl opacity-20 block mb-2">{item.step}</span>
                <h3 className="text-2xl mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed px-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [7] FEEDBACK KHÁCH HÀNG */}
      <section id="testimonials" className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl mb-6">Khách Hàng Nói Gì Về Chúng Tôi?</h2>
              <p className="text-slate-600 text-lg">Sự hài lòng của bạn là động lực để chúng tôi nỗ lực mỗi ngày.</p>
            </div>
            <div className="flex gap-2">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center">
                <span className="text-3xl font-black text-brand-primary">4.9/5</span>
                <div className="flex text-orange-400 space-x-0.5 mt-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <span className="text-xs text-slate-400 mt-2 font-bold">Google Reviews</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-[40px] shadow-sm border border-slate-100 relative group hover:shadow-2xl transition-all duration-500">
                <div className="flex text-orange-400 mb-6 group-hover:scale-110 transition-transform origin-left">
                  {[1,2,3,4,5].map(j => <Star key={j} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-lg text-slate-700 italic mb-8 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${t.name}`} alt={t.name} referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{t.name}</h4>
                    <p className="text-slate-500 text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Gallery Snapshot */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <div className="hidden lg:block bg-red-600 text-white rounded-3xl p-6 flex flex-col justify-center">
              <h4 className="text-xl font-bold mb-2">Chất Lượng Thật</h4>
              <p className="text-sm opacity-80">Hình ảnh suất cơm thực tế tại quán chúng tôi</p>
            </div>
            {GALLERY_IMAGES.map((img, i) => (
              <div key={i} className="aspect-square rounded-3xl overflow-hidden shadow-md group">
                <img src={img} alt="Cơm thực tế" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
            ))}
            <div className="aspect-square rounded-3xl overflow-hidden shadow-md relative group">
              <img src={GALLERY_IMAGES[0]} alt="Thêm" className="w-full h-full object-cover blur-[2px]" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-bold text-lg">
                +15 Ảnh Khác
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* [8] ƯU ĐÃI / KHUYẾN MÃI */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-[50px] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,#fff_1px,transparent_1px)] bg-[length:40px_40px]" />
            </div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">Đặt Cơm Theo Tuần - Nhận Ưu Đãi Khủng!</h2>
                <p className="text-xl opacity-90 mb-8 leading-relaxed">
                  Đừng để mỗi sáng phải lo nghĩ "Trưa nay ăn gì?". Đăng ký gói cơm tuần để rảnh rang làm việc và nhận quà tặng đặc biệt.
                </p>
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-yellow-300" />
                    <span className="text-lg font-bold">Giảm ngay 10% cho đơn hàng tuần (5 buổi)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-yellow-300" />
                    <span className="text-lg font-bold">Miễn phí ship bán kính 3km</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-yellow-300" />
                    <span className="text-lg font-bold">Tặng 01 ly trà trái cây giải nhiệt mỗi ngày</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-brand-primary px-8 py-4 rounded-2xl font-black text-lg hover:bg-yellow-100 transition-all shadow-xl">
                    ĐĂNG KÝ GÓI TUẦN NGAY
                  </button>
                </div>
              </div>
              <div className="hidden lg:block relative">
                <img 
                  src="https://scontent.fvii1-1.fna.fbcdn.net/v/t39.30808-6/659155092_1566307642163186_7855268809325342846_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEqHYbejcIXxFpIp_3fLhFOvKOv6VbQ_Ha8o6_pVtD8dnuO1Y9kCHZH9j258MTsH4EYEKMxRQOSlTNdBu2ggPz_&_nc_ohc=YXAqFN1qzO8Q7kNvwEcGjEs&_nc_oc=AdpkPfmwQ4WnkHcpMfkiOv6HgFF-47tzk60RLvKwA3LYYDzT1bV5spF-pJOIhpuFbTk&_nc_zt=23&_nc_ht=scontent.fvii1-1.fna&_nc_gid=LI_cnHtiXzS1LIXdTFWnZw&_nc_ss=7b2a8&oh=00_Af4EpLjD_kktikYiOTzZ7GWjihBqubo67HN21BR2bWzujA&oe=6A0FC244" 
                  alt="Combo hấp dẫn" 
                  className="w-full h-auto rounded-3xl shadow-2xl transform rotate-3"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400 text-red-600 rounded-full flex flex-col items-center justify-center font-black animate-pulse shadow-xl border-4 border-white rotate-12">
                  <span className="text-sm">GIẢM</span>
                  <span className="text-3xl">10%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* [9] CTA CUỐI */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl mb-8">Bữa Trưa Ngon Đang Chờ Bạn!</h2>
          <p className="text-xl text-slate-600 mb-12">
            Chỉ còn <span className="text-brand-primary font-bold">15 phút</span> cuối để đặt cơm cho buổi trưa hôm nay. Đừng bỏ lỡ những món ngon nhất!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="tel:0936677277"
              className="w-full sm:w-auto bg-brand-primary text-white px-12 py-5 rounded-2xl font-black text-2xl shadow-2xl shadow-red-500/40 hover:scale-105 transition-all flex items-center justify-center gap-4"
            >
              <Phone className="w-8 h-8 fill-current" /> GỌI ĐẶT NGAY
            </a>
            <a 
              href="https://zalo.me/0936677277"
              className="w-full sm:w-auto bg-blue-600 text-white px-12 py-5 rounded-2xl font-black text-2xl shadow-2xl shadow-blue-500/40 hover:scale-105 transition-all flex items-center justify-center gap-4"
            >
              <MessageSquare className="w-8 h-8 fill-current" /> CHÁT ZALO
            </a>
          </div>
          <p className="mt-8 text-slate-400 font-medium">✨ Phục vụ từ 10:00 - 14:00 hàng ngày (T2 - T7) ✨</p>
        </div>
      </section>

      {/* [10] FOOTER */}
      <footer className="bg-slate-900 text-white pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <img src={LOGO_URL} alt="Logo" className="w-10 h-10 rounded-full" referrerPolicy="no-referrer" />
                <span className="font-display font-bold text-2xl">Cơm Văn Phòng</span>
              </div>
              <p className="text-slate-400 leading-relaxed mb-6">
                Tự hào mang đến những bữa cơm trưa chất lượng, đậm đà vị nhà làm cho dân văn phòng tại Tp. Vinh.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-brand-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-brand-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">Liên Hệ Với Chúng Tôi</h4>
              <ul className="space-y-4">
                <li className="flex gap-3 text-slate-400">
                  <Phone className="w-5 h-5 text-brand-primary flex-shrink-0" />
                  <span>Hotline: 0936.677.277</span>
                </li>
                <li className="flex gap-3 text-slate-400">
                  <MapPin className="w-5 h-5 text-brand-primary flex-shrink-0" />
                  <span>CS1: Đối diện 150 Hồng Bàng, TP. Vinh</span>
                </li>
                <li className="flex gap-3 text-slate-400">
                  <MapPin className="w-5 h-5 text-brand-primary flex-shrink-0" />
                  <span>CS2: 305 Võ Nguyên Hiến, Trường Thi, Vinh</span>
                </li>
                <li className="flex gap-3 text-slate-400">
                  <MapPin className="w-5 h-5 text-brand-primary flex-shrink-0" />
                  <span>CS3: Số 3 Đinh Công Tráng, TP. Vinh</span>
                </li>
                <li className="flex gap-3 text-slate-400">
                  <Clock className="w-5 h-5 text-brand-primary flex-shrink-0" />
                  <span>Giờ làm việc: 08:00 - 14:00</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">Chính Sách</h4>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors underline decoration-slate-700 underline-offset-4">Giao hàng & Thanh toán</a></li>
                <li><a href="#" className="hover:text-white transition-colors underline decoration-slate-700 underline-offset-4">Chính sách đổi trả</a></li>
                <li><a href="#" className="hover:text-white transition-colors underline decoration-slate-700 underline-offset-4">Cam kết vệ sinh ATTP</a></li>
                <li><a href="#" className="hover:text-white transition-colors underline decoration-slate-700 underline-offset-4">Đăng ký CTV/Shipper</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">Đăng Ký Nhận Menu</h4>
              <p className="text-slate-400 text-sm mb-4">Nhận menu mới nhất mỗi sáng qua email/Zalo.</p>
              <form className="space-y-2">
                <input 
                  type="email" 
                  placeholder="Email hoặc số điện thoại" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-primary transition-all"
                />
                <button className="w-full bg-brand-primary py-3 rounded-xl font-bold hover:bg-red-600 transition-all">Đăng Ký</button>
              </form>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 text-center text-slate-500 text-sm">
            <p>© 2026 Cơm Văn Phòng Tp. Vinh. Tất cả quyền được bảo lưu.</p>
            <p className="mt-2 flex items-center justify-center gap-1">
              Thiết kế bởi <span className="text-brand-primary font-bold">AI Studio</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
