const menu = [
	{
		mainMenuText: "Home",
		link:"/",
		isOpen: false,
		icon:'dw dw-house-1',
		Child:[
			{
				mainMenuText: "Dashboard",
				link:"/dashboard",
				key:"ILOK9099"
			}
		],
		key:"HJ9098KL",
		id:"home_1"
	},
	{
		mainMenuText: "Manage Category",
		link:"",
		isOpen: false,
		icon:'dw dw-truck',
		Child:[
			{
				mainMenuText: "Add Category",
				link:"/category",
				key:"IN-SUB987899"
			},
			{
				mainMenuText: "Category List",
				link:"/category-list",
				key:"IN-SUB2271331"
			}
		],
		key:"INV90908KL",
		id:"inven_1"
	},
	{
		mainMenuText: "Manage Product",
		link:"",
		isOpen: false,
		icon:'dw  dw-money',
		Child:[
			{
				mainMenuText: "Add Products",
				link:"/product-add",
				key:"PRO-SUB92239967"
			},
			
			{
				mainMenuText: "All Products",
				link:"/product-list",
				key:"PRO90I-SUB78434"
			}
		],
		key:"INVO0908KLI",
		id:"product_1"
	},
	{
		mainMenuText: "Customer Query/Service",
		link:"",
		isOpen: false,
		icon:'dw  dw-money',
		Child:[
			{
				mainMenuText: "Service Request",
				link:"/services",
				key:"PRO-SERV92239967"
			},
			
			{
				mainMenuText: "Online Consultant Book",
				link:"/booking",
				key:"PRO90I-BOOKINGB7846"
			},
			{
				mainMenuText: "Customer Contact",
				link:"/contacts",
				key:"PRO90I-BOOKINGB78434"
			}
		],
		key:"CUSTOMER0908KLI",
		id:"product_2"
	},
	{
		mainMenuText: "Orders",
		link:"",
		isOpen: false,
		icon:'dw  dw-money',
		Child:[
			{
				mainMenuText: "Orders",
				link:"/orders",
				key:"ORD-SERV92239967"
			}
		],
		key:"ORDERS1908KLI",
		id:"order_2"
	}
]
export default menu;

