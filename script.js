for (let i = 0; i < 4; i++) {
    $("#container").append(`
        <div class="row">
            <span class="box"></span>
            <span class="box"></span>
            <span class="box"></span>
            <span class="box"></span>
        </div>
    `);
}

$(".box").on("click", function () {
    $(this).toggleClass("colorChange")
});