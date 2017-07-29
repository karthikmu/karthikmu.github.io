/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



document.addEventListener("DOMContentLoaded", function () {
    Typed.new("#nameElement", {
        strings: ["Hi, I'm Karthik."],
        typeSpeed: 0,
        backDelay: 2000,
        loop: false,
        showCursor: false,
        onStringTyped: function () {
            Typed.new("#contentElement", {
                strings: [" Geek, ^500 programmer ^500 and a positive guy. ^500 Never short on ideas. ^500 Love to Code, ^500 learn and collaborate."],
                typeSpeed: 0,
                startDelay: 1000,
                backDelay: 2000,
                loop: true
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
