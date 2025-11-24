import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

/**
 * 다크 모드 Tiptap 에디터 컴포넌트
 * - 라이트/다크 테마 전환
 * - 테마별 스타일링
 * - 조건부 렌더링
 */
export default function DarkTiptapEditor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>다크 모드 에디터입니다.</p>',
    editorProps: {
      attributes: {
        class: 'prose dark:prose-invert mx-auto focus:outline-none min-h-[300px]',
      },
    },
  });

  return (
    <div className={`max-w-4xl mx-auto p-6 dark:bg-gray-900 dark:text-white bg-white`}>
      <div className={`border rounded-lg border-gray-300 dark:border-gray-600`}>
        <div className={`p-2 bg-gray-50 dark:bg-gray-800`}>
          <button onClick={() => editor?.chain().focus().toggleBold().run()}>Bold</button>
          <button onClick={() => editor?.chain().focus().toggleItalic().run()}>Italic</button>
        </div>

        <div className={`p-4 min-h-[300px] bg-white dark:bg-gray-900`}>
          <EditorContent editor={editor} />
        </div>
      </div>
    </div>
  );
}
