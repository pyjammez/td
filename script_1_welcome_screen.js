function script_1_welcome_screen() {
    // I just want to show a title and short description.
    ctx.font = '48px serif';
    ctx.fillText('Welcome to TD Evolution', 10, 50);
    ctx.font = "24px serif";
    ctx.fillText("I've always wanted to build my own Tower Defence game", 10, 100);
    ctx.fillText("and I'd like to do it in the browser. This is my journey", 10, 150);
    ctx.fillText("towards achieving that grand goal.", 10, 200);
}