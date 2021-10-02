import React from 'react';
import CodeMirror from '@uiw/react-codemirror';

// languages
import { StreamLanguage } from '@codemirror/stream-parser';
import { go } from '@codemirror/legacy-modes/mode/go';
import { javascript } from '@codemirror/lang-javascript';
import { java } from '@codemirror/lang-java';
import { php } from '@codemirror/lang-php'
import { python } from '@codemirror/lang-python'
import { cpp } from "@codemirror/lang-cpp";
import { sql } from '@codemirror/lang-sql'

// import 'codemirror/keymap/vim';
// import 'codemirror/theme/darcula.css';
// import 'codemirror/theme/duotone-light.css';

// Manually loading the language resources here
// import 'codemirror/mode/javascript/javascript';

// import 'codemirror/addon/display/autorefresh';
// import 'codemirror/addon/comment/comment';
// import 'codemirror/addon/edit/matchbrackets';


interface CodeEditorProps {

}

export const CodeEditor: React.FC<CodeEditorProps> = ({ }) => {
    const code = 'const a = 0;';

    return (
        <CodeMirror
            value={code}
            height="420px"
            // @ts-ignore
            // options={{
            //     theme: 'duotone-light',
            //     tabSize: 2,
            //     keyMap: 'vim',
            //     mode: 'py',
            //     smartIndent: true,
            //     indentUnit: 4,
            //     lint: true                
            //   }}
            theme="light"
            onPasteCapture={() => {
                alert('paste detected! reporting malpractice')
            }}
            lang="python"
            extensions={[javascript({ jsx: true }), python(), cpp(), java(), php(), sql(), StreamLanguage.define(go)]}
            onChange={(value, viewUpdate) => {
                console.log('value:', value);
            }}
        />
    );
}

export default CodeEditor