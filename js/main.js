/*
 * HKNBP_Tizen is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * HKNBP_Tizen is distributed in the hope that it will be useful,
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with HKNBP_Tizen.  If not, see <https://www.gnu.org/licenses/>.
 */

var hknbpTizenAppVersion = "0.9-Tizen";

window.onload = function () {
    var hknbpCore = document.getElementById("HKNBP_Core").contentWindow.HKNBP_Core.org.sourcekey.hknbp.hknbp_core;

    //設置程式版編號
    hknbpCore.appVersion = hknbpTizenAppVersion;

    //實體搖控刮
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
	var remote = hknbpCore.VirtualRemote;
	document.getElementById("HKNBP_Core").contentWindow.addEventListener('keydown', function(e) {
        switch (e.keyCode) {
		case ArrowLeft:
			remote.leftButton.click();
			break;
		case ArrowUp:
			remote.upButton.click();
			break;
		case ArrowRight:
			remote.rightButton.click();
			break;
		case ArrowDown:
			remote.downButton.click();
			break;
		case Enter:
			remote.centerButton.click();
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
			remote.volumeMuteButton.click();
			break;
		case ChannelUp:
			remote.nextChannelButton.click();
			break;
		case ChannelDown:
			remote.previousChannelButton.click();
			break;
		case ChannelList:
			
			break;
		case ColorF0Red:
			remote.programmableRedButton.click();
			break;
		case ColorF1Green:
			remote.programmableGreenButton.click();
			break;
		case ColorF2Yellow:
			remote.programmableYellowButton.click();
			break;
		case ColorF3Blue:
			remote.programmableBlueButton.click();
			break;
		case Key_0:
			remote.number0Button.click();
			break;
		case Key_1:
			remote.number1Button.click();
			break;
		case Key_2:
			remote.number2Button.click();
			break;
		case Key_3:
			remote.number3Button.click();
			break;
		case Key_4:
			remote.number4Button.click();
			break;
		case Key_5:
			remote.number5Button.click();
			break;
		case Key_6:
			remote.number6Button.click();
			break;
		case Key_7:
			remote.number7Button.click();
			break;
		case Key_8:
			remote.number8Button.click();
			break;
		case Key_9:
			remote.number9Button.click();
			break;
		case Info:
			remote.tvChannelDescriptionButton.click();
			break;
		case Caption:
			remote.nextSubtitleButton.click();
			break;
		case MTS:
			remote.nextAudioButton.click();
			break;
		case PictureSize:
			remote.nextVideoButton.click();
			break;
		case Guide:
			remote.epgButton.click();
			break;
		case Menu:
			remote.menuButton.click();
			break;
		default:
			hknbpCore.PromptBox.promptMessage("本程式並無此功能提供");
			break;
		}
    });
	
	//虛擬搖控制修定
	remote.volumeUp = function(){
		tizen.tvaudiocontrol.setVolumeUp();
	};
	remote.volumeDown = function(){
		tizen.tvaudiocontrol.setVolumeDown();
	};
	/**
	remote.volumeMute = function(){
		if(tizen.tvaudiocontrol.isMute()){
			tizen.tvaudiocontrol.setMute(false);
		}else{
			tizen.tvaudiocontrol.setMute(true);
		}
	};*/
};
