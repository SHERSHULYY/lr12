$(document).ready(function(){
    const WORDS_EASY = [
        {word: "House", trans: "Дім"},
        {word: "Dog", trans: "Пес"},
        {word: "Cat", trans: "Кіт"},
        {word: "Car", trans: "Авто"},
        {word: "Green", trans: "Зелений"},
        {word: "Sun", trans: "Сонце"},
        {word: "Book", trans: "Книга"},
        {word: "Yellow", trans: "Жовтий"},
        {word: "Apple", trans: "Яблуко"},
        {word: "Tree", trans: "Дерево"}
    ];

    const WORDS_MEDIUM = [
        {word: "Photo", trans: "Фото"},
        {word: "Cake", trans: "Торт"},
        {word: "Yellow", trans: "Жовтий"},
        {word: "Apple", trans: "Яблуко"},
        {word: "Dream", trans: "Мрія"},
        {word: "Music", trans: "Музика"},
        {word: "School", trans: "Школа"},
        {word: "Family", trans: "Родина"},
        {word: "Summer", trans: "Літо"},
        {word: "Winter", trans: "Зима"}
    ];

    const WORDS_HARD = [
        {word: "Environment", trans: "Навколишнє середовище"},
        {word: "Consciousness", trans: "Свідомість"},
        {word: "Nevertheless", trans: "Тим не менш"},
        {word: "Achievement", trans: "Досягнення"},
        {word: "Comprehensive", trans: "Всебічний"},
        {word: "Responsibility", trans: "Відповідальність"},
        {word: "Opportunity", trans: "Можливість"},
        {word: "Development", trans: "Розвиток"},
        {word: "Knowledge", trans: "Знання"},
        {word: "Experience", trans: "Досвід"}
    ];

    let count = 0;
    let correct = 0;
    let wrong = 0;
    let index;
    let currentWords = WORDS_EASY;

    function resetGame() {
        count = 0;
        correct = 0;
        wrong = 0;
        $(".count").text("0/10");
        $(".correct").text("Вірно 0");
        $(".wrong").text("Невірно 0");
        $(".main-card p").text("");
        $("#answer").val("");
        $(".error").text("");
        $(".modal").hide();
    }

    $('input[name="difficulty"]').change(function() {
        switch($(this).val()) {
            case 'easy':
                currentWords = WORDS_EASY;
                break;
            case 'medium':
                currentWords = WORDS_MEDIUM;
                break;
            case 'hard':
                currentWords = WORDS_HARD;
                break;
        }
        resetGame();
    });

    $(".navigation:last").on("click", function() {
        if (count == 10) {
            return
        };
        count++;
        $(".count").text(`${count}/10`);
        index = Math.floor(Math.random() * currentWords.length);
        $(".main-card p").text(currentWords[index].word);

        return index
    });

    $(".button").on("click", function(){
        if (count == 10) {
            if (correct < 5) {
                $(".info").text("Поганий рівень");
            } else if (correct < 9) {
                $(".info").text("Задовільний рівень");
            } else {
                $(".info").text("Високий рівень");
            }
            $(".modal").fadeIn(300);
            $(".modal").css({
                "display": "flex",
                "justify-content": "center",
                "align-items": "center"
            });
            return
        };

        let answer = $("#answer").val();
        if(answer.trim() == '') {
            $(".error").text("Введіть відповідь");
        } else {
            $(".error").text("");
            if (answer.toLowerCase().trim() == currentWords[index].trans.toLowerCase()) {
                correct++;
            } else {
                wrong++;
            }
        };
        $(".correct").text(`Вірно 
            ${correct}`);
        $(".wrong").text(`Невірно 
            ${wrong}`);
    });
});
