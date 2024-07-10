function Brand({ position = 'bottom-right' }) {
    const classes = {
        "bottom-right": "bottom-0 right-0"
    }

    return (
        <div class={`absolute ${classes[position]}`}>
            <Logo color="white" className="m-4 h-8 md:m-8 md:h-16 animate-bounce" />
        </div>
    );
}

function Logo({ color = 'black',className='' }) {
    return (
        <svg class={className} height="10rem" viewBox="0 0 75 69" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M73.4417 16C73.0417 7.6 62.9417 2.5 57.9417 1H8.44173V8C19.9417 7.83333 45.1417 7.6 53.9417 8C62.7417 8.4 65.6084 15.1667 65.9417 18.5C66.1084 26.5 66.3417 44 65.9417 50C65.5417 56 59.1084 59.1667 55.9417 60H18.4417C12.0417 60 9.10839 52.6667 8.44173 49V32C8.44173 31.3333 8.94173 29.8 10.9417 29C13.4417 28 19.4417 46.5 25.4417 46.5C30.2417 46.5 34.1084 38.5 35.4417 34.5C37.2751 38.1667 41.9417 45.7 45.9417 46.5C49.9417 47.3 57.9417 31.5 61.4417 23.5H52.9417L45.9417 37C43.7751 32.8333 38.6417 24.5 35.4417 24.5C32.2417 24.5 27.4417 32.8333 25.4417 37L19.4417 26.5C18.6084 25 15.7417 21.9 10.9417 21.5C6.14173 21.1 2.60839 26.3333 1.44172 29C1.10839 31.1667 0.641721 38.4 1.44172 50C2.24172 61.6 12.7751 66.5 17.9417 67.5C27.9417 67.6667 50.1417 67.8 58.9417 67C67.7417 66.2 72.2751 57.3333 73.4417 53C73.6084 44.1667 73.8417 24.4 73.4417 16Z" fill={color} />
            <path d="M7.94172 1H8.44173M8.44173 1H57.9417C62.9417 2.5 73.0417 7.6 73.4417 16C73.8417 24.4 73.6084 44.1667 73.4417 53C72.2751 57.3333 67.7417 66.2 58.9417 67C50.1417 67.8 27.9417 67.6667 17.9417 67.5C12.7751 66.5 2.24172 61.6 1.44172 50C0.641721 38.4 1.10839 31.1667 1.44172 29C2.60839 26.3333 6.14173 21.1 10.9417 21.5C15.7417 21.9 18.6084 25 19.4417 26.5L25.4417 37C27.4417 32.8333 32.2417 24.5 35.4417 24.5C38.6417 24.5 43.7751 32.8333 45.9417 37L52.9417 23.5H61.4417C57.9417 31.5 49.9417 47.3 45.9417 46.5C41.9417 45.7 37.2751 38.1667 35.4417 34.5C34.1084 38.5 30.2417 46.5 25.4417 46.5C19.4417 46.5 13.4417 28 10.9417 29C8.94173 29.8 8.44173 31.3333 8.44173 32V49C9.10839 52.6667 12.0417 60 18.4417 60C24.8417 60 46.1084 60 55.9417 60C59.1084 59.1667 65.5417 56 65.9417 50C66.3417 44 66.1084 26.5 65.9417 18.5C65.6084 15.1667 62.7417 8.4 53.9417 8C45.1417 7.6 19.9417 7.83333 8.44173 8V1Z" stroke="black" />
        </svg>
    )
}
export default Brand;