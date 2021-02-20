import React, {Component} from 'react'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import styles from './style.module.css'

import { Fade } from "react-awesome-reveal";
 
const images=[
'https://lh3.googleusercontent.com/GSIUwLdvl7fkQ08rN9Q4ZV-YLk0JuTLeFKOYgaBxNeF6utGEacLci617SOoBPehOS36niJN8J3Sg4J8jAi8XtiSfIrtYjUtPvwURla-4l9p1Osg0ixZu7FGEDj1Q3Gm2vebzdMHp_Klq9Mv3o8drMD_Hfv2PoJ6w99NRAeupvl1cm2QfFnVCulF4GayEOzIKvux_EbouAKO5zdSqPGTf-mwCohQQAg2I35KnBYuRYwHhBotmjls2MLaS0A_Mc9df_D49v3ConEMId4cp8F_q63dbJsg0aJWO2_xXn513xVhx0vWPn7JkckXnxvf3VOtFUkx8DXLdr7q9d5Nrttl1RrtmTYhUamz5564RnotnT2W_-mnd5wX9LPrCxg6A_02RADXS7MLTtgfAQYHikjsNEZEpMDoiqG9SrU1JkQa2dPaL-6ZTOf1ftaTkvWoKEe562bok1sM7L3ZTPB4PgOA2eunFRWgW19uMsLb4nQwoj7fNDLweG0qW6TbSjbnAejGSE0tEtlyb4-23yPEwpJt5QrK6vSXD9HbRSKCPZdM0TboSohLNQEpRCUP72Q8lTJZOjDT5ZPIBO5teVDfAVcbgIX1Q3MTE4YpCV2W5GH2hOyhn2R7e39r0g879flurgqIcBefyK-FAyRjf5tae7rGSSAAo61wCd8XhJZtwC5i0T2u4qq8tcJoZsoEGxJMQCdfGl7Mn-RdyrJL6EDStNB8SvQ=w1414-h939-no?authuser=0',
'https://lh3.googleusercontent.com/yMM93bu41hRfKEUfSB77dyQc4FsWEmBWSIpkcWU30qXgpQ3x_62eWXW-baBbh5DY6D2ZoAOSjavvVMsyX6p536kxTUi8p1IlEz5cVygLttIeTukjr547FpUhEvf9uW5YUOA6Ag3yrGRNnMTa5tijV91mVfh-OLisfpUSuKMLQKyasNRRiAAbb7YB-tgs0NL27oFxstKixPslGYn50-4pJVgk3nflWbMz66pHmTldBZAzCNr48wdjrV75vMaVSouL2CC4RGjn-Lpob_m7_Ak6J8ksYYVimr0382X5xza1rLFfB13r7A03vZidJAlRLjpV-2StkDoJ1dozOEVkGlOQJ2cLkqwrgu1anMJAqLevWZLQEk7COmQnrngm2LOsdqZxNs0aZuGFzfxY97S9WHkT958Z7BKyvzGMh_zyuJmd3g_S3L-dLig9i4SIqT4SUy2Rd_1-bRi9u_Xn9EVO9LDTs6fYjhgAiF3Cj1IwSaZoFojjbrfsYmpDC5MhdxxaRfJLQgHQDYSivyK96d9dD5OnsmKHJWDy-i3CDShbmJRU4qn14bBu55P8porDGJKQC3ftZiYLDI0Es8E6HKo_TZMkybPvDL8aQoT9iPqHfhUqRvWiV4UxXzsE6V91T1fD6OzJ-7hSRm2EpkIQPVjqT4blPYqCp2hGxGmAN8E6lFHqtwIfRpnvnJesKMLsYXVKVS22-yPO3PAUQ6KlxAJZK_vFug=w1415-h924-no?authuser=0',
'https://lh3.googleusercontent.com/kyCaAyHfWcTHOKiC6PVya_KOuhptO6JY1NNzQ9lwTPNgKlss-u4bQaEWYRtSvULfM5JLBnGq18-0O2Ccah5Al8jGqlVMrG9rHlw-5_oOIo3yk_kmY1alFCNrguMvnS4_4mmQkvPrqe9EVw-cnDO1hHFyAKLwmTDqhHCS0CQduopiIAv2GqczWDpXHBP6Y9D2DcTOn7FVotgluiwzinEnInyF_zhQgZb5rkRRYcAXTaS4h2zd379AvJlp25ufxKaCVN0jgt4QVevOpzJnSA642JQEa1yj4O-gVxuBEUMChXcZHNC6xHJXjZpl3tGlR-ZwTJa6PnT__EQCz2oHOHaTPhsnHHjIkl4YjLbsFIt8Ce9imMBZ_u4tFM-Fi8oAqIqvUVb_NRFGFDRrpzRGEcduixo0x852iBaC2U-AYH7jI4XWQem1jsrQVfgPTun006qRcCwKC3ljKN_XT5ij_eNfd9V9vAijDgFYzv5brRQ3RgUCeoL4GFQqEkNoze0rGvLB7gwYQCTaxQjelSkQFCQPWjxkuGEgYvPpAkP2D_R1G1TujQ8P6-9pIKPXB4Oq2uqEItVl8u1q2ALJqoGsDXg0gw8md01QOTc-JPSX7RnuHgYhxA_CC2cq6QhUzHI9QfzOt_PO0h-RmQeC-TNZx08Fs8bqlhUOhw-08YSFQhoqJVQUiyYbu7I9MsegtEwHepXAsVdVmAqSA46DYhCN0N_2kw=w1411-h923-no?authuser=0',
'https://lh3.googleusercontent.com/eGfLGyAWb3Md8hceW1l2eDJS_XbwgRXz9urEVvyj40WXXyJ8wEDPKi3xcmorSBQhYBSO9p_4-RC63MZ6Cg1wG4CSwIUn_JGAxY_v_XVSXowmqmXK4ERBMh5ZcGBFa2laLIJi91HUi7I6hKUWd_VOW6s5pISI08EOzGNxTz6rQEPWX_nOui7xR1eaxPOm1Pk0qJjhpG44_U1L-8yLY4VjvvCnjqPgGCP9XSn1ZhsEGudm0sKWMYw0T9exaKpK7PShEwI5zbW-O5D4CIttU5MdumTp9f7zmzxBZ-25FKpMHq3Nm5ccOJTYjhl8qqY6-iLxb_7erWp8N4FiLT78uYVJG3KjjxKS2Ex3RKTJajpKFie9ikI3ZyPyQGG2Cuw9LzR9MWsmlSu2n_bR9ld0Ifu0DhgsKL9KaonqD7b1pAx30HBKUmKLRkeyooTu8PAHQ6EViH1FuEd61ch3_6DnNcxY3iamwFcUBU3Cm6CICYkWojS8wKQVY3vDHP-6ha-OGqU2A4efrkpWaSf9GQZS1_yLZ5PHOV4dGlZ8rjIrMIiq74zWgeNc6QQjoaNzMsV3q6ARmmsc9DL6O84Rp4ILRCwdNewb9tfC-6xUKscFX_RujbkUxKglGMeQY5YvZdw9pGtT2frAkt5nnRy9K-bsK80uzrWXNPenMK76jeCQGHDIXtmdh37VqwcoLe6UZ7mAh5DxleT6JnuKzngZ11ejxoIgbA=w1415-h923-no?authuser=0',
'https://lh3.googleusercontent.com/FXzHQYUpjXnN0rUjZRhxyu4yM_KLPOGc8nsVouK7W4n8xsFA-ZUoEmxpOMFkzNJ_VkDjoVjghKZW8SlOCuyqKvrI6qZBu4_9i2Zc0l79zxVfCHSCcH5vSgFzQhWkyr270VIBdmbVXDRCS0dOA8nhYgNW86nq8Xxb89klb1gHVPSOkOSPcIfzju0sexI-B9I72ocBYysogjDHSgUg652aeYDs7hOIpzPRD73Ein-9pKDuJeeS3J1-AgJGT9c6aSzu96U9S0-2p-SbINc8ldJJSuHoyA_Gk4W3WELWgBvS3Ep8_YgYbJpOrqCQplNy3v_JMR_HNfoIEyD167x4NTMxmElSFc6rUM5_0A0veflhla0NzpIBthoQk3Fz7Ng4uXeYJUmAdSuMZofVa5Cb1gaaXRuyjUirHvPQOJOd634dmfVpuN0BoUlPZmbNZi13z49QmJc5mPCnL7XjEAValOHz99-GSDH0iEQvWUQ8YAkVU-VUwP3rkkueiIprhpN82Su0SEjfNznA6hdDQzfieV2z_0-PvtsJYRepbJ0dxlVefjkUErNj8G2Ygy9S7Ssw_NEsGscmu1PmXTZPOBHNMaIgD5jUmV-LH78yoiSr8M0WuHa3ja0G4sfpiSSHANLHc2yP34tnPOnhrbwucSs74jpcFFdS7JNIPdU2DJL_u0yHnuE06moBKgY7P8Hw18c_czuvYi4fkr3mTX8TYT_qqmmRPw=w1414-h924-no?authuser=0',
'https://lh3.googleusercontent.com/1673CBbFAMEP0DsjDIn8fY5mpymt3tsI-babX0WaMeh_aGTiydLoJamB26j22A2CDI5SCVyaIuXX3EgkesKN62mZJA46g1Rz3QBpD6Zvrhh07uvcvEJ1g8K2OBF3V2YlyTJq_U7eiURYQ-J9rolqf2_j9jwIBTmCihFFSPrrhQ6w_uDgqkqPJyZa8ESTTmVhN4dRNCxvmH0Ch29D1nMRZqUZeV7XC7C6mZD7AFG89x_EDZOWjVK8Y0xbpWywrPzTqkQN_-NO2w-YTI4PjZQGNw-CZHMLXpzCV8jc7Nbal2nlDYkHjIunkUeXUoj0sm_48xW0ZxG7DnjLpvvY4RXyX75BQxBqhv-zY6TF99Jll90y4dcwjwqwEqAjmMJn8qn_BS0yRFZE-M7hITrkcEI5zXwAZE5DMhU3GHqhmbGeyw0B4-lCz_KQEnmCS2-l9sjyyWIihe36zCooRRMnXXcxKG4DIMT_p1vjf9fWYbDll1AblDcQHgrQckEoNcYg76QeSkKDYPNGjHRK-aPWza9Nksaj4OjxJaDnMbtvMOWOf6JBSvLGzUMOdRbGh3Y2T_NqbcBOYfdvWJy7OCDrp-uVhYEroBbqwdqPP_CqddHgrWPb-EbeXKtPMP7N-Al3ltBIRXj3Z88PuhW_ptQuiOaKpAmE2Sd2njjxmkOvQ62xNtRIPlnfYI1-N1RfVnFD5Rn8ZnC0obpSlPDp1Luw2bm9dA=w1410-h922-no?authuser=0',
'https://lh3.googleusercontent.com/ipsSM0hbEeZrYctodVcvSXwq2uIpNVLbEQVZ_ApcrVhGjlU6OFFlPnOE5yANrpV7vLTIK01cuk-8Qd2ZwPx7QZL6xK8L8DgALKnbGCGOJNnrj3zQ-7WsezH9y7A-7DD0Bb41JrHMfnWr18VaGbsCJHnrsmcgBuY6JfXQ1IEb6I6ks6rBMmfUdOZJjlth4Bg7VGDx-BkbsUjWNBG-AXrSP42jA5STQ76uSJeiiMDpNNPYlavRN05zS9eGVbfEHs-t-dtek6Hjbu7ddCg0kHslXPAij9Zk2FBqFlddsmsuKOeFO1SxIKcIF04ctaPideCHPguh5I5bcV5kCYXhBQSnh4rVj4YJrOHghS_9nzaK46Ppx2TzMzjeZLMpf_tpM_ipBOtYGW0uiopqJqKSEKi2-nBOFLzGvM0ulp4DjHAWI4Qejw4H01XvP9rRvFvWAQhJh2LMlC9SiVJEgbjeLabIPEtYlC2CnwubKWFEqoF9k3xcONW5jhU8GSZfudCuZiX5i_g70U7sUkyVw01IEI4v63kKoEvnAwJyqurqxrsXvIddIwO1F-_U8CHT48STxqynR_EtMk197h0jzMLZch4DuDY05xm00CPzXVkOUnmo3F71kVs9AjzFvaxL2rI8E9dvn-iz6epXiGVhAS3OPFhhazBGomBA0SI3Kq2NvXVYGXnhrJd7q482VIMdP6JdgoKfFa0-Y0Tdq7muDP0UEOi3Yw=w1410-h926-no?authuser=0',
'https://lh3.googleusercontent.com/QlzcVhUsytd_JWnV2eYwOLqfpnE54NKbxUA1LjbQlMlGz19U2PqusrEt83S6j46geW0InyhgPmuFsjkeAkAO6pZ1ntJTCqUqKDZzuSiR9ESgMkWUgtxOTPHQ1sZWSfvzjetPRocyqohac1U4q-sytNE5d5Czr8Z1wXNArMoc9TIwxjkjjtkbue7MQcLjE1JaqUstTdTUM80Nvprp9B9C1NV8AIJ_ob2vv7RaSBMQQD-FIRRgngL8NcXyuySvfM7jEcexNQxIMgETukQ8GGbpZBJ4hkMXTzOL2ze1nX0_PW-3_Fwp_NqCyWVjVUIXJ6Yme2umST0GjU68XxnDFTXKOaxXt89buoylLL8bHmEEES3ReNaOm1V5TeF6ds9RujF4LQgVC5PNCN_b19qb62KphmgVDoKlX_6QjIy8WltKFj60-PryZB9tgvzwV6_6fGUd49hAYJ5O6fJMaONjaf4ZLdAb8UmCn5MOf-bX556gR0BQpeWmKyE2kX5aUoQIgUnqHy7eeTqIiXxnCrXJE8OhbQZaTQdzXmEPgltoYgGh37V4ZL9lnOfgTyn49T0qci3EgqToyhHKErHfctyqQfyDd_7hpzz_aoEuYaxxw2cTE5OrOOCHzHzunhE-PlPU94_LcVX-dkD0gRBAUAokWtboJA6pYTTheE2QmuGS7xNOQlWpqpf6_oIvcaZkEbnArOHnU4L5JIotMvNlBkRrxtGmsA=w1412-h943-no?authuser=0',
'https://lh3.googleusercontent.com/JmM1tBYR0hVYDZwn_e4dVtW9iSccbj-L38r7fQUH68LW7AOwxywDwzIlrFQTHz-1IoNaLPzQ3Ch0wJLJrY8FZ7-KmNzaLVtpllWo9NvakvlZN1SC0DHc-wx1t-6GVIXaqkqmnQaY9Cihgayv7hAyvByO_eYIMy1nTTMkphMz4_AfvHMQMSVonaDM5bvqtdALjmw8PdvJ3vK8j40fHW1ZXKj2A5cKbUY_nLkYdhGH0ggfplVodvG2tiB8NK9Xyt0IijleCZtYMN3d6M5cK5MMb6H0BbPoo1alACNGgHFKgEuWchgxPMP2rAI-XpucHq5eiF6VT-JkSP9Wivq0Sh7yNIIjA-8evwXUDkSphNzgD_R-VU2-fHa7cpX-7XRPrRrWGFatiqrsWpLOgCh7-G8IbIRBgRKY6UleW4It3WDZAj9Hi-_PlsHnMpG19x1kCiNYpcD_zFvuLTM_tD3NF0MDOtc4F0-ffNNzG0O-1uUvBmPNjZMchZwwwLcTgOxcC9eY8ScrM3-LV-tOyqS6iLr9tZZ39o1-IuE1QB8DfJGIWy4KYaRWbDrrqeXKTcyCYd1nmMwy97xzlZgbcxDVxXjqvIy-7SptQmeueJ3XXw3zrY1rpqERP_KKNJMfggQciGvpCCNdUl-r8yZ7doAsoxiLZu4nLNiINT7MXvznl1vC_WClUqBiFfyq7LPfebV5hiyL3O306I32duWa2KCuDyvDXg=w1443-h923-no?authuser=0'
]
 
export default class Photos extends Component{
 
    constructor(props){
        super(props);
 
        this.state={
            photoIndex:0,
            isOpen:false,
        };
    }
 
    render(){
        const{photoIndex,isOpen}=this.state;
 
        return(
            <div className={styles.galerija}>
                <Fade triggerOnce={true} delay={500}>
                    <div className={styles.galerijaGrid}>
                        {images.map((image, index) => <img src={image} onClick={() => {
                            this.setState({isOpen: true, photoIndex: index})}
                            }/>)}
                    </div> 
                </Fade>
            {isOpen && ( 
                <Lightbox className={styles.lightbox}
                    mainSrc={images[photoIndex]} 
                    nextSrc={images[photoIndex + 1]} 
                    prevSrc={images[photoIndex -1]} 
                    onCloseRequest={() => this.setState({ isOpen: false })} 
                    onMovePrevRequest={() => 
                        this.setState({ 
                            photoIndex: (photoIndex + images.length - 1) % images.length, 
                        }) 
                    } 
                    
                    onMoveNextRequest={() => 
                        this.setState({ 
                            photoIndex: (photoIndex + 1) % images.length, 
                        }) 
                    } 
                /> 
                )} 
            </div>
        )
    }
}