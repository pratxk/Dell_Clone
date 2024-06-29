import React from 'react'
import HomeLeft from '../components/Home_Cards/HomeLeft'
import { Box, Button, Container, Flex, Grid, GridItem, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import { color } from 'framer-motion'
import ServiceList from '../components/Service_List/ServiceList'
import Playback_card from '../components/Home_Cards/Playback_card'
import { PLAYBACK_ITEMS } from '../components/Home_Cards/playBackItems'
import Carousel from '../components/Carousel_List/Carousel_Type1/Carousel'
import VideoBackgroundBox from '../components/VideoBackgroundBox'
import Base_card from '../components/Home_Cards/Base_card'
import { BiBadgeCheck, BiHome, BiSupport, BiUserVoice } from 'react-icons/bi'
import { GoGear } from "react-icons/go";
import { Account_B1Card, Account_BCard, Dell_Premier, Dell_Premier1, Learn_Card } from '../components/Home_Cards/Account_BCard'
import CustomLayout from '../components/CustomLayout/CustomLayout'
import CustomLayoutReversed from '../components/CustomLayout/CustomLayoutReversed'
import SectionedForm from '../components/Forms/Sectioned_form/SectionedForm'

function Home() {
  return (
    <>
      <Box m={0}>
        <Carousel>
          <HomeLeft
            title={"BACK-TO-COLLEGE OFFERS"}
            head={"Doing is the New Learning"}
            body={"Achieve your learning goals with No Cost EMI & exciting goodie offers."}
            img={'https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/heroes/btc-cons-dell-lifestyle-inspiron-7440-ms5120w-cp5724s-uhp-2502-09-in-hero-lf-2560x1066.jpg?fmt=pjpg&pscan=auto&scl=1&hei=900&wid=2560&resMode=sharp2&size=2560,900&op_usm=1.75,0.3,2,0'}
            btn1={'PC Deals'}
            btn2={'Monitor Details'}
            backgroundColor={['white','white','white','#d6cabe', '#d6cabe']}
            btnbgcolor1={'#0672cb'}
            btncolor1={'white'}
            btnbgcolor2={'transparent'}
            btncolor2={'#0672cb'}
            btnhovercolor1={{ backgroundColor: 'blue.400' }}
            pb={[0,0,'10px',0,0]}

          />
          <HomeLeft
            title={"OPTIPLEX DESKTOPS"}
            head={"Your Workspace Warhorse"}
            body={"Elevate all you do with desktops built for essential power in a compact design."}
            img={'https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/apj/heroes/show-desktop-aio-sb-dell-optiplex-7410-km5221w-uhp-2502-04-in-hero-lf-2560x1066.jpg?fmt=pjpg&pscan=auto&scl=1&hei=900&wid=2560&resMode=sharp2&size=2560,900&op_usm=1.75,0.3,2,'}
            btn1={'Shop All'}
            btn2={'Learn More'}
            backgroundColor={['white','white','white','#faebfe',]}
            btnbgcolor1={'#0672cb'}
            btncolor1={'white'}
            btnbgcolor2={'transparent'}
            btncolor2={'#0672cb'}
            pb={[0,0,'10px',0,0]}
            btnhovercolor1={{ backgroundColor: 'blue.400' }}
          />
          <HomeLeft
            title={"WELCOME TO NOW"}
            head={"Revive History with Generative AI "}
            body={"Discover how GenAl is preserving memories and helping to write new ones."}
            img={'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/uber/043024-wecome-to-now-recipes-1023x768.jpg'}
            btn1={'Play Video'}
            btn2={'Explore GenAI'}
            color='white'
            bodyColor={'white'}
            btnbgcolor1={'white'}
            btncolor1={'black'}
            btnbgcolor2={'transparent'}
            btncolor2={'white'}
            btnhovercolor2={{ backgroundColor: 'white', color: 'black' }}

            background={{base:'black',sm:'black',md:'black',lg:'#1e1e1d',xl:'1e1e1d'}}
          />
        </Carousel>
      </Box>

      <Box backgroundColor={'#0a0e14'} w={{base:'50%',md:'100%'}}>
        <ServiceList />
      </Box>

      <Box backgroundColor={'#141d28'} >

        <Box pt={10} mb={10} ml={20}>
          <Stack color={'white'} w={{base:'50%',lg:'100%'}} >
            <Heading size={'md'} fontWeight={400}>Dell Technologies showcase</Heading>
            <Text fontSize={{base:28,lg:45}} fontWeight={200}>Featured Products and Solutions</Text>
          </Stack>
        </Box>
        <Box m={10} pb={20} pl={10} pr={10} mr={10} w={{base:'40%',md:'100%'}}>

          <Carousel>

            {PLAYBACK_ITEMS.map(ele => (
              <Playback_card image={ele.image} subHead={ele.subHead} mainHead={ele.mainHead} bodyContent={ele.bodyContent} childData={ele.children} />
            ))}

          </Carousel>

        </Box>
      </Box>

      <Box mt={-10}>
        <VideoBackgroundBox subHead={'CUSTOMER SUCCESS STORIES'} url={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'} mainHead={'Delivering Accessebility Through GenAI'} bodyContent={'City of Amarillo taps Dell Technologies to make community services more accessible with GenAl.'} btnexist={true} btnContent={'Play Video'} backgroundColor='#0672cb' _hover={{ backgroundColor: 'blue.600' }} color='white' linkContent1={'Learn More'} linkContent2={'View All Stories'} rounded={0} w={'150px'} h={'50px'} btnlink2={true} />
      </Box>

      <Box alignItems={['left','center']} backgroundColor={'#1d2c3b'}  pl={20} pr={20} pt={20} pb={'60px'} >

        <Stack backgroundColor={'transparent'} color={'white'} align={'left'} w={'lg'} mb={4}>
          <Text fontSize={'md'} fontWeight={600}>Dell Support</Text>
          <Text fontSize={'5xl'} fontWeight={200}>We're Here to Help</Text>
          <Text fontWeight={450} w={{ sm: '400px' }} fontSize={'md'}>From offering expert advice to solving complex
            problems, we've got you covered.</Text>
        </Stack>

        <Flex align={'center'}>
          <Grid templateColumns={['repeat(1, 3fr)', 'repeat(1, 3fr)', 'repeat(5, 1fr)', 'repeat(5, 1fr)']} gap={4}>
            <GridItem w='100%' h='100%'>
              <Base_card icon={<BiHome color='#94dcf7' size={50} />} title={'Support Home'}
                h={160} w={{ sm: 400, md: 120, lg: 150, xl: 207 }}
              />
            </GridItem>
            <GridItem w='100%'>
              <Base_card icon={<GoGear color='#94dcf7' size={40} />} title={'Drivers and Downloads'}
                h={160} w={{ sm: 400, md: 120, lg: 150, xl: 207 }}
              />
            </GridItem>
            <GridItem w='100%'>
              <Base_card icon={<BiUserVoice color='#94dcf7' size={50} />} title={'Order Support'}
                h={160} w={{ sm: 400, md: 120, lg: 150, xl: 207 }}
              />
            </GridItem>
            <GridItem w='100%'>
              <Base_card icon={<BiBadgeCheck color='#94dcf7' size={50} />} title={'Warranty and Contracts'}
                h={160} w={{ sm: 400, md: 120, lg: 150, xl: 207 }}
              />
            </GridItem>
            <GridItem w='100%'>
              <Base_card icon={<BiSupport color='#94dcf7' size={40} />} title={'Parts and Upgrades'}
                h={160} w={{ sm: 400, md: 120, lg: 150, xl: 207 }}
              />
            </GridItem>
          </Grid>
        </Flex>


        <CustomLayout url={'https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/my-account-or-dell-premier/dell-homepage-account-desktop-pan-dell-bulk-0455.jpg?wid=1200&hei=675'} customCard={<Account_BCard />} firstContainer={<Account_B1Card/>} />
        <CustomLayoutReversed url={'https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/my-account-or-dell-premier/dell-homepage-premier-1200x675.jpg?wid=1200&hei=675'} customCard={<Dell_Premier />} secondContainer={<Dell_Premier1/>} />
      </Box>
      <Box>
        <VideoBackgroundBox subHead={'ADVANCING SUSTAINABILITY'} url={'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'} mainHead={'At the Core of Everything We Do'} bodyContent={'Creating sustainable products and solutions that drive change.'} btnexist={true} btnContent={'Play Video'} backgroundColor='#0672cb' _hover={{ backgroundColor: 'blue.600' }} color='white' linkContent1={"Discover how we're shaping a better future today"} btnlink2={false} rounded={0} w={'150px'} h={'50px'} />
      </Box>

      <Box backgroundColor={'#002a58'} pl={[10,,15,20,28]} pr={28} pt={20} pb={'60px'}>
        <Stack backgroundColor={'transparent'} color={'white'} align={'left'} w={'lg'} mb={4}>
          <Text fontSize={'md'} fontWeight={500}>Learn from Dell Technologies</Text>
          <Text fontSize={'5xl'} fontWeight={200}>What's Happening</Text>
        </Stack>

        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 2fr)', 'repeat(2, 2fr)', 'repeat(4, 1fr)']} gap={3}>
          <GridItem >
            <Learn_Card url={'https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/na/whats-happening/uhp-whats-happening-whatwedo-480x360.jpg?wid=480&amp;hei=360'}
              head={'What We Do'} subHead={'Learn More'} />
          </GridItem>
          <GridItem >
            <Learn_Card url={'https://i.dell.com/is/image/DellContent/content/dam/ss2/non-product-images/lifestyle/gettyimages-1182617831-pr7530t-480x360.jpg?wid=480&hei=360'}
              head={'Four Keys to Optimal Outcomes with Generative AI'} subHead={'Read the Article'} />
          </GridItem>
          <GridItem >
            <Learn_Card url={'https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/uber/031424-tl-data-dna-480x360.jpg?wid=480&hei=360'}
              head={'Building your innovation muscle in the era of AI'} subHead={'Read Report'} />
          </GridItem>
          <GridItem >
            <Learn_Card url={'https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/lifestyle-shutterstock-555069979-480x360.jpg?wid=480&hei=360'}
              head={'Our Purpose in Action'} subHead={'Read the Report'} />
          </GridItem>
        </Grid>
      </Box>
      <Box backgroundColor={'#21456e'} m={0} p={8} pt={16} pb={16} display={'flex'} flexDir={['column-reverse','column-reverse','row','row','row']} justifyContent={'space-evenly'} alignItems={['left','left','center']}>
        <Box p={4} w={'350px'} color={'white'}>
          <Box>
            <Text>DELL REWARDS FOR BUSINESS</Text>
            <Heading mt={4} fontWeight={400}>Buy More. Get More.</Heading>
            <Text mt={8}>Get rewarded on your purchase for your next buy at Dell.co.in. *Terms and conditions apply.
            </Text>
          </Box>
          <br />
          <Button fontWeight={500} w={'130px'} h={'50px'} rounded={0} backgroundColor={'#237dca'} color={'white'} _hover={{backgroundColor:'blue.400'}}>
            Learn More
          </Button>
        </Box>

        <Box w={'50%'}>
          <Image src='https://i.dell.com/is/image/DellContent/content/dam/ss2/page-specific/dell-homepage/en/programs-and-loyalty/pan-dell-woman-on-train-1200x675.jpg?fmt=png-alpha&wid=1200&hei=675' h={'100%'}/>
        </Box>

      </Box>

      <Box backgroundColor={'#002a58'} display={'flex'} p={5} flexDir={'column'}  alignItems={{base:'left',lg:'center'}}>
        <SectionedForm/>
      </Box>
    </>
  )
}

export default Home