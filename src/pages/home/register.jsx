import { Box, Button, Flex, Input, Select, Text, Textarea, useToast } from '@chakra-ui/react'
import { useSpring, animated } from '@react-spring/web';
import { useForm } from 'react-hook-form';
import { useInView } from 'react-intersection-observer';
import moment from 'moment-timezone';
import axios from 'axios';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const toast = useToast()

    const showToast = (title, description, status, duration) => {
        toast({
            title: title,
            description: description,
            status: status,
            duration: duration,
            isClosable: true,
            position: 'top-right'
        })
    }


    const onSubmit = data => {

        if (data) {
            if (data.course !== "0" && data.teacher !== "0" && data.address !== "0") {
                const currentTimeVN = moment().tz('Asia/Ho_Chi_Minh').format();
                const dataWithSubmitTime = { ...data, submitTime: currentTimeVN };


                axios.get('https://66266600052332d55322c087.mockapi.io/TitanEnglishFormData')
                    .then(response => {
                        const data = response.data

                        const checkExist = data.find(item => item.phone === dataWithSubmitTime.phone)

                        if (!checkExist) {
                            axios.post('https://66266600052332d55322c087.mockapi.io/TitanEnglishFormData', dataWithSubmitTime)
                                .then(response => {
                                    showToast('Cảm ơn bạn đã quan tâm đến các khóa học của Titan English', 'Sẽ có nhân viên của chúng tôi liên lạc cho bạn trong thời gian sớm nhất ', 'success', 9000)
                                })
                                .catch(error => {
                                })
                        } else {
                            showToast('Lưu ý', 'Chúng tôi đã nhận được thông tin của bạn, vui lòng không gửi nhiều lần', 'error', 9000)
                        }
                    })
                    .catch(error => {
                        console.log('check error:', error)
                    })



            } else {
                if (data.course === "0") {
                    showToast('Vui lòng chọn khóa học', '', 'warning', 3000)
                } else if (data.teacher === "0") {
                    showToast('Vui lòng chọn giáo viên', '', 'warning', 3000)
                } else if (data.address === "0") {
                    showToast('Vui lòng chọn cơ sở', '', 'warning', 3000)
                }
            }
        }
    }

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0,
    });

    const title = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(-100px)',
        config: { duration: 1000 }
    });

    const form = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(100px)',
        config: { duration: 1000 }
    });




    return (
        <Box>
            <animated.div className={'w-[100%]'} style={title} ref={ref}>
                <Box textAlign={'center'} fontWeight={800} color={'#003359'} fontSize={[24, 28, 32, 36, 40]}>Đăng ký khóa học của
                    <Text color={'#dd5c29'}>
                        TITAN ENGLISH
                    </Text>
                </Box>
            </animated.div>

            <animated.div style={form} ref={ref}>
                <form onSubmit={handleSubmit(onSubmit)} className='max-w-[1000px] mx-[auto] border-2 border-[#dd5c29] mt-5 rounded-xl p-5'>
                    <Flex flexDir={['column', 'column', 'row', 'row', 'row', 'row']} gap={5} >
                        <Flex direction="column" mb={4} w={'100%'} gap={2}>
                            <Text fontSize="lg" fontWeight="bold">Thông tin cá nhân</Text>
                            <Input type="text" placeholder="Họ và tên" {...register("fullName", { required: true })} />
                            {errors.fullName && <Text mt={-2} color={'red'}>Họ và tên không được bỏ trống</Text>}

                            <Input type="email" placeholder="Email của bạn" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                            {errors.email && errors.email.type === "required" && (<Text mt={-2} color={'red'}>Email không được bỏ trống</Text>)}
                            {errors.email && errors.email.type === "pattern" && (<Text mt={-2} color={'red'}>Email không hợp lệ</Text>)}

                            <Input type="number" placeholder="Số điện thoại" {...register("phone", { required: true, minLength: 10, maxLength: 10 })} />
                            {errors.phone && errors.phone.type === "required" && (<Text mt={-2} color={'red'}>Số điện thoại không được bỏ trống</Text>)}
                            {errors.phone && errors.phone.type === "minLength" && (<Text mt={-2} color={'red'}>Số điện thoại phải có ít nhất 10 số</Text>)}
                            {errors.phone && errors.phone.type === "maxLength" && (<Text mt={-2} color={'red'}>Số điện thoại không được quá 10 số</Text>)}
                        </Flex>

                        <Flex direction="column" mb={4} w={'100%'} gap={2}>
                            <Text fontSize="lg" fontWeight="bold">Lựa chọn khóa học</Text>
                            <Select {...register("course", { required: true })}>
                                <option hidden value="0">Chọn khóa học</option>
                                <option value="Khóa Học TOEIC 1">Khóa Học TOEIC 1</option>
                                <option value="Khóa Học TOEIC 2">Khóa Học TOEIC 2</option>
                                <option value="Khóa Học TOEIC 3">Khóa Học TOEIC 3</option>
                                <option value="Khóa Học TOEIC 4">Khóa Học TOEIC 4</option>
                            </Select>
                            {errors.course && <span>Vui lòng chọn khóa học</span>}

                            <Select {...register("teacher", { required: true })}>
                                <option hidden value="0">Chọn giáo viên</option>
                                <option value="Mr. Thanh">Mr. Thanh</option>
                                <option value="Mr. Quang Minh">Mr. Quang Minh</option>
                                <option value="Mr. Thành Đạt">Mr. Thành Đạt</option>
                                <option value="Mr. Sơn Lâm">Mr. Sơn Lâm</option>
                                <option value="Ms. Ái Duyên">Ms. Ái Duyên</option>
                                <option value="Ms. Mai Hương">Ms. Mai Hương</option>
                                <option value="Ms. Minh Tâm">Ms. Minh Tâm</option>
                                <option value="Ms. Ngọc Trang">Ms. Ngọc Trang</option>
                                <option value="Ms. Huyền Trang">Ms. Huyền Trang</option>
                                <option value="Ms. Mộng Cầm">Ms. Mộng Cầm</option>
                                <option value="Ms. Ly Ngô">Ms. Ly Ngô</option>
                                <option value="Ms. Thiên Kim">Ms. Thiên Kim</option>
                                <option value="Ms. Kim Ngân">Ms. Kim Ngân</option>
                                <option value="Ms. Nhi">Ms. Nhi</option>
                            </Select>
                            {errors.teacher && <span>Vui lòng chọn giáo viên</span>}

                            <Select {...register("address", { required: true })}>
                                <option hidden value="0">Chọn cơ sở</option>
                                <option value="Cơ sở 1: 135/1, Đường 14, Phường Tăng Nhơn Phú B, Quận 9">Cơ sở 1: 135/1, Đường 14, Phường Tăng Nhơn Phú B, Quận 9</option>
                                <option value="Cơ sở 2: số 24, đường 21, Phường Linh Chiểu, Thủ Đức">Cơ sở 2: số 24, đường 21, Phường Linh Chiểu, Thủ Đức</option>
                                <option value="Cơ sở 3: 38, đường 7, Phường Linh Trung, Thủ Đức">Cơ sở 3: 38, đường 7, Phường Linh Trung, Thủ Đức</option>
                                <option value="Cơ sở 4: Tòa nhà Papaya - Quận Bình Thạnh">Cơ sở 4: Tòa nhà Papaya - Quận Bình Thạnh</option>
                                <option value="Cơ sở 5: 447K, Lê Văn Việt, Phường Tăng Nhơn Phú A, Quận 9">Cơ sở 5: 447K, Lê Văn Việt, Phường Tăng Nhơn Phú A, Quận 9</option>
                            </Select>
                            {errors.address && <span>Vui lòng chọn cơ sở</span>}
                        </Flex>
                    </Flex>

                    <Box mb={4}>
                        <Text fontSize="lg" fontWeight="bold">Lời nhắn</Text>
                        <Textarea {...register("message", {})} placeholder='Nếu có thắc mắc, hãy để lại lời nhắn cho chúng tôi.' height={100} resize="vertical" />
                    </Box>

                    <Flex justifyContent={'space-between'} gap={5}>
                        <Text fontStyle={'italic'} fontWeight={500} >*Chúng tôi sẽ không chia sẻ thông tin của bạn cho bất kỳ ai!</Text>
                        <Button px={10} type="submit" bg={'#003359'} _hover={{ bg: '#dd5c29' }} color={'white'} >Gửi thông tin</Button>
                    </Flex>
                </form>
            </animated.div>
        </Box >
    )
}

export default Register
