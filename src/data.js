import {GiCherry} from 'react-icons/gi'
import {IoFishOutline} from 'react-icons/io5'
import {IoFastFoodOutline} from 'react-icons/io5'
import {IoPawOutline} from 'react-icons/io5'
import {AiOutlineClear} from 'react-icons/ai'
import {BiCoffeeTogo} from 'react-icons/bi'
import {CgSmartHomeCooker} from 'react-icons/cg'
import {IoWaterOutline} from 'react-icons/io5'
import {GiMedicalPackAlt} from 'react-icons/gi'
import {FiCoffee} from 'react-icons/fi'

export const data = [
    {
        id: 1,
        type: 'Fruits & Vegetables',
        icon: <GiCherry />,
        details: [
            {
                id: 1,
                name: 'Fruits',
                details: [
                    {
                        name: 'Cherry',
                        desc: 'The lemon/lime, Citrus limon Osbeck, is a species of small evergreen tree in the flowering plant family Rutaceae, native to South Asia, primarily North eastern India.',
                        img: ['https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/RedCherries_zylnoo.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/strawberry_d4lzfz.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/clementines_h74qrp.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/Mangoes_ruaapa.jpg'],
                        price: 2,
                        available: 0.5,
                        type: 'lb',
                    },
                    {
                        name: 'Strawberry',
                        img: ['https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/strawberry_d4lzfz.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/strawberry_d4lzfz.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/strawberry_d4lzfz.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/strawberry_d4lzfz.jpg'],
                        price: 5,
                        available: 1,
                        type: 'lb',
                        deal: 50,
                    },
                    {
                        name: 'Blueberry',
                        img: ['https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614570/pickbazar/grocery/blueberries_relyfn.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614570/pickbazar/grocery/blueberries_relyfn.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614570/pickbazar/grocery/blueberries_relyfn.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614570/pickbazar/grocery/blueberries_relyfn.jpg'],
                        price: 8,
                        available: 1,
                        type: 'lb',
                        deal: 10,
                    },
                    {
                        name: 'Clementines',
                        img: ['https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/clementines_h74qrp.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/clementines_h74qrp.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/clementines_h74qrp.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/clementines_h74qrp.jpg'],
                        price: 3,
                        available: 2,
                        type: 'lb',
                    },
                    {
                        name: 'Apples',
                        img: ['https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/Apples_dmwvrq.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/Apples_dmwvrq.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/Apples_dmwvrq.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/Apples_dmwvrq.jpg'],
                        price: 2,
                        available: 2,
                        type: 'lb',
                        deal: 20
                    },
                    {
                        name: 'Pears',
                        img:['https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/pears_ukyxdh.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/pears_ukyxdh.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/pears_ukyxdh.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/pears_ukyxdh.jpg'],
                        price: 1,
                        available: 1,
                        type: 'lb',
                    },
                    {
                        name: 'Mango',
                        img: ['https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/Mangoes_ruaapa.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/Mangoes_ruaapa.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/Mangoes_ruaapa.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/Mangoes_ruaapa.jpg'],
                        price: 2.5,
                        available: 2,
                        type: 'lb',
                    },
                    {
                        name: 'Dates',
                        img: ['https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/Dates_pq4oad.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/Dates_pq4oad.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/Dates_pq4oad.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/Dates_pq4oad.jpg'],
                        price: 15,
                        available: 2,
                        type: 'lb',
                        deal: 20,
                    },
                ],
            },
            {
                id: 2,
                name: 'Vegetables',
                details: [
                    {
                        name: 'lime',
                        img: ['https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/GreenLimes_jrodle.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/GreenLimes_jrodle.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/GreenLimes_jrodle.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/GreenLimes_jrodle.jpg'],
                        price: 1.5,
                        available: 12,
                        type: 'pc(s)'
                    },
                    {
                        name: 'Lemon',
                        img: ['https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/Yellow_Limes_y0lbyo.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/Yellow_Limes_y0lbyo.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/Yellow_Limes_y0lbyo.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/Yellow_Limes_y0lbyo.jpg'],
                        price: 1.5,
                        available: 12,
                        type: 'pc(s)'
                    },
                    {
                        name: 'Celery Stick',
                        img: ['https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/CelerySticks_ulljfz.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/CelerySticks_ulljfz.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/CelerySticks_ulljfz.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/CelerySticks_ulljfz.jpg'],
                        price: 0.7,
                        available: 1,
                        type: 'lb'
                    },
                    {
                        name: 'Baby Spinach',
                        img: ['https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/BabySpinach_xronqz.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/BabySpinach_xronqz.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/BabySpinach_xronqz.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/BabySpinach_xronqz.jpg'],
                        price: 0.6,
                        available: 0.2,
                        type: 'lb'
                    },
                    {
                        name: 'Mix Vegetable Platter',
                        img: ['https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/VeggiePlatter_ztcg0m.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/VeggiePlatter_ztcg0m.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/VeggiePlatter_ztcg0m.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/VeggiePlatter_ztcg0m.jpg'],
                        price: 1.6,
                        available: 0.4,
                        type: 'lb'
                    },
                    {
                        name: 'French Green Beans',
                        img: ['https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/FrenchGreenBeans_azivow.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/FrenchGreenBeans_azivow.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/FrenchGreenBeans_azivow.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/FrenchGreenBeans_azivow.jpg'],
                        price: 2,
                        available: 0.6,
                        type: 'lb',
                        deal: 10,
                    },
                    {
                        name: 'Sweet Corn',
                        img: ['https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/Corn_dlrtbv.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/Corn_dlrtbv.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/Corn_dlrtbv.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/Corn_dlrtbv.jpg'],
                        price: 3,
                        available: 2.5,
                        type: 'lb',
                    },
                    {
                        name: 'Cucumber',
                        img: ['https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/Cucumber_w6hlxr.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/Cucumber_w6hlxr.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/Cucumber_w6hlxr.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/Cucumber_w6hlxr.jpg'],
                        price: 2.2,
                        available: 4,
                        type: 'lb',
                    },
                    {
                        name: 'Pepper',
                        img: ['https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/MiniPeppers_iydh8m.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/MiniPeppers_iydh8m.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/MiniPeppers_iydh8m.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/MiniPeppers_iydh8m.jpg'],
                        price: 10,
                        available: 1.5,
                        type: 'lb',
                        deal: 20
                    },
                    {
                        name: 'Green Beans',
                        img: ['https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/GreenBeans_fwddsr.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/GreenBeans_fwddsr.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/GreenBeans_fwddsr.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/GreenBeans_fwddsr.jpg'],
                        price: 1.5,
                        available: 0.6,
                        type: 'lb',
                        deal: 20
                    },
                    {
                        name: 'Brussels Sprout',
                        img: ['https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/BrusselsSprouts_adwhet.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/BrusselsSprouts_adwhet.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/BrusselsSprouts_adwhet.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/BrusselsSprouts_adwhet.jpg'],
                        price: 4,
                        available: 1,
                        type: 'lb',
                    },
                    {
                        name: 'Peeled Baby Carrot',
                        img: ['https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/Peeled_Carrots_xx7mjo.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/Peeled_Carrots_xx7mjo.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/Peeled_Carrots_xx7mjo.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/Peeled_Carrots_xx7mjo.jpg'],
                        price: 3,
                        available: 2,
                        type: 'lb',
                    },
                ],
            },
        ]
    },
    
    {
        id: 2,
        type: 'Meat & Fish',
        icon: <IoFishOutline />,
        details: [
            {
                id: 3,
                name: 'Fresh Fish',
                details: [
                    {
                        name: 'Signature Salmon',
                        img: ['https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/SignatureSalmon_fstp4m.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/SignatureSalmon_fstp4m.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/SignatureSalmon_fstp4m.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/SignatureSalmon_fstp4m.jpg'],
                        price: 4.95,
                        available: 1,
                        type: 'lb'
                    },
                    {
                        name: 'Cod Fillet',
                        img: ['https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/codfillet_u0mti1.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/codfillet_u0mti1.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/codfillet_u0mti1.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/codfillet_u0mti1.jpg'],
                        price: 10,
                        available: 1,
                        type: 'lb',
                        deal: 25
                    },
                    {
                        name: 'Swordfish Fillet',
                        img: ['https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/swordfish_smniuv.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/swordfish_smniuv.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/swordfish_smniuv.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/swordfish_smniuv.jpg'],
                        price: 10,
                        available: 1.5,
                        type: 'lb',
                        deal: 15
                    },
                    {
                        name: 'Halibut Fillet',
                        img: ['https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/halibut_jaz7ju.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/halibut_jaz7ju.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/halibut_jaz7ju.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/halibut_jaz7ju.jpg'],
                        price: 15,
                        available: 2,
                        type: 'lb',
                    },
                    {
                        name: 'Tilapia Fillet',
                        img: ['https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/TilapiaFillet_a2urhk.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/TilapiaFillet_a2urhk.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/TilapiaFillet_a2urhk.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/TilapiaFillet_a2urhk.jpg'],
                        price: 7.99,
                        available: 1,
                        type: 'lb',
                    },
                ],
            },
            {
                id: 4,
                name: 'Meat',
                details: [
                    {
                        name: 'Fresh Beef',
                        img: ['https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/beef_xkxhnb.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/beef_xkxhnb.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/beef_xkxhnb.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/beef_xkxhnb.jpg'],
                        price: 6,
                        available: 1,
                        type: 'lb',
                    },
                    {
                        name: 'Sliced Turkey Breast',
                        img: ['https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/sliced_turkey_breast_szb8jg.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/sliced_turkey_breast_szb8jg.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/sliced_turkey_breast_szb8jg.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/sliced_turkey_breast_szb8jg.jpg'],
                        price: 8,
                        available: 2,
                        type: 'lb',
                        deal: 10,
                    },
                    {
                        name: 'Chicken Thighs',
                        img: ['https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/chicken_thigh_yrdfwh.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/chicken_thigh_yrdfwh.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/chicken_thigh_yrdfwh.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/chicken_thigh_yrdfwh.jpg'],
                        price: 10,
                        available: 5,
                        type: 'lb',
                        deal: 30,
                    },
                    {
                        name: 'Chicken Breast',
                        img: ['https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/chicken_brest_ribcxo.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/chicken_brest_ribcxo.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/chicken_brest_ribcxo.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/chicken_brest_ribcxo.jpg'],
                        price: 10,
                        available: 5,
                        type: 'lb',
                    },
                    {
                        name: 'Beef Steak',
                        img: ['https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/steak_okxpjo.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/steak_okxpjo.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/steak_okxpjo.jpg', 'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589736058/pickbazar/grocery/steak_okxpjo.jpg'],
                        price: 15,
                        available: 3,
                        type: 'lb',
                    },
                ],
            },
        ]
    },
    
    {
        id: 3,
        type: 'Snacks',
        icon: <IoFastFoodOutline />,
        details: [
            {
                id: 5,
                name: 'Buscuits',
                details: [
                    {
                        name: 'Belmont Custard Cream',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/belmont_custard_cream.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/belmont_custard_cream.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/belmont_custard_cream.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/belmont_custard_cream.jpg'],
                        price: 5,
                        available: 50,
                        type: 'lb',
                        deal: 10
                    },
                    {
                        name: 'Crawford Digestives',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/crawford_digestives.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/crawford_digestives.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/crawford_digestives.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/crawford_digestives.jpg'],
                        price: 8,
                        available: 80,
                        type: 'lb',
                        deal: 20
                    },
                    {
                        name: 'Hill Mini Pach Mix',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/Hill_Biscuits_Mini_Pack_Mix_.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Hill_Biscuits_Mini_Pack_Mix_.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Hill_Biscuits_Mini_Pack_Mix_.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Hill_Biscuits_Mini_Pack_Mix_.jpg'],
                        price: 10,
                        available: 1,
                        type: 'pc(s)',
                        deal: 5
                    },
                    {
                        name: 'Jammie Dodgers Raspberry',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/Jammie_Dodgers.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Jammie_Dodgers.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Jammie_Dodgers.jpg','https://s3.amazonaws.com/redqteam.com/pickbazar/Jammie_Dodgers.jpg'],
                        price: 8,
                        available: 0.6,
                        type: 'lb',
                        deal: 10
                    },
                    {
                        name: "Juli's Cheese Crackers",
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/julis_cheese_crackers.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/julis_cheese_crackers.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/julis_cheese_crackers.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/julis_cheese_crackers.jpg'],
                        price: 8,
                        available: 0.6,
                        type: 'lb',
                    },
                    {
                        name: "Khong Guan Orange Cream",
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/khong_guan_orange_cream.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/khong_guan_orange_cream.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/khong_guan_orange_cream.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/khong_guan_orange_cream.jpg'],
                        price: 10,
                        available: 0.5,
                        type: 'lb',
                    },
                    {
                        name: "Khong Guan Premium Marie",
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/khong_guan_premium_marie.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/khong_guan_premium_marie.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/khong_guan_premium_marie.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/khong_guan_premium_marie.jpg'],
                        price: 9,
                        available: 1,
                        type: 'pc(s)',
                    },
                    {
                        name: "Lotus Biscoff",
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/lotus_biscoff.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/lotus_biscoff.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/lotus_biscoff.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/lotus_biscoff.jpg'],
                        price: 10,
                        available: 0.5,
                        type: 'lb',
                    },
                ],
            },
            {
                id: 6,
                name: 'Chocolates',
                details: [
                    {
                        name: 'Filipinos',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/artiach_filipino.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/artiach_filipino.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/artiach_filipino.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/artiach_filipino.jpg'],
                        price: 4,
                        available: 0.5,
                        type: 'lb',
                    },
                    {
                        name: 'Dairy Milk Crispello',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/cadbury_dairy_milk_crispello.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cadbury_dairy_milk_crispello.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cadbury_dairy_milk_crispello.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cadbury_dairy_milk_crispello.jpg'],
                        price: 2.5,
                        available: 0.2,
                        type: 'lb',
                    },
                    {
                        name: 'Cadbury Zip',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/cadbury_zip.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cadbury_zip.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cadbury_zip.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cadbury_zip.jpg'],
                        price: 3,
                        available: 0.1,
                        type: 'lb',
                        deal: 10
                    },
                    {
                        name: 'Dairy Milk Reclose',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/cadbury-dairy-milk-reclose.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cadbury-dairy-milk-reclose.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cadbury-dairy-milk-reclose.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cadbury-dairy-milk-reclose.jpg'],
                        price: 3.5,
                        available: 0.2,
                        type: 'lb',
                    },
                    {
                        name: 'Cloetta Chocowoffle Crispy',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/cloetta.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cloetta.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cloetta.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cloetta.jpg'],
                        price: 3,
                        available: 0.2,
                        type: 'lb',
                    },
                    {
                        name: 'Cloetta Sprinkle',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/cloetta_sprinkle.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cloetta_sprinkle.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cloetta_sprinkle.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cloetta_sprinkle.jpg'],
                        price: 3,
                        available: 0.1,
                        type: 'lb',
                        deal: 10,
                    },
                    {
                        name: 'Hershey Symphony',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/hershey_symphony.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/hershey_symphony.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/hershey_symphony.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/hershey_symphony.jpg'],
                        price: 4,
                        available: 0.1,
                        type: 'lb',
                        deal: 20,
                    },
                    {
                        name: 'Hershey Kisses',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/hersheys_kisses.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/hersheys_kisses.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/hersheys_kisses.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/hersheys_kisses.jpg'],
                        price: 5,
                        available: 0.1,
                        type: 'lb',
                    },
                    {
                        name: 'M M Funsize',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/m&m_funsize.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/m&m_funsize.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/m&m_funsize.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/m&m_funsize.jpg'],
                        price: 2,
                        available: 0.1,
                        type: 'lb',
                    },
                    {
                        name: 'Nestle Butterfinger',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/nestle_butterfinger.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/nestle_butterfinger.jpg','https://s3.amazonaws.com/redqteam.com/pickbazar/nestle_butterfinger.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/nestle_butterfinger.jpg'],
                        price: 2.5,
                        available: 0.1,
                        type: 'lb',
                    },
                    {
                        name: 'Nestle Kitkat',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/nestle_kitkat.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/nestle_kitkat.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/nestle_kitkat.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/nestle_kitkat.jpg'],
                        price: 2.5,
                        available: 0.1,
                        type: 'lb',
                    },
                    {
                        name: 'Snickers Slice',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/snikers_slice.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/snikers_slice.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/snikers_slice.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/snikers_slice.jpg'],
                        price: 3,
                        available: 0.1,
                        type: 'lb',
                        deal: 20,
                    },
                    {
                        name: 'Snickers Snack Size',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/snikers_snacksize.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/snikers_snacksize.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/snikers_snacksize.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/snikers_snacksize.jpg'],
                        price: 3,
                        available: 0.1,
                        type: 'lb',
                        deal: 20,
                    },
                ],
            },
            {
                id: 7,
                name: 'Crisps',
               details: [
                    {
                        name: 'Wise Cottage Fires Bbq',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/cottage_bbq.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cottage_bbq.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cottage_bbq.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cottage_bbq.jpg'],
                        price: 0.6,
                        available: 1,
                        type: 'pc(s)',
                    },
                    {
                        name: 'Puzzles Crips Ready Salted',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/crisps-puzzle.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/crisps-puzzle.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/crisps-puzzle.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/crisps-puzzle.jpg'],
                        price: 0.6,
                        available: 1,
                        type: 'pc(s)',
                    },
                    {
                        name: 'Doritos Tangy Cheese',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/doritos.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/doritos.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/doritos.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/doritos.jpg'],
                        price: 1,
                        available: 1,
                        type: 'pc(s)',
                    },
                    {
                        name: "Lay's Baked",
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/lays_baked.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/lays_baked.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/lays_baked.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/lays_baked.jpg'],
                        price: 1.5,
                        available: 1,
                        type: 'pc(s)',
                    },
                    {
                        name: "Lay's Sea Salted",
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/lays_sea_salted.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/lays_sea_salted.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/lays_sea_salted.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/lays_sea_salted.jpg'],
                        price: 1.2,
                        available: 1,
                        type: 'pc(s)',
                    },
                    {
                        name: "Lay's Kettle Cooked",
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/lays-kettle-cooked.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/lays-kettle-cooked.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/lays-kettle-cooked.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/lays-kettle-cooked.jpg'],
                        price: 1.8,
                        available: 1,
                        type: 'pc(s)',
                    },
                    {
                        name: "Lay's Sour Cream",
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/lays-sour-cream.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/lays-sour-cream.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/lays-sour-cream.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/lays-sour-cream.jpg'],
                        price: 1.3,
                        available: 1,
                        type: 'pc(s)',
                    },
                    {
                        name: "Nim's Apple Crisp",
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/nims_apple_fruit.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/nims_apple_fruit.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/nims_apple_fruit.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/nims_apple_fruit.jpg'],
                        price: 10,
                        available: 1,
                        type: 'pc(s)',
                        deal: 15,
                    },
                    {
                        name: "Snack Rite Ready Salted",
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/Ready-Salted-Crisps.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Ready-Salted-Crisps.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Ready-Salted-Crisps.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Ready-Salted-Crisps.jpg'],
                        price: 5,
                        available: 1,
                        type: 'pc(s)',
                        deal: 20,
                    },
                    {
                        name: "Royster's",
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/Roysters_6pk.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Roysters_6pk.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Roysters_6pk.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Roysters_6pk.jpg'],
                        price: 5,
                        available: 1,
                        type: 'pc(s)',
                    },
                    {
                        name: "Snackrite Cheese Onion",
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/snackrite_bags.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/snackrite_bags.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/snackrite_bags.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/snackrite_bags.jpg'],
                        price: 5,
                        available: 1,
                        type: 'pc(s)',
                    },
                    {
                        name: "Tayto Pickled Onion",
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/tayto_pickled_onion.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/tayto_pickled_onion.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/tayto_pickled_onion.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/tayto_pickled_onion.jpg'],
                        price: 0.8,
                        available: 1,
                        type: 'pc(s)',
                    },
                    {
                        name: "Walkers Cheese Onion",
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/walkers_cheese_onion.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/walkers_cheese_onion.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/walkers_cheese_onion.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/walkers_cheese_onion.jpg'],
                        price: 0.8,
                        available: 1,
                        type: 'pc(s)',
                    },
                ],
            },
            {
                id: 8,
                name: 'Noodles',
                details: [
                    {
                        name: 'Cintan Chicken Noodles',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/cintan_chicken.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cintan_chicken.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cintan_chicken.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cintan_chicken.jpg'],
                        price: 5,
                        available: 0.5,
                        type: 'lb',
                        deal: 10
                    },
                    {
                        name: 'Indomie Chicken Noodles',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/indomie_special_chicken.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/indomie_special_chicken.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/indomie_special_chicken.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/indomie_special_chicken.jpg'],
                        price: 5,
                        available: 0.5,
                        type: 'lb',
                    },
                    {
                        name: 'Kame H Okkein Stir Fry Noodles',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/kame_stir_fry.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/kame_stir_fry.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/kame_stir_fry.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/kame_stir_fry.jpg'],
                        price: 4,
                        available: 0.5,
                        type: 'lb',
                    },
                    {
                        name: 'Koka Curry Noodles',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/koka_curry.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/koka_curry.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/koka_curry.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/koka_curry.jpg'],
                        price: 6,
                        available: 0.5,
                        type: 'lb',
                    },
                    {
                        name: 'Maggi Bbq Noodles',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/maggi_bbq.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/maggi_bbq.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/maggi_bbq.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/maggi_bbq.jpg'],
                        price: 3,
                        available: 0.5,
                        type: 'lb',
                    },
                    {
                        name: 'Maggi Beef Noodles',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/maggi_beef.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/maggi_beef.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/maggi_beef.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/maggi_beef.jpg'],
                        price: 3,
                        available: 0.5,
                        type: 'lb',
                    },
                    {
                        name: 'Maggi Biriyani Noodles',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/maggi_biriyani.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/maggi_biriyani.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/maggi_biriyani.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/maggi_biriyani.jpg'],
                        price: 3,
                        available: 0.5,
                        type: 'lb',
                    },
                    {
                        name: 'Maggi Chicken Noodles',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/maggi_chicken.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/maggi_chicken.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/maggi_chicken.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/maggi_chicken.jpg'],
                        price: 3,
                        available: 0.20,
                        type: 'lb',
                    },
                ],
            },
            {
                id: 9,
                name: 'Nuts',
                details: [
                    {
                        name: 'Badia Pine Nuts',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/badia_pinenuts.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/badia_pinenuts.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/badia_pinenuts.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/badia_pinenuts.jpg'],
                        price: 10,
                        available: 0.30,
                        type: 'lb'
                    },
                    {
                        name: 'Cacao Cashew Nuts',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/cacao_cashew.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cacao_cashew.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cacao_cashew.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cacao_cashew.jpg'],
                        price: 8,
                        available: 0.20,
                        type: 'lb'
                    },
                    {
                        name: 'Fisher Peanuts Ready Salted',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/fisher_peanut.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/fisher_peanut.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/fisher_peanut.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/fisher_peanut.jpg'],
                        price: 15,
                        available: 2,
                        type: 'lb',
                        deal: 20
                    },
                    {
                        name: 'Fisher Peanuts Ready Salted',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/Fruits-And-Nuts-Full-Meal-Bottle-Front.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Fruits-And-Nuts-Full-Meal-Bottle-Front.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Fruits-And-Nuts-Full-Meal-Bottle-Front.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Fruits-And-Nuts-Full-Meal-Bottle-Front.jpg'],
                        price: 15,
                        available: 0.5,
                        type: 'lb',
                        deal: 20
                    },
                    {
                        name: 'Simply Natural Fruits And Nuts',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/Fruits-And-Nuts-Full-Meal-Packet.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Fruits-And-Nuts-Full-Meal-Packet.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Fruits-And-Nuts-Full-Meal-Packet.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Fruits-And-Nuts-Full-Meal-Packet.jpg'],
                        price: 7,
                        available: 0.5,
                        type: 'lb',
                    },
                    {
                        name: 'Ivory Cashew Nuts',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/ivory_cashewnut.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/ivory_cashewnut.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/ivory_cashewnut.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/ivory_cashewnut.jpg'],
                        price: 6.5,
                        available: 0.5,
                        type: 'lb',
                    },
                    {
                        name: 'Jaybees Whole Cashew Nuts',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/jaybee_whole_cashewnut.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/jaybee_whole_cashewnut.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/jaybee_whole_cashewnut.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/jaybee_whole_cashewnut.jpg'],
                        price: 6.5,
                        available: 0.5,
                        type: 'lb',
                    },
                    {
                        name: 'Kirkland Mix Nuts',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/kirkland_mixed_nuts.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/kirkland_mixed_nuts.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/kirkland_mixed_nuts.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/kirkland_mixed_nuts.jpg'],
                        price: 20,
                        available: 1,
                        type: 'pc(s)',
                        deal: 15,
                    },
                    {
                        name: 'Natural Nuts',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/natural_cashewnut.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/natural_cashewnut.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/natural_cashewnut.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/natural_cashewnut.jpg'],
                        price: 10,
                        available: 5,
                        type: 'lb',
                        deal: 20,
                    },
                    {
                        name: 'Planter Cashewnut',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/planter_cashewnut.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/planter_cashewnut.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/planter_cashewnut.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/planter_cashewnut.jpg'],
                        price: 10,
                        available: 5,
                        type: 'lb',
                    },
                    {
                        name: 'Planter Dry Roasted',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/planters_dry_roasted.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/planters_dry_roasted.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/planters_dry_roasted.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/planters_dry_roasted.jpg'],
                        price: 10,
                        available: 5,
                        type: 'lb',
                        deal: 20,
                    },
                    {
                        name: 'Planter Honey Roasted',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/planters_honey_roasted.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/planters_honey_roasted.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/planters_honey_roasted.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/planters_honey_roasted.jpg'],
                        price: 10,
                        available: 5,
                        type: 'lb',
                    },
                ],
            },
            {
                id: 10,
                name: 'Pasta',
                details: [
                    {
                        name: 'Bambino Macaroni',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/bambino_macaroni.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/bambino_macaroni.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/bambino_macaroni.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/bambino_macaroni.jpg'],
                        price: 15,
                        available: 8,
                        type: 'lb'
                    },
                    {
                        name: 'Bambino Premium Pasta',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/bambino_premium_pasta.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/bambino_premium_pasta.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/bambino_premium_pasta.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/bambino_premium_pasta.jpg'],
                        price: 18,
                        available: 6,
                        type: 'lb'
                    },
                    {
                        name: 'Batchelors Pasta N Sauce Cheese',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/batchelors_pasta_sauce.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/batchelors_pasta_sauce.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/batchelors_pasta_sauce.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/batchelors_pasta_sauce.jpg'],
                        price: 8,
                        available: 2,
                        type: 'lb'
                    },
                    {
                        name: 'Borges Pasta',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/borges-pasta.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/borges-pasta.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/borges-pasta.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/borges-pasta.jpg'],
                        price: 12,
                        available: 6,
                        type: 'lb'
                    },
                    {
                        name: 'Pasta Sauce',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/Cheese-&-Broccoli-Pasta-&-Sauce.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Cheese-&-Broccoli-Pasta-&-Sauce.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Cheese-&-Broccoli-Pasta-&-Sauce.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Cheese-&-Broccoli-Pasta-&-Sauce.jpg'],
                        price: 15,
                        available: 3,
                        type: 'lb',
                        deal: 20,
                    },
                    {
                        name: 'Sun Remo Chicken Flavour Pasta',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/sunremo_chicken_curry_pasta.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/sunremo_chicken_curry_pasta.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/sunremo_chicken_curry_pasta.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/sunremo_chicken_curry_pasta.jpg'],
                        price: 15,
                        available: 3,
                        type: 'lb',
                        deal: 20,
                    },
                    {
                        name: 'Knorr Pastaria',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/knorr_pastaria.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/knorr_pastaria.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/knorr_pastaria.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/knorr_pastaria.jpg'],
                        price: 15,
                        available: 3,
                        type: 'lb',
                    },
                ],
            },
            {
                id: 11,
                name: 'Sauce',
                details: [
                    {
                        name: 'Allegro Bbq Sauce',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/allegro_bbq_sauce.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/allegro_bbq_sauce.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/allegro_bbq_sauce.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/allegro_bbq_sauce.jpg'],
                        price: 10,
                        available: 6,
                        type: 'lb'
                    },
                    {
                        name: 'Asin Zing Chili Sauce',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/asain_zing_chili.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/asain_zing_chili.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/asain_zing_chili.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/asain_zing_chili.jpg'],
                        price: 8,
                        available: 6,
                        type: 'lb'
                    },
                    {
                        name: 'Crunch Hot Chili Sauce',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/crunch_hot_chili_sauce.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/crunch_hot_chili_sauce.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/crunch_hot_chili_sauce.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/crunch_hot_chili_sauce.jpg'],
                        price: 6,
                        available: 6,
                        type: 'lb'
                    },
                    {
                        name: 'Felix Chili Sauce',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/felix_chili_sauce.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/felix_chili_sauce.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/felix_chili_sauce.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/felix_chili_sauce.jpg'],
                        price: 6,
                        available: 6,
                        type: 'lb'
                    },
                    {
                        name: 'Heinz Chili Sauce',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/heinz_chili_sauce.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/heinz_chili_sauce.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/heinz_chili_sauce.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/heinz_chili_sauce.jpg'],
                        price: 8,
                        available: 7,
                        type: 'lb',
                        deal: 10,
                    },
                    {
                        name: 'Kosmos Bbq Sauce',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/kosmos_bbq.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/kosmos_bbq.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/kosmos_bbq.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/kosmos_bbq.jpg'],
                        price: 8,
                        available: 7,
                        type: 'lb',
                        deal: 10,
                    },
                    {
                        name: 'Taco Bell Diablo Sauce',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/taco_bell_diablo_sauce.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/taco_bell_diablo_sauce.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/taco_bell_diablo_sauce.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/taco_bell_diablo_sauce.jpg'],
                        price: 8,
                        available: 7,
                        type: 'lb',
                    },
                    {
                        name: 'Taco Bell Fire Sauce',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/taco_bell_fire_sauce.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/taco_bell_fire_sauce.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/taco_bell_fire_sauce.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/taco_bell_fire_sauce.jpg'],
                        price: 8,
                        available: 7,
                        type: 'lb',
                    },
                ],
            },
            {
                id: 12,
                name: 'Soup',
                details: [
                    {
                        name: 'Traditional Bak Kut Teh Soup',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/bak_kuh_teh.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/bak_kuh_teh.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/bak_kuh_teh.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/bak_kuh_teh.jpg'],
                        price: 3,
                        available: 12,
                        type: 'lb'
                    },
                    {
                        name: 'Chings Mix Vegetable Soup',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/chings_mixvegsoup.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/chings_mixvegsoup.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/chings_mixvegsoup.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/chings_mixvegsoup.jpg'],
                        price: 5,
                        available: 2,
                        type: 'lb'
                    },
                    {
                        name: 'Dashi Chicken Corn Soup',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/dashi_chicken_corn.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/dashi_chicken_corn.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/dashi_chicken_corn.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/dashi_chicken_corn.jpg'],
                        price: 1,
                        available: 2,
                        type: 'lb'
                    },
                    {
                        name: 'Knorr Thai Vegetable Soup',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/knorr_thai_vegetable.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/knorr_thai_vegetable.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/knorr_thai_vegetable.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/knorr_thai_vegetable.jpg'],
                        price: 1.5,
                        available: 2,
                        type: 'lb'
                    },
                    {
                        name: 'Rempah Sup Soup Mix',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/rempah_sup.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/rempah_sup.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/rempah_sup.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/rempah_sup.jpg'],
                        price: 3,
                        available: 2,
                        type: 'lb',
                        deal: 10,
                    },
                ],
            },
        ]
    },

    {
        id: 4,
        type: 'Pet Care',
        icon: <IoPawOutline />,
        details: [
            {
                id: 13,
                name: 'Cat Food',
                details: [
                    {
                        name: 'Avo Derm Grain Free',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/grain_free.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/grain_free.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/grain_free.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/grain_free.jpg'],
                        price: 30,
                        available: 5,
                        type: 'lb',
                        deal: 10
                    },
                    {
                        name: 'Hills Science Diet',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/hills_science_diet.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/hills_science_diet.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/hills_science_diet.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/hills_science_diet.jpg'],
                        price: 25,
                        available: 5,
                        type: 'lb',
                    },
                    {
                        name: 'Instinct Ultimate Protien',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/instinct_the_raw.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/instinct_the_raw.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/instinct_the_raw.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/instinct_the_raw.jpg'],
                        price: 20,
                        available: 4,
                        type: 'lb',
                        deal: 20,
                    },
                    {
                        name: 'Natural Balance L.I.D',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/natural_balance.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/natural_balance.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/natural_balance.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/natural_balance.jpg'],
                        price: 20,
                        available: 4,
                        type: 'lb',
                    },
                    {
                        name: 'Hills Urinary Care',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/prescription_diet.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/prescription_diet.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/prescription_diet.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/prescription_diet.jpg'],
                        price: 20,
                        available: 4,
                        type: 'lb',
                        deal: 25,
                    },
                    {
                        name: 'Pro Diet Complete Balance',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/pro_diet.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pro_diet.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pro_diet.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pro_diet.jpg'],
                        price: 25,
                        available: 6,
                        type: 'lb',
                    },
                    {
                        name: 'Purina Pro Plan Veterinary Diets',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/purina_pro_plan.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/purina_pro_plan.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/purina_pro_plan.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/purina_pro_plan.jpg'],
                        price: 22.5,
                        available: 6,
                        type: 'lb',
                        deal: 10,
                    },
                    {
                        name: 'Special Kitty Gourmet',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/special_kitty.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/special_kitty.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/special_kitty.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/special_kitty.jpg'],
                        price: 30,
                        available: 5,
                        type: 'lb',
                        deal: 20,
                    },
                ],
            },
            {
                id: 14,
                name: 'Dog Food',
               details: [
                    {
                        name: 'Black Hawk Adult Lamb Rice',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/dog_food_black_hawk_adult_all_breeds_lamb&rice.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/dog_food_black_hawk_adult_all_breeds_lamb&rice.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/dog_food_black_hawk_adult_all_breeds_lamb&rice.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/dog_food_black_hawk_adult_all_breeds_lamb&rice.jpg'],
                        price: 30,
                        available: 5,
                        type: 'lb'
                    },
                    {
                        name: 'Black Hawk Puppy Lamb Rice',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/dog_food_black_hawk_puppy_all_breeds_lamb&rice.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/dog_food_black_hawk_puppy_all_breeds_lamb&rice.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/dog_food_black_hawk_puppy_all_breeds_lamb&rice.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/dog_food_black_hawk_puppy_all_breeds_lamb&rice.jpg'],
                        price: 30,
                        available: 5,
                        type: 'lb',
                        deal: 10,
                    },
                    {
                        name: 'Black Hawk Puppy Chicken Rice',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/dog_food_black_hawk_puppy_large_breedchicken&rice.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/dog_food_black_hawk_puppy_large_breedchicken&rice.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/dog_food_black_hawk_puppy_large_breedchicken&rice.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/dog_food_black_hawk_puppy_large_breedchicken&rice.jpg'],
                        price: 30,
                        available: 5,
                        type: 'lb',
                        deal: 10,
                    },
                    {
                        name: 'Blain S Farm Fleet',
                        img: ["https://s3.amazonaws.com/redqteam.com/pickbazar/dog_food_blain's_farm&fleet.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/dog_food_blain's_farm&fleet.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/dog_food_blain's_farm&fleet.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/dog_food_blain's_farm&fleet.jpg"],
                        price: 25,
                        available: 5,
                        type: 'lb',
                    },
                    {
                        name: 'Blue Wilderness Chicken Recepie',
                        img: ["https://s3.amazonaws.com/redqteam.com/pickbazar/dog_food_blue_wilderness.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/dog_food_blue_wilderness.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/dog_food_blue_wilderness.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/dog_food_blue_wilderness.jpg"],
                        price: 25,
                        available: 5,
                        type: 'lb',
                    },
                    {
                        name: 'Whole Hearted Beef Pea Recepie',
                        img: ["https://s3.amazonaws.com/redqteam.com/pickbazar/dog_food_whole_hearted_beef&pea.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/dog_food_whole_hearted_beef&pea.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/dog_food_whole_hearted_beef&pea.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/dog_food_whole_hearted_beef&pea.jpg"],
                        price: 40,
                        available: 8,
                        type: 'lb',
                        deal: 20,
                    },
                    {
                        name: 'Whole Hearted Salmon Pea Recepie',
                        img: ["https://s3.amazonaws.com/redqteam.com/pickbazar/dog_food_whole_hearted_salmon&pea.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/dog_food_whole_hearted_salmon&pea.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/dog_food_whole_hearted_salmon&pea.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/dog_food_whole_hearted_salmon&pea.jpg"],
                        price: 40,
                        available: 8,
                        type: 'lb',
                    },
                    {
                        name: 'Zenith Lamb Brown Rice',
                        img: ["https://s3.amazonaws.com/redqteam.com/pickbazar/dog_food_zenith.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/dog_food_zenith.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/dog_food_zenith.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/dog_food_zenith.jpg"],
                        price: 40,
                        available: 8,
                        type: 'lb',
                    },
                ],
            },
            {
                id: 15,
                name: 'Kitten Food',
                details: [
                    {
                        name: 'Applaws Grain Free',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_applaws_adult_cat_chicken.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_applaws_adult_cat_chicken.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_applaws_adult_cat_chicken.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_applaws_adult_cat_chicken.jpg'],
                        price: 40,
                        available: 8,
                        type: 'lb'
                    },
                    {
                        name: 'Authority Chicken Rice Formula',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_authority_real_chicken.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_authority_real_chicken.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_authority_real_chicken.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_authority_real_chicken.jpg'],
                        price: 30,
                        available: 5,
                        type: 'lb',
                        deal: 10
                    },
                    {
                        name: 'Hills Ideal Balance',
                        img: ["https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_hill's_ideal_balance_over1year_kitten.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_hill's_ideal_balance_over1year_kitten.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_hill's_ideal_balance_over1year_kitten.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_hill's_ideal_balance_over1year_kitten.jpg"],
                        price: 30,
                        available: 5,
                        type: 'lb',
                    },
                    {
                        name: 'Hills Science Diet',
                        img: ["https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_hill's_science_diet_upto1year_kitten.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_hill's_science_diet_upto1year_kitten.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_hill's_science_diet_upto1year_kitten.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_hill's_science_diet_upto1year_kitten.jpg"],
                        price: 30,
                        available: 5,
                        type: 'lb',
                    },
                    {
                        name: 'lams Proactive Health',
                        img: ["https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_iamso_upto1year.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_iamso_upto1year.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_iamso_upto1year.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_iamso_upto1year.jpg"],
                        price: 20,
                        available: 5,
                        type: 'lb',
                        deal: 20
                    },
                    {
                        name: 'Instinct Original Grain Free',
                        img: ["https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_instinct_chicken.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_instinct_chicken.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_instinct_chicken.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_instinct_chicken.jpg"],
                        price: 20,
                        available: 5,
                        type: 'lb',
                    },
                    {
                        name: 'Merrick Purrfect Bistro Grain Free',
                        img: ["https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_merrick.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_merrick.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_merrick.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_merrick.jpg"],
                        price: 25,
                        available: 5,
                        type: 'lb',
                    },
                    {
                        name: 'Purina Healthy Kitten Formula',
                        img: ["https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_purina_one.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_purina_one.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_purina_one.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_purina_one.jpg"],
                        price: 25,
                        available: 5,
                        type: 'lb',
                        deal: 10
                    },
                    {
                        name: 'Purina Pro Plan',
                        img: ["https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_purina_proplan.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_purina_proplan.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_purina_proplan.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_purina_proplan.jpg"],
                        price: 35,
                        available: 4,
                        type: 'lb',
                    },
                    {
                        name: 'Wellness Complete Health',
                        img: ["https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_wellness.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_wellness.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_wellness.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_wellness.jpg"],
                        price: 35,
                        available: 6,
                        type: 'lb',
                    },
                    {
                        name: 'Whiskas',
                        img: ["https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_whiskas_real_chicken.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_whiskas_real_chicken.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_whiskas_real_chicken.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/kitten_food_whiskas_real_chicken.jpg"],
                        price: 35,
                        available: 4,
                        type: 'lb',
                    },
                ],
            },
            {
                id: 16,
                name: 'Pet Accessories',
                details: [
                    {
                        name: 'Black Winter Cap',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_black_winter_cap.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_black_winter_cap.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_black_winter_cap.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_black_winter_cap.jpg'],
                        price: 5,
                        available: 1,
                        type: 'pc(s)'
                    },
                    {
                        name: 'Brown White Winter Cap',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_brown&white_winter_cap.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_brown&white_winter_cap.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_brown&white_winter_cap.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_brown&white_winter_cap.jpg'],
                        price: 3,
                        available: 1,
                        type: 'pc(s)'
                    },
                    {
                        name: 'Batman Cap',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_costume1.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_costume1.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_costume1.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_costume1.jpg'],
                        price: 3,
                        available: 1,
                        type: 'pc(s)'
                    },
                    {
                        name: 'Skelton Cap',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_costume2.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_costume2.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_costume2.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_costume2.jpg'],
                        price: 3,
                        available: 1,
                        type: 'pc(s)',
                        deal: 10,
                    },
                    {
                        name: 'Ash Jacket',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_jacket_ash.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_jacket_ash.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_jacket_ash.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_jacket_ash.jpg'],
                        price: 5,
                        available: 1,
                        type: 'pc(s)',
                        deal: 20,
                    },
                    {
                        name: 'Red Jacket',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_jacket_red.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_jacket_red.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_jacket_red.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_jacket_red.jpg'],
                        price: 5,
                        available: 1,
                        type: 'pc(s)',
                    },
                    {
                        name: 'Cat Bed Brown',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_pet_bed1.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_pet_bed1.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_pet_bed1.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_pet_bed1.jpg'],
                        price: 15,
                        available: 1,
                        type: 'pc(s)',
                        deal: 20,
                    },
                    {
                        name: 'Cat Bed Grey',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_pet_bed2.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_pet_bed2.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_pet_bed2.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_pet_bed2.jpg'],
                        price: 15,
                        available: 1,
                        type: 'pc(s)',
                    },
                    {
                        name: 'Dog Bed Brown Red',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_pet_bed4.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_pet_bed4.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_pet_bed4.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_pet_bed4.jpg'],
                        price: 15,
                        available: 1,
                        type: 'pc(s)',
                    },
                    {
                        name: 'Red White Stripped Sweater',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_red&white_christmas_sweater.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_red&white_christmas_sweater.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_red&white_christmas_sweater.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_red&white_christmas_sweater.jpg'],
                        price: 10,
                        available: 1,
                        type: 'pc(s)',
                    },
                    {
                        name: 'Red White Jupmer',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_red&white_jumper1.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_red&white_jumper1.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_red&white_jumper1.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_red&white_jumper1.jpg'],
                        price: 10,
                        available: 1,
                        type: 'pc(s)',
                    },
                    {
                        name: 'Red Winter Cap',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_red_crhistmas_winter_cap.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_red_crhistmas_winter_cap.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_red_crhistmas_winter_cap.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_red_crhistmas_winter_cap.jpg'],
                        price: 10,
                        available: 1,
                        type: 'pc(s)',
                    },
                    {
                        name: 'Rainbow Tie',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_tie.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_tie.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_tie.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_tie.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pet_accessories_tie.jpg'],
                        price: 1.5,
                        available: 1,
                        type: 'pc(s)',
                        deal: 25
                    },
                ],
            },
        ]
    },
    
    {
        id: 5,
        type: 'Home & Cleaning',
        icon: <AiOutlineClear />,
        details: [
            {
                id: 17,
                name: 'Air Freshener',
                details: [
                    {
                        name: 'Ozmo Air Fabric Freshner',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/air_freshner_acana_ozmo.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/air_freshner_acana_ozmo.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/air_freshner_acana_ozmo.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/air_freshner_acana_ozmo.jpg'],
                        price: 20,
                        available: 1,
                        type: 'pc(s)',
                        deal: 25
                    },
                    {
                        name: 'Air Wick Essential Oils',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/air_freshner_air_wick_essential_oils.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/air_freshner_air_wick_essential_oils.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/air_freshner_air_wick_essential_oils.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/air_freshner_air_wick_essential_oils.jpg'],
                        price: 20,
                        available: 1,
                        type: 'pc(s)',
                    },
                    {
                        name: 'Ambi Pur Air',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/air_freshner_ambipur_air_sweet_citrus&zest.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/air_freshner_ambipur_air_sweet_citrus&zest.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/air_freshner_ambipur_air_sweet_citrus&zest.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/air_freshner_ambipur_air_sweet_citrus&zest.jpg'],
                        price: 15,
                        available: 1,
                        type: 'pc(s)',
                    },
                    {
                        name: 'Broadwalk Air Freshner',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/air_freshner_boardwalk_mango.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/air_freshner_boardwalk_mango.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/air_freshner_boardwalk_mango.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/air_freshner_boardwalk_mango.jpg'],
                        price: 15,
                        available: 0.5,
                        type: 'lb',
                    },
                    {
                        name: 'Febreze Air Bora Bora Waters',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/air_freshner_febreze_air_bora_bora.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/air_freshner_febreze_air_bora_bora.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/air_freshner_febreze_air_bora_bora.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/air_freshner_febreze_air_bora_bora.jpg'],
                        price: 15,
                        available: 1,
                        type: 'pc(s)',
                    },
                    {
                        name: 'Febreze Air Effecrs',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/air_freshner_febreze_air_effects.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/air_freshner_febreze_air_effects.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/air_freshner_febreze_air_effects.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/air_freshner_febreze_air_effects.jpg'],
                        price: 15,
                        available: 1,
                        type: 'pc(s)',
                    },
                    {
                        name: 'Febreze Air Hawaiian',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/air_freshner_febreze_air_hawaiian.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/air_freshner_febreze_air_hawaiian.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/air_freshner_febreze_air_hawaiian.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/air_freshner_febreze_air_hawaiian.jpg'],
                        price: 15,
                        available: 1,
                        type: 'pc(s)',
                    },
                    {
                        name: 'Glade Blue Odssey',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/air_freshner_sc_johnson_glade_blue_odyssey.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/air_freshner_sc_johnson_glade_blue_odyssey.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/air_freshner_sc_johnson_glade_blue_odyssey.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/air_freshner_sc_johnson_glade_blue_odyssey.jpg'],
                        price: 18,
                        available: 1,
                        type: 'pc(s)',
                    },
                    {
                        name: 'Glade Clean Linen',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/air_freshner_sc_johnson_glade_clean_linen.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/air_freshner_sc_johnson_glade_clean_linen.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/air_freshner_sc_johnson_glade_clean_linen.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/air_freshner_sc_johnson_glade_clean_linen.jpg'],
                        price: 20,
                        available: 1,
                        type: 'pc(s)',
                        deal: 10
                    },
                    {
                        name: 'Vibrant Air Freshner',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/air_freshner_vibrant_linen.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/air_freshner_vibrant_linen.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/air_freshner_vibrant_linen.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/air_freshner_vibrant_linen.jpg'],
                        price: 20,
                        available: 1,
                        type: 'pc(s)',
                        deal: 10
                    },
                ],
            },
            {
                id: 18,
                name: 'Cleaning Products',
               details: [
                   {
                        name: 'Ajax Floor Cleaner',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/cleaning_supply_ajax.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cleaning_supply_ajax.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cleaning_supply_ajax.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cleaning_supply_ajax.jpg'],
                        price: 20,
                        available: 1,
                        type: 'pc(s)',
                        deal: 10
                    },
                   {
                        name: 'Astonish Oven Power Spray',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/cleaning_supply_astonish.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cleaning_supply_astonish.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cleaning_supply_astonish.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cleaning_supply_astonish.jpg'],
                        price: 15,
                        available: 1,
                        type: 'pc(s)',
                    },
                   {
                        name: 'Bio Toilet Cleaner',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/cleaning_supply_bio.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cleaning_supply_bio.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cleaning_supply_bio.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cleaning_supply_bio.jpg'],
                        price: 10,
                        available: 1,
                        type: 'pc(s)',
                        deal: 20
                    },
                   {
                        name: 'Bona Hardwood Floor Cleaner',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/cleaning_supply_bona.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cleaning_supply_bona.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cleaning_supply_bona.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cleaning_supply_bona.jpg'],
                        price: 10,
                        available: 1,
                        type: 'pc(s)',
                    },
                   {
                        name: 'Ever Spring Glass Cleaner',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/cleaning_supply_ever_spring.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cleaning_supply_ever_spring.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cleaning_supply_ever_spring.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cleaning_supply_ever_spring.jpg'],
                        price: 10,
                        available: 1,
                        type: 'pc(s)',
                    },
                   {
                        name: 'Glitz Outdoor Glass Cleaner',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/cleaning_supply_glitz_glass_cleaner.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cleaning_supply_glitz_glass_cleaner.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cleaning_supply_glitz_glass_cleaner.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cleaning_supply_glitz_glass_cleaner.jpg'],
                        price: 40,
                        available: 1,
                        type: 'pc(s)',
                        deal: 10
                    },
                   {
                        name: 'Glitz Bbq Stainless Steel Cleaner',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/cleaning_supply_glitz_steel_cleaner.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cleaning_supply_glitz_steel_cleaner.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cleaning_supply_glitz_steel_cleaner.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cleaning_supply_glitz_steel_cleaner.jpg'],
                        price: 20,
                        available: 1,
                        type: 'pc(s)',
                        deal: 10
                    },
                   {
                        name: 'Method All Purpose Cleaner',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/cleaning_supply_method.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cleaning_supply_method.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cleaning_supply_method.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/cleaning_supply_method.jpg'],
                        price: 20,
                        available: 1,
                        type: 'pc(s)',
                    },
               ],
            },
            {
                id: 19,
                name: 'Dishwasher',
                details: [
                    {
                        name: 'Dawn',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/dishwasher_dawn_la_faune.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/dishwasher_dawn_la_faune.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/dishwasher_dawn_la_faune.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/dishwasher_dawn_la_faune.jpg'],
                        price: 5,
                        available: 1,
                        type: 'pc(s)',
                    },
                    {
                        name: 'Dawn Escapes',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/dishwasher_dawn_new_zealand_spring_scent.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/dishwasher_dawn_new_zealand_spring_scent.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/dishwasher_dawn_new_zealand_spring_scent.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/dishwasher_dawn_new_zealand_spring_scent.jpg'],
                        price: 5,
                        available: 1,
                        type: 'pc(s)',
                        deal: 10,
                    },
                    {
                        name: 'Fairy Lemon',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/dishwasher_fairy_lemon.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/dishwasher_fairy_lemon.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/dishwasher_fairy_lemon.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/dishwasher_fairy_lemon.jpg'],
                        price: 5,
                        available: 1,
                        type: 'pc(s)',
                    },
                    {
                        name: 'Finish All In One',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/dishwasher_finish.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/dishwasher_finish.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/dishwasher_finish.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/dishwasher_finish.jpg'],
                        price: 5,
                        available: 1,
                        type: 'pc(s)',
                        deal: 20,
                    },
                    {
                        name: 'Lemi Shine',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/dishwasher_lemi_shine.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/dishwasher_lemi_shine.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/dishwasher_lemi_shine.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/dishwasher_lemi_shine.jpg'],
                        price: 5,
                        available: 1,
                        type: 'pc(s)',
                    },
                    {
                        name: 'Seventh Generation',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/dishwasher_seventh_generation_free&clear.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/dishwasher_seventh_generation_free&clear.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/dishwasher_seventh_generation_free&clear.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/dishwasher_seventh_generation_free&clear.jpg'],
                        price: 4,
                        available: 1,
                        type: 'pc(s)',
                    },
                    {
                        name: "Winni's Ammorbidente",
                        img: ["https://s3.amazonaws.com/redqteam.com/pickbazar/dishwasher_winni's_fiori_bianchi.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/dishwasher_winni's_fiori_bianchi.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/dishwasher_winni's_fiori_bianchi.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/dishwasher_winni's_fiori_bianchi.jpg"],
                        price: 6.5,
                        available: 1,
                        type: 'pc(s)',
                    },
                ],
            },
            {
                id: 20,
                name: 'Kitchen Accessories',
                details: [
                    {
                        name: 'Camp Cutlery',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/kitchen_accessories_camp_cutlery.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/kitchen_accessories_camp_cutlery.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/kitchen_accessories_camp_cutlery.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/kitchen_accessories_camp_cutlery.jpg'],
                        price: 10,
                        available: 1,
                        type: 'pc(s)',
                        deal: 25,
                    },
                    {
                        name: 'Dinner Spoon',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/kitchen_accessories_dinner_spoons.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/kitchen_accessories_dinner_spoons.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/kitchen_accessories_dinner_spoons.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/kitchen_accessories_dinner_spoons.jpg'],
                        price: 10,
                        available: 1,
                        type: 'pc(s)',
                        deal: 20,
                    },
                    {
                        name: 'Ice Cream Scoop',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/kitchen_accessories_ice_cream_scoop.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/kitchen_accessories_ice_cream_scoop.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/kitchen_accessories_ice_cream_scoop.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/kitchen_accessories_ice_cream_scoop.jpg'],
                        price: 5,
                        available: 1,
                        type: 'pc(s)',
                    },
                    {
                        name: 'Kitchen Tools',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/kitchen_accessories_kitchen_tools.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/kitchen_accessories_kitchen_tools.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/kitchen_accessories_kitchen_tools.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/kitchen_accessories_kitchen_tools.jpg'],
                        price: 15,
                        available: 1,
                        type: 'pc(s)',
                    },
                    {
                        name: 'Mesh Strainers',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/kitchen_accessories_mash_strainers.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/kitchen_accessories_mash_strainers.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/kitchen_accessories_mash_strainers.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/kitchen_accessories_mash_strainers.jpg'],
                        price: 5,
                        available: 1,
                        type: 'pc(s)',
                    },
                    {
                        name: 'Skimmers',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/kitchen_accessories_skimmer.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/kitchen_accessories_skimmer.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/kitchen_accessories_skimmer.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/kitchen_accessories_skimmer.jpg'],
                        price: 3,
                        available: 1,
                        type: 'pc(s)',
                    },
                    {
                        name: 'Solid Turner',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/kitchen_accessories_solid_turner.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/kitchen_accessories_solid_turner.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/kitchen_accessories_solid_turner.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/kitchen_accessories_solid_turner.jpg'],
                        price: 3,
                        available: 1,
                        type: 'pc(s)',
                    },
                ],
            },
            {
                id: 21,
                name: 'Laundry',
                details: [
                    {
                        name: 'Woolite Gentle Cycle',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_woolite.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_woolite.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_woolite.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_woolite.jpg'],
                        price: 30,
                        available: 1,
                        type: 'pc(s)'
                    },
                    {
                        name: 'Tide Downy',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_tide.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_tide.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_tide.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_tide.jpg'],
                        price: 30,
                        available: 4,
                        type: 'lb',
                        deal: 30
                    },
                    {
                        name: 'Seventh Generation Sensative Skin',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_seventh_generation.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_seventh_generation.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_seventh_generation.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_seventh_generation.jpg'],
                        price: 30,
                        available: 4,
                        type: 'lb',
                        deal: 20
                    },
                    {
                        name: 'Safe Wash',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_safe_wash.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_safe_wash.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_safe_wash.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_safe_wash.jpg'],
                        price: 30,
                        available: 4,
                        type: 'lb',
                    },
                    {
                        name: 'Purex Oxi',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_purex.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_purex.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_purex.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_purex.jpg'],
                        price: 25,
                        available: 4,
                        type: 'lb',
                    },
                    {
                        name: 'Persil Power Gel',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_persil.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_persil.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_persil.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_persil.jpg'],
                        price: 35,
                        available: 4,
                        type: 'lb',
                    },
                    {
                        name: 'Home Made Simple',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_home_made_simple.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_home_made_simple.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_home_made_simple.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_home_made_simple.jpg'],
                        price: 18,
                        available: 4,
                        type: 'lb',
                    },
                    {
                        name: 'Ecos',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_ecos.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_ecos.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_ecos.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_ecos.jpg'],
                        price: 28,
                        available: 4,
                        type: 'lb',
                    },
                    {
                        name: 'Daz',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_daz.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_daz.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_daz.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_daz.jpg'],
                        price: 32,
                        available: 6,
                        type: 'lb',
                    },
                    {
                        name: 'Chomel Baby Laundry Detergent',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_chomel.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_chomel.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_chomel.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_chomel.jpg'],
                        price: 50,
                        available: 6,
                        type: 'lb',
                    },
                    {
                        name: 'Chicco Baby Laundry Detergent',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_chicco.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_chicco.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_chicco.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_chicco.jpg'],
                        price: 48,
                        available: 6,
                        type: 'lb',
                    },
                    {
                        name: 'Babyhug Baby Laundry Detergent',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_babyhug.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_babyhug.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_babyhug.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/laundry_products_babyhug.jpg'],
                        price: 40,
                        available: 6,
                        type: 'lb',
                        deal: 10,
                    },
                ],
            },
            {
                id: 22,
                name: 'Pest Control',
                details: [
                    {
                        name: 'Doff Insect Killer',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/pest_control_doff.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pest_control_doff.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pest_control_doff.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pest_control_doff.jpg'],
                        price: 10,
                        available: 2,
                        type: 'lb'
                    },
                    {
                        name: 'Homepest Control',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/pest_control_eco_deffence_home_pest_control.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pest_control_eco_deffence_home_pest_control.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pest_control_eco_deffence_home_pest_control.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pest_control_eco_deffence_home_pest_control.jpg'],
                        price: 15,
                        available: 2,
                        type: 'lb',
                        deal: 20
                    },
                    {
                        name: 'Professional Moth Killer',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/pest_control_kritterkill.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pest_control_kritterkill.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pest_control_kritterkill.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pest_control_kritterkill.jpg'],
                        price: 12,
                        available: 2,
                        type: 'lb',
                    },
                    {
                        name: 'Naturally Green No More Bugs',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/pest_control_naturally_green.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pest_control_naturally_green.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pest_control_naturally_green.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pest_control_naturally_green.jpg'],
                        price: 18,
                        available: 2,
                        type: 'lb',
                    },
                    {
                        name: 'Raid Ant & Roach Barrier',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/pest_control_sc_johnson_raid.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pest_control_sc_johnson_raid.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pest_control_sc_johnson_raid.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pest_control_sc_johnson_raid.jpg'],
                        price: 18,
                        available: 2,
                        type: 'lb',
                    },
                    {
                        name: 'Wondercide Indoor Pest Control',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/pest_control_wondercide_indoor_pest_control.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pest_control_wondercide_indoor_pest_control.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pest_control_wondercide_indoor_pest_control.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pest_control_wondercide_indoor_pest_control.jpg'],
                        price: 20,
                        available: 2,
                        type: 'lb',
                    },
                ],
            },
        ]
    },

    {
        id: 6,
        type: 'Dairy',
        icon: <BiCoffeeTogo />,
        details: [
            {
                id: 23,
                name: 'Butter',
                details: [
                    {
                        name: 'Barney Butter',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/butter_barney.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/butter_barney.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/butter_barney.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/butter_barney.jpg'],
                        price: 8,
                        available: 1,
                        type: 'pc(s)'
                    },
                    {
                        name: 'Kirkland Signature',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/butter_kirkland.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/butter_kirkland.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/butter_kirkland.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/butter_kirkland.jpg'],
                        price: 9,
                        available: 1,
                        type: 'pc(s)',
                        deal: 10,
                    },
                    {
                        name: "Nature's Tattva Shea Butter",
                        img: ["https://s3.amazonaws.com/redqteam.com/pickbazar/butter_nature's_tattva.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/butter_nature's_tattva.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/butter_nature's_tattva.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/butter_nature's_tattva.jpg"],
                        price: 9,
                        available: 1,
                        type: 'pc(s)',
                    },
                    {
                        name: "Nikki's Coconut Butter",
                        img: ["https://s3.amazonaws.com/redqteam.com/pickbazar/butter_nikki's.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/butter_nikki's.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/butter_nikki's.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/butter_nikki's.jpg"],
                        price: 10,
                        available: 1,
                        type: 'pc(s)',
                        deal: 30,
                    },
                    {
                        name: "Tnuva Salted Butter",
                        img: ["https://s3.amazonaws.com/redqteam.com/pickbazar/butter_tnuva.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/butter_tnuva.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/butter_tnuva.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/butter_tnuva.jpg"],
                        price: 10,
                        available: 1,
                        type: 'pc(s)',
                    },
                    {
                        name: "Tru Nut Powdered Peanut Butter",
                        img: ["https://s3.amazonaws.com/redqteam.com/pickbazar/butter_tru_nut.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/butter_tru_nut.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/butter_tru_nut.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/butter_tru_nut.jpg"],
                        price: 10,
                        available: 1,
                        type: 'pc(s)',
                    },
                    {
                        name: "Whole Earth Crunchy Peanut Butter",
                        img: ["https://s3.amazonaws.com/redqteam.com/pickbazar/butter_whole_earth.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/butter_whole_earth.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/butter_whole_earth.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/butter_whole_earth.jpg"],
                        price: 10,
                        available: 1,
                        type: 'pc(s)',
                    },
                ],
            },
            {
                id: 24,
                name: 'Egg',
                details: [
                    {
                        name: 'Cavanagh Free Range Eggs',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/egg_cavanagh.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/egg_cavanagh.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/egg_cavanagh.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/egg_cavanagh.jpg'],
                        price: 2,
                        available: 1,
                        type: 'pc(s)'
                    },
                    {
                        name: 'Clarence Court 6 Free Range Eggs',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/egg_clarenece_court.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/egg_clarenece_court.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/egg_clarenece_court.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/egg_clarenece_court.jpg'],
                        price: 2,
                        available: 1,
                        type: 'pc(s)',
                        deal: 10,
                    },
                    {
                        name: 'Cp Omega',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/egg_cp.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/egg_cp.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/egg_cp.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/egg_cp.jpg'],
                        price: 2,
                        available: 1,
                        type: 'pc(s)',
                    },
                    {
                        name: 'Freshlay Golden Yolks',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/egg_freshlay_golden_yolks.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/egg_freshlay_golden_yolks.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/egg_freshlay_golden_yolks.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/egg_freshlay_golden_yolks.jpg'],
                        price: 2.5,
                        available: 1,
                        type: 'pc(s)',
                    },
                    {
                        name: 'Golden Cage Free',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/egg_gold_hen.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/egg_gold_hen.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/egg_gold_hen.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/egg_gold_hen.jpg'],
                        price: 2.5,
                        available: 1,
                        type: 'pc(s)',
                    },
                    {
                        name: 'Happy Egg Organic',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/egg_happy_egg_organic.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/egg_happy_egg_organic.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/egg_happy_egg_organic.jpg','https://s3.amazonaws.com/redqteam.com/pickbazar/egg_happy_egg_organic.jpg'],
                        price: 4,
                        available: 1,
                        type: 'pc(s)',
                        deal: 10,
                    },
                    {
                        name: 'Morrisons 6 Medium Free Range Golden YolK Eggs',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/egg_morrisons.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/egg_morrisons.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/egg_morrisons.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/egg_morrisons.jpg'],
                        price: 4,
                        available: 1,
                        type: 'pc(s)',
                        deal: 10,
                    },
                    {
                        name: 'Nutri Plus Telur Omega3',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/egg_nutri_plus_telur_kampang_omega3.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/egg_nutri_plus_telur_kampang_omega3.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/egg_nutri_plus_telur_kampang_omega3.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/egg_nutri_plus_telur_kampang_omega3.jpg'],
                        price: 4,
                        available: 1,
                        type: 'pc(s)',
                    },
                ],
            },
            {
                id: 25,
                name: 'Milk',
               details: [
                    {
                        name: 'Arla Lacto Free Semi Skimmed Milk',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/milk_arla_lacto_free.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/milk_arla_lacto_free.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/milk_arla_lacto_free.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/milk_arla_lacto_free.jpg'],
                        price: 4,
                        available: 2,
                        type: 'lb',
                        deal: 10,
                    },
                    {
                        name: 'Arla All Natural Milk Goodness Low Fat',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/milk_arla_low_fat1.5.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/milk_arla_low_fat1.5.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/milk_arla_low_fat1.5.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/milk_arla_low_fat1.5.jpg'],
                        price: 4,
                        available: 2,
                        type: 'lb',
                    },
                    {
                        name: 'Magnolia Fresh Milk',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/milk_f&n_magnolia.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/milk_f&n_magnolia.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/milk_f&n_magnolia.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/milk_f&n_magnolia.jpg'],
                        price: 4,
                        available: 2,
                        type: 'lb',
                    },
                    {
                        name: 'Greenfields Chocolate Malt',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/milk_greenfields_choco_malt_flavoured.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/milk_greenfields_choco_malt_flavoured.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/milk_greenfields_choco_malt_flavoured.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/milk_greenfields_choco_malt_flavoured.jpg'],
                        price: 5,
                        available: 2,
                        type: 'lb',
                    },
                    {
                        name: 'Heritage Special Long Life Milk',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/milk_heritage.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/milk_heritage.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/milk_heritage.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/milk_heritage.jpg'],
                        price: 5,
                        available: 2,
                        type: 'lb',
                    },
                    {
                        name: 'Lactaid',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/milk_lactaid.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/milk_lactaid.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/milk_lactaid.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/milk_lactaid.jpg'],
                        price: 5,
                        available: 2,
                        type: 'lb',
                        deal: 10,
                    },
                    {
                        name: 'Living Planet Organic Dairy Milk',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/milk_living_planet.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/milk_living_planet.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/milk_living_planet.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/milk_living_planet.jpg'],
                        price: 5,
                        available: 2,
                        type: 'lb',
                        deal: 10,
                    },
                ],
            },
            {
                id: 26,
                name: 'Milk Cream',
                details: [],
            },
            {
                id: 27,
                name: 'Powder Milk',
                details: [
                    {
                        name: 'Scape Milk Powder',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/powder_milk_scape.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/powder_milk_scape.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/powder_milk_scape.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/powder_milk_scape.jpg'],
                        price: 5,
                        available: 2,
                        type: 'lb'
                    },
                    {
                        name: 'Natural Foods Organic Coconut Milk Powder',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/powder_milk_z_natural_foods.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/powder_milk_z_natural_foods.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/powder_milk_z_natural_foods.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/powder_milk_z_natural_foods.jpg'],
                        price: 5,
                        available: 2,
                        type: 'lb',
                        deal: 20,
                    },
                    {
                        name: 'Param Premium Milk Powder',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/powder_milk_param.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/powder_milk_param.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/powder_milk_param.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/powder_milk_param.jpg'],
                        price: 5,
                        available: 2,
                        type: 'lb',
                    },
                    {
                        name: 'Nestle Nido',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/powder_milk_nestle_nido_900gram.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/powder_milk_nestle_nido_900gram.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/powder_milk_nestle_nido_900gram.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/powder_milk_nestle_nido_900gram.jpg'],
                        price: 5,
                        available: 2,
                        type: 'lb',
                    },
                    {
                        name: 'Milgro',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/powder_milk_milgro.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/powder_milk_milgro.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/powder_milk_milgro.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/powder_milk_milgro.jpg'],
                        price: 5,
                        available: 2,
                        type: 'lb',
                    },
                    {
                        name: 'Lifestyle Soya Milk Powder',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/powder_milk_lifestyle_food.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/powder_milk_lifestyle_food.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/powder_milk_lifestyle_food.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/powder_milk_lifestyle_food.jpg'],
                        price: 5,
                        available: 2,
                        type: 'lb',
                        deal: 10
                    },
                    {
                        name: 'Goldmilys Instant Milk Powder',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/powder_milk_goldmilys.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/powder_milk_goldmilys.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/powder_milk_goldmilys.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/powder_milk_goldmilys.jpg'],
                        price: 4,
                        available: 2,
                        type: 'lb',
                    },
                ],
            },
            {
                id: 28,
                name: 'Yogourt',
                details: [
                    {
                        name: 'Nammilk Greek Style',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/milk_cream_nammilk.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/milk_cream_nammilk.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/milk_cream_nammilk.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/milk_cream_nammilk.jpg'],
                        price: 4,
                        available: 2,
                        type: 'lb',
                    },
                    {
                        name: 'Astro Original',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/yogourt_astro_balkan.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/yogourt_astro_balkan.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/yogourt_astro_balkan.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/yogourt_astro_balkan.jpg'],
                        price: 4,
                        available: 2,
                        type: 'lb',
                        deal: 20
                    },
                    {
                        name: 'Astro Bio Best',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/yogourt_astro_bio_best.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/yogourt_astro_bio_best.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/yogourt_astro_bio_best.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/yogourt_astro_bio_best.jpg'],
                        price: 4,
                        available: 2,
                        type: 'lb',
                    },
                    {
                        name: 'Chobani',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/yogourt_chobani_plain_non_fat.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/yogourt_chobani_plain_non_fat.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/yogourt_chobani_plain_non_fat.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/yogourt_chobani_plain_non_fat.jpg'],
                        price: 4,
                        available: 2,
                        type: 'lb',
                    },
                    {
                        name: 'Chobani Vanilla Blended',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/yogourt_chobani_vanilla.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/yogourt_chobani_vanilla.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/yogourt_chobani_vanilla.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/yogourt_chobani_vanilla.jpg'],
                        price: 4,
                        available: 2,
                        type: 'lb',
                    },
                    {
                        name: 'Dannon Strawberry',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/yogourt_dannon_strawberry.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/yogourt_dannon_strawberry.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/yogourt_dannon_strawberry.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/yogourt_dannon_strawberry.jpg'],
                        price: 4,
                        available: 2,
                        type: 'lb',
                    },
                    {
                        name: 'Dannon Vanilla',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/yogourt_dannon_vanilla.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/yogourt_dannon_vanilla.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/yogourt_dannon_vanilla.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/yogourt_dannon_vanilla.jpg'],
                        price: 4,
                        available: 2,
                        type: 'lb',
                    },
                    {
                        name: 'Marigold Yogourt',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/yogourt_marigold.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/yogourt_marigold.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/yogourt_marigold.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/yogourt_marigold.jpg'],
                        price: 5,
                        available: 2,
                        type: 'lb',
                    },
                    {
                        name: 'Stony Field Vanilla',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/yogourt_stony_field_vanilla_fudge_swirl.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/yogourt_stony_field_vanilla_fudge_swirl.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/yogourt_stony_field_vanilla_fudge_swirl.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/yogourt_stony_field_vanilla_fudge_swirl.jpg'],
                        price: 5,
                        available: 2,
                        type: 'lb',
                        deal: 10
                    },
                ],
            },
        ]
    },

    {
        id: 7,
        type: 'Cooking',
        icon: <CgSmartHomeCooker />,
        details: [
            {
                id: 29,
                name: 'Oil',
                details: [
                    {
                        name: '1 2 3 Vegetable Oil',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/oil_1_2_3_vegitable.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/oil_1_2_3_vegitable.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/oil_1_2_3_vegitable.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/oil_1_2_3_vegitable.jpg'],
                        price: 5,
                        available: 2,
                        type: 'lb',
                        deal: 20
                    },
                    {
                        name: 'Clover Valley Vegetable Oil',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/oil_clover_valley.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/oil_clover_valley.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/oil_clover_valley.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/oil_clover_valley.jpg'],
                        price: 8,
                        available: 4,
                        type: 'lb',
                        deal: 20
                    },
                    {
                        name: 'Daisy Corn Oil',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/oil_daisy.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/oil_daisy.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/oil_daisy.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/oil_daisy.jpg'],
                        price: 8,
                        available: 3,
                        type: 'lb',
                    },
                    {
                        name: 'Eva Corn Oil',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/oil_eva.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/oil_eva.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/oil_eva.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/oil_eva.jpg'],
                        price: 8,
                        available: 3,
                        type: 'lb',
                    },
                    {
                        name: 'Goya Extra Virgin Olive Oil',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/oil_goya.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/oil_goya.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/oil_goya.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/oil_goya.jpg'],
                        price: 10,
                        available: 2,
                        type: 'lb',
                    },
                    {
                        name: 'Naturel Premium Sunflower Oil',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/oil_natural.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/oil_natural.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/oil_natural.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/oil_natural.jpg'],
                        price: 8,
                        available: 2,
                        type: 'lb',
                    },
                    {
                        name: 'San Lucas Corn Oil',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/oil_san_lucas.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/oil_san_lucas.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/oil_san_lucas.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/oil_san_lucas.jpg'],
                        price: 7,
                        available: 2,
                        type: 'lb',
                    },
                    {
                        name: 'Sunfoil Sunflower Oil',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/oil_sunfoil.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/oil_sunfoil.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/oil_sunfoil.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/oil_sunfoil.jpg'],
                        price: 9,
                        available: 2,
                        type: 'lb',
                    },
                ],
            },
            {
                id: 30,
                name: 'Rice',
                details: [
                    {
                        name: 'Chef Choice Bamboo Rice',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/chefa_choice_bamboo_rice.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/chefa_choice_bamboo_rice.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/chefa_choice_bamboo_rice.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/chefa_choice_bamboo_rice.jpg'],
                        price: 9,
                        available: 2,
                        type: 'lb'
                    },
                    {
                        name: 'Everyday Essentials Golden Vegetable Savoury Rice',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/everyday_essentials_Golden_Vegetable_Savoury_Rice.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/everyday_essentials_Golden_Vegetable_Savoury_Rice.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/everyday_essentials_Golden_Vegetable_Savoury_Rice.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/everyday_essentials_Golden_Vegetable_Savoury_Rice.jpg'],
                        price: 5,
                        available: 2,
                        type: 'lb'
                    },
                    {
                        name: 'Hulas Premium Basmati Rice',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/hulas_premium_basmati_rice.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/hulas_premium_basmati_rice.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/hulas_premium_basmati_rice.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/hulas_premium_basmati_rice.jpg'],
                        price: 5,
                        available: 2,
                        type: 'lb',
                        deal: 20
                    },
                    {
                        name: 'Jasmine Long Grain Fragrant Rice',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/Iberia_Long_Grain_Enriched_Fragrant_Rice_18_lbs.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Iberia_Long_Grain_Enriched_Fragrant_Rice_18_lbs.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Iberia_Long_Grain_Enriched_Fragrant_Rice_18_lbs.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Iberia_Long_Grain_Enriched_Fragrant_Rice_18_lbs.jpg'],
                        price: 40,
                        available: 20,
                        type: 'lb',
                        deal: 20,
                    },
                    {
                        name: 'India Gate Basmati Rice',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/india_gate_basmati_rice.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/india_gate_basmati_rice.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/india_gate_basmati_rice.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/india_gate_basmati_rice.jpg'],
                        price: 40,
                        available: 20,
                        type: 'lb',
                    },
                    {
                        name: 'Natures Gift Basmati Rice',
                        img: ["https://s3.amazonaws.com/redqteam.com/pickbazar/nature's_gift_basmati_rice.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/nature's_gift_basmati_rice.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/nature's_gift_basmati_rice.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/nature's_gift_basmati_rice.jpg"],
                        price: 20,
                        available: 10,
                        type: 'lb',
                        deal: 20
                    },
                    {
                        name: 'Seeds Of Change Brown Basmati Rice',
                        img: ["https://s3.amazonaws.com/redqteam.com/pickbazar/seeds_of_change_brown_basmati_rice.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/seeds_of_change_brown_basmati_rice.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/seeds_of_change_brown_basmati_rice.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/seeds_of_change_brown_basmati_rice.jpg"],
                        price: 5,
                        available: 2,
                        type: 'lb',
                    },
                    {
                        name: 'Tai Ping Sushi Rice',
                        img: ["https://s3.amazonaws.com/redqteam.com/pickbazar/tai_ping_Sushi_Rice_1kg.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/tai_ping_Sushi_Rice_1kg.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/tai_ping_Sushi_Rice_1kg.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/tai_ping_Sushi_Rice_1kg.jpg"],
                        price: 5,
                        available: 2,
                        type: 'lb',
                    },
                ],
            },
            {
                id: 31,
                name: 'Salt & Sugar',
                details: [
                    {
                        name: 'Clover Valley Sea Salt',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/clover_valley_sea_salt_grinder.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/clover_valley_sea_salt_grinder.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/clover_valley_sea_salt_grinder.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/clover_valley_sea_salt_grinder.jpg'],
                        price: 3,
                        available: 1,
                        type: 'pc(s)'
                    },
                    {
                        name: 'Gathering Place Sea Salt',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/gathering_place_sea_salt_100g_grinder.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/gathering_place_sea_salt_100g_grinder.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/gathering_place_sea_salt_100g_grinder.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/gathering_place_sea_salt_100g_grinder.jpg'],
                        price: 2,
                        available: 1,
                        type: 'pc(s)',
                        deal: 20
                    },
                    {
                        name: 'Herbivore Calm Dead Sea Soaking Salt',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/herbivore_Calm_deadsea_soaking_salt.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/herbivore_Calm_deadsea_soaking_salt.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/herbivore_Calm_deadsea_soaking_salt.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/herbivore_Calm_deadsea_soaking_salt.jpg'],
                        price: 4,
                        available: 1,
                        type: 'pc(s)',
                    },
                    {
                        name: 'Nomu Sea Salt',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/nomu_atlantic_Sea_Salt_Grinder.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/nomu_atlantic_Sea_Salt_Grinder.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/nomu_atlantic_Sea_Salt_Grinder.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/nomu_atlantic_Sea_Salt_Grinder.jpg'],
                        price: 4,
                        available: 1,
                        type: 'pc(s)',
                        deal: 10
                    },
                    {
                        name: 'Tasteology Chili Salt',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/tasteology_chili_salt.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/tasteology_chili_salt.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/tasteology_chili_salt.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/tasteology_chili_salt.jpg'],
                        price: 4,
                        available: 1,
                        type: 'pc(s)',
                    },
                    {
                        name: 'The Spice House White Truffle Salt',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/the_spice_house_white_Truffle_Salt.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/the_spice_house_white_Truffle_Salt.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/the_spice_house_white_Truffle_Salt.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/the_spice_house_white_Truffle_Salt.jpg'],
                        price: 5,
                        available: 1,
                        type: 'pc(s)',
                    },
                    {
                        name: 'Gula Aromatic Brown Sugar',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/gula_aromatic_brown_sugar.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/gula_aromatic_brown_sugar.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/gula_aromatic_brown_sugar.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/gula_aromatic_brown_sugar.jpg'],
                        price: 5,
                        available: 2,
                        type: 'pc(s)',
                        deal: 10
                    },
                    {
                        name: 'Sis White Sugar',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/sis_white_sugar.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/sis_white_sugar.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/sis_white_sugar.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/sis_white_sugar.jpg'],
                        price: 5,
                        available: 2,
                        type: 'pc(s)',
                    },
                    {
                        name: 'Tate Lyle White Sugar',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/tate_sugar.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/tate_sugar.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/tate_sugar.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/tate_sugar.jpg'],
                        price: 5,
                        available: 2,
                        type: 'pc(s)',
                        deal: 20
                    },
                    {
                        name: 'The Pantry Icing Sugar',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/the_pantry_icing_Sugar.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/the_pantry_icing_Sugar.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/the_pantry_icing_Sugar.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/the_pantry_icing_Sugar.jpg'],
                        price: 8,
                        available: 2,
                        type: 'pc(s)',
                    },
                    {
                        name: 'Whiteworths White Sugar',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/whitworths_sugar.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/whitworths_sugar.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/whitworths_sugar.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/whitworths_sugar.jpg'],
                        price: 4,
                        available: 2,
                        type: 'pc(s)',
                    },
                    {
                        name: 'Wholesome Organic Cane Sugar',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/Wholesome_Organic_Cane_Sugar_2LB.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Wholesome_Organic_Cane_Sugar_2LB.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Wholesome_Organic_Cane_Sugar_2LB.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Wholesome_Organic_Cane_Sugar_2LB.jpg'],
                        price: 6,
                        available: 2,
                        type: 'pc(s)',
                    },
                ],
            },
            {
                id: 32,
                name: 'Spices',
                details: [],
            },
        ]
    },

    {
        id: 8,
        type: 'Breakfast',
        icon: <FiCoffee />,
        details: [
            {
                id: 33,
                name: 'Bread',
                details: [
                    {
                        name: 'Everyday Essentials Wholemeal Bread',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/Everyday_Essentials_Wholemeal_Bread.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Everyday_Essentials_Wholemeal_Bread.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Everyday_Essentials_Wholemeal_Bread.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Everyday_Essentials_Wholemeal_Bread.jpg'],
                        price: 2.5,
                        available: 1,
                        type: 'lb'
                    },
                    {
                        name: 'Farmhouse Multigrain Batch Loaf',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/Farmhouse_Multigrain_Batch_loaf_purple_pack.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Farmhouse_Multigrain_Batch_loaf_purple_pack.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Farmhouse_Multigrain_Batch_loaf_purple_pack.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Farmhouse_Multigrain_Batch_loaf_purple_pack.jpg'],
                        price: 3,
                        available: 1,
                        type: 'lb'
                    },
                    {
                        name: 'Roberts Seeded Bloomer',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/roberts_Seriously_Seeded_Bloomer.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/roberts_Seriously_Seeded_Bloomer.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/roberts_Seriously_Seeded_Bloomer.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/roberts_Seriously_Seeded_Bloomer.jpg'],
                        price: 4,
                        available: 1,
                        type: 'lb'
                    },
                    {
                        name: 'The Village Bakery Low Fat Bread',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/the_village_bakery_danish_low_fat.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/the_village_bakery_danish_low_fat.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/the_village_bakery_danish_low_fat.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/the_village_bakery_danish_low_fat.jpg'],
                        price: 4,
                        available: 1,
                        type: 'lb'
                    },
                    {
                        name: 'The Village Bakery Soft White Bread',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/the_village_bakery_danish_Soft_White_Toastie.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/the_village_bakery_danish_Soft_White_Toastie.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/the_village_bakery_danish_Soft_White_Toastie.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/the_village_bakery_danish_Soft_White_Toastie.jpg'],
                        price: 4,
                        available: 1,
                        type: 'lb'
                    },
                    {
                        name: 'The Village Bakery Soft Wholemeal Bread',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/the_village_bakery_Soft_Wholemeal_Bread.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/the_village_bakery_Soft_Wholemeal_Bread.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/the_village_bakery_Soft_Wholemeal_Bread.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/the_village_bakery_Soft_Wholemeal_Bread.jpg'],
                        price: 4,
                        available: 1,
                        type: 'lb'
                    },
                    {
                        name: 'Warburtons Wholemeal Bread',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/Warburtons_Wholemeal_mild_soft.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Warburtons_Wholemeal_mild_soft.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Warburtons_Wholemeal_mild_soft.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Warburtons_Wholemeal_mild_soft.jpg'],
                        price: 4,
                        available: 1,
                        type: 'lb'
                    },
                ],
            },
            {
                id: 34,
                name: 'Cereal',
                details: [
                    {
                        name: 'Fibre 1 Crunchy Original',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/fibre1_crunchy_original.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/fibre1_crunchy_original.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/fibre1_crunchy_original.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/fibre1_crunchy_original.jpg'],
                        price: 4,
                        available: 1,
                        type: 'pc(s)'
                    },
                    {
                        name: 'Trix',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/general_mills_with_whole_grain_first_ingredient_trix_wildberry_red_swirls.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/general_mills_with_whole_grain_first_ingredient_trix_wildberry_red_swirls.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/general_mills_with_whole_grain_first_ingredient_trix_wildberry_red_swirls.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/general_mills_with_whole_grain_first_ingredient_trix_wildberry_red_swirls.jpg'],
                        price: 4,
                        available: 1,
                        type: 'pc(s)',
                        deal: 10
                    },
                    {
                        name: 'Fiber One',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/general_mills_with_whole_grain_guaranted_fiber_one_honey_clusters.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/general_mills_with_whole_grain_guaranted_fiber_one_honey_clusters.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/general_mills_with_whole_grain_guaranted_fiber_one_honey_clusters.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/general_mills_with_whole_grain_guaranted_fiber_one_honey_clusters.jpg'],
                        price: 4,
                        available: 1,
                        type: 'pc(s)',
                        deal: 10
                    },
                    {
                        name: 'Nestle Corn Flakes',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/nestle_made_with_whole_grain_corn_flakes.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/nestle_made_with_whole_grain_corn_flakes.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/nestle_made_with_whole_grain_corn_flakes.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/nestle_made_with_whole_grain_corn_flakes.jpg'],
                        price: 4,
                        available: 1,
                        type: 'pc(s)',
                    },
                    {
                        name: 'Post Honey Comb',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/post_honey_comb_cereal_12.5oz.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/post_honey_comb_cereal_12.5oz.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/post_honey_comb_cereal_12.5oz.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/post_honey_comb_cereal_12.5oz.jpg'],
                        price: 4,
                        available: 1,
                        type: 'pc(s)',
                    },
                ],
            },
            {
                id: 35,
                name: 'Honey',
                details: [
                    {
                        name: 'Beechworty Creamy Honey',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/beechworth_honey_bee_creamy_creamy_honey.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/beechworth_honey_bee_creamy_creamy_honey.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/beechworth_honey_bee_creamy_creamy_honey.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/beechworth_honey_bee_creamy_creamy_honey.jpg'],
                        price: 10,
                        available: 2,
                        type: 'lb'
                    },
                    {
                        name: "Beekeeper's Raw Honey",
                        img: ["https://s3.amazonaws.com/redqteam.com/pickbazar/beekeeper's_naturals_wildflower_raw_honey.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/beekeeper's_naturals_wildflower_raw_honey.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/beekeeper's_naturals_wildflower_raw_honey.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/beekeeper's_naturals_wildflower_raw_honey.jpg"],
                        price: 12,
                        available: 2,
                        type: 'lb'
                    },
                    {
                        name: "Coffee Blossom Honey",
                        img: ["https://s3.amazonaws.com/redqteam.com/pickbazar/coffee_blossom_honey.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/coffee_blossom_honey.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/coffee_blossom_honey.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/coffee_blossom_honey.jpg"],
                        price: 8,
                        available: 2,
                        type: 'lb'
                    },
                    {
                        name: "Urban Bee Honey",
                        img: ["https://s3.amazonaws.com/redqteam.com/pickbazar/Urban_Bee_Honey_fireweed.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/Urban_Bee_Honey_fireweed.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/Urban_Bee_Honey_fireweed.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/Urban_Bee_Honey_fireweed.jpg"],
                        price: 8,
                        available: 2,
                        type: 'lb'
                    },
                ],
            },
            {
                id: 36,
                name: 'Jam',
                details: [
                    {
                        name: 'Chivers Mixed Fruit Jam',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/chivers_mixed_fruit_jam.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/chivers_mixed_fruit_jam.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/chivers_mixed_fruit_jam.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/chivers_mixed_fruit_jam.jpg'],
                        price: 6,
                        available: 2,
                        type: 'lb',
                        deal: 10
                    },
                    {
                        name: 'Red Jacket Raspberry Jam',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/red_jacket_raspberry_jam.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/red_jacket_raspberry_jam.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/red_jacket_raspberry_jam.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/red_jacket_raspberry_jam.jpg'],
                        price: 6,
                        available: 2,
                        type: 'lb',
                        deal: 10
                    },
                    {
                        name: 'Gin Jam',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/Gin_Jam.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Gin_Jam.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Gin_Jam.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Gin_Jam.jpg'],
                        price: 6,
                        available: 2,
                        type: 'lb',
                    },
                ],
            },
            {
                id: 37,
                name: 'Mayonnaise',
                details: [
                    {
                        name: 'Best Foods Mayonnaise',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/best_foods_mayonnaise1.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/best_foods_mayonnaise1.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/best_foods_mayonnaise1.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/best_foods_mayonnaise1.jpg'],
                        price: 6,
                        available: 2,
                        type: 'lb',
                        deal: 10
                    },
                    {
                        name: 'Ballymaloe Mayonnaise',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/Ballymaloe_Mayonnaise_240g.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Ballymaloe_Mayonnaise_240g.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Ballymaloe_Mayonnaise_240g.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Ballymaloe_Mayonnaise_240g.jpg'],
                        price: 6,
                        available: 2,
                        type: 'lb'
                    },
                    {
                        name: 'Heinz Mayonnaise',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/Heinz_Mayonnaise.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Heinz_Mayonnaise.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Heinz_Mayonnaise.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Heinz_Mayonnaise.jpg'],
                        price: 8,
                        available: 2,
                        type: 'lb'
                    },
                    {
                        name: 'Kraft Mayonnaise',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/kraft_mayonnaise1.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/kraft_mayonnaise1.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/kraft_mayonnaise1.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/kraft_mayonnaise1.jpg'],
                        price: 7,
                        available: 2,
                        type: 'lb'
                    },
                ],
            },
            {
                id: 38,
                name: 'Oats',
               details: [
                    {
                        name: 'Fitwell Oat',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/FITWELL_OAT_ENRICH.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/FITWELL_OAT_ENRICH.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/FITWELL_OAT_ENRICH.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/FITWELL_OAT_ENRICH.jpg'],
                        price: 7,
                        available: 2,
                        type: 'lb'
                    },
                    {
                        name: 'Quaker Large Flake Oat',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/quaker_large_flake_oats.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/quaker_large_flake_oats.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/quaker_large_flake_oats.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/quaker_large_flake_oats.jpg'],
                        price: 7,
                        available: 2,
                        type: 'lb'
                    },
                    {
                        name: 'Mornflake Jumbo Oat',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/mornflake_jumbo_oats.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/mornflake_jumbo_oats.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/mornflake_jumbo_oats.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/mornflake_jumbo_oats.jpg'],
                        price: 8,
                        available: 2,
                        type: 'lb',
                        deal: 10
                    },
                ],
            },
        ]
    },

    {
        id: 9,
        type: 'Beverage',
        icon: <IoWaterOutline />,
        details: [
            {
                id: 39,
                name: 'Coffee',
                details: [
                    {
                        name: 'Javarama Cafe Coffee',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/javarama_classic.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/javarama_classic.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/javarama_classic.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/javarama_classic.jpg'],
                        price: 4,
                        available: 2,
                        type: 'lb',
                        deal: 10
                    },
                    {
                        name: 'Starbucks House Blend',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/starbucks_house_blend.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/starbucks_house_blend.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/starbucks_house_blend.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/starbucks_house_blend.jpg'],
                        price: 4,
                        available: 2,
                        type: 'lb',
                    },
                    {
                        name: 'Starbucks Vanilla Latte',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/starbucks_vanilla_latte.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/starbucks_vanilla_latte.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/starbucks_vanilla_latte.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/starbucks_vanilla_latte.jpg'],
                        price: 4,
                        available: 2,
                        type: 'lb',
                    },
                    {
                        name: 'Teeccino Herbal Coffee Alternative',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/teeccino_herbal_coffee_alternative_almond_amaretto.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/teeccino_herbal_coffee_alternative_almond_amaretto.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/teeccino_herbal_coffee_alternative_almond_amaretto.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/teeccino_herbal_coffee_alternative_almond_amaretto.jpg'],
                        price: 5,
                        available: 2,
                        type: 'lb',
                    },
                ],
            },
            {
                id: 40,
                name: 'Energy Drinks',
                details: [
                    {
                        name: 'Dragon Energy',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/dragon.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/dragon.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/dragon.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/dragon.jpg'],
                        price: 2,
                        available: 200,
                        type: 'ml'
                    },
                    {
                        name: 'Monster Energy',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/Monster.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Monster.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Monster.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Monster.jpg'],
                        price: 1.8,
                        available: 500,
                        type: 'ml'
                    },
                    {
                        name: 'Quake Energy',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/Quake.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Quake.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Quake.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Quake.jpg'],
                        price: 1.5,
                        available: 250,
                        type: 'ml'
                    },
                    {
                        name: 'Red Bull Energy Drink',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/red_bull.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/red_bull.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/red_bull.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/red_bull.jpg'],
                        price: 2.2,
                        available: 200,
                        type: 'ml'
                    },
                ],
            },
            {
                id: 41,
                name: 'Juice',
                details: [
                    {
                        name: 'Iceland Tropical Juice Drink',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/iceland_tropical_juice_drink.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/iceland_tropical_juice_drink.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/iceland_tropical_juice_drink.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/iceland_tropical_juice_drink.jpg'],
                        price: 2.2,
                        available: 1,
                        type: 'ltr'
                    },
                    {
                        name: 'Minute Maid Orange',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/minute_maid_orange.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/minute_maid_orange.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/minute_maid_orange.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/minute_maid_orange.jpg'],
                        price: 2.8,
                        available: 500,
                        type: 'ml'
                    },
                    {
                        name: 'Nongmo Simply Apple',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/nongmo_simply_apple.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/nongmo_simply_apple.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/nongmo_simply_apple.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/nongmo_simply_apple.jpg'],
                        price: 2.8,
                        available: 1,
                        type: 'ltr'
                    },
                    {
                        name: 'Tropicana Apple',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/tropicana_apple.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/tropicana_apple.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/tropicana_apple.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/tropicana_apple.jpg'],
                        price: 2.4,
                        available: 1,
                        type: 'ltr'
                    },
                    {
                        name: 'Tropicana Orange',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/tropicana_orange_no_pulp.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/tropicana_orange_no_pulp.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/tropicana_orange_no_pulp.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/tropicana_orange_no_pulp.jpg'],
                        price: 2.5,
                        available: 1.5,
                        type: 'ltr',
                        deal: 10
                    },
                ],
            },
            {
                id: 42,
                name: 'Fizzy Drinks',
                details: [
                    {
                        name: '7 Up Can',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/7up_lemon_lime_355ml.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/7up_lemon_lime_355ml.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/7up_lemon_lime_355ml.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/7up_lemon_lime_355ml.jpg'],
                        price: 1,
                        available: 250,
                        type: 'ml'
                    },
                    {
                        name: 'Coca Cola Bottle',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/Coca_Cola_200ml_Bottle.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Coca_Cola_200ml_Bottle.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Coca_Cola_200ml_Bottle.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Coca_Cola_200ml_Bottle.jpg'],
                        price: 1,
                        available: 200,
                        type: 'ml'
                    },
                    {
                        name: 'Coca Cola Zero',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/coca_cola_zero.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/coca_cola_zero.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/coca_cola_zero.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/coca_cola_zero.jpg'],
                        price: 1,
                        available: 300,
                        type: 'ml'
                    },
                    {
                        name: 'Diet Coke',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/coke_diet_355ml.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/coke_diet_355ml.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/coke_diet_355ml.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/coke_diet_355ml.jpg'],
                        price: 1.2,
                        available: 330,
                        type: 'ml'
                    },
                    {
                        name: 'Dr Pepper Diet',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/dr_pepper_diet.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/dr_pepper_diet.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/dr_pepper_diet.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/dr_pepper_diet.jpg'],
                        price: 1.2,
                        available: 330,
                        type: 'ml'
                    },
                    {
                        name: 'Fanta',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/Fanta_orange_can_250ml.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Fanta_orange_can_250ml.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Fanta_orange_can_250ml.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Fanta_orange_can_250ml.jpg'],
                        price: 1.2,
                        available: 500,
                        type: 'ml'
                    },
                    {
                        name: 'Diet Mountain Dew',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/mountain_dew_diet.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/mountain_dew_diet.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/mountain_dew_diet.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/mountain_dew_diet.jpg'],
                        price: 1.85,
                        available: 330,
                        type: 'ml'
                    },
                ],
            },
            {
                id: 43,
                name: 'Syrup & powder',
               details: [
                    {
                        name: 'Aunt Jemina Original Syrup',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/aunt_jemima_original_syrup.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/aunt_jemima_original_syrup.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/aunt_jemima_original_syrup.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/aunt_jemima_original_syrup.jpg'],
                        price: 5,
                        available: 500,
                        type: 'ml'
                    },
                    {
                        name: 'Canadian Maple Syrup',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/canadian_maple_syrup.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/canadian_maple_syrup.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/canadian_maple_syrup.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/canadian_maple_syrup.jpg'],
                        price: 5,
                        available: 500,
                        type: 'ml',
                        deal: 20
                    },
                    {
                        name: 'Gatorate Thirst Quencher Powder Drink',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/gatorade_thirst_quencher_powder_packs_orange.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/gatorade_thirst_quencher_powder_packs_orange.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/gatorade_thirst_quencher_powder_packs_orange.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/gatorade_thirst_quencher_powder_packs_orange.jpg'],
                        price: 5,
                        available: 250,
                        type: 'ml',
                    },
                    {
                        name: 'Horlicks',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/horlicks_classic_malt.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/horlicks_classic_malt.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/horlicks_classic_malt.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/horlicks_classic_malt.jpg'],
                        price: 5,
                        available: 0.5,
                        type: 'lb',
                        deal: 20
                    },
                    {
                        name: 'Servivita Chocolate Syrup',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/servivita_chocolate_syrup.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/servivita_chocolate_syrup.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/servivita_chocolate_syrup.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/servivita_chocolate_syrup.jpg'],
                        price: 5,
                        available: 500,
                        type: 'ml',
                    },
                ],
            },
            {
                id: 44,
                name: 'Tea',
                details: [
                    {
                        name: 'Ava Juice Macha Tea',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/ava_juice_Detox_Matcha.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/ava_juice_Detox_Matcha.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/ava_juice_Detox_Matcha.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/ava_juice_Detox_Matcha.jpg'],
                        price: 5,
                        available: 0.5,
                        type: 'lb',
                        deal: 20
                    },
                    {
                        name: 'Boh Instant Tea Mix',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/boh_3in1_instant_tea_mix.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/boh_3in1_instant_tea_mix.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/boh_3in1_instant_tea_mix.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/boh_3in1_instant_tea_mix.jpg'],
                        price: 5,
                        available: 0.5,
                        type: 'lb',
                        deal: 20
                    },
                    {
                        name: 'Crystal Light Lemon Iced Tea',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/crystal_light_lemon_iced_tea.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/crystal_light_lemon_iced_tea.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/crystal_light_lemon_iced_tea.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/crystal_light_lemon_iced_tea.jpg'],
                        price: 5,
                        available: 0.5,
                        type: 'lb',
                    },
                    {
                        name: 'Imperial Long Jing Tea',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/imperial_tea_longjing_tea.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/imperial_tea_longjing_tea.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/imperial_tea_longjing_tea.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/imperial_tea_longjing_tea.jpg'],
                        price: 5,
                        available: 0.5,
                        type: 'lb',
                    },
                    {
                        name: 'Luzianne Iced Tea',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/luzianne_iced_tea.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/luzianne_iced_tea.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/luzianne_iced_tea.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/luzianne_iced_tea.jpg'],
                        price: 5,
                        available: 0.5,
                        type: 'lb',
                    },
                ],
            },
            {
                id: 45,
                name: 'Water',
                details: [
                    {
                        name: 'Elkali Natural Alkalike Srping Water',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/Elkali_natural_alkaline_spring_water.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Elkali_natural_alkaline_spring_water.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Elkali_natural_alkaline_spring_water.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Elkali_natural_alkaline_spring_water.jpg'],
                        price: 2,
                        available: 5,
                        type: 'ltr'
                    },
                    {
                        name: 'Glaceau Smart Water',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/glaceau_smart_water.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/glaceau_smart_water.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/glaceau_smart_water.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/glaceau_smart_water.jpg'],
                        price: 2.5,
                        available: 2,
                        type: 'ltr'
                    },
                    {
                        name: 'Glastonbury Still Spring Water',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/glastonbury_still_spring_water.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/glastonbury_still_spring_water.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/glastonbury_still_spring_water.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/glastonbury_still_spring_water.jpg'],
                        price: 2.5,
                        available: 2,
                        type: 'ltr'
                    },
                    {
                        name: 'Poland Spring Water',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/poland_spring_natural_spring_water.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/poland_spring_natural_spring_water.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/poland_spring_natural_spring_water.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/poland_spring_natural_spring_water.jpg'],
                        price: 2,
                        available: 2,
                        type: 'ltr'
                    },
                    {
                        name: 'Westfield Pure Spring Water',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/westfield_pure_spring_water_300ml.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/westfield_pure_spring_water_300ml.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/westfield_pure_spring_water_300ml.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/westfield_pure_spring_water_300ml.jpg'],
                        price: 2,
                        available: 2,
                        type: 'ltr'
                    },
                ],
            },
        ]
    },

    {
        id: 10,
        type: 'Beauty & Health',
        icon: <GiMedicalPackAlt />,
        details: [
            {
                id: 46,
                name: 'Bath',
                details: [
                     {
                        name: 'Attitude Bubble Bath',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/attitude_night_bubble_bath.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/attitude_night_bubble_bath.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/attitude_night_bubble_bath.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/attitude_night_bubble_bath.jpg'],
                        price: 20,
                        available: 200,
                        type: 'ml'
                    },
                    {
                        name: 'Aveeno Baby Shampoo',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/aveeno_baby_shampoo.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/aveeno_baby_shampoo.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/aveeno_baby_shampoo.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/aveeno_baby_shampoo.jpg'],
                        price: 20,
                        available: 200,
                        type: 'ml',
                        deal: 50
                    },
                    {
                        name: 'Way Moisturizing Hair Bath',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/moisturizing_hair_bath_g.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/moisturizing_hair_bath_g.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/moisturizing_hair_bath_g.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/moisturizing_hair_bath_g.jpg'],
                        price: 20,
                        available: 200,
                        type: 'ml',
                        deal: 20
                    },
                    {
                        name: 'Neutrogena Body Oil',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/neutrogena_Body_Oil.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/neutrogena_Body_Oil.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/neutrogena_Body_Oil.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/neutrogena_Body_Oil.jpg'],
                        price: 20,
                        available: 200,
                        type: 'ml',
                    },
                    {
                        name: 'Eo Body Lotion',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/eo_body_lotion.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/eo_body_lotion.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/eo_body_lotion.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/eo_body_lotion.jpg'],
                        price: 20,
                        available: 200,
                        type: 'ml',
                        deal: 20
                    },
                ],
            },
            {
                id: 47,
                name: 'Cream',
                details: [
                    {
                        name: 'Gnc Aloe Vera Cream',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/gnc_aloe_vera_moisturizing_cream.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/gnc_aloe_vera_moisturizing_cream.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/gnc_aloe_vera_moisturizing_cream.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/gnc_aloe_vera_moisturizing_cream.jpg'],
                        price: 20,
                        available: 2,
                        type: 'lb',
                    },
                    {
                        name: 'Loreal Age Perfect Cream',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/loreal_paris_age_perfect.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/loreal_paris_age_perfect.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/loreal_paris_age_perfect.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/loreal_paris_age_perfect.jpg'],
                        price: 20,
                        available: 2,
                        type: 'lb',
                        deal: 25
                    },
                    {
                        name: 'Wasp Shiseido Cream',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/waso_shiseido_mega_hydrating_cream.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/waso_shiseido_mega_hydrating_cream.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/waso_shiseido_mega_hydrating_cream.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/waso_shiseido_mega_hydrating_cream.jpg'],
                        price: 20,
                        available: 2,
                        type: 'lb',
                    },
                    {
                        name: 'Gnc Women S Progesterone Cream',
                        img: ["https://s3.amazonaws.com/redqteam.com/pickbazar/gnc_women's_progesterone_cream.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/gnc_women's_progesterone_cream.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/gnc_women's_progesterone_cream.jpg", "https://s3.amazonaws.com/redqteam.com/pickbazar/gnc_women's_progesterone_cream.jpg"],
                        price: 20,
                        available: 2,
                        type: 'lb',
                    },
                ],
            },
            {
                id: 48,
                name: 'Deodorant',
                details: [],
            },
            {
                id: 49,
                name: 'Face Care',
                details: [
                    {
                        name: 'Face Replublic Sun Gel',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/face_republic_Sun_gel.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/face_republic_Sun_gel.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/face_republic_Sun_gel.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/face_republic_Sun_gel.jpg'],
                        price: 2,
                        available: 1,
                        type: 'pc(s)'
                    },
                    {
                        name: 'Frei Ol',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/frei_ol_urea2in1.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/frei_ol_urea2in1.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/frei_ol_urea2in1.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/frei_ol_urea2in1.jpg'],
                        price: 2,
                        available: 1,
                        type: 'pc(s)',
                        deal: 10
                    },
                    {
                        name: 'Garnier Pure Active',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/garnier_pure_active.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/garnier_pure_active.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/garnier_pure_active.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/garnier_pure_active.jpg'],
                        price: 2,
                        available: 1,
                        type: 'pc(s)',
                    },
                    {
                        name: 'Nuace Men Facial Wash',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/nuage_men_facial_wash.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/nuage_men_facial_wash.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/nuage_men_facial_wash.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/nuage_men_facial_wash.jpg'],
                        price: 3,
                        available: 1,
                        type: 'pc(s)',
                    },
                ],
            },
            {
                id: 50,
                name: 'Oral Care',
                details: [
                    {
                        name: 'Absolute Plus Meat Dental Set',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/absolute_plus_Meat_Dental_Set_.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/absolute_plus_Meat_Dental_Set_.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/absolute_plus_Meat_Dental_Set_.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/absolute_plus_Meat_Dental_Set_.jpg'],
                        price: 10,
                        available: 1,
                        type: 'pc(s)'
                    },
                    {
                        name: 'Dentek Oral Care Kit',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/dentek_professional_oral_care_kit1.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/dentek_professional_oral_care_kit1.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/dentek_professional_oral_care_kit1.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/dentek_professional_oral_care_kit1.jpg'],
                        price: 10,
                        available: 1,
                        type: 'pc(s)'
                    },
                    {
                        name: 'Gum Oral Care Cleaning Kit',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/gum_oral_care_cleaning_kit.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/gum_oral_care_cleaning_kit.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/gum_oral_care_cleaning_kit.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/gum_oral_care_cleaning_kit.jpg'],
                        price: 15,
                        available: 1,
                        type: 'pc(s)'
                    },
                ],
            },
            {
                id: 51,
                name: 'Shaving Needs',
                details: [
                    {
                        name: 'Duke Cannon Shaving Cream',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/Duke_Cannon_SHAVE_CREAM.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Duke_Cannon_SHAVE_CREAM.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Duke_Cannon_SHAVE_CREAM.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Duke_Cannon_SHAVE_CREAM.jpg'],
                        price: 5,
                        available: 1,
                        type: 'pc(s)'
                    },
                    {
                        name: 'Nair Hai Removal Cream',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/nair_hair_remover.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/nair_hair_remover.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/nair_hair_remover.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/nair_hair_remover.jpg'],
                        price: 8,
                        available: 1,
                        type: 'pc(s)'
                    },
                    {
                        name: 'Longmarket Barber Aftershave Balm',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/Longmarket_Barber_Aftershave_Balm.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Longmarket_Barber_Aftershave_Balm.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Longmarket_Barber_Aftershave_Balm.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/Longmarket_Barber_Aftershave_Balm.jpg'],
                        price: 6,
                        available: 1,
                        type: 'pc(s)'
                    },
                    {
                        name: 'Espa Men Dual Action',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/espa_men_dual_action_shave_mud.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/espa_men_dual_action_shave_mud.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/espa_men_dual_action_shave_mud.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/espa_men_dual_action_shave_mud.jpg'],
                        price: 6,
                        available: 1,
                        type: 'pc(s)'
                    },
                    {
                        name: 'Human Nature Shaving Cream',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/human_nature_shaving_cream.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/human_nature_shaving_cream.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/human_nature_shaving_cream.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/human_nature_shaving_cream.jpg'],
                        price: 6,
                        available: 1,
                        type: 'pc(s)'
                    },
                    {
                        name: 'Pacific Natural Shaving Cream',
                        img: ['https://s3.amazonaws.com/redqteam.com/pickbazar/pacific_shaving_co._natural_shaving_cream.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pacific_shaving_co._natural_shaving_cream.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pacific_shaving_co._natural_shaving_cream.jpg', 'https://s3.amazonaws.com/redqteam.com/pickbazar/pacific_shaving_co._natural_shaving_cream.jpg'],
                        price: 6,
                        available: 1,
                        type: 'pc(s)'
                    },
                ],
            },
        ]
    },
]