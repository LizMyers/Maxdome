# Maxdome API
Maxdome provides video on-demand and operates exclusively in Germany and Austria. All content returned by the service is in the German language. The restFULL service returns an "assetList" in JSON format - making it easy to integrate with Alexa.
<br>
<br>
## How to Access the API 

<b>API:</b> https://heimdall.maxdome.de/docs/v1/

<b>username:</b> heimdall_api_dev

<b>password:</b> deishai1keipheiChei8

### Quick Start

Login and ...
<ul>
<li>click <b>assets</b></li>
<li>click <b>/assets/</b></li>
<li>scroll down to the filter section and type <b>search~avatar</b> [search + 'tilde' + 'space' + avatar]<br>
(Note: the 'space' after the tilde is necessary on a german keyboard to "lock-in" the tilde)</li>
<li>scroll down and click the <b>Try it Out</b> button</li>
<li>Congratulations! You should get a JSON object back with relevant assets.
</ul>

In order to see the content and familiarize yourself with the data available, please use the credentials below and sign to  https://maxdome.de. Once signed in you can browse by <b>genre</b>, search for specific <b>titles</b>, <b>actors</b>, or <b>directors</b>. Next, challenge yourself to pull up the same data from within your Lambda function. 
<br><br>

## Maxdome Site Test Account 
<b>Name:</b> Voice Hackathon

<b>User Name:</b> VoiceUI_Hackathon_2017@qa.mxd.de

<b>Password:</b> mxdvoice2017

<b>FSK Pin:</b> 1234

<b>Gültig bis:</b> 31.10.2017 (valid until Oct 31, 2017)

#### NOTE: The test account doesn't yet work with oAuth, so account-linking with Alexa is not possible.
<br>

## Further Resources
Vielen Dank to Christoph Herrmann of Maxdome for sharing his repo:<br>
https://github.com/Sharaal?utf8=%E2%9C%93&tab=repositories&q=ai-&type=&language
