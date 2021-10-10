import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setCodeValue } from "../features/Slices/codeSlice";
import { setLanguage, setLanguageValue } from '../features/Slices/languageSlice'
import { Flex, Stack } from '@chakra-ui/react'

// Languages 
import { javascript } from '@codemirror/lang-javascript';
// import { html } from '@codemirror/lang-html';
// import { css } from '@codemirror/lang-css';
import { python } from '@codemirror/lang-python';
import { sql, MySQL, PostgreSQL } from '@codemirror/lang-sql';
import { java } from '@codemirror/lang-java';
import { cpp } from '@codemirror/lang-cpp';
import { php } from '@codemirror/lang-php';
import { StreamLanguage } from '@codemirror/stream-parser';
import { go } from '@codemirror/legacy-modes/mode/go';
// import { ruby } from '@codemirror/legacy-modes/mode/ruby';
import { vb } from '@codemirror/legacy-modes/mode/vb';
// import { powerShell } from '@codemirror/legacy-modes/mode/powershell';
// import { pascal } from '@codemirror/legacy-modes/mode/pascal';
// import { r } from '@codemirror/legacy-modes/mode/r';
import CodeMirror, { ReactCodeMirrorProps, Extension } from '@uiw/react-codemirror';
import { Select } from './Select';
import { send } from 'process';


interface CodeEditorProps {
    height: string
}

const langs: Record<string, any> = {
    javascript,
    jsx: () => javascript({ jsx: true }),
    // typescript: () => javascript({ typescript: true }),
    // tsx: () => javascript({ jsx: true, typescript: true }),
    // html,
    // css,
    python,
    // sql,
    // mysql: () => sql({ dialect: MySQL }),
    // pgsql: () => sql({ dialect: PostgreSQL }),
    java,
    cpp,
    // php,
    go: () => StreamLanguage.define(go),
    vb: () => StreamLanguage.define(vb),
    // powershell: () => StreamLanguage.define(powerShell),
    // ruby: () => StreamLanguage.define(ruby),
    // pascal: () => StreamLanguage.define(pascal),
    // r: () => StreamLanguage.define(r),
};

const langId = {
    javascript: 63,
    cpp: 76,
    java: 62,
    go: 60,
    python: 71,
    sql: 82,
    vb: 84
}

const themeOptions = ['dark', 'light'];

export const CodeEditor: React.FC<CodeEditorProps> = ({ height }) => {
    const dispatch = useAppDispatch()
    const code = useAppSelector(state => state.codeSolution.code)
    const mode = useAppSelector(state => state.language.language)

    // const [mode, setMode] = useState('javascript');
    const [theme, setTheme] = useState<ReactCodeMirrorProps['theme']>('light');
    const [extensions, setExtensions] = useState<Extension[]>();


    function handleLangChange(lang: string) {
        // setCode(data.default);
        if (langs[lang]) {
            setExtensions([langs[lang]()]);
        }
        dispatch(setLanguage(lang))
        dispatch(setLanguageValue(langId[lang]))
    }

    useEffect(() => {
        handleLangChange('javascript');
    }, []);


    return (
        <>
            <CodeMirror
                value={code}
                height={height}
                theme={theme}
                editable={true}
                extensions={extensions}
                placeholder="Please enter your code..."
                onChange={(value) => {
                    dispatch(setCodeValue(value))
                }}
                style={{
                    // margin: '-18px auto 0 auto',
                    position: 'relative',
                    zIndex: 999,
                }}
                onPasteCapture={() => alert("Paste not allowed")}
            />
            <Stack direction="row" w="400px" mt="14px" mb="10px">
                <Select
                    label="Language"
                    options={Object.keys(langs)}
                    value={mode}
                    onChange={(evn) => handleLangChange(evn.target.value)}
                />
                <Select
                    label="Theme"
                    options={themeOptions}
                    value={theme}
                    onChange={(evn) => setTheme(evn.target.value as ReactCodeMirrorProps['theme'])}
                />
            </Stack>
        </>

    );
}

export default CodeEditor