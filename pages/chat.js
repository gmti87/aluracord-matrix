import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import React from 'react';
import appConfig from '../config.json';
import { useRouter } from 'next/router';
import { createClient } from '@supabase/supabase-js';
import { ButtonSendSticker } from '../src/components/ButtonSendSticker';

// Como fazer ajax
// olhar a barra network
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzgwNzYyNywiZXhwIjoxOTU5MzgzNjI3fQ.P1NVHgAURV-QqHw0ysgHCyVLNJggL8lBFCZWdTWvDE0';
const SUPABASE_URL = 'https://itdllcfwxstqfvivqxuw.supabase.co';
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// no terminal
// dar o comando yarn add @supabase/supabase-js 

function escutaMensagemEmTempoReal(adicionaMensagem) {
    return supabaseClient
        .from('mensagens')
        .on('INSERT', ( respostaLive ) => {
            adicionaMensagem(respostaLive.new);
            //console.log('Houve uma nova mensagem', oqueveio);
        })
        .subscribe();
}

export default function ChatPage() {
    //return (
      //  <div>Página do chat</div>
    //)
    // Sua lógica vai aqui

    // ./Sua lógica vai aqui
    /* 
    // Usuário
    - Usuário digita em campo textarea
    - Aperta enter para enviar
    - Tem qeu adicionar o texto na listagem

    // Dev
    - [X] Campo criado
    - [X] Vamos usar o onChange usa o useState (usar if para caso seja enter pra limpar a variavel)
    - [X] Lista de mensagens
    */
    
    const roteamento = useRouter();
    const usuarioLogado = roteamento.query.username;
    // console.log(roteamento.query);
    const [mensagem, setMensagem] = React.useState('');
    const [listaDeMensagem, setListaDeMensagem] = React.useState([]);
    // Array estatico
    // {
    //     id: 1,
    //     de: 'gmti87',
    //     texto: ':sticker: URL_da_imagem',
    // },
    // {
    //     id: 2,
    //     de: 'peas',
    //     texto: 'O ternario é meio triste',
    // },

    React.useEffect(() => {
        supabaseClient
            .from('mensagens')
            .select('*')
            .order('id', { ascending: false })
            .then(({ data }) => {
                //console.log('Dados consultados', dados);
                setListaDeMensagem(data);
            });
        
        const subscription = escutaMensagemEmTempoReal((novaMensagem) => {
            console.log(novaMensagem);
            console.log('listaDeMensagem', listaDeMensagem);

            // Quero reusar um valor de referencia (objeto/array)
            // Passar uma função pre setState

            // setListaDeMensagens([
            //    novaMensagem,
            //    ...listaDeMensagens
            //])

            setListaDeMensagem((valorAtualDaLista) => {
                return [
                    novaMensagem,
                    ...listaDeMensagem,
                ]
            });
        });

        return () => {
            subscription.unsubscribe();
        }
    }, []);

    function handleNovaMensagem(novaMensagem) {
        //console.log(event);
        const mensagem = {
            // id: listaDeMensagem.length = 1,
            de: usuarioLogado,
            texto: novaMensagem 
        }
        // chamada de um beckend
        supabaseClient
            .from('mensagens')
            .insert([
                // Tem que ser um objeto com os mesmos campos que voce escreveu no supabase
                mensagem
            ])
            .then(({ data }) => {
                 console.log('Criando mensagem: ', data);
            //     setListaDeMensagem([
            //         data[0],
            //         ...listaDeMensagem,
            //     ]);
            });
       
        setMensagem('');
    }

    return (
        <Box
            styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: appConfig.theme.colors.primary[500],
                backgroundImage: `url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)`,
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                color: appConfig.theme.colors.neutrals['000']
            }}
        >
            <Box
                styleSheet={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                    borderRadius: '5px',
                    backgroundColor: appConfig.theme.colors.neutrals[700],
                    height: '100%',
                    maxWidth: '95%',
                    maxHeight: '95vh',
                    padding: '32px',
                }}
            >
                <Header />
                <Box
                    styleSheet={{
                        position: 'relative',
                        display: 'flex',
                        flex: 1,
                        height: '80%',
                        backgroundColor: appConfig.theme.colors.neutrals[600],
                        flexDirection: 'column',
                        borderRadius: '5px',
                        padding: '16px',
                    }}
                >

                    <MessageList mensagens={listaDeMensagem}/>
                    {/* {listaDeMensagem.map[(mensagemAtual) => {
                        //console.log(mensagemAtual)
                        return (
                            <li key={mensagemAtual.id}>
                                {mensagemAtual.de} : {mensagemAtual.texto}
                            </li>
                        )
                    }]} */}

                    <Box
                        as="form"
                        styleSheet={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <TextField
                            value={mensagem}
                            onChange={(event) => {
                                const valor = event.target.value;
                                listaDeMensagem.push(mensagem);
                                setMensagem(valor);
                            }}
                            // pegar o código das teclas apertadas
                            onKeyPress={(event) => {
                                if (event.key === 'Enter') {
                                    event.preventDefault();
                                    
                                    handleNovaMensagem(mensagem);
                                }
                                
                            }}
                            placeholder="Insira sua mensagem aqui..."
                            type="textarea"
                            styleSheet={{
                                width: '100%',
                                border: '0',
                                resize: 'none',
                                borderRadius: '5px',
                                padding: '6px 8px',
                                backgroundColor: appConfig.theme.colors.neutrals[800],
                                marginRight: '12px',
                                color: appConfig.theme.colors.neutrals[200],
                            }}
                        />
                        {/* Callback */}
                        <ButtonSendSticker 
                            onStickerClick={(sticker)=> {
                                console.log('[Usando componente] Salva este sticker no banco', sticker);
                                handleNovaMensagem(':sticker:' + sticker);
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

function Header() {
    return (
        <>
            <Box styleSheet={{ width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                <Text variant='heading5'>
                    Chat
                </Text>
                <Button
                    variant='tertiary'
                    colorVariant='neutral'
                    label='Logout'
                    href="/"
                />
            </Box>
        </>
    )
}

function MessageList(props) {
    console.log(props);
    console.log('MessageList', props);
    return (
        <Box
            tag="ul"
            styleSheet={{
                overflow: 'scroll',
                display: 'flex',
                flexDirection: 'column-reverse',
                flex: 1,
                color: appConfig.theme.colors.neutrals["000"],
                marginBottom: '16px',
            }}
        >
            {props.mensagens.map((mensagem) => {
                return (
                    <Text
                        key={mensagem.id}
                        tag="li"
                        styleSheet={{
                            borderRadius: '5px',
                            padding: '6px',
                            marginBottom: '12px',
                            hover: {
                                backgroundColor: appConfig.theme.colors.neutrals[700],
                            }
                        }}
                    >
                        <Box
                            styleSheet={{
                                marginBottom: '8px',
                            }}
                        >
                            <Image
                                styleSheet={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    display: 'inline-block',
                                    marginRight: '8px',
                                }}
                                src={`https://github.com/${mensagem.de}.png`}
                            />
                            <Text tag="strong">
                                {mensagem.de}
                            </Text>
                            <Text
                                styleSheet={{
                                    fontSize: '10px',
                                    marginLeft: '8px',
                                    color: appConfig.theme.colors.neutrals[300],
                                }}
                                tag="span"
                            >
                                {(new Date().toLocaleDateString())}
                            </Text>
                        </Box>
                        {/* {mensagem.texto} */}
                        {/* Condicional: {mensagem.texto.startsWith(':sticker:').toString()} */}
                        {mensagem.texto.startsWith(':stickers:')
                            ? (
                                <Image src={mensagem.texto.replace(':sticker:', '')} />
                                // 'É sticker'
                            )
                            : (
                                mensagem.texto
                            )}
                        {/* if mensagem de texto possui stickers:
                            mostra o sticker
                            else
                                mensagem de texto 
                            {mensagem.texto}
                        */}
                    </Text>
                );
            })}
        </Box>
    )
}