import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  Deck,
  Slide,
  Heading,
  Grid,
  FlexBox,
  Box,
  FullScreen,
  Markdown,
  Progress,
  UnorderedList,
  ListItem,
  Text
} from 'spectacle';
import Webcam from './Webcam';
import TwoColumnLayout from './TwoColumnLayout';
import SingleColumnLayout from './SingleColumnLayout';
import SlideText from './SlideText';

import './App.css';

import pollImage from '../assets/poll.png';
import rajasthanCultural from '../assets/rajasthan_cultural_map.jpg';

if(module.hot) {module.hot.accept();}

const template = () => (
  <>
    <FlexBox
      justifyContent="space-between"
      position="absolute"
      right={0}
      top={0}
      width={1}
    >
      <Box/>
      <Box padding="10em">
        <Webcam />
      </Box>
    </FlexBox>
    <FlexBox
      justifyContent="space-between"
      position="absolute"
      bottom={0}
      width={1}
    >
      <Box padding="0 1em">
        <FullScreen />
      </Box>
      <Box padding="1em">
        <Progress />
      </Box>
    </FlexBox>
  </>
);

function App(){

  const theme = {
    colors: {
      primary: 'white',
      secondary: 'lightgrey',
      tertiary: 'black'
    }
  };

  return (
    <>
      <Deck theme={theme} template={template} transitionEffect="fade">
        <Slide>
          <FlexBox height="100%" flexDirection="column">
            <Box><Heading>Music</Heading></Box>
            <Box><Heading>&</Heading></Box>
            <Box><Heading>Travel</Heading></Box>
            <Text color="secondary">Beyond sounds and melodies</Text>
          </FlexBox>
          <Text fontSize="200%">Nikhil Lanjewar | @rhetonik</Text>
        </Slide>
        
          <Slide>
          <FlexBox height="100%" flexDirection="column">
            <Box><Heading>What</Heading></Box>
            <Box><Heading>to</Heading></Box>
            <Box><Heading>expect?</Heading></Box>
          </FlexBox>
        </Slide>

        <Slide>
          <SingleColumnLayout
            heading="Context"
            slideContent={
              <img src={pollImage} />
            }
          />
        </Slide>
        <Slide>
          <SingleColumnLayout
            heading="Popular Music"
            slideContent={
              <img src='https://www.excelmovies.com/wp-content/uploads/2019/01/2400x1200-2.jpg' width={800} />
            }
          />
        </Slide>

        <Slide>
          <TwoColumnLayout
            heading="India 91"
            leftContent={
              <SlideText>
                कलावंत हौशी हे गोष्ट मा गावची
                <br/>कोणी करे काम कोणी खाली पेते पावटी
                <br/>गाणे देते शांती न् पसरवे क्रांती
                <br/>करून जगे तरून नेईन समोर अमरावती अमरावती
                <br/>दिवालीत कवाली भी आईकतात भाऊजी
                <br/>माई अमरावती अमरावती
                <br/>केला चालू असली hip-hop
                <br/>आम्ही ओजी हावजी
              </SlideText>
            }
            rightContent={
              <SlideText fontSize="170%">
                Kalawant haushi he goshta mha gaavchi
                <br/>Koni kare kaam koni khali pete paavti
                <br/>Gaane dete shaanti na pasarave kranti
                <br/>Karun jage tarun nein samor Amravati Amravati
                <br/>Diwalit qawwali bi aiktyet bhauji
                <br/>Mai Amravati Amravati
                <br/>Kela chaali asli hip-hop amhi
                <br/>O ji Hao ji
              </SlideText>
            }
          />
        </Slide>

        <Slide>
          <SingleColumnLayout
            heading="Cultural Anthropology"
            slideContent={
              <img src='https://www.caleidoscope.in/wp-content/uploads/2014/10/maharashtra-region-map_v2.jpg' width={700} />
            }
          />
        </Slide>

        <Slide>
          <SingleColumnLayout
            heading="Cultural Anthropology"
            slideContent={
              <img src={rajasthanCultural} width={700} />
            }
          />
        </Slide>

        <Slide>
          <TwoColumnLayout
            heading="Bole to Mitho Laage"
            leftContent={
              <SlideText>
                बोले तो मिट्ठो लागे 
                <br/>हँसे तो प्यारो लागे 
                <br/>बैठोड़ो सोवे म्हारे आँगने 
                <br/>हो! बैठोड़ो सोवे म्हारे आँगने
                <br/>
                <br/>साँवली सूरत जेड़ो चणिडो म्हारो 
                <br/>साँवली सूरत जेड़ो चणिडो म्हारो
                <br/>बैठोड़ो सोवे म्हारे आँगने 
              </SlideText>
            }
            rightContent={
              <SlideText fontSize="170%">
                Bole to mitho lage
                <br/>Hase to pyaaro lage
                <br/>Baithodo sove mhaare aangane
                <br/>Ho! Baithodo sove mhaare aangane
                <br/>
                <br/>Saanvli surat jedo chanido mhaaro
                <br/>Saanvli surat jedo chanido mharo
                <br/>Baithodo sove mhare aangane
              </SlideText>
            }
          />
        </Slide>

        <Slide>
          <TwoColumnLayout
            heading="Laal Peeli Akhiyaan"
            leftContent={
              <SlideText>
                जब देखूँ बना री लाल पीली अँखियाँ 
                <br/>मैं नहीं डरूँ सा, भले ही काडो अँखियाँ 
                <br/>
                <br/>जयपुर से बनोसा चुडलिया मोलाया रे 
                <br/>मैं नहीं पैरूं सा, भले ही काडो अँखियाँ 
                <br/>
                <br/>जैसाणे से बनोसा बाजुड़ा मोलाया रे 
                <br/>मैं नहीं पैरूं सा, भले ही काडो अँखियाँ
              </SlideText>
            }
            rightContent={
              <SlideText fontSize="170%">
                Jab dekhoon bana ri laal peeli akhiyaan
                <br/>Mai nahi daru sa, bhale hi kaado akhiyaan
                <br/>
                <br/>Jaipur se banosa chudaliya molaya re
                <br/>Mai nahi pairu sa, bhale hi kaado akhiyaan
                <br/>
                <br/>Jesane se banosa bajuda molaya re
                <br/>Mai nahi pairu sa, bhale hi kaado akhiyaan
              </SlideText>
            }
          />
        </Slide>

        <Slide>
          <TwoColumnLayout 
            heading="Koi Umeed"
            leftContent={
              <SlideText>
                कोई उम्मीद बर नहीं आती 
                <br/>कोई सूरत नज़र नहीं आती 
                <br/>
                <br/>मौत का एक दिन मुअय्यन है 
                <br/>नींद क्यों रात भर नहीं आती 
                <br/>
                <br/>आगे आती थी हाल-ए -दिल पे हंसी 
                <br/>अब किसी बात पर नहीं आती 
                <br/>
                <br/>है कुछ ऐसी ही बात जो चुप हूँ 
                <br/>वरना क्या बात कर नहीं आती  
              </SlideText>
            }
            rightContent={
              <SlideText fontSize="170%">
                koī ummīd bar nahīñ aatī
                <br/>koī sūrat nazar nahīñ aatī
                <br/>
                <br/>maut kā ek din muayyan hai
                <br/>niind kyuuñ raat bhar nahīñ aatī
                <br/>
                <br/>aage aatī thī hāl-e-dil pe hañsī
                <br/>ab kisī baat par nahīñ aatī
                <br/>
                <br/>hai kuchh aisī hī baat jo chup huuñ
                <br/>varna kyā baat kar nahīñ aatī
              </SlideText>
            }
          />
        </Slide>

        <Slide>
          <TwoColumnLayout 
            heading="Sakal Ban"
            leftContent={
              <SlideText>
                फूल रही सरसों, सकल बन 
                <br/>टेसू फूले अम्बुवा बौरे 
                <br/>गोरी करात सिंगार, मलनियाँ 
                <br/>गेंदवा ले आई घरसों, सकल बन 
                <br/>
                <br/>भांत भांत के फूल मंगाए 
                <br/>ले गरवा हाथन में आए 
                <br/>निजामुद्दीन के दरबारन पर 
                <br/>आवन कह गए अब हूँ न आए 
                <br/>बीत गए बरसों, सकल बन 
              </SlideText>
            }
            rightContent={
              <SlideText fontSize="170%">
                Phool rahi sarson, sakal ban
                <br/>Tesu phoole ambuwa baure
                <br/>Gori karat singaar, malaniya
                <br/>Gendwa le aai gharson, sakal ban
                <br/>
                <br/>Bhaant Bhaant ke phool mangae
                <br/>Le garwa haathan mein aae
                <br/>Nijamuddin ke darbaaran par
                <br/>Aawan keh gae, ab hu na aae
                <br/>Beet gae barson, sakal ban
              </SlideText>
            }
          />
        </Slide>

        <Slide>
          <TwoColumnLayout 
            heading="Zeehaal-e-Miskeen"
            leftContent={
              <SlideText>
                ज़े-हाल-ए-मिस्कीं मकुन तग़ाफ़ुल
                <br/>दुराय नैनाँ बनाए बतियाँ 
                <br/>
                <br/>कि ताब-ए-हिज्राँ नदारम ऐ जाँ 
                <br/>न लेहू काहे लगाए छतियाँ
                <br/>
                <br/>सखी पिया को जो मैं न देखूँ 
                <br/>तो कैसे काटूँ अँधेरी रतियाँ 
                <br/>
                <br/>किसे पड़ी है जो जा सुनावे 
                <br/>पियारे पी को हमारी बतियाँ
                <br/>
                <br/>न नींद नैनाँ न अंग चैनाँ 
                <br/>न आप आवे न भेजे पतियाँ
              </SlideText>
            }
            rightContent={
              <SlideText fontSize="170%">
                Zehaal-e-miskeen makun taghaful,
                <br/>Duraye naina banaye batiyan.
                <br/>
                <br/>Ke taab-e-hijran nadaram ay jaan,
                <br/>Na leho kahe lagaye chatiyan.
                <br/>
                <br/>Sakhi piya ko jo main na dekhun,
                <br/>To kaise kaTun andheri ratiyan.
                <br/>
                <br/>Kisay pari hai jo ja sunave,
                <br/>Piyare pi ko hamari batiyan,
                <br/>
                <br/>Na nind naina na ang chaina,
                <br/>Na aap aaven na bhejen patiyan

              </SlideText>
            }
          />
        </Slide>

        <Slide>
      <TwoColumnLayout 
        heading="Hamin Asto"
        leftContent={
          <SlideText>
            गर फिरदौस बर रू-ए-ज़मीं अस्त
            <br/>हमीं अस्तो, हमीं अस्तो 
            <br/>
            <br/>गर जन्नत है ज़मीं पे कहीं 
            <br/>यही पे है, हमीं अस्तो 
          </SlideText>
        }
        rightContent={
          <SlideText fontSize="170%">
            Gar firdaus bar ru e zameen ast
            <br/>Hamin asto, hamin asto
            <br/>
            <br/>Gar jannat hai zameen pe kahi
            <br/>Yahi pe hai, hamin asto
          </SlideText>
        }
      />
        </Slide>

        <Slide>
          <TwoColumnLayout 
            heading="Chadariya Jheeni Re"
            leftContent={
              <SlideText>
                चदरिया, झीनी रे झीनी 
                <br/>राम नाम रंग दीनी
                <br/>चदरिया, झीनी रे झीनी 
                <br/>
                <br/>अष्टकमल का चरखा बनाया 
                <br/>पांच तत्त्व की पुनि 
                <br/>नौ दस मॉस बुनन को लागे 
                <br/>मूरख मैली कीनी, चदरिया 
                <br/>
                <br/>चादर ओढ़ संका मत करियो 
                <br/>दो दिन तुझको दीनी 
                <br/>मूरख लोग भेज नहीं जाने 
                <br/>दिन दिन मैली कीनी, चदरिया
              </SlideText>
            }
            rightContent={
              <SlideText fontSize="170%">
                Chadariya, jheeni re jheeni
                <br/>Ram naam rang deeni
                <br/>Chadariya, jheeni re jheeni
                <br/>
                <br/>Ashtkamal ka charkha banaya
                <br/>Paanch tatva ki pooni
                <br/>Nau das maas bunan ko laage
                <br/>Moorakh maili keeni, chadariya
                <br/>
                <br/>Chaadar odh sanka mat kariyo
                <br/>Do din tujh ko deeni
                <br/>Moorakh log bhed nahin jaane
                <br/>Din din maili keeni, chadariya
              </SlideText>
            }
          />
        </Slide>


        <Slide>
          <TwoColumnLayout 
            heading="Suno Na Sangemarmar"
            leftContent={
              <SlideText>
                सुनो ना, संग-ए-मरमर की ये मीनारें 
                <br/>कुछ भी नहीं हैं आगे तुम्हारे 
                <br/>
                <br/>आज से दिल पे मेरे राज तुम्हारा, ताज तुम्हारा 
                <br/>
                <br/>की कोरे तोके बोलबो, तुई के आमार 
                <br/>आए ना शाथे चोलबो, शोब पारापार 
                <br/>
                <br/>मोनेरी अश्का राते तुरका चेलाम, हारिये गेलाम
              </SlideText>
            }
            rightContent={
              <SlideText fontSize="170%">
                Suno na, sang-e-marmar ki ye meenarein
                <br/>Kuch bhi nahi hain, aage tumhaare
                <br/>
                <br/>Aaj se dil pe mere, raaj tumhaara, taaj tumhaara
                <br/>
                <br/>Ki kore toke bolbo, tui ke hamaar
                <br/>Aae na shathe cholbo, shob paropar
                <br/>
                <br/>Moneri ashka raate, tur ka chelaam, hariye gelaam
              </SlideText>
            }
          />
        </Slide>

        <Slide>
          <TwoColumnLayout 
            heading="Aafim Chaash"
            leftContent={
              <SlideText>
                मोनेर माझ ए चष कोरीलाम आफिम ए रे खोज ए 
                <br/>की नेशा चोरियाच ए मोर 
                <br/>ता आमार मोनी बुझे 
                <br/>खेत-खेतयीआं क्रोंदिलाम 
                <br/>नेशा तो जाइलो ना 
                <br/>शुखेर आशा ए खोर-खोरीलाम आफिम ए रे दोरोजाए 
                <br/>
                <br/>नेशा तो...
                <br/>नेशा तो जाइलो ना 
                <br/>ओ भाई आमार 
                <br/>नेशा तो जाइलो ना
              </SlideText>
            }
            rightContent={
              <SlideText fontSize="170%">
                Moner majhe chaash korilam afim er khoj e, 
                <br/>Ki nesha choriyache mor, 
                <br/>Ta amar mon'i bujhe, 
                <br/>Khet-khetaiya krondilam, 
                <br/>Nesha to jailona, 
                <br/>Shukher ashai khor-khorailam afim er dorjai, 
                <br/>
                <br/>Nesha to... 
                <br/>Nesha to jailona, 
                <br/>O bhai amar, 
                <br/>Nesha to jailona…
              </SlideText>
            }
          />
        </Slide>

        <Slide>
          <TwoColumnLayout 
            heading="Swaminatha Paripalaya"
            leftContent={
              <SlideText>
                स्वामीनाथ परिपलायषु माम् 
                <br/>स्वप्रकाष वल्लीश गुरुगुह देवसनेष 
                <br/>स्वामीनाथ परिपलायषु माम् 
                <br/>
                <br/>कामजनक भारतीष सेवित 
                <br/>कार्तिकेय नारदादि भावित 
                <br/>वामदेवपार्वतीसुकुमार 
                <br/>वारिजस्त्र सम्मोहितकार 
                <br/>
                <br/>स्वामीनाथ परिपलायषु माम् 
              </SlideText>
            }
            rightContent={
              <SlideText fontSize="170%">
                Swaaminaatha paripaalayaashu maam
                <br/>Swaprakaasa valleesa guruguha devasenesha
                <br/>Swaaminaatha paripaalayaashu maam
                <br/>
                <br/>Kaamajanaka bharatheesa sevitha
                <br/>Kaarthikeya naaradaadi bhaavita
                <br/>Vaamadeva paarvati sukumaara
                <br/>Vaarijaastra sammohitaakaara
                <br/>
                <br/>Swaaminaatha paripaalayaashu maam
              </SlideText>
            }
          />
        </Slide>

        <Slide>
          <TwoColumnLayout 
            heading="Ja Ja Re Apne Mandirva"
            leftContent={
              <SlideText>
                जा जा रे अपने मंदिरवा
                <br/>जा जा रे अपने मंदिरवा 
                <br/>
                <br/>सुन पावेगी मोरी सास ननंदिया 
                <br/>जा जा रे अपने मंदिरवा 
              </SlideText>
            }
            rightContent={
              <SlideText fontSize="170%">
                Ja ja re apne mandirva
                <br/>Ja ja re apne mandirva
                <br/>
                <br/>Sun paawegi mori saas nanandiya
                <br/>Ja ja re apne mandirva
              </SlideText>
            }
          />
        </Slide>

        <Slide>
          <TwoColumnLayout 
            heading="Natrang Ubha"
            leftContent={
              <SlideText>
                धुमकिट धुमकिट तदानी धुमकिट 
                <br/>नटनागर नट हिमनट पर्वत उभा 
                <br/>उत्तुंग जसा घुमतो मृदंग 
                <br/>पखवाज देत आवाज झनन झनकार 
                <br/>लेउनी स्त्रीरूप भुलवी नटरंग नटरंग नटरंग 
                <br/>
                <br/>रसिक होऊ दे रंग चढू दे आज असा खेळाला 
                <br/>साता जन्माची देवा पुण्याई लागू दे आज पणाला 
                <br/>हात जोडतो आज आम्हाला दान तुझा दे संग 
                <br/>नटरंग उभा ललकारी नभा स्वरताल जाहले दंग 
              </SlideText>
            }
            rightContent={
              <SlideText fontSize="170%">
                Dhumakit dhumakit tadaani dhumakit
                <br/>Natanaagar nat himanat parwat ubha
                <br/>Uttung nabha ghumato mridung
                <br/>Pakhawaaj det awaaj jhanan jhnkaar
                <br/>Leuni strirup bhulawi natarng, natrang, natrang
                <br/>
                <br/>Rasik hou de dang, chadhu de rang asa khelaala
                <br/>Saata janmaanchi dewa punyaai laagu de aj panaala 
                <br/>Haat jodato aj amhaala daan tujha de sang
                <br/>Natarang ubha lalakaari nabha swarataal jaahale dang
              </SlideText>
            }
          />
          </Slide>
        <Slide>
          <TwoColumnLayout
            heading="Natrang Ubha"
            leftContent={
              <SlideText>
                कडकड कडकड बोल ढोलकी हुन्नर ही तानाची 
                <br/>छुमछुम छननन साथ तिला या घुंगरांच्या बोलाची 
                <br/>जमवून असा स्वर साज मांडतो हीच विनंती यावं जी 
                <br/>किरपेचं दान द्यावं जी, हे यावं जी किरपेचं दान द्यावं जी
              </SlideText>
            }
            rightContent={
              <SlideText fontSize="170%">
                Kadakad kadakad bol dholaki hunnar hi taalaachi
                <br/>Chhumachhum chhananan saath tila ya ghungaraachya bolaachi
                <br/>Jamawun asa swar saaj maandato hich innti yaawa ji
                <br/>Kirapecha daan dyaawa ji, he yaawa ji kirapecha daan dyaawa ji
              </SlideText>
            }
          />
        </Slide>

          <Slide>
          <FlexBox height="100%" flexDirection="column">
            <Box><Heading>Thank you</Heading></Box>
            <Box><Heading>🙏</Heading></Box>
            <Box><Heading>किरपेचं दान द्यावं जी</Heading></Box>
          </FlexBox>
        </Slide>

      </Deck>
    </>
  )
}
ReactDOM.render(<App/>, document.getElementById('root'));
