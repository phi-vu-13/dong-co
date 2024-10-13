document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("mySlides");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}    
        slides[slideIndex-1].style.display = "block";  
        setTimeout(showSlides, 3000); // Đổi ảnh mỗi 3 giây
    }

    const heartButton = document.getElementById('heartButton');
    heartButton.addEventListener('click', createHearts);

    function createHearts() {
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.classList.add('heart');
                heart.style.left = Math.random() * 100 + 'vw';
                heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
                heart.innerHTML = '❤️';
                document.body.appendChild(heart);

                setTimeout(() => {
                    heart.remove();
                }, 5000);
            }, i * 100);
        }
    }

    createStars();
});

function createStars() {
    const starsContainer = document.querySelector('.stars');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        star.style.animationDelay = `${Math.random() * 2}s`;
        starsContainer.appendChild(star);
    }
}

// Hiệu ứng gõ chữ
function typeMessage() {
    const messages = [
        "Nơi này vẫn là của em.",
        'Tạm biệt!',
        "Cỏ"
    ];
    const typedMessage = document.getElementById("typed-message");
    let messageIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentMessage = messages[messageIndex];
        if (isDeleting) {
            typedMessage.textContent = currentMessage.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typedMessage.textContent = currentMessage.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = Math.random() * 100 + 50;
        }

        if (!isDeleting && charIndex === currentMessage.length) {
            isDeleting = true;
            typingSpeed = 1000; // Tạm dừng trước khi xóa
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            messageIndex = (messageIndex + 1) % messages.length;
            typingSpeed = 500; // Tạm dừng trước khi gõ tin nhắn mới
        }

        setTimeout(type, typingSpeed);
    }

    type();
}

typeMessage();

// Gọi các hàm mới
document.addEventListener('DOMContentLoaded', function() {
    createFloatingHearts();
});

function createFloatingHearts() {
    const container = document.querySelector('.floating-hearts');
    if (!container) {
        return;
    }
    
    const heartCount = 20; // Số lượng trái tim

    for (let i = 0; i < heartCount; i++) {
        createHeart(container);
    }

    setInterval(() => {
        createHeart(container);
    }, 2000); // Tạo trái tim mới mỗi 2 giây
}

function createHeart(container) {
    const heart = document.createElement('div');
    heart.textContent = '❤';
    heart.classList.add('floating-heart');
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${Math.random() * 5 + 5}s`; // 5-10s
    heart.style.opacity = Math.random() * 0.5 + 0.5; // 0.5-1
    heart.style.fontSize = `${Math.random() * 20 + 30}px`; // 30-50px

    container.appendChild(heart);

    // Xóa trái tim sau khi animation kết thúc
    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}

// Thay thế đoạn code này ở cuối file script.js
document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    showSlides();

    const heartButton = document.getElementById('heartButton');
    if (heartButton) {
        heartButton.addEventListener('click', createHearts);
    }

    createStars();
    countdown();
    typeMessage();
    setupMusicToggle();
    createFloatingHearts();
});

function setupQuiz() {
    const quizButton = document.getElementById('quizButton');
    const quizModal = document.createElement('div');
    quizModal.classList.add('quiz-modal');
    document.body.appendChild(quizModal);

    quizButton.addEventListener('click', () => {
        showQuiz();
    });

    function showQuiz() {
        const questions = [
            {
                question: "Ngày sinh của Vũ đẹp trai là ngày nào?",
                options: ["1/9/2005", "14/2/2005", "20/10/2005", "15/2/2005"],
                correctAnswer: 3 // Giả sử đáp án đúng là 14/2, bạn có thể thay đổi
            },
            {
                question: "Món ăn yêu thích của Vũ Provip là gì?",
                options: ["Phở", "Bún chả","Cơm thịt kho tàu", "Bánh mì"],
                correctAnswer: 2 // Giả sử đáp án đúng là Phở, bạn có thể thay đổi
            },
            {
                question: "Idol tik tok mà Vũ đảm đang thích là ai?",
                options: ["Trà Giang", "Pi Tiên", "Linh Thỏ", "Bình An"],
                correctAnswer: 0 
            },
            {
                question: "Vũ eo Cỏ học trường nào, ngành gì?",
                options: ["Khum biết", "PTIT,CNTT", "UET,CNTT", "Boi phố kổ"],
                correctAnswer: 1 
            },
            {
                question: "Cái nhìn của Vũ cuti với hieu tuesday là gì?",
                options: ["Đẹp trai", "Tiểu tam","Hát hay", "Eo Cỏ"],
                correctAnswer: 0
            },
            {
                question: "Vũ tuyệt vời có eooo Cỏ khumm?",
                options: ["Khum biết", "Eooo", "Eooo nhất", "Eooo vãi L"],
                correctAnswer: 3
            },
            {
                question: "Vũ chăm chỉ hay đọc truyện nào nhấtt?",
                options: ["Kiếm Lai", "Cầu Ma", "Phàm Nhân Tu Tiên", "Quang Âm Chi Ngoại"],
                correctAnswer: 2
            },
            {
                question: "Ước mơ cụa Vũ... là gì?",
                options: ["Tỷ phú giàu có", "Tu tiên giả", "Làm siêu nhân", "Mafia Internet"],
                correctAnswer: 1 
            },
            {
                question: "Môn thể thao nào mà Vũ bla bla thích nhất?",
                options: ["Đá bôn", "Píc cầu bôn", "Đá fòur", "Bi đa pun láp"],
                correctAnswer: 3
            },
            {
                question: "Địa điểm nào mà Vũ 🔪 muốn đến?",
                options: ["Thiên Nam", "Mặt Trăng", "Nơi ngủ thích nhất", "USA Mẽo"],
                correctAnswer: 0
            },
            {
                question: "Vũ xịn xò thích nghe nhạc của ca sĩ nào?",
                options: ["Sếp Sơn Tùng M-TP khum ăn vải", "Đen Vâu chấttt", "Low G thuốc lào", "Jack 5 triệu bỏ nốt Sol"],
                correctAnswer: 0
            },
            {
                question: "Idol thể thao mà Vũ cool ngầu thần tượng là ai?",
                options: ["Cristiano Ronaldo", "Lionel Messi", "Michael Jordan", "Roger Federer"],
                correctAnswer: 0
            },
            {
                question: "Vũ bad boi thích loại phim nào nhất?",
                options: ["Kinh dị", "Hành động", "Hài", "Lãng mạn"],
                correctAnswer: 1
            },
            {
                question: "Vũ sugar daddy thích sử dụng mạng xã hội nào nhất?",
                options: ["Facebook", "Instagram", "TikTok", "Zalo"],
                correctAnswer: 2
            },
            {
                question: "Vũ abcxyz có thói quen dậy sớm khumm?",
                options: ["Có", "Khumm", "Thỉnh thoảng", "Chưa bao giờ"],
                correctAnswer: 2
            },
            {
                question: "Vũ hehe thích sử dụng hệ điều hành nào nhất?",
                options: ["Windows", "MacOS", "Android", "Linux"],
                correctAnswer: 3
            },
            {
                question: "Vũ dark muốn sống ở thành phố nào?",
                options: ["Hà Nội", "Ninh Bình", "Đà Nẵng", "Đà Lạt"],
                correctAnswer: 3
            },
            {
                question: "Loài hoa nào là loài hoa yêu thích của Vũ mệt roi nhé?",
                options: ["Hoa hồng", "Hoa cẩm tú cầu", "Hoa sen", "Hoa Cỏ"],
                correctAnswer: 3
            },
            {
                question: "Thức uống yêu thích của Vũ hhh là gì?",
                options: ["Nước ngọt", "Cà phê", "Cái gì cũm uống", "Trà sữa"],
                correctAnswer: 0
            },
            {
                question: "Vũ có thích nuôi thú cưng khumm?",
                options: ["Có", "Khumm", "Chỉ thích chó", "Chỉ thích mèo"],
                correctAnswer: 0
            }
        ];

        let currentQuestion = 0;
        let score = 0;
        let quizCount = parseInt(localStorage.getItem('quizCount') || '0');
        let highScore = parseInt(localStorage.getItem('highScore') || '0');

        quizModal.innerHTML = `
            <div class="quiz-content">
                <span class="close-button">&times;</span>
                <h2>Quiz Tình Eoo</h2>
                <div class="quiz-stats">
                    <p><span class="stat-label">Số lần làm quiz:</span> <span class="stat-value">${quizCount}</span></p>
                    <p><span class="stat-label">Điểm cao nhất:</span> <span class="stat-value">${highScore}</span></p>
                </div>
                <div id="question"></div>
                <div id="options"></div>
                <button id="submit">Trả lời</button>
            </div>
        `;

        const closeButton = quizModal.querySelector('.close-button');
        closeButton.onclick = closeQuiz;

        quizModal.style.display = "block";

        function displayQuestion() {
            const questionElement = document.getElementById('question');
            const optionsElement = document.getElementById('options');
            const submitButton = document.getElementById('submit');

            questionElement.textContent = questions[currentQuestion].question;
            optionsElement.innerHTML = '';

            questions[currentQuestion].options.forEach((option, index) => {
                const button = document.createElement('button');
                button.textContent = option;
                button.onclick = () => selectOption(index);
                optionsElement.appendChild(button);
            });

            submitButton.onclick = submitAnswer;
        }

        function selectOption(index) {
            const options = document.getElementById('options').children;
            for (let i = 0; i < options.length; i++) {
                options[i].style.backgroundColor = i === index ? '#ff6b6b' : '';
            }
        }

        function submitAnswer() {
            const selectedOption = document.querySelector('#options button[style*="background-color"]');
            if (selectedOption) {
                const selectedAnswer = Array.from(selectedOption.parentNode.children).indexOf(selectedOption);
                if (selectedAnswer === questions[currentQuestion].correctAnswer) {
                    score++;
                }
                currentQuestion++;
                if (currentQuestion < questions.length) {
                    displayQuestion();
                } else {
                    showResult();
                }
            } else {
                const messageElement = document.createElement('p');
                messageElement.textContent = 'Cỏ trả lời đii!';
                messageElement.style.color = '#ff4757';
                messageElement.style.fontWeight = 'bold';
                messageElement.style.textAlign = 'center';
                messageElement.style.marginTop = '10px';
                messageElement.style.animation = 'shake 0.5s ease-in-out';
                
                const optionsElement = document.getElementById('options');
                optionsElement.parentNode.insertBefore(messageElement, optionsElement.nextSibling);
                
                setTimeout(() => {
                    messageElement.remove();
                }, 2000);
            }
        }

        function showResult() {
            quizCount++;
            localStorage.setItem('quizCount', quizCount);
            if (score > highScore) {
                highScore = score;
                localStorage.setItem('highScore', highScore);
            }

            const quizContent = quizModal.querySelector('.quiz-content');
            quizContent.innerHTML = `
                <div id="result">
                    <h2>Kết quả</h2>
                    <p class="score">Cỏ đã trả lời đúng ${score} / ${questions.length} câu hỏi!</p>
                    <p>${getResultMessage(score)}</p>
                    <div class="quiz-stats">
                        <p><span class="stat-label">Số lần làm quiz:</span> <span class="stat-value">${quizCount}</span></p>
                        <p><span class="stat-label">Điểm cao nhất:</span> <span class="stat-value">${highScore}</span></p>
                    </div>
                    <button onclick="closeQuiz()">Đóng</button>
                </div>
            `;
        }

        function getResultMessage(score) {
            let message = "";
            if (score === questions.length) {
                message = "Tuyệt vời! Cỏ hiểu Vũ đẹp trai rất rõ!";
            } else if (score >= questions.length / 2) {
                message = "Khá tốt! Cỏ hiểu Vũ đẹp trai khá rõ, nhưng vẫn còn điều để khám phá!";
            } else {
                message = "Đừng buồn! Đây là cơ hội để Cỏ tìm hiểu Vũ đẹp trai nhiều hơn!";
            }
            return `<p class="result-message">${message}</p>`;
        }

        displayQuestion();
    }
}

// Thêm hàm closeQuiz vào phạm vi toàn cục
function closeQuiz() {
    document.querySelector('.quiz-modal').style.display = "none";
}

// Thêm dòng này vào hàm DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    // ... (code hiện tại)
    setupQuiz();
});

// Đoạn mã này thêm chức năng phát/dừng nhạc nền cho trang web
function setupMusicToggle() {
    const audio = document.getElementById('background-music');
    const musicToggle = document.getElementById('musicToggle');
    const musicIcon = musicToggle.querySelector('i');
    const musicText = musicToggle.querySelector('.sr-only');
    const playlist = document.getElementById('playlist');
    const playlistItems = playlist.querySelectorAll('li');

    let isPlaying = false;

    if (!audio || !musicToggle) {
        console.error('Không tìm thấy phần tử audio hoặc nút điều khiển nhạc');
        return;
    }

    musicToggle.addEventListener('click', function() {
        if (isPlaying) {
            audio.pause();
            musicIcon.className = 'fas fa-play';
            musicText.textContent = 'Phát nhạc';
            musicToggle.classList.remove('playing');
            isPlaying = false;
        } else {
            if (playlist.style.display === 'none' || playlist.style.display === '') {
                playlist.style.display = 'block';
            } else {
                playlist.style.display = 'none';
            }
        }
    });

    playlistItems.forEach(item => {
        item.addEventListener('click', function() {
            const src = this.getAttribute('data-src');
            audio.src = src;
            audio.play().then(() => {
                musicIcon.className = 'fas fa-pause';
                musicText.textContent = 'Dừng nhạc';
                musicToggle.classList.add('playing');
                playlistItems.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
                isPlaying = true;
            }).catch(error => {
                console.error('Không thể phát nhạc:', error);
            });
            playlist.style.display = 'none';
        });
    });

    audio.addEventListener('ended', function() {
        musicIcon.className = 'fas fa-play';
        musicText.textContent = 'Phát nhạc';
        musicToggle.classList.remove('playing');
        isPlaying = false;
    });
}

// Đảm bảo gọi hàm setupMusicToggle() khi trang được tải
document.addEventListener('DOMContentLoaded', function() {
    // ... (rest of the code)
    setupMusicToggle();
});

function setupHoroscope() {
    const horoscopeButton = document.getElementById('horoscopeButton');
    const horoscopeModal = document.createElement('div');
    horoscopeModal.classList.add('horoscope-modal');
    document.body.appendChild(horoscopeModal);

    horoscopeButton.addEventListener('click', () => {
        showHoroscope();
    });

    function showHoroscope() {
        const coSign = "Sư Tử";
        const gioSign = "Bảo Bình";

        horoscopeModal.innerHTML = `
            <div class="horoscope-content">
                <h2>Horoscope Tình Eooo</h2>
                <div class="couple-info">
                    <div class="person-info">
                        <p>Gió 💨 (${gioSign} - 15/02/2005)</p>
                        <img src="public/binh1.jpg" alt="Gió" class="avatar">
                    </div>
                    <div class="beating-heart">❤️</div>
                    <div class="person-info">
                        <p>Cỏ 🌿 (${coSign} - 24/07/2006)</p>
                        <img src="public/co3.jpg" alt="Cỏ" class="avatar">
                </div>
                </div>
                <div class="horoscope-result">
                    <h3>1. Điểm tương đồng trong tính cách của cung Sư Tử và Bảo Bình</h3>
                    <p>Mặc dù Sư Tử và Bảo Bình thuộc hai nhóm nguyên tố khác nhau (Sư Tử thuộc nguyên tố Lửa, trong khi Thiên Bình thuộc nhóm nguyên tố Khí) nhưng ở họ vẫn có một số điểm tương đồng trong tính cách như sau:<br></br>
                    <h5>Không thích dựa dẫm vào người khác:</h5> Sư Tử và Bảo Bình không thích bị phụ thuộc vào bất kỳ ai và muốn tự đưa ra quyết định cho cuộc sống của mình.<br></br>
                    <h5>Sở hữu trí sáng tạo thiên bẩm:</h5> Điểm ấn tượng của mọi người khi làm việc cùng hai chòm sao này chính là trí tưởng tượng siêu phong phú. Họ thường có cái nhìn độc đáo và khả năng tư duy linh hoạt, từ đó giúp tạo ra những ý tưởng mới và khác biệt.<br></br>
                    <h5>Có chí tiến thủ, quyết tâm:</h5> Là những người có dự định và hoài bão trong cuộc sống, Sư Tử và Bảo Bình không chỉ sẵn sàng đối mặt với mọi khó khăn, thách thức để hoàn thành mục tiêu của mình mà còn không ngừng tìm kiếm những kiến thức, cơ hội mới.<br></br>
                    <h5>Dễ thích nghi:</h5> Cả hai chòm sao này đều thích ứng nhanh chóng với mọi tình huống. Họ có khả năng điều chỉnh kế hoạch và thay đổi chiến lược khi cần thiết để đạt được kết quả tốt nhất.<br></br>
                    <h5>Kiêu ngạo, quá đề cao bản thân:</h5> Bảo Bình và Sư Tử thường tự coi mình là "trung tâm của vũ trụ" nên họ sẽ không dễ dàng nhún nhường hay chịu đựng lời phê bình từ người khác mà cho rằng những lời nói đó chỉ là sự ganh tị mà thôi. </p>

                    <h3>2. Sư Tử có hợp với Bảo Bình không? Bói mức độ hợp nhau</h3>
                    <h4>2.1. Tình yêu giữa cung Sư Tử và Bảo Bình</h4>
                    <h5>Nữ Sư Tử và nam Bảo Bình</h5>
                    <p>Có thể nói, nữ Sư Tử và nam Bảo Bình chính là hai mảnh ghép hoàn hảo dành cho nhau. Bởi cả hai có khá nhiều đặc điểm tương đồng trong tính cách. Họ đều rất sôi nổi, hòa đồng và yêu thích những bữa tiệc tùng sôi động. Không chỉ thế, họ còn luôn biết cách tạo sự thiện cảm, yêu mến với mọi người xung quanh.<br></br>
                    Mặc dù luôn mang vẻ ngoài cá tính, mạnh mẽ nhưng thật sâu bên trong trái tim nàng Sư Tử vẫn ẩn chứa một mong muốn được bảo vệ, che chở trong vòng tay của người mình yêu. Và chàng trai Bảo Bình chững đạc, trưởng thành sẽ là bờ vai vững chắc cho nàng dựa vào mỗi khi khó khăn, mềm yếu.<br></br>
                    Cặp đôi này không chỉ phù hợp trong chuyện tình cảm mà còn rất ăn ý trong công việc. Những ý tưởng của hai người vô cùng độc đáo và mới lạ. Sự bản lĩnh của Sư Tử và Bảo Bình sẽ giúp họ nhanh chóng đạt được cuộc sống viên mãn mà cả hai hằng mong ước.</p>
                    <h4>2.2. Đánh giá mức độ hợp nhau giữa Sư Tử và Bảo Bình khi yêu</h4>
                    <h5>Mức độ tin tưởng giữa Sư Tử và Bảo Bình</h5>
                    <p>Sự tin tưởng không phải vấn đề đáng lo ngại cho cặp đôi Bảo Bình và Sư Tử. Cả hai đều tuyệt đối tin tưởng và ủng hộ mọi quyết định của đối phương. Bởi họ biết rằng một khi đã yêu, nửa kia sẽ hoàn toàn hết lòng vì mối tình này. Do đó, tình yêu giữa hai người sẽ ngày càng phát triển lành mạnh và bền lâu hơn.</p>
                    <h5>Sự giao tiếp giữa Sư Tử và Bảo Bình</h5>
                    <p>Giao tiếp cũng là một yếu tố quan trọng góp phần xây dựng một mối quan hệ sâu sắc và lâu dài. Tính cách của Sư Tử và Bảo Bình vốn rất thẳng thắn, hoạt bát nên họ dễ dàng chia sẻ với nhau mọi điều nhỏ nhặt trong cuộc sống, từ bạn bè, gia đình đến học tập hay công việc. Điều này đã tạo nên một sợi dây gắn kết giúp họ thấu hiểu và cảm thông với đối phương hơn.</p>
                    <h5>Cảm xúc giữa Sư Tử và Bảo Bình</h5>
                    <p>Mối tình của Sư Tử và Bảo Bình sẽ trải qua với nhiều cung bậc cảm xúc khác nhau, lúc vui vẻ, lúc thì trầm lặng. Mỗi cảm xúc đều là một gia vị không thể thiếu để tạo nên một hạnh phúc lâu dài.<br></br>
                    Bảo Bình thường cố gắng che giấu cảm xúc thật của mình. Nhưng thật tốt khi sự ấm áp của Sư Tử đã làm tan chảy những "tảng băng" lạnh giá trong trái tim Bảo Bình. Và sẽ không có nơi nào an toàn hơn để chia sẻ tình cảm của mình ngoài vòng tay của người mình yêu.<br></br>
                    Sự ngọt ngào của cặp đôi này sẽ luôn khắc sâu trong tâm trí của cả hai, dù cho mai sau họ không còn chung bước nữa.</p>
                    <h5>Quan niệm sống của Sư Tử và Bảo Bình</h5>
                    <p>Trong 12 cung hoàng đạo, Sư Tử và Bảo Bình là hai chòm sao "hiếm hoi" giống nhau trong quan điểm sống. Cặp đôi này luôn muốn nhận được sự công nhận và ánh mắt ngưỡng mộ từ mọi người xung quanh. Vì vậy, cả hai đều có rất nhiều dự định và hoài bão trong cuộc sống nên họ cũng mong muốn được trải nghiệm mọi điều hay ho, thú vị và chinh phục những cột mốc thành công mới.<br></br>
                    Khi cùng chung một mục tiêu trong cuộc sống, Sư Tử và Bảo Bình không chỉ dừng lại ở tình yêu đơn thuần mà còn là người bạn đồng hành của nhau trên con đường chinh phục ước mơ nữa đó nha.</p>
                    <h5>Hoạt động chung giữa Sư Tử và Bảo Bình</h5>
                    <p>Sư Tử và Bảo Bình đều rất hay tò mò và hiếu kỳ về thế giới xung quanh. Do đó, họ có thể cùng nhau thực hiện một vài hoạt động như đi du lịch, tham quan triển lãm nghệ thuật hoặc trải nghiệm các lễ hội âm nhạc sôi động.<br></br>
                    Bên cạnh đó, sự tự tin và khí chất của Sư Tử cùng với cái nhìn tiên phong, độc đáo của Bảo Bình sẽ vô cùng thích hợp để cùng nhau đồng hành trên con đường sự nghiệp. Họ có thể truyền cảm hứng và động viên nhau để theo đuổi ước mơ và mục tiêu cá nhân.</p>

                    <h3>3. Tình bạn giữa Sư Tử và Bảo Bình</h3>
                    <p>Dấu hiệu cho một tình bạn tốt đó chính là cả hai đều có một trái tim vị tha và phóng khoáng. Sư Tử và Bảo Bình luôn tôn trọng sự khác biệt giữa hai người. Ngoài ra, họ cũng thường xuyên tâm sự với nhau về những buồn vui, khó khăn trong cuộc sống nên tình bạn giữa hai người sẽ rất khó bị rạn nứt và ngày càng gắn bó hơn. </p>

                    <h3>4. Lời khuyên dành cho mối quan hệ giữa Sư Tử và Bảo Bình</h3>
                    <p>Đôi khi, Sư Tử thường tỏ ra quá tự tin mà áp đặt mọi mong muốn của mình lên tình yêu của cả hai. Điều này vô tình khiến Bảo Bình cảm thấy áp lực, mệt mỏi khi cứ phải chạy theo "tiêu chuẩn" của đối phương.<br></br>
                    Để cải thiện mối quan hệ giữa hai người trở nên tốt đẹp hơn, Sư Tử cần học cách khiêm tốn và quan tâm hơn đến cảm xúc của nửa kia. Còn, Bảo Bình nên dũng cảm trong việc thể hiện quan điểm riêng của mình với người mình yêu.</p>
                </div>
                <button id="closeHoroscope">Đóng</button>
            </div>
        `;

        horoscopeModal.style.display = "block";

        document.getElementById('closeHoroscope').addEventListener('click', () => {
            horoscopeModal.style.display = "none";
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // ... (các hàm khác)
    setupHoroscope();
});

// ... existing code ...

function countdown() {
    const loveStartDate = new Date('2024-03-01T23:27:00+07:00');
    
    function updateTimer() {
        const now = new Date();
        const difference = now - loveStartDate;

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }

    updateTimer();
    setInterval(updateTimer, 1000);
}
document.addEventListener('DOMContentLoaded', function() {
    countdown();
});
