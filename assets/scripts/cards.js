const cards = [

// {
    // title: "Infobulle au hover sur la card",
    // label: "Texte affiché sous la card",
    // text: "Texte dans la carte si aucune image n'est chargée",
    // icon: "chemin/image.png" ou "icon: null" ,
    // color: "ghostwhite",
	// category: "Catégorie du lien"
    // url: "https://..."
// }



//-----------------------
//       FAVORIS
//-----------------------
	{
		title: "Carte de visite numérique",
		url: "https://orimaworks.github.io/carte_de_visite/",
		icon: null,
		text: "⭐️ Carte de Visite ",
		label: " ",
		category: "Favoris"
	},
	
	{
		title: "Annonce T3 Eybens",
		url: "https://orimaworks.github.io/Appart_Eybens/",
		icon: "https://github.com/DEVMJ00/Appart_Eybens/blob/main/cover.webp?raw=true",
		text: "⭐️ T3 EYBENS ",
		label: " ",
		category: "Favoris"
	},
	
	{
		title: "Portfolio",
		url: "https://orimaworks.github.io/cvportfolio/",
		icon: null,
		text: "⭐️ Portfolio ",
		label: " ",
		category: "Favoris"
	},

	{
        title: "Proton Apps",
        url: "https://account.proton.me/fr/apps",
        icon: "./assets/img/Proton.svg",
        color: "#EDE8FF",
		label:" ",
		category: "Favoris"
    },

    {
        title: "Google",
        url: "https://www.google.com/",
        icon: "./assets/img/google.svg",
		label:" ",
		category: "Favoris"
    },
		
    {
        title: "Google Maps",
        url: "https://www.google.com/maps",
        icon: "./assets/img/maps.svg",
		label:" ",
		category: "Favoris"
		
    },

    {
        title: "Google Images",
        url: "https://images.google.fr/",
        icon: "./assets/img/googleimage.svg",
		label:" ",
		category: "Favoris"
		
    },

    {
        title: "GMAIL",
        url: "https://accounts.google.com/v3/signin/accountchooser?continue=https://mail.google.com/mail/u/0/&emr=1&followup=https://mail.google.com/mail/u/0/&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-400648613:1795354731393665",
        icon: "./assets/img/gmail.svg",
		label:" ",
		category: "Favoris"
		
    },
	
    {
        title: "Hotmail",
        url: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=9199bf20-a13f-4107-85dc-02114787ef48&scope=https%3A%2F%2Foutlook.office.com%2F.default%20openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Foutlook.live.com%2Fmail%2F&client-request-id=023f274a-8811-7763-1c67-620414440163&response_mode=fragment&client_info=1&clidata=1&prompt=select_account&nonce=01a2037c-bbb4-7056-a946-63fe9f060d26&state=eyJpZCI6IjAxYTIwMzdjLWJiYjQtNzViYS04YjIyLTM3Nzg3NzYzNWUzZSIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D%7CaHR0cHM6Ly9vdXRsb29rLmxpdmUuY29tL21haWwvP2N1bHR1cmU9ZnItZnImY291bnRyeT1mcg%7CeyJwcm9tcHQiOiJzZWxlY3RfYWNjb3VudCJ9&claims=%7B%22access_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22CP1%22%5D%7D%7D%7D&x-client-SKU=msal.js.browser&x-client-VER=5.12.0&response_type=code&code_challenge=HCx3zzTTp76lDPs3EKv1mZhhPJyZeH6PChqcMIh53l4&code_challenge_method=S256&cobrandid=ab0455a0-8d03-46b9-b18b-df2f57b9e44c&fl=dob%2Cflname%2Cwld&sso_reload=true",
        icon: "./assets/img/hotmail.svg",
		label:" ",
		category: "Favoris"
    },

    {
        title: "Crédit Agricole",
        url: "https://www.ca-sudrhonealpes.fr/",
        icon: "./assets/img/credit-agricole.svg",
        label:" ",
        category: "Favoris"
    },

    {
        title: "Caisse d'Epargne",
        url: "https://www.caisse-epargne.fr/languedoc-roussillon/",
        icon: "./assets/img/caisse-epargne.svg",
        label:" ",
        category: "Favoris"
    },
	
    {
        title: "Life In Weeks",
        url: "life-in-weeks.html",
        icon: "./assets/img/lifeinweeks.png",
        label:" ",
        category: "Favoris"
    },
	
//-----------------------
//       A.I
//-----------------------
    {
        title: "Lumo",
        url: "https://lumo.proton.me/u/3/",
        icon: "./assets/img/lumo.svg",
		label:"Lumo",
		category: "A.I"
    },

    {
        title: "ChatGPT",
        url: "https://chat.openai.com/chat",
        icon: "./assets/img/ChatGPT_Light.svg",
        label:"ChatGPT",
		category: "A.I"
		
    },
    
    {
        title: "Mammouth AI",
        url: "https://mammouth.ai/",
        icon: "./assets/img/mammouth.svg",
        label:"Mammouth AI",
		category: "A.I"
		
    },

    {
        title: "Mistral",
        url: "https://mistral.ai/fr/",
        icon: "./assets/img/mistral.webp",
        label:"Mistral",
		category: "A.I"
    },



//-----------------------
//       ADMINISTRATIF
//-----------------------
    {
        title: "Impôts",
        url: "https://cfspart.impots.gouv.fr/LoginMDP?op=c&url=aHR0cHM6Ly9jZnNwYXJ0LmltcG90cy5nb3V2LmZyL3BvcnRhbC9kZ2kvcHVibGljL3BlcnNvO2pzZXNzaW9uaWQ9SU9EMUlNQVhET0dJSlFGSUVJUUNGRlE/cGFnZUlkPXBuYTJwYXImc2ZpZD0zMA==",
        icon: "./assets/img/impots.png",
        label:"Impôts",
        category: "Administratif"
    },

    {
        title: "Retraite",
        url: "https://www.info-retraite.fr/portail-info/home.html",
        icon: "./assets/img/retraite.jpg",
        label:"Info Retraite",
        category: "Administratif"
    },

    {
        title: "NounouTop",
        url: "https://www.nounou-top.fr/",
        icon: "./assets/img/nounoutop.svg",
		label:"nounou-top",
		category: "Administratif"
    },

    {
        title: "C.A.F",
        url: "https://www.caf.fr/",
        icon: "./assets/img/caf.svg",
        label:"C.A.F",
        category: "Administratif"
    },
    
    {
        title: "Pajemploi",
        url: "https://pajemploi.urssaf.fr/employeur/tableau-de-bord",
        icon: "./assets/img/pajemploi.svg",
		label:"PajEmploi",
		category: "Administratif"
    },

	{
        title: "Harmonie Mutuelle",
        url: "https://espace-personnel.harmonie-mutuelle.fr/identification",
        icon: "./assets/img/logo-harmonie.png",
		label:"Harmonie Mutuelle",
		category: "Administratif"
    },
	
	{
        title: "Laposte",
        url: "https://www.laposte.fr/",
        icon: "./assets/img/laposte.svg",
		color: "#FFC805",
		label:"Laposte",
		category: "Administratif"
    },
	
    {
        title: "EDF",
        url: "https://espace-client.edf.fr/sso/XUI/#login/",
        icon: "./assets/img/edf.png",
		label:"E.D.F",
		category: "Administratif"
    },
    
    {
        title: "VEOLIA",
        url: "https://www.eau.veolia.fr/",
        icon: "./assets/img/veolia.svg",
		label:"VEOLIA",
		category: "Administratif"
    },
    
	{
        title: "Le CRAT",
        url: "https://www.lecrat.fr/",
        icon: "./assets/img/crat.png",
		label:"Le CRAT / Santé",
		category: "Administratif"
    },
    
    {
        title: "EPSENS",
        url: "https://www.epsens.com/",
        icon: "https://www.epsens.com/themes/custom/epargne_salariale/img/logo.svg",
		label:"EPSENS",
		category: "Administratif"
    },

    {
        title: "Cadastre",
        url: "https://cadastre.data.gouv.fr/",
        icon: "./assets/img/cadastre.png",
		label:"Cadastre",
		category: "Administratif"
    },

    {
        title: "Mapillary",
        url: "https://www.mapillary.com/app/?lat=20&lng=0&z=1.6875",
        icon: "./assets/img/mapillary.png",
		label:"Mapillary",
		category: "Administratif"
    },
    
    

    //-----------------------
    //       GEEK
    //-----------------------
    {
        title: "GitHub",
        url: "https://github.com/login",
        icon: "./assets/img/github.svg",
        label:"GitHub",
        category: "Geek"
    },

    {
        title: "GitHub Dév.",
        url: "https://github.com/login",
        icon: "./assets/img/Githubdev.png",
        label:"GitHub Dév.",
        category: "Geek"
    },
    
    {
        title: "VSCode",
        url: "https://vscode.dev",
        icon: "./assets/img/vscode.png",
        label:"VSCode.",
        category: "Geek"
    },
    
    {
        title: "Spotnix",
        url: "http://192.168.1.165:8000/accounts/login/",
        icon: null,
        text: "SPOTNIX",
		label:"Spotnix",
		category: "Geek"
    },

    {
        title: "Raspberry",
        url: "https://id.raspberrypi.com/sign-in",
        icon: "./assets/img/raspberry.png",
		label:"Raspberry Pi",
		category: "Geek"
    },

    {
        title: "Raspberry Pi Connect",
        url: "https://connect.raspberrypi.com/sign-in",
        icon: "./assets/img/raspberry.png",
		color: "black",
		label:"Pi Connect",
		category: "Geek"
    },

    {
        title: "Perfect Buttons",
        url: "perfect-buttons.html",
        icon: null,
        text: "Perfect Buttons",
        label:"Perfect Buttons",
        category: "Geek"
    },
    
    {
        title: "Cheats Sheet",
        url: "cheats_sheet.html",
        icon: null,
        text: ">_ :",
        label:"Cheat Sheets",
        category: "Geek"
    },
    
    {
        title: "Se connecter avec hotmail perso - pas devmj",
        url: "https://learn.microsoft.com/fr-fr/",
        icon: "./assets/img/microsoft.svg",
        text: "Microsoft Learn",
        label:"Microsoft Learn",
        category: "Geek"
    },

    {
        title: "OpenClassRoom",
        url: "https://openclassrooms.com/fr/",
        icon: "./assets/img/openclassroom.png",
        text: "OpenClassRoom",
        label:"OpenClassRoom",
        category: "Geek"
    },

    {
        title: "Logiciels Libres",
        url: "https://code.gouv.fr/sill/",
        icon: "https://code.gouv.fr/sill/assets/illustration_sill-B0NPUQ_V.svg",
        text: "Logiciels Libres",
        label:"Logiciels Libres",
        category: "Geek"
    },
   
    {
        title: "PDFSam",
        url: "https://pdfsam.org/fr/",
        icon: "./assets/img/pdfsam.svg",
        text: "PDFSam",
		label:"PDF Sam",
		category: "Geek"
    },

    {
        title: "What3Words",
        url: "https://what3words.com/gardon.hangar.enserrer",
        icon: "./assets/img/what3words.png",
		label:"What3Words",
		category: "Geek"
    },
	
    {
        title: "EPIEOS",
        url: "https://epieos.com/fr-FR",
        icon: "./assets/img/epieos.svg",
        text: "EPIEOS",
		label:"EPIEOS",
		category: "Geek"
    },
	
    {
        title: "Freebox OS",
        url: "http://mafreebox.freebox.fr/",
        icon: "./assets/img/freeboxos.png",
		label:"FreeboxOS",
		category: "Geek"
    },

    {
        title: "Thiings",
        url: "https://www.thiings.co/things",
        icon: "./assets/img/thiings.png",
		label:"Thiings",
		category: "Geek"
    },

	{
		title: "Khroma.co",
		url: "https://www.khroma.co/",
		text: "khroma.co",
		icon: "./assets/img/khroma.svg",
        color: "black",
		label: "khroma.co",
		category: "Geek"
	},
	
    {
        title: "Squoosh | Convertir img en svg",
        url: "https://squoosh.app",
        text:"Squoosh",
		icon: "./assets/img/squoosh.svg",
        color: "#f06",
		label:"Squoosh",
		category: "Geek"
    },

	{
        title: "Hexa",
		url: "https://www.hexa.com/",
		text: "Hexa",
		icon: null,
		label:"Hexa",
		category: "Geek"	
	},
	
	{
        title: "Font Awesome",
        url: "https://fontawesome.com/",
        icon: "./assets/img/fontawesome.png",
		text: "Font Awesome",
		label: "Font Awesome",
		category: "Geek"
    },
	
	{
        title: "SVGL (Social Vectoriel)",
        url: "https://svgl.app/",
        icon: null,
		text: "SVGL",
		label: "SVGL",
		category: "Geek"
    },

	{
		title: "SVGRepo",
		url:"https://www.svgrepo.com/",
		icon: "./assets/img/svgrepo.svg",
		text: "SVGRepo",
		label: "SVGRepo",
		category: "Geek"
	},

    {
		title: "Dashboard Icons",
		url:"https://dashboardicons.com/",
		icon: "./assets/img/dashboardIcons.svg",
		text: "Dashboard Icons",
		label: "Dashboard Icons",
		category: "Geek"
	},

	{
        title: "Flat Icon",
        url: "https://flaticon.com/",
        icon: null,
		text: "FlatIcon",
		label: "FlatIcon",
		category: "Geek"
    },

	{
        title: "DaFont",
        url: "https://dafont.com/",
        icon: "./assets/img/dafont.png",
        text: "DaFont",
		color: "#c00",
		label:"DaFont",
		category: "Geek"
    },
	
		
//-----------------------
//       GAMING
//-----------------------
    {
        title: "Steam",
        url: "https://store.steampowered.com/?l=french",
        icon: "./assets/img/steam.svg",
        label: "Steam",
        category: "Gaming"
    },

    {
        title: "Nintendo",
        url: "https://www.nintendo.fr/Rechercher/Rechercher-299117.html?f=147394-5-81",
        icon: "./assets/img/nintendo.svg",
        label: "Nintendo",
        category: "Gaming"
    },

    {
        title: "Rockstar",
        url: "https://socialclub.rockstargames.com/",
        icon: "./assets/img/rockstar.svg",
        text: "Rockstar",
        label: "SocialClub",
        category: "Gaming"
    },
    
    {
        title: "Epic Games",
        url: "https://www.epicgames.com/site/fr/home",
        icon: "./assets/img/epicgames.png",
		label: "Epic Games",
		category: "Gaming"
        
    },
    
    {
        title: "Steam DB",
        url: "https://steamdb.info/upcoming/free/",
        icon: "./assets/img/steamdb.webp",
		label: "Steam DB",
		category: "Gaming"
    },
    
    {
        title: "G.O.G",
        url: "https://www.gog.com/fr/",
        icon: "./assets/img/gog.webp",
		label: "G.O.G",
		category: "Gaming"
    },
    
	{
        title: "Humble",
        url: "https://fr.humblebundle.com/",
        icon: "./assets/img/humblebundle.svg",
		text: "Humble Bundle",
		label: "Humble Bundle",
		category: "Gaming"
    },
    
    {
        title: "Géo",
        url: "./geo.html",
        icon: "./assets/img/geo.svg",
        text: "Géo.",
        label: "Géo.",
        category: "Gaming"
    },

    {
        title: "Dino",
        url: "brave://dino/",
        icon: "./assets/img/dino.png",
		text: "Dino",
		label: "Dino",
		category: "Gaming"
    },

	{
        title: "La Guerre des Gangs",
        url: "https://www.guerredesgangs.net/beta/index.html#home",
        icon: "https://www.guerredesgangs.net/images_game/v5/bg/logo.png",
		text: "Guerre des Gangs",
		label: "GDG",
		category: "Gaming"
    },

    {
        title: "Galaxy.click",
        url: "https://galaxy.click",
        icon: null,
		text: "Galaxy.click",
		label: "Galaxy.click",
		category: "Gaming"
    },


	
//-----------------------
//       DETENTE
//-----------------------
    {
        title: "Facebook",
        url: "https://www.facebook.com/",
        icon: "./assets/img/fb.svg",
		label: "Facebook",
		category: "Detente"
    },


    {
        title: "Whatsapp",
        url: "https://web.whatsapp.com/",
        icon: "./assets/img/whatsapp.svg",
		label: "Whatsapp",
		category: "Detente"
    },

	    {
        title: "Google Actualité",
        url: "https://news.google.com/",
        icon: "./assets/img/google-news.png",
		text: "Actualités",
		label: "News",
		category: "Detente"
    },

	    {
        title: "Noisli",
        url: "https://www.noisli.com/",
        icon: "./assets/img/noisli.png",
		text: "Noisli",
		label: "Noisli",
		category: "Detente"
    },


    {
        title: "Twitch",
        url: "https://twitch.tv/",
        icon: "./assets/img/twitch.svg",
		text: "Twitch",
		label: "Twitch",
		category: "Detente"
    },

    {
        title: "Discord",
        url: "https://discord.com/login",
        icon: "./assets/img/discord.svg",
		text: "Discord",
		label: "Discord",
		category: "Detente"
    },

    {
        title: "DTC",
        url: "https://danstonchat.com/random",
        icon: "./assets/img/dtc.webp",
		label: "DTC",
		category: "Detente"
		
    },

    {
        title: "NewsBlur",
        url: "https://www.newsblur.com/",
        icon: "./assets/img/logo-newsblur.png",
		label: "NewsBlur",
		category: "Detente"
		
    },
	
    {
        title: "Linked In",
        url: "https://linkedin.com/feed/",
        icon: "./assets/img/linkedin.png",
		text: "LinkedIn",
		label: "Linked In",
		category: "Detente"
    },
	
    {
        title: "VDM",
        url: "https://viedemerde.fr/",
        icon: "./assets/img/vdm.png",
		text: "VDM",
		label: "VDM",
		category: "Detente"
    },
	
    {
        title: "SCMB",
        url: "https://secouchermoinsbete.fr/",
        icon: "./assets/img/scmb.jpeg",
		text: "SCMB",
		label: "SCMB",
		category: "Detente"
    },
	
//-----------------------
//       SHOPPING
//-----------------------
	{
        title: "Amazon",
        url: "https://amazon.fr/",
        icon: "./assets/img/Amazon.svg",
		text: "Amazon",
		label: "Amazon",
		category: "shopping"
    },

	{
        title: "Kubii",
        url: "https://www.kubii.com/fr/",
        icon: "./assets/img/kubii.png",
		text: "Kubii",
		label:"Kubii",
		category: "shopping"
    },
	
	{
        title: "LeBonCoin",
        url: "https://leboncoin.fr/",
        icon: "./assets/img/lbc.svg",
		text: "LBC",
		label:"LeBonCoin",
		category: "shopping"
    },
	
	{
        title: "AgoraStore",
        url: "https://www.agorastore.fr/fr",
        icon: "./assets/img/logo-agora.svg",
		text: "AgoraStore",
		label:"AgoraStore",
		category: "shopping"
    },
	{
        title: "Cigarette-Elec",
        url: "https://www.cigaretteelec.fr/",
        icon: "./assets/img/cigelec.svg",
		text: "Cigarette-Elec",
		label:"Cigarette-Elec",
		category: "shopping"
    },

	{
        title: "Seido Shop",
        url: "https://www.seidoshop.fr/",
        icon: null,
		text: "Seido",
		label:"Seido Shop",
		category: "shopping"
    },

	{
        title: "Bullrot Wear",
        url: "https://www.bullrotwearofficiel.fr/boutiquebullrotwear/",
        icon: "./assets/img/bullrot.png",
		text: "Bullrot",
		label:"Bullrot Wear",
		category: "shopping"
    },


//-----------------------
//       PRO
//-----------------------
	{
        title: "VALENCE ROMANS AGGLO",
        url: "https://intragglo.valenceromansagglo.fr/fr/index.html",
        icon: "./assets/img/vra.svg",
		label:"IntrAgglo",
		category: "pro"
    }, 

	{
        title: "VALENCE VILLE",
        url: "https://intraval.valence.fr/fr/index.html",
        icon: "./assets/img/valenceville.svg",
		label:"IntraVille",
		category: "pro"
    }, 
	
	{
        title: "ChronoTime",
        url: "https://chronotime.valenceromansagglo.fr/chronotime/login/login.html",
        icon: "./assets/img/chronotime.png",
		label:"ChronoTime",
		category: "pro"
    },
	
	{
        title: "ASTECH",
        url: "https://astech.valenceromansagglo.fr/#/",
        text: "ASTech",
		label:"ASTech",
		icon: "./assets/img/logo-astech.svg",
		category: "pro"
    },

	{
        title: "ASTECH-Solutions",
        url: "https://support.astech-solutions.com/",
        text: "ASTech-Solutions",
		label:"ASTech-Solutions",
		icon: "./assets/img/astech_solutions.svg",
		category: "pro"
    },    

    {
        title: "GEO",
        url: "https://geo.valenceromansagglo.fr/adws/app/5f1019b5-9dfd-11ec-a909-8bd6ac5949ab/index.html",
        text: "GEO",
		label:"GEO Portail",
		icon: "./assets/img/logo-geo.png",
		color: "#e5004e",
		category: "pro"
    },    
    {
        title: "PSS-ARCHI",
        url: "https://www.pss-archi.eu/",
        text: "PSS-archi",
		label:"PSS-archi",
		icon: "./assets/img/pss_archi.webp",
		category: "pro"
    },    

    {
        title: "PATRI-DATA",
        url: "https://orimaworks.github.io/patri-data",
        text: "PATRI-DATA",
		label:"PATRI-DATA",
		icon: "./assets/img/logo-patridata.png",
		category: "pro"
    },    
	
    {
        title: "wever - mobilité participative",
        url: "https://yeswever.com/",
        text: "Wever",
		label:"Wever",
		icon: "./assets/img/logo-wever.png",
		category: "pro"
    },

    {
        title: "SuperSet",
        url: "https://dataviz.valenceromansagglo.fr/superset/welcome/",
        text: "SuperSet",
		label:"SuperSet",
		icon: "./assets/img/superset.png",
		category: "pro"
    },

    {
        title: "Class'Croûte",
        url: "https://www.classcroute.com",
        text: "Class'Croûte",
		label:"Class'Croûte",
		icon: "./assets/img/logo-classcroute.png",
		category: "pro"
    }
	

];