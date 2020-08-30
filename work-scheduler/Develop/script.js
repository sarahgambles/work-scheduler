$(document).ready(function(){
    $(".saveBtn").on("click", function(){
        console.log("hi");
        var val = $(this).siblings(".description").val()
        var time = $(this).parent().attr("id")

        localStorage.setItem(time, val)
    })

function updateTime () {
        var currentTime = moment().hours()
        console.log(currentTime);

        $(".time-block").each(function(){
            var timeBlock = $(this).attr("id")

        if (timeBlock < currentTime) {
            $(this).addClass("past")
        }
        else if (timeBlock > currentTime) {
            $(this).addClass("future")
        }

        else {
            $(this).addClass("present")
        }
        })

    }

    updateTime ();
    $("#9 .description").val(localStorage.getItem('9'))
    $("#9 .description").val(localStorage.getItem('10'))
    $("#9 .description").val(localStorage.getItem('11'))
    $("#9 .description").val(localStorage.getItem('12'))
    $("#9 .description").val(localStorage.getItem('13'))
    $("#9 .description").val(localStorage.getItem('14'))
    $("#9 .description").val(localStorage.getItem('15'))
    $("#9 .description").val(localStorage.getItem('16'))
    $("#9 .description").val(localStorage.getItem('17'))
    $("#9 .description").val(localStorage.getItem('18'))

});