import {useNavigate} from 'react-router-dom'
import { MdEmail, MdLock} from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header"
import { Input } from "../../components/Input";

import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from "./styles";


const schema = yup.object({
    email: yup.string().email('email não é válido').required('Campo Obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required(),
  }).required();
  

const Login = () => {

    const navigate = useNavigate();

    
    const { control, handleSubmit, formState: { errors, isValid} } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });
console.log(isValid, errors)

    const onSubmit = data => console.log(data);

    const handleClickSignIn = () => {
        navigate('/feed')
    }
    
    return(<>
    < Header />
    <Container>
        < Column>
        <Title> 
                A plataforma para você aprender com experts, dominar as principais tecnologias
                e entrar mais rápido nas empresas mais desejadas.
        </Title>   
        </ Column>
        < Column>
        <Wrapper>
            <TitleLogin>Faça seu cadastro</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input name="email"  control={control} placeholder="Email"  leftIcon={<MdEmail/>}/>
                <Input name="password" control={control}  placeholder="senha"leftIcon={<MdLock/>} type="password" />
                <Button title="Entrar" variant="secondary" onClick={handleClickSignIn} type="submit"/>
            </form>
            <Row>
                <EsqueciText>Esqueci minha senha</EsqueciText>
                <CriarText>Criar Conta</CriarText>
            </Row>

        </Wrapper>
            <Input placeholder="email" />
        </ Column>
    </Container>
  
    </>)
}

export { Login }