import { h, render, Fragment, Component as PComponent } from './preact.mjs';
const DB_VERSION = "202611241952";
const TPL = [["div",{"style":"width: 100%; max-width: 560px; margin: 0 auto; height: 100dvh; position: relative; overflow: hidden; background: #F4F5F2; font-family: 'Noto Sans KR', system-ui, sans-serif; color: #1B1F1D; display: flex; flex-direction: column"},[["?",["isLog"],[["div",{"style":"display: flex; flex-direction: column; height: calc(100dvh - 64px)"},[["header",{"style":"padding: 12px 16px 10px; background: #FFFFFF; border-bottom: 1px solid #E3E6E1"},[["div",{"style":"display: flex; align-items: center; gap: 4px"},[["button",{"onclick":{"h":["prevDay"]},"aria-label":"이전 날","style":"width: 44px; height: 44px; border: none; background: transparent; display: flex; align-items: center; justify-content: center; cursor: pointer"},[["svg",{"width":"20","height":"20","viewBox":"0 0 24 24","fill":"none","stroke":"#1B1F1D","stroke-width":"2","aria-hidden":"true"},[["path",{"d":"M15 18l-6-6 6-6"},[]]]]]],["div",{"style":"flex-grow: 1; text-align: center"},[["div",{"style":"font-size: 19px; font-weight: 700"},[["~",["",["dayLabel"],""]]]],["div",{"style":"font-size: 12px; color: #5B6460"},[["~",["",["dayBadge"],""]]]]]],["button",{"onclick":{"h":["nextDay"]},"aria-label":"다음 날","style":"width: 44px; height: 44px; border: none; background: transparent; display: flex; align-items: center; justify-content: center; cursor: pointer"},[["svg",{"width":"20","height":"20","viewBox":"0 0 24 24","fill":"none","stroke":"#1B1F1D","stroke-width":"2","aria-hidden":"true"},[["path",{"d":"M9 18l6-6-6-6"},[]]]]]]]],["div",{"style":"display: flex; gap: 8px; margin-top: 6px"},[["div",{"style":"flex: 1; background: #E6F2EF; border-radius: 10px; padding: 7px 10px"},[["div",{"style":"font-size: 12px; color: #0F5F55"},[["~",["영어 · 목표 ",["enPct"],""]]]],["div",{"style":"font-size: 17px; font-weight: 700; color: #0F5F55"},[["~",["",["enTotal"],""]]]]]],["div",{"style":"flex: 1; background: #FBEDE4; border-radius: 10px; padding: 7px 10px"},[["div",{"style":"font-size: 12px; color: #9A3412"},[["~",["한글 · 목표 ",["koPct"],""]]]],["div",{"style":"font-size: 17px; font-weight: 700; color: #9A3412"},[["~",["",["koTotal"],""]]]]]]]]]],["main",{"style":"flex-grow: 1; overflow-y: auto; padding: 10px 12px 24px; display: flex; flex-direction: column; gap: 8px"},[["button",{"onclick":{"h":["openScanLog"]},"style":"min-height: 56px; border-radius: 14px; border: none; background: #0F766E; color: #FFFFFF; font-family: inherit; display: flex; align-items: center; gap: 10px; padding: 8px 14px; text-align: left; cursor: pointer"},[["svg",{"width":"26","height":"26","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","aria-hidden":"true","style":"flex-shrink: 0"},[["path",{"d":"M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2M7 8v8M10 8v8M14 8v8M17 8v8"},[]]]],["span",{"style":"display: flex; flex-direction: column; gap: 2px"},[["span",{"style":"font-size: 16px; font-weight: 700"},["읽은 책 바코드로 기록"]],["span",{"style":"font-size: 12px; color: #CDEBE5"},["찍고 '오늘 읽음 기록' 한 번 누르면 끝 · 쪽수 저절로"]]]]]],["*",["cards"],"c",[["div",{"style":"display: flex; flex-direction: column; gap: 6px"},[["?",["c","groupTitle"],[["div",{"style":{"m":["font-size: 13px; font-weight: 700; padding: 4px 4px 0; color: ",["c","ink"],""]}},[["~",["",["c","groupTitle"],""]]]]]],["section",{"style":"background: #FFFFFF; border-radius: 14px; padding: 10px 12px 12px; display: flex; flex-direction: column; gap: 8px; border: 1px solid #E3E6E1"},[["div",{"style":"display: flex; align-items: center; gap: 8px"},[["span",{"style":{"m":["width: 10px; height: 10px; border-radius: 5px; background: ",["c","color"],""]}},[]],["span",{"style":"font-size: 16px; font-weight: 700"},[["~",["",["c","name"],""]]]],["?",["c","hasLevel"],[["button",{"onclick":{"h":["c","openLevel"]},"style":"height: 32px; padding: 0 10px; border-radius: 16px; border: 1px solid #B9C4BF; background: #F4F5F2; font-family: inherit; font-size: 14px; font-weight: 700; color: #1B1F1D; cursor: pointer"},[["~",["",["c","level"]," ▾"]]]]]],["span",{"style":"margin-left: auto; font-size: 15px; font-weight: 700"},[["~",["",["c","total"],""]]]]]],["div",{"style":"display: flex; gap: 8px"},[["*",["c","quick"],"q",[["button",{"onclick":{"h":["q","add"]},"style":{"m":["flex: 1; height: 48px; border-radius: 12px; border: none; background: ",["c","soft"],"; color: ",["c","ink"],"; font-family: inherit; font-size: 17px; font-weight: 700; cursor: pointer"]}},[["~",["",["q","label"],""]]]]]]]],["?",["c","hint"],[["div",{"style":"font-size: 12px; color: #5B6460"},[["~",["",["c","hint"],""]]]]]]]]]]]],["button",{"onclick":{"h":["copyYesterday"]},"style":"height: 48px; border-radius: 12px; border: 1.5px dashed #8A9590; background: transparent; font-family: inherit; font-size: 15px; color: #3F4743; cursor: pointer"},["어제와 똑같이 기록하기"]],["div",{"style":"font-size: 13px; font-weight: 700; color: #3F4743; padding: 6px 4px 0"},[["~",["",["logTitle"],""]]]],["div",{"style":"background: #FFFFFF; border-radius: 14px; border: 1px solid #E3E6E1"},[["*",["timeline"],"t",[["div",{"style":"display: flex; align-items: center; gap: 8px; padding: 2px 2px 2px 12px; border-bottom: 1px solid #EEF0EC"},[["span",{"style":"font-size: 13px; color: #5B6460; width: 40px"},[["~",["",["t","time"],""]]]],["span",{"style":{"m":["width: 8px; height: 8px; border-radius: 4px; background: ",["t","color"],""]}},[]],["span",{"style":"font-size: 14px; flex-grow: 1"},[["~",["",["t","text"],""]]]],["button",{"onclick":{"h":["t","del"]},"aria-label":"이 기록 지우기","style":"width: 44px; height: 44px; border: none; background: transparent; display: flex; align-items: center; justify-content: center; cursor: pointer"},[["svg",{"width":"16","height":"16","viewBox":"0 0 24 24","fill":"none","stroke":"#5B6460","stroke-width":"2","aria-hidden":"true"},[["path",{"d":"M18 6L6 18M6 6l12 12"},[]]]]]]]]]]]]]]]]]],["?",["isStats"],[["div",{"style":"display: flex; flex-direction: column; height: calc(100dvh - 64px)"},[["header",{"style":"padding: 14px 16px 10px; background: #FFFFFF; border-bottom: 1px solid #E3E6E1; display: flex; flex-direction: column; gap: 8px"},[["div",{"style":"display: flex; align-items: center; gap: 8px"},[["span",{"style":"font-size: 19px; font-weight: 700"},["통계"]],["span",{"style":"font-size: 12px; color: #5B6460"},[["~",["",["statNote"],""]]]],["button",{"onclick":{"h":["exportXlsx"]},"style":"margin-left: auto; height: 36px; padding: 0 12px; border-radius: 18px; border: 1px solid #0F766E; background: #FFFFFF; color: #0F5F55; font-family: inherit; font-size: 13px; font-weight: 700; display: flex; align-items: center; gap: 4px; cursor: pointer"},[["svg",{"width":"16","height":"16","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","aria-hidden":"true"},[["path",{"d":"M12 3v12M7 10l5 5 5-5M4 21h16"},[]]]],"엑셀"]]]],["div",{"style":"display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 4px; background: #EEF0EC; border-radius: 12px; padding: 4px"},[["*",["statTabs"],"t",[["button",{"onclick":{"h":["t","pick"]},"style":{"m":["height: 40px; border-radius: 9px; border: none; font-family: inherit; font-size: 15px; font-weight: 700; cursor: pointer; ",["t","style"],""]}},[["~",["",["t","label"],""]]]]]]]],["div",{"style":"text-align: center; font-size: 15px; font-weight: 700"},[["~",["",["period"],""]]]]]],["main",{"style":"flex-grow: 1; overflow-y: auto; padding: 10px 12px 24px; display: flex; flex-direction: column; gap: 10px"},[["div",{"style":"display: flex; gap: 8px"},[["div",{"style":"flex: 1; background: #E6F2EF; border-radius: 12px; padding: 10px 12px"},[["div",{"style":"font-size: 12px; color: #0F5F55"},["영어 합계"]],["div",{"style":"font-size: 20px; font-weight: 700; color: #0F5F55"},[["~",["",["sEnTotal"],""]]]],["div",{"style":"font-size: 13px; color: #0F5F55"},[["~",["목표의 ",["sEnPct"],""]]]]]],["div",{"style":"flex: 1; background: #FBEDE4; border-radius: 12px; padding: 10px 12px"},[["div",{"style":"font-size: 12px; color: #9A3412"},["한글 합계"]],["div",{"style":"font-size: 20px; font-weight: 700; color: #9A3412"},[["~",["",["sKoTotal"],""]]]],["div",{"style":"font-size: 13px; color: #9A3412"},[["~",["목표의 ",["sKoPct"],""]]]]]]]],["section",{"style":"background: #FFFFFF; border-radius: 14px; border: 1px solid #E3E6E1; padding: 12px; display: flex; flex-direction: column; gap: 12px"},[["div",{"style":"display: flex; align-items: baseline"},[["span",{"style":"font-size: 15px; font-weight: 700"},["목표 대비"]],["span",{"style":"margin-left: 8px; font-size: 12px; color: #5B6460"},[["~",["",["goalBasis"],""]]]]]],["*",["goalRows"],"g",[["div",{"style":"display: flex; flex-direction: column; gap: 4px"},[["div",{"style":"display: flex; align-items: baseline; gap: 6px"},[["span",{"style":"font-size: 15px; font-weight: 700"},[["~",["",["g","name"],""]]]],["span",{"style":"font-size: 12px; color: #5B6460"},[["~",["",["g","detail"],""]]]],["span",{"style":{"m":["margin-left: auto; font-size: 17px; font-weight: 700; color: ",["g","ink"],""]}},[["~",["",["g","pct"],""]]]]]],["div",{"style":"height: 10px; background: #E9ECE8; border-radius: 5px; overflow: hidden"},[["div",{"style":{"h":["g","bar"]}},[]]]]]]]],["button",{"onclick":{"h":["toSettings"]},"style":"align-self: flex-start; height: 36px; padding: 0 12px; border-radius: 18px; border: 1px solid #B9C4BF; background: #FFFFFF; font-family: inherit; font-size: 13px; color: #3F4743; cursor: pointer"},["목표 시간 바꾸기 (설정)"]]]],["section",{"style":"background: #FFFFFF; border-radius: 14px; border: 1px solid #E3E6E1; padding: 4px 12px"},[["div",{"style":"display: flex; align-items: center; min-height: 44px; border-bottom: 1px solid #EEF0EC"},[["span",{"style":"font-size: 15px; flex-grow: 1"},["영어 리딩 쪽수"]],["span",{"style":"font-size: 15px; font-weight: 700"},[["~",["",["readPages"],""]]]]]],["div",{"style":"display: flex; align-items: center; min-height: 44px; border-bottom: 1px solid #EEF0EC"},[["span",{"style":"font-size: 15px; flex-grow: 1"},["한글책 쪽수"]],["span",{"style":"font-size: 15px; font-weight: 700"},[["~",["",["koPages"],""]]]]]],["div",{"style":"display: flex; align-items: center; min-height: 44px; border-bottom: 1px solid #EEF0EC"},[["span",{"style":"font-size: 15px; flex-grow: 1"},["읽은 횟수 (다시 읽기 포함)"]],["span",{"style":"font-size: 15px; font-weight: 700"},[["~",["",["bookCount"],""]]]]]],["div",{"style":"display: flex; align-items: center; min-height: 44px"},[["span",{"style":"font-size: 15px; flex-grow: 1"},["서로 다른 책"]],["span",{"style":"font-size: 15px; font-weight: 700"},[["~",["",["distinctCount"],""]]]]]]]],["section",{"style":"background: #FFFFFF; border-radius: 14px; border: 1px solid #E3E6E1; padding: 12px; display: flex; flex-direction: column; gap: 8px"},[["div",{"style":"font-size: 14px; font-weight: 700"},[["~",["",["levelTitle"],""]]]],["div",{"style":"display: flex; height: 28px; border-radius: 8px; overflow: hidden; background: #E9ECE8"},[["*",["levelBars"],"v",[["div",{"style":{"h":["v","style"]}},[["~",["",["v","label"],""]]]]]]]]]],["?",["showCum"],[["section",{"style":"background: #1B1F1D; color: #FFFFFF; border-radius: 14px; padding: 14px; display: flex; flex-direction: column; gap: 4px"},[["div",{"style":"font-size: 13px; color: #C9D1CD"},[["~",["",["cumHead"],""]]]],["div",{"style":"font-size: 18px; font-weight: 700"},[["~",["",["cumLine1"],""]]]],["div",{"style":"font-size: 13px; color: #C9D1CD"},[["~",["",["cumLine2"],""]]]]]],["section",{"style":"background: #FFFFFF; border-radius: 14px; border: 1px solid #E3E6E1; padding: 4px 12px 8px"},[["div",{"style":"display: flex; align-items: center; min-height: 40px; font-size: 13px; font-weight: 700; color: #3F4743; border-bottom: 1px solid #EEF0EC"},[["span",{"style":"width: 44px"},["월"]],["span",{"style":"flex: 1; text-align: right"},["한글 횟수·쪽"]],["span",{"style":"flex: 1; text-align: right"},["영어 횟수·쪽"]]]],["*",["monthRows"],"mr",[["div",{"style":"display: flex; align-items: center; min-height: 36px; font-size: 14px; border-bottom: 1px solid #F1F2EF"},[["span",{"style":"width: 44px; font-weight: 700"},[["~",["",["mr","m"],""]]]],["span",{"style":"flex: 1; text-align: right"},[["~",["",["mr","ko"],""]]]],["span",{"style":"flex: 1; text-align: right"},[["~",["",["mr","en"],""]]]]]]]]]]]]]]]]]],["?",["isList"],[["div",{"style":"display: flex; flex-direction: column; height: calc(100dvh - 64px)"},[["header",{"style":"padding: 10px 12px 8px; background: #FFFFFF; border-bottom: 1px solid #E3E6E1; display: flex; flex-direction: column; gap: 8px"},[["div",{"style":"display: flex; gap: 6px"},[["*",["langBtns"],"o",[["button",{"onclick":{"h":["o","pick"]},"aria-pressed":{"h":["o","on"]},"style":{"m":["flex: 1; height: 52px; border-radius: 14px; font-family: inherit; font-size: 17px; font-weight: 700; cursor: pointer; ",["o","style"],""]}},[["~",["",["o","label"],""]]]]]],["button",{"onclick":{"h":["pickEtc"]},"aria-pressed":{"h":["etcOn"]},"style":{"m":["width: 60px; height: 52px; border-radius: 14px; font-family: inherit; font-size: 15px; font-weight: 700; flex-shrink: 0; cursor: pointer; ",["etcStyle"],""]}},["기타"]],["button",{"onclick":{"h":["openScan"]},"aria-label":"바코드 찍기","style":"width: 52px; height: 52px; border-radius: 14px; border: none; background: #1B1F1D; color: #FFFFFF; display: flex; align-items: center; justify-content: center; flex-shrink: 0; cursor: pointer"},[["svg",{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","aria-hidden":"true"},[["path",{"d":"M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2M7 8v8M10 8v8M14 8v8M17 8v8"},[]]]]]]]],["?",["hasSubs"],[["div",{"style":"display: flex; gap: 6px; align-items: center"},[["div",{"style":"flex-grow: 1; min-width: 0; display: flex; gap: 6px; overflow-x: auto; padding-bottom: 2px"},[["*",["subs"],"o",[["button",{"onclick":{"h":["o","pick"]},"aria-pressed":{"h":["o","on"]},"style":{"m":["flex-shrink: 0; height: 38px; padding: 0 14px; border-radius: 19px; font-family: inherit; font-size: 14px; white-space: nowrap; cursor: pointer; ",["o","style"],""]}},[["~",["",["o","label"],""]]]]]]]],["?",["showScope"],[["button",{"onclick":{"h":["scopeGo"]},"style":"flex-shrink: 0; height: 38px; padding: 0 4px 0 8px; border: none; background: transparent; font-family: inherit; font-size: 13px; color: #3F4743; display: flex; align-items: center; gap: 2px; cursor: pointer"},[["~",["",["scopeLabel"],""]],["svg",{"width":"14","height":"14","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","aria-hidden":"true"},[["path",{"d":"M9 18l6-6-6-6"},[]]]]]]]]]]]],["?",["hasSeg"],[["div",{"style":"display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 4px; background: #EEF0EC; border-radius: 10px; padding: 3px"},[["*",["segs"],"o",[["button",{"onclick":{"h":["o","pick"]},"aria-pressed":{"h":["o","on"]},"style":{"m":["height: 36px; border-radius: 8px; border: none; font-family: inherit; font-size: 14px; font-weight: 700; cursor: pointer; ",["o","style"],""]}},[["~",["",["o","label"],""]]]]]]]]]],["?",["hasSubs2"],[["div",{"style":"display: flex; gap: 6px; overflow-x: auto; padding-bottom: 2px"},[["*",["subs2"],"o",[["button",{"onclick":{"h":["o","pick"]},"aria-pressed":{"h":["o","on"]},"style":{"m":["flex-shrink: 0; height: 34px; padding: 0 12px; border-radius: 8px; font-family: inherit; font-size: 13px; white-space: nowrap; cursor: pointer; ",["o","style"],""]}},[["~",["",["o","label"],""]]]]]]]]]],["?",["isWeekly"],[["div",{"style":"display: flex; gap: 6px; align-items: center"},[["button",{"onclick":{"h":["prevMonth"]},"aria-label":"이전 달","style":"width: 30px; height: 34px; border: none; background: transparent; font-family: inherit; font-size: 16px; color: #3F4743; cursor: pointer"},["‹"]],["span",{"style":"height: 34px; padding: 0 8px; border-radius: 8px; background: #EEF0EC; font-size: 14px; font-weight: 700; display: flex; align-items: center"},[["~",["",["monthLabel"],""]]]],["button",{"onclick":{"h":["nextMonth"]},"aria-label":"다음 달","style":"width: 30px; height: 34px; border: none; background: transparent; font-family: inherit; font-size: 16px; color: #3F4743; cursor: pointer"},["›"]],["*",["weeks"],"w",[["button",{"onclick":{"h":["w","pick"]},"style":{"m":["height: 34px; min-width: 44px; padding: 0 8px; border-radius: 8px; font-family: inherit; font-size: 13px; cursor: pointer; ",["w","style"],""]}},[["~",["",["w","label"],""]]]]]]]]]],["?",["hasLevels"],[["div",{"style":"display: flex; gap: 5px; align-items: center"},[["*",["lvBtns"],"o",[["button",{"onclick":{"h":["o","pick"]},"aria-pressed":{"h":["o","on"]},"style":{"m":["flex: 1; min-width: 0; height: 36px; padding: 0 2px; border-radius: 8px; font-family: inherit; font-size: 13px; white-space: nowrap; cursor: pointer; ",["o","style"],""]}},[["~",["",["o","label"],""]]]]]]]],["?",["lvMoreOpen"],[["div",{"style":"display: flex; gap: 5px; align-items: center; background: #F4F5F2; border-radius: 10px; padding: 5px"},[["*",["lvMore"],"o",[["button",{"onclick":{"h":["o","pick"]},"aria-pressed":{"h":["o","on"]},"style":{"m":["flex: 1; min-width: 0; height: 34px; border-radius: 8px; font-family: inherit; font-size: 13px; cursor: pointer; ",["o","style"],""]}},[["~",["",["o","label"],""]]]]]]]]]]]],["?",["isEtc"],[["div",{"style":"display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px"},[["button",{"onclick":{"h":["openScan"]},"style":"height: 44px; border-radius: 12px; border: none; background: #E6F2EF; color: #0F5F55; font-family: inherit; font-size: 15px; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 6px; cursor: pointer"},[["svg",{"width":"20","height":"20","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","aria-hidden":"true"},[["path",{"d":"M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2M7 8v8M10 8v8M14 8v8M17 8v8"},[]]]],"바코드 찍기"]],["button",{"onclick":{"h":["openManual"]},"style":"height: 44px; border-radius: 12px; border: 1px solid #B9C4BF; background: #FFFFFF; color: #1B1F1D; font-family: inherit; font-size: 15px; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 6px; cursor: pointer"},[["svg",{"width":"20","height":"20","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","aria-hidden":"true"},[["path",{"d":"M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.3-4.3"},[]]]],"찾기 · 직접 입력"]]]],["div",{"style":"display: flex; gap: 6px"},[["*",["etcLangs"],"o",[["button",{"onclick":{"h":["o","pick"]},"style":{"m":["height: 34px; padding: 0 12px; border-radius: 17px; font-family: inherit; font-size: 13px; cursor: pointer; ",["o","style"],""]}},[["~",["",["o","label"],""]]]]]]]]]],["div",{"style":"display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 4px; background: #EEF0EC; border-radius: 12px; padding: 4px"},[["button",{"onclick":{"h":["toTodo"]},"style":{"m":["height: 40px; border-radius: 9px; border: none; font-family: inherit; font-size: 15px; font-weight: 700; cursor: pointer; ",["todoStyle"],""]}},[["~",["",["todoLabel"],""]]]],["button",{"onclick":{"h":["toDone"]},"style":{"m":["height: 40px; border-radius: 9px; border: none; font-family: inherit; font-size: 15px; font-weight: 700; cursor: pointer; ",["doneStyle"],""]}},[["~",["",["doneLabel"],""]]]]]],["?",["showProg"],[["div",{"style":"display: flex; align-items: center; gap: 8px"},[["div",{"style":"flex-grow: 1; height: 6px; background: #E3E6E1; border-radius: 3px; overflow: hidden"},[["div",{"style":{"h":["progStyle"]}},[]]]],["span",{"style":"font-size: 12px; color: #3F4743"},[["~",["",["progText"],""]]]]]]]]]],["main",{"style":"flex-grow: 1; overflow-y: auto; padding: 8px 12px 88px; display: flex; flex-direction: column; gap: 8px"},[["?",["listNote"],[["div",{"style":"font-size: 13px; line-height: 1.45; color: #7C2D12; background: #FBEDE4; border-radius: 10px; padding: 8px 10px"},[["~",["",["listNote"],""]]]]]],["?",["showViewToggle"],[["div",{"style":"display: flex; gap: 6px"},[["button",{"onclick":{"h":["toOrder"]},"style":{"m":["height: 36px; padding: 0 12px; border-radius: 18px; font-family: inherit; font-size: 13px; cursor: pointer; ",["orderStyle"],""]}},[["~",["",["orderLabel"],""]]]],["button",{"onclick":{"h":["toLib"]},"style":{"m":["height: 36px; padding: 0 12px; border-radius: 18px; font-family: inherit; font-size: 13px; cursor: pointer; ",["libStyle"],""]}},["도서관별 · 분류번호순"]]]]]],["*",["groups"],"g",[["div",{"style":"display: flex; flex-direction: column; gap: 6px"},[["div",{"style":"font-size: 13px; font-weight: 700; color: #3F4743; padding: 6px 2px 0"},[["~",["",["g","title"],""]]]],["*",["g","items"],"b",[["div",{"style":"background: #FFFFFF; border: 1px solid #E3E6E1; border-radius: 12px; padding: 8px 8px 8px 4px; display: flex; gap: 4px; align-items: flex-start"},[["button",{"onclick":{"h":["b","act"]},"aria-label":{"h":["b","actLabel"]},"style":"width: 44px; height: 44px; border: none; background: transparent; display: flex; align-items: center; justify-content: center; flex-shrink: 0; cursor: pointer"},[["span",{"style":{"h":["b","boxStyle"]}},[["~",["",["b","boxMark"],""]]]]]],["div",{"style":"flex-grow: 1; min-width: 0; display: flex; flex-direction: column; gap: 3px; padding-top: 4px"},[["?",["b","cn"],[["div",{"style":"font-size: 16px; font-weight: 700; color: #0F5F55"},[["~",["",["b","cn"],""]]]]]],["div",{"style":"font-size: 16px; font-weight: 700; line-height: 1.35"},[["~",["",["b","title"],""]]]],["?",["b","meta"],[["div",{"style":"font-size: 13px; color: #5B6460; line-height: 1.4"},[["~",["",["b","meta"],""]]]]]],["?",["b","dateLabel"],[["button",{"onclick":{"h":["b","editDates"]},"style":"align-self: flex-start; min-height: 36px; padding: 0 10px; margin-top: 2px; border-radius: 18px; border: 1px solid #B9C4BF; background: #FFFFFF; font-family: inherit; font-size: 13px; color: #1B1F1D; display: flex; align-items: center; gap: 6px; cursor: pointer"},[["~",["",["b","dateLabel"],""]],["svg",{"width":"14","height":"14","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","aria-hidden":"true"},[["path",{"d":"M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4 12.5-12.5z"},[]]]]]]]],["?",["b","hasChips"],[["div",{"style":"display: flex; flex-wrap: wrap; gap: 4px; margin-top: 2px"},[["*",["b","chips"],"x",[["span",{"style":{"h":["x","style"]}},[["~",["",["x","text"],""]]]]]]]]]]]],["?",["b","showAgain"],[["button",{"onclick":{"h":["b","again"]},"style":"align-self: center; height: 44px; padding: 0 12px; border-radius: 22px; border: none; background: #E6F2EF; color: #0F5F55; font-family: inherit; font-size: 14px; font-weight: 700; flex-shrink: 0; cursor: pointer"},["또 읽음"]]]],["?",["b","canRemove"],[["button",{"onclick":{"h":["b","remove"]},"aria-label":{"h":["b","removeLabel"]},"style":"width: 44px; height: 44px; border: none; background: transparent; display: flex; align-items: center; justify-content: center; flex-shrink: 0; cursor: pointer"},[["svg",{"width":"16","height":"16","viewBox":"0 0 24 24","fill":"none","stroke":"#5B6460","stroke-width":"2","aria-hidden":"true"},[["path",{"d":"M18 6L6 18M6 6l12 12"},[]]]]]]]]]]]]]]]],["?",["showMore"],[["button",{"onclick":{"h":["moreGo"]},"style":"height: 48px; border-radius: 12px; border: 1px solid #B9C4BF; background: #FFFFFF; font-family: inherit; font-size: 15px; color: #1B1F1D; cursor: pointer"},[["~",["",["moreLabel"],""]]]]]],["?",["emptyAll"],[["div",{"style":"padding: 32px 12px; text-align: center; font-size: 14px; line-height: 1.5; color: #5B6460"},[["~",["",["emptyText"],""]]]]]]]]]]]],["?",["isSettings"],[["div",{"style":"display: flex; flex-direction: column; height: calc(100dvh - 64px)"},[["header",{"style":"padding: 16px; background: #FFFFFF; border-bottom: 1px solid #E3E6E1"},[["div",{"style":"font-size: 19px; font-weight: 700"},["설정"]],["div",{"style":"font-size: 12px; color: #5B6460; margin-top: 2px"},["한 번 정하면 바꾸기 전까지 계속 적용돼요"]]]],["main",{"style":"flex-grow: 1; overflow-y: auto; padding: 12px 12px 24px; display: flex; flex-direction: column; gap: 10px"},[["section",{"style":"background: #FFFFFF; border-radius: 14px; border: 1px solid #E3E6E1; padding: 12px; display: flex; flex-direction: column; gap: 10px"},[["div",{"style":"display: flex; align-items: baseline; gap: 6px"},[["span",{"style":"font-size: 15px; font-weight: 700"},["학년"]],["span",{"style":"font-size: 12px; color: #5B6460"},["여러 개 고를 수 있어요"]]]],["div",{"style":"display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 6px"},[["*",["grades"],"o",[["button",{"onclick":{"h":["o","pick"]},"aria-pressed":{"h":["o","on"]},"style":{"m":["height: 44px; border-radius: 10px; font-family: inherit; font-size: 15px; cursor: pointer; ",["o","style"],""]}},[["~",["",["o","label"],""]]]]]]]],["div",{"style":"display: flex; align-items: baseline; gap: 6px; padding-top: 2px"},[["span",{"style":"font-size: 15px; font-weight: 700"},["위클리 플랜"]],["span",{"style":"font-size: 12px; color: #5B6460"},["여러 개 고를 수 있어요"]]]],["div",{"style":"display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 6px"},[["*",["plans"],"o",[["button",{"onclick":{"h":["o","pick"]},"aria-pressed":{"h":["o","on"]},"style":{"m":["height: 44px; border-radius: 10px; font-family: inherit; font-size: 15px; cursor: pointer; ",["o","style"],""]}},[["~",["",["o","label"],""]]]]]]]],["div",{"style":"font-size: 13px; line-height: 1.5; color: #3F4743; background: #F4F5F2; border-radius: 10px; padding: 8px 10px"},[["~",["",["scopeSummary"],""]]]]]],["section",{"style":"background: #FFFFFF; border-radius: 14px; border: 1px solid #E3E6E1; padding: 4px 12px 8px"},[["div",{"style":"font-size: 15px; font-weight: 700; padding: 10px 0 4px"},["하루 목표 시간"]],["*",["goalEdit"],"g",[["div",{"style":"display: flex; align-items: center; gap: 8px; min-height: 56px; border-bottom: 1px solid #EEF0EC"},[["span",{"style":{"m":["width: 10px; height: 10px; border-radius: 5px; background: ",["g","color"],""]}},[]],["span",{"style":"font-size: 15px; flex-grow: 1"},[["~",["",["g","name"],""]]]],["button",{"onclick":{"h":["g","down"]},"aria-label":{"h":["g","downLabel"]},"style":"width: 44px; height: 44px; border-radius: 12px; border: 1px solid #B9C4BF; background: #FFFFFF; font-family: inherit; font-size: 20px; cursor: pointer"},["−"]],["span",{"style":"width: 64px; text-align: center; font-size: 17px; font-weight: 700"},[["~",["",["g","value"],""]]]],["button",{"onclick":{"h":["g","up"]},"aria-label":{"h":["g","upLabel"]},"style":"width: 44px; height: 44px; border-radius: 12px; border: 1px solid #B9C4BF; background: #FFFFFF; font-family: inherit; font-size: 20px; cursor: pointer"},["+"]]]]]],["div",{"style":"font-size: 12px; color: #5B6460; padding-top: 8px"},["5분 단위 · 통계의 '목표 대비 %'가 이 값으로 계산돼요"]]]],["section",{"style":"background: #FFFFFF; border-radius: 14px; border: 1px solid #E3E6E1; padding: 12px; display: flex; flex-direction: column; gap: 6px"},[["div",{"style":"font-size: 15px; font-weight: 700"},["소장을 보여줄 도서관"]],["div",{"style":"font-size: 14px"},["1. 강북문화정보도서관"]],["div",{"style":"font-size: 14px"},["2. 월계도서관"]],["div",{"style":"font-size: 14px"},["3. 장위행복누림도서관"]],["div",{"style":"font-size: 14px; color: #5B6460"},["예비 · 월계어린이도서관 (세 곳에 없을 때 표시)"]],["div",{"style":"font-size: 12px; color: #5B6460; line-height: 1.5"},[["~",["",["ownNote"],""]]]]]],["section",{"style":"background: #FFFFFF; border-radius: 14px; border: 1px solid #E3E6E1; padding: 12px; display: flex; flex-direction: column; gap: 8px"},[["div",{"style":"font-size: 15px; font-weight: 700"},["저장 · 가족"]],["div",{"style":{"m":["font-size: 14px; line-height: 1.45; color: ",["syncColor"],""]}},[["~",["",["syncText"],""]]]],["div",{"style":"display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px"},[["button",{"onclick":{"h":["syncNow"]},"style":"height: 44px; border-radius: 10px; border: 1px solid #B9C4BF; background: #FFFFFF; font-family: inherit; font-size: 14px; color: #1B1F1D; cursor: pointer"},["지금 저장·불러오기"]],["button",{"onclick":{"h":["copyFamilyLink"]},"style":"height: 44px; border-radius: 10px; border: 1px solid #B9C4BF; background: #FFFFFF; font-family: inherit; font-size: 14px; color: #1B1F1D; cursor: pointer"},["가족 설치 링크 복사"]]]],["div",{"style":"font-size: 12px; color: #5B6460"},[["~",["",["dataVersion"],""]]]]]],["button",{"onclick":{"h":["exportXlsx"]},"style":"height: 48px; border-radius: 12px; border: 1px solid #0F766E; background: #FFFFFF; color: #0F5F55; font-family: inherit; font-size: 15px; font-weight: 700; cursor: pointer"},["기록 전체를 엑셀로 내려받기"]]]]]]]],["?",["toastShow"],[["div",{"style":"position: absolute; left: 12px; right: 12px; bottom: 76px; background: #1B1F1D; color: #FFFFFF; border-radius: 12px; padding: 4px 4px 4px 14px; display: flex; align-items: center; gap: 8px"},[["span",{"style":"flex-grow: 1; font-size: 14px; line-height: 1.4; padding: 8px 0"},[["~",["",["toastText"],""]]]],["?",["toastUndo"],[["button",{"onclick":{"h":["undo"]},"style":"height: 44px; padding: 0 12px; border: none; background: transparent; color: #7DD3C0; font-family: inherit; font-size: 14px; font-weight: 700; flex-shrink: 0; cursor: pointer"},["되돌리기"]]]],["?",["toastClose"],[["button",{"onclick":{"h":["closeToast"]},"style":"height: 44px; padding: 0 12px; border: none; background: transparent; color: #7DD3C0; font-family: inherit; font-size: 14px; font-weight: 700; flex-shrink: 0; cursor: pointer"},["확인"]]]]]]]],["nav",{"style":"position: absolute; left: 0; right: 0; bottom: 0; height: 64px; background: #FFFFFF; border-top: 1px solid #E3E6E1; display: flex"},[["*",["navs"],"n",[["button",{"onclick":{"h":["n","pick"]},"style":{"m":["flex: 1; border: none; background: transparent; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px; font-family: inherit; font-size: 12px; cursor: pointer; ",["n","style"],""]}},[["svg",{"width":"22","height":"22","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","aria-hidden":"true"},[["path",{"d":{"h":["n","icon"]}},[]]]],["~",["",["n","label"],""]]]]]]]],["?",["levelOpen"],[["div",{"style":"position: absolute; inset: 0; background: rgba(20,24,22,0.45); display: flex; flex-direction: column; justify-content: flex-end"},[["button",{"onclick":{"h":["closeSheet"]},"aria-label":"닫기","style":"flex-grow: 1; border: none; background: transparent; cursor: pointer"},[]],["div",{"style":"background: #FFFFFF; border-radius: 20px 20px 0 0; padding: 16px 16px 24px; display: flex; flex-direction: column; gap: 12px"},[["div",{"style":"font-size: 18px; font-weight: 700"},[["~",["",["sheetTitle"],""]]]],["div",{"style":"display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 8px"},[["*",["levelOptions"],"o",[["button",{"onclick":{"h":["o","pick"]},"style":{"m":["height: 44px; border-radius: 10px; font-family: inherit; font-size: 15px; font-weight: 700; cursor: pointer; ",["o","style"],""]}},[["~",["",["o","label"],""]]]]]]]],["div",{"style":"font-size: 12px; color: #5B6460"},["고른 레벨은 다음에도 그대로 쓰여요"]]]]]]]],["?",["askOpen"],[["div",{"style":"position: absolute; inset: 0; background: rgba(20,24,22,0.45); display: flex; flex-direction: column; justify-content: flex-end"},[["button",{"onclick":{"h":["closeSheet"]},"aria-label":"닫기","style":"flex-grow: 1; border: none; background: transparent; cursor: pointer"},[]],["div",{"style":"background: #FFFFFF; border-radius: 20px 20px 0 0; padding: 16px 16px 24px; display: flex; flex-direction: column; gap: 12px"},[["div",{"style":"font-size: 18px; font-weight: 700; line-height: 1.35"},[["~",["",["askTitle"],""]]]],["div",{"style":"font-size: 14px; color: #3F4743"},["대략 몇 쪽인지 골라 주세요. 한 번 고르면 이 책은 계속 그 쪽수로 기록돼요."]],["div",{"style":"display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 8px"},[["*",["askOptions"],"o",[["button",{"onclick":{"h":["o","pick"]},"style":"height: 48px; border-radius: 10px; border: 1px solid #B9C4BF; background: #FFFFFF; font-family: inherit; font-size: 15px; font-weight: 700; color: #1B1F1D; cursor: pointer"},[["~",["",["o","label"],""]]]]]]]],["button",{"onclick":{"h":["askSkip"]},"style":"height: 44px; border: none; background: transparent; font-family: inherit; font-size: 14px; color: #3F4743; text-decoration: underline; cursor: pointer"},["쪽수 없이 읽음만 체크"]]]]]]]],["?",["manualOpen"],[["div",{"style":"position: absolute; inset: 0; background: rgba(20,24,22,0.45); display: flex; flex-direction: column; justify-content: flex-end"},[["button",{"onclick":{"h":["closeSheet"]},"aria-label":"닫기","style":"flex-grow: 1; min-height: 40px; border: none; background: transparent; cursor: pointer"},[]],["div",{"style":"background: #FFFFFF; border-radius: 20px 20px 0 0; padding: 16px 16px 24px; display: flex; flex-direction: column; gap: 10px"},[["div",{"style":"display: flex; align-items: baseline; gap: 8px"},[["span",{"style":"font-size: 18px; font-weight: 700"},["찾기 · 직접 입력"]],["span",{"style":"font-size: 12px; color: #5B6460"},["바코드가 안 될 때"]]]],["label",{"for":"m-title","style":"font-size: 13px; font-weight: 700; color: #3F4743"},["책 제목 ",["span",{"style":"font-weight: 400; color: #5B6460"},["(일부만 쳐도 잠수네 책을 찾아요)"]]]],["input",{"id":"m-title","type":"text","value":{"h":["mTitle"]},"onchange":{"h":["onTitle"]},"placeholder":"예: Piggies, 꽁꽁꽁","style":"height: 48px; border-radius: 10px; border: 1px solid #8A9590; padding: 0 12px; font-family: inherit; font-size: 16px; color: #1B1F1D; box-sizing: border-box; width: 100%"},[]],["?",["mErr"],[["div",{"style":"font-size: 13px; color: #B91C1C"},[["~",["",["mErr"],""]]]]]],["?",["mHasSugs"],[["div",{"style":"font-size: 12px; color: #5B6460"},["잠수네 책에서 찾았어요 · 누르면 책 정보가 떠요"]],["div",{"style":"display: flex; flex-direction: column; border: 1px solid #E3E6E1; border-radius: 12px"},[["*",["mSugs"],"o",[["button",{"onclick":{"h":["o","pick"]},"style":"min-height: 52px; border: none; border-bottom: 1px solid #EEF0EC; background: #FFFFFF; text-align: left; padding: 6px 12px; font-family: inherit; display: flex; flex-direction: column; justify-content: center; gap: 2px; cursor: pointer"},[["span",{"style":"font-size: 15px; font-weight: 700; color: #1B1F1D"},[["~",["",["o","label"],""]]]],["span",{"style":"font-size: 12px; color: #5B6460"},[["~",["",["o","sub"],""]]]]]]]]]],["button",{"onclick":{"h":["mExpandGo"]},"style":"height: 40px; border: none; background: transparent; font-family: inherit; font-size: 14px; color: #0F5F55; font-weight: 700; cursor: pointer"},["찾는 책이 없어요 · 이 제목으로 직접 넣기"]]]],["?",["mShowFields"],[["div",{"style":"display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 6px"},[["*",["mLangs"],"o",[["button",{"onclick":{"h":["o","pick"]},"aria-pressed":{"h":["o","on"]},"style":{"m":["height: 44px; border-radius: 10px; font-family: inherit; font-size: 15px; cursor: pointer; ",["o","style"],""]}},[["~",["",["o","label"],""]]]]]]]],["label",{"for":"m-pages","style":"font-size: 13px; font-weight: 700; color: #3F4743"},["쪽수 ",["span",{"style":"font-weight: 400; color: #5B6460"},["(모르면 비워 두세요)"]]]],["input",{"id":"m-pages","type":"number","min":"1","value":{"h":["mPages"]},"onchange":{"h":["onPages"]},"placeholder":"예: 32","style":"height: 48px; border-radius: 10px; border: 1px solid #8A9590; padding: 0 12px; font-family: inherit; font-size: 16px; color: #1B1F1D; box-sizing: border-box; width: 100%"},[]],["?",["mIsEn"],[["div",{"style":"font-size: 13px; font-weight: 700; color: #3F4743"},["레벨 ",["span",{"style":"font-weight: 400; color: #5B6460"},["(아는 경우만)"]]]],["div",{"style":"display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 6px"},[["*",["mLevels"],"o",[["button",{"onclick":{"h":["o","pick"]},"aria-pressed":{"h":["o","on"]},"style":{"m":["height: 40px; border-radius: 10px; font-family: inherit; font-size: 14px; cursor: pointer; ",["o","style"],""]}},[["~",["",["o","label"],""]]]]]]]]]],["div",{"style":"display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; padding-top: 4px"},[["button",{"onclick":{"h":["mSaveTodo"]},"style":"height: 52px; border-radius: 12px; border: 1px solid #0F766E; background: #FFFFFF; color: #0F5F55; font-family: inherit; font-size: 15px; font-weight: 700; cursor: pointer"},["읽을 책에 담기"]],["button",{"onclick":{"h":["mSaveRead"]},"style":"height: 52px; border-radius: 12px; border: none; background: #0F766E; color: #FFFFFF; font-family: inherit; font-size: 15px; font-weight: 700; cursor: pointer"},["오늘 읽음 기록"]]]]]]]]]]]],["?",["datesOpen"],[["div",{"style":"position: absolute; inset: 0; background: rgba(20,24,22,0.45); display: flex; flex-direction: column; justify-content: flex-end"},[["button",{"onclick":{"h":["dDone"]},"aria-label":"닫기","style":"flex-grow: 1; border: none; background: transparent; cursor: pointer"},[]],["div",{"style":"background: #FFFFFF; border-radius: 20px 20px 0 0; padding: 16px 16px 24px; display: flex; flex-direction: column; gap: 8px"},[["div",{"style":"font-size: 18px; font-weight: 700; line-height: 1.35"},[["~",["",["dTitle"],""]]]],["div",{"style":"font-size: 13px; color: #3F4743; line-height: 1.45"},["날짜를 누르면 달력이 떠요. 날짜를 바꾸면 그날 쪽수 기록도 같이 옮겨져요."]],["*",["dRows"],"r",[["div",{"style":"display: flex; align-items: center; gap: 8px; min-height: 56px; border-bottom: 1px solid #EEF0EC"},[["label",{"for":{"h":["r","inputId"]},"style":"width: 56px; font-size: 14px; color: #3F4743; flex-shrink: 0"},[["~",["",["r","nth"],""]]]],["input",{"id":{"h":["r","inputId"]},"type":"date","value":{"h":["r","iso"]},"max":{"h":["r","max"]},"onchange":{"h":["r","change"]},"style":"flex-grow: 1; min-width: 0; height: 44px; border-radius: 10px; border: 1px solid #8A9590; padding: 0 10px; font-family: inherit; font-size: 16px; color: #1B1F1D; box-sizing: border-box"},[]],["button",{"onclick":{"h":["r","del"]},"aria-label":{"h":["r","delLabel"]},"style":"width: 44px; height: 44px; border: none; background: transparent; display: flex; align-items: center; justify-content: center; flex-shrink: 0; cursor: pointer"},[["svg",{"width":"18","height":"18","viewBox":"0 0 24 24","fill":"none","stroke":"#5B6460","stroke-width":"2","aria-hidden":"true"},[["path",{"d":"M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"},[]]]]]]]]]],["button",{"onclick":{"h":["dDone"]},"style":"height: 52px; margin-top: 6px; border-radius: 12px; border: none; background: #0F766E; color: #FFFFFF; font-family: inherit; font-size: 16px; font-weight: 700; cursor: pointer"},["다 고쳤어요"]]]]]]]],["?",["scanOpen"],[["div",{"style":"position: absolute; inset: 0; background: #111413; color: #FFFFFF; display: flex; flex-direction: column"},[["div",{"style":"display: flex; align-items: center; padding: 8px 8px 4px 16px"},[["span",{"style":"font-size: 17px; font-weight: 700; flex-grow: 1"},["바코드 찍기"]],["?",["scanCountText"],[["span",{"style":"font-size: 13px; font-weight: 700; color: #7DD3C0; margin-right: 4px"},[["~",["",["scanCountText"],""]]]]]],["button",{"onclick":{"h":["closeScan"]},"aria-label":"바코드 찍기 닫기","style":"width: 44px; height: 44px; border: none; background: transparent; color: #FFFFFF; display: flex; align-items: center; justify-content: center; cursor: pointer"},[["svg",{"width":"22","height":"22","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","aria-hidden":"true"},[["path",{"d":"M18 6L6 18M6 6l12 12"},[]]]]]]]],["div",{"style":"padding: 0 16px; font-size: 13px; line-height: 1.45; color: #E5E7EB"},["찍으면 책 정보가 떠요. 읽은 책이면 '오늘 읽음 기록'을 누르고, 아니면 바깥을 눌러 닫으면 돼요."]],["div",{"style":"flex-grow: 1; margin: 10px 16px 0; border-radius: 16px; background: #2A2F2D; position: relative; display: flex; align-items: center; justify-content: center; min-height: 200px; overflow: hidden"},[["video",{"ref":{"h":["videoRef"]},"playsinline":"playsinline","muted":"muted","style":"position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover"},[]],["div",{"style":"width: 240px; height: 120px; border: 3px solid #7DD3C0; border-radius: 12px; position: relative"},[["div",{"style":"position: absolute; left: 12px; right: 12px; top: 58px; height: 2px; background: #F87171"},[]]]],["div",{"style":"position: absolute; left: 16px; right: 16px; bottom: 12px; text-align: center; font-size: 13px; line-height: 1.5; color: #E5E7EB"},["뒤표지의 ISBN 바코드(978·979로 시작)만 읽어요"]]]],["div",{"style":"padding: 12px 16px 16px; display: flex; flex-direction: column; gap: 8px; position: relative"},[["div",{"style":"font-size: 14px; line-height: 1.45; color: #E5E7EB; min-height: 40px"},[["~",["",["scanStatus"],""]]]],["?",["scanPhoto"],[["label",{"style":"height: 46px; border-radius: 12px; border: 1px solid #4B5552; background: #1F2422; color: #FFFFFF; display: flex; align-items: center; justify-content: center; font-size: 15px; cursor: pointer"},["사진으로 찍어서 읽기",["input",{"type":"file","accept":"image/*","capture":"environment","onchange":{"h":["onPhoto"]},"style":"display: none"},[]]]]]],["button",{"onclick":{"h":["openManual"]},"style":"height: 44px; border: none; background: transparent; color: #7DD3C0; font-family: inherit; font-size: 15px; font-weight: 700; cursor: pointer"},["바코드가 없거나 안 찍혀요 · 제목으로 찾기"]],["?",["scanToastShow"],[["div",{"style":"position: absolute; left: 12px; right: 12px; bottom: 12px; background: #FFFFFF; color: #1B1F1D; border-radius: 12px; padding: 4px 4px 4px 14px; display: flex; align-items: center; gap: 8px"},[["svg",{"width":"20","height":"20","viewBox":"0 0 24 24","fill":"none","stroke":"#0F766E","stroke-width":"2.5","aria-hidden":"true","style":"flex-shrink: 0"},[["path",{"d":"M20 6L9 17l-5-5"},[]]]],["span",{"style":"flex-grow: 1; font-size: 14px; line-height: 1.4; padding: 8px 0"},[["~",["",["toastText"],""]]]],["button",{"onclick":{"h":["undo"]},"style":"height: 44px; padding: 0 12px; border: none; background: transparent; color: #0F5F55; font-family: inherit; font-size: 14px; font-weight: 700; flex-shrink: 0; cursor: pointer"},["되돌리기"]]]]]]]]]]]],["?",["resOpen"],[["div",{"style":"position: absolute; inset: 0; background: rgba(10,12,11,0.45)"},[["button",{"onclick":{"h":["resClose"]},"aria-label":"책 정보 닫기","style":"width: 100%; height: 100%; border: none; background: transparent; cursor: pointer"},[]]]],["div",{"style":"position: absolute; left: 0; right: 0; bottom: 0; max-height: 640px; overflow-y: auto; background: #FFFFFF; color: #1B1F1D; border-radius: 20px 20px 0 0; padding: 10px 16px 20px; display: flex; flex-direction: column; gap: 9px; box-sizing: border-box"},[["div",{"style":"align-self: center; width: 40px; height: 4px; border-radius: 2px; background: #C9CFCB"},[]],["div",{"style":"font-size: 12px; color: #5B6460; text-align: center"},[["~",["",["rCloseHint"],""]]]],["div",{"style":"font-size: 12px; color: #5B6460"},[["~",["",["rKicker"],""]]]],["div",{"style":"font-size: 20px; font-weight: 700; line-height: 1.3"},[["~",["",["rTitle"],""]]]],["div",{"style":"font-size: 14px; color: #3F4743; line-height: 1.45"},[["~",["",["rSub"],""]]]],["?",["rX"],[["div",{"style":"font-size: 13px; color: #3F4743"},[["~",["",["rX"],""]]]]]],["?",["rBadge"],[["div",{"style":{"h":["rBadgeStyle"]}},[["~",["",["rBadge"],""]]]]]],["div",{"style":{"m":["font-size: 15px; font-weight: 700; color: ",["rHistColor"],""]}},[["~",["",["rHist"],""]]]],["?",["rHasChips"],[["div",{"style":"display: flex; flex-wrap: wrap; gap: 4px"},[["*",["rChips"],"x",[["span",{"style":{"h":["x","style"]}},[["~",["",["x","text"],""]]]]]]]]]],["?",["rShowLang"],[["div",{"style":"font-size: 13px; font-weight: 700; color: #3F4743"},["어떤 책인가요?"]],["div",{"style":"display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 6px"},[["*",["rLangs"],"o",[["button",{"onclick":{"h":["o","pick"]},"aria-pressed":{"h":["o","on"]},"style":{"m":["height: 44px; border-radius: 10px; font-family: inherit; font-size: 15px; cursor: pointer; ",["o","style"],""]}},[["~",["",["o","label"],""]]]]]]]]]],["?",["rShowPages"],[["div",{"style":"font-size: 14px; color: #3F4743"},["쪽수 정보가 없어요. 대략 몇 쪽인지 누르면 바로 기록돼요."]],["div",{"style":"display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 6px"},[["*",["rPageOpts"],"o",[["button",{"onclick":{"h":["o","pick"]},"style":"height: 52px; border-radius: 10px; border: none; background: #0F766E; color: #FFFFFF; font-family: inherit; font-size: 15px; font-weight: 700; cursor: pointer"},[["~",["",["o","label"],""]]]]]]]],["button",{"onclick":{"h":["rSkipPages"]},"style":"height: 40px; border: none; background: transparent; font-family: inherit; font-size: 14px; color: #3F4743; text-decoration: underline; cursor: pointer"},["쪽수 없이 기록"]]]],["?",["rShowBtn"],[["button",{"onclick":{"h":["rBtn"]},"style":"height: 56px; margin-top: 4px; border-radius: 14px; border: none; background: #0F766E; color: #FFFFFF; font-family: inherit; font-size: 17px; font-weight: 700; cursor: pointer"},[["~",["",["rBtnLabel"],""]]]]]]]]]]]]];
// ---- 화면 틀(템플릿) → Preact 그리기
const TYPED_INPUT = { text: 1, number: 1, search: 1, email: 1, tel: 1, url: 1, password: 1 };
function pv(L, p) { let x = L[p[0]]; for (let i = 1; i < p.length && x != null; i++) x = x[p[i]]; return x; }
function ps(x) { return x == null || x === false ? '' : String(x); }
function joinParts(parts, L) { let s = ''; for (let i = 0; i < parts.length; i++) s += i % 2 ? ps(pv(L, parts[i])) : parts[i]; return s; }
function attrOf(a, L) { return typeof a === 'string' ? a : a.h ? pv(L, a.h) : joinParts(a.m, L); }
function kidsOf(list, L) { const out = new Array(list.length); for (let i = 0; i < list.length; i++) out[i] = nodeOf(list[i], L); return out; }
function nodeOf(n, L) {
  if (typeof n === 'string') return n;
  const t = n[0];
  if (t === '~') return joinParts(n[1], L);
  // 조건·반복은 항상 한 칸(Fragment)을 차지해서 옆 요소가 밀리지 않게
  if (t === '?') return h(Fragment, null, pv(L, n[1]) ? kidsOf(n[2], L) : null);
  if (t === '*') {
    const arr = pv(L, n[1]) || [];
    return h(Fragment, null, arr.map((it, i) => { const L2 = Object.create(L); L2[n[2]] = it; return h(Fragment, { key: i }, kidsOf(n[3], L2)); }));
  }
  const A = n[1], props = {};
  for (const k in A) {
    const v = attrOf(A[k], L);
    if (k === 'onclick') props.onClick = v;
    else if (k === 'onchange') {
      const typ = typeof A.type === 'string' ? A.type : 'text';
      props[t === 'textarea' || (t === 'input' && TYPED_INPUT[typ]) ? 'onInput' : 'onChange'] = v;
    } else if (k.startsWith('aria-')) { if (v != null && v !== '') props[k] = String(v); }
    else if (k === 'value') props.value = v == null ? '' : v;
    else props[k] = v;
  }
  return h(t, props, kidsOf(n[2], L));
}

// ---- 화면 논리의 바탕 (setState는 바로 반영, 그리기는 모아서)
class DCLogic {
  constructor(props) { this.props = props; this.state = {}; }
  setState(p) {
    const prev = this.state;
    this.state = Object.assign({}, prev, typeof p === 'function' ? p(prev) : p);
    if (this.props.onChange) this.props.onChange(prev, this.state);
  }
}

class App extends PComponent {
  componentDidMount() { this.props.logic.props.redraw = () => this.forceUpdate(); }
  render() {
    let v;
    try { v = this.props.logic.renderVals(); }
    catch (e) { console.error(e); return h('div', { style: 'padding: 24px; font-size: 15px; line-height: 1.6' }, '화면을 그리다 문제가 생겼어요. 앱을 닫았다 다시 열어 주세요. (' + e.message + ')'); }
    return h(Fragment, null, kidsOf(TPL, v));
  }
}

const ACTS = [
  { key: 'jip', name: '집중듣기', color: '#0F766E', soft: '#E6F2EF', ink: '#0F5F55', lv: 'en' },
  { key: 'video', name: '영상', color: '#2563EB', soft: '#E7EEFD', ink: '#1E40AF', lv: 'vd' },
  { key: 'audio', name: '음원 흘려듣기', color: '#7C3AED', soft: '#F0EAFD', ink: '#5B21B6', lv: null },
  { key: 'read', name: '리딩', color: '#0891B2', soft: '#E3F4F8', ink: '#0E6A82', lv: 'en' },
  { key: 'kor', name: '한글책 읽기', color: '#C2410C', soft: '#FBEDE4', ink: '#9A3412', lv: null },
];
const QUICK = [5, 10, 30];
const LV = {
  en: ['J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'J10'],
  vd: ['JD1', 'JD2', 'JD3', 'JD4', 'JD5', 'JD6', 'JD7', 'JD8', 'JD9', 'JD10'],
};
const DAYS = ['일', '월', '화', '수', '목', '금', '토'];
let TODAY = isoToday();
function pad2(n) { return ('0' + n).slice(-2); }
function isoOf(d) { return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate()); }
function isoToday() { return isoOf(new Date()); }
function addDays(iso, n) { const d = new Date(iso + 'T12:00:00'); d.setDate(d.getDate() + n); return isoOf(d); }
function fmtD(iso) { if (!iso) return ''; const [y, m, d] = iso.split('-').map(Number); return (y !== +TODAY.slice(0, 4) ? y + '년 ' : '') + m + '월 ' + d + '일'; }
function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 6); }
const GRADES = ['초1', '초2', '초3', '초4', '초5', '초6'];
const LIBN = ['강북문화정보', '월계', '장위행복누림'];
const LIBS = ['강북', '월계', '장위'];
let DATA = null, BK = {}, ALL = [], EB_RANK = {}, TITLE_IDX = {};
function initData(D) {
  DATA = D; BK = {}; EB_RANK = {}; TITLE_IDX = {};
  D.books.forEach((r) => {
    const b = { id: r[0], t: r[1], a: r[2], lv: r[3], rev: r[4], star: r[5], pg: r[6], lang: r[7] ? 'en' : 'ko', cat: r[8], ec: r[9], x: r[10], libs: [], sp: 0 };
    BK[b.id] = b;
    const k = normT(b.t);
    (TITLE_IDX[k] || (TITLE_IDX[k] = [])).push(b.id);
  });
  ALL = Object.values(BK);
  ISB = D.IS || {}; OWN_V = D.OWN_V || ''; LIB_DATA = !!D.OWN;
  // 도서관 소장: 강북·월계·장위 = libs [도서관, 분류번호], 월계어린이 = 예비(sp)
  if (D.OWN) Object.keys(D.OWN).forEach((id) => { const b = BK[id]; if (b) D.OWN[id].forEach((x) => { if (x[0] < 3) b.libs.push(x); else b.sp = x[1] || '있음'; }); });
  const c = {};
  D.EB.forEach((k) => { const g = k[1] + '|' + k[3]; c[g] = (c[g] || 0) + 1; EB_RANK[k[0] + '|' + k[1]] = c[g]; });
}
function normT(t) { return (t || '').toLowerCase().replace(/[\s'’!?,.:;~\-()\[\]"]/g, ''); }
const ECN = { pic: '그림책', rd: '리더스북', prd: '그림책같은리더스북', ch: '챕터북', nv: '소설', nf: '지식책', dc: '사전·만화', best: '베스트' };
const EN_SUBS = ['best', 'pic', 'rd', 'prd', 'ch', 'nv', 'nf', 'dc'];
const BEST_SUBS = ['pic', 'rd', 'prd', 'ch', 'nv', 'nf'];
const LV_MAIN = ['J1', 'J2', 'J3', 'J4', 'J5'];
const LV_MORE = ['J0', 'J6', 'J7', 'J8', 'J9', 'J10'];
const LV_ORDER = ['J0', 'J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'J10'];
const PAGE = 40;
let LIB_DATA = false, ISB = {}, OWN_V = '';   // 도서관 장서 자료가 붙으면 LIB_DATA = true, ISB = 바코드(ISBN) → 책
function toIso(d) { return d; }
function fromIso(v) { return /^\d{4}-\d{2}-\d{2}$/.test(v || '') ? v : ''; }
function lvIdx(l) { const i = LV_ORDER.indexOf(l); return i < 0 ? 99 : i; }
const NONE_BASE = { id: 'N1', t: '', a: '', lv: '', rev: 0, star: 0, pg: 0, lang: 'ko', cat: '', libs: [], sp: 0 };
const LEVEL_COLORS = ['#0F766E', '#5EAFA3', '#B7DCD5'];
const ICONS = {
  log: 'M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4 12.5-12.5z',
  stats: 'M4 20V10M10 20V4M16 20v-7M22 20H2',
  list: 'M4 19.5A2.5 2.5 0 016.5 17H20V3H6.5A2.5 2.5 0 004 5.5v14zM20 17v4H6.5',
  settings: 'M12 15a3 3 0 100-6 3 3 0 000 6zM19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.5-1.1 1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z',
};
const ON = 'border: none; background: #0F766E; color: #FFFFFF; font-weight: 700';
const OFF = 'border: 1px solid #B9C4BF; background: #FFFFFF; color: #3F4743';
const SEG_ON = 'background: #FFFFFF; color: #0F5F55';
const SEG_OFF = 'background: transparent; color: #5B6460';
const CHIP_MAIN = 'font-size: 13px; font-weight: 700; color: #0F5F55; background: #E6F2EF; border-radius: 6px; padding: 3px 7px';
const CHIP = 'font-size: 12px; color: #3F4743; background: #F1F2EF; border-radius: 6px; padding: 3px 7px';
const CHIP_DASH = 'font-size: 12px; color: #5B6460; border: 1px dashed #8A9590; border-radius: 6px; padding: 2px 6px';
const CHIP_WARN = 'font-size: 13px; color: #9A3412; font-weight: 500';
const CHIP_LV = 'font-size: 13px; font-weight: 700; color: #FFFFFF; background: #0E6A82; border-radius: 6px; padding: 3px 8px';
const CHIP_LVK = 'font-size: 12px; font-weight: 700; color: #9A3412; background: #FBEDE4; border-radius: 6px; padding: 3px 7px';
const CHIP_HOME = 'font-size: 12px; font-weight: 700; color: #5B21B6; background: #F0EAFD; border-radius: 6px; padding: 3px 7px';
const CHIP_TAG = 'font-size: 12px; color: #1E40AF; background: #E7EEFD; border-radius: 6px; padding: 3px 7px';
const BADGE = {
  list: 'font-size: 14px; line-height: 1.45; font-weight: 700; color: #9A3412; background: #FBEDE4; border-radius: 10px; padding: 8px 10px',
  jam: 'font-size: 14px; line-height: 1.45; font-weight: 700; color: #0F5F55; background: #E6F2EF; border-radius: 10px; padding: 8px 10px',
  none: 'font-size: 14px; line-height: 1.45; color: #3F4743; background: #F1F2EF; border-radius: 10px; padding: 8px 10px',
};

function fmt(m) {
  if (!m) return '0분';
  const h = Math.floor(m / 60), r = Math.round(m % 60);
  return ((h ? h + '시간 ' : '') + (r ? r + '분' : '')).trim();
}
function pct(v, goal) { return goal > 0 ? Math.round((v / goal) * 100) : 0; }
function now() { return new Date().toTimeString().slice(0, 5); }
function dnum(d) { return Number(String(d || '0').replace(/-/g, '')) || 0; }
function libChips(b, home) {
  // 시리즈의 한 권(잠수네에는 시리즈로만 있음)이면 그 시리즈를 가진 도서관을 보여 줌
  const L = (b.libs && b.libs.length) || b.sp || !b.link || !BK[b.link] ? b : BK[b.link];
  const out = (L.libs || []).map((x, i) => ({ text: LIBS[x[0]] + (x[1] ? ' ' + x[1] : ''), style: i === 0 ? CHIP_MAIN : CHIP }));
  if (home) out.unshift({ text: '우리집 책', style: CHIP_HOME });
  if (b.sr) out.push({ text: '잠수네 ' + b.sr + ' 중 한 권', style: CHIP });
  if (LIB_DATA && !(L.libs || []).length && L.sp) out.push({ text: '예비 · 월계어린이' + (L.sp !== '있음' ? ' ' + L.sp : '') + '에 있음', style: CHIP_DASH });
  if (LIB_DATA && BK[L.id] && !(L.libs || []).length && !L.sp && !home) out.push({ text: '근처 도서관 모두 없음 · 상호대차 확인', style: CHIP_WARN });
  if (b.x) out.push({ text: (b.lang === 'en' ? '한글판 ' : '원서 ') + b.x, style: CHIP });
  return out;
}


class Component extends DCLogic {
  constructor(props) {
    super(props);
    const init = props.init || {};
    const now = new Date();
    this.state = Object.assign({
      tab: 'log', sheet: null, res: null,
      dayISO: TODAY, levels: { jip: 'J3', video: 'JD4', read: 'J3' }, lvKey: null,
      entries: [], toast: null,
      goals: { jip: 30, video: 60, audio: 30, read: 20, kor: 60 },
      grades: ['초1'], plans: [1], statTab: 'day',
      lang: 'en', ensub: 'best', ebest: 'pic', elv: [], lvMoreOpen: false,
      kosub: 'bw', kobw: 'w', week: 0, month: now.getMonth() + 1, etcLang: 'all',
      ltab: 'todo', view: 'order', more: PAGE,
      reads: {}, extra: [], manual: {}, pgFix: {}, home: {}, askId: null, scanCount: 0, scanMsg: '', scanPhoto: false,
      dateId: null, dateSnap: null,
      mTitle: '', mPages: '', mLang: 'ko', mLevel: '', mErr: '', mExpand: false,
    }, init);
    // 카메라 화면이 붙고 떨어질 때 (한 번만 만든 함수여야 깜빡이지 않음)
    this.videoRef = (el) => props.api.camera(el, (code) => this.onScan(code), (msg, photo) => this.setState({ scanMsg: msg, scanPhoto: !!photo }));
  }
  async onScan(isbn) {
    if (this.state.sheet !== 'scan' || this.state.res || this.scanBusy) return;
    this.scanBusy = true;
    this.setState({ scanMsg: 'ISBN ' + isbn + ' 찾는 중…' });
    try {
      const f = await this.props.api.findIsbn(isbn, this.state);
      if (this.state.sheet !== 'scan') return;
      if (f.id) this.openRes(f.id, 'scan');
      else if (f.nb) this.openRes('N1', 'scan', f.nb);
      else { this.setState({ scanMsg: 'ISBN ' + isbn + ' 책 정보를 찾지 못했어요. 아래 버튼으로 제목을 찾거나 직접 넣어 주세요.' }); return; }
      this.setState({ scanMsg: '바코드를 네모 칸에 맞춰 주세요' });
    } catch (e) {
      this.setState({ scanMsg: '책 정보를 받지 못했어요. 인터넷 연결을 확인해 주세요.' });
    } finally { this.scanBusy = false; }
  }
  book(id, s) { s = s || this.state; return BK[id] || s.manual[id] || null; }
  isHome(id) { return !!this.state.home[id]; }
  pages(b, s) { s = s || this.state; return s.pgFix[b.id] || b.pg || 0; }
  snap(s) { return { reads: s.reads, entries: s.entries, extra: s.extra, manual: s.manual, pgFix: s.pgFix, home: s.home, scanCount: s.scanCount }; }
  readPatch(s, b, pg) {
    const reads = Object.assign({}, s.reads);
    const arr = (reads[b.id] || []).concat([TODAY]).sort();
    reads[b.id] = arr;
    const key = b.lang === 'en' ? 'read' : 'kor';
    const e = { id: 'p' + uid(), key, min: 0, pages: pg || 0, level: b.lang === 'en' ? (b.lv || '') : '', time: now(), book: b.t, src: b.id, nth: arr.length, date: TODAY };
    const text = '‘' + b.t + '’ ' + (arr.length > 1 ? '또 읽음 (' + arr.length + '번째)' : '읽음') + ' · ' +
      (pg ? (key === 'read' ? '리딩 ' : '한글 ') + pg + '쪽 기록' : '쪽수 없이 기록');
    return { patch: { reads, entries: s.entries.concat([e]) }, text };
  }
  markRead(id, opts) {
    opts = opts || {};
    const s = this.state, b = this.book(id);
    const pg = opts.pg != null ? opts.pg : this.pages(b);
    if (!pg && !opts.skipAsk) { this.setState({ sheet: 'ask', askId: id }); return; }
    const r = this.readPatch(s, b, pg);
    const pgFix = opts.pg ? Object.assign({}, s.pgFix, { [id]: opts.pg }) : s.pgFix;
    this.setState(Object.assign(r.patch, { pgFix, sheet: null, askId: null, toast: { text: r.text, snap: this.snap(s) } }));
  }
  unread(id) {
    const s = this.state, b = this.book(id);
    const arr = (s.reads[id] || []).slice();
    if (!arr.length) return;
    const last = arr.pop();
    const reads = Object.assign({}, s.reads);
    if (arr.length) reads[id] = arr; else delete reads[id];
    const entries = this.dropEntry(s.entries, id, last);
    const text = arr.length ? '‘' + b.t + '’ 마지막 읽음 취소 (' + (arr.length + 1) + '번 → ' + arr.length + '번)' : '‘' + b.t + '’ 다시 읽을 책으로';
    this.setState({ reads, entries, toast: { text, snap: this.snap(s) } });
  }
  dropEntry(entries, id, date) {
    const mine = entries.filter((e) => e.src === id && (e.date || TODAY) === date);
    if (!mine.length) return entries;
    const le = mine[mine.length - 1];
    return entries.filter((e) => e !== le);
  }
  addExtra(b, src, read) {
    const s = this.state;
    let manual = s.manual, id = b.id;
    if (b.newManual) {
      id = 'M' + uid();
      manual = Object.assign({}, manual, { [id]: Object.assign({}, b, { id, manual: true, newManual: undefined }) });
    }
    const extra = s.extra.some((x) => x.id === id) ? s.extra : [{ id, src, added: TODAY }].concat(s.extra);
    const s2 = Object.assign({}, s, { manual, extra });
    const nb = this.book(id, s2);
    let patch = { manual, extra }, text = '‘' + nb.t + '’ 기타에 담았어요';
    if (read) {
      const r = this.readPatch(s2, nb, this.pages(nb, s2));
      patch = Object.assign(patch, r.patch); text = r.text + ' · 기타에 넣었어요';
    }
    this.setState(Object.assign(patch, { sheet: null, res: null, tab: 'list', lang: 'etc', etcLang: 'all', ltab: read ? 'done' : 'todo', view: 'order', more: PAGE, toast: { text, snap: this.snap(s) } }));
  }
  where(id) {
    const out = [];
    DATA.KW.forEach((k) => { if (k[0] === id) out.push('한글 위클리 ' + GRADES[k[1] - 1] + ' 플랜' + k[2] + ' · ' + k[3] + '월 ' + k[4] + '주차'); });
    DATA.KB.forEach((k) => { if (k[0] === id) out.push('한글 베스트 ' + GRADES[k[1] - 1] + ' · ' + k[3] + '단계'); });
    DATA.KG.forEach((k) => { if (k[0] === id) out.push('한글 고전 ' + GRADES[k[1] - 1] + ' · ' + k[3] + '단계'); });
    const b = BK[id];
    if (b && b.lang === 'en' && b.ec) out.push('영어 ' + ECN[b.ec] + ' ' + b.lv);
    DATA.EB.forEach((k) => { if (k[0] === id) out.push('영어 ' + ECN[k[1]] + ' 베스트 ' + k[3] + '단계'); });
    return out;
  }
  placeOf(id) {
    const out = [], b = this.book(id);
    if (b && b.lang === 'en' && b.ec) out.push(ECN[b.ec] + (b.sr ? ' · ' + b.sr : ''));
    DATA.EB.forEach((k) => { if (k[0] === id) out.push(ECN[k[1]] + ' 베스트'); });
    DATA.KW.forEach((k) => { if (k[0] === id) out.push('위클리 ' + GRADES[k[1] - 1] + ' 플랜' + k[2] + ' ' + k[3] + '월 ' + k[4] + '주차'); });
    DATA.KB.forEach((k) => { if (k[0] === id) out.push('베스트 ' + GRADES[k[1] - 1]); });
    DATA.KG.forEach((k) => { if (k[0] === id) out.push('고전 ' + GRADES[k[1] - 1]); });
    if (this.state.extra.some((x) => x.id === id)) out.push('기타');
    if (b && b.link && b.link !== id && BK[b.link]) this.placeOf(b.link).forEach((x) => { if (!out.some((y) => y.startsWith(x))) out.push(x); });   // 시리즈의 한 권
    if (!out.length && b && BK[id] && b.lang === 'ko') out.push('한글 전체목록' + (b.cat ? ' · ' + b.cat : ''));
    return Array.from(new Set(out));
  }
  findExtraId(title, id) {
    const ex = this.state.extra.find((x) => x.id === id || (this.book(x.id) || {}).t === title);
    return ex ? ex.id : null;
  }
  goList(id, read) {
    const patch = { sheet: null, res: null, tab: 'list', view: 'order', ltab: read ? 'done' : 'todo', more: PAGE, week: 0 };
    const k = DATA.KW.find((x) => x[0] === id), kb = DATA.KB.find((x) => x[0] === id), kg = DATA.KG.find((x) => x[0] === id);
    const eb = DATA.EB.find((x) => x[0] === id), b = BK[id];
    if (k) Object.assign(patch, { lang: 'ko', kosub: 'bw', kobw: 'w', month: k[3], week: k[4] });
    else if (kb) Object.assign(patch, { lang: 'ko', kosub: 'bw', kobw: 'b' });
    else if (kg) Object.assign(patch, { lang: 'ko', kosub: 'gj' });
    else if (b && b.lang === 'en' && b.ec) Object.assign(patch, { lang: 'en', ensub: b.ec, elv: [b.lv] });
    else if (eb) Object.assign(patch, { lang: 'en', ensub: 'best', ebest: eb[1], elv: [eb[3]] });
    else Object.assign(patch, { lang: 'etc', etcLang: 'all' });
    this.setState(patch);
  }
  // ---- 바코드 / 찾기 팝업: 기록 버튼 하나
  resBook() {
    const r = this.state.res;
    if (r.origId === 'N1') return Object.assign({}, NONE_BASE, r.nb || {}, { lang: r.lang || (r.nb && r.nb.lang) || 'ko' });
    return this.book(r.origId);
  }
  openRes(origId, via, nb) {
    if (origId === 'N1') origId = this.findExtraId(nb.t, null) || 'N1';
    this.setState({ res: { origId, via, status: 'view', lang: (nb && nb.lang) || 'ko', nb: nb || null }, sheet: via === 'scan' ? 'scan' : 'result', toast: null });
  }
  recordRes(o) {
    o = o || {};
    const s = this.state, r = s.res;
    const isNew = r.origId === 'N1';
    const base = this.resBook();
    if ((!isNew || base.link) && !this.pages(base) && o.pg == null) { this.setState({ res: Object.assign({}, r, { status: 'askPages' }) }); return; }
    let manual = s.manual, extra = s.extra, id;
    const lists = isNew || base.manual ? [] : this.where(base.id);
    const exId = this.findExtraId(base.t, isNew ? null : base.id);
    if (exId) id = exId;
    else if (isNew) { id = 'M' + uid(); manual = Object.assign({}, manual, { [id]: Object.assign({}, base, { id, manual: true, src: 'scan' }) }); }
    else id = base.id;
    let tail = '';
    if (!lists.length && !exId && !base.link) { extra = [{ id, src: r.via === 'search' ? 'search' : 'scan', added: TODAY }].concat(extra); tail = ' · 기타에 넣었어요'; }
    else if (base.link && BK[base.link] && isNew) tail = ' · ' + BK[base.link].t + '의 한 권';
    const s2 = Object.assign({}, s, { manual, extra });
    const b = this.book(id, s2);
    const pg = o.pg != null ? o.pg : this.pages(b, s2);
    const rp = this.readPatch(s2, b, pg);
    rp.patch.entries[rp.patch.entries.length - 1].via = r.via;
    const pgFix = o.pg ? Object.assign({}, s.pgFix, { [id]: o.pg }) : s.pgFix;
    this.setState(Object.assign({ manual, extra, pgFix }, rp.patch, {
      scanCount: s.scanCount + (r.via === 'scan' ? 1 : 0), res: null, sheet: r.via === 'scan' ? 'scan' : null,
      toast: { text: rp.text + tail, snap: this.snap(s) },
    }));
  }
  // ---- 읽은 날짜 고치기
  changeDate(id, i, iso) {
    const nd = fromIso(iso);
    if (!nd || dnum(nd) > dnum(TODAY)) return;
    const s = this.state;
    const arr = (s.reads[id] || []).slice();
    const old = arr[i];
    if (!old || old === nd) return;
    arr[i] = nd;
    arr.sort((x, y) => dnum(x) - dnum(y));
    let done = false;
    const entries = s.entries.map((e) => {
      if (!done && e.src === id && (e.date || TODAY) === old) { done = true; return Object.assign({}, e, { date: nd }); }
      return e;
    });
    this.setState({ reads: Object.assign({}, s.reads, { [id]: arr }), entries });
  }
  delRead(id, i) {
    const s = this.state;
    const arr = (s.reads[id] || []).slice();
    const old = arr.splice(i, 1)[0];
    const reads = Object.assign({}, s.reads);
    if (arr.length) reads[id] = arr; else delete reads[id];
    const entries = this.dropEntry(s.entries, id, old);
    if (!arr.length) {
      const b = this.book(id);
      this.setState({ reads, entries, sheet: null, dateId: null, toast: { text: '‘' + b.t + '’ 읽은 기록을 다 지워서 읽을 책으로 돌아갔어요', snap: s.dateSnap || this.snap(s) } });
      return;
    }
    this.setState({ reads, entries });
  }
  scopeItems() {
    const s = this.state;
    const gi = s.grades.map((g) => GRADES.indexOf(g) + 1);
    const map = new Map();
    const put = (id, o, tag) => {
      if (!map.has(id)) map.set(id, Object.assign({ id, tags: [] }, o));
      if (tag) map.get(id).tags.push(tag);
    };
    const lvOk = (lv) => !s.elv.length || s.elv.includes(lv);
    if (s.lang === 'ko' && s.kosub === 'bw' && s.kobw === 'w') {
      DATA.KW.forEach((k) => { if (k[3] === s.month && gi.includes(k[1]) && s.plans.includes(k[2])) put(k[0], { w: k[4] }, GRADES[k[1] - 1] + ' 플랜' + k[2]); });
    } else if (s.lang === 'ko') {
      const src = s.kosub === 'gj' ? DATA.KG : DATA.KB;
      src.forEach((k) => { if (gi.includes(k[1])) put(k[0], { g: k[1], ord: k[2], rank: k[2], lv: k[3] }, GRADES[k[1] - 1] + ' ' + k[2] + '번'); });
    } else if (s.lang === 'en' && s.ensub === 'best') {
      DATA.EB.forEach((k) => { if (k[1] === s.ebest && lvOk(k[3])) put(k[0], { ord: k[2], rank: EB_RANK[k[0] + '|' + k[1]], lv: k[3] }); });
    } else if (s.lang === 'en') {
      ALL.forEach((b) => { if (b.lang === 'en' && b.ec === s.ensub && lvOk(b.lv)) put(b.id, { lv: b.lv, ord: -b.rev }); });
    } else {
      s.extra.forEach((x) => { if (s.etcLang === 'all' || this.book(x.id).lang === s.etcLang) put(x.id, { added: x.added, src: x.src }); });
    }
    return Array.from(map.values());
  }
  card(it, done, libView, multi) {
    const s = this.state, b = this.book(it.id), pg = this.pages(b);
    const rs = s.reads[b.id] || [];
    let chips = [], meta, dateLabel = '';
    if (done) {
      const last = rs[rs.length - 1];
      meta = [b.a, pg ? pg + '쪽' : ''].filter(Boolean).join(' · ');
      dateLabel = (rs.length > 1 ? rs.length + '번 읽음 · ' : '') + (rs.length > 1 ? '마지막 ' : '읽은 날 ') + fmtD(last);
      if (b.lv) chips.push({ text: b.lv, style: b.lang === 'en' ? CHIP_LV : CHIP_LVK });
      if (this.isHome(b.id)) chips.push({ text: '우리집 책', style: CHIP_HOME });
      const places = this.placeOf(b.id);
      places.slice(0, 3).forEach((p) => chips.push({ text: p, style: CHIP_TAG }));
      if (places.length > 3) chips.push({ text: '외 ' + (places.length - 3) + '곳', style: CHIP });
    } else {
      const parts = b.manual ? [b.src === 'scan' ? '바코드' : b.src === 'search' ? '찾기' : '직접 입력', b.a || (b.lang === 'en' ? '영어책' : '한글책'), b.lv] : [b.a, b.cat, b.lv];
      parts.push(pg ? pg + '쪽' : '쪽수 정보 없음');
      if (b.star) parts.push('★' + b.star);
      if (b.rev) parts.push('리뷰 ' + b.rev);
      meta = parts.filter(Boolean).join(' · ');
      chips = libChips(b, this.isHome(b.id));
      if (multi && it.tags.length) chips = it.tags.map((t) => ({ text: t, style: CHIP_TAG })).concat(chips);
      if (it.src) chips.unshift({ text: it.src === 'import' ? '읽은책 목록에서 가져옴' : ({ scan: '바코드 · ', search: '찾기 · ', manual: '직접 입력 · ' }[it.src] || '') + fmtD(it.added) + ' 담음', style: CHIP_TAG });
    }
    return {
      title: (!done && !libView && it.rank ? it.rank + '. ' : '') + b.t, meta, chips, hasChips: chips.length > 0, dateLabel,
      editDates: () => this.setState({ sheet: 'dates', dateId: b.id, dateSnap: this.snap(this.state), toast: null }),
      cn: libView && !done && b.libs[0] ? LIBS[b.libs[0][0]] + ' ' + b.libs[0][1] : '',
      boxStyle: done
        ? 'width: 26px; height: 26px; border-radius: 7px; background: #0F766E; color: #FFFFFF; font-size: 16px; display: flex; align-items: center; justify-content: center'
        : 'width: 24px; height: 24px; border-radius: 7px; border: 2px solid #8A9590; background: #FFFFFF',
      boxMark: done ? '✓' : '',
      act: () => (done ? this.unread(b.id) : this.markRead(b.id)),
      actLabel: done ? (rs.length > 1 ? '마지막 읽음 취소' : '다시 읽을 책으로 되돌리기') : '오늘 읽음으로 표시',
      showAgain: done, again: () => this.markRead(b.id),
      canRemove: !done && s.lang === 'etc',
      removeLabel: b.t + ' 목록에서 빼기',
      remove: () => {
        const st = this.state;
        this.setState({ extra: st.extra.filter((x) => x.id !== b.id), toast: { text: '‘' + b.t + '’ 기타에서 뺐어요', snap: this.snap(st) } });
      },
    };
  }
  renderVals() {
    const s = this.state;
    TODAY = isoToday();
    const todayE = s.entries.filter((e) => (e.date || TODAY) === s.dayISO);
    const sumMin = (k) => todayE.filter((e) => e.key === k).reduce((t, e) => t + e.min, 0);
    const sumPg = (k) => todayE.filter((e) => e.key === k).reduce((t, e) => t + e.pages, 0);
    const enKeys = ['jip', 'video', 'audio', 'read'];
    const enMin = enKeys.reduce((t, k) => t + sumMin(k), 0);
    const enGoal = enKeys.reduce((t, k) => t + s.goals[k], 0);
    const pill = (on) => (on ? ON : OFF);
    const v = {};

    // ---- 기록
    const d = new Date(s.dayISO + 'T12:00:00');
    const back = Math.round((new Date(TODAY + 'T12:00:00') - d) / 86400000);
    v.isLog = s.tab === 'log';
    v.dayLabel = fmtD(s.dayISO) + ' (' + DAYS[d.getDay()] + ')';
    v.dayBadge = back <= 0 ? '오늘' : back === 1 ? '어제 기록 중' : back + '일 전 기록 중';
    v.prevDay = () => this.setState({ dayISO: addDays(this.state.dayISO, -1) });
    v.nextDay = () => { const n = addDays(this.state.dayISO, 1); if (n <= TODAY) this.setState({ dayISO: n }); };
    v.enTotal = fmt(enMin); v.koTotal = fmt(sumMin('kor'));
    v.enPct = pct(enMin, enGoal) + '%'; v.koPct = pct(sumMin('kor'), s.goals.kor) + '%';
    v.cards = ACTS.map((a, i) => {
      const pg = sumPg(a.key);
      return {
        groupTitle: i === 0 ? '영어' : a.key === 'kor' ? '한글' : '',
        name: a.name, color: a.color, soft: a.soft, ink: a.ink,
        total: fmt(sumMin(a.key)) + (pg ? ' · ' + pg + '쪽' : ''),
        hasLevel: !!a.lv, level: s.levels[a.key],
        openLevel: () => this.setState({ sheet: 'level', lvKey: a.key }),
        quick: QUICK.map((q) => ({
          label: '+' + q + '분',
          add: () => {
            const st = this.state;
            const e = { id: uid(), key: a.key, min: q, pages: 0, level: a.lv ? st.levels[a.key] : '', time: now(), date: st.dayISO };
            this.setState({ entries: st.entries.concat([e]),
              toast: { text: a.name + ' ' + q + '분' + (e.level ? ' (' + e.level + ')' : '') + ' 기록됨', snap: this.snap(st) } });
          },
        })),
        hint: a.key === 'read' || a.key === 'kor' ? '쪽수는 책 리스트에서 읽음 체크하거나 위의 바코드로 기록하면 저절로 들어가요' : '',
      };
    });
    v.copyYesterday = () => {
      const st = this.state, prev = addDays(st.dayISO, -1);
      const list = st.entries.filter((e) => !e.src && e.date === prev && e.min).map((e) => ({
        id: uid(), key: e.key, min: e.min, pages: 0, level: e.level, time: now(), date: st.dayISO }));
      if (!list.length) { this.setState({ toast: { info: true, text: '어제는 시간 기록이 없어요' } }); return; }
      this.setState({ entries: st.entries.concat(list), toast: { text: '어제 기록 ' + list.length + '건을 그대로 넣었어요', snap: this.snap(st) } });
    };
    v.logTitle = (back <= 0 ? '오늘' : fmtD(s.dayISO)) + ' 기록 ' + todayE.length + '건 (× 누르면 지워져요)';
    v.openScanLog = () => this.setState({ sheet: 'scan', res: null, scanCount: 0, toast: null });
    v.timeline = todayE.slice().reverse().map((e) => {
      const a = ACTS.find((x) => x.key === e.key);
      return {
        time: e.time, color: a.color,
        text: e.book ? (e.key === 'read' ? '리딩 ' : '한글 ') + e.pages + '쪽 · ' + e.book + (e.nth > 1 ? ' (' + e.nth + '번째)' : '') : a.name + ' ' + fmt(e.min) + (e.level ? ' · ' + e.level : ''),
        del: () => {
          const st = this.state;
          const reads = Object.assign({}, st.reads);
          if (e.src && reads[e.src]) {
            const arr = reads[e.src].slice(); const i = arr.lastIndexOf(e.date || TODAY);
            if (i >= 0) arr.splice(i, 1);
            if (arr.length) reads[e.src] = arr; else delete reads[e.src];
          }
          this.setState({ entries: st.entries.filter((x) => x.id !== e.id), reads, toast: { text: '기록 1건을 지웠어요', snap: this.snap(st) } });
        },
      };
    });
    const lvAct = s.sheet === 'level' ? ACTS.find((a) => a.key === s.lvKey) : null;
    v.levelOpen = !!lvAct;
    v.sheetTitle = lvAct ? lvAct.name + ' 레벨 고르기' : '';
    v.closeSheet = () => this.setState({ sheet: null, askId: null });
    v.levelOptions = lvAct ? LV[lvAct.lv].map((l) => ({
      label: l,
      style: l === s.levels[s.lvKey] ? 'border: none; background: ' + lvAct.color + '; color: #FFFFFF' : 'border: 1px solid #B9C4BF; background: #FFFFFF; color: #1B1F1D',
      pick: () => this.setState({ levels: Object.assign({}, s.levels, { [s.lvKey]: l }), sheet: null }),
    })) : [];

    // ---- 통계
    v.isStats = s.tab === 'stats';
    const y0 = TODAY.slice(0, 4) + '-01-01', m0 = TODAY.slice(0, 8) + '01', w0 = addDays(TODAY, -6);
    const RG = { day: [TODAY, TODAY], week: [w0, TODAY], month: [m0, TODAY], year: [y0, TODAY] }[s.statTab];
    const range = [dnum(RG[0]), dnum(RG[1])];
    const days = Math.round((new Date(RG[1] + 'T12:00:00') - new Date(RG[0] + 'T12:00:00')) / 86400000) + 1;
    const inR = s.entries.filter((e) => !e.src && e.date >= RG[0] && e.date <= RG[1]);
    const mins = {}; ACTS.forEach((a) => { mins[a.key] = inR.filter((e) => e.key === a.key).reduce((t, e) => t + e.min, 0); });
    const T = new Date(TODAY + 'T12:00:00');
    // 목표 대비 %는 시간 기록을 시작한 날부터 센 날수로 (앱 쓰기 전 날까지 목표에 넣지 않음)
    const firstT = s.entries.reduce((m, e) => (!e.src && e.date && (!m || e.date < m) ? e.date : m), '');
    const from = firstT > RG[0] ? firstT : RG[0];
    const goalDays = Math.max(1, Math.round((new Date(RG[1] + 'T12:00:00') - new Date(from + 'T12:00:00')) / 86400000) + 1);
    const src = { days: goalDays, min: mins, pages: { read: 0, kor: 0 }, books: 0,
      period: s.statTab === 'day' ? fmtD(TODAY) + ' (' + DAYS[T.getDay()] + ') · 오늘'
        : s.statTab === 'week' ? fmtD(w0) + ' ~ ' + fmtD(TODAY) + ' (7일)'
        : s.statTab === 'month' ? TODAY.slice(0, 4) + '년 ' + (T.getMonth() + 1) + '월 (' + days + '일)'
        : TODAY.slice(0, 4) + '년 (' + days + '일)' };
    const hist = { read: 0, kor: 0, n: 0, ids: new Set(), lv: {}, mon: {} };
    Object.keys(s.reads).forEach((id) => {
      const b = this.book(id); if (!b) return;
      const pg = this.pages(b);
      s.reads[id].forEach((dt) => {
        const dn = dnum(dt);
        if (dn < range[0] || dn > range[1]) return;
        const k = b.lang === 'en' ? 'read' : 'kor';
        hist[k] += pg; hist.n += 1; hist.ids.add(id);
        if (b.lang === 'en' && b.lv) hist.lv[b.lv] = (hist.lv[b.lv] || 0) + 1;
        const mo = dt.slice(0, 7);
        const mm = hist.mon[mo] || (hist.mon[mo] = { ko: 0, kp: 0, en: 0, ep: 0 });
        if (b.lang === 'en') { mm.en += 1; mm.ep += pg; } else { mm.ko += 1; mm.kp += pg; }
      });
    });
    src.pages = { read: hist.read, kor: hist.kor }; src.books = hist.n;
    v.distinctCount = hist.ids.size + '권';
    v.statNote = '시간은 앱을 쓰기 시작한 날부터 쌓여요';
    v.statTabs = [['day', '일'], ['week', '주'], ['month', '월'], ['year', '년']].map(([k, l]) => ({ label: l, style: s.statTab === k ? SEG_ON : SEG_OFF, pick: () => this.setState({ statTab: k }) }));
    v.period = src.period;
    const sEn = enKeys.reduce((t, k) => t + src.min[k], 0);
    v.sEnTotal = fmt(sEn); v.sKoTotal = fmt(src.min.kor);
    v.sEnPct = pct(sEn, enGoal * src.days) + '%'; v.sKoPct = pct(src.min.kor, s.goals.kor * src.days) + '%';
    v.goalBasis = s.statTab === 'day' ? '오늘 목표 기준' : '하루 목표 × ' + src.days + '일' + (from > RG[0] ? ' (' + fmtD(from) + '부터)' : '');
    v.goalRows = ACTS.map((a) => {
      const goal = s.goals[a.key] * src.days, val = src.min[a.key], p = pct(val, goal);
      return {
        name: a.name, pct: p + '%', ink: p >= 100 ? '#0F5F55' : '#1B1F1D',
        detail: fmt(val) + ' / 목표 ' + fmt(goal) + (p >= 100 ? ' · 달성' : ''),
        bar: 'height: 100%; width: ' + Math.min(100, p) + '%; background: ' + a.color + '; border-radius: 5px',
      };
    });
    v.toSettings = () => this.setState({ tab: 'settings' });
    const nf = (x) => x.toLocaleString('ko-KR');
    v.readPages = nf(src.pages.read) + '쪽'; v.koPages = nf(src.pages.kor) + '쪽';
    v.bookCount = nf(src.books) + '회';
    let lv = [];
    v.levelTitle = '영어 레벨별 읽은 횟수';
    {
      const tot = Object.values(hist.lv).reduce((t, x) => t + x, 0) || 1;
      const ks = Object.keys(hist.lv).sort((x, y) => hist.lv[y] - hist.lv[x]);
      lv = ks.slice(0, 3).map((k) => [k, Math.round((hist.lv[k] / tot) * 100)]);
      const rest = ks.slice(3).reduce((t, k) => t + hist.lv[k], 0);
      if (rest) lv.push(['그 외', Math.round((rest / tot) * 100)]);
    }
    v.levelBars = lv.map(([l, p], i) => ({ label: p >= 12 ? l + ' ' + p + '%' : '',
      style: 'width: ' + p + '%; background: ' + (LEVEL_COLORS[i] || '#DDE3E0') + '; color: ' + (i === 0 ? '#FFFFFF' : '#123B35') + '; font-size: 12px; font-weight: 700; display: flex; align-items: center; justify-content: center' }));
    v.showCum = s.statTab === 'year';
    let ck = 0, ckp = 0, ce = 0, cep = 0;
    Object.values(hist.mon).forEach((x) => { ck += x.ko; ckp += x.kp; ce += x.en; cep += x.ep; });
    v.cumHead = TODAY.slice(0, 4) + '년 누적';
    v.cumLine1 = '서로 다른 책 ' + nf(hist.ids.size) + '권 · ' + nf(hist.n) + '회';
    v.cumLine2 = '한글 ' + nf(ck) + '회 ' + nf(ckp) + '쪽 · 영어 ' + nf(ce) + '회 ' + nf(cep) + '쪽';
    v.monthRows = Object.keys(hist.mon).sort().map((mo) => {
      const x = hist.mon[mo];
      return { m: (+mo.slice(5)) + '월', ko: nf(x.ko) + '회 · ' + nf(x.kp) + '쪽', en: nf(x.en) + '회 · ' + nf(x.ep) + '쪽' };
    });
    v.exportXlsx = () => {
      this.setState({ toast: { info: true, text: '엑셀 파일을 만드는 중이에요…' } });
      this.props.api.xlsx().then(() => this.setState({ toast: { info: true, text: '엑셀 파일을 내려받았어요 · 읽은 기록·시간 기록·월별 요약·책별' } }),
        (e) => this.setState({ toast: { info: true, text: '엑셀을 받지 못했어요 · ' + e.message } }));
    };

    // ---- 책 리스트
    v.isList = s.tab === 'list';
    const reset = { week: 0, view: 'order', more: PAGE };
    v.langBtns = [['en', '영어책'], ['ko', '한글책']].map(([k, l]) => ({
      label: l, on: s.lang === k, style: s.lang === k ? 'border: none; background: #0F766E; color: #FFFFFF' : 'border: 1px solid #B9C4BF; background: #FFFFFF; color: #1B1F1D',
      pick: () => this.setState(Object.assign({ lang: k }, reset)) }));
    v.etcOn = s.lang === 'etc';
    v.etcStyle = v.etcOn ? 'border: none; background: #0F766E; color: #FFFFFF' : 'border: 1px solid #B9C4BF; background: #FFFFFF; color: #3F4743';
    v.pickEtc = () => this.setState(Object.assign({ lang: 'etc' }, reset));
    v.isEtc = s.lang === 'etc';
    const inDone = s.ltab === 'done';
    v.hasSubs = s.lang !== 'etc' && !inDone;
    v.subs = s.lang === 'en'
      ? EN_SUBS.map((k) => ({ label: ECN[k], on: s.ensub === k, style: pill(s.ensub === k), pick: () => this.setState(Object.assign({ ensub: k }, reset)) }))
      : [['bw', '베스트·위클리'], ['gj', '고전']].map(([k, l]) => ({ label: l, on: s.kosub === k, style: pill(s.kosub === k), pick: () => this.setState(Object.assign({ kosub: k }, reset)) }));
    v.showScope = s.lang === 'ko' && !inDone;
    v.scopeLabel = s.grades.join('·') + (s.kosub === 'bw' && s.kobw === 'w' ? ' · 플랜' + s.plans.join('·') : '');
    v.scopeGo = () => this.setState({ tab: 'settings' });
    v.hasSeg = s.lang === 'ko' && s.kosub === 'bw' && !inDone;
    v.segs = [['w', '위클리'], ['b', '베스트']].map(([k, l]) => ({ label: l, on: s.kobw === k, style: s.kobw === k ? SEG_ON : SEG_OFF, pick: () => this.setState(Object.assign({ kobw: k }, reset)) }));
    v.hasSubs2 = s.lang === 'en' && s.ensub === 'best' && !inDone;
    v.subs2 = BEST_SUBS.map((k) => ({ label: ECN[k] + ' 베스트', on: s.ebest === k,
      style: s.ebest === k ? 'border: none; background: #1B1F1D; color: #FFFFFF; font-weight: 700' : 'border: 1px solid #B9C4BF; background: #F4F5F2; color: #3F4743',
      pick: () => this.setState(Object.assign({ ebest: k }, reset)) }));
    const weeklyScope = s.lang === 'ko' && s.kosub === 'bw' && s.kobw === 'w';
    v.isWeekly = weeklyScope && !inDone;
    const wkMax = Math.max(4, ...DATA.KW.filter((k) => k[3] === s.month).map((k) => k[4]));
    v.monthLabel = s.month + '월';
    v.prevMonth = () => this.setState({ month: s.month === 1 ? 12 : s.month - 1, week: 0, more: PAGE });
    v.nextMonth = () => this.setState({ month: s.month === 12 ? 1 : s.month + 1, week: 0, more: PAGE });
    v.weeks = Array.from({ length: wkMax + 1 }, (_, w) => w).map((w) => ({ label: w ? w + '주' : '전체', style: pill(s.week === w), pick: () => this.setState({ week: w, more: PAGE }) }));
    v.hasLevels = s.lang === 'en' && !inDone;
    const togLv = (l) => {
      const cur = this.state.elv;
      this.setState({ elv: cur.includes(l) ? cur.filter((x) => x !== l) : cur.concat([l]).sort((x, y) => lvIdx(x) - lvIdx(y)), more: PAGE });
    };
    const moreOn = s.elv.filter((l) => LV_MORE.includes(l));
    v.lvBtns = [{ label: '전체', on: !s.elv.length, style: pill(!s.elv.length), pick: () => this.setState({ elv: [], more: PAGE }) }]
      .concat(LV_MAIN.map((l) => ({ label: l, on: s.elv.includes(l), style: pill(s.elv.includes(l)), pick: () => togLv(l) })))
      .concat([{ label: moreOn.length ? '기타 ' + moreOn.length : '기타 ' + (s.lvMoreOpen ? '▴' : '▾'), on: s.lvMoreOpen || moreOn.length > 0,
        style: moreOn.length ? ON : s.lvMoreOpen ? 'border: 1px solid #0F766E; background: #E6F2EF; color: #0F5F55' : OFF,
        pick: () => this.setState({ lvMoreOpen: !this.state.lvMoreOpen }) }]);
    v.lvMoreOpen = s.lvMoreOpen;
    v.lvMore = LV_MORE.map((l) => ({ label: l, on: s.elv.includes(l), style: pill(s.elv.includes(l)), pick: () => togLv(l) }));
    v.openScan = () => this.setState({ sheet: 'scan', res: null, scanCount: 0, toast: null });
    v.openManual = () => this.setState({ sheet: 'manual', res: null, mTitle: '', mPages: '', mLang: 'ko', mLevel: '', mErr: '', mExpand: false, toast: null });
    v.etcLangs = [['all', '전체'], ['ko', '한글'], ['en', '영어']].map(([k, l]) => ({
      label: l + ' ' + s.extra.filter((x) => k === 'all' || this.book(x.id).lang === k).length,
      style: pill(s.etcLang === k), pick: () => this.setState({ etcLang: k, more: PAGE }) }));
    const multi = s.lang === 'ko' && (s.kosub === 'bw' && s.kobw === 'w' ? s.grades.length * s.plans.length > 1 : s.grades.length > 1);
    const all = this.scopeItems();
    const scoped = all.filter((it) => !weeklyScope || !s.week || it.w === s.week);
    const todo = scoped.filter((it) => !(s.reads[it.id] || []).length);
    // 읽은 책: 하위분류 상관없이 그 언어로 읽은 책을 모두 합쳐서 (기타는 기타 안에서만)
    const done = s.lang === 'etc'
      ? scoped.filter((it) => (s.reads[it.id] || []).length)
      : Object.keys(s.reads).filter((id) => s.reads[id].length && this.book(id) && this.book(id).lang === s.lang).map((id) => ({ id, tags: [] }));
    let groups = [];
    const byKey = (items, keyFn, titleFn, mk) => {
      const m = new Map();
      items.forEach((it) => { const k = keyFn(it); if (!m.has(k)) m.set(k, []); m.get(k).push(it); });
      return Array.from(m.entries()).map(([k, xs]) => ({ title: titleFn(k, xs), items: xs.map(mk) }));
    };
    const mkTodo = (it) => this.card(it, false, false, multi);
    if (s.ltab === 'done') {
      const lastOf = (it) => { const r = s.reads[it.id]; return r[r.length - 1]; };
      const sorted = done.slice().sort((x, y) => dnum(lastOf(y)) - dnum(lastOf(x)));
      groups = byKey(sorted, lastOf, (dt) => (dt === TODAY ? '오늘 · ' : '') + fmtD(dt), (it) => this.card(it, true, false, multi));
    } else if (s.view === 'lib') {
      groups = LIBN.map((L, li) => {
        const items = todo.filter((it) => { const b = this.book(it.id); return b.libs[0] && b.libs[0][0] === li; })
          .sort((x, y) => this.book(x.id).libs[0][1].localeCompare(this.book(y.id).libs[0][1], 'ko'));
        return { title: L + ' 도서관 · ' + items.length + '권', items: items.map((it) => this.card(it, false, true, multi)) };
      });
      const spare = todo.filter((it) => { const b = this.book(it.id); return !b.libs.length && b.sp; });
      const none = todo.filter((it) => { const b = this.book(it.id); return !b.libs.length && !b.sp; });
      groups.push({ title: '예비 · 월계어린이도서관에만 있음 · ' + spare.length + '권', items: spare.map((it) => this.card(it, false, true, multi)) });
      groups.push({ title: '근처에 없음 · ' + none.length + '권', items: none.map((it) => this.card(it, false, true, multi)) });
    } else if (v.isWeekly) {
      groups = Array.from({ length: wkMax }, (_, i) => i + 1).filter((w) => !s.week || w === s.week).map((w) => {
        const items = todo.filter((it) => it.w === w);
        return { title: w + '주차 · 남은 ' + items.length + '권', items: items.map(mkTodo) };
      });
    } else if (s.lang === 'ko') {
      const name = s.kosub === 'gj' ? '고전' : '베스트';
      const sorted = todo.slice().sort((x, y) => (x.g - y.g) || (x.ord - y.ord));
      groups = byKey(sorted, (it) => it.g + '|' + it.lv, (k, xs) => GRADES[+k.split('|')[0] - 1] + ' ' + name + ' · ' + k.split('|')[1] + '단계 · ' + xs.length + '권', mkTodo);
    } else if (s.lang === 'en') {
      const sorted = todo.slice().sort((x, y) => (lvIdx(x.lv) - lvIdx(y.lv)) || (x.ord - y.ord));
      groups = byKey(sorted, (it) => it.lv, (k, xs) => (s.ensub === 'best' ? ECN[s.ebest] + ' 베스트 ' + k + '단계' : ECN[s.ensub] + ' ' + k + ' · 리뷰 많은 순') + ' · ' + xs.length + '권', mkTodo);
    } else {
      groups = [{ title: '담아 둔 책 · ' + todo.length + '권 (최근 담은 순)', items: todo.slice().sort((x, y) => dnum(y.added) - dnum(x.added)).map(mkTodo) }];
    }
    groups = groups.filter((g) => g.items.length);
    // 많이 길면 나눠서 보여 주기
    let left = s.more, total = 0;
    groups.forEach((g) => { total += g.items.length; });
    v.groups = [];
    groups.forEach((g) => {
      if (left <= 0) return;
      v.groups.push({ title: g.title, items: g.items.slice(0, left) });
      left -= g.items.length;
    });
    v.showMore = total > s.more;
    v.moreLabel = '더 보기 (남은 ' + (total - s.more) + '권)';
    v.moreGo = () => this.setState({ more: this.state.more + PAGE });
    v.todoLabel = '읽을 책 ' + todo.length; v.doneLabel = '읽은 책 ' + done.length;
    v.todoStyle = s.ltab === 'todo' ? SEG_ON : SEG_OFF; v.doneStyle = s.ltab === 'done' ? SEG_ON : SEG_OFF;
    v.toTodo = () => this.setState({ ltab: 'todo', more: PAGE }); v.toDone = () => this.setState({ ltab: 'done', more: PAGE });
    v.showProg = !inDone && !(s.lang === 'en' && s.ensub !== 'best');
    const scopedDone = scoped.length - todo.length;
    v.progStyle = 'height: 100%; width: ' + (scoped.length ? Math.round((scopedDone / scoped.length) * 100) : 0) + '%; background: #0F766E';
    v.progText = scoped.length + '권 중 ' + scopedDone + '권 읽음';
    v.listNote = inDone && s.lang !== 'etc'
      ? (s.lang === 'en' ? '영어책' : '한글책') + '으로 읽은 책을 분류 상관없이 모두 모았어요 · 최근 읽은 순. 책마다 어디에 있는 책인지' + (s.lang === 'en' ? '와 레벨' : '') + '이 붙어요.'
      : s.lang === 'etc' && s.ltab === 'todo' ? '영어책·한글책 분류에 없는 책을 모아 두는 곳이에요. 바코드로 기록하거나 찾기·직접 입력으로 넣은 책이 여기로 와요.' : '';
    v.showViewToggle = LIB_DATA && s.ltab === 'todo' && todo.length > 0;
    v.orderLabel = v.isWeekly ? '주차별' : s.lang === 'etc' ? '담은 순' : s.lang === 'en' && s.ensub !== 'best' ? '레벨별' : '단계별';
    v.orderStyle = pill(s.view === 'order'); v.libStyle = pill(s.view === 'lib');
    v.toOrder = () => this.setState({ view: 'order', more: PAGE }); v.toLib = () => this.setState({ view: 'lib', more: PAGE });
    v.emptyAll = groups.length === 0;
    v.emptyText = s.ltab === 'done' ? '아직 읽은 책이 없어요. 읽을 책에서 네모를 누르거나 바코드로 기록하면 이쪽으로 옮겨져요.'
      : s.lang === 'etc' ? '담아 둔 책이 없어요.' : s.elv.length ? '고른 레벨에 해당하는 책이 없어요. 레벨 버튼을 바꿔 보세요.' : '이 목록의 책을 모두 읽었어요!';

    // ---- 읽은 날짜 고치기
    v.datesOpen = s.sheet === 'dates' && !!s.dateId;
    v.dRows = []; v.dTitle = '';
    if (v.datesOpen) {
      const b = this.book(s.dateId), rs = s.reads[s.dateId] || [];
      v.dTitle = '‘' + b.t + '’ 읽은 날짜';
      v.dRows = rs.map((dt, i) => ({
        nth: (i + 1) + '번째', iso: toIso(dt), max: toIso(TODAY), inputId: 'read-date-' + i,
        change: (e) => this.changeDate(s.dateId, i, e.target.value),
        del: () => this.delRead(s.dateId, i), delLabel: (i + 1) + '번째 읽은 기록 지우기',
      }));
    }
    v.dDone = () => {
      const st = this.state;
      const changed = st.dateSnap && JSON.stringify(st.dateSnap.reads) !== JSON.stringify(st.reads);
      this.setState({ sheet: null, dateId: null, dateSnap: null, toast: changed ? { text: '읽은 날짜를 고쳤어요', snap: st.dateSnap } : null });
    };

    // ---- 설정
    v.isSettings = s.tab === 'settings';
    const toggle = (field, val, label) => {
      const cur = this.state[field];
      if (cur.includes(val) && cur.length === 1) { this.setState({ toast: { info: true, text: label + '은 하나 이상 골라야 해요' } }); return; }
      const next = cur.includes(val) ? cur.filter((x) => x !== val) : cur.concat([val]);
      const order = field === 'grades' ? GRADES : [1, 2, 3];
      this.setState({ [field]: order.filter((x) => next.includes(x)), toast: null });
    };
    v.grades = GRADES.map((g) => ({ label: g, on: s.grades.includes(g), style: pill(s.grades.includes(g)), pick: () => toggle('grades', g, '학년') }));
    v.plans = [1, 2, 3].map((p) => ({ label: '플랜 ' + p, on: s.plans.includes(p), style: pill(s.plans.includes(p)), pick: () => toggle('plans', p, '플랜') }));
    const gi = s.grades.map((g) => GRADES.indexOf(g) + 1);
    const nW = new Set(DATA.KW.filter((k) => k[3] === s.month && gi.includes(k[1]) && s.plans.includes(k[2])).map((k) => k[0])).size;
    const nB = new Set(DATA.KB.filter((k) => gi.includes(k[1])).map((k) => k[0])).size;
    const nG = new Set(DATA.KG.filter((k) => gi.includes(k[1])).map((k) => k[0])).size;
    v.scopeSummary = '한글책에 위클리 ' + s.month + '월 ' + nW + '권 · 베스트 ' + nB + '권 · 고전 ' + nG + '권이 나와요. 위클리·베스트·고전 모두 같은 학년을 따라요. 겹치는 책은 한 번만 나오고 어디 소속인지 꼬리표가 붙어요.';
    const setGoal = (k, val) => this.setState({ goals: Object.assign({}, s.goals, { [k]: Math.max(0, val) }) });
    v.goalEdit = ACTS.map((a) => ({
      name: a.name, color: a.color, value: fmt(s.goals[a.key]),
      down: () => setGoal(a.key, s.goals[a.key] - 5), up: () => setGoal(a.key, s.goals[a.key] + 5),
      downLabel: a.name + ' 목표 5분 줄이기', upLabel: a.name + ' 목표 5분 늘리기',
    }));

    // ---- 쪽수 묻기 (책 리스트 체크)
    const askB = s.sheet === 'ask' && s.askId ? this.book(s.askId) : null;
    v.askOpen = !!askB;
    v.askTitle = askB ? '‘' + askB.t + '’ 쪽수 정보가 없어요' : '';
    v.askOptions = [24, 32, 48, 64, 120].map((n) => ({ label: n + '쪽', pick: () => this.markRead(askB.id, { pg: n }) }));
    v.askSkip = () => askB && this.markRead(askB.id, { skipAsk: true });

    // ---- 바코드 찍기
    v.scanOpen = s.sheet === 'scan';
    v.scanCountText = s.scanCount ? '이번에 ' + s.scanCount + '권 기록' : '';
    v.videoRef = this.videoRef;
    v.scanStatus = s.scanMsg || '카메라를 켜는 중이에요…';
    v.scanPhoto = s.scanPhoto;
    v.onPhoto = (e) => this.props.api.scanPhoto(e.target.files && e.target.files[0]);
    v.closeScan = () => {
      const st = this.state;
      this.setState({ sheet: null, res: null, toast: st.scanCount ? { info: true, text: '바코드로 ' + st.scanCount + '권 기록했어요 · 기록 탭에 쪽수가 들어갔어요' } : null });
    };
    v.scanToastShow = v.scanOpen && !s.res && !!s.toast && !!s.toast.snap;
    const r = s.res;
    v.resOpen = !!r && (s.sheet === 'scan' || s.sheet === 'result');
    v.resClose = () => this.setState(s.sheet === 'scan' ? { res: null } : { sheet: null, res: null });
    v.rChips = []; v.rHasChips = false; v.rShowLang = false; v.rShowPages = false; v.rPageOpts = []; v.rLangs = []; v.rX = ''; v.rBadge = '';
    if (v.resOpen) {
      const rb = this.resBook();
      const isNew = r.origId === 'N1';
      const lists = isNew || rb.manual ? [] : this.where(rb.id);
      const exId = this.findExtraId(rb.t, isNew ? null : rb.id);
      const rs = s.reads[exId || rb.id] || [];
      const pg = this.pages(rb);
      v.rCloseHint = r.via === 'scan' ? '바깥을 누르면 닫히고 다시 찍을 수 있어요' : '바깥을 누르면 닫혀요';
      v.rKicker = r.via === 'scan' ? '바코드로 찾은 책' : '제목으로 찾은 책';
      v.rTitle = rb.t;
      v.rSub = [rb.a, rb.lv, pg ? pg + '쪽' : '쪽수 정보 없음', rb.star ? '★' + rb.star : '', rb.rev ? '리뷰 ' + rb.rev : ''].filter(Boolean).join(' · ');
      v.rX = rb.x ? (rb.lang === 'en' ? '한글판: ' : '원서: ') + rb.x : '';
      if (lists.length) { v.rBadge = lists.slice(0, 2).join(' / ') + (lists.length > 2 ? ' 외 ' + (lists.length - 2) + '곳' : '') + '에 있어요'; v.rBadgeStyle = BADGE.list; }
      else if (exId) { v.rBadge = '기타에 담겨 있어요'; v.rBadgeStyle = BADGE.jam; }
      else if (rb.link && BK[rb.link]) { v.rBadge = '잠수네 「' + BK[rb.link].t + '」 중 한 권' + (isNew ? ' · 도서관 장서에서 찾은 책' : ''); v.rBadgeStyle = BADGE.list; }
      else if (isNew || rb.manual) { v.rBadge = '잠수네 자료에 없는 책' + (isNew ? ' · 바코드(ISBN)로 찾은 제목·쪽수' : '') + ' · 기록하면 기타로 들어가요'; v.rBadgeStyle = BADGE.none; }
      else { v.rBadge = '잠수네 책 · 분류 목록 밖 · 기록하면 기타로 들어가요'; v.rBadgeStyle = BADGE.jam; }
      const today = rs.filter((x) => x === TODAY).length;
      v.rHist = rs.length ? rs.length + '번 읽음 · 마지막 ' + fmtD(rs[rs.length - 1]) + (today ? ' (오늘 ' + today + '번 기록함)' : '') : '아직 안 읽은 책';
      v.rHistColor = rs.length ? '#0F5F55' : '#5B6460';
      v.rChips = isNew ? [] : libChips(rb, this.isHome(rb.id)).filter((c) => !c.text.startsWith('한글판') && !c.text.startsWith('원서'));
      v.rHasChips = v.rChips.length > 0;
      v.rShowLang = isNew && !rb.link;
      const lang = r.lang || 'ko';
      v.rLangs = [['ko', '한글책'], ['en', '영어책']].map(([k, l]) => ({ label: l, on: lang === k, style: pill(lang === k),
        pick: () => this.setState({ res: Object.assign({}, this.state.res, { lang: k }) }) }));
      v.rShowPages = r.status === 'askPages';
      v.rPageOpts = [24, 32, 48, 64, 120].map((n) => ({ label: n + '쪽', pick: () => this.recordRes({ pg: n }) }));
      v.rSkipPages = () => this.recordRes({ pg: 0 });
      v.rShowBtn = r.status !== 'askPages';
      const kind = (isNew ? lang : rb.lang) === 'en' ? '리딩 ' : '한글 ';
      v.rBtnLabel = (rs.includes(TODAY) ? '오늘 또 읽음 기록' : '오늘 읽음 기록') + (pg ? ' · ' + kind + pg + '쪽' : '');
      v.rBtn = () => this.recordRes();
    }

    // ---- 찾기 · 직접 입력
    v.manualOpen = s.sheet === 'manual';
    v.mTitle = s.mTitle; v.mPages = s.mPages; v.mErr = s.mErr;
    v.onTitle = (e) => this.setState({ mTitle: e.target.value, mErr: '', mExpand: false });
    v.onPages = (e) => this.setState({ mPages: e.target.value.replace(/[^0-9]/g, '') });
    const norm = normT;
    const q = norm(s.mTitle);
    let sugs = [];
    if (q && !s.mExpand) {
      sugs = ALL.concat(Object.values(s.manual)).filter((b) => (b.n || (b.n = normT(b.t))).includes(q))
        .sort((x, y) => (norm(x.t).startsWith(q) ? 0 : 1) - (norm(y.t).startsWith(q) ? 0 : 1) || (y.rev || 0) - (x.rev || 0)).slice(0, 5);
    }
    v.mSugs = sugs.map((b) => {
      const n = (s.reads[b.id] || []).length;
      return { label: b.t, sub: [b.lang === 'en' ? '영어책' : '한글책', b.lv, b.pg ? b.pg + '쪽' : '', b.star ? '★' + b.star : '', n ? n + '번 읽음' : ''].filter(Boolean).join(' · '),
        pick: () => this.openRes(b.id, 'search') };
    });
    v.mHasSugs = sugs.length > 0;
    v.mShowFields = s.mExpand || (q.length > 0 && sugs.length === 0);
    v.mExpandGo = () => this.setState({ mExpand: true });
    v.mIsEn = s.mLang === 'en';
    v.mLangs = [['ko', '한글책'], ['en', '영어책']].map(([k, l]) => ({ label: l, on: s.mLang === k, style: pill(s.mLang === k), pick: () => this.setState({ mLang: k }) }));
    v.mLevels = ['J1', 'J2', 'J3', 'J4', 'J5', 'J6'].map((l) => ({ label: l, on: s.mLevel === l, style: pill(s.mLevel === l), pick: () => this.setState({ mLevel: s.mLevel === l ? '' : l }) }));
    const mSave = (read) => {
      const st = this.state, t = st.mTitle.trim();
      if (!t) { this.setState({ mErr: '책 제목을 넣어 주세요' }); return; }
      const pg = parseInt(st.mPages, 10) || 0;
      const b = { t, a: '', lv: st.mLang === 'en' ? st.mLevel : '', rev: 0, star: 0, pg, lang: st.mLang, cat: '', libs: [], sp: 0, newManual: true };
      this.addExtra(b, 'manual', read);
    };
    v.mSaveTodo = () => mSave(false);
    v.mSaveRead = () => mSave(true);

    // ---- 공통
    v.toastShow = !!s.toast && !s.sheet; v.toastText = s.toast ? s.toast.text : '';
    v.toastUndo = !!s.toast && !!s.toast.snap; v.toastClose = !!s.toast && !!s.toast.info;
    v.closeToast = () => this.setState({ toast: null });
    v.undo = () => { const t = this.state.toast; if (t && t.snap) this.setState(Object.assign({}, t.snap, { toast: null })); };
    const st8 = this.props.api.status();
    v.syncText = st8.text; v.syncColor = st8.ok ? '#0F5F55' : '#9A3412';
    v.syncNow = () => this.props.api.syncNow();
    v.copyFamilyLink = () => this.props.api.copyLink().then((how) => {
      if (how === 'copy') this.setState({ toast: { info: true, text: '가족 설치 링크를 복사했어요. 가족 카톡방 등에 붙여 넣어 주세요 (가족에게만!)' } });
      else if (!how) this.setState({ toast: { info: true, text: '링크를 복사하지 못했어요' } });
    });
    v.ownNote = LIB_DATA ? '정보나루 장서 파일(' + OWN_V + ') 기준이에요. 칩의 숫자는 분류번호(서가 위치)이고, 저자기호까지 들어간 정확한 청구기호는 다음 단계에서 붙여요.'
      : '도서관 장서 파일을 붙이면 소장 도서관과 분류번호가 나와요';
    v.dataVersion = '잠수네 데이터 ' + String(DATA.v || '').replace(/^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})$/, '$1.$2.$3 $4:$5') + ' · 책 ' + ALL.length.toLocaleString('ko-KR') + '권';
    v.navs = [['log', '기록'], ['stats', '통계'], ['list', '책 리스트'], ['settings', '설정']].map(([k, l]) => ({
      label: l, icon: ICONS[k], pick: () => this.setState({ tab: k, sheet: null, res: null, toast: null }),
      style: s.tab === k ? 'color: #0F766E; font-weight: 700' : 'color: #5B6460',
    }));
    return v;
  }
}

// ---- 구글 시트 저장 (오프라인이면 모아 두었다가 올림)
const SH = {
  '기록': ['id', '날짜', '항목', '분', '레벨', '시각', '만든때'],
  '읽음': ['id', '날짜', '책ID', '제목', '언어', '레벨', '쪽수', '출처', '시각', '만든때'],
  '기타책': ['책ID', '제목', '언어', '레벨', '쪽수', '작가', '출판사', '시리즈', '잠수네연결ID', '영어분류', '기타목록', '출처', '담은날'],
  '책메모': ['책ID', '우리집', '쪽수'],
  '설정': ['키', '값'],
};
const SRC_LABEL = { import: '읽은책 목록', scan: '바코드', search: '찾기', manual: '직접 입력' };
const SRC_CODE = {}; Object.keys(SRC_LABEL).forEach((k) => { SRC_CODE[SRC_LABEL[k]] = k; });
const ACT_NAME = {}, ACT_KEY = {};
ACTS.forEach((a) => { ACT_NAME[a.key] = a.name; ACT_KEY[a.name] = a.key; ACT_KEY[a.key] = a.key; });
const SET_KEYS = ['goals', 'grades', 'plans', 'levels'];
const DATA_KEYS = ['entries', 'reads', 'extra', 'manual', 'pgFix', 'home', 'goals', 'grades', 'plans', 'levels'];

function str(v) { return v == null ? '' : String(v); }
function num(v) { const n = Number(v); return isFinite(n) && n > 0 ? n : 0; }
function cmp(a, b) { return a < b ? -1 : a > b ? 1 : 0; }
function jsonOr(v, d) { try { const x = JSON.parse(v); return x == null ? d : x; } catch (e) { return d; } }
function canon(v) { try { return JSON.stringify(JSON.parse(v)); } catch (e) { return str(v); } }

function rowsToSrv(data) {
  const srv = {};
  Object.keys(SH).forEach((s) => {
    const m = {}, key = SH[s][0];
    (data[s] || []).forEach((r) => { const id = str(r[key]); if (id) m[id] = r; });
    srv[s] = m;
  });
  return srv;
}
function applyOps(srv, ops) {
  ops.forEach((o) => {
    const m = srv[o.s]; if (!m) return;
    const key = SH[o.s][0];
    if (o.op === 'del') delete m[o.id];
    else if (o.op === 'add') { if (!m[o.id]) m[o.id] = Object.assign({}, o.row, { [key]: o.id }); }
    else m[o.id] = Object.assign({}, o.row, { [key]: o.id });
  });
}

// 시트 → 앱 상태
function srvToState(srv) {
  const manual = {}, extra = [], home = {}, pgFix = {}, reads = {}, entries = [];
  Object.values(srv['기타책']).forEach((r, i) => {
    const id = str(r['책ID']);
    const src = SRC_CODE[str(r['출처'])] || 'manual';
    if (!BK[id]) {
      const link = str(r['잠수네연결ID']), lb = BK[link];
      manual[id] = {
        id, t: str(r['제목']), a: str(r['작가']), lv: str(r['레벨']), pg: num(r['쪽수']), lang: r['언어'] === 'en' ? 'en' : 'ko',
        cat: '', rev: 0, star: 0, libs: [], sp: 0, pub: str(r['출판사']), series: str(r['시리즈']), link,
        sr: lb ? lb.t : '', ec: str(r['영어분류']), manual: src !== 'import', src, row: r,
      };
    }
    if (str(r['기타목록']) === 'O') extra.push({ id, src, added: str(r['담은날']), _i: i });
  });
  extra.sort((a, b) => cmp(b.added, a.added) || b._i - a._i);
  extra.forEach((x) => { delete x._i; });
  Object.values(srv['책메모']).forEach((r) => {
    const id = str(r['책ID']);
    if (str(r['우리집']) === 'O') home[id] = true;
    if (num(r['쪽수'])) pgFix[id] = num(r['쪽수']);
  });
  const rr = Object.values(srv['읽음']).filter((r) => str(r['날짜']) && str(r['책ID']))
    .sort((a, b) => cmp(str(a['날짜']), str(b['날짜'])) || cmp(str(a['시각']), str(b['시각'])) || cmp(str(a['만든때']), str(b['만든때'])));
  rr.forEach((r) => {
    const id = str(r['책ID']), d = str(r['날짜']);
    if (!BK[id] && !manual[id]) {
      manual[id] = { id, t: str(r['제목']) || '(알 수 없는 책)', a: '', lv: str(r['레벨']), pg: num(r['쪽수']), lang: r['언어'] === 'en' ? 'en' : 'ko', cat: '', rev: 0, star: 0, libs: [], sp: 0, ghost: true };
    }
    const b = BK[id] || manual[id];
    (reads[id] || (reads[id] = [])).push(d);
    entries.push({ id: 'r' + str(r['id']), key: b.lang === 'en' ? 'read' : 'kor', min: 0, pages: num(r['쪽수']), level: b.lang === 'en' ? str(r['레벨']) : '',
      time: str(r['시각']), book: b.t, src: id, nth: reads[id].length, date: d });
  });
  Object.values(srv['기록']).forEach((r) => {
    entries.push({ id: str(r['id']), key: ACT_KEY[str(r['항목'])] || str(r['항목']), min: num(r['분']), pages: 0, level: str(r['레벨']), time: str(r['시각']), date: str(r['날짜']) });
  });
  entries.sort((a, b) => cmp(a.date, b.date) || cmp(a.time, b.time));
  const st = { entries, reads, extra, manual, pgFix, home };
  const S = srv['설정'];
  const def = { goals: { jip: 30, video: 60, audio: 30, read: 20, kor: 60 }, grades: ['초1'], plans: [1], levels: { jip: 'J3', video: 'JD4', read: 'J3' } };
  SET_KEYS.forEach((k) => { st[k] = S[k] ? jsonOr(S[k]['값'], def[k]) : def[k]; });
  return st;
}

// 앱 상태 → 시트가 가져야 할 모습
function wantRows(s, srv) {
  const out = { '기록': {}, '기타책': {}, '책메모': {}, '설정': {} };
  s.entries.forEach((e) => {
    if (e.src) return;
    out['기록'][e.id] = { id: e.id, '날짜': e.date, '항목': ACT_NAME[e.key] || e.key, '분': e.min, '레벨': e.level || '', '시각': e.time || '' };
  });
  const ex = {}; s.extra.forEach((x) => { ex[x.id] = x; });
  const ids = new Set(Object.keys(srv['기타책']));
  Object.keys(s.manual).forEach((id) => { if (!s.manual[id].ghost) ids.add(id); });
  s.extra.forEach((x) => ids.add(x.id));
  ids.forEach((id) => {
    const b = BK[id] || s.manual[id]; if (!b) return;
    const x = ex[id], r0 = srv['기타책'][id] || {};
    out['기타책'][id] = {
      '책ID': id, '제목': b.t, '언어': b.lang, '레벨': b.lv || '', '쪽수': b.pg || '', '작가': b.a || '', '출판사': b.pub || '', '시리즈': b.series || '',
      '잠수네연결ID': b.link || '', '영어분류': b.ec || '', '기타목록': x ? 'O' : '',
      '출처': x ? (SRC_LABEL[x.src] || '') : (str(r0['출처']) || SRC_LABEL[b.src] || ''),
      '담은날': x ? x.added : (str(r0['담은날']) || ''),
    };
  });
  new Set(Object.keys(s.home).concat(Object.keys(s.pgFix))).forEach((id) => {
    const hm = s.home[id] ? 'O' : '', pg = s.pgFix[id] || '';
    if (hm || pg) out['책메모'][id] = { '책ID': id, '우리집': hm, '쪽수': pg };
  });
  SET_KEYS.forEach((k) => { out['설정'][k] = { '키': k, '값': JSON.stringify(s[k]) }; });
  return out;
}
function sameRow(sheet, a, b) {
  if (sheet === '설정') return canon(a['값']) === canon(b['값']);
  return SH[sheet].every((c) => c === '만든때' || str(a[c]) === str(b[c]));
}

function diffOps(s, srv, book, pages) {
  const ops = [], W = wantRows(s, srv);
  ['기록', '기타책', '책메모', '설정'].forEach((sh) => {
    const cur = srv[sh], want = W[sh];
    Object.keys(want).forEach((id) => {
      if (!cur[id]) ops.push({ op: 'add', s: sh, id, row: Object.assign({ '만든때': Date.now() }, want[id]) });
      else if (!sameRow(sh, cur[id], want[id])) ops.push({ op: 'put', s: sh, id, row: Object.assign({}, cur[id], want[id]) });
    });
    if (sh === '기록' || sh === '책메모') Object.keys(cur).forEach((id) => { if (!want[id]) ops.push({ op: 'del', s: sh, id }); });
  });
  // 읽음: 책마다 날짜 묶음을 맞춤 (날짜만 바뀐 건 그 줄을 고침)
  const byBook = {};
  Object.values(srv['읽음']).forEach((r) => { const id = str(r['책ID']); if (id && str(r['날짜'])) (byBook[id] || (byBook[id] = [])).push(r); });
  const used = new Set();
  new Set(Object.keys(byBook).concat(Object.keys(s.reads))).forEach((bid) => {
    const want = (s.reads[bid] || []).slice(), left = [];
    (byBook[bid] || []).forEach((r) => { const i = want.indexOf(str(r['날짜'])); if (i >= 0) want.splice(i, 1); else left.push(r); });
    left.sort((a, b) => cmp(str(a['날짜']), str(b['날짜']))); want.sort();
    while (left.length && want.length) { const r = left.shift(); ops.push({ op: 'put', s: '읽음', id: str(r.id), row: Object.assign({}, r, { '날짜': want.shift() }) }); }
    left.forEach((r) => ops.push({ op: 'del', s: '읽음', id: str(r.id) }));
    want.forEach((d) => {
      const b = book(bid); if (!b) return;
      const e = s.entries.find((x) => x.src === bid && x.date === d && !used.has(x));
      if (e) used.add(e);
      const id = 'P' + uid();
      ops.push({ op: 'add', s: '읽음', id, row: { id, '날짜': d, '책ID': bid, '제목': b.t, '언어': b.lang, '레벨': b.lv || '', '쪽수': (e ? e.pages : pages(b)) || '',
        '출처': e && e.via ? (SRC_LABEL[e.via] || '앱') : '앱', '시각': e ? e.time : '', '만든때': Date.now() } });
    });
  });
  return ops;
}

const Sync = {
  cfg: null, logic: null, srv: null, queue: [], rev: 0, sheetId: '', lastOk: 0, lastLoad: 0, busy: false, err: '', timer: null, retry: null, loading: null,
  KEY: 'jamsu.sync.v1',
  restore() {
    try {
      const o = JSON.parse(localStorage.getItem(this.KEY) || 'null');
      if (o && o.srv && o.api === this.cfg.api) Object.assign(this, { srv: o.srv, queue: o.queue || [], rev: o.rev || 0, sheetId: o.sheetId || '', lastOk: o.lastOk || 0 });
    } catch (e) { /* 저장된 게 깨졌으면 새로 받음 */ }
    return !!this.srv;
  },
  save() {
    try { localStorage.setItem(this.KEY, JSON.stringify({ api: this.cfg.api, srv: this.srv, queue: this.queue, rev: this.rev, sheetId: this.sheetId, lastOk: this.lastOk })); }
    catch (e) { this.err = '폰 저장공간이 부족해요'; }
  },
  ui() { if (this.logic && this.logic.props.redraw) this.logic.props.redraw(); },
  async post(body) {
    const ctl = new AbortController(), t = setTimeout(() => ctl.abort(), 40000);
    try {
      const r = await fetch(this.cfg.api, { method: 'POST', body: JSON.stringify(Object.assign({ k: this.cfg.k }, body)), signal: ctl.signal });
      const j = await r.json();
      if (!j.ok) throw new Error(j.error || '저장소 오류');
      return j;
    } catch (e) {
      throw new Error(e.name === 'AbortError' ? '응답이 너무 늦어요' : e instanceof SyntaxError ? '웹 앱 주소를 확인해 주세요' : e instanceof TypeError ? '연결 안 됨' : e.message);
    } finally { clearTimeout(t); }
  },
  watch(prev, next) {
    if (!this.srv || this.applying) return;
    if (DATA_KEYS.some((k) => prev[k] !== next[k])) { clearTimeout(this.timer); this.timer = setTimeout(() => this.check(), 700); }
  },
  check() {
    clearTimeout(this.timer);
    if (!this.srv || !this.logic) return 0;
    const L = this.logic;
    const ops = diffOps(L.state, this.srv, (id) => L.book(id), (b) => L.pages(b));
    if (ops.length) { applyOps(this.srv, ops); this.queue.push(...ops); this.save(); this.flush(); this.ui(); }
    return ops.length;
  },
  async flush() {
    if (this.busy || !this.queue.length) return;
    this.busy = true; this.ui();
    let again = false;
    try {
      const batch = this.queue.slice(0, 300);
      const res = await this.post({ a: 'ops', ops: batch });
      this.queue.splice(0, batch.length);
      const expect = this.rev + (res.done ? 1 : 0);
      this.rev = res.rev; this.sheetId = res.sheetId || this.sheetId; this.lastOk = Date.now(); this.err = '';
      this.save();
      if (res.rev !== expect) this.stale = true;
      again = this.queue.length > 0;
    } catch (e) {
      this.err = e.message;
      clearTimeout(this.retry); this.retry = setTimeout(() => this.flush(), 20000);
    } finally { this.busy = false; this.ui(); }
    if (again) return this.flush();
    if (this.stale && !this.queue.length) { this.stale = false; this.load(); }
  },
  // 시트 전체를 받아서 앱에 반영 (다른 가족이 기록한 것도 들어옴)
  load() {
    if (this.loading) return this.loading;
    this.loading = (async () => {
      try {
        this.check();
        if (this.queue.length) await this.flush();
        const res = await this.post({ a: 'load' });
        const srv = rowsToSrv(res.data || {});
        if (this.queue.length) applyOps(srv, this.queue);
        Object.assign(this, { srv, rev: res.rev, sheetId: res.sheetId || this.sheetId, lastOk: Date.now(), lastLoad: Date.now(), err: '' });
        this.save();
        this.rebuild();
        return true;
      } catch (e) { this.err = e.message; this.ui(); throw e; }
      finally { this.loading = null; }
    })();
    return this.loading;
  },
  rebuild() {
    if (!this.logic) return;
    this.applying = true;
    try { this.logic.setState(srvToState(this.srv)); } finally { this.applying = false; }
  },
  status() {
    if (this.busy) return { ok: true, text: '저장하는 중…' };
    if (this.queue.length) return { ok: false, text: '아직 안 올라간 기록 ' + this.queue.length + '건 · ' + (this.err ? '인터넷 연결되면 자동으로 올라가요 (' + this.err + ')' : '곧 올라가요') };
    if (this.err) return { ok: false, text: '구글 시트 연결 확인 필요 · ' + this.err };
    if (this.lastOk) { const d = new Date(this.lastOk); return { ok: true, text: '모두 구글 시트에 저장됨 · ' + fmtD(isoOf(d)) + ' ' + d.toTimeString().slice(0, 5) }; }
    return { ok: false, text: '아직 구글 시트와 연결 전이에요' };
  },
};

// ---- 바코드 (폰 카메라 + 크롬 내장 바코드 인식)
function isbnOk(v) {
  if (!/^97[89]\d{10}$/.test(v)) return false;
  let s = 0;
  for (let i = 0; i < 12; i++) s += (+v[i]) * (i % 2 ? 3 : 1);
  return (10 - (s % 10)) % 10 === +v[12];
}

const Scanner = {
  el: null, stream: null, det: null, timer: null, last: '', lastAt: 0, onCode: null, onMsg: null,
  detector() {
    if (this.det) return this.det;
    if (!('BarcodeDetector' in window)) return null;
    try { this.det = new window.BarcodeDetector({ formats: ['ean_13'] }); } catch (e) { this.det = null; }
    return this.det;
  },
  async attach(el, onCode, onMsg) {
    if (el === this.el) return;
    this.stop();
    if (!el) return;
    this.el = el; this.onCode = onCode; this.onMsg = onMsg;
    if (!this.detector()) { onMsg('이 브라우저는 바코드 자동 인식이 안 돼요. 안드로이드 크롬으로 열어 주세요. 아래 버튼으로 제목을 찾아 기록할 수도 있어요.', false); return; }
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) { onMsg('카메라를 쓸 수 없는 환경이에요. 사진으로 찍어서 읽어 주세요.', true); return; }
    onMsg('카메라를 켜는 중이에요…', false);
    let stream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: false, video: { facingMode: { ideal: 'environment' }, width: { ideal: 1280 }, height: { ideal: 720 } } });
    } catch (e) {
      if (this.el === el) onMsg('카메라를 켤 수 없어요. 주소창 왼쪽 자물쇠에서 카메라를 허용하거나, 사진으로 찍어서 읽어 주세요.', true);
      return;
    }
    if (this.el !== el) { stream.getTracks().forEach((t) => t.stop()); return; }
    this.stream = stream;
    el.muted = true; el.setAttribute('playsinline', ''); el.srcObject = stream;
    try { await el.play(); } catch (e) { /* 자동 재생이 막혀도 인식은 계속 */ }
    onMsg('바코드를 네모 칸에 맞춰 주세요', false);
    this.loop(el);
  },
  loop(el) {
    const tick = async () => {
      if (this.el !== el) return;
      try {
        if (el.readyState >= 2) {
          const codes = await this.det.detect(el);
          this.take(codes);
        }
      } catch (e) { /* 한 번 실패는 무시 */ }
      if (this.el === el) this.timer = setTimeout(tick, 200);
    };
    tick();
  },
  take(codes) {
    for (const c of codes || []) {
      const v = String(c.rawValue || '').replace(/\D/g, '');
      if (!isbnOk(v)) continue;
      const now = Date.now(), fresh = v !== this.last || now - this.lastAt > 2500;
      this.last = v; this.lastAt = now;           // 같은 책이 화면에 계속 있으면 다시 띄우지 않음
      if (fresh && this.onCode) this.onCode(v);
      return true;
    }
    return false;
  },
  async photo(file) {
    if (!file || !this.onMsg) return;
    const det = this.detector();
    if (!det) { this.onMsg('이 브라우저는 바코드 인식이 안 돼요. 아래 버튼으로 제목을 찾아 주세요.', false); return; }
    this.onMsg('사진에서 바코드를 찾는 중…', true);
    try {
      const bmp = await createImageBitmap(file);
      const codes = await det.detect(bmp);
      this.last = ''; this.lastAt = 0;
      if (!this.take(codes)) this.onMsg('사진에서 ISBN 바코드를 못 찾았어요. 바코드가 크고 선명하게 나오게 다시 찍어 주세요.', true);
    } catch (e) { this.onMsg('사진을 읽지 못했어요. 다시 찍어 주세요.', true); }
  },
  stop() {
    clearTimeout(this.timer);
    if (this.stream) this.stream.getTracks().forEach((t) => t.stop());
    if (this.el) { try { this.el.srcObject = null; } catch (e) { /* 무시 */ } }
    this.stream = null; this.el = null;
  },
};

// ISBN → 책 정보 (구글 북스) → 잠수네 목록에서 같은 제목 찾기
const ISBN_KEY = 'jamsu.isbn.v1';
function isbnCache() { try { return JSON.parse(localStorage.getItem(ISBN_KEY) || '{}'); } catch (e) { return {}; } }
async function googleBooks(isbn) {
  const r = await fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn);
  if (!r.ok) throw new Error('책 정보 서버 응답 ' + r.status);
  const j = await r.json();
  const it = j.items && j.items[0] && j.items[0].volumeInfo;
  if (!it || !it.title) return null;
  const t = it.title, hangul = /[가-힣]/.test(t);
  return { t, sub: it.subtitle || '', a: (it.authors || []).join(', '), pg: it.pageCount || 0, pub: it.publisher || '',
    lang: it.language === 'ko' || hangul ? 'ko' : 'en' };
}
function titleKeys(t) {
  const a = normT(t), b = normT(String(t).split(/[:(\[\/=·|]/)[0]), c = normT(String(t).replace(/\([^)]*\)|\[[^\]]*\]/g, ''));
  return Array.from(new Set([a, b, c])).filter((k) => k.length >= 2);
}
function matchBook(info, st) {
  const keys = titleKeys(info.t).concat(info.sub ? titleKeys(info.t + ' ' + info.sub) : []);
  let cand = [];
  keys.forEach((k) => { (TITLE_IDX[k] || []).forEach((id) => cand.push(BK[id])); });
  Object.values(st.manual).forEach((b) => { if (!b.ghost && keys.includes(normT(b.t))) cand.push(b); });
  cand = Array.from(new Set(cand));
  if (!cand.length) return null;
  const same = cand.filter((b) => b.lang === info.lang);
  if (same.length) cand = same;
  const au = normT((info.a || '').split(',')[0]);
  const score = (b) => (au && b.a && (normT(b.a).includes(au) || au.includes(normT(b.a))) ? 1000000 : 0) + (b.rev || 0);
  cand.sort((x, y) => score(y) - score(x));
  return cand[0].id;
}
function sameVol(a, b) {
  const x = normT(a), y = normT(b);
  return !!x && !!y && (x === y || (y.length >= 5 && x.endsWith(y)) || (x.length >= 5 && y.endsWith(x)));
}
function withTimeout(p, ms) { return Promise.race([p, new Promise((_, no) => setTimeout(() => no(new Error('timeout')), ms))]); }
async function bookInfo(isbn) {
  const cache = isbnCache();
  let info = cache[isbn];
  if (!info) {
    info = await googleBooks(isbn);
    if (info) { cache[isbn] = info; try { localStorage.setItem(ISBN_KEY, JSON.stringify(cache)); } catch (e) { /* 무시 */ } }
  }
  return info || null;
}
async function findIsbn(isbn, st) {
  // 1) 우리 자료(도서관 장서로 만든 ISBN 색인)에서 먼저 → 인터넷 없이 바로
  const hit = ISB[isbn];
  if (typeof hit === 'string' && BK[hit]) return { id: hit };
  if (Array.isArray(hit) && BK[hit[0]]) {
    const ser = BK[hit[0]], vt = hit[1] || ser.t;
    const same = Object.values(st.manual).find((b) => !b.ghost && b.link === ser.id && sameVol(b.t, vt));
    if (same) return { id: same.id };
    let pg = 0;
    try { const g = await withTimeout(bookInfo(isbn), 4000); if (g) pg = g.pg || 0; } catch (e) { /* 쪽수는 없어도 됨 */ }
    return { nb: { t: vt, a: ser.a, lv: ser.lv, pg, lang: ser.lang, link: ser.id, sr: ser.t, ec: ser.ec, isbn } };
  }
  // 2) 우리 자료에 없을 때만 바깥 책 정보(구글 북스)로 제목을 알아내서 잠수네 제목과 맞춤
  const info = await bookInfo(isbn);
  if (!info) return {};
  const id = matchBook(info, st);
  return id ? { id } : { nb: { t: info.t, a: info.a, pg: info.pg, lang: info.lang, pub: info.pub, isbn } };
}

// ---- 엑셀(.xlsx) 파일을 폰에서 바로 만들기 (압축 없는 zip + 시트 XML)
const CRC_T = (() => { const t = new Uint32Array(256); for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
function crc32(u) { let c = 0xFFFFFFFF; for (let i = 0; i < u.length; i++) c = CRC_T[(c ^ u[i]) & 0xFF] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; }
function zipStore(files) {
  const enc = new TextEncoder(), parts = [], cen = [];
  let off = 0;
  const le = (n, b) => { const a = new Uint8Array(b); for (let i = 0; i < b; i++) a[i] = (n >>> (8 * i)) & 0xFF; return a; };
  files.forEach((f) => {
    const name = enc.encode(f.name), data = typeof f.data === 'string' ? enc.encode(f.data) : f.data, crc = crc32(data);
    const head = [le(0x04034b50, 4), le(20, 2), le(0x0800, 2), le(0, 2), le(0, 2), le(0x21, 2), le(crc, 4), le(data.length, 4), le(data.length, 4), le(name.length, 2), le(0, 2), name];
    cen.push([le(0x02014b50, 4), le(20, 2), le(20, 2), le(0x0800, 2), le(0, 2), le(0, 2), le(0x21, 2), le(crc, 4), le(data.length, 4), le(data.length, 4),
      le(name.length, 2), le(0, 2), le(0, 2), le(0, 2), le(0, 2), le(0, 4), le(off, 4), name]);
    head.concat([data]).forEach((p) => { parts.push(p); off += p.length; });
  });
  let csize = 0;
  cen.forEach((c) => c.forEach((p) => { parts.push(p); csize += p.length; }));
  parts.push(le(0x06054b50, 4), le(0, 2), le(0, 2), le(files.length, 2), le(files.length, 2), le(csize, 4), le(off, 4), le(0, 2));
  return new Blob(parts, { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
}
function xesc(s) { return String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, ''); }
function colName(i) { let s = ''; i += 1; while (i) { const m = (i - 1) % 26; s = String.fromCharCode(65 + m) + s; i = Math.floor((i - 1) / 26); } return s; }
function sheetXml(rows, widths) {
  const body = rows.map((r, ri) => '<row r="' + (ri + 1) + '">' + r.map((v, ci) => {
    const ref = colName(ci) + (ri + 1), st = ri === 0 ? ' s="1"' : '';
    if (v === '' || v == null) return ri === 0 ? '<c r="' + ref + '"' + st + '/>' : '';
    if (typeof v === 'number' && isFinite(v)) return '<c r="' + ref + '"' + st + '><v>' + v + '</v></c>';
    return '<c r="' + ref + '" t="inlineStr"' + st + '><is><t xml:space="preserve">' + xesc(v) + '</t></is></c>';
  }).join('') + '</row>').join('');
  const cols = widths ? '<cols>' + widths.map((w, i) => '<col min="' + (i + 1) + '" max="' + (i + 1) + '" width="' + w + '" customWidth="1"/>').join('') + '</cols>' : '';
  return '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">' +
    '<sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>' +
    cols + '<sheetData>' + body + '</sheetData></worksheet>';
}
function makeXlsx(sheets) {
  const NS = 'http://schemas.openxmlformats.org';
  const files = [
    { name: '[Content_Types].xml', data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="' + NS + '/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>' +
      sheets.map((s, i) => '<Override PartName="/xl/worksheets/sheet' + (i + 1) + '.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>').join('') + '</Types>' },
    { name: '_rels/.rels', data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="' + NS + '/package/2006/relationships"><Relationship Id="rId1" Type="' + NS + '/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>' },
    { name: 'xl/workbook.xml', data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="' + NS + '/spreadsheetml/2006/main" xmlns:r="' + NS + '/officeDocument/2006/relationships"><sheets>' +
      sheets.map((s, i) => '<sheet name="' + xesc(s.name) + '" sheetId="' + (i + 1) + '" r:id="rId' + (i + 1) + '"/>').join('') + '</sheets></workbook>' },
    { name: 'xl/_rels/workbook.xml.rels', data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="' + NS + '/package/2006/relationships">' +
      sheets.map((s, i) => '<Relationship Id="rId' + (i + 1) + '" Type="' + NS + '/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet' + (i + 1) + '.xml"/>').join('') +
      '<Relationship Id="rId' + (sheets.length + 1) + '" Type="' + NS + '/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>' },
    { name: 'xl/styles.xml', data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><styleSheet xmlns="' + NS + '/spreadsheetml/2006/main"><fonts count="2"><font><sz val="10"/><name val="Arial"/></font><font><b/><sz val="10"/><name val="Arial"/></font></fonts><fills count="3"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FFE6F2EF"/></patternFill></fill></fills><borders count="1"><border/></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="2"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles></styleSheet>' },
  ];
  sheets.forEach((s, i) => files.push({ name: 'xl/worksheets/sheet' + (i + 1) + '.xml', data: sheetXml(s.rows, s.widths) }));
  return zipStore(files);
}

// 앱 기록 → 엑셀 4장 (읽은 기록 · 시간 기록 · 월별 요약 · 책별)
function exportWorkbook(L) {
  const s = L.state, langName = (b) => (b.lang === 'en' ? '영어' : '한글');
  const reads = [];
  Object.keys(s.reads).forEach((id) => {
    const b = L.book(id); if (!b) return;
    s.reads[id].forEach((d, i) => reads.push({ d, b, n: i + 1 }));
  });
  reads.sort((x, y) => cmp(x.d, y.d) || cmp(x.b.t, y.b.t));
  const r1 = [['날짜', '언어', '제목', '레벨', '쪽수', '몇 번째', '어디 책']].concat(reads.map((x) =>
    [x.d, langName(x.b), x.b.t, x.b.lv || '', L.pages(x.b) || '', x.n, L.placeOf(x.b.id).join(', ')]));
  const mins = s.entries.filter((e) => !e.src).sort((a, b) => cmp(a.date, b.date) || cmp(a.time, b.time));
  const r2 = [['날짜', '항목', '분', '레벨', '시각']].concat(mins.map((e) => [e.date, ACT_NAME[e.key] || e.key, e.min, e.level || '', e.time || '']));
  const mon = {};
  const M = (k) => mon[k] || (mon[k] = { ko: 0, kp: 0, en: 0, ep: 0, min: {} });
  reads.forEach((x) => { const m = M(x.d.slice(0, 7)), p = L.pages(x.b) || 0; if (x.b.lang === 'en') { m.en++; m.ep += p; } else { m.ko++; m.kp += p; } });
  mins.forEach((e) => { const m = M(e.date.slice(0, 7)); m.min[e.key] = (m.min[e.key] || 0) + e.min; });
  const r3 = [['월', '한글책 횟수', '한글책 쪽수', '영어책 횟수', '영어책 쪽수'].concat(ACTS.map((a) => a.name + ' (분)'))].concat(Object.keys(mon).sort().map((k) => {
    const m = mon[k]; return [k, m.ko, m.kp, m.en, m.ep].concat(ACTS.map((a) => m.min[a.key] || 0));
  }));
  const r4 = [['제목', '언어', '레벨', '쪽수', '읽은 횟수', '처음 읽은 날', '마지막 읽은 날', '우리집 책', '어디 책']].concat(Object.keys(s.reads).map((id) => {
    const b = L.book(id), d = s.reads[id]; if (!b || !d.length) return null;
    return [b.t, langName(b), b.lv || '', L.pages(b) || '', d.length, d[0], d[d.length - 1], s.home[id] ? 'O' : '', L.placeOf(id).join(', ')];
  }).filter(Boolean).sort((x, y) => cmp(y[6], x[6])));
  return makeXlsx([
    { name: '읽은 기록', rows: r1, widths: [12, 6, 40, 7, 7, 8, 40] },
    { name: '시간 기록', rows: r2, widths: [12, 14, 7, 7, 7] },
    { name: '월별 요약', rows: r3, widths: [9, 11, 11, 11, 11, 13, 10, 15, 10, 14] },
    { name: '책별', rows: r4, widths: [40, 6, 7, 7, 9, 13, 13, 9, 40] },
  ]);
}
function downloadBlob(blob, name) {
  const url = URL.createObjectURL(blob), a = document.createElement('a');
  a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 30000);
}

// ---- 시작: 설정 확인 → 잠수네 자료 풀기 → 기록 불러오기 → 화면
const CFG_KEY = 'jamsu.cfg.v1';
const ROOT = document.getElementById('app');

function readCfg() {
  let cfg = {};
  try { cfg = JSON.parse(localStorage.getItem(CFG_KEY) || '{}') || {}; } catch (e) { cfg = {}; }
  if (location.hash.length > 3) {
    const q = new URLSearchParams(location.hash.slice(1));
    ['k', 'd', 'u'].forEach((x) => { if (q.get(x)) cfg[x === 'u' ? 'api' : x] = q.get(x).trim(); });
    try { localStorage.setItem(CFG_KEY, JSON.stringify(cfg)); } catch (e) { /* 무시 */ }
    history.replaceState(null, '', location.pathname + location.search);   // 주소창에 비밀값이 남지 않게
  }
  return cfg;
}
function saveCfg(cfg) { localStorage.setItem(CFG_KEY, JSON.stringify(cfg)); }

function screen(html) { ROOT.innerHTML = '<div class="pane">' + html + '</div>'; return ROOT.firstChild; }
function esc(s) { return String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])); }

function b64u(s) {
  s = s.replace(/-/g, '+').replace(/_/g, '/'); while (s.length % 4) s += '=';
  const bin = atob(s), u = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) u[i] = bin.charCodeAt(i);
  return u;
}
async function loadDb(key, onStep) {
  onStep('잠수네 책 자료를 받는 중…');
  const r = await fetch('data/db.enc?v=' + DB_VERSION);
  if (!r.ok) throw new Error('자료 파일을 받지 못했어요 (' + r.status + ')');
  const buf = new Uint8Array(await r.arrayBuffer());
  if (String.fromCharCode(...buf.slice(0, 4)) !== 'JSU1') throw new Error('자료 파일 형식이 달라요');
  onStep('자료를 푸는 중…');
  const k = await crypto.subtle.importKey('raw', b64u(key), 'AES-GCM', false, ['decrypt']);
  let plain;
  try { plain = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: buf.slice(4, 16), additionalData: new TextEncoder().encode('jamsu') }, k, buf.slice(16)); }
  catch (e) { throw new Error('설치 링크의 열쇠가 맞지 않아요. 가족 설치 링크로 다시 열어 주세요.'); }
  const text = await new Response(new Blob([plain]).stream().pipeThrough(new DecompressionStream('gzip'))).text();
  return JSON.parse(text);
}

async function shareLink(cfg) {
  const url = location.origin + location.pathname + '#k=' + encodeURIComponent(cfg.k) + '&d=' + encodeURIComponent(cfg.d) + '&u=' + encodeURIComponent(cfg.api);
  if (navigator.share) {
    try { await navigator.share({ title: '우리집 독서기록 설치 링크', text: '열어서 홈 화면에 추가해 주세요 (가족만 보기)', url }); return 'share'; }
    catch (e) { if (e.name === 'AbortError') return 'share'; }
  }
  try { await navigator.clipboard.writeText(url); return 'copy'; } catch (e) { return false; }
}

// 처음 설치: 설치 코드(비밀키:열쇠) + 구글 시트 웹 앱 주소
function askSetup(cfg) {
  return new Promise((resolve) => {
    const needCode = !cfg.k || !cfg.d;
    const el = screen('<h1>우리집 독서기록 설치</h1>' +
      (needCode ? '<p>받은 <b>설치 코드</b>를 붙여 넣어 주세요.<br><span class="sub">가족은 이 화면 대신 \'가족 설치 링크\'를 누르면 바로 열려요</span></p>' +
        '<input id="code" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="설치 코드">' : '') +
      '<p>구글 시트의 <b>웹 앱 주소</b>를 붙여 넣어 주세요.<br><span class="sub">https://script.google.com/macros/s/…/exec 모양이에요</span></p>' +
      '<input id="api" type="url" inputmode="url" autocomplete="off" placeholder="https://script.google.com/macros/s/.../exec" value="' + esc(cfg.api || '') + '">' +
      '<button id="go">연결하기</button><p id="msg" class="sub"></p>');
    const msg = el.querySelector('#msg'), btn = el.querySelector('#go');
    btn.onclick = async () => {
      const next = Object.assign({}, cfg);
      if (needCode) {
        const m = /^\s*([\w-]{16,64}):([\w-]{43})\s*$/.exec(el.querySelector('#code').value);
        if (!m) { msg.textContent = '설치 코드 모양이 달라요. 받은 코드를 통째로 붙여 넣어 주세요.'; return; }
        next.k = m[1]; next.d = m[2];
      }
      const api = el.querySelector('#api').value.trim();
      if (!/^https:\/\/script\.google\.com\/macros\/s\/[\w-]+\/exec$/.test(api)) { msg.textContent = '주소 모양이 달라요. 끝이 /exec 인 웹 앱 주소를 넣어 주세요.'; return; }
      next.api = api;
      btn.disabled = true; msg.textContent = '연결해 보는 중…';
      Sync.cfg = next;
      try { await Sync.post({ a: 'ping' }); Object.assign(cfg, next); saveCfg(cfg); resolve(cfg); }
      catch (e) { msg.textContent = '연결이 안 돼요 (' + e.message + '). 인터넷과, 웹 앱을 배포할 때 \'액세스: 모든 사용자\'로 했는지 확인해 주세요.'; btn.disabled = false; }
    };
  });
}

async function boot() {
  const cfg = readCfg();
  if (!cfg.k || !cfg.d || !cfg.api) await askSetup(cfg);
  Sync.cfg = cfg;
  const step = (t) => screen('<div class="boot">' + esc(t) + '</div>');
  let D;
  try { D = await loadDb(cfg.d, step); }
  catch (e) {
    const el = screen('<h1>자료를 열지 못했어요</h1><p>' + esc(e.message) + '</p><button id="re">다시 시도</button><button id="ch" class="ghost">설치 코드 다시 넣기</button>');
    el.querySelector('#re').onclick = () => location.reload();
    el.querySelector('#ch').onclick = () => { delete cfg.k; delete cfg.d; saveCfg(cfg); location.reload(); };
    return;
  }
  initData(D);
  if (!Sync.restore()) {
    step('우리집 기록을 불러오는 중… (처음 한 번은 조금 걸려요)');
    try {
      const res = await Sync.post({ a: 'load' });
      Object.assign(Sync, { srv: rowsToSrv(res.data || {}), rev: res.rev, sheetId: res.sheetId, lastOk: Date.now(), lastLoad: Date.now() });
      Sync.save();
    } catch (e) {
      const el = screen('<h1>기록을 불러오지 못했어요</h1><p>' + esc(e.message) + '</p><button id="re">다시 시도</button><button id="ch" class="ghost">웹 앱 주소 다시 넣기</button>');
      el.querySelector('#re').onclick = () => location.reload();
      el.querySelector('#ch').onclick = () => { delete cfg.api; saveCfg(cfg); location.reload(); };
      return;
    }
  }
  const api = {
    status: () => Sync.status(),
    syncNow: () => Sync.load().catch(() => {}),
    copyLink: () => shareLink(cfg),
    xlsx: () => new Promise((ok, no) => setTimeout(() => { try { downloadBlob(exportWorkbook(logic), '우리집_독서기록_' + TODAY.replace(/-/g, '') + '.xlsx'); ok(); } catch (e) { no(e); } }, 30)),
    camera: (el, onCode, onMsg) => Scanner.attach(el, onCode, onMsg),
    scanPhoto: (f) => Scanner.photo(f),
    findIsbn: (isbn, st) => findIsbn(isbn, st),
  };
  let toastTimer = null;
  const logic = new Component({
    api, init: srvToState(Sync.srv),
    onChange: (prev, next) => {
      if (logic.props.redraw) logic.props.redraw();
      Sync.watch(prev, next);
      if (next.toast && next.toast !== prev.toast) {
        clearTimeout(toastTimer);
        const t = next.toast;
        toastTimer = setTimeout(() => { if (logic.state.toast === t) logic.setState({ toast: null }); }, t.snap ? 7000 : 4500);
      }
      if (prev.sheet === 'scan' && next.sheet !== 'scan') Scanner.stop();
    },
  });
  Sync.logic = logic;
  ROOT.innerHTML = '';
  render(h(App, { logic }), ROOT);
  if (Sync.queue.length) Sync.flush();
  if (Date.now() - Sync.lastLoad > 15000) Sync.load().catch(() => {});
  let today = TODAY;
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') { Sync.check(); return; }
    const now = isoToday();
    if (now !== today) { const was = today; today = now; TODAY = now; if (logic.state.dayISO === was) logic.setState({ dayISO: now }); }
    if (Date.now() - Sync.lastLoad > 60000) Sync.load().catch(() => {}); else Sync.flush();
  });
  window.addEventListener('online', () => Sync.flush());
  window.addEventListener('pagehide', () => Sync.check());
}

if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});
boot().catch((e) => screen('<h1>문제가 생겼어요</h1><p>' + esc(e.message) + '</p><button onclick="location.reload()">다시 시도</button>'));
