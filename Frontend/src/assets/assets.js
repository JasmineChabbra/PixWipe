import logo from './logo.png';
import people from './people.png';
import people_org from './people-org.png';
import video_banner from './home-page-banner.mp4';
import credits from './credits.png';



export const assets = {
    logo,
    video: video_banner,
    people,
    people_org,
    credits,
};


export const steps = [
    {
        step: "Step 1",
        title: "Select an image",
        description:
            "First, choose the image you want to remove " +
            "the background from by clicking on 'Start' from a 'Photo'. " +
            "Your image format can be PNG or JPG. We support all image dimensions."
    },
    {
        step: "Step 2",
        title: "Let magic remove the background",
        description:
            "Our tool automatically removes the background from your image. Next, you can choose a background color too. Our most popular options are white and transparent backgrounds, but you can also choose your own color."
    },
    {
        step: "Step 3",
        title: "Download your image",
        description:
            "After selecting a new background color, download your photo and you're done! You can also save your picture using the Photoroom App by creating an account."
    }
];
export const categories = ["People", "Products", "Animals", "Cars", "Graphics"];

export const plans = [
    {
        id: "Basic",
        name: "Basic Package",
        price: 499,
        credits: "100 credits",
        description: "Best for personal use",
        popular: false
    },
    {
        id: "Premium",
        name: "Premium Package",
        price: 899,
        credits: "250 credits",
        description: "Best for business use",
        popular: true
    },
    {
        id: "Ultimate",
        name: "Ultimate Package",
        price: 1499,
        credits: "1000 credits",
        description: "Best for enterprise use",
        popular: false
    },
];

export const testimonials = [
    {
        id:1,
        quote: "We are impressed by the AI and think it's the best choice on the market.",
        author: "Kartik Ganeshan",
        handle: "@x3n0gk"
    },
    {
        id:2,
        quote: "remove.bg is leaps and bounds ahead of the competition. A thousand times better. It simplified the whole process",
        author: "Meyhul Hatwal",
        handle: "@iammeyhul"
    },
    {
        id:3,
        quote: "We are impressed by its ability to account for pesky, feathery hair without making an image look jagged and amateurish ",
        author: "Harsh Arora",
        handle: "@icr345y"
    }
];
export const FOOTER_CONSTANTS = [
    {
        url: "https://www.facebook.com/daksh.arora.336717",
        logo: "https://img.icons8.com/fluent/30/000000/facebook-new.png"
    },
    {
        url: "https://www.instagram.com/btwitsdksh/",
        logo: "https://img.icons8.com/fluent/30/000000/instagram-new.png"
    },
    {
        url: "https://x.com/DakshArora63622",
        logo: "https://img.icons8.com/fluent/30/000000/twitter.png"
    },
    {
        url: "https://www.linkedin.com/in/btwitsdksh/",
        logo: "https://img.icons8.com/fluent/30/000000/linkedin.png"
    }
]

