/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



document.addEventListener("DOMContentLoaded", function () {
    Typed.new("#nameElement", {
        strings: ["Hi, I'm Karthik. <i class='fa fa-hand-paper-o' aria-hidden='true'></i>"],
        typeSpeed: 0,
        backDelay: 2000,
        loop: false,
        showCursor: false,
        onStringTyped: function () {
            Typed.new("#contentElement", {
                strings: ["# ^500 Geek, programmer and a positive guy. ^500 Never short on ideas. ^500 <i class='fa fa-heart' aria-hidden='true'></i> to Code, ^500 learn and collaborate."],
                typeSpeed: 5,
                startDelay: 0,
                backDelay: 2000,
                loop: false
            });
        }
    });

    /*
     Typed.new("#contentElement", {
     strings: ["echo \'Geek\'", "echo \'Programmer\'", "echo \'Developer\'"],
     typeSpeed: 0,
     startDelay: 1000,
     backDelay: 2000,
     loop: true
     }); */


});
