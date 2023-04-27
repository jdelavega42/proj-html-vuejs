import {reactive} from "vue"
export const store = reactive ({
    externalLinks: [
        {
            icon: 'fa-brands fa-facebook',
            onHeader: false,
            onFooter: true
        },
        {
            icon: 'fa-brands fa-twitter',
            onHeader: true,
            onFooter: true
        },
        {
            icon: 'fa-brands fa-instagram',
            onHeader: true,
            onFooter: true
        },
        {
            icon: 'fa-brands fa-behance',
            onHeader: true,
            onFooter: false
        },
        {
            icon: 'fa-solid fa-basketball',
            onHeader: true,
            onFooter: false
        },
        {
            icon: 'fa-brands fa-discord',
            onHeader: true,
            onFooter: false
        },
        {
            icon: 'fa-brands fa-git',
            onHeader: true,
            onFooter: false
        },
        {
            icon: 'fa-brands fa-linkedin',
            onHeader: true,
            onFooter: false
        },
        {
            icon: 'fa-brands fa-pinterest',
            onHeader: true,
            onFooter: false
        }
    ]
    
})