const pagination = document.getElementById("timelist");

const dates = [
    {
        date: 6,
        month: 12,
        year: 2020
    },
    {
        date: 15,
        month: 11,
        year: 2020
    },
    {
        date: 3,
        month: 11,
        year: 2020
    },
    {
        date: 13,
        month: 10,
        year: 2020
    },
    {
        date: 21,
        month: 9,
        year: 2020
    },
    {
        date: 1,
        month: 7,
        year: 2020
    },
];

const newsSwiper = new Swiper('.swiper-container', {
    autoplay: true,//自动切换
    loop: true, // 循环

    // 分页器
    pagination: {
        el: pagination,
        clickable: true,
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            var customPaginationHtml = "";
            for (var i = 0; i < total; i++) {
                // 获取年月日
                const date = (dates[i].date + "").padStart(2, 0);
                const month = (dates[i].month + "").padStart(2, 0);
                const year = dates[i].year;

                // 渲染分页器,动态写入类
                if (i == (current - 1)) {
                    customPaginationHtml += `<li class="t${i + 1} active"><i></i>${date}<span>${year}.${month}</span></li>`;
                } else {
                    customPaginationHtml += `<li class="t${i + 1}"><i></i>${date}<span>${year}.${month}</span></li>`;
                }
            }
            return customPaginationHtml;
        }
    },

    // 前进后退按钮
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    },
});



pagination.addEventListener("click", (e) => {
    // 1. 获取元素,用于获取对应的slide索引
    const el = e.target.closest("li");
    const className = el.classList[0];

    // 2. 验证是否是pagination类 t1~t9
    const pattern = /t[1-9]$/;
    if (!el || !pattern.test(className)) return;

    // 3. 获取下标
    const index = parseInt(className[1]);

    // 4. 切换到相应的slide
    newsSwiper.slideTo(index);//切换到第一个slide，速度为1秒
});

