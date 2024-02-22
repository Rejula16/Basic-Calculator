function appendToResult(value) {
    $("#result").val($("#result").val() + value);
}

function clearResult() {
    $("#result").val("");
}

function calculateResult() {
    try {
        $("#result").val(eval($("#result").val()));
    } catch (error) {
        $("#result").val("Error");
    }
}

