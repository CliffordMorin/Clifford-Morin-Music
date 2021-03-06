import { v4 as uuidv4 } from 'uuid';
//images
import lofiImg from 'assets/img/audioImg/out2.png';
import sax from 'assets/img/cliffCloseUp/solo2.jpeg';
import philly from 'assets/img/cliffCloseUp/out1.jpeg';
import samImg from 'assets/img/audioImg/sam.png';
//audio
import lofiAudio from 'assets/audio/poLofi.m4a';
import LSD from 'assets/audio/LSD Experiment 1950s.mp3';
import watts1 from 'assets/audio/Airegin Duo Jeff Tain Watts Clifford Morin.m4a';
import watts2 from 'assets/audio/Along came betty Jeff tain watts and clifford Morin dou.m4a';
import watts3 from 'assets/audio/Inner urge Jeff tain watts and clifford Morin dou.m4a';
import watts4 from 'assets/audio/Sonny moon for two Jeff tain clifford duo.m4a';
import philly1 from "assets/audio/Sandu Chris's Victor Mekhi James Copy.m4a";
import samAudio from 'assets/audio/Whisper Not Sammy dou at home copy.m4a';

function chillHop() {
	return [
		{
			name: 'LSD Experiment 1950',
			cover: lofiImg,
			artist: 'Clifford Morin (PO-32, PO-33, Saxophone), Glenn Gifford (Trumpet)',
			audio: LSD,
			color: [ '#E06BB9', '#2A336A' ],
			id: uuidv4(),
			active: true
		},
		{
			name: 'Airegin (Duo)',
			cover: sax,
			artist: 'Clifford Morin, Jeff Tain Watts',
			audio: watts1,
			color: [ '#ffffff', '#000000' ],
			id: uuidv4(),
			active: false
		},
		{
			name: 'Along Came Betty (Duo)',
			cover: sax,
			artist: 'Clifford Morin, Jeff Tain Watts',
			audio: watts2,
			color: [ '#ffffff', '#000000' ],
			id: uuidv4(),
			active: false
		},
		{
			name: 'Inner Urge (Duo)',
			cover: sax,
			artist: 'Clifford Morin, Jeff Tain Watts',
			audio: watts3,
			color: [ '#ffffff', '#000000' ],
			id: uuidv4(),
			active: false
		},
		{
			name: 'Sonny Moon for Two (Duo)',
			cover: sax,
			artist: 'Clifford Morin, Jeff Tain Watts',
			audio: watts4,
			color: [ '#ffffff', '#000000' ],
			id: uuidv4(),
			active: false
		},
		{
			name: 'Sandhu (Live at Chris Jazz Cafe)',
			cover: philly,
			artist: 'Mike Boone, Mehki Boone, James Santangelo, Victor North, Clifford Morin',
			audio: philly1,
			color: [ '#CD81FA', '#130750' ],
			id: uuidv4(),
			active: false
		},
		//ADD MORE HERE
		{
			name: 'Whisper Not',
			cover: philly,
			artist: 'Sam Riessen (Guitar), Clifford Morin (EWI)',
			audio: samAudio,
			color: [ '#598CCE', '#EDD6D2' ],
			id: uuidv4(),
			active: false
		}
	];
}

export default chillHop;
