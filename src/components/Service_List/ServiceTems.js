import { Fade } from "@chakra-ui/react";

export const SERVICE_ITEMS = [
    {
        label: "Laptops",
        image:'https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/product-wayfinder/dell-homepage-product-wayfinding-cold-laptops-xs9320.png?fmt=png-alpha&wid=480&hei=360',
        dropdown: true,
        children: [
            {
                label: "For Home",
                href: "/",
            },
            {
                label: "For Bussiness",
                href: "/",
            },
        ],
    },
    {
        label: "Desktops & All-in-One",
        dropdown: true,
        image:'https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/product-wayfinder/dell-homepage-product-wayfinding-warm-consumer-inspiron-desktops-in7720.png?fmt=png-alpha&wid=480&hei=360',
        children: [
            {
                label: "For Home",
                href: "/products",
            },
            {
                label: "For Bussiness",
                href: "/",
            },
        ],
    },
    {
        label: "Monitors",
        dropdown: true,
        image:'https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/product-wayfinder/uhp-wayfinder-monitor-s2722qc-480x360.png?fmt=png-alpha&wid=480&hei=360',
        children: [
            {
                label: "For Home",
            },
            {
                label: "For Bussiness",
            }
        ],
    },
    {
        label: "PC Accessories",
        dropdown: true,
        image:'https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/product-wayfinder/dell-homepage-product-wayfinding-cold-pc-accessories-wb7022.png?fmt=png-alpha&wid=480&hei=360',
        children: [
            {
                label: "For Home",
            },
            {
                label: "For Bussiness",
            }
        ],
    },
    {
        label: "Dell APEX Multicloud & aaS",
        dropdown: false,
        image:'https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/product-wayfinder/dell-homepage-product-wayfinding-cold-apex-multicloud-aas-xs9315-stocksy2607481.jpg?fmt=png-alpha&wid=480&hei=360',
        children: [
            
        ],
    },
    {
        label: "IT Infrastructures",
        dropdown: true,
        image:'https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/product-wayfinder/uhp-wayfinder-enterprise-server-r760xa-480x360.png?fmt=png-alpha&wid=480&hei=360',
        children: [
            {
                label: "Servers",
            },
            {
                label: "Data Storage",
            },
            {
                label: "Hyperconverged Infrastructure",
            },
            {
                label: "Networking",
            },
        ],
    },
    {
        label: "Artificial Intelligence",
        dropdown: false,
        image:'https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/product-wayfinder/dell-homepage-product-wayfinding-cold-gen-ai-solutions-getty1537473222.jpg?fmt=png-alpha&wid=480&hei=360',
        children: [

        ],
    },
    {
        label: "Edge Solutions",
        dropdown: false,
        image:'https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/product-wayfinder/uhp-wayfinder-lifestyle-edge-480x360.jpg?fmt=png-alpha&wid=480&hei=360',
        children: [

        ],
    }
];