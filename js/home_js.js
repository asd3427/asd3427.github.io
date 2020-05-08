$.ajax({
    url: "product_list_json.json",//json檔案位置
    type: "GET",//請求方式為get
    dataType: "json", //返回資料格式為json
    success: function (data) {//請求成功完成後要執行的方法
//each迴圈 使用$.each方法遍歷返回的資料date

        var product_list = $(".product_list").children()
        for (let i = 0; i < product_list.length; i++) {
            let class_name = '.' + product_list[i].className

            $(class_name).click(function () {
                console.log(class_name)
                let p_class_t = ['p_class0']

                let products = $(".products").children() //獲取所有圖片的div 產品
                products[0].style.backgroundImage = "url('" + data[i].image_url_0 + " ') "
                products[1].style.backgroundImage = "url('" + data[i].image_url_1 + " ') "
                products[2].style.backgroundImage = "url('" + data[i].image_url_2+ " ') "
                products[3].style.backgroundImage = "url('" + data[i].image_url_3 + " ') "


                // for (let i = 0; i < products.length; i++) {
                //     if (class_name == 'product_1') {
                //         console.log(data[0].class0.image_url_0)
                //         console.log("url('" + data[0].class0.image_url_0 + " ') no-repeat 0 center"
                //         )
                //
                //         products[i].innerHTML = `<h1>${1234}</h1>`
                //         console.log(123)
                //     }
                //    else {
                //         alert(12)
                //     }
                // }
            });
        }


    },
    error: function (error) {
        alert('error; ' + eval(error));
    }
})


