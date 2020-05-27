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

function getFile(filePath) {
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", filePath, false);
	xmlhttp.send();
	return xmlhttp;
}

function getAppVersion() {
	var xmlDoc = getFile("config.xml").responseXML;
	return xmlDoc.getElementsByTagName("widget")[0].getAttribute("version");
}

var hknbpTizenAppVersion = "v" + getAppVersion() + "-Tizen";

var hknbpCoreIframe = document.getElementById("HKNBP_Core");
hknbpCoreIframe.addEventListener("load", function() {
	var hknbpCoreIndex = hknbpCoreIframe.contentWindow;

	// 設置程式版編號
	hknbpCoreIndex.hknbpAppVersion(hknbpTizenAppVersion);

	// 設定實體搖控 (Emulator上測試只有方向鍵同Enter鍵有反應其餘冇)
	var remote = hknbpCoreIndex.hknbpRemote;
	var keydown = function(e) {
		switch (e.keyCode) {
		case ArrowLeft:
			remote.leftButton.click();
			e.preventDefault();
			break;
		case ArrowUp:
			remote.upButton.click();
			e.preventDefault();
			break;
		case ArrowRight:
			remote.rightButton.click();
			e.preventDefault();
			break;
		case ArrowDown:
			remote.downButton.click();
			e.preventDefault();
			break;
		case Enter:
			remote.centerButton.click();
			e.preventDefault();
			break;
		case Back:
			remote.returnButton.click();
			// try {tizen.application.getCurrentApplication().exit();} catch
			// (ignore) {}
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
			remote.epgButton.click();
			break;
		case ColorF0Red:// //////////////////////////////////////////
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
			remote.channelDescriptionButton.click();
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
		case Minus:
			remote.minusButton.click();
			break;
		case PreviousChannel:
			remote.lastTimeChannelButton.click();
			break;
		case Menu:
			remote.menuButton.click();
			break;
		case Tools:
			remote.menuButton.click();
			break;
		default:
			hknbpCoreIndex.hknbpPrompt("本程式並無此功能提供");
			break;
		}
	}
	document.addEventListener('keydown', keydown); // 測試 Emulator唔得 Simulator得
	hknbpCoreIndex.addEventListener('keydown', keydown); // 測試 Emulator得 Simulator唔得

	// 虛擬搖控制修定
	hknbpCoreIndex.hknbpVolumeUp(function() {
		tizen.tvaudiocontrol.setVolumeUp();
	});
	hknbpCoreIndex.hknbpVolumeDown(function() {
		tizen.tvaudiocontrol.setVolumeDown();
	});
	hknbpCoreIndex.hknbpVolumeMute(function() {
		if (tizen.tvaudiocontrol.isMute()) {
			tizen.tvaudiocontrol.setMute(false);
		} else {
			tizen.tvaudiocontrol.setMute(true);
		}
	});
});
