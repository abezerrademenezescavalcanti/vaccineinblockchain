const RegMedABI = [{"constant":true,"inputs":[{"name":"_pacientAddress","type":"address"},{"name":"_recordId","type":"uint32"}],"name":"getPatientRecordDetails","outputs":[{"name":"","type":"bytes10"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"bool"},{"name":"","type":"bool"},{"name":"","type":"string"},{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_acct","type":"address"},{"name":"_name","type":"string"},{"name":"_country","type":"string"}],"name":"newThirdPartyIssuer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"thirdPartyIssuersAvailable","outputs":[{"name":"name","type":"string"},{"name":"country","type":"string"},{"name":"exists","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_orderID","type":"uint248"}],"name":"getRecordOrderDetails","outputs":[{"name":"requester","type":"address"},{"name":"purpose","type":"string"},{"name":"recordId","type":"uint248"},{"name":"accepted","type":"bool"},{"name":"valuePaid","type":"uint256"},{"name":"reqName","type":"string"},{"name":"reqEmail","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_recordId","type":"uint248"},{"name":"_purpose","type":"string"},{"name":"_reqName","type":"string"},{"name":"_reqEmail","type":"string"}],"name":"askToBuy","outputs":[{"name":"newID","type":"uint248"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"_orderId","type":"uint248"}],"name":"getRecordSoldDetails","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_recordId","type":"uint32"}],"name":"deleteRecord","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_pacientAddress","type":"address"},{"name":"_recordId","type":"uint32"},{"name":"_mediaUrl","type":"string"},{"name":"_externalIssuer","type":"address"}],"name":"addMediaToRecord","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_pacientAddress","type":"address"}],"name":"getTotalPatientRecords","outputs":[{"name":"","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_recordId","type":"uint248"}],"name":"getRecordSellable","outputs":[{"name":"patient","type":"address"},{"name":"recordCategoryCode","type":"bytes10"},{"name":"price","type":"uint256"},{"name":"stillSellable","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_code","type":"bytes10"},{"name":"description","type":"string"}],"name":"newRecordCategory","outputs":[{"name":"status","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_acct","type":"address"},{"name":"_dateOfBirth","type":"string"},{"name":"_genderOfBirth","type":"string"},{"name":"_cityOfBirth","type":"string"},{"name":"_countryOfBirth","type":"bytes2"},{"name":"_ethnicity","type":"string"}],"name":"newPatient","outputs":[{"name":"status","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_pacientAddress","type":"address"},{"name":"_recordCategoryCode","type":"bytes10"},{"name":"_dateOfFact","type":"string"},{"name":"_details","type":"string"},{"name":"_externalIssuer","type":"address"}],"name":"newRecord","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_recordId","type":"uint32"}],"name":"makeRecordNotSellable","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalRecordCategories","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_orderID","type":"uint248"},{"name":"_recordDetails","type":"string"}],"name":"sell","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_acct","type":"address"}],"name":"allowIssuers","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_code","type":"bytes10"}],"name":"getRecordCategory","outputs":[{"name":"code","type":"bytes10"},{"name":"description","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_acct","type":"address"}],"name":"removeIssuers","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_recordId","type":"uint32"},{"name":"_price","type":"uint64"}],"name":"makeRecordSellable","outputs":[{"name":"newID","type":"uint248"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_acct","type":"address"}],"name":"getPatientDetails","outputs":[{"name":"dateOfBirth","type":"string"},{"name":"genderOfBirth","type":"string"},{"name":"cityOfBirth","type":"string"},{"name":"countryOfBirth","type":"bytes2"},{"name":"ethnicity","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"recordSellableId","outputs":[{"name":"","type":"uint248"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"recordOrderId","outputs":[{"name":"","type":"uint248"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_devContract","type":"address"}],"payable":true,"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_patient","type":"address"},{"indexed":false,"name":"_value","type":"uint256"},{"indexed":false,"name":"_recordOrderId","type":"uint248"}],"name":"NewRecordBuyed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"purpose","type":"string"},{"indexed":false,"name":"valueOffered","type":"uint256"},{"indexed":false,"name":"_recordOrderId","type":"uint248"}],"name":"NewOrder","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"category","type":"bytes10"},{"indexed":false,"name":"price","type":"uint256"},{"indexed":false,"name":"recordSellableId","type":"uint248"}],"name":"NewRecordAvailableToBuy","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"patient","type":"address"},{"indexed":false,"name":"recordId","type":"uint32"}],"name":"NewRecordToPatient","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"patient","type":"address"},{"indexed":false,"name":"recordId","type":"uint32"}],"name":"NewMediaToPatientRecord","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"code","type":"bytes10"}],"name":"NewCategory","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"parter","type":"address"}],"name":"NewThirdPartyIssuer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"patientAddress","type":"address"}],"name":"NewPatient","type":"event"}];
var contract;
var network;
var web3;
var recRead = 0;

window.addEventListener('load', function() {
    try {
        web3 = new Web3(ethereum);
        // Solicita acesso a carteira Ethereum se necessário
        ethereum.enable();    
        if (typeof web3 !== 'undefined') {
            var table = document.getElementById("tabVaccines");      
            // Use Mist/MetaMask's provider
            provider = new ethers.providers.Web3Provider(web3.currentProvider);
            signer = provider.getSigner();
            signer.getAddress()
                .then((addr) => {
                    console.log("addr ", addr);
                    provider.getNetwork()
                        .then((network) => {
                            console.log("network...", network);
                            if (network.chainId === 4) {
                                //contract = web3.eth.contract(RegMedABI).at("0x58e43fdcfcdbadb71533b678648f4913171e1425"); 
                                contract = new ethers.Contract("0x58e43fdcfcdbadb71533b678648f4913171e1425", RegMedABI, signer);
                            } else {
                                contract = new ethers.Contract("0xe7402e8cde5566c926f8103b793fa6eeec13c2b5", RegMedABI, signer);
                            }
                            contract.getTotalPatientRecords(addr)
                                .then((totalRec) => {
                                    console.log("getTotalPatientRecords ", totalRec);  
                                    if (totalRec < 2) {
                                        alert("Você precisa haver registrado a vacinação primeiro antes de acessar essa página.\nVocê será redirecionado a página para inclusão da sua vacinação.");
                                        window.location.href = "https://abezerrademenezescavalcanti.github.io/saudechain/index.html";
                                        return;
                                    }   
                                    //Records in MyHealthData starts with index 1
                                    recRead = (totalRec-1);
                                    console.log("RecRead inicial é ", recRead);
                                    for (i=2; i<=totalRec; i++) {
                                        console.log("chamando getPatientRecordDetails - ", addr, i, i-2);
                                        contract.getPatientRecordDetails(addr, i)
                                            .then((rec) => {
                                                console.log("MyHealthData Rec: ", rec);
                                                
                                                let row = table.insertRow(2);
                                                let record = rec[3].split(";");

                                                let doencaAlvo = row.insertCell(0);
                                                doencaAlvo.innerHTML = record[6];
                                                
                                                let vacinaNome = row.insertCell(1);
                                                vacinaNome.innerHTML = record[0];                                                 
                                                
                                                let quando = row.insertCell(2);
                                                quando.innerHTML = record[4];
                                                
                                                let local = row.insertCell(3);
                                                local.innerHTML = record[7];

                                                let prof = row.insertCell(4);
                                                prof.innerHTML = record[1];
                                                
                                                let fabricante = row.insertCell(5);
                                                fabricante.innerHTML = record[2] + " : " + record[3];

                                                let validade = row.insertCell(6);
                                                validade.innerHTML = record[5];
                                                                                                
                                                return 1;
                                            })
                                            .then((recAmount) => {       
                                                recRead = recRead - recAmount;
                                                console.log("RecRead depois de incluido a linha é ", recRead);          
                                                console.log(recAmount, totalRec, recRead);
                                                if (recRead === 0) {
                                                    console.log("Apagando linha a mais ", recRead);         
                                                    table.deleteRow(1);
                                                    alert("Para gerar sua carteira de vacinação, preencha os campos pressionando Enter ao terminar de completar cada campo"); 
                                                    $("#patientinput").focus();
                                                }                                                  
                                            })
                                            .catch((err) => {
                                                console.error("Erro ao obter o detalhe do registro...", err);
                                                //alert("Houve um erro ao carregar seus registros de vacinas do Blockchain. Veja os logs");
                                            });
                                    }
                                })
                                .catch( (err) => {
                                    console.error("Erro ao obter o total de registros ", err);
                                    alert("Essa conta Ethereum já tem registros no MyHealthData?\nRegistre os dados para esta conta na página que você será redirecionado\ne depois volte aqui para gerar a carteira de vacinação.");
                                    //window.location.href = "https://abezerrademenezescavalcanti.github.io/saudechain/index.html";
                                    return;
                                });
                        })
                })
                .catch((err) => {
                    console.error(" Não conseguiu pegar a conta do usuário ", err);
                    alert("A página será recarregada para obter o endereço da sua conta Ethereum.\nCaso após a retentativa essa mensagem seja novamente exibida, feche essa janela e verifique seu Metamask.");
                    window.location.reload();
                });
        } else {
            alert("Você precisa ter uma carteira Ethereum associado a seu navegador. Que tal instalar o Metamask?");  
            window.location.href = "https://metamask.io";
            // Allow read-only access to the blockchain if no Mist/Metamask/EthersWallet
            //provider = ethers.providers.getDefaultProvider();
        }
    } catch (err) { // Usuário ainda não deu permissão para acessar a carteira Ethereum    
        console.log("erro"); 
        console.error(err);    
        alert("Você precisa ter uma carteira Ethereum associado a seu navegador. Que tal instalar o Metamask?");  
        window.location.href = "https://metamask.io";
    }
  });