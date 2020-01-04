import React from 'react';
import {G, Path, ClipPath, Defs, Rect} from 'react-native-svg';

export default {
  'short-menu': {
    svg: (
      <G width="20" height="14" fill="none">
        <Path
          d="M0 13.6667H20V11.4445H0V13.6667ZM0 8.11115H20V5.88893H0V8.11115ZM0 0.333374V2.5556H20V0.333374H0Z"
          fill="#707070"
        />
      </G>
    ),
    viewBox: '0 0 20 14',
  },
  'author-icon': {
    svg: (
      <G width={42} height={42} viewBox="0 0 42 42" fill="#707070">
        <Path
          d="M14.98 29V11.937h5.579c1.851 0 3.242.383 4.171 1.149.938.766 1.407 1.898 1.407 3.398a3.49 3.49 0 01-.68 2.121c-.453.61-1.07 1.082-1.852 1.418.922.258 1.649.75 2.18 1.477.54.719.809 1.578.809 2.578 0 1.531-.496 2.735-1.489 3.61-.992.875-2.394 1.312-4.207 1.312H14.98zm2.25-7.98v6.14h3.715c1.047 0 1.871-.27 2.473-.808.61-.547.914-1.297.914-2.25 0-2.055-1.117-3.082-3.352-3.082h-3.75zm0-1.805h3.399c.984 0 1.77-.246 2.355-.738.594-.493.891-1.16.891-2.004 0-.938-.273-1.617-.82-2.04-.547-.43-1.38-.644-2.496-.644H17.23v5.426z"
          fill="#fff"
        />
      </G>
    ),
    viewBox: '0 0 42 42',
  },
  'star-icon': {
    svg: (
      <G width="20" height="19" fill="none">
        <Path
          d="M20 7.24L12.81 6.62L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.55 11.97L20 7.24ZM10 13.4L6.24 15.67L7.24 11.39L3.92 8.51L8.3 8.13L10 4.1L11.71 8.14L16.09 8.52L12.77 11.4L13.77 15.68L10 13.4Z"
          fill="#9AA0A6"
        />
      </G>
    ),
    viewBox: '0 0 20 20',
  },
  'star-icon-active': {
    svg: (
      <G width="20" height="19" fill="none">
        <Path
          d="M20 7.24L12.81 6.62L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27L16.18 19L14.55 11.97L20 7.24ZM10 13.4L6.24 15.67L7.24 11.39L3.92 8.51L8.3 8.13L10 4.1L11.71 8.14L16.09 8.52L12.77 11.4L13.77 15.68L10 13.4Z"
          fill="#9AA0A6"
        />
      </G>
    ),
    viewBox: '0 0 20 20',
  },
  'select-author': {
    svg: (
      <G width="19" height="14" fill="none">
        <Path
          d="M1 7.5L6 12.5L17.5 1"
          stroke="#ffffff"
          stroke-width="2"
          fill="rgba(0,0,0,0)"
        />
      </G>
    ),
    viewBox: '0 0 20 19',
  },
  'google-icon': {
    svg: (
      <G width={29} height={29} viewBox="0 0 29 29" fill="none">
        <Path
          d="M6.427 17.525l-1.01 3.768-3.689.078A14.435 14.435 0 010 14.5c0-2.405.585-4.672 1.621-6.669h.001l3.285.603 1.439 3.264A8.619 8.619 0 005.88 14.5c0 1.064.193 2.084.547 3.025z"
          fill="#FBBB00"
        />
        <Path
          d="M28.747 11.791c.166.877.253 1.783.253 2.709 0 1.038-.11 2.05-.317 3.027a14.497 14.497 0 01-5.105 8.28h-.001l-4.137-.212-.586-3.655a8.641 8.641 0 003.718-4.413H14.82v-5.736h13.928z"
          fill="#518EF8"
        />
        <Path
          d="M23.577 25.807A14.439 14.439 0 0114.5 29c-5.522 0-10.323-3.086-12.772-7.628l4.699-3.847a8.622 8.622 0 0012.427 4.416l4.723 3.866z"
          fill="#28B446"
        />
        <Path
          d="M23.755 3.338l-4.697 3.846a8.624 8.624 0 00-12.712 4.515L1.622 7.832C4.034 3.179 8.895 0 14.5 0a14.44 14.44 0 019.255 3.338z"
          fill="#F14336"
        />
      </G>
    ),
    viewBox: '0 0 29 29',
  },
  'add-account': {
    svg: (
      <G width={20} height={14} viewBox="0 0 20 14" fill="none">
        <Path stroke="#5F6368" strokeWidth={2} d="M16.5 2v7M20 5.5h-7" />
        <Path
          d="M7 1.663a1.837 1.837 0 110 3.674 1.837 1.837 0 010-3.674zm0 7.875c2.599 0 5.338 1.277 5.338 1.837v.963H1.662v-.963c0-.56 2.738-1.838 5.337-1.838zM7 0a3.499 3.499 0 00-3.5 3.5C3.5 5.434 5.066 7 7 7s3.5-1.566 3.5-3.5S8.934 0 7 0zm0 7.875c-2.336 0-7 1.172-7 3.5V14h14v-2.625c0-2.328-4.664-3.5-7-3.5z"
          fill="#5F6368"
        />
      </G>
    ),
    viewBox: '0 0 20 14',
  },
  'manage-account': {
    svg: (
      <G width={18} height={16} viewBox="0 0 18 16" fill="none">
        <Path
          d="M7 1.663a1.837 1.837 0 110 3.674 1.837 1.837 0 010-3.674zm0 7.875h.152c2.553.05 5.186 1.288 5.186 1.837v.963H1.662v-.963c0-.56 2.738-1.838 5.337-1.838zM7 0a3.499 3.499 0 00-3.5 3.5C3.5 5.434 5.066 7 7 7s3.5-1.566 3.5-3.5S8.934 0 7 0zm0 7.875c-2.336 0-7 1.172-7 3.5V14h14v-2.625c0-2.107-3.824-3.268-6.281-3.469A8.908 8.908 0 007 7.875z"
          fill="#5F6368"
        />
        <Path
          d="M18 10.5a5.5 5.5 0 11-11 0C7 7.462 10.5 5 12.5 5a5.5 5.5 0 015.5 5.5z"
          fill="#fff"
        />
        <Path
          d="M15.928 10.941c.018-.144.036-.288.036-.441 0-.153-.009-.297-.036-.441l.979-.747a.23.23 0 00.055-.288l-.924-1.557c-.055-.099-.175-.135-.286-.099l-1.145.45a3.182 3.182 0 00-.785-.441l-.176-1.188c-.009-.108-.11-.189-.221-.189h-1.847a.236.236 0 00-.231.189l-.176 1.188a3.716 3.716 0 00-.785.441l-1.145-.45a.245.245 0 00-.286.099L8.03 9.024a.219.219 0 00.056.288l.979.747a3.429 3.429 0 000 .882l-.98.747a.23.23 0 00-.055.288l.924 1.557c.055.099.175.135.286.099l1.145-.45c.24.18.499.333.785.441l.176 1.188c.018.108.11.189.23.189h1.848c.11 0 .212-.081.23-.189l.176-1.188c.277-.117.545-.261.776-.441l1.154.45c.102.036.222 0 .287-.099l.923-1.557a.23.23 0 00-.055-.288l-.988-.747zm-3.427.909c-.766 0-1.385-.603-1.385-1.35 0-.747.619-1.35 1.385-1.35.767 0 1.386.603 1.386 1.35 0 .747-.62 1.35-1.386 1.35z"
          fill="#5F6368"
        />
      </G>
    ),
    viewBox: '0 0 18 16',
  },
  'compose-icon': {
    svg: (
      <G width="24" height="24" fill="none">
        <Rect
          x="10"
          y="10"
          width="4"
          height="10"
          transform="rotate(90 10 10)"
          fill="#FBBC05"
        />
        <Rect x="10" y="14" width="4" height="10" fill="#34A853" />
        <Path
          d="M24 14L10 14L10.4828 13.5L13.8621 10L24 10L24 10.5L24 10.6975L24 14Z"
          fill="#4285F4"
        />
        <Path
          d="M10 0V14L10.5 13.5172L14 10.1379V0H13.5H13.3025H10Z"
          fill="#EA4335"
        />
      </G>
    ),
    viewBox: '0 0 24 24',
  },
  'archive-icon': {
    svg: (
      <G width="19" height="19" fill="none">
        <Path d="M18.5144 2.35389L17.0472 0.580555C16.7622 0.221667 16.3294 0 15.8333 0H3.16667C2.67056 0 2.23778 0.221667 1.94222 0.580555L0.485556 2.35389C0.179444 2.71278 0 3.18778 0 3.69444V16.8889C0 18.05 0.95 19 2.11111 19H16.8889C18.05 19 19 18.05 19 16.8889V3.69444C19 3.18778 18.8206 2.71278 18.5144 2.35389ZM3.42 2.11111H15.58L16.435 3.135H2.57556L3.42 2.11111ZM2.11111 16.8889V5.27778H16.8889V16.8889H2.11111ZM11.0306 7.38889H7.96944V10.5556H5.27778L9.5 14.7778L13.7222 10.5556H11.0306V7.38889Z" />
      </G>
    ),
    viewBox: '0 0 19 19',
  },
  'attach-icon': {
    svg: (
      <G width={21} height={11} viewBox="0 0 21 11" fill="none">
        <Path
          d="M0 5.5C0 2.46 2.583 0 5.775 0H16.8C19.12 0 21 1.79 21 4s-1.88 4-4.2 4H6C4.551 8 3.5 6.88 3.5 5.5S4.551 3 6 3h10.5v2h-10c-.577 0-.577 1 0 1h10.3c1.155 0 2.1-.9 2.1-2s-.945-2-2.1-2H5.775C3.748 2 2.1 3.57 2.1 5.5S3.748 9 5.775 9H16.5v2H5.775C2.583 11 0 8.54 0 5.5z"
          fill="#5F6368"
        />
      </G>
    ),
    viewBox: '0 0 21 11',
  },
  'send-icon': {
    svg: (
      <G width={21} height={18} viewBox="0 0 21 18" fill="none">
        <Path
          d="M2.01 3.03L15.5 9h-4L2.01 6.5V3.03zM15.5 9L2 14.97l.01-3.47L11.5 9h4zM.01 0L0 7l.01 2L0 11l.01 7L21 9 .01 0z"
          fill="#5F6368"
        />
      </G>
    ),
    viewBox: '0 0 21 18',
  },
  'more-icon': {
    svg: (
      <G width={4} height={16} viewBox="0 0 4 16" fill="none">
        <Path
          d="M2 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2C.9 6 0 6.9 0 8s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
          fill="#5F6368"
        />
      </G>
    ),
    viewBox: '0 0 4 16',
  },
  'dropdown-icon': {
    svg: (
      <G width={12} height={8} viewBox="0 0 12 8" fill="none">
        <Path
          d="M1.41.59L6 5.17 10.59.59 12 2 6 8 0 2 1.41.59z"
          fill="#757575"
        />
      </G>
    ),
    viewBox: '0 0 12 8',
  },
};
