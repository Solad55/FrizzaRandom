import random, time
from itertools import islice
from colorama import init,Fore
from numpy import array_split as asplit
init(autoreset=True)

def randCol()->str:
    random.seed()
    c=[Fore.BLUE,Fore.CYAN,Fore.GREEN,Fore.MAGENTA,Fore.RED,Fore.YELLOW,Fore.WHITE,Fore.LIGHTBLUE_EX,Fore.LIGHTCYAN_EX,Fore.LIGHTGREEN_EX,Fore.LIGHTMAGENTA_EX,Fore.LIGHTRED_EX,Fore.LIGHTYELLOW_EX] 
    i=random.randint(0,len(c)-1)
    return c[i]

#Preso dal doc di python itertools.batched (è possibile importare il modulo se si usa la versione 3.12. io sono stronzo e sto usando la 3.11)
def batched(iterable, n):
    # batched('ABCDEFG', 3) → ABC DEF G
    if n < 1:
        raise ValueError('n must be at least one')
    it = iter(iterable)
    while batch := tuple(islice(it, n)):
        yield batch

def pause():
    random.seed()
    x=random.randint(0,100)
    if x == 100:
        wait=input("Inserisci la tua password di Grindr ")
    elif x%2==0:
        wait=input("Premi sulla tastiera il tastino [ENTER] per uscire")
    else:
        wait=input("Premi sulla tastiera il bottoncino [INVIO] per continuare")

def laLobbyDelleFontanelle(array:list, sesso:bool=False):
    if len(array) == 0 and not sesso:
        print(Fore.RED + f"La lobby è vuota :[")
    if not sesso:
        for i, lob in enumerate(array):
            print(randCol()+f"{i+1} {lob}", sep="\n")
    else:
        for i, lob in enumerate(array):
            print(randCol()+f"[{i}] {lob}", sep="\n")

def aggiungiAllaTavola(array:list, persone:list=[], sesso:int=-1):
    if sesso == -1:
        n=int(input("Quante personcine forcerelline devi aggiungere? "))
        for i in range(n):
            nome=input("Come si chiama il forcio?\n"+randCol())
            array.append(nome)
            print()
    else:
        array.append(persone[sesso])

def laTavolaImbandita(persone:list, array:list):
    print(Fore.BLACK+f"Scrivi il numeretto della persona da inserire, separati da un spazio(tipo la via lattaria :P)") 
    laLobbyDelleFontanelle(persone, sesso=True)
    x=input("")
    x=str.rsplit(x)
    for i in x:
        aggiungiAllaTavola(array, persone, sesso=int(i))

def team()->list:
    return ["I Pedofili", "I Furry", "BDSM Enjoyer", "Mafia Malvagia della Sardegna", "TangaScomparso", "IBALLINMOONER", "I Coomer", "Saturazione ridotta", "EHI NARCOLESSIA DID YOU PAY MY 50$", "Partitina a Balatro??", "Galactus Tiburtina FanClub", "Chiaramente una canzone di Pesto", "Hanno cercato sessogay su soundcloud", "I finochietti", "FREDDY FAS BEAR, OH-OH-OHOH-OH", "Il posto dove mi bacio con uno", "La blunt rotation", "Le chat di Grindr aperte", "Tossici del cazzo", "Sigma skibidi Fortnite 0 costruzioni"]

def generelloPazzerelloDelPisello(array:list, a:bool=False):
    teams=team()
    random.seed()
    random.shuffle(array)
    if a is False:
        sesso=asplit(array, 2)
    else:
        sesso=list(batched(array, 2))
    for i in range(len(sesso)):
        x=random.randint(0,len(teams)-1)
        print(randCol()+f"Squadra {i+1} {teams[x]}")
        for i, lob in enumerate(sesso[i]):
            print(f"{i+1} {lob}", sep="\n")
        print()
    
def ODIOLARIVOLUZIONEINDUSTRIALE():
    random.seed()
    x=random.randint(1,10)
    for i in range(x):
        print(randCol()+f"I love Galactus Tuscolana\n"
              f"I live for Galactus Tuscolana every day\n"
              f"I think about Galactus Tuscolana when I’m not in Galactus Tuscolana\n"
              f"I yearn for Galactus Tuscolana when I’m in Galactus Tuscolana\n"
              f"I want more of Galactus Tuscolana\n"
              f"I just love Galactus Tuscolana so much\n"
              f"I’m at Galactus Tuscolana even on Mondays\n")
        time.sleep(float(random.randint(2,5)))

def ff15(persone:list):
    i=random.randint(0,len(persone)-1)
    print(f"Chiaramente una {Fore.CYAN}{persone[i]}{Fore.RESET} tecnologia")
    
    
#-----------------------------#


x=-1
persone=["FrizzaCaxxerelli", "LudoAmica", "ILDraduxxo", "TokaToka", "SIGNOR-ALESSIOKIRAY", "StefanoErMinorato", "La Soladdussy", "Marcello", "FrizzarinaLaFrocettina"]
lobby=[]
while(x!=0):
    x=int(input(Fore.LIGHTGREEN_EX+f"\nCosa vuole eseguire il fruttolo?\n"
        f"[1] Ma chi cazzo c'è in lobby???\n"  
        f"[2] Aggiungi una persona gay alla lobby\n"
        f"[3] Aggiungi un posto a Tavola (lobby), che c'è un piselletto in più\n"
        f"[4] Crea le squadrette (angolo retto(culo) di 90 gradi)\n"
        f"[5] Mi sono arenato nel mar tirreno\n"
        f"[6] Fai esplodere il Galactus di Tuscolana (hihihihihihi)\n"
        f"[0] ff15(Esci)\n"))
    print("\n")
    match x:
        case int(1):
            laLobbyDelleFontanelle(lobby)
        case int(2):
            laTavolaImbandita(persone, lobby)
        case int(3):
            aggiungiAllaTavola(lobby)
        case int(4):
            generelloPazzerelloDelPisello(lobby)
        case int(5):
            generelloPazzerelloDelPisello(lobby, a=True)
        case int(6):
            ODIOLARIVOLUZIONEINDUSTRIALE()
        case int(0):
            ff15(persone)
            pause()