
// id inscrease with respcect to data
// title your notes title let suppose file is for GK so title well be General Knolwedge 
// link well be your document like which is provide by google drive it self 

import React from 'react'
import nationalImg from '../images/national.jpg'
import internationalImg from '../images/international.jpg'
import MDCAT from '../images/mdcat.jpg'
import ETEA from '../images/etea.jpg'
import IELET from  '../images/ielet.jpg'
import SAT from  '../images/sat.jpg'
import Signup from '../images/signup.jpg'
import TOFEL from '../images/Tofel.jpg'
import EnglishCont from '../images/English.jpg'
import EuropeanCont from '../images/European.jpg'
import OthersCont from '../images/other.jpg'





// not like this 

export const nationalDataSubCateg=[
    {id: 1, title: 'BIOLOGY PASTPAPER', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/1RUhvGLtJtWwPbqzIfDn-gat_JxYbLpvM/view'},
    {id: 2, title: 'BIOLOGY PASTPAPER', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/10J541ujPxVSQmaoCbPh-1tE31P1AcXDQ/view'},
    {id: 3, title: 'BIOLOGY PASTPAPER', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/11MbBACkLmNakz49VReYVilsia41G81NY/view'},
    {id: 4, title: 'BIOLOGY PASTPAPER', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/11hjf_VUpp0zo5SHrZcZYl2Yc5lCx-IjD/view'},
    {id: 5, title: 'BIOLOGY PASTPAPER', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/19kpNCvfSUmkHGK24U0A5yAvXlaPkqhsn/view'},
    {id: 6, title: 'BIOLOGY PASTPAPER', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/10Ks1Rc23UMVJta3Gi5t8GzCRiEH8Kivu/view'},
    {id: 7, title: 'BIOLOGY PASTPAPER', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/1fh1J2IQtlpWwqFZKk0j8vfM8FZLMU2oa/view'},
    {id: 8, title: 'BIOLOGY PASTPAPER', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/19ruuKPb9pkalkXItGuOgIj44U3tCtLTH/view'},
    {id: 9, title: 'BIOLOGY NOTES', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/1A06XTzJNijhI-Ih0qtM3Z-TTi3I7GMnm/view'},
    {id: 10, title: 'BIOLOGY NOTES', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/1A-vQCcX1OxFjtqlIH8BnC3t022ud8lg2/view'},
    {id: 11, title: 'BIOLOGY NOTES', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/19u5j8cAClzz-E26s1OBunENP2kUhoq_z/view'},
    {id: 12, title: 'BIOLOGY NOTES', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/19yfp_hSlap-j_6wmY618beI5xAMWGdEl/view'},
    {id: 13, title: 'BIOLOGY NOTES', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/114zD9Pz2zkGV668Y5wrYp0Bk87VhIxMM/view'},
    {id: 14, title: 'BIOLOGY NOTES', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/115mV5-xF1xCObKupCMbqItyyprhjozzy/view'},
    {id: 15, title: 'BIOLOGY NOTES', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/1JjxwhwlUPKWcvdhNP9105GXmAFpVJebY/view'},
    {id: 16, title: 'BIOLOGY NOTES', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/10xRhJivqrLwHrd3ETFn_ze7DdVKQzMeV/view'},
    {id: 17, title: 'BIOLOGY NOTES', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/112rszpSizRKAROO1KmNsuj53DwKul9_i/view'},
    {id: 18, title: 'BIOLOGY NOTES', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/1JC6UFOKQH65YULvXJsaFCsGyxdJcDbc1/view'},
    {id: 19, title: 'BIOLOGY NOTES', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/1JHoi2Iz-NXclK4CHrYRJJLqs49mgIadN/view'},
    {id: 20, title: 'BIOLOGY NOTES', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/1JKThCGH22_6MJa4clKQyFXIgdgLLMo7q/view'},
    {id: 21, title: 'BIOLOGY NOTES', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/1JZWPc2nqeFotECYWv72mTH6IX_qN7609/view'},
    {id: 22, title: 'BIOLOGY NOTES', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/1Jg_aKnYKooMiZ24yTwrvea6ANaOJGVBK/view'},
    {id: 23, title: 'BIOLOGY NOTES', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/1JcVDw-uwCRJqJW754ut6VIDmYPw9P8ol/view'},
    {id: 24, title: 'BIOLOGY NOTES', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/1J_Efh_g86iz9ZWD9_w8PO-rrdBu-UF1d/view'},
    {id: 25, title: 'BIOLOGY NOTES', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/1Jf2BMY7ph31vkUJqT7CP9WdTwtGImVEN/view'},
    {id: 26, title: 'BIOLOGY NOTES', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/1JXVnuhus_uSB2wXjoeoGCkHV4SLJ0qMM/view'},
    {id: 27, title: 'BIOLOGY NOTES', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/1JEJpuJe1QkAOuqoorbgm3rpyucamuaPy/view'},
    {id: 28, title: 'BIOLOGY NOTES', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/1JEu_7QJrzioA9oH9GvxDUMUiJSQmZDZI/view'},
    {id: 29, title: 'BIOLOGY PASTPAPER', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/117rJ9OYN1kY-A6-9dddJZD5twd5MxJKz/view'},
    {id: 30, title: 'BIOLOGY PASTPAPER', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/1omAOtuoici2rPUyzbcH5Fjqy2irfOs1s/view'},
    {id: 31, title: 'BIOLOGY PASTPAPER', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/1pGMhfonHNeDNTAuCDywlxWko9xeWpGX9/view'},
    {id: 32, title: 'BIOLOGY PASTPAPER', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/1rZDHJD2rrHZtKnDZRsx6M1_3V7UbcwwH/view'},
    {id: 33, title: 'BIOLOGY PASTPAPER', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/1pFU4hCdC9fmWiAvlbNG2GiaRMBwje_Sv/view'},
    {id: 34, title: 'PHYSICS PASTPAPER', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/1hqjtVkEMAJpeH3z4TNlJB_UWJ4AZok4T/view'},
    {id: 35, title: 'PHYSICS PASTPAPER', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/1SUSWZZ0M0RGdHezmyVBnDK-SB9apQrvs/view'},
    {id: 36, title: 'PHYSICS PASTPAPER', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/1J0qJeXBImcqtpGu5PolvXB9Eilqtvnkr/view'},
    {id: 37, title: 'PHYSICS PASTPAPER', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/1bopSoWIPck-mEd0ZYDJVAAmu3oPbLJjV/view'},
    {id: 38, title: 'PHYSICS PASTPAPER', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/1YZ1apmdWmBjbjykE4YjfpSf3VPqReSpl/view'},
    {id: 39, title: 'PHYSICS PASTPAPER', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/1LX22hgTDjI8pvcjghhhIGHH-DnfFKf8j/view'},
    {id: 40, title: 'PHYSICS PASTPAPER', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/1LSCNKM5MVBv9-4LW-PmOnXzaelBSrdr2/view'},
    {id: 41, title: 'PHYSICS PASTPAPER', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/14_13CuhsZ4DcEk4sBzM3nUDwO0yDPDQk/view'},
    {id: 42, title: 'PHYSICS PASTPAPER', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/1eHwgKehKj9LUgwl5hX2ZhKvDYpw6YpBb/view'},
    {id: 43, title: 'PHYSICS PASTPAPER', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/1FF4b8pih_agfCw5KMT47Rjyk60el6K0J/view'},
    {id: 44, title: 'PHYSICS PASTPAPER', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/1uEqc1lxir6Ra-l-4j9G7aaayrQ44ZHv-/view'},
    {id: 45, title: 'PHYSICS NOTES', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/14jFOyLyPJkjIo5R24yaT_5PfpNA803iA/view'},
    {id: 46, title: 'PHYSICS NOTES', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/150b_9n600mbO_M45xL957XBo2chWwC17/view'},
    {id: 47, title: 'PHYSICS NOTES', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/15EvEHLmxO7hI15LuDIoz1emOwlTm5P6O/view'},
    {id: 48, title: 'PHYSICS NOTES', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/14dgBsvNECjenRc4--ATAjqMjy2VDsEgh/view'},
    {id: 49, title: 'PHYSICS NOTES', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/157Vt_598CIxWi-bWjB9Iqh4Sg1OrtKdq/view'},
    {id: 50, title: 'PHYSICS NOTES', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/16lr02kaIr_ZWiaoevULGj06LC6VwEG9L/view'},
    {id: 51, title: 'PHYSICS NOTES', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/159Ex07D53osxMMpl060oEngdgX61w01j/view'},
    {id: 52, title: 'PHYSICS NOTES', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/16fchLN2xTJj-29dGxpSE25rTMtWXlpk4/view'},
    {id: 53, title: 'PHYSICS NOTES', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/15dMK0Lj2Iyv8aLuD_dBowJiw7IeAkC6G/view'},
    {id: 54, title: 'PHYSICS NOTES', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/15kyrW5XKiVOo6iVxoxx_iVEE7uy17gEt/view'},
    {id: 55, title: 'PHYSICS NOTES', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/15lh_kjBhb3N5-d9dihOYN4TZ3R5abnL_/view'},
    {id: 56, title: 'PHYSICS NOTES', topic: 'MDCAT', embededLink :'https://drive.google.com/file/d/1L9FRTOx62h-fa3HFuyq72C9R_ZckLOpx/view'},
    {id: 57, title: 'PHYSICS NOTES', topic: 'MDCAT', embededLink :''},
    {id: 58, title: 'PHYSICS NOTES', topic: 'MDCAT', embededLink :''},
    {id: 59, title: 'PHYSICS NOTES', topic: 'MDCAT', embededLink :''},
    {id: 60, title: 'PHYSICS NOTES', topic: 'MDCAT', embededLink :''},
    {id: 61, title: 'PHYSICS PASTPAPER', topic: 'MDCAT', embededLink :''},
    {id: 62, title: 'PHYSICS PASTPAPER', topic: 'MDCAT', embededLink :''},
    {id: 63, title: 'PHYSICS PASTPAPER', topic: 'MDCAT', embededLink :''},
    {id: 64, title: 'PHYSICS PASTPAPER', topic: 'MDCAT', embededLink :''},
    {id: 65, title: 'PHYSICS PASTPAPER', topic: 'MDCAT', embededLink :''},
    {id: 66, title: 'PHYSICS PASTPAPER', topic: 'MDCAT', embededLink :''},
    {id: 67, title: 'PHYSICS PASTPAPER', topic: 'MDCAT', embededLink :''},
    {id: 68, title: 'CHEMISTRY NOTES', topic: 'MDCAT', embededLink :''},
    {id: 69, title: 'CHEMISTRY NOTES', topic: 'MDCAT', embededLink :''},
    {id: 70, title: 'CHEMISTRY NOTES', topic: 'MDCAT', embededLink :''},
    {id: 71, title: 'CHEMISTRY NOTES', topic: 'MDCAT', embededLink :''},
    {id: 72, title: 'CHEMISTRY NOTES', topic: 'MDCAT', embededLink :''},
    {id: 73, title: 'CHEMISTRY NOTES', topic: 'MDCAT', embededLink :''},
    {id: 74, title: 'CHEMISTRY NOTES', topic: 'MDCAT', embededLink :''},
    {id: 75, title: 'CHEMISTRY NOTES', topic: 'MDCAT', embededLink :''},
    {id: 76, title: 'CHEMISTRY NOTES', topic: 'MDCAT', embededLink :''},
    {id: 77, title: 'CHEMISTRY NOTES', topic: 'MDCAT', embededLink :''},
    {id: 78, title: 'CHEMISTRY NOTES', topic: 'MDCAT', embededLink :''},
    {id: 79, title: 'CHEMISTRY NOTES', topic: 'MDCAT', embededLink :''},
    {id: 80, title: 'CHEMISTRY NOTES', topic: 'MDCAT', embededLink :''},
    {id: 81, title: 'CHEMISTRY PASTPAPER', topic: 'MDCAT', embededLink :''},
    {id: 82, title: 'CHEMISTRY PASTPAPER', topic: 'MDCAT', embededLink :''},
    {id: 83, title: 'CHEMISTRY PASTPAPER', topic: 'MDCAT', embededLink :''},
    {id: 84, title: 'CHEMISTRY PASTPAPER', topic: 'MDCAT', embededLink :''},
    {id: 85, title: 'CHEMISTRY PASTPAPER', topic: 'MDCAT', embededLink :''},
    {id: 86, title: 'CHEMISTRY PASTPAPER', topic: 'MDCAT', embededLink :''},
    {id: 87, title: 'CHEMISTRY PASTPAPER', topic: 'MDCAT', embededLink :''},
    {id: 88, title: 'CHEMISTRY PASTPAPER', topic: 'MDCAT', embededLink :''},
    {id: 89, title: 'CHEMISTRY PASTPAPER', topic: 'MDCAT', embededLink :''},
    {id: 90, title: 'CHEMISTRY PASTPAPER', topic: 'MDCAT', embededLink :''},
    {id: 91, title: 'CHEMISTRY PASTPAPER', topic: 'MDCAT', embededLink :''},
    {id: 92, title: 'CHEMISTRY PASTPAPER', topic: 'MDCAT', embededLink :''},
    {id: 93, title: 'CHEMISTRY PASTPAPER', topic: 'MDCAT', embededLink :''},
    {id: 94, title: 'CHEMISTRY PASTPAPER', topic: 'MDCAT', embededLink :''},
    {id: 95, title: 'CHEMISTRY PASTPAPER', topic: 'MDCAT', embededLink :''},
    {id: 96, title: 'CHEMISTRY PASTPAPER', topic: 'MDCAT', embededLink :''},
    {id: 97, title: 'CHEMISTRY PASTPAPER', topic: 'MDCAT', embededLink :''},
    {id: 98, title: 'CHEMISTRY PASTPAPER', topic: 'MDCAT', embededLink :''},
    {id: 99, title: 'MATHS NOTES', topic: 'ETEA', embededLink :''},
    {id: 100, title: 'MATHS NOTES', topic: 'ETEA', embededLink :''},
    {id: 101, title: 'MATHS NOTES', topic: 'ETEA', embededLink :''},
    {id: 102, title: 'MATHS NOTES', topic: 'ETEA', embededLink :''},
    {id: 103, title: 'MATHS NOTES', topic: 'ETEA', embededLink :''},
    {id: 104, title: 'MATHS NOTES', topic: 'ETEA', embededLink :''},
    {id: 105, title: 'MATHS NOTES', topic: 'ETEA', embededLink :''},
    {id: 106, title: 'MATHS NOTES', topic: 'ETEA', embededLink :''},
    {id: 107, title: 'MATHS NOTES', topic: 'ETEA', embededLink :''},
    {id: 108, title: 'MATHS NOTES', topic: 'ETEA', embededLink :''},
    {id: 109, title: 'MATHS NOTES', topic: 'ETEA', embededLink :''},
    {id: 110, title: 'MATHS NOTES', topic: 'ETEA', embededLink :''},
    {id: 111, title: 'MATHS NOTES', topic: 'ETEA', embededLink :''},
    {id: 112, title: 'MATHS PASTPAPER', topic: 'ETEA', embededLink :''},
    {id: 113, title: 'MATHS PASTPAPER', topic: 'ETEA', embededLink :''},
    {id: 114, title: 'MATHS PASTPAPER', topic: 'ETEA', embededLink :''},
    {id: 115, title: 'MATHS PASTPAPER', topic: 'ETEA', embededLink :''},
    {id: 116, title: 'MATHS PASTPAPER', topic: 'ETEA', embededLink :''},
    {id: 117, title: 'MATHS PASTPAPER', topic: 'ETEA', embededLink :''},
    {id: 118, title: 'MATHS PASTPAPER', topic: 'ETEA', embededLink :''},
    {id: 119, title: 'MATHS PASTPAPER', topic: 'ETEA', embededLink :''},
    {id: 120, title: 'MATHS PASTPAPER', topic: 'ETEA', embededLink :''},
    {id: 121, title: 'MATHS PASTPAPER', topic: 'ETEA', embededLink :''},
    {id: 121, title: 'MATHS PASTPAPER', topic: 'ETEA', embededLink :''},
    {id: 122, title: 'MATHS PASTPAPER', topic: 'ETEA', embededLink :''},
    {id: 123, title: 'MATHS PASTPAPER', topic: 'ETEA', embededLink :''},
    {id: 124, title: 'MATHS PASTPAPER', topic: 'ETEA', embededLink :''},
    {id: 125, title: 'MATHS PASTPAPER', topic: 'ETEA', embededLink :''},
    {id: 126, title: 'MATHS PASTPAPER', topic: 'ETEA', embededLink :''},
    {id: 127, title: 'MATHS PASTPAPER', topic: 'ETEA', embededLink :''},
    {id: 128, title: 'MATHS PASTPAPER', topic: 'ETEA', embededLink :''},
    {id: 129, title: 'COMPUTER NOTES', topic: 'ETEA', embededLink :''},
    {id: 130, title: 'COMPUTER NOTES', topic: 'ETEA', embededLink :''},
    {id: 131, title: 'COMPUTER NOTES', topic: 'ETEA', embededLink :''},
    {id: 132, title: 'COMPUTER NOTES', topic: 'ETEA', embededLink :''},
    {id: 133, title: 'COMPUTER NOTES', topic: 'ETEA', embededLink :''},
    {id: 134, title: 'COMPUTER NOTES', topic: 'ETEA', embededLink :''},
    {id: 135, title: 'COMPUTER NOTES', topic: 'ETEA', embededLink :''},
    {id: 136, title: 'COMPUTER NOTES', topic: 'ETEA', embededLink :''},
    {id: 137, title: 'COMPUTER NOTES', topic: 'ETEA', embededLink :''},
    {id: 138, title: 'COMPUTER NOTES', topic: 'ETEA', embededLink :''},
    {id: 139, title: 'COMPUTER NOTES', topic: 'ETEA', embededLink :''},
    {id: 140, title: 'COMPUTER NOTES', topic: 'ETEA', embededLink :''},
    {id: 141, title: 'COMPUTER NOTES', topic: 'ETEA', embededLink :''},
    {id: 142, title: 'COMPUTER NOTES', topic: 'ETEA', embededLink :''},
    {id: 143, title: 'COMPUTER NOTES', topic: 'ETEA', embededLink :''},
    {id: 144, title: 'COMPUTER NOTES', topic: 'ETEA', embededLink :''},
    {id: 145, title: 'COMPUTER NOTES', topic: 'ETEA', embededLink :''},
    {id: 146, title: 'COMPUTER PASTPAPER', topic: 'ETEA', embededLink :''},
    {id: 147, title: 'COMPUTER PASTPAPER', topic: 'ETEA', embededLink :''},
    {id: 148, title: 'COMPUTER PASTPAPER', topic: 'ETEA', embededLink :''},
    {id: 149, title: 'COMPUTER PASTPAPER', topic: 'ETEA', embededLink :''},
    {id: 150, title: 'COMPUTER PASTPAPER', topic: 'ETEA', embededLink :''},
    {id: 151, title: 'COMPUTER PASTPAPER', topic: 'ETEA', embededLink :''},
    {id: 152, title: 'COMPUTER PASTPAPER', topic: 'ETEA', embededLink :''},
    {id: 153, title: 'COMPUTER PASTPAPER', topic: 'ETEA', embededLink :''},
    {id: 154, title: 'COMPUTER PASTPAPER', topic: 'ETEA', embededLink :''},
    {id: 155, title: 'COMPUTER PASTPAPER', topic: 'ETEA', embededLink :''},
    {id: 156, title: 'COMPUTER PASTPAPER', topic: 'ETEA', embededLink :''},
    {id: 157, title: 'COMPUTER PASTPAPER', topic: 'ETEA', embededLink :''},
    {id: 158, title: 'COMPUTER PASTPAPER', topic: 'ETEA', embededLink :''},
    {id: 159, title: 'COMPUTER PASTPAPER', topic: 'ETEA', embededLink :''},


]

export const ScholarshipCat = [
    {id: 1, title:'CANADA', topic: 'ENGLISH', embededLink: 'https://www.educanada.ca/scholarships-bourses/index.aspx?lang=eng'},
    {id: 2, title:'CANADA', topic: 'ENGLISH', embededLink: 'https://www.scholarshipportal.com/scholarship/national-capital-sommelier-guild-award'},
    {id: 3, title:'CANADA', topic: 'ENGLISH', embededLink: 'https://www.scholarshipportal.com/scholarship/one-world-international-scholarship'},
    {id: 4, title:'CANADA', topic: 'ENGLISH', embededLink: 'https://www.berklee.edu/scholarships/berklee-merit-based-scholarships'},
    {id: 5, title:'US', topic: 'ENGLISH', embededLink: 'https://www.usefp.org/'},
    {id: 6, title:'US', topic: 'ENGLISH', embededLink: 'https://www.scholarshipportal.com/scholarships/united-states'},
    {id: 7, title:'US', topic: 'ENGLISH', embededLink: 'https://enrollment.byu.edu/financial-aid/new-freshman-scholarships'},
    {id: 8, title:'GERMANY', topic: 'EUROPEAN', embededLink: 'https://www.daad.de/en/study-and-research-in-germany/scholarships/daad-scholarships/'},
    {id: 9, title:'GERMANY', topic: 'EUROPEAN', embededLink: 'https://www.scholarshipportal.com/scholarship/daad-promos-scholarship'},
    {id: 10, title:'GERMANY', topic: 'EUROPEAN', embededLink: 'https://www.scholarshipportal.com/scholarship/daad-prize'},
    {id: 11, title:'GERMANY', topic: 'EUROPEAN', embededLink: 'https://www.scholarshipportal.com/scholarships/germany'},
    {id: 12, title:'SPAIN', topic: 'EUROPEAN', embededLink: 'https://www.berklee.edu/scholarships/berklee-merit-based-scholarships'},
    {id: 13, title:'SPAIN', topic: 'EUROPEAN', embededLink: 'https://www.scholarshipportal.com/scholarships/spain'},
    {id: 14, title:'CHINA', topic: 'OTHERS', embededLink: 'https://www.bsu.edu/academics/collegesanddepartments/history/admissions-financial-aid/department-scholarships#accordion_anthonyedmondsstudyabroadscholarship'},
    {id: 15, title:'TURKEY', topic: 'OTHERS', embededLink: 'https://erasmus-plus.ec.europa.eu/opportunities/opportunities-for-individuals/students/erasmus-mundus-joint-masters-scholarships'},
    {id: 16, title:'SAUDIA ARAB', topic: 'OTHERS', embededLink: 'https://www.scholarshipportal.com/scholarship/international-masters-scholarship'},


]



export const scholarshipCountry = [
    {id: 1, title: 'ENGLISH', desc: '', path: '/scholarships/english', imgSrc:EnglishCont},
    {id: 2, title: 'EUROPEAN', desc: '', path: '/scholarships/european', imgSrc: EuropeanCont},
    {id: 3, title: 'OTHERS', desc: '', path: '/scholarships/others', imgSrc:OthersCont }
]



export const insternatioanlDataSubCateg=[
    {id: 1, title: 'Listening', topic: 'IELTS' ,embededLink: 'https://drive.google.com/file/d/12sxAMy-9ubajWpVisY0-FVbGYwbMmhD1/preview'},
    {id: 2, title: 'Speaking', topic: 'IELTS' ,embededLink:'https://drive.google.com/file/d/1aFCqHUtLW_TxIG5aA7zzUS59-tZsYeOA/preview'},
    {id: 3, title: 'Hearing', topic: 'IELTS' ,embededLink:'https://drive.google.com/file/d/1PMdSErKN8Yl8uEohHg2kqTsFVJdNewXu/preview'},
    {id: 4, title: 'TOFEL', topic: 'TOFEL', embededLink: 'https://drive.google.com/file/d/1roHNZjtRlSZ3WQ1AmUndy-meMyQxdhQR/preview' },
    {id: 5, title: 'PASTPAPER', topic: 'Tofel' ,embededLink:'https://drive.google.com/file/d/1roHNZjtRlSZ3WQ1AmUndy-meMyQxdhQR/preview'},
    {id: 6, title: 'Preparation Notes', topic: 'TOFEL' ,embededLink:'https://drive.google.com/file/d/17WJOKdVCcnJdYANl0UA4maPm_TA7T2fI/preview'},
    {id: 7, title: 'SAT', topic:'SAT', embededLink: 'https://drive.google.com/file/d/159E0WggNekBa1HQNQ1PB7GKjmuTzKkYh/preview'},
    {id: 8, title: 'Preparation Notes', topic: 'SAT' ,embededLink:'https://drive.google.com/file/d/17WJOKdVCcnJdYANl0UA4maPm_TA7T2fI/preview'},
]





export const nationalData = [
    {id: 1, title: 'ETEA', desc: '', path: '/national/etea', imgSrc:ETEA},
    {id: 2, title: 'MDCAT', desc: '', path: '/national/mdcat', imgSrc: MDCAT}
]


export const internationalData = [
    {id: 1, title: 'IELTS', desc: '', path: '/international/ilet', imgSrc:IELET},
    {id: 2, title: 'SAT', desc: '', path: '/international/sat', imgSrc: SAT},
    {id: 3, title: 'TOFEL', desc: '', path: '/international/tofel', imgSrc:TOFEL }
]



export const entrytestData =[
    {id: 1, title: 'National', desc: 'National tests includes ETEA and MDCAT', path: '/national', imgSrc: nationalImg},
    {id: 1, title: 'Internatioanl', desc: 'Internatioanl tests includes IELTS, SAT and Tofel', path: '/international', imgSrc: internationalImg}
]



export const homeData = [
    {id: 1, title: 'ETEA', desc: 'PREPARE FOR YOUR NATIONAL TEST ETEA NOW!', path: '/entrytest', imgSrc: ETEA},
   
    {id: 1, title: 'MDCAT', desc: 'PREPARE FOR YOUR NATIONAL TEST MDCAT NOW!', path: '/entrytest', imgSrc: MDCAT},

    {id: 2, title: 'TOFEL', desc: 'PREPARE FOR YOUR INTERNATIONAL TEST TOFEL NOW!', path: '/entrytest', imgSrc: TOFEL},

    {id: 3, title: 'IELET', desc: 'PREPARE FOR YOUR INTERNATIONAL TEST IELET NOW!', path: '/entrytest', imgSrc: IELET},

    {id: 4, title: 'SAT', desc: 'PREPARE FOR YOUR INTERNATIONAL TEST SAT NOW!', path: '/entrytest', imgSrc: SAT},

    {id: 5, title: 'REGISTER', desc: 'SIGN UP NOW!', path: '/login', imgSrc: Signup},

]   


export const EntryText = "Free your success! Ace entry tests effortlessly with our limitless resources. Unlock your potential, conquer challenges, and achieve extraordinary results. Your journey to triumph starts here. Don't quit, stay determined, and soar to new heights. Success is within reach—push forward and shine in your upcoming test. Best of luck on your path to greatness!"
export const ScholarshipText = "Unleash your dreams! Explore unlimited scholarships worldwide for fully funded or partial funding. Click now to embark on your journey to your dream university abroad."
export const NationalText = "Crush your ETEA and MDCAT exams with our abundant and free preparation material. Open the doors to your dream universities and achieve exceptional results. Seize the opportunity to excel and make your goals a reality. Best of luck on your journey to success!"
export const InternationalText = "Crush SAT, TOEFL, and IELTS with free materials. Boost your CV with incredible scores and unlock dream universities. Start your journey to success now!"

