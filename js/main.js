//實體搖控刮
window.onload = function () {
	var ArrowLeft 			= 37;
	var ArrowUp 			= 38;
	var ArrowRight 			= 39;
	var ArrowDown 			= 40;
	var Enter 				= 13;
	var Back 				= 10009;
	var VolumeUp 			= 447;
	var VolumeDown 			= 448;
	var VolumeMute 			= 449;
	var ChannelUp			= 427;
	var ChannelDown 		= 428;
	var ChannelList 		= 10073;
	var ColorF0Red 			= 403;
	var ColorF1Green 		= 404;
	var ColorF2Yellow 		= 405;
	var ColorF3Blue 		= 406;
	var Key_0				= 48;
	var Key_1 				= 49;
	var Key_2 				= 50;
	var Key_3 				= 51;
	var Key_4 				= 52;
	var Key_5 				= 53;
	var Key_6 				= 54;
	var Key_7 				= 55;
	var Key_8 				= 56;
	var Key_9 				= 57;
	var Info 				= 457;
	var Caption 			= 10221;
	var MTS 				= 10195;
	var PictureSize 		= 10140;
	var Guide 				= 458;
	var MediaPlayPause 		= 10252;
	var MediaRewind 		= 412;
	var MediaFastForward 	= 417;
	var MediaPlay 			= 415;
	var MediaPause 			= 19;
	var MediaStop 			= 413;
	var MediaRecord 		= 416;
	var MediaTrackPrevious 	= 10232;
	var MediaTrackNext 		= 10233;
	var Minus 				= 189;
	var PreviousChannel 	= 10190;
	var Menu 				= 18;
	var Tools 				= 10135;
	var Source 				= 10072;
	var Exit 				= 10182;
	var E_Manual 			= 10146;
	var Key_3D 				= 10199;
	var Extra 				= 10253;
	var Soccer 				= 10228;
	var Teletext 			= 10200;
	var Search 				= 10225;
	
	var hknbp_Core = document.getElementById("HKNBP_Core").contentWindow.HKNBP_Core.org.sourcekey.hknbp.hknbp_core;
	document.addEventListener('keydown', function(e) {
        switch (e.keyCode) {
		case ArrowLeft:
			
			break;
		case ArrowUp:
			
			break;
		case ArrowRight:
			
			break;
		case ArrowDown:
			
			break;
		case Enter:
			
			break;
		case Back:
			try {
			    tizen.application.getCurrentApplication().exit();
			} catch (ignore) {
				
			}
			break;
		case VolumeUp:
			tizen.tvaudiocontrol.setVolumeUp();
			break;
		case VolumeDown:
			tizen.tvaudiocontrol.setVolumeDown();
			break;
		case VolumeMute:
			
			break;
		case ChannelUp:
			hknbp_Core.nextChannel();
			break;
		case ChannelDown:
			hknbp_Core.previousChannel();
			break;
		case ChannelList:
			
			break;
		case ColorF0Red:
			hknbp_Core.programmable(0);
			break;
		case ColorF1Green:
			hknbp_Core.programmable(1);
			break;
		case ColorF2Yellow:
			hknbp_Core.programmable(2);
			break;
		case ColorF3Blue:
			hknbp_Core.programmable(3);
			break;
		case Key_0:
			hknbp_Core.onNumberKey("0");
			break;
		case Key_1:
			hknbp_Core.onNumberKey("1");
			break;
		case Key_2:
			hknbp_Core.onNumberKey("2");
			break;
		case Key_3:
			hknbp_Core.onNumberKey("3");
			break;
		case Key_4:
			hknbp_Core.onNumberKey("4");
			break;
		case Key_5:
			hknbp_Core.onNumberKey("5");
			break;
		case Key_6:
			hknbp_Core.onNumberKey("6");
			break;
		case Key_7:
			hknbp_Core.onNumberKey("7");
			break;
		case Key_8:
			hknbp_Core.onNumberKey("8");
			break;
		case Key_9:
			hknbp_Core.onNumberKey("9");
			break;
		case Info:
			
			break;
		case Caption:
			hknbp_Core.nextSubtitleTrack();
			break;
		case MTS:
			hknbp_Core.nextAudioTrack();
			break;
		case PictureSize:
			hknbp_Core.nextVideoTrack();
			break;
		case Guide:
			
			break;
		default:
			hknbp_Core.promptMessage("本程式並無此功能提供");
			break;
		}
    });
	
	//虛擬搖控刮修定
	hknbp_Core.volumeUp = function(){
		tizen.tvaudiocontrol.setVolumeUp();
	};
	hknbp_Core.volumeDown = function(){
		tizen.tvaudiocontrol.setVolumeDown();
	};
	hknbp_Core.volumeMute = function(){
		if(tizen.tvaudiocontrol.isMute()){
			tizen.tvaudiocontrol.setMute(false);
		}else{
			tizen.tvaudiocontrol.setMute(true);
		}
	};
};
