import { Box, Flex, Text } from '@chakra-ui/react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

import './styles.scss'
import FeedbackSlider from '../../components/FeedbackSlider';

function Feedback() {
    const feedbackList = [
        {
            id: 1,
            avatar: 'https://i.imgur.com/uBhgfSq.jpeg',
            name: 'Mon',
            date: '13 tháng 4 năm 2024',
            description: `Xin chào mọi người mình từng bị mất gốc tiếng anh từ bé và trãi nghiệm thực tế của mình khi lên đại học là mình đã học qua 3 trung tâm tiếng anh, 
            mình rất ám ảnh mỗi làn nhắc tới toeic mình còn nghĩ mình còn không có khả năng để ra trường nhưng ANH NGỮ TITAN là trung tâm duy nhất đã cứu vớt mình,
            để mình có cơ hội được ra trường 😭 mình thật sự may mắn khi mình quyết định học ở TITAN phải nói là cảm ơn Titan, 
            cảm ơn Boss siêu siêu nhiều. Ở đây mình được học những kiến thức quan trọng và trọng tâm không lan man, 
            học theo một lộ trình mà giúp mình cải thiện tiến bộ từng chút một đặc biệt đanh cho những bạn mất gốc giống mình. 
            Quan trọng nhất là giáo viên ở trung tâm siêu nhiệt tình và quan tâm đến học viên đặt biệt là Boss theo sát tình hình từng học viên từng chút một. 
            Kể cả trong tuần hay cuối tuần trung tâm đều có các lớp học bổ trợ hoàn toàn miễn phí đây là điều mà mình thấy Titan thật sự tuyệt vời, 
            nhờ có những buổi học trên lớp kết hợp với những buổi học bổ trợ đã giúp mình rất nhiều trong quá trình chinh phục chuẩn đầu ra của trường mình. 
            Và bây giờ MÌNH ĐÃ ĐẠT ĐƯỢC. Một lần nữa em rất cảm ơn Boss và Anh Ngữ TITAN rất nhiều.`,
        },
        {
            id: 2,
            avatar: 'https://i.imgur.com/6sHIOTZ.jpeg',
            name: 'Phan Phong Hào',
            date: '3 tháng 4 năm 2024',
            description: `Môi trường học tập ở TiTan rất tốt, tài liệu học cũng được chia ra cho phù hợp với từng đợt. 
            Và may mắn khi được boss Thanh đứng lớp, boss rất tận tâm với học trò, không những trên cương vị của một người thầy, 
            boss còn như một người anh đi trước của chúng em`,
        },
        {
            id: 3,
            avatar: 'https://i.imgur.com/50VKqTj.jpeg',
            name: 'Hồng Cúc',
            date: '30 tháng 3 năm 2024',
            description: `Chào mọi người, sau một khoảng thời gian đồng hành với khóa Học Toeic cơ bản tại Anh Ngữ TITAN - Thủ Đức, 
            mình từ 1 đứa chỉ vỏn vẹn 100-200 Toeic hiện tại đã leo lên đến mức 500+. 
            Thời gian học tại trung tâm thật sự là khoảng thời gian đáng nhớ của mình trong quãng đời sinh viên. 
            Mình thật sự rất cảm ơn trung tâm, đặc biệt là Boss Thanh và hi vọng rằng sau này càng ngày càng có thêm nhiều bạn biết đến trung tâm.
            Mọi người ai đang cần học Toeic lấy bằng ra trường thì đừng ngần ngại hãy inbox trung tâm ngay đi nhé😍 trung tâm sẽ không làm mọi người thất vọng đâu`,
        },
        {
            id: 4,
            avatar: 'https://i.imgur.com/e09AlG2.jpeg',
            name: 'Nguyễn Thị Thu Ba',
            date: '29 tháng 3 năm 2024',
            description: `Titan xịn lắm mn ơi, Boss Thanh vừa vui vẻ, nhiệt tình (đôi khi có hay chửi xíu hoy à), đặc biệt phương pháp dạy cuốn lắm nè. 
            Mình học tiếng anh cũng qua vài giáo viên và vài trung tâm òi, nhưng cuối cùng Titan là nơi giúp mình có động lực học tiếng anh, phương pháp học cũng hiệu quả dới mình. 
            Nếu mn đang tìm nơi ôn toiec, Titan là một lựa chọn mình nghĩ okeeee ó 😍`,
        },
        {
            id: 5,
            avatar: 'https://i.imgur.com/cve7Xso.jpeg',
            name: 'Mỹ Lệ',
            date: '28 tháng 3 năm 2024',
            description: `Em rất vui vì đã được trải nghiệm khóa học tại TITAN. Với lộ trình học 4 tháng cùng với sự đồng hành của Mr.Đạt thì em đã tiến bộ hơn rất nhiều. 
            Thầy tận tình và hỗ trợ giải đáp mọi thắc mắc của học viên. 
            Nội dung bài học được xây dựng logic, dễ hiểu và dễ dàng năm giữ kiến thức.
            Ngoài ra thì trung tâm còn mở thêm những buổi học bổ trợ vô cùng bổ ích hỗ trợ củng cố kiến thức thêm. 
            Kết thúc khoa học thì em đã đạt được mục tiêu đầu tiên là hoàn thành tiểng anh đầu ra của trường. 
            Cảm ơn Mr. Đạt và Trung Tâm TITAN rất nhiều ạa!❤️`,
        },
        {
            id: 6,
            avatar: 'https://i.imgur.com/1oI94gl.jpeg',
            name: 'Nguyễn Hữu Chiến',
            date: '28 tháng 1 năm 2024',
            description: `Chặng đường học tiếng Anh tại TITAN với Ms. Ly là một trải nghiệm đáng nhớ. 
            Cô không chỉ là người hướng dẫn mà còn là người bạn đồng hành, luôn chia sẻ niềm đam mê và khích lệ mình. 
            Mỗi buổi học không chỉ là việc nắm bắt kiến thức mà còn là cơ hội để tự tin giao tiếp.
            Sự quan tâm và hỗ trợ tận tâm từ Ms. Ly đã giúp mình vượt qua những thách thức và phát triển không ngừng. 
            Hạnh phúc vì chọn TITAN, nơi không chỉ học tiếng Anh mà còn trải nghiệm sự phát triển bản thân toàn diện.`,
        },
        {
            id: 7,
            avatar: 'https://i.imgur.com/bj737nL.jpeg',
            name: 'Diệu Hiền',
            date: '15 tháng 1 năm 2024',
            description: `Mình được bạn bè giới thiệu nên biết đến TITAN và đặc biệt là Boss Handsome. 
            Sau 4th học tại đây, với sự chỉ dạy tận tình của Boss mà mình từ 1 người rất kém tiếng anh đã tiến bộ hơn trước rất nhiều. 
            Học lớp của Boss rất vui, thoải mái, không hề "áp lực" tí nào... 🤭
            Thật sự cảm ơn Boss và TITAN rất nhiều. 
            Chúc Anh Ngữ TITAN ngày càng phát triển...❤️`,
        },
        {
            id: 8,
            avatar: 'https://i.imgur.com/xtOOSua.jpeg',
            name: 'MT Luyến',
            date: '14 tháng 1 năm 2024',
            description: `Mình là 1 đứa rất sợ tiếng anh, phải nói là rất rất sợ 😧,nhưng sau khi được học 4 tháng tại trung tâm TITAN mình cảm thấy bản thân tiến bộ hơn rất nhiều 
            .Tất cả đều nhờ vào những tiết giảng nhiệt tình, tân tâm của Boss Thanh. 
            Cảm ơn Boss đã luôn hỗ trợ hết mình và chúc trung tâm ngày càng phát triển.`,
        },
        {
            id: 9,
            avatar: 'https://i.imgur.com/P2z4uyG.jpeg',
            name: 'Vũ Trâm',
            date: '13 tháng 1 năm 2024',
            description: `Sau 4 tháng học, mình cảm thấy giáo viên dạy tại Trung tâm Anh Ngữ TITAN ai cũng nhiệt tình và yêu nghề cả, nhất là giáo viên đứng lớp của mình boss Thanh. 
            Học ở lớp của boss thì ngoài tiếng Anh, mình còn được học thêm những kiến thức xã hội khác nữa. Mãi yêu TITAN! :3`,
        },
        {
            id: 10,
            avatar: 'https://i.imgur.com/AyPklnM.jpeg',
            name: 'Trần Tuyết Nhi',
            date: '12 tháng 1 năm 2024',
            description: `Nghe danh đã lâu nhưng khi vào thì chỉ có thể thốt 1 từ đó là Anh Ngữ TITAN quá tuyệt vời! Giảng viên giỏi, 
            học phí hợp lý, giá rẻ cho sinh viên, lịch học linh hoạt, tài liệu đa dạng, môi trường thân thiện, tiến bộ nhanh chóng. 
            Tôi rất hài lòng và khuyên các bạn nên tham gia các khoá học. 
            Đặc biệt là có Boss Thanh handsome rất nhiệt tình và có tâm hết mình với các em sinh viên `,
        },
        {
            id: 11,
            avatar: 'https://i.imgur.com/y8R6OnF.jpeg',
            name: 'Thái Thịnh',
            date: '8 tháng 1 năm 2024',
            description: `6/1/2024- Mình kết thúc khoá học
            Thật sự có quá nhiều thứ mìn đã được trải nghiệm qua khoá học này. Từ giáo viên đến trung tâm đều hỗ trợ hết mình cho mình cũng như các học viên khác.
            Em xin cảm ơn cô Ly  về những nổ lực của cô đã giúp em tự tin hơn trước kì thi toeic, cả những lần cô la em đi trễ, không ôn bài. eheh. 
            Nhưng em điều hiểu cô chỉ muốn tốt cho bọn em hoi. 
            Em chúc cô nhìu sức khỏe và thành công hơn, chúc Anh Ngữ Titan ngày càng phát triển và góp sức giúp các bạn học viên đạt được Target mìn mong muốn.
            Chúc tất cả thi tốt🍀Mãi iu`,
        },
        {
            id: 12,
            avatar: 'https://i.imgur.com/6HXgP8u.jpeg',
            name: 'Khánh Vy',
            date: '7 tháng 1 năm 2024',
            description: `Tháng 9 mình được gặp cô Ly, gặp các bạn mới, học ở môi trường mới. Tuy là mới nhưng với sự nhiệt tình của cô càng khiến mình cởi mở hơn, 
            mình dần bắt kịp nhịp điệu của lớp, mình tiến bộ từng ngày. Cô mình dáng người bé bé xinh xinh, nhưng sự nhiệt huyết trong cô hong nhỏ tí nàoo, 
            tận tâm có, hài hước có và đôi khi còn có cả tiếng la lofi cũm dui dẻ hoan hỉi 🤭 
            Tháng 1 mình kết thúc lớp, chia tay cô và các bạn. Cảm ơn cô và các bạn nhìu lắmm hihii`,
        },
        {
            id: 13,
            avatar: 'https://i.imgur.com/HCC7Rco.jpeg',
            name: 'Đặng Phú Toàn',
            date: '12 tháng 11 năm 2023',
            description: `Đây là feedback của mình sau khi kết thúc 1 khoá 4 tháng  cùng với Anh Ngữ Titan , 
            đầu tiên khi các bạn tham gia vào khoá học của Anh Ngữ Titan các bạn sẽ được tiếp xúc và trò chuyện cùng với người đẹp trai nhất thế giới Nguyễn Thế Thanh, 
            người thầy đầy nhiệt huyết với học trò cưng của BOSS , luôn cố gắng truyệt đạt kiến thức mới lạ cho học trò cưng của BOSS , 
            luôn hỗ trợ hết mình để các học trò cưng của mình ngày càng trở nên tốt hơn , 
            một người thầy nhiệt huyết đến như vậy  thì còn ngần ngại gì mà không tham gia vào khoá học của Anh Ngữ Titan nàooooo!!!`,
        },
        {
            id: 14,
            avatar: 'https://i.imgur.com/61sPzl3.jpeg',
            name: 'Khánh Linh',
            date: '18 tháng 9 năm 2023',
            description: `Mình biết đến Titan nhờ nhà gần, mà mỗi lần đi ngang qua là thấy học sinh siêu đông thế là về nhà lặng lẽ stalk page trung tâm. 
            Sau một khoảng thời gian tham khảo nhiều nơi thì mình với một bạn nữa đã quyết định chọn Titan để theo học và đúng là lựa chọn cực sáng suốt luôn nha trùi. 
            Khoá học cơ bản 4 tháng giúp mình lấy nền chắc với có thêm vốn từ vựng nên đi thi điểm cao vượt mong đợi rất nhiều. 
            Mình may mắn được học với thầy Thanh dạy siêu nhiệt tình lại vui tính (cũng có lúc không vui tại kh học bài thầy nạt cho mấy câu làm sợ, 
                mà nghe xong cái có động lực học làm điểm cao hơn hẳn nha🙂), lâu lâu bào thầy ly trà sữa hay cuốn tập thì niềm vui x2. 
                Ngoài ra thì học phí cũng rất hạt dẻ nên là recommend mạnh ạ.`,
        },
        {
            id: 15,
            avatar: 'https://i.imgur.com/NExMMSa.jpeg',
            name: 'Nguyễn Thị Mỹ Châu',
            date: '18 tháng 8 năm 2023',
            description: `Thật sự may mắn khi biết đến TITAN và được vào lớp Boss. Cảm ơn Boss đã dạy hết mình cho tụi em. 
            Lúc dạy kiến thức Boss luôn tập trung và làm nhiều cách để tụi em có thể tiếp thu nhanh nhất và dễ nhớ nhất. 
            Bởi vậy nên kiến thức của em khá lên rất nhiều so với trước khi đến với lớp Boss. Mặc dù đã kết thúc khóa học nhưng Boss vẫn luôn support hết mình để đưa em vào bờ. 
            Ngoài  kiến thức ra thì Boss còn dạy cho em nhiều kỹ năng sống và nhiều bài học rất ý nghĩa. 
            Boss có nhiều câu nói rất hay làm cho em có động lực để cố gắng từng ngày. Một lần nữa xin cảm ơn Boss rất nhiều🥰
            BOSS LÀ CHÂN LÝ. TITAN LÀ CHÂN ÁI`,
        },
        {
            id: 16,
            avatar: 'https://i.imgur.com/tmVuzYe.jpeg',
            name: 'Lê La Vy',
            date: '1 tháng 8 năm 2023',
            description: `Trung Tâm Anh Ngữ Titan với Ms.Ly là một trong những địa chỉ đáng tin cậy để học tiếng Anh. 
            Dịch vụ và giảng dạy tại trung tâm này đều mang tính chuyên nghiệp và tận tâm. Cô Ms. Ly là một giáo viên dày dặn kinh nghiệm, 
            có cách truyền đạt bài bản, dễ hiểu và luôn tạo cảm hứng cho học viên. Sự tận tâm và nhiệt huyết của Ms. Ly và 
            đội ngũ giáo viên tại Trung Tâm Anh Ngữ Titan đã tạo nên một môi trường học tập tích cực, 
            đồng thời giúp học viên phát triển kỹ năng và tự tin thi tiếng Anh đầu ra, ngoài ra còn áp dụng trong cuộc sống hàng ngày. 
            Một bài đánh giá hơi công nghiệp xíu 🥰 10 điểmmm
            Cảm ơn Ms.Ly và Titan rất nhiều ạ 🥰`,
        },
        {
            id: 17,
            avatar: 'https://i.imgur.com/XTMMkGQ.jpeg',
            name: 'Hào Hạo',
            date: '31 tháng 7 năm 2023',
            description: `Sau 4 tháng học tập cùng Ms.Ly thì tui đã học được rất nhiều bài học cùng với những kiến thức bổ ích. 
            Đặc biệt là 2 kỹ năng nghe nói của tui đã tăng lên đáng kể. Cách truyền đạt kiến thức của cô rất là thú vị và dễ hiểu lun á! 
            Không chỉ thế cô còn rất quan tâm tới từng thành viên trong lớp luôn nè! 🫶🫶🫶
            Nên là tui highly recommend cả nhà học tại Titan nha, đặc biệt là học với Ms.Ly nè. Hơi bị vui luôn á!`,
        },
        {
            id: 18,
            avatar: 'https://i.imgur.com/zN5LCtg.jpeg',
            name: 'Nguyễn Thuận',
            date: '5 tháng 7 năm 2023',
            description: `Thật tuyệt khi được học ở trung tâm Anh ngữ TITAN và được thầy Lâm hướng dẫn cảm ơn thầy đã giúp em đỡ ghét TA hơn rất nhiều ạ
            Trải qua 4 tháng học TA cùng thầy Lâm em đã học thêm được rất nhiều cảm ơn sự tân tâm của thầy`,
        },
        {
            id: 19,
            avatar: 'https://i.imgur.com/KCaE6jN.jpeg',
            name: 'Nhi Nguyễn',
            date: '3 tháng 7 năm 2023',
            description: `Có duyên được học ở trung tâm Anh ngữ TITAN và được thầy Lâm hướng dẫn lớp T409, 
            giúp em từ 1 đứa vốn từ vựng vô cùng ít 🤫và không thích nghe tiếng anh 😵‍💫thì nay em đã có vốn từ vựng kha khá và thích làm các bài đọc tiếng anh hơn. 
            4 tháng cũng lớp T409 và Mr.Lâm tuy không dài nhưng đủ để em có thêm bạn mới. 
            Em rất cảm ơn trung tâm và thầy cô TITAN đã hướng dẫn tận tình, ngoài những giờ học chính thức thì trung tâm và Mr.Lâm đã mở các lớp phụ đạo khi có thời gian rảnh 😍
            Highly recommend các bạn đến học và có những khoản thời gian tuyệt với với TITAN ❤️❤️❤️`,
        },
        {
            id: 20,
            avatar: 'https://i.imgur.com/ZqRSrbe.jpeg',
            name: 'Mỹ Duyên',
            date: '28 tháng 6 năm 2023',
            description: `Kết thúc khoá học với rất nhiều cảm xúc. Thời gian 4th cũng gọi là khá dài nhưng đối với mình nó trôi qua rất nhanh. 
            Đến với trung tâm, mình được học rất nhiều. Mỗi ngày đi học đối với mình là rất vui, muốn đi học mãi thoai. 
            Người giáo viên đồng hành với mình suốt khoá học là Ms.Ly, 1 người cô thân thiện, nhiệt tình và rất đáng yêu. 
            Hi vọng em sẽ mang được tấm bằng như mục tiêu để khoe với cô☘️Thanks my teacher❤️`,
        }
    ]

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    const title = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0px)' : 'translateX(100px)',
        config: { duration: 1000 }
    });

    const description = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0px)' : 'translateX(-100px)',
        config: { duration: 1000 }
    });

    const feedback = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'scale(1)' : 'scale(0)',
        config: { duration: 1000 },
    });


    return (
        <Box my={70} >
            <animated.div style={title} ref={ref}>
                <Box textAlign={'center'} fontWeight={800} color={'#003359'} fontSize={40}>Học viên nói gì về </Box>
            </animated.div>

            <animated.div style={description} ref={ref}>
                <Box textAlign={'center'} fontWeight={800} fontSize={40}><Text color={'#dd5c29'}>TITAN ENGLISH</Text></Box>
            </animated.div>

            <animated.div className='mt-[50px]' style={feedback} ref={ref} >
                <Box w={[350, 450, 650, 750, 850, 950]} transition={'width 0.3s ease-in-out'}   >
                    <Box className='rounded-xl' border={'2px dashed #dd5c29'} p={2}>
                        <FeedbackSlider feedbackList={feedbackList} />
                    </Box>
                </Box>
            </animated.div >
        </Box >
    );
}

export default Feedback;
