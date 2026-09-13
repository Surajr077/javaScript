// //Task 1

// let applink = "https://fakestoreapi.com/products";

// fetch(applink).then((d) => {
//     return d.json();
// })
// .then((data) => {
//     console.log("Products:");
//     data.forEach((c) => {
//         console.log("title:", c.title);
//         console.log("price:", c.price);
//         console.log("category:", c.category);
//         console.log("------------------");
//     });

//     let a = data.map((c)=>{
//         return {
//             title: c.title,
//             price: c.price
//         };
//     });
//     console.log("Title and Price:");
//     console.log(a);

//     let b = data.filter((c)=>{
//         return c.price > 100;
//     });
//     console.log("Products above $100:");
//     console.log(b);

//     let c = data.find((c)=>{
//         return c.category=="electronics";
//     });
//     console.log("First electronics product:");
//     console.log(c);

//     let d = data.reduce((a,c)=>{
//         return a + c.price;
//     },0);
//     console.log("Total Price:", d);

//     let e = data.sort((a, b) => {
//         return b.price - a.price;
//     });
//     console.log("Highest to Lowest:");
//     console.log(e);
// })
// .catch((d)=>{
//     console.log("Error:", d);
// })
// .finally(()=>{
//     console.log("Everything is completed");
// });



// // task 2

// let applink = "https://fakestoreapi.com/products";

// function categoryCount(data,category){
//     let a = data.filter((c)=>{
//         return c.category == category;
//     });
//     return a.length;
// }

// function highestPrice(data){
//     let a = data.sort((x, y)=>{
//         return y.price - x.price;
//     });
//     return a[0].price;
// }


// function lowestPrice(data){

//     let a = data.sort((x, y)=>{
//         return x.price - y.price;
//     });
//     return a[0].price;
// }

// fetch(applink).then((d) => {
//     return d.json();
// })
// .then((data) => {
//     console.log("===== PRODUCT DASHBOARD =====");
//     console.log(`Total Products: ${data.length}`);
//     console.log(`Electronics: ${categoryCount(data, "electronics")}`);
//     console.log(`Jewelery: ${categoryCount(data, "jewelery")}`);
//     console.log(`Mens Clothing: ${categoryCount(data, "men clothing")}`);
//     console.log(`Womens Clothing: ${categoryCount(data, "women clothing")}`);

//     let max = highestPrice(data);
//     let min = lowestPrice(data);
//     let total = data.reduce((a,c)=>{
//         return a+c.price;
//     },0);

//     let average = total / data.length;

//     console.log(`Highest price: $${max}`);
//     console.log(`lowest price: $${min}`);
//     console.log(`Average price: $${average.toFixed(2)}`);


//     let names = data.map((c) => {
//         return c.title;
//     });
//     console.log("Product Names:");
//     console.log(names);
// })
// .catch((d) => {
//     console.log("Error:", d);
// })
// .finally(() => {
//     console.log("Dashboard completed");
// });



// // Task 3

// let applink1 = "https://jsonplaceholder.typicode.com/users";
// let applink2 = "https://jsonplaceholder.typicode.com/posts";

// fetch(applink1).then((d) => {
//     return d.json();
// })
// .then((data) => {

//     console.log("----------Users----------");
//     let names = data.map((c)=>{
//         return c.name;
//     });
//     console.log("user ames:");
//     console.log(names);

//     data.forEach((c)=>{
//         console.log(`Name: ${c.name}, Email: ${c.email}`);
//     });

//     let user = data.find((c)=>{
//         return c.id == 5;
//     });
//     console.log("User with ID 5:");
//     console.log(user);

//     let city = "Roscoeview";
//     let cityUsers = data.filter((c) => {
//         return c.address.city == city;
//     });
//     console.log(`Users from ${city}:`);
//     console.log(cityUsers);
// })
// .catch((d) => {
//     console.log("User Error:", d);
// });

// fetch(applink2).then((d) => {
//     return d.json();
// })
// .then((data) => {
//     console.log("--------Posts-------");
//     let posts = data.filter((c) => {
//         return c.userId == 1;
//     });
//     console.log("Posts of User ID 1:");
//     console.log(posts);
//     console.log(`Post Count: ${posts.length}`);

//     let post = data.find((c) => {
//         return c.title.length > 50;
//     });
//     console.log("First post with title greater than 50:");
//     console.log(post);
// })
// .catch((d) => {
//     console.log("Post Error:", d);
// });




// // Task 4

// let applink = "https://fakestoreapi.com/products";

// function searchProduct(data,category,price) {
//     let result = data.filter((c) => {
//         return c.category == category && c.price<=price;
//     });
//     return result;
// }

// fetch(applink).then((d) => {
//     return d.json();
// })
// .then((data) => {
//     let category = prompt("Enter product category:");
//     let price = Number(prompt("Enter maximum price:"));
//     let result = searchProduct(data,category,price);
//     console.log("Matching Products:");

//     result.forEach((c) => {
//         console.log(`Product: ${c.title}`);
//         console.log(`Price: $${c.price}`);
//         console.log(`Category: ${c.category}`);
//         console.log("------------------");
//     });

// })
// .catch((d) => {
//     console.log("Error:", d);
// })
// .finally(() => {
//     console.log("Search completed");
// });




// // 5

// let applink = "https://fakestoreapi.com/products";

// fetch(applink).then((d) => {
//     return d.json();
// })
// .then((data) => {
//     console.log("-------Available Products----------");

//     data.forEach((c) => {
//         console.log(`ID: ${c.id}, Product: ${c.title}, Price: $${c.price}`);
//     });

//     let ids = [1, 5];
//     let cart = data.filter((c) => {
//         return ids.includes(c.id);
//     });
//     console.log("");

//     cart.forEach((c, i) => {
//         console.log(`Product ${i + 1}: ${c.title}`);
//         console.log(`Price: $${c.price}`);
//     });

//     let total = cart.reduce((a,c) => {
//         return a + c.price;
//     },0);
//     console.log(`Total: $${total}`);

//     let discount;
//     if (total > 200){
//         discount = 20;
//     }
//     else if (total > 100){
//         discount = 10;
//     }
//     else {
//         discount = 0;
//     }
//     console.log(`Discount: ${discount}%`);

//     let finalAmount = total - (total * discount / 100);
//     console.log(`Final Amount: $${finalAmount.toFixed(2)}`);
// })

// .catch((d)=>{
//     console.log("Error:", d);
// })
// .finally(()=>{
//     console.log("Cart completed");
// });



// // task 6

let applink = "https://fakestoreapi.com/products";

fetch(applink).then((d)=>{
    return d.json();
})
.then((data)=>{
    console.log("-----------Product report----------");
    console.log(`Total Products: ${data.length}`);
    console.log("");
    console.log("All Products:");

    data.forEach((c)=>{
        console.log(`${c.title} - $${c.price} - ${c.category}`);
    });

    let names = data.map((c)=>{
        return c.title;
    });
    console.log("");
    console.log("Product Names:");

    names.forEach((c)=>{
        console.log(`- ${c}`);
    });

    let expensive = data.filter((c)=>{
        return c.price>100;
    });
    console.log("");
    console.log("Products Above $100:");
    console.log(expensive);

    let electronics = data.find((c) => {
        return c.category == "electronics";
    });
    console.log("");
    console.log("Electronics Product:");
    console.log(electronics);

    let total = data.reduce((a, c) => {
        return a + c.price;
    },0);

    console.log("");
    console.log(`Total Product Value: $${total.toFixed(2)}`);

    let above500 = data.some((c)=>{
        return c.price > 500;
    });
    console.log("");
    console.log(`Any Product Above $500: ${above500}`);

    let above1 = data.every((c)=>{
        return c.price>1;
    });
    console.log(`All products above $1: ${above1}`);
    let sorted = data.sort((a, b) => {
        return b.price - a.price;
    });
    console.log("");
    console.log("Highest to Lowest:");

    sorted.forEach((c)=>{
        console.log(
            `${c.title} - $${c.price}`
        );
    });
})
.catch((d)=>{
    console.log("Error:",d);
})
.finally(() => {
    console.log("");
});