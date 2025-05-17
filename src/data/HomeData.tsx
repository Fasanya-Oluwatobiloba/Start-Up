import { extractComponentImports } from "flowbite-react/cli/utils/extract-component-imports"

const HomeItems = [
    {
      id: 1,
      imgSrc: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/299046e2-b39d-45e1-aa7b-e373ee255ceb/A%27ONE.png",
      like: "false",
      title: "A'One 'OG Peal",
      price: "$120.00",
      brand: "Nike",
      rating: "4.5"
    },
    {
      id: 2,
      imgSrc: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f59efa0b-0fcd-4a61-ae1a-c44351f3fb8e/A%27ONE+W+NK+CALM+SLIDE.png",
      like: "true",
      title: "Nike A'One Calm",
      price: "$110.00",
      brand: "Nike",
      rating: "4.5"
    },
    {
      id: 3,
      imgSrc: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3029100f-b946-4a00-815e-3cda0bef21a6/W+NK+AJA+SIGNATURE+SS+TEE.png",
      like: "false",
      title: "A'ja Wilson",
      price: "$45.00",
      brand: "Nike",
      rating: "4.2"
    },
    {
      id: 4,
      imgSrc: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b154f3b8-409e-41bf-848f-36d761eda34b/M+NK+TCH+LTWT+SUPER+LTWT+SHORT.png",
      like: "true",
      title: "Nike Tech",
      price: "$110.00",
      brand: "Nike",
      rating: "4.3"
    },
    {
      id: 5,
      imgSrc: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ff3923bf-57a7-4079-87d2-ef87e078b891/NIKE+FIELD+GENERAL+%28GS%29.png",
      like: "false",
      title: "Field General",
      price: "$110.00",
      brand: "Nike",
      rating: "4.1"
    },
    {
      id: 6,
      imgSrc: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3cf4f85c-310e-4429-8216-72ff201de862/W+NK+TRAIL+DF+TANK.png",
      like: "true",
      title: "Trail",
      price: "$75.00",
      brand: "Nike",
      rating: "4.4"
    },
    {
      id: 7,
      imgSrc: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/299046e2-b39d-45e1-aa7b-e373ee255ceb/A%27ONE.png",
      like: "false",
      title: "A'One 'OG Peal",
      price: "$120.00",
      brand: "Nike",
      rating: "4.5"
    },
    {
      id: 8,
      imgSrc: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f59efa0b-0fcd-4a61-ae1a-c44351f3fb8e/A%27ONE+W+NK+CALM+SLIDE.png",
      like: "true",
      title: "Nike A'One Calm",
      price: "$110.00",
      brand: "Nike",
      rating: "4.5"
    },
    {
      id: 9,
      imgSrc: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3029100f-b946-4a00-815e-3cda0bef21a6/W+NK+AJA+SIGNATURE+SS+TEE.png",
      like: "false",
      title: "A'ja Wilson",
      price: "$45.00",
      brand: "Nike",
      rating: "4.2"
    },
    {
      id: 10,
      imgSrc: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b154f3b8-409e-41bf-848f-36d761eda34b/M+NK+TCH+LTWT+SUPER+LTWT+SHORT.png",
      like: "true",
      title: "Nike Tech",
      price: "$110.00",
      brand: "Nike",
      rating: "4.3"
    },
    {
      id: 11,
      imgSrc: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ff3923bf-57a7-4079-87d2-ef87e078b891/NIKE+FIELD+GENERAL+%28GS%29.png",
      like: "false",
      title: "Field General",
      price: "$110.00",
      brand: "Nike",
      rating: "4.1"
    },
    {
      id: 12,
      imgSrc: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3cf4f85c-310e-4429-8216-72ff201de862/W+NK+TRAIL+DF+TANK.png",
      like: "true",
      title: "Trail",
      price: "$75.00",
      brand: "Nike",
      rating: "4.4"
    },
  ]

export default HomeItems