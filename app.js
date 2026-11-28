import { h, render, Fragment, Component as PComponent } from './preact.mjs';
const DB_VERSION = "202611282312";
const TPL = [["div",{"style":"width: 100%; max-width: 560px; margin: 0 auto; height: 100dvh; position: relative; overflow: hidden; background: #F4F5F2; font-family: 'Noto Sans KR', system-ui, sans-serif; color: #1B1F1D; display: flex; flex-direction: column"},[["?",["isLog"],[["div",{"style":"display: flex; flex-direction: column; height: calc(100dvh - 64px)"},[["header",{"style":"padding: 12px 16px 10px; background: #FFFFFF; border-bottom: 1px solid #E3E6E1"},[["div",{"style":"display: flex; align-items: center; gap: 4px"},[["button",{"onclick":{"h":["prevDay"]},"aria-label":"이전 날","style":"width: 44px; height: 44px; border: none; background: transparent; display: flex; align-items: center; justify-content: center; cursor: pointer"},[["svg",{"width":"20","height":"20","viewBox":"0 0 24 24","fill":"none","stroke":"#1B1F1D","stroke-width":"2","aria-hidden":"true"},[["path",{"d":"M15 18l-6-6 6-6"},[]]]]]],["div",{"style":"flex-grow: 1; text-align: center"},[["div",{"style":"font-size: 19px; font-weight: 700"},[["~",["",["dayLabel"],""]]]],["div",{"style":"font-size: 12px; color: #5B6460"},[["~",["",["dayBadge"],""]]]]]],["button",{"onclick":{"h":["nextDay"]},"aria-label":"다음 날","style":"width: 44px; height: 44px; border: none; background: transparent; display: flex; align-items: center; justify-content: center; cursor: pointer"},[["svg",{"width":"20","height":"20","viewBox":"0 0 24 24","fill":"none","stroke":"#1B1F1D","stroke-width":"2","aria-hidden":"true"},[["path",{"d":"M9 18l6-6-6-6"},[]]]]]]]],["div",{"style":"display: flex; gap: 8px; margin-top: 6px"},[["div",{"style":"flex: 1; background: #E6F2EF; border-radius: 10px; padding: 7px 10px"},[["div",{"style":"font-size: 12px; color: #0F5F55"},[["~",["영어 · 목표 ",["enPct"],""]]]],["div",{"style":"font-size: 17px; font-weight: 700; color: #0F5F55"},[["~",["",["enTotal"],""]]]]]],["div",{"style":"flex: 1; background: #FBEDE4; border-radius: 10px; padding: 7px 10px"},[["div",{"style":"font-size: 12px; color: #9A3412"},[["~",["한글 · 목표 ",["koPct"],""]]]],["div",{"style":"font-size: 17px; font-weight: 700; color: #9A3412"},[["~",["",["koTotal"],""]]]]]]]]]],["main",{"style":"flex-grow: 1; overflow-y: auto; padding: 10px 12px 24px; display: flex; flex-direction: column; gap: 8px"},[["button",{"onclick":{"h":["openScanLog"]},"style":"min-height: 56px; border-radius: 14px; border: none; background: #0F766E; color: #FFFFFF; font-family: inherit; display: flex; align-items: center; gap: 10px; padding: 8px 14px; text-align: left; cursor: pointer"},[["svg",{"width":"26","height":"26","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","aria-hidden":"true","style":"flex-shrink: 0"},[["path",{"d":"M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2M7 8v8M10 8v8M14 8v8M17 8v8"},[]]]],["span",{"style":"display: flex; flex-direction: column; gap: 2px"},[["span",{"style":"font-size: 16px; font-weight: 700"},["읽은 책 바코드로 기록"]],["span",{"style":"font-size: 12px; color: #CDEBE5"},["찍고 '오늘 읽음 기록' 한 번 누르면 끝 · 쪽수 저절로"]]]]]],["*",["cards"],"c",[["div",{"style":"display: flex; flex-direction: column; gap: 6px"},[["?",["c","groupTitle"],[["div",{"style":{"m":["font-size: 13px; font-weight: 700; padding: 4px 4px 0; color: ",["c","ink"],""]}},[["~",["",["c","groupTitle"],""]]]]]],["section",{"style":"background: #FFFFFF; border-radius: 14px; padding: 10px 12px 12px; display: flex; flex-direction: column; gap: 8px; border: 1px solid #E3E6E1"},[["div",{"style":"display: flex; align-items: center; gap: 8px"},[["span",{"style":{"m":["width: 10px; height: 10px; border-radius: 5px; background: ",["c","color"],""]}},[]],["span",{"style":"font-size: 16px; font-weight: 700"},[["~",["",["c","name"],""]]]],["?",["c","hasLevel"],[["button",{"onclick":{"h":["c","openLevel"]},"style":"height: 32px; padding: 0 10px; border-radius: 16px; border: 1px solid #B9C4BF; background: #F4F5F2; font-family: inherit; font-size: 14px; font-weight: 700; color: #1B1F1D; cursor: pointer"},[["~",["",["c","level"]," ▾"]]]]]],["span",{"style":"margin-left: auto; font-size: 15px; font-weight: 700"},[["~",["",["c","total"],""]]]]]],["div",{"style":"display: flex; gap: 8px"},[["*",["c","quick"],"q",[["button",{"onclick":{"h":["q","add"]},"style":{"m":["flex: 1; height: 48px; border-radius: 12px; border: none; background: ",["c","soft"],"; color: ",["c","ink"],"; font-family: inherit; font-size: 17px; font-weight: 700; cursor: pointer"]}},[["~",["",["q","label"],""]]]]]]]],["?",["c","hint"],[["div",{"style":"font-size: 12px; color: #5B6460"},[["~",["",["c","hint"],""]]]]]]]]]]]],["button",{"onclick":{"h":["copyYesterday"]},"style":"height: 48px; border-radius: 12px; border: 1.5px dashed #8A9590; background: transparent; font-family: inherit; font-size: 15px; color: #3F4743; cursor: pointer"},["어제와 똑같이 기록하기"]],["div",{"style":"font-size: 13px; font-weight: 700; color: #3F4743; padding: 6px 4px 0"},[["~",["",["logTitle"],""]]]],["div",{"style":"background: #FFFFFF; border-radius: 14px; border: 1px solid #E3E6E1"},[["*",["timeline"],"t",[["div",{"style":"display: flex; align-items: center; gap: 8px; padding: 2px 2px 2px 12px; border-bottom: 1px solid #EEF0EC"},[["span",{"style":"font-size: 13px; color: #5B6460; width: 40px"},[["~",["",["t","time"],""]]]],["span",{"style":{"m":["width: 8px; height: 8px; border-radius: 4px; background: ",["t","color"],""]}},[]],["span",{"style":"font-size: 14px; flex-grow: 1"},[["~",["",["t","text"],""]]]],["button",{"onclick":{"h":["t","del"]},"aria-label":"이 기록 지우기","style":"width: 44px; height: 44px; border: none; background: transparent; display: flex; align-items: center; justify-content: center; cursor: pointer"},[["svg",{"width":"16","height":"16","viewBox":"0 0 24 24","fill":"none","stroke":"#5B6460","stroke-width":"2","aria-hidden":"true"},[["path",{"d":"M18 6L6 18M6 6l12 12"},[]]]]]]]]]]]]]]]]]],["?",["isStats"],[["div",{"style":"display: flex; flex-direction: column; height: calc(100dvh - 64px)"},[["header",{"style":"padding: 14px 16px 10px; background: #FFFFFF; border-bottom: 1px solid #E3E6E1; display: flex; flex-direction: column; gap: 8px"},[["div",{"style":"display: flex; align-items: center; gap: 8px"},[["span",{"style":"font-size: 19px; font-weight: 700"},["통계"]],["span",{"style":"font-size: 12px; color: #5B6460"},[["~",["",["statNote"],""]]]],["button",{"onclick":{"h":["exportXlsx"]},"style":"margin-left: auto; height: 36px; padding: 0 12px; border-radius: 18px; border: 1px solid #0F766E; background: #FFFFFF; color: #0F5F55; font-family: inherit; font-size: 13px; font-weight: 700; display: flex; align-items: center; gap: 4px; cursor: pointer"},[["svg",{"width":"16","height":"16","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","aria-hidden":"true"},[["path",{"d":"M12 3v12M7 10l5 5 5-5M4 21h16"},[]]]],"엑셀"]]]],["div",{"style":"display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 4px; background: #EEF0EC; border-radius: 12px; padding: 4px"},[["*",["statTabs"],"t",[["button",{"onclick":{"h":["t","pick"]},"style":{"m":["height: 40px; border-radius: 9px; border: none; font-family: inherit; font-size: 15px; font-weight: 700; cursor: pointer; ",["t","style"],""]}},[["~",["",["t","label"],""]]]]]]]],["div",{"style":"text-align: center; font-size: 15px; font-weight: 700"},[["~",["",["period"],""]]]]]],["main",{"style":"flex-grow: 1; overflow-y: auto; padding: 10px 12px 24px; display: flex; flex-direction: column; gap: 10px"},[["div",{"style":"display: flex; gap: 8px"},[["div",{"style":"flex: 1; background: #E6F2EF; border-radius: 12px; padding: 10px 12px"},[["div",{"style":"font-size: 12px; color: #0F5F55"},["영어 합계"]],["div",{"style":"font-size: 20px; font-weight: 700; color: #0F5F55"},[["~",["",["sEnTotal"],""]]]],["div",{"style":"font-size: 13px; color: #0F5F55"},[["~",["목표의 ",["sEnPct"],""]]]]]],["div",{"style":"flex: 1; background: #FBEDE4; border-radius: 12px; padding: 10px 12px"},[["div",{"style":"font-size: 12px; color: #9A3412"},["한글 합계"]],["div",{"style":"font-size: 20px; font-weight: 700; color: #9A3412"},[["~",["",["sKoTotal"],""]]]],["div",{"style":"font-size: 13px; color: #9A3412"},[["~",["목표의 ",["sKoPct"],""]]]]]]]],["section",{"style":"background: #FFFFFF; border-radius: 14px; border: 1px solid #E3E6E1; padding: 12px; display: flex; flex-direction: column; gap: 12px"},[["div",{"style":"display: flex; align-items: baseline"},[["span",{"style":"font-size: 15px; font-weight: 700"},["목표 대비"]],["span",{"style":"margin-left: 8px; font-size: 12px; color: #5B6460"},[["~",["",["goalBasis"],""]]]]]],["*",["goalRows"],"g",[["div",{"style":"display: flex; flex-direction: column; gap: 4px"},[["div",{"style":"display: flex; align-items: baseline; gap: 6px"},[["span",{"style":"font-size: 15px; font-weight: 700"},[["~",["",["g","name"],""]]]],["span",{"style":"font-size: 12px; color: #5B6460"},[["~",["",["g","detail"],""]]]],["span",{"style":{"m":["margin-left: auto; font-size: 17px; font-weight: 700; color: ",["g","ink"],""]}},[["~",["",["g","pct"],""]]]]]],["div",{"style":"height: 10px; background: #E9ECE8; border-radius: 5px; overflow: hidden"},[["div",{"style":{"h":["g","bar"]}},[]]]]]]]],["button",{"onclick":{"h":["toSettings"]},"style":"align-self: flex-start; height: 36px; padding: 0 12px; border-radius: 18px; border: 1px solid #B9C4BF; background: #FFFFFF; font-family: inherit; font-size: 13px; color: #3F4743; cursor: pointer"},["목표 시간 바꾸기 (설정)"]]]],["section",{"style":"background: #FFFFFF; border-radius: 14px; border: 1px solid #E3E6E1; padding: 4px 12px"},[["div",{"style":"display: flex; align-items: center; min-height: 44px; border-bottom: 1px solid #EEF0EC"},[["span",{"style":"font-size: 15px; flex-grow: 1"},["영어 리딩 쪽수"]],["span",{"style":"font-size: 15px; font-weight: 700"},[["~",["",["readPages"],""]]]]]],["div",{"style":"display: flex; align-items: center; min-height: 44px; border-bottom: 1px solid #EEF0EC"},[["span",{"style":"font-size: 15px; flex-grow: 1"},["한글책 쪽수"]],["span",{"style":"font-size: 15px; font-weight: 700"},[["~",["",["koPages"],""]]]]]],["div",{"style":"display: flex; align-items: center; min-height: 44px; border-bottom: 1px solid #EEF0EC"},[["span",{"style":"font-size: 15px; flex-grow: 1"},["읽은 횟수 (다시 읽기 포함)"]],["span",{"style":"font-size: 15px; font-weight: 700"},[["~",["",["bookCount"],""]]]]]],["div",{"style":"display: flex; align-items: center; min-height: 44px"},[["span",{"style":"font-size: 15px; flex-grow: 1"},["서로 다른 책"]],["span",{"style":"font-size: 15px; font-weight: 700"},[["~",["",["distinctCount"],""]]]]]]]],["section",{"style":"background: #FFFFFF; border-radius: 14px; border: 1px solid #E3E6E1; padding: 12px; display: flex; flex-direction: column; gap: 8px"},[["div",{"style":"font-size: 14px; font-weight: 700"},[["~",["",["levelTitle"],""]]]],["div",{"style":"display: flex; height: 28px; border-radius: 8px; overflow: hidden; background: #E9ECE8"},[["*",["levelBars"],"v",[["div",{"style":{"h":["v","style"]}},[["~",["",["v","label"],""]]]]]]]]]],["?",["lvHas"],[["section",{"style":"background: #FFFFFF; border-radius: 14px; border: 1px solid #E3E6E1; padding: 12px; display: flex; flex-direction: column; gap: 10px"},[["div",{"style":"display: flex; align-items: baseline; gap: 8px; flex-wrap: wrap"},[["span",{"style":"font-size: 15px; font-weight: 700"},["레벨별 · 월별 읽은 책"]],["span",{"style":"font-size: 12px; color: #5B6460"},[["~",["",["lvSpan"],""]]]]]],["div",{"style":"display: flex; gap: 6px; flex-wrap: wrap"},[["div",{"style":"display: flex; background: #EEF1ED; border-radius: 10px; padding: 3px"},[["*",["lvLangs"],"o",[["button",{"onclick":{"h":["o","pick"]},"style":{"m":["height: 34px; padding: 0 12px; border: none; border-radius: 8px; font-family: inherit; font-size: 14px; font-weight: 700; cursor: pointer; ",["o","style"],""]}},[["~",["",["o","label"],""]]]]]]]],["div",{"style":"display: flex; background: #EEF1ED; border-radius: 10px; padding: 3px"},[["*",["lvMeasures"],"o",[["button",{"onclick":{"h":["o","pick"]},"style":{"m":["height: 34px; padding: 0 10px; border: none; border-radius: 8px; font-family: inherit; font-size: 14px; font-weight: 700; cursor: pointer; ",["o","style"],""]}},[["~",["",["o","label"],""]]]]]]]]]],["div",{"style":"overflow-x: auto; margin: 0 -4px"},[["table",{"style":"border-collapse: collapse; width: 100%; font-size: 13px; font-variant-numeric: tabular-nums"},[["thead",{},[["tr",{},[["th",{"style":"padding: 6px; text-align: left; font-size: 12px; color: #5B6460; border-bottom: 1px solid #DDE3E0; white-space: nowrap"},["월"]],["*",["lvHead"],"h",[["th",{"style":"padding: 6px; text-align: right; font-size: 12px; color: #3F4743; border-bottom: 1px solid #DDE3E0; white-space: nowrap"},[["~",["",["h","label"],""]]]]]],["th",{"style":"padding: 6px; text-align: right; font-size: 12px; color: #3F4743; border-bottom: 1px solid #DDE3E0; white-space: nowrap"},["합계"]]]]]],["tbody",{},[["*",["lvRows"],"r",[["tr",{},[["td",{"style":"padding: 7px 6px; font-weight: 700; white-space: nowrap; border-bottom: 1px solid #F1F2EF"},[["~",["",["r","m"],""]]]],["*",["r","cells"],"c",[["td",{"style":{"h":["c","style"]}},[["~",["",["c","v"],""]]]]]],["td",{"style":"padding: 7px 6px; text-align: right; font-weight: 700; white-space: nowrap; border-bottom: 1px solid #F1F2EF"},[["~",["",["r","total"],""]]]]]]]],["tr",{},[["td",{"style":"padding: 8px 6px; font-weight: 700; white-space: nowrap; border-top: 2px solid #1B1F1D"},["합계"]],["*",["lvTotCells"],"c",[["td",{"style":"padding: 8px 6px; text-align: right; font-weight: 700; white-space: nowrap; border-top: 2px solid #1B1F1D"},[["~",["",["c","v"],""]]]]]],["td",{"style":"padding: 8px 6px; text-align: right; font-weight: 700; white-space: nowrap; border-top: 2px solid #1B1F1D; color: #0F5F55"},[["~",["",["lvTotal"],""]]]]]]]]]]]],["div",{"style":"font-size: 13px; font-weight: 700; color: #3F4743; margin-top: 4px"},[["~",["",["lvSumHead"],""]]]],["*",["lvSums"],"x",[["div",{"style":"display: flex; flex-direction: column; gap: 4px"},[["div",{"style":"display: flex; align-items: baseline; gap: 8px"},[["span",{"style":"font-size: 15px; font-weight: 700; width: 44px"},[["~",["",["x","lv"],""]]]],["span",{"style":"font-size: 13px; color: #3F4743; flex-grow: 1"},[["~",["",["x","line"],""]]]],["span",{"style":"font-size: 13px; font-weight: 700"},[["~",["",["x","pct"],""]]]]]],["div",{"style":"height: 8px; background: #EEF1ED; border-radius: 4px"},[["div",{"style":{"h":["x","bar"]}},[]]]]]]]],["div",{"style":"font-size: 12px; color: #5B6460"},["레벨은 잠수네 레벨이에요. 다시 읽은 것도 횟수·쪽수에 들어가고, 권수는 서로 다른 책 수예요."]]]]]],["?",["showCum"],[["section",{"style":"background: #1B1F1D; color: #FFFFFF; border-radius: 14px; padding: 14px; display: flex; flex-direction: column; gap: 4px"},[["div",{"style":"font-size: 13px; color: #C9D1CD"},[["~",["",["cumHead"],""]]]],["div",{"style":"font-size: 18px; font-weight: 700"},[["~",["",["cumLine1"],""]]]],["div",{"style":"font-size: 13px; color: #C9D1CD"},[["~",["",["cumLine2"],""]]]]]],["section",{"style":"background: #FFFFFF; border-radius: 14px; border: 1px solid #E3E6E1; padding: 4px 12px 8px"},[["div",{"style":"display: flex; align-items: center; min-height: 40px; font-size: 13px; font-weight: 700; color: #3F4743; border-bottom: 1px solid #EEF0EC"},[["span",{"style":"width: 44px"},["월"]],["span",{"style":"flex: 1; text-align: right"},["한글 횟수·쪽"]],["span",{"style":"flex: 1; text-align: right"},["영어 횟수·쪽"]]]],["*",["monthRows"],"mr",[["div",{"style":"display: flex; align-items: center; min-height: 36px; font-size: 14px; border-bottom: 1px solid #F1F2EF"},[["span",{"style":"width: 44px; font-weight: 700"},[["~",["",["mr","m"],""]]]],["span",{"style":"flex: 1; text-align: right"},[["~",["",["mr","ko"],""]]]],["span",{"style":"flex: 1; text-align: right"},[["~",["",["mr","en"],""]]]]]]]]]]]]]]]]]],["?",["isList"],[["div",{"style":"display: flex; flex-direction: column; height: calc(100dvh - 64px)"},[["header",{"style":"padding: 10px 12px 8px; background: #FFFFFF; border-bottom: 1px solid #E3E6E1; display: flex; flex-direction: column; gap: 8px"},[["div",{"style":"display: flex; gap: 6px"},[["*",["langBtns"],"o",[["button",{"onclick":{"h":["o","pick"]},"aria-pressed":{"h":["o","on"]},"style":{"m":["flex: 1; height: 52px; border-radius: 14px; font-family: inherit; font-size: 17px; font-weight: 700; cursor: pointer; ",["o","style"],""]}},[["~",["",["o","label"],""]]]]]],["button",{"onclick":{"h":["pickEtc"]},"aria-pressed":{"h":["etcOn"]},"style":{"m":["width: 60px; height: 52px; border-radius: 14px; font-family: inherit; font-size: 15px; font-weight: 700; flex-shrink: 0; cursor: pointer; ",["etcStyle"],""]}},["기타"]],["button",{"onclick":{"h":["openScan"]},"aria-label":"바코드 찍기","style":"width: 52px; height: 52px; border-radius: 14px; border: none; background: #1B1F1D; color: #FFFFFF; display: flex; align-items: center; justify-content: center; flex-shrink: 0; cursor: pointer"},[["svg",{"width":"24","height":"24","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","aria-hidden":"true"},[["path",{"d":"M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2M7 8v8M10 8v8M14 8v8M17 8v8"},[]]]]]]]],["?",["hasSubs"],[["div",{"style":"display: flex; gap: 6px; align-items: center"},[["div",{"style":"flex-grow: 1; min-width: 0; display: flex; gap: 6px; overflow-x: auto; padding-bottom: 2px"},[["*",["subs"],"o",[["button",{"onclick":{"h":["o","pick"]},"aria-pressed":{"h":["o","on"]},"style":{"m":["flex-shrink: 0; height: 38px; padding: 0 14px; border-radius: 19px; font-family: inherit; font-size: 14px; white-space: nowrap; cursor: pointer; ",["o","style"],""]}},[["~",["",["o","label"],""]]]]]]]],["?",["showScope"],[["button",{"onclick":{"h":["scopeGo"]},"style":"flex-shrink: 0; height: 38px; padding: 0 4px 0 8px; border: none; background: transparent; font-family: inherit; font-size: 13px; color: #3F4743; display: flex; align-items: center; gap: 2px; cursor: pointer"},[["~",["",["scopeLabel"],""]],["svg",{"width":"14","height":"14","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","aria-hidden":"true"},[["path",{"d":"M9 18l6-6-6-6"},[]]]]]]]]]]]],["?",["hasSeg"],[["div",{"style":"display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 4px; background: #EEF0EC; border-radius: 10px; padding: 3px"},[["*",["segs"],"o",[["button",{"onclick":{"h":["o","pick"]},"aria-pressed":{"h":["o","on"]},"style":{"m":["height: 36px; border-radius: 8px; border: none; font-family: inherit; font-size: 14px; font-weight: 700; cursor: pointer; ",["o","style"],""]}},[["~",["",["o","label"],""]]]]]]]]]],["?",["hasSubs2"],[["div",{"style":"display: flex; gap: 6px; overflow-x: auto; padding-bottom: 2px"},[["*",["subs2"],"o",[["button",{"onclick":{"h":["o","pick"]},"aria-pressed":{"h":["o","on"]},"style":{"m":["flex-shrink: 0; height: 34px; padding: 0 12px; border-radius: 8px; font-family: inherit; font-size: 13px; white-space: nowrap; cursor: pointer; ",["o","style"],""]}},[["~",["",["o","label"],""]]]]]]]]]],["?",["isWeekly"],[["div",{"style":"display: flex; gap: 6px; align-items: center"},[["button",{"onclick":{"h":["prevMonth"]},"aria-label":"이전 달","style":"width: 30px; height: 34px; border: none; background: transparent; font-family: inherit; font-size: 16px; color: #3F4743; cursor: pointer"},["‹"]],["span",{"style":"height: 34px; padding: 0 8px; border-radius: 8px; background: #EEF0EC; font-size: 14px; font-weight: 700; display: flex; align-items: center"},[["~",["",["monthLabel"],""]]]],["button",{"onclick":{"h":["nextMonth"]},"aria-label":"다음 달","style":"width: 30px; height: 34px; border: none; background: transparent; font-family: inherit; font-size: 16px; color: #3F4743; cursor: pointer"},["›"]],["*",["weeks"],"w",[["button",{"onclick":{"h":["w","pick"]},"style":{"m":["height: 34px; min-width: 44px; padding: 0 8px; border-radius: 8px; font-family: inherit; font-size: 13px; cursor: pointer; ",["w","style"],""]}},[["~",["",["w","label"],""]]]]]]]]]],["?",["hasLevels"],[["div",{"style":"display: flex; gap: 5px; align-items: center"},[["*",["lvBtns"],"o",[["button",{"onclick":{"h":["o","pick"]},"aria-pressed":{"h":["o","on"]},"style":{"m":["flex: 1; min-width: 0; height: 36px; padding: 0 2px; border-radius: 8px; font-family: inherit; font-size: 13px; white-space: nowrap; cursor: pointer; ",["o","style"],""]}},[["~",["",["o","label"],""]]]]]]]],["?",["lvMoreOpen"],[["div",{"style":"display: flex; gap: 5px; align-items: center; background: #F4F5F2; border-radius: 10px; padding: 5px"},[["*",["lvMore"],"o",[["button",{"onclick":{"h":["o","pick"]},"aria-pressed":{"h":["o","on"]},"style":{"m":["flex: 1; min-width: 0; height: 34px; border-radius: 8px; font-family: inherit; font-size: 13px; cursor: pointer; ",["o","style"],""]}},[["~",["",["o","label"],""]]]]]]]]]]]],["?",["isEtc"],[["div",{"style":"display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px"},[["button",{"onclick":{"h":["openScan"]},"style":"height: 44px; border-radius: 12px; border: none; background: #E6F2EF; color: #0F5F55; font-family: inherit; font-size: 15px; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 6px; cursor: pointer"},[["svg",{"width":"20","height":"20","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","aria-hidden":"true"},[["path",{"d":"M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2M7 8v8M10 8v8M14 8v8M17 8v8"},[]]]],"바코드 찍기"]],["button",{"onclick":{"h":["openManual"]},"style":"height: 44px; border-radius: 12px; border: 1px solid #B9C4BF; background: #FFFFFF; color: #1B1F1D; font-family: inherit; font-size: 15px; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 6px; cursor: pointer"},[["svg",{"width":"20","height":"20","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","aria-hidden":"true"},[["path",{"d":"M11 19a8 8 0 100-16 8 8 0 000 16zM21 21l-4.3-4.3"},[]]]],"찾기 · 직접 입력"]]]],["div",{"style":"display: flex; gap: 6px"},[["*",["etcLangs"],"o",[["button",{"onclick":{"h":["o","pick"]},"style":{"m":["height: 34px; padding: 0 12px; border-radius: 17px; font-family: inherit; font-size: 13px; cursor: pointer; ",["o","style"],""]}},[["~",["",["o","label"],""]]]]]]]]]],["div",{"style":"display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 4px; background: #EEF0EC; border-radius: 12px; padding: 4px"},[["button",{"onclick":{"h":["toTodo"]},"style":{"m":["height: 40px; border-radius: 9px; border: none; font-family: inherit; font-size: 15px; font-weight: 700; cursor: pointer; ",["todoStyle"],""]}},[["~",["",["todoLabel"],""]]]],["button",{"onclick":{"h":["toDone"]},"style":{"m":["height: 40px; border-radius: 9px; border: none; font-family: inherit; font-size: 15px; font-weight: 700; cursor: pointer; ",["doneStyle"],""]}},[["~",["",["doneLabel"],""]]]]]],["?",["showProg"],[["div",{"style":"display: flex; align-items: center; gap: 8px"},[["div",{"style":"flex-grow: 1; height: 6px; background: #E3E6E1; border-radius: 3px; overflow: hidden"},[["div",{"style":{"h":["progStyle"]}},[]]]],["span",{"style":"font-size: 12px; color: #3F4743"},[["~",["",["progText"],""]]]]]]]]]],["main",{"style":"flex-grow: 1; overflow-y: auto; padding: 8px 12px 88px; display: flex; flex-direction: column; gap: 8px"},[["?",["listNote"],[["div",{"style":"font-size: 13px; line-height: 1.45; color: #7C2D12; background: #FBEDE4; border-radius: 10px; padding: 8px 10px"},[["~",["",["listNote"],""]]]]]],["?",["showViewToggle"],[["div",{"style":"display: flex; gap: 6px"},[["button",{"onclick":{"h":["toOrder"]},"style":{"m":["height: 36px; padding: 0 12px; border-radius: 18px; font-family: inherit; font-size: 13px; cursor: pointer; ",["orderStyle"],""]}},[["~",["",["orderLabel"],""]]]],["button",{"onclick":{"h":["toLib"]},"style":{"m":["height: 36px; padding: 0 12px; border-radius: 18px; font-family: inherit; font-size: 13px; cursor: pointer; ",["libStyle"],""]}},["도서관별 · 분류번호순"]]]]]],["?",["callBtnShow"],[["div",{"style":"font-size: 12px; color: #5B6460"},[["~",["",["callBtnLabel"],""]]]]]],["*",["groups"],"g",[["div",{"style":"display: flex; flex-direction: column; gap: 6px"},[["div",{"style":"font-size: 13px; font-weight: 700; color: #3F4743; padding: 6px 2px 0"},[["~",["",["g","title"],""]]]],["*",["g","items"],"b",[["div",{"style":"background: #FFFFFF; border: 1px solid #E3E6E1; border-radius: 12px; padding: 8px 8px 8px 4px; display: flex; gap: 4px; align-items: flex-start"},[["button",{"onclick":{"h":["b","act"]},"aria-label":{"h":["b","actLabel"]},"style":"width: 44px; height: 44px; border: none; background: transparent; display: flex; align-items: center; justify-content: center; flex-shrink: 0; cursor: pointer"},[["span",{"style":{"h":["b","boxStyle"]}},[["~",["",["b","boxMark"],""]]]]]],["div",{"style":"flex-grow: 1; min-width: 0; display: flex; flex-direction: column; gap: 3px; padding-top: 4px"},[["?",["b","cn"],[["div",{"style":"font-size: 16px; font-weight: 700; color: #0F5F55"},[["~",["",["b","cn"],""]]]]]],["div",{"style":"font-size: 16px; font-weight: 700; line-height: 1.35"},[["~",["",["b","title"],""]]]],["?",["b","meta"],[["div",{"style":"font-size: 13px; color: #5B6460; line-height: 1.4"},[["~",["",["b","meta"],""]]]]]],["?",["b","dateLabel"],[["button",{"onclick":{"h":["b","editDates"]},"style":"align-self: flex-start; min-height: 36px; padding: 0 10px; margin-top: 2px; border-radius: 18px; border: 1px solid #B9C4BF; background: #FFFFFF; font-family: inherit; font-size: 13px; color: #1B1F1D; display: flex; align-items: center; gap: 6px; cursor: pointer"},[["~",["",["b","dateLabel"],""]],["svg",{"width":"14","height":"14","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","aria-hidden":"true"},[["path",{"d":"M12 20h9M16.5 3.5a2.1 2.1 0 013 3L7 19l-4 1 1-4 12.5-12.5z"},[]]]]]]]],["?",["b","hasChips"],[["div",{"style":"display: flex; flex-wrap: wrap; gap: 4px; margin-top: 2px"},[["*",["b","chips"],"x",[["span",{"style":{"h":["x","style"]}},[["~",["",["x","text"],""]]]]]]]]]]]],["?",["b","showAgain"],[["button",{"onclick":{"h":["b","again"]},"style":"align-self: center; height: 44px; padding: 0 12px; border-radius: 22px; border: none; background: #E6F2EF; color: #0F5F55; font-family: inherit; font-size: 14px; font-weight: 700; flex-shrink: 0; cursor: pointer"},["또 읽음"]]]],["?",["b","canRemove"],[["button",{"onclick":{"h":["b","remove"]},"aria-label":{"h":["b","removeLabel"]},"style":"width: 44px; height: 44px; border: none; background: transparent; display: flex; align-items: center; justify-content: center; flex-shrink: 0; cursor: pointer"},[["svg",{"width":"16","height":"16","viewBox":"0 0 24 24","fill":"none","stroke":"#5B6460","stroke-width":"2","aria-hidden":"true"},[["path",{"d":"M18 6L6 18M6 6l12 12"},[]]]]]]]]]]]]]]]],["?",["showMore"],[["button",{"onclick":{"h":["moreGo"]},"style":"height: 48px; border-radius: 12px; border: 1px solid #B9C4BF; background: #FFFFFF; font-family: inherit; font-size: 15px; color: #1B1F1D; cursor: pointer"},[["~",["",["moreLabel"],""]]]]]],["?",["emptyAll"],[["div",{"style":"padding: 32px 12px; text-align: center; font-size: 14px; line-height: 1.5; color: #5B6460"},[["~",["",["emptyText"],""]]]]]]]]]]]],["?",["isSettings"],[["div",{"style":"display: flex; flex-direction: column; height: calc(100dvh - 64px)"},[["header",{"style":"padding: 16px; background: #FFFFFF; border-bottom: 1px solid #E3E6E1"},[["div",{"style":"font-size: 19px; font-weight: 700"},["설정"]],["div",{"style":"font-size: 12px; color: #5B6460; margin-top: 2px"},["한 번 정하면 바꾸기 전까지 계속 적용돼요"]]]],["main",{"style":"flex-grow: 1; overflow-y: auto; padding: 12px 12px 24px; display: flex; flex-direction: column; gap: 10px"},[["section",{"style":"background: #FFFFFF; border-radius: 14px; border: 1px solid #E3E6E1; padding: 12px; display: flex; flex-direction: column; gap: 10px"},[["div",{"style":"display: flex; align-items: baseline; gap: 6px"},[["span",{"style":"font-size: 15px; font-weight: 700"},["학년"]],["span",{"style":"font-size: 12px; color: #5B6460"},["여러 개 고를 수 있어요"]]]],["div",{"style":"display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 6px"},[["*",["grades"],"o",[["button",{"onclick":{"h":["o","pick"]},"aria-pressed":{"h":["o","on"]},"style":{"m":["height: 44px; border-radius: 10px; font-family: inherit; font-size: 15px; cursor: pointer; ",["o","style"],""]}},[["~",["",["o","label"],""]]]]]]]],["div",{"style":"display: flex; align-items: baseline; gap: 6px; padding-top: 2px"},[["span",{"style":"font-size: 15px; font-weight: 700"},["위클리 플랜"]],["span",{"style":"font-size: 12px; color: #5B6460"},["여러 개 고를 수 있어요"]]]],["div",{"style":"display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 6px"},[["*",["plans"],"o",[["button",{"onclick":{"h":["o","pick"]},"aria-pressed":{"h":["o","on"]},"style":{"m":["height: 44px; border-radius: 10px; font-family: inherit; font-size: 15px; cursor: pointer; ",["o","style"],""]}},[["~",["",["o","label"],""]]]]]]]],["div",{"style":"font-size: 13px; line-height: 1.5; color: #3F4743; background: #F4F5F2; border-radius: 10px; padding: 8px 10px"},[["~",["",["scopeSummary"],""]]]]]],["section",{"style":"background: #FFFFFF; border-radius: 14px; border: 1px solid #E3E6E1; padding: 4px 12px 8px"},[["div",{"style":"font-size: 15px; font-weight: 700; padding: 10px 0 4px"},["하루 목표 시간"]],["*",["goalEdit"],"g",[["div",{"style":"display: flex; align-items: center; gap: 8px; min-height: 56px; border-bottom: 1px solid #EEF0EC"},[["span",{"style":{"m":["width: 10px; height: 10px; border-radius: 5px; background: ",["g","color"],""]}},[]],["span",{"style":"font-size: 15px; flex-grow: 1"},[["~",["",["g","name"],""]]]],["button",{"onclick":{"h":["g","down"]},"aria-label":{"h":["g","downLabel"]},"style":"width: 44px; height: 44px; border-radius: 12px; border: 1px solid #B9C4BF; background: #FFFFFF; font-family: inherit; font-size: 20px; cursor: pointer"},["−"]],["span",{"style":"width: 64px; text-align: center; font-size: 17px; font-weight: 700"},[["~",["",["g","value"],""]]]],["button",{"onclick":{"h":["g","up"]},"aria-label":{"h":["g","upLabel"]},"style":"width: 44px; height: 44px; border-radius: 12px; border: 1px solid #B9C4BF; background: #FFFFFF; font-family: inherit; font-size: 20px; cursor: pointer"},["+"]]]]]],["div",{"style":"font-size: 12px; color: #5B6460; padding-top: 8px"},["5분 단위 · 통계의 '목표 대비 %'가 이 값으로 계산돼요"]]]],["section",{"style":"background: #FFFFFF; border-radius: 14px; border: 1px solid #E3E6E1; padding: 12px; display: flex; flex-direction: column; gap: 6px"},[["div",{"style":"font-size: 15px; font-weight: 700"},["소장을 보여줄 도서관"]],["div",{"style":"font-size: 14px"},["1. 강북문화정보도서관"]],["div",{"style":"font-size: 14px"},["2. 월계도서관"]],["div",{"style":"font-size: 14px"},["3. 장위행복누림도서관"]],["div",{"style":"font-size: 14px; color: #5B6460"},["예비 · 월계어린이도서관 (세 곳에 없을 때 표시)"]],["div",{"style":"font-size: 12px; color: #5B6460; line-height: 1.5"},[["~",["",["ownNote"],""]]]],["button",{"onclick":{"h":["libDiagGo"]},"style":"align-self: flex-start; height: 36px; padding: 0 12px; border-radius: 18px; border: 1px solid #B9C4BF; background: #FFFFFF; font-family: inherit; font-size: 13px; cursor: pointer"},["도서관 연결 점검"]],["?",["libDiagText"],[["div",{"style":"font-size: 12px; color: #3F4743; line-height: 1.5"},[["~",["",["libDiagText"],""]]]]]]]],["section",{"style":"background: #FFFFFF; border-radius: 14px; border: 1px solid #E3E6E1; padding: 12px; display: flex; flex-direction: column; gap: 8px"},[["div",{"style":"font-size: 15px; font-weight: 700"},["저장 · 가족"]],["div",{"style":{"m":["font-size: 14px; line-height: 1.45; color: ",["syncColor"],""]}},[["~",["",["syncText"],""]]]],["div",{"style":"display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px"},[["button",{"onclick":{"h":["syncNow"]},"style":"height: 44px; border-radius: 10px; border: 1px solid #B9C4BF; background: #FFFFFF; font-family: inherit; font-size: 14px; color: #1B1F1D; cursor: pointer"},["지금 저장·불러오기"]],["button",{"onclick":{"h":["copyFamilyLink"]},"style":"height: 44px; border-radius: 10px; border: 1px solid #B9C4BF; background: #FFFFFF; font-family: inherit; font-size: 14px; color: #1B1F1D; cursor: pointer"},["가족 설치 링크 복사"]]]],["div",{"style":"font-size: 12px; color: #5B6460"},[["~",["",["dataVersion"],""]]]]]],["button",{"onclick":{"h":["exportXlsx"]},"style":"height: 48px; border-radius: 12px; border: 1px solid #0F766E; background: #FFFFFF; color: #0F5F55; font-family: inherit; font-size: 15px; font-weight: 700; cursor: pointer"},["기록 전체를 엑셀로 내려받기"]]]]]]]],["?",["toastShow"],[["div",{"style":"position: absolute; left: 12px; right: 12px; bottom: 76px; background: #1B1F1D; color: #FFFFFF; border-radius: 12px; padding: 4px 4px 4px 14px; display: flex; align-items: center; gap: 8px"},[["span",{"style":"flex-grow: 1; font-size: 14px; line-height: 1.4; padding: 8px 0"},[["~",["",["toastText"],""]]]],["?",["toastUndo"],[["button",{"onclick":{"h":["undo"]},"style":"height: 44px; padding: 0 12px; border: none; background: transparent; color: #7DD3C0; font-family: inherit; font-size: 14px; font-weight: 700; flex-shrink: 0; cursor: pointer"},["되돌리기"]]]],["?",["toastClose"],[["button",{"onclick":{"h":["closeToast"]},"style":"height: 44px; padding: 0 12px; border: none; background: transparent; color: #7DD3C0; font-family: inherit; font-size: 14px; font-weight: 700; flex-shrink: 0; cursor: pointer"},["확인"]]]]]]]],["nav",{"style":"position: absolute; left: 0; right: 0; bottom: 0; height: 64px; background: #FFFFFF; border-top: 1px solid #E3E6E1; display: flex"},[["*",["navs"],"n",[["button",{"onclick":{"h":["n","pick"]},"style":{"m":["flex: 1; border: none; background: transparent; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px; font-family: inherit; font-size: 12px; cursor: pointer; ",["n","style"],""]}},[["svg",{"width":"22","height":"22","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","aria-hidden":"true"},[["path",{"d":{"h":["n","icon"]}},[]]]],["~",["",["n","label"],""]]]]]]]],["?",["levelOpen"],[["div",{"style":"position: absolute; inset: 0; background: rgba(20,24,22,0.45); display: flex; flex-direction: column; justify-content: flex-end"},[["button",{"onclick":{"h":["closeSheet"]},"aria-label":"닫기","style":"flex-grow: 1; border: none; background: transparent; cursor: pointer"},[]],["div",{"style":"background: #FFFFFF; border-radius: 20px 20px 0 0; padding: 16px 16px 24px; display: flex; flex-direction: column; gap: 12px"},[["div",{"style":"font-size: 18px; font-weight: 700"},[["~",["",["sheetTitle"],""]]]],["div",{"style":"display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 8px"},[["*",["levelOptions"],"o",[["button",{"onclick":{"h":["o","pick"]},"style":{"m":["height: 44px; border-radius: 10px; font-family: inherit; font-size: 15px; font-weight: 700; cursor: pointer; ",["o","style"],""]}},[["~",["",["o","label"],""]]]]]]]],["div",{"style":"font-size: 12px; color: #5B6460"},["고른 레벨은 다음에도 그대로 쓰여요"]]]]]]]],["?",["askOpen"],[["div",{"style":"position: absolute; inset: 0; background: rgba(20,24,22,0.45); display: flex; flex-direction: column; justify-content: flex-end"},[["button",{"onclick":{"h":["closeSheet"]},"aria-label":"닫기","style":"flex-grow: 1; border: none; background: transparent; cursor: pointer"},[]],["div",{"style":"background: #FFFFFF; border-radius: 20px 20px 0 0; padding: 16px 16px 24px; display: flex; flex-direction: column; gap: 12px"},[["div",{"style":"font-size: 18px; font-weight: 700; line-height: 1.35"},[["~",["",["askTitle"],""]]]],["div",{"style":"font-size: 14px; color: #3F4743"},["대략 몇 쪽인지 골라 주세요. 한 번 고르면 이 책은 계속 그 쪽수로 기록돼요."]],["div",{"style":"display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 8px"},[["*",["askOptions"],"o",[["button",{"onclick":{"h":["o","pick"]},"style":"height: 48px; border-radius: 10px; border: 1px solid #B9C4BF; background: #FFFFFF; font-family: inherit; font-size: 15px; font-weight: 700; color: #1B1F1D; cursor: pointer"},[["~",["",["o","label"],""]]]]]]]],["button",{"onclick":{"h":["askSkip"]},"style":"height: 44px; border: none; background: transparent; font-family: inherit; font-size: 14px; color: #3F4743; text-decoration: underline; cursor: pointer"},["쪽수 없이 읽음만 체크"]]]]]]]],["?",["manualOpen"],[["div",{"style":"position: absolute; inset: 0; background: rgba(20,24,22,0.45); display: flex; flex-direction: column; justify-content: flex-end"},[["button",{"onclick":{"h":["closeSheet"]},"aria-label":"닫기","style":"flex-grow: 1; min-height: 40px; border: none; background: transparent; cursor: pointer"},[]],["div",{"style":"background: #FFFFFF; border-radius: 20px 20px 0 0; padding: 16px 16px 24px; display: flex; flex-direction: column; gap: 10px"},[["div",{"style":"display: flex; align-items: baseline; gap: 8px"},[["span",{"style":"font-size: 18px; font-weight: 700"},["찾기 · 직접 입력"]],["span",{"style":"font-size: 12px; color: #5B6460"},["바코드가 안 될 때"]]]],["?",["mIsbnNote"],[["div",{"style":"font-size: 14px; line-height: 1.5; color: #0F5F55; background: #E6F2EF; border-radius: 10px; padding: 10px 12px"},[["~",["",["mIsbnNote"],""]]]],["button",{"onclick":{"h":["mIsbnBack"]},"style":"align-self: flex-start; height: 36px; padding: 0 12px; border-radius: 18px; border: 1px solid #B9C4BF; background: #FFFFFF; color: #3F4743; font-family: inherit; font-size: 13px; cursor: pointer"},["‹ 바코드 다시 찍기"]]]],["?",["mHasCands"],[["div",{"style":"display: flex; flex-direction: column; border: 1px solid #9FCFC5; border-radius: 12px"},[["*",["mCands"],"o",[["button",{"onclick":{"h":["o","pick"]},"style":"min-height: 52px; border: none; border-bottom: 1px solid #EEF0EC; background: #FFFFFF; text-align: left; padding: 6px 12px; font-family: inherit; display: flex; flex-direction: column; justify-content: center; gap: 2px; cursor: pointer"},[["span",{"style":"font-size: 15px; font-weight: 700; color: #1B1F1D"},[["~",["",["o","label"],""]]]],["span",{"style":"font-size: 12px; color: #5B6460"},[["~",["",["o","sub"],""]]]]]]]]]],["div",{"style":"font-size: 12px; color: #5B6460"},["목록에 없으면 아래에 제목을 쳐서 찾아요"]]]],["label",{"for":"m-title","style":"font-size: 13px; font-weight: 700; color: #3F4743"},["책 제목 또는 ISBN 번호 ",["span",{"style":"font-weight: 400; color: #5B6460"},["(제목은 일부만 쳐도 찾아요)"]]]],["input",{"id":"m-title","type":"text","value":{"h":["mTitle"]},"onchange":{"h":["onTitle"]},"placeholder":"예: Piggies, 꽁꽁꽁, 9788954926379","style":"height: 48px; border-radius: 10px; border: 1px solid #8A9590; padding: 0 12px; font-family: inherit; font-size: 16px; color: #1B1F1D; box-sizing: border-box; width: 100%"},[]],["?",["mTypedIsbn"],[["button",{"onclick":{"h":["mTypedGo"]},"style":"height: 48px; border-radius: 10px; border: none; background: #0F766E; color: #FFFFFF; font-family: inherit; font-size: 15px; font-weight: 700; cursor: pointer"},[["~",["ISBN ",["mTypedIsbn"]," 으로 찾기"]]]]]],["?",["mErr"],[["div",{"style":"font-size: 13px; color: #B91C1C"},[["~",["",["mErr"],""]]]]]],["?",["mHasSugs"],[["div",{"style":"font-size: 12px; color: #5B6460"},["잠수네 책에서 찾았어요 · 누르면 책 정보가 떠요"]],["div",{"style":"display: flex; flex-direction: column; border: 1px solid #E3E6E1; border-radius: 12px"},[["*",["mSugs"],"o",[["button",{"onclick":{"h":["o","pick"]},"style":"min-height: 52px; border: none; border-bottom: 1px solid #EEF0EC; background: #FFFFFF; text-align: left; padding: 6px 12px; font-family: inherit; display: flex; flex-direction: column; justify-content: center; gap: 2px; cursor: pointer"},[["span",{"style":"font-size: 15px; font-weight: 700; color: #1B1F1D"},[["~",["",["o","label"],""]]]],["span",{"style":"font-size: 12px; color: #5B6460"},[["~",["",["o","sub"],""]]]]]]]]]],["button",{"onclick":{"h":["mExpandGo"]},"style":"height: 40px; border: none; background: transparent; font-family: inherit; font-size: 14px; color: #0F5F55; font-weight: 700; cursor: pointer"},["찾는 책이 없어요 · 이 제목으로 직접 넣기"]]]],["?",["mShowFields"],[["div",{"style":"display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 6px"},[["*",["mLangs"],"o",[["button",{"onclick":{"h":["o","pick"]},"aria-pressed":{"h":["o","on"]},"style":{"m":["height: 44px; border-radius: 10px; font-family: inherit; font-size: 15px; cursor: pointer; ",["o","style"],""]}},[["~",["",["o","label"],""]]]]]]]],["label",{"for":"m-pages","style":"font-size: 13px; font-weight: 700; color: #3F4743"},["쪽수 ",["span",{"style":"font-weight: 400; color: #5B6460"},["(모르면 비워 두세요)"]]]],["input",{"id":"m-pages","type":"number","min":"1","value":{"h":["mPages"]},"onchange":{"h":["onPages"]},"placeholder":"예: 32","style":"height: 48px; border-radius: 10px; border: 1px solid #8A9590; padding: 0 12px; font-family: inherit; font-size: 16px; color: #1B1F1D; box-sizing: border-box; width: 100%"},[]],["?",["mIsEn"],[["div",{"style":"font-size: 13px; font-weight: 700; color: #3F4743"},["레벨 ",["span",{"style":"font-weight: 400; color: #5B6460"},["(아는 경우만)"]]]],["div",{"style":"display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 6px"},[["*",["mLevels"],"o",[["button",{"onclick":{"h":["o","pick"]},"aria-pressed":{"h":["o","on"]},"style":{"m":["height: 40px; border-radius: 10px; font-family: inherit; font-size: 14px; cursor: pointer; ",["o","style"],""]}},[["~",["",["o","label"],""]]]]]]]]]],["div",{"style":"display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; padding-top: 4px"},[["button",{"onclick":{"h":["mSaveTodo"]},"style":"height: 52px; border-radius: 12px; border: 1px solid #0F766E; background: #FFFFFF; color: #0F5F55; font-family: inherit; font-size: 15px; font-weight: 700; cursor: pointer"},["읽을 책에 담기"]],["button",{"onclick":{"h":["mSaveRead"]},"style":"height: 52px; border-radius: 12px; border: none; background: #0F766E; color: #FFFFFF; font-family: inherit; font-size: 15px; font-weight: 700; cursor: pointer"},["오늘 읽음 기록"]]]]]]]]]]]],["?",["datesOpen"],[["div",{"style":"position: absolute; inset: 0; background: rgba(20,24,22,0.45); display: flex; flex-direction: column; justify-content: flex-end"},[["button",{"onclick":{"h":["dDone"]},"aria-label":"닫기","style":"flex-grow: 1; border: none; background: transparent; cursor: pointer"},[]],["div",{"style":"background: #FFFFFF; border-radius: 20px 20px 0 0; padding: 16px 16px 24px; display: flex; flex-direction: column; gap: 8px"},[["div",{"style":"font-size: 18px; font-weight: 700; line-height: 1.35"},[["~",["",["dTitle"],""]]]],["div",{"style":"font-size: 13px; color: #3F4743; line-height: 1.45"},["날짜를 누르면 달력이 떠요. 날짜를 바꾸면 그날 쪽수 기록도 같이 옮겨져요."]],["*",["dRows"],"r",[["div",{"style":"display: flex; align-items: center; gap: 8px; min-height: 56px; border-bottom: 1px solid #EEF0EC"},[["label",{"for":{"h":["r","inputId"]},"style":"width: 56px; font-size: 14px; color: #3F4743; flex-shrink: 0"},[["~",["",["r","nth"],""]]]],["input",{"id":{"h":["r","inputId"]},"type":"date","value":{"h":["r","iso"]},"max":{"h":["r","max"]},"onchange":{"h":["r","change"]},"style":"flex-grow: 1; min-width: 0; height: 44px; border-radius: 10px; border: 1px solid #8A9590; padding: 0 10px; font-family: inherit; font-size: 16px; color: #1B1F1D; box-sizing: border-box"},[]],["button",{"onclick":{"h":["r","del"]},"aria-label":{"h":["r","delLabel"]},"style":"width: 44px; height: 44px; border: none; background: transparent; display: flex; align-items: center; justify-content: center; flex-shrink: 0; cursor: pointer"},[["svg",{"width":"18","height":"18","viewBox":"0 0 24 24","fill":"none","stroke":"#5B6460","stroke-width":"2","aria-hidden":"true"},[["path",{"d":"M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"},[]]]]]]]]]],["button",{"onclick":{"h":["dDone"]},"style":"height: 52px; margin-top: 6px; border-radius: 12px; border: none; background: #0F766E; color: #FFFFFF; font-family: inherit; font-size: 16px; font-weight: 700; cursor: pointer"},["다 고쳤어요"]]]]]]]],["?",["scanOpen"],[["div",{"style":"position: absolute; inset: 0; background: #111413; color: #FFFFFF; display: flex; flex-direction: column"},[["div",{"style":"display: flex; align-items: center; padding: 8px 8px 4px 16px"},[["span",{"style":"font-size: 17px; font-weight: 700; flex-grow: 1"},["바코드 찍기"]],["?",["scanCountText"],[["span",{"style":"font-size: 13px; font-weight: 700; color: #7DD3C0; margin-right: 4px"},[["~",["",["scanCountText"],""]]]]]],["button",{"onclick":{"h":["closeScan"]},"aria-label":"바코드 찍기 닫기","style":"width: 44px; height: 44px; border: none; background: transparent; color: #FFFFFF; display: flex; align-items: center; justify-content: center; cursor: pointer"},[["svg",{"width":"22","height":"22","viewBox":"0 0 24 24","fill":"none","stroke":"currentColor","stroke-width":"2","aria-hidden":"true"},[["path",{"d":"M18 6L6 18M6 6l12 12"},[]]]]]]]],["div",{"style":"padding: 0 16px; font-size: 13px; line-height: 1.45; color: #E5E7EB"},["찍으면 책 정보가 떠요. 읽은 책이면 '오늘 읽음 기록'을 누르고, 아니면 바깥을 눌러 닫으면 돼요."]],["div",{"onclick":{"h":["scanTap"]},"style":"flex-grow: 1; margin: 10px 16px 0; border-radius: 16px; background: #2A2F2D; position: relative; display: flex; align-items: center; justify-content: center; min-height: 200px; overflow: hidden"},[["video",{"ref":{"h":["videoRef"]},"playsinline":"playsinline","muted":"muted","style":"position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover"},[]],["div",{"data-scanbox":"1","style":"width: 240px; height: 120px; border: 3px solid #7DD3C0; border-radius: 12px; position: relative; transition: border-color 0.15s"},[["div",{"style":"position: absolute; left: 12px; right: 12px; top: 58px; height: 2px; background: #F87171"},[]]]],["div",{"data-zoom":"1","style":"position: absolute; left: 16px; right: 16px; top: 10px; text-align: center; font-size: 12px; color: #E5E7EB; text-shadow: 0 1px 2px #000"},[]],["div",{"style":"position: absolute; left: 16px; right: 16px; bottom: 12px; text-align: center; font-size: 13px; line-height: 1.5; color: #E5E7EB; text-shadow: 0 1px 2px #000"},["책 뒤표지 ISBN 바코드(978·979) · 폰은 20~30cm 떨어져서 · 흐리면 화면 톡"]]]],["div",{"style":"padding: 12px 16px 16px; display: flex; flex-direction: column; gap: 8px; position: relative"},[["div",{"style":"font-size: 14px; line-height: 1.45; color: #E5E7EB; min-height: 40px"},[["~",["",["scanStatus"],""]]]],["button",{"onclick":{"h":["openManual"]},"style":"height: 44px; border: none; background: transparent; color: #7DD3C0; font-family: inherit; font-size: 15px; font-weight: 700; cursor: pointer"},["안 찍혀요 · 제목이나 ISBN 번호로 찾기"]],["?",["scanToastShow"],[["div",{"style":"position: absolute; left: 12px; right: 12px; bottom: 12px; background: #FFFFFF; color: #1B1F1D; border-radius: 12px; padding: 4px 4px 4px 14px; display: flex; align-items: center; gap: 8px"},[["svg",{"width":"20","height":"20","viewBox":"0 0 24 24","fill":"none","stroke":"#0F766E","stroke-width":"2.5","aria-hidden":"true","style":"flex-shrink: 0"},[["path",{"d":"M20 6L9 17l-5-5"},[]]]],["span",{"style":"flex-grow: 1; font-size: 14px; line-height: 1.4; padding: 8px 0"},[["~",["",["toastText"],""]]]],["button",{"onclick":{"h":["undo"]},"style":"height: 44px; padding: 0 12px; border: none; background: transparent; color: #0F5F55; font-family: inherit; font-size: 14px; font-weight: 700; flex-shrink: 0; cursor: pointer"},["되돌리기"]]]]]]]]]]]],["?",["resOpen"],[["div",{"style":"position: absolute; inset: 0; background: rgba(10,12,11,0.45)"},[["button",{"onclick":{"h":["resClose"]},"aria-label":"책 정보 닫기","style":"width: 100%; height: 100%; border: none; background: transparent; cursor: pointer"},[]]]],["div",{"style":"position: absolute; left: 0; right: 0; bottom: 0; max-height: 640px; overflow-y: auto; background: #FFFFFF; color: #1B1F1D; border-radius: 20px 20px 0 0; padding: 10px 16px 20px; display: flex; flex-direction: column; gap: 9px; box-sizing: border-box"},[["div",{"style":"align-self: center; width: 40px; height: 4px; border-radius: 2px; background: #C9CFCB"},[]],["div",{"style":"font-size: 12px; color: #5B6460; text-align: center"},[["~",["",["rCloseHint"],""]]]],["div",{"style":"font-size: 12px; color: #5B6460"},[["~",["",["rKicker"],""]]]],["div",{"style":"font-size: 20px; font-weight: 700; line-height: 1.3"},[["~",["",["rTitle"],""]]]],["div",{"style":"font-size: 14px; color: #3F4743; line-height: 1.45"},[["~",["",["rSub"],""]]]],["?",["rX"],[["div",{"style":"font-size: 13px; color: #3F4743"},[["~",["",["rX"],""]]]]]],["?",["rBadge"],[["div",{"style":{"h":["rBadgeStyle"]}},[["~",["",["rBadge"],""]]]]]],["?",["rHow"],[["div",{"style":{"h":["rHowStyle"]}},[["~",["",["rHow"],""]]]]]],["div",{"style":{"m":["font-size: 15px; font-weight: 700; color: ",["rHistColor"],""]}},[["~",["",["rHist"],""]]]],["?",["rHasChips"],[["div",{"style":"display: flex; flex-wrap: wrap; gap: 4px"},[["*",["rChips"],"x",[["span",{"style":{"h":["x","style"]}},[["~",["",["x","text"],""]]]]]]]],["?",["rHasCalls"],[["div",{"style":"display: flex; flex-direction: column; gap: 4px; padding: 6px 8px; background: #F1F7F5; border-radius: 8px"},[["*",["rCalls"],"c",[["div",{"style":"display: flex; align-items: baseline; gap: 8px; flex-wrap: wrap"},[["span",{"style":"font-size: 13px; color: #3F4743; min-width: 30px"},[["~",["",["c","lib"],""]]]],["span",{"style":"font-size: 16px; font-weight: 700; color: #0F5F55"},[["~",["",["c","cn"],""]]]],["span",{"style":{"h":["c","stStyle"]}},[["~",["",["c","st"],""]]]]]]]]]]]],["?",["rCallMsg"],[["div",{"style":"font-size: 12px; color: #5B6460"},[["~",["",["rCallMsg"],""]]]]]],["div",{"style":"font-size: 11px; color: #8A9590"},[["~",["",["rChipNote"],""]]]]]],["?",["rShowLang"],[["div",{"style":"font-size: 13px; font-weight: 700; color: #3F4743"},["어떤 책인가요?"]],["div",{"style":"display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 6px"},[["*",["rLangs"],"o",[["button",{"onclick":{"h":["o","pick"]},"aria-pressed":{"h":["o","on"]},"style":{"m":["height: 44px; border-radius: 10px; font-family: inherit; font-size: 15px; cursor: pointer; ",["o","style"],""]}},[["~",["",["o","label"],""]]]]]]]]]],["?",["rShowPages"],[["div",{"style":"font-size: 14px; color: #3F4743"},["쪽수 정보가 없어요. 대략 몇 쪽인지 누르면 바로 기록돼요."]],["div",{"style":"display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 6px"},[["*",["rPageOpts"],"o",[["button",{"onclick":{"h":["o","pick"]},"style":"height: 52px; border-radius: 10px; border: none; background: #0F766E; color: #FFFFFF; font-family: inherit; font-size: 15px; font-weight: 700; cursor: pointer"},[["~",["",["o","label"],""]]]]]]]],["button",{"onclick":{"h":["rSkipPages"]},"style":"height: 40px; border: none; background: transparent; font-family: inherit; font-size: 14px; color: #3F4743; text-decoration: underline; cursor: pointer"},["쪽수 없이 기록"]]]],["?",["rShowBtn"],[["button",{"onclick":{"h":["rBtn"]},"style":"height: 56px; margin-top: 4px; border-radius: 14px; border: none; background: #0F766E; color: #FFFFFF; font-family: inherit; font-size: 17px; font-weight: 700; cursor: pointer"},[["~",["",["rBtnLabel"],""]]]]]],["?",["rRelink"],[["button",{"onclick":{"h":["rRelinkGo"]},"style":"height: 40px; border: none; background: transparent; color: #5B6460; font-family: inherit; font-size: 14px; text-decoration: underline; cursor: pointer"},["이 책이 아니에요 · 다시 고르기"]]]]]]]]]]];
// ---- 화면 틀(템플릿) → Preact 그리기
const TYPED_INPUT = { text: 1, number: 1, search: 1, email: 1, tel: 1, url: 1, password: 1, range: 1 };
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
let DATA = null, BK = {}, ALL = [], EB_RANK = {}, TITLE_IDX = {}, ISM = {};
function initData(D) {
  DATA = D; BK = {}; EB_RANK = {}; TITLE_IDX = {};
  D.books.forEach((r) => {
    const b = { id: r[0], t: r[1], a: r[2], lv: r[3], rev: r[4], star: r[5], pg: r[6], lang: r[7] ? 'en' : 'ko', cat: r[8], ec: r[9], x: r[10], libs: [], sp: 0 };
    BK[b.id] = b;
    altKeys(b.t).forEach((k) => (TITLE_IDX[k] || (TITLE_IDX[k] = [])).push(b.id));
  });
  ALL = Object.values(BK);
  ISB = D.IS || {}; ISM = D.ISM || {}; OWN_V = D.OWN_V || ''; LIB_DATA = !!D.OWN; GBK = (D.KEYS && D.KEYS.gb) || ''; CALLS = D.CALL || {};
  // 도서관 소장: 강북·월계·장위 = libs [도서관, 분류번호], 월계어린이 = 예비(sp)
  if (D.OWN) Object.keys(D.OWN).forEach((id) => { const b = BK[id]; if (b) D.OWN[id].forEach((x) => { if (x[0] < 3) b.libs.push(x); else b.sp = (x[1] || '있음') + (x[2] ? ' ?' : ''); }); });
  const c = {};
  D.EB.forEach((k) => { const g = k[1] + '|' + k[3]; c[g] = (c[g] || 0) + 1; EB_RANK[k[0] + '|' + k[1]] = c[g]; });
}
function normT(t) { return (t || '').toLowerCase().replace(/[\s'’!?,.:;~\-()\[\]"]/g, ''); }
// 같은 제목의 다른 표기: 앞 관사(The·A·An·'(The)'), '&' = 'and', '… 시리즈: 책제목'의 책제목
const ART = /^\s*(?:\(\s*(?:the|an|a)\s*\)|(?:the|an|a)\s+)/i;
function altKeys(t) {
  t = String(t || '');
  const vs = [t, t.replace(/\s*[&＆]\s*/g, ' and ')];
  const m = /^(.*?시리즈)\s*[:：]\s*(.+)$/.exec(t);
  if (m) vs.push(m[2], m[2].replace(/\s*[&＆]\s*/g, ' and '));
  const out = [];
  vs.forEach((x) => [x, x.replace(ART, '')].forEach((y) => { const k = normT(y); if (k.length >= (y === t ? 1 : 4) && !out.includes(k)) out.push(k); }));
  return out;
}
const ECN = { pic: '그림책', rd: '리더스북', prd: '그림책같은리더스북', ch: '챕터북', nv: '소설', nf: '지식책', dc: '사전·만화', best: '베스트' };
const EN_SUBS = ['best', 'pic', 'rd', 'prd', 'ch', 'nv', 'nf', 'dc'];
const BEST_SUBS = ['pic', 'rd', 'prd', 'ch', 'nv', 'nf'];
const LV_MAIN = ['J1', 'J2', 'J3', 'J4', 'J5'];
const LV_MORE = ['J0', 'J6', 'J7', 'J8', 'J9', 'J10'];
const LV_ORDER = ['J0', 'J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8', 'J9', 'J10'];
const PAGE = 40;
let LIB_DATA = false, ISB = {}, OWN_V = '', GBK = '', CALLS = {};   // CALLS = 집 컴퓨터에서 미리 모아 넣은 청구기호 {책ID: {도서관: [청구기호들, 확실, 자료실]}}   // GBK = 강북 도서관이 준 임시 인증키(암호화된 데이터에서)
   // 도서관 장서 자료가 붙으면 LIB_DATA = true, ISB = 바코드(ISBN) → 책
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
  // x = [도서관, 그 도서관 분류번호(여러 판이면 ·로), 1=같은 판인지 불확실]
  // 청구기호를 불러온 적 있으면(책을 열었거나 '청구기호 불러오기') 분류번호 대신 진짜 청구기호
  const cc = typeof CallCache !== 'undefined' ? CallCache.get(L.id) : null;
  // 청구기호가 있는 도서관만 보여 줌 (분류번호만 있는 건 서가에서 찾는 데 쓸모가 없어서 안 보임)
  const out = (L.libs || []).map((x) => [x, callOf(L.id, x[0], cc)]).filter(([, g]) => g && g.cn.length).map(([x, g], i) => (
    { lib: x[0], text: LIBS[x[0]] + ' ' + g.cn[0] + (g.sure ? '' : ' ?'), style: g.sure ? (i === 0 ? CHIP_MAIN : CHIP) : CHIP_DASH }));
  if (home) out.unshift({ text: '우리집 책', style: CHIP_HOME });
  if (b.sr) out.push({ text: '잠수네 ' + b.sr + ' 중 한 권', style: CHIP });
  const spg = L.sp ? callOf(L.id, 3, cc) : null;
  const spOk = !!(spg && spg.cn.length);
  if (LIB_DATA && !out.length && spOk) out.push({ lib: 3, text: '예비 · 월계어린이 ' + spg.cn[0] + (spg.sure ? '' : ' ?'), style: CHIP_DASH });
  if (LIB_DATA && BK[L.id] && !out.length && !spOk && !home) out.push({ text: '근처 도서관 모두 없음 · 상호대차 확인', style: CHIP_WARN });
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
      grades: ['초1'], plans: [1], statTab: 'day', lvLang: 'en', lvMeasure: 'n',
      lang: 'en', ensub: 'best', ebest: 'pic', elv: [], lvMoreOpen: false,
      kosub: 'bw', kobw: 'w', week: 0, month: now.getMonth() + 1, etcLang: 'all',
      ltab: 'todo', view: 'order', more: PAGE,
      reads: {}, extra: [], manual: {}, pgFix: {}, home: {}, isbnMap: {}, calls: {}, callBatch: '', libDiag: '', scanIsbn: '', mCands: null, askId: null, scanCount: 0, scanMsg: '',
      dateId: null, dateSnap: null,
      mTitle: '', mPages: '', mLang: 'ko', mLevel: '', mErr: '', mExpand: false,
    }, init);
    // 카메라 화면이 붙고 떨어질 때 (한 번만 만든 함수여야 깜빡이지 않음)
    this.videoRef = (el) => props.api.camera(el, (code) => this.onScan(code), (msg) => this.setState({ scanMsg: msg }));
  }
  async onScan(isbn) {
    if (this.state.sheet !== 'scan' || this.state.res || this.scanBusy) return;
    this.scanBusy = true;
    this.setState({ scanMsg: 'ISBN ' + isbn + ' 찾는 중…', scanIsbn: '' });
    try {
      const f = await this.props.api.findIsbn(isbn, this.state);
      if (this.state.sheet !== 'scan') return;
      if (f.cands) {
        // 바코드 하나에 잠수네 책이 여러 권 → 목록에서 고르기
        this.setState({ sheet: 'manual', scanIsbn: isbn, mCands: { isbn, ids: f.cands, kind: f.kind }, mTitle: '', mPages: '', mLang: 'ko', mLevel: '', mErr: '', mExpand: false,
          scanMsg: '바코드를 네모 칸에 맞춰 주세요' });
        return;
      }
      if (f.id) this.openRes(f.id, 'scan', null, isbn, f.how);
      else if (f.q && this.hasTitle(f.q)) {
        // 바코드 정보로 제목은 알았는데 잠수네 책과 바로 못 이었을 때 → 그 제목으로 찾은 목록에서 고르기
        this.setState({ sheet: 'manual', scanIsbn: isbn, mTitle: f.q, mPages: f.nb && f.nb.pg ? String(f.nb.pg) : '', mLang: (f.nb && f.nb.lang) || 'ko', mLevel: '', mErr: '', mExpand: false,
          scanMsg: '바코드를 네모 칸에 맞춰 주세요' });
        return;
      } else if (f.nb) this.openRes('N1', 'scan', f.nb, isbn, f.how);
      else {
        // 모르는 바코드 → 바로 제목 찾기로. 고른 책은 이 바코드로 기억 (가족 폰도 같이)
        this.setState({ sheet: 'manual', scanIsbn: isbn, mTitle: '', mPages: '', mLang: 'ko', mLevel: '', mErr: '', mExpand: false,
          scanMsg: '바코드를 네모 칸에 맞춰 주세요' });
        return;
      }
      this.setState({ scanMsg: '바코드를 네모 칸에 맞춰 주세요' });
    } catch (e) {
      this.setState({ scanMsg: '책 정보를 받지 못했어요. 인터넷 연결을 확인해 주세요.' });
    } finally { this.scanBusy = false; }
  }
  book(id, s) { s = s || this.state; return BK[id] || s.manual[id] || null; }
  // 목록에 보일 청구기호: 불러온 적 있으면 진짜 청구기호, 없으면 분류번호
  cnText(b) {
    // 청구기호를 아는 도서관을 먼저 (없으면 첫 도서관의 분류번호)
    const hit = b.libs.map((x) => [x, callOf(b.id, x[0])]).find(([, g]) => g && g.cn.length);
    if (hit) return LIBS[hit[0][0]] + ' ' + hit[1].cn[0] + (hit[1].sure ? '' : ' ?');
    return '';                                   // 청구기호를 모르면 안 보임 (분류번호는 쓸모없음)
  }
  hasTitle(q) { const k = normT(q); return k.length >= 2 && ALL.concat(Object.values(this.state.manual)).some((b) => (b.n || (b.n = normT(b.t))).includes(k)); }
  isHome(id) { return !!this.state.home[id]; }
  // 레벨 × 월 집계 (읽은 기록 전체). 레벨은 책의 잠수네 레벨, 모르면 '모름'
  levelStats(lang, s) {
    s = s || this.state;
    const cell = () => ({ n: 0, p: 0, ids: new Set() });
    const grid = {}, rowT = {}, colT = {}, all = cell(), lvSet = new Set();
    Object.keys(s.reads).forEach((id) => {
      const b = this.book(id, s); if (!b || b.lang !== lang) return;
      const m = /^(JK|J)(\d+)/.exec(String(b.lv || '').toUpperCase());
      const lv = m && (m[1] === 'JK') === (lang === 'ko') ? m[1] + (+m[2]) : '모름';
      lvSet.add(lv);
      const pg = this.pages(b, s) || 0;
      s.reads[id].forEach((dt) => {
        const mo = dt.slice(0, 7);
        const g = (grid[mo] || (grid[mo] = {}));
        [g[lv] || (g[lv] = cell()), rowT[mo] || (rowT[mo] = cell()), colT[lv] || (colT[lv] = cell()), all].forEach((c) => { c.n += 1; c.p += pg; c.ids.add(id); });
      });
    });
    const levels = Array.from(lvSet).sort((a, b) => (a === '모름') - (b === '모름') || (parseInt(a.replace(/\D/g, ''), 10) || 0) - (parseInt(b.replace(/\D/g, ''), 10) || 0));
    return { levels, months: Object.keys(grid).sort(), grid, rowT, colT, all };
  }
  pages(b, s) { s = s || this.state; return s.pgFix[b.id] || b.pg || 0; }
  snap(s) { return { reads: s.reads, entries: s.entries, extra: s.extra, manual: s.manual, pgFix: s.pgFix, home: s.home, isbnMap: s.isbnMap, scanCount: s.scanCount }; }
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
    const isbnMap = s.scanIsbn ? this.rememberIsbn(s, s.scanIsbn, id) : null;
    let patch = { manual, extra, isbnMap: isbnMap || s.isbnMap, scanIsbn: '' }, text = '‘' + nb.t + '’ 기타에 담았어요' + (isbnMap ? ' · 이 바코드를 기억했어요' : '');
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
  openRes(origId, via, nb, isbn, how) {
    if (origId === 'N1') origId = this.findExtraId(nb.t, null) || 'N1';
    this.setState({ res: { origId, via, status: 'view', lang: (nb && nb.lang) || 'ko', nb: nb || null, isbn: isbn || '', how: how || '', mine: how === 'mine' }, sheet: via === 'scan' ? 'scan' : 'result', toast: null });
    if (BK[origId]) this.loadCalls(origId);
  }
  // 도서관 청구기호·대출 상태 (우리 시트가 도서관에 대신 물어봄)
  libsOf(b) { return (b.libs || []).map((x) => x[0]).concat(b.sp ? [3] : []); }
  async loadCalls(id, force) {
    const b = BK[id];
    if (!b || !this.props.api.libPost) return;
    const libs = this.libsOf(b);
    if (!libs.length) return;
    const c = CallCache.get(id);
    const put = (v) => this.setState({ calls: Object.assign({}, this.state.calls, { [id]: v }) });
    if (c && !force && Date.now() - c.at < CALL_TTL) { put(c); return; }
    put(Object.assign({}, c || { r: {} }, { busy: true }));
    let r;
    try { r = await lookupCalls(b, libs, this.state.isbnMap, this.props.api.libPost); } catch (e) { r = { at: Date.now(), r: {}, err: 'net' }; }
    if (!r.err || r.err === 'gbkey' || r.err === 'gbquota') CallCache.put(id, Object.assign({}, r, { at: r.err ? Date.now() - CALL_TTL + (r.err === 'gbquota' ? 3600000 : 600000) : r.at }));   // 키 오류 10분, 한도 초과 1시간 뒤 다시
    put(r.err && c ? Object.assign({}, c, { err: r.err }) : r);
  }
  // 목록에 보이는 강북 책은 저절로 청구기호를 받아 둠 (버튼 없이, 폰에 30일 보관)
  wantCall(id) {
    const b = BK[id];
    if (!b || !b.libs.some((x) => x[0] === 0) || !this.props.api.libPost || this._cStop) return;
    if (CALLS[id] && CALLS[id][0]) return;                       // 미리 모아 넣은 청구기호가 있으면 안 물어봄
    if (!AUTO_CALLS) return;                                      // 강북 API 하루 한도(약 1,000번)는 집 컴퓨터 수집에 쓰려고 목록 자동 받기는 꺼 둠
    const seen = this._cSeen || (this._cSeen = new Set());
    if (seen.has(id)) return;
    const c = CallCache.get(id);
    if (c && Date.now() - c.at < CALL_KEEP) return;
    seen.add(id);
    (this._cq || (this._cq = [])).push(id);
    if (!this._cRun) { this._cRun = true; setTimeout(() => this.runCalls(), 400); }
  }
  async runCalls() {
    try {
      while (this._cq && this._cq.length) {
        if (typeof navigator !== 'undefined' && navigator.onLine === false) break;
        const batch = this._cq.splice(0, 15);
        let r;
        try { r = await lookupMany(batch.map((id) => BK[id]), this.state.isbnMap, this.props.api.libPost); } catch (e) { batch.forEach((id) => this._cSeen.delete(id)); break; }
        if (r.err) { this._cStop = true; break; }            // 시트 코드 예전 판·인증키 문제면 그만 (팝업에서 안내)
        r.out.forEach(([id, v]) => CallCache.put(id, v));
        this.setState({ callTick: (this.state.callTick || 0) + 1, callBatch: this._cq.length ? '강북 청구기호 받는 중 · 남은 ' + this._cq.length + '권' : '' });
      }
    } finally {
      this._cRun = false;
      if (this.state.callBatch) this.setState({ callBatch: '' });
    }
  }
  async loadCallsBatch(ids) {
    const todo = ids.filter((id) => { const c = CallCache.get(id); return !c || Date.now() - c.at > CALL_KEEP; }).slice(0, 30);
    if (!todo.length) return;
    this.setState({ callBatch: '청구기호 불러오는 중… (' + todo.length + '권)' });
    let n = 0;
    for (let i = 0; i < todo.length; i += 6) {
      await Promise.all(todo.slice(i, i + 6).map(async (id) => {
        const b = BK[id];
        try {
          const r = await lookupCalls(b, this.libsOf(b), this.state.isbnMap, this.props.api.libPost);
          if (!r.err) { CallCache.put(id, r); if (Object.keys(r.r).length) n += 1; }
        } catch (e) { /* 다음 책 */ }
      }));
      this.setState({ callBatch: '청구기호 불러오는 중… ' + Math.min(i + 6, todo.length) + '/' + todo.length });
    }
    this.setState({ callBatch: '', toast: { info: true, text: '청구기호 ' + n + '권 찾았어요' } });
  }
  // 우리 집 책의 바코드 기억 (도서관 색인에 없는 판본: 예) 국내 수입판 영어책)
  rememberIsbn(s, isbn, id) {
    if (!isbn || (ISB[isbn] === id && !ISM[isbn]) || (s.isbnMap || {})[isbn] === id) return null;   // 여러 판 바코드는 색인과 같아도 기억
    return Object.assign({}, s.isbnMap, { [isbn]: id });
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
    const isbnMap = this.rememberIsbn(s, r.isbn, id);
    if (isbnMap && !ISB[r.isbn]) tail += ' · 이 바코드를 기억했어요';
    this.setState(Object.assign({ manual, extra, pgFix, isbnMap: isbnMap || s.isbnMap, scanIsbn: '' }, rp.patch, {
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
    if (!done) this.wantCall(b.id);
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
      cn: libView && !done && b.libs[0] ? this.cnText(b) : '',
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
    v.closeSheet = () => this.setState({ sheet: null, askId: null, scanIsbn: '' });
    v.levelOptions = lvAct ? LV[lvAct.lv].map((l) => ({
      label: l,
      style: l === s.levels[s.lvKey] ? 'border: none; background: ' + lvAct.color + '; color: #FFFFFF' : 'border: 1px solid #B9C4BF; background: #FFFFFF; color: #1B1F1D',
      pick: () => this.setState({ levels: Object.assign({}, s.levels, { [s.lvKey]: l }), sheet: null }),
    })) : [];

    // ---- 통계
    v.isStats = s.tab === 'stats';
    // 주 = 이번 주 월요일 ~ 일요일 (오늘까지 센 것)
    const wOff = (new Date(TODAY + 'T12:00:00').getDay() + 6) % 7;
    const y0 = TODAY.slice(0, 4) + '-01-01', m0 = TODAY.slice(0, 8) + '01', w0 = addDays(TODAY, -wOff), w6 = addDays(w0, 6);
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
        : s.statTab === 'week' ? fmtD(w0) + ' (월) ~ ' + fmtD(w6) + ' (일) · ' + (wOff + 1) + '일째'
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
    // ---- 레벨 × 월 표 (기간 선택과 상관없이 기록 전체)
    {
      const L = this.levelStats(s.lvLang), ms = s.lvMeasure;
      const val = (c) => (!c ? 0 : ms === 'p' ? c.p : ms === 'b' ? c.ids.size : c.n);
      const unit = ms === 'p' ? '쪽' : ms === 'b' ? '권' : '회';
      let mx = 1;
      L.months.forEach((mo) => L.levels.forEach((lv) => { mx = Math.max(mx, val(L.grid[mo][lv])); }));
      const TD = 'padding: 7px 6px; text-align: right; white-space: nowrap; border-bottom: 1px solid #F1F2EF; ';
      const heat = (x) => {
        if (!x) return TD + 'color: #B9C4BF';
        const a = 0.1 + 0.6 * (x / mx);
        return TD + 'background: rgba(15,118,110,' + a.toFixed(2) + '); color: ' + (a > 0.45 ? '#FFFFFF' : '#123B35') + '; font-weight: 700';
      };
      const yr = TODAY.slice(0, 4);
      const mName = (mo) => (mo.slice(0, 4) !== yr ? mo.slice(2, 4) + '년 ' : '') + (+mo.slice(5)) + '월';
      v.lvHead = L.levels.map((lv) => ({ label: lv }));
      v.lvRows = L.months.map((mo) => ({
        m: mName(mo),
        cells: L.levels.map((lv) => { const x = val(L.grid[mo][lv]); return { v: x ? nf(x) : '·', style: heat(x) }; }),
        total: nf(val(L.rowT[mo])),
      }));
      v.lvTotCells = L.levels.map((lv) => ({ v: nf(val(L.colT[lv])) }));
      v.lvTotal = nf(val(L.all));
      v.lvHas = L.months.length > 0;
      v.lvSpan = L.months.length ? mName(L.months[0]) + '~' + mName(L.months[L.months.length - 1]) + ' 전체 · ' + unit : '';
      v.lvLangs = [['en', '영어 (J)'], ['ko', '한글 (JK)']].map(([k, l]) => ({ label: l, style: s.lvLang === k ? SEG_ON : SEG_OFF, pick: () => this.setState({ lvLang: k }) }));
      v.lvMeasures = [['n', '횟수'], ['p', '쪽수'], ['b', '권수']].map(([k, l]) => ({ label: l, style: s.lvMeasure === k ? SEG_ON : SEG_OFF, pick: () => this.setState({ lvMeasure: k }) }));
      const totN = L.all.n || 1;
      v.lvSums = L.levels.map((lv, i) => {
        const c = L.colT[lv], p = Math.round((c.n / totN) * 100);
        return { lv, line: nf(c.n) + '회 · ' + nf(c.p) + '쪽 · 서로 다른 책 ' + nf(c.ids.size) + '권', pct: p + '%',
          bar: 'height: 100%; width: ' + Math.max(2, p) + '%; background: ' + (lv === '모름' ? '#B9C4BF' : '#0F766E') + '; border-radius: 4px' };
      });
      v.lvSumHead = (s.lvLang === 'en' ? '영어' : '한글') + ' 레벨별 합계 · ' + nf(L.all.n) + '회 · ' + nf(L.all.p) + '쪽 · ' + nf(L.all.ids.size) + '권';
    }
    v.exportXlsx = () => {
      this.setState({ toast: { info: true, text: '엑셀 파일을 만드는 중이에요…' } });
      this.props.api.xlsx().then(() => this.setState({ toast: { info: true, text: '엑셀 파일을 내려받았어요 · 읽은 기록·시간 기록·월별 요약·레벨별 월별·책별' } }),
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
    v.openManual = () => this.setState({ sheet: 'manual', res: null, scanIsbn: '', mTitle: '', mPages: '', mLang: 'ko', mLevel: '', mErr: '', mExpand: false, toast: null });
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
    v.callBtnShow = !!s.callBatch; v.callBtnLabel = s.callBatch || '';
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
    v.scanTap = () => this.props.api.camTap();
    v.closeScan = () => {
      const st = this.state;
      this.setState({ sheet: null, res: null, toast: st.scanCount ? { info: true, text: '바코드로 ' + st.scanCount + '권 기록했어요 · 기록 탭에 쪽수가 들어갔어요' } : null });
    };
    v.scanToastShow = v.scanOpen && !s.res && !!s.toast && !!s.toast.snap;
    const r = s.res;
    v.resOpen = !!r && (s.sheet === 'scan' || s.sheet === 'result');
    v.resClose = () => this.setState(s.sheet === 'scan' ? { res: null } : { sheet: null, res: null });
    v.rRelink = false; v.rHow = ''; v.rHowStyle = ''; v.rChips = []; v.rHasChips = false; v.rChipNote = ''; v.rCalls = []; v.rHasCalls = false; v.rCallMsg = ''; v.rShowLang = false; v.rShowPages = false; v.rPageOpts = []; v.rLangs = []; v.rX = ''; v.rBadge = '';
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
      const cc = BK[rb.id] ? s.calls[rb.id] : null;
      v.rCalls = cc ? Object.keys(cc.r || {}).map((li) => callLine(+li, cc.r[li])) : [];
      v.rHasCalls = v.rCalls.length > 0;
      v.rCallMsg = !cc ? '' : cc.busy ? '청구기호·대출 상태 확인 중…' : cc.err === 'old' ? '청구기호: 구글 시트 코드가 아직 예전 판이에요 (새 코드 붙여 넣고 배포 관리 → 새 버전)'
        : cc.err === 'gbkey' ? '강북 청구기호: 공공데이터포털 인증키가 강북 쪽에 아직 등록되지 않았대요 (활용신청 상태 확인 필요)'
        : cc.err === 'gbquota' ? '강북 청구기호: 오늘 조회 한도를 다 써서 내일 다시 보여 줘요'
        : cc.err === 'gb' ? '강북 청구기호: 강북 쪽 서버 오류' : cc.err ? '청구기호를 불러오지 못했어요 (인터넷 확인)' : '';
      // 청구기호 상자에 나온 도서관은 칩에서 빼서 두 번 안 보이게
      if (v.rHasCalls) { const shown = Object.keys(cc.r).map(Number); v.rChips = v.rChips.filter((c) => c.lib == null || !shown.includes(c.lib)); v.rHasChips = true; }
      v.rChipNote = v.rChips.some((c) => /\d{3}/.test(c.text)) ? '칩 숫자 = 그 도서관 분류번호(서가 번호)' + (v.rHasCalls ? '' : ' · 그 서가에서 저자 이름으로 찾아요') : '';
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
      v.rRelink = r.via === 'scan' && !!r.isbn;
      v.rHow = { mine: '우리 집이 이 바코드로 고른 책이에요', index: '도서관 장서의 같은 바코드로 찾았어요', 'index?': '도서관 장서에서 제목이 비슷한 책이에요 · 맞는지 확인해 주세요',
        title: '바코드의 책 정보(제목·저자)로 찾았어요', 'title?': '바코드의 책 정보 중 제목으로만 찾았어요 · 맞는지 꼭 확인해 주세요',
        picked: '이 바코드를 기억했어요 · 다음부터는 찍으면 바로 이 책이 떠요', multi: '여러 책이 함께 쓰는 바코드라 목록에서 고른 책이에요' }[r.how] || '';
      v.rHowWarn = /\?$/.test(r.how || '');
      v.rHowStyle = 'font-size: 12px; line-height: 1.4; color: ' + (v.rHowWarn ? '#9A3412' : '#5B6460');
      v.rRelinkGo = () => {
        const st = this.state, m = Object.assign({}, st.isbnMap); delete m[r.isbn];
        const mu = multiOf(r.isbn);                       // 여러 권 바코드면 후보 목록도 다시
        this.setState({ isbnMap: m, res: null, sheet: 'manual', scanIsbn: r.isbn, mTitle: '', mErr: '', mExpand: false, mCands: mu ? { isbn: r.isbn, ids: mu.ids, kind: mu.kind } : st.mCands });
      };
    }

    // ---- 찾기 · 직접 입력
    v.manualOpen = s.sheet === 'manual';
    v.mTitle = s.mTitle; v.mPages = s.mPages; v.mErr = s.mErr;
    v.onTitle = (e) => this.setState({ mTitle: e.target.value, mErr: '', mExpand: false });
    // ISBN 번호를 직접 쳐도 찾기 (바코드가 가려졌거나 안 찍힐 때)
    const dig = (s.mTitle || '').replace(/[\s-]/g, '');
    let typed = '';
    if (/^97[89]\d{10}$/.test(dig) && isbnOk(dig)) typed = dig;
    else if (/^\d{9}[\dXx]$/.test(dig)) {
      const core = '978' + dig.slice(0, 9); let sm = 0;
      for (let i = 0; i < 12; i++) sm += (+core[i]) * (i % 2 ? 3 : 1);
      typed = core + ((10 - sm % 10) % 10);
    }
    v.mTypedIsbn = typed;
    v.mTypedGo = () => { if (!typed) return; this.setState({ sheet: 'scan', mTitle: '', res: null, scanIsbn: '' }); setTimeout(() => this.onScan(typed), 30); };
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
        pick: () => {
          const st = this.state, isbn = st.scanIsbn;
          if (!isbn) { this.openRes(b.id, 'search'); return; }
          // 고르는 순간 이 바코드를 기억 (기록하지 않고 닫아도, 가족 폰에도) — 전집 공통 번호는 빼고
          const mu = multiOf(isbn);
          const m = mu && mu.kind === 'set' ? null : this.rememberIsbn(st, isbn, b.id);
          if (m) this.setState({ isbnMap: m });
          this.openRes(b.id, 'scan', null, isbn, 'picked');
        } };
    });
    const mc = s.mCands && s.mCands.isbn === s.scanIsbn ? s.mCands.ids.map((id) => BK[id]).filter(Boolean) : [];
    const mcSet = s.mCands && s.mCands.kind === 'set';
    v.mHasCands = mc.length > 0;
    v.mCands = mc.map((b, i) => [b, i]).sort((x, y) => ((s.reads[y[0].id] || []).length > 0) - ((s.reads[x[0].id] || []).length > 0) || x[1] - y[1]).map(([b]) => {
      const n = (s.reads[b.id] || []).length;
      return { label: b.t, sub: [b.a, b.lv, b.pg ? b.pg + '쪽' : '', b.star ? '★' + b.star : '', n ? n + '번 읽음' : ''].filter(Boolean).join(' · '),
        pick: () => {
          const st = this.state, isbn = st.scanIsbn;
          const m = mcSet ? null : this.rememberIsbn(st, isbn, b.id);       // 같은 제목의 판 고르기는 기억, 전집 공통 번호는 매번 고름
          if (m) this.setState({ isbnMap: m });
          this.openRes(b.id, 'scan', null, isbn, mcSet ? 'multi' : 'picked');
        } };
    });
    v.mIsbnNote = mc.length ? (mcSet ? '바코드 ' + s.scanIsbn + '은(는) 전집·세트의 여러 책이 함께 쓰는 번호예요. 지금 읽은 책을 골라 주세요.'
      : '이 바코드의 책은 잠수네에 같은 제목으로 ' + mc.length + '권(판이 서로 달라요) 있어요. 지은이·쪽수를 보고 골라 주세요. 한 번 고르면 기억해요.')
      : s.scanIsbn ? '바코드는 잘 읽었어요 (' + s.scanIsbn + '). 그런데 이 번호의 책이 잠수네 목록과 아직 이어져 있지 않아요 — 도서관에 없는 판이거나 잠수네에 없는 책일 수 있어요. ' + (s.mTitle ? '인터넷에서 찾은 제목을 넣어 뒀어요. 아래에서 맞는 책을 골라 주세요.' : '제목을 몇 글자 쳐서 골라 주세요.') + ' 한 번 고르면 기억해서 다음부터는 이 바코드로 바로 떠요.' : '';
    v.mIsbnBack = () => this.setState({ sheet: 'scan', scanIsbn: '' });
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
    v.ownNote = LIB_DATA ? '소장 여부는 정보나루 장서 파일(' + OWN_V + ') 기준이에요. 칩의 숫자는 그 도서관이 붙인 분류번호(서가 번호)이고, 판이 여럿이면 ·로 다 보여 줘요. 점선·?는 같은 판인지 확실하지 않은 것이에요. 강북은 목록에 보이는 책의 진짜 청구기호를 저절로 받아 두고(폰에 30일 보관), 책을 열면 대출 상태까지 보여 줘요. 월계·월계어린이·장위는 집 컴퓨터에서 모아 넣는 중이에요.'
      : '도서관 장서 파일을 붙이면 소장 도서관과 분류번호가 나와요';
    v.libDiagText = s.libDiag;
    v.libDiagGo = async () => {
      this.setState({ libDiag: '점검 중…' });
      let t;
      try { t = await libDiag(this.props.api.libPost, this.props.api.isbnAsk); } catch (e) { t = '점검 실패: ' + (e && e.message ? e.message : e); }
      this.setState({ libDiag: t });
    };
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
const SET_KEYS = ['goals', 'grades', 'plans', 'levels', 'isbnMap'];
const DATA_KEYS = ['entries', 'reads', 'extra', 'manual', 'pgFix', 'home', 'goals', 'grades', 'plans', 'levels', 'isbnMap'];

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
  const def = { goals: { jip: 30, video: 60, audio: 30, read: 20, kor: 60 }, grades: ['초1'], plans: [1], levels: { jip: 'J3', video: 'JD4', read: 'J3' }, isbnMap: {} };
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

// ---- 한 번만 하는 자료 고침 (가족 폰 어디서 먼저 하든 같은 결과)
// fix1: 읽은책 목록에서 가져올 때 같은 제목의 다른 책(다른 출판사·레벨)에 잘못 붙었던 48권 → 읽은책 목록 그대로의 책으로
const FIX1 = {"fixes":[{"from":"E09083","t":"Madeline","to":"R0622","home":false,"row":{"책ID":"R0622","제목":"Madeline","언어":"en","레벨":"J4","쪽수":23,"작가":"Ludwig Bemelmans","출판사":"키위영어","시리즈":"Madeline 시리즈","잠수네연결ID":"E03801","영어분류":"pic","기타목록":"","출처":"읽은책 목록","담은날":"2026-11-20"}},{"from":"E03768","t":"The Snowy Day","to":"R0623","home":false,"row":{"책ID":"R0623","제목":"The Snowy Day","언어":"en","레벨":"J3","쪽수":32,"작가":"Camilla Reid","출판사":"Nosy Crow","시리즈":"Pip and Posy","잠수네연결ID":"E09979","영어분류":"prd","기타목록":"","출처":"읽은책 목록","담은날":"2026-11-11"}},{"from":"E01644","t":"Shark in the Park","to":"R0624","home":false,"row":{"책ID":"R0624","제목":"Shark in the Park","언어":"en","레벨":"J2","쪽수":22,"작가":"Phil Roxbee Cox","출판사":"Usborne","시리즈":"Usborne Phonics Readers","잠수네연결ID":"E08988","영어분류":"rd","기타목록":"","출처":"읽은책 목록","담은날":"2026-11-05"}},{"from":"E01580","t":"Peanut Butter and Jelly","to":"R0625","home":false,"row":{"책ID":"R0625","제목":"Peanut Butter and Jelly","언어":"en","레벨":"J4","쪽수":64,"작가":"Ben Clanton","출판사":"Tundra Books","시리즈":"A Narwhal and Jelly Book #03","잠수네연결ID":"","영어분류":"","기타목록":"O","출처":"읽은책 목록","담은날":"2026-11-04"}},{"from":"E01589","t":"Night Animals","to":"R0626","home":false,"row":{"책ID":"R0626","제목":"Night Animals","언어":"en","레벨":"J3","쪽수":10,"작가":"Jenny Wren","출판사":"Campbell Books","시리즈":"First Explorers","잠수네연결ID":"E09871","영어분류":"prd","기타목록":"","출처":"읽은책 목록","담은날":"2026-10-23"}},{"from":"E01949","t":"Just Because","to":"R0627","home":false,"row":{"책ID":"R0627","제목":"Just Because","언어":"en","레벨":"J3","쪽수":32,"작가":"Rebecca Elliott","출판사":"Lion Hudson","시리즈":"Clemmie and Toby #1","잠수네연결ID":"","영어분류":"","기타목록":"O","출처":"읽은책 목록","담은날":"2026-10-10"}},{"from":"E01545","t":"Henny Penny","to":"R0628","home":false,"row":{"책ID":"R0628","제목":"Henny Penny","언어":"en","레벨":"J3","쪽수":24,"작가":"Gina Kim","출판사":"월드컴","시리즈":"Easy Story House Elementary 1","잠수네연결ID":"","영어분류":"","기타목록":"O","출처":"읽은책 목록","담은날":"2026-10-09"}},{"from":"E09083","t":"Madeline","to":"R0629","home":true,"row":{"책ID":"R0629","제목":"Madeline","언어":"en","레벨":"J4","쪽수":44,"작가":"Ludwig Bemelmans","출판사":"Puffin Books","시리즈":"Madeline 시리즈","잠수네연결ID":"E03801","영어분류":"pic","기타목록":"","출처":"읽은책 목록","담은날":"2026-07-31"}},{"from":"E03692","t":"Oops!","to":"R0630","home":false,"row":{"책ID":"R0630","제목":"Oops!","언어":"en","레벨":"J1","쪽수":12,"작가":"David Shannon","출판사":"Blue Sky Press","시리즈":"","잠수네연결ID":"","영어분류":"","기타목록":"O","출처":"읽은책 목록","담은날":"2026-08-10"}},{"from":"E18764","t":"Tiny Creatures","to":"R0631","home":true,"row":{"책ID":"R0631","제목":"Tiny Creatures","언어":"en","레벨":"J3","쪽수":22,"작가":"Neville Astley","출판사":"Ladybird","시리즈":"Peppa Pig","잠수네연결ID":"E09844","영어분류":"prd","기타목록":"","출처":"읽은책 목록","담은날":"2026-08-05"}},{"from":"E17693","t":"The Moon","to":"R0632","home":true,"row":{"책ID":"R0632","제목":"The Moon","언어":"en","레벨":"J3","쪽수":14,"작가":"Melvin & Gilda Berger","출판사":"Scholastic","시리즈":"Time to Discover: The Solar System","잠수네연결ID":"","영어분류":"","기타목록":"O","출처":"읽은책 목록","담은날":"2026-07-05"}},{"from":"E01498","t":"Firefighter!","to":"R0633","home":false,"row":{"책ID":"R0633","제목":"Firefighter!","언어":"en","레벨":"J3","쪽수":32,"작가":"Angela Royston","출판사":"DK","시리즈":"DK Readers Level 2","잠수네연결ID":"","영어분류":"","기타목록":"O","출처":"읽은책 목록","담은날":"2026-06-22"}},{"from":"K04162","t":"꼭꼭 숨어라!","to":"R0634","home":false,"row":{"책ID":"R0634","제목":"꼭꼭 숨어라!","언어":"ko","레벨":"JK3","쪽수":31,"작가":"카렌 웰레스","출판사":"그린북","시리즈":"WONDERWISE #02","잠수네연결ID":"K13191","영어분류":"","기타목록":"","출처":"읽은책 목록","담은날":"2026-10-08"}},{"from":"K10025","t":"코딱지","to":"R0635","home":false,"row":{"책ID":"R0635","제목":"코딱지","언어":"ko","레벨":"JK2","쪽수":32,"작가":"스테파니 블레이크","출판사":"한울림어린이","시리즈":"까까똥꼬 시몽 #06","잠수네연결ID":"K02579","영어분류":"","기타목록":"","출처":"읽은책 목록","담은날":"2026-09-22"}},{"from":"K12129","t":"도둑을 잡아라","to":"R0636","home":false,"row":{"책ID":"R0636","제목":"도둑을 잡아라","언어":"ko","레벨":"JK2","쪽수":52,"작가":"노인경","출판사":"문학동네","시리즈":"밤이랑 달이랑 #09","잠수네연결ID":"K00939","영어분류":"","기타목록":"","출처":"읽은책 목록","담은날":"2026-09-21"}},{"from":"K35260","t":"똥","to":"R0637","home":false,"row":{"책ID":"R0637","제목":"똥","언어":"ko","레벨":"JK2","쪽수":31,"작가":"조은랑","출판사":"한국헤르만헤세","시리즈":"세밀화 자연관찰","잠수네연결ID":"","영어분류":"","기타목록":"O","출처":"읽은책 목록","담은날":"2026-09-19"}},{"from":"K13046","t":"새벽","to":"R0638","home":false,"row":{"책ID":"R0638","제목":"새벽","언어":"ko","레벨":"JK4","쪽수":44,"작가":"아베 히로시","출판사":"미래엔아이세움","시리즈":"미래엔그림책 시리즈","잠수네연결ID":"","영어분류":"","기타목록":"O","출처":"읽은책 목록","담은날":"2026-09-14"}},{"from":"K19576","t":"백조 왕자","to":"R0639","home":true,"row":{"책ID":"R0639","제목":"백조 왕자","언어":"ko","레벨":"JK3","쪽수":36,"작가":"정미희","출판사":"그레이트북스","시리즈":"이야기 마법사 #35","잠수네연결ID":"","영어분류":"","기타목록":"O","출처":"읽은책 목록","담은날":"2026-08-30"}},{"from":"K16852","t":"잠자는 숲속의 공주","to":"R0640","home":false,"row":{"책ID":"R0640","제목":"잠자는 숲속의 공주","언어":"ko","레벨":"JK3","쪽수":36,"작가":"이승연","출판사":"그레이트북스","시리즈":"이야기 마법사 #25","잠수네연결ID":"","영어분류":"","기타목록":"O","출처":"읽은책 목록","담은날":"2026-08-30"}},{"from":"K11664","t":"돌멩이 수프","to":"R0641","home":true,"row":{"책ID":"R0641","제목":"돌멩이 수프","언어":"ko","레벨":"JK3","쪽수":36,"작가":"장경원","출판사":"그레이트북스","시리즈":"이야기 마법사 #33","잠수네연결ID":"","영어분류":"","기타목록":"O","출처":"읽은책 목록","담은날":"2026-03-29"}},{"from":"K21098","t":"이상한 나라의 앨리스","to":"R0642","home":true,"row":{"책ID":"R0642","제목":"이상한 나라의 앨리스","언어":"ko","레벨":"JK6","쪽수":110,"작가":"정은미","출판사":"아람","시리즈":"아람명작문학","잠수네연결ID":"","영어분류":"","기타목록":"O","출처":"읽은책 목록","담은날":"2026-08-25"}},{"from":"K11513","t":"여우 누이","to":"R0643","home":false,"row":{"책ID":"R0643","제목":"여우 누이","언어":"ko","레벨":"JK3","쪽수":36,"작가":"정해왕","출판사":"웅진다책","시리즈":"호롱불 옛 이야기 시리즈","잠수네연결ID":"","영어분류":"","기타목록":"O","출처":"읽은책 목록","담은날":"2026-08-06"}},{"from":"K09963","t":"깜박깜박 도깨비: 화폐 계산","to":"R0644","home":false,"row":{"책ID":"R0644","제목":"깜박깜박 도깨비: 화폐 계산","언어":"ko","레벨":"JK3","쪽수":40,"작가":"박주연","출판사":"을파소","시리즈":"느낌표 수학동화 논리단계","잠수네연결ID":"","영어분류":"","기타목록":"O","출처":"읽은책 목록","담은날":"2026-08-06"}},{"from":"K32347","t":"80일간의 세계 일주","to":"R0645","home":true,"row":{"책ID":"R0645","제목":"80일간의 세계 일주","언어":"ko","레벨":"JK6","쪽수":133,"작가":"김문기","출판사":"아람","시리즈":"아람명작문학","잠수네연결ID":"","영어분류":"","기타목록":"O","출처":"읽은책 목록","담은날":"2026-07-17"}},{"from":"K11771","t":"성냥팔이 소녀","to":"R0646","home":true,"row":{"책ID":"R0646","제목":"성냥팔이 소녀","언어":"ko","레벨":"JK3","쪽수":36,"작가":"김채리","출판사":"그레이트북스","시리즈":"이야기 마법사 #15","잠수네연결ID":"","영어분류":"","기타목록":"O","출처":"읽은책 목록","담은날":"2026-06-07"}},{"from":"K09008","t":"세계 옛이야기","to":"R0647","home":true,"row":{"책ID":"R0647","제목":"세계 옛이야기","언어":"ko","레벨":"JK3","쪽수":51,"작가":"전정아","출판사":"그레이트북스","시리즈":"이야기 마법사 #53","잠수네연결ID":"","영어분류":"","기타목록":"O","출처":"읽은책 목록","담은날":"2026-06-14"}},{"from":"K01518","t":"선물","to":"R0648","home":true,"row":{"책ID":"R0648","제목":"선물","언어":"ko","레벨":"JK3","쪽수":35,"작가":"김향이","출판사":"책마중","시리즈":"달책빵(=달달책방)","잠수네연결ID":"","영어분류":"","기타목록":"O","출처":"읽은책 목록","담은날":"2026-06-13"}},{"from":"K09898","t":"엄지 공주","to":"R0649","home":true,"row":{"책ID":"R0649","제목":"엄지 공주","언어":"ko","레벨":"JK3","쪽수":36,"작가":"오윤선","출판사":"그레이트북스","시리즈":"이야기 마법사 #29","잠수네연결ID":"","영어분류":"","기타목록":"O","출처":"읽은책 목록","담은날":"2026-06-09"}},{"from":"K14860","t":"신데렐라","to":"R0650","home":true,"row":{"책ID":"R0650","제목":"신데렐라","언어":"ko","레벨":"JK3","쪽수":36,"작가":"조아영","출판사":"그레이트북스","시리즈":"이야기 마법사 #18","잠수네연결ID":"","영어분류":"","기타목록":"O","출처":"읽은책 목록","담은날":"2026-06-09"}},{"from":"K11162","t":"톰 팃 톳","to":"R0651","home":true,"row":{"책ID":"R0651","제목":"톰 팃 톳","언어":"ko","레벨":"JK3","쪽수":29,"작가":"전정아","출판사":"그레이트북스","시리즈":"이야기 마법사 #26","잠수네연결ID":"","영어분류":"","기타목록":"O","출처":"읽은책 목록","담은날":"2026-06-01"}},{"from":"K26358","t":"백설 공주","to":"R0652","home":true,"row":{"책ID":"R0652","제목":"백설 공주","언어":"ko","레벨":"JK3","쪽수":36,"작가":"이향안","출판사":"그레이트북스","시리즈":"이야기 마법사 #22","잠수네연결ID":"","영어분류":"","기타목록":"O","출처":"읽은책 목록","담은날":"2026-03-19"}},{"from":"K11163","t":"해의 동쪽 달의 서쪽","to":"R0653","home":true,"row":{"책ID":"R0653","제목":"해의 동쪽 달의 서쪽","언어":"ko","레벨":"JK3","쪽수":36,"작가":"김은의","출판사":"그레이트북스","시리즈":"이야기 마법사 #37","잠수네연결ID":"","영어분류":"","기타목록":"O","출처":"읽은책 목록","담은날":"2026-06-07"}},{"from":"K10879","t":"벌거벗은 임금님","to":"R0654","home":true,"row":{"책ID":"R0654","제목":"벌거벗은 임금님","언어":"ko","레벨":"JK3","쪽수":36,"작가":"김수경","출판사":"그레이트북스","시리즈":"이야기 마법사 #19","잠수네연결ID":"","영어분류":"","기타목록":"O","출처":"읽은책 목록","담은날":"2026-06-07"}},{"from":"K09406","t":"빨간 모자","to":"R0655","home":true,"row":{"책ID":"R0655","제목":"빨간 모자","언어":"ko","레벨":"JK3","쪽수":36,"작가":"정재은","출판사":"그레이트북스","시리즈":"이야기 마법사 #16","잠수네연결ID":"","영어분류":"","기타목록":"O","출처":"읽은책 목록","담은날":"2026-06-07"}},{"from":"K12581","t":"우락부락 염소 삼 형제","to":"R0656","home":true,"row":{"책ID":"R0656","제목":"우락부락 염소 삼 형제","언어":"ko","레벨":"JK3","쪽수":36,"작가":"이향안","출판사":"그레이트북스","시리즈":"이야기 마법사 #05","잠수네연결ID":"","영어분류":"","기타목록":"O","출처":"읽은책 목록","담은날":"2026-06-07"}},{"from":"K10880","t":"인어 공주","to":"R0657","home":true,"row":{"책ID":"R0657","제목":"인어 공주","언어":"ko","레벨":"JK3","쪽수":36,"작가":"허은실","출판사":"그레이트북스","시리즈":"이야기 마법사 #41","잠수네연결ID":"","영어분류":"","기타목록":"O","출처":"읽은책 목록","담은날":"2026-06-06"}},{"from":"K20388","t":"오즈의 마법사","to":"R0658","home":true,"row":{"책ID":"R0658","제목":"오즈의 마법사","언어":"ko","레벨":"JK3","쪽수":36,"작가":"이혜진","출판사":"그레이트북스","시리즈":"이야기 마법사 #46","잠수네연결ID":"","영어분류":"","기타목록":"O","출처":"읽은책 목록","담은날":"2026-06-06"}},{"from":"K09695","t":"장화 신은 고양이","to":"R0659","home":true,"row":{"책ID":"R0659","제목":"장화 신은 고양이","언어":"ko","레벨":"JK3","쪽수":36,"작가":"신현배","출판사":"그레이트북스","시리즈":"이야기 마법사 #28","잠수네연결ID":"","영어분류":"","기타목록":"O","출처":"읽은책 목록","담은날":"2026-06-02"}},{"from":"K12582","t":"빨간 암탉","to":"R0660","home":true,"row":{"책ID":"R0660","제목":"빨간 암탉","언어":"ko","레벨":"JK3","쪽수":36,"작가":"류혜인","출판사":"그레이트북스","시리즈":"이야기 마법사 #02","잠수네연결ID":"","영어분류":"","기타목록":"O","출처":"읽은책 목록","담은날":"2026-05-30"}},{"from":"K07717","t":"장갑","to":"R0661","home":true,"row":{"책ID":"R0661","제목":"장갑","언어":"ko","레벨":"JK3","쪽수":36,"작가":"김효미","출판사":"그레이트북스","시리즈":"이야기 마법사 #07","잠수네연결ID":"","영어분류":"","기타목록":"O","출처":"읽은책 목록","담은날":"2026-05-24"}},{"from":"K06445","t":"완벽한 생일 파티","to":"R0662","home":true,"row":{"책ID":"R0662","제목":"완벽한 생일 파티","언어":"ko","레벨":"JK4","쪽수":72,"작가":"양승현","출판사":"그레이트북스","시리즈":"술술이 책방","잠수네연결ID":"","영어분류":"","기타목록":"O","출처":"읽은책 목록","담은날":"2026-05-05"}},{"from":"K19484","t":"피노키오","to":"R0663","home":true,"row":{"책ID":"R0663","제목":"피노키오","언어":"ko","레벨":"JK3","쪽수":36,"작가":"이혜진","출판사":"그레이트북스","시리즈":"이야기 마법사 #44","잠수네연결ID":"","영어분류":"","기타목록":"O","출처":"읽은책 목록","담은날":"2026-04-27"}},{"from":"K07660","t":"오늘은 도서관 가는 날","to":"R0664","home":true,"row":{"책ID":"R0664","제목":"오늘은 도서관 가는 날","언어":"ko","레벨":"JK2","쪽수":34,"작가":"콩다콩","출판사":"그레이트북스","시리즈":"내 친구 사회공룡","잠수네연결ID":"","영어분류":"","기타목록":"O","출처":"읽은책 목록","담은날":"2026-04-19"}},{"from":"K14575","t":"정말 좋은 걸까?","to":"R0665","home":true,"row":{"책ID":"R0665","제목":"정말 좋은 걸까?","언어":"ko","레벨":"JK2","쪽수":34,"작가":"류혜인","출판사":"그레이트북스","시리즈":"내 친구 사회공룡","잠수네연결ID":"","영어분류":"","기타목록":"O","출처":"읽은책 목록","담은날":"2026-04-19"}},{"from":"K08100","t":"시골 쥐와 도시 쥐","to":"R0666","home":true,"row":{"책ID":"R0666","제목":"시골 쥐와 도시 쥐","언어":"ko","레벨":"JK2","쪽수":25,"작가":"이미애","출판사":"그레이트북스","시리즈":"베스트 이솝우화","잠수네연결ID":"","영어분류":"","기타목록":"O","출처":"읽은책 목록","담은날":"2026-03-15"}},{"from":"K12901","t":"황금 거위","to":"R0667","home":true,"row":{"책ID":"R0667","제목":"황금 거위","언어":"ko","레벨":"JK3","쪽수":36,"작가":"박세린","출판사":"그레이트북스","시리즈":"이야기 마법사 #34","잠수네연결ID":"","영어분류":"","기타목록":"O","출처":"읽은책 목록","담은날":"2026-03-19"}},{"from":"K00403","t":"나야, 나","to":"R0668","home":true,"row":{"책ID":"R0668","제목":"나야, 나","언어":"ko","레벨":"JK2","쪽수":29,"작가":"최민지","출판사":"그레이트북스","시리즈":"내 친구 사회공룡","잠수네연결ID":"","영어분류":"","기타목록":"O","출처":"읽은책 목록","담은날":"2026-03-08"}},{"from":"K18042","t":"우주: 우주여행을 한다면 어떻게 될까요?","to":"R0669","home":false,"row":{"책ID":"R0669","제목":"우주: 우주여행을 한다면 어떻게 될까요?","언어":"ko","레벨":"JK1","쪽수":24,"작가":"프뢰벨유아교육연구소","출판사":"한국프뢰벨","시리즈":"프뢰벨 생생다큐 자연관찰","잠수네연결ID":"","영어분류":"","기타목록":"O","출처":"읽은책 목록","담은날":"2026-03-07"}}],"dropMemo":["E01498","E01580","E01589","E01644","E01949","E03692","E03768","E09083","E17693","E18764","K00403","K01518","K04162","K06445","K07660","K07717","K08100","K09008","K09406","K09695","K09898","K09963","K10025","K10879","K10880","K11162","K11163","K11513","K11664","K11771","K12129","K12581","K12582","K12901","K13046","K14575","K14860","K16852","K18042","K19484","K19576","K20388","K21098","K26358","K32347","K35260"]};
function migrationOps(srv) {
  const ops = [];
  if (!srv['설정']['fix1']) {
    const by = {};
    FIX1.fixes.forEach((f) => { by[f.from + '|' + f.t] = f; });
    FIX1.fixes.forEach((f) => {
      if (!srv['기타책'][f.to]) ops.push({ op: 'add', s: '기타책', id: f.to, row: f.row });
      if (f.home) ops.push({ op: 'put', s: '책메모', id: f.to, row: { '책ID': f.to, '우리집': 'O', '쪽수': '' } });
    });
    const left = {};
    Object.values(srv['읽음']).forEach((r) => {
      const f = by[str(r['책ID']) + '|' + str(r['제목'])];
      if (f) ops.push({ op: 'put', s: '읽음', id: str(r.id), row: Object.assign({}, r, { '책ID': f.to }) });
      else left[str(r['책ID'])] = 1;
    });
    FIX1.dropMemo.forEach((w) => { if (!left[w] && srv['책메모'][w]) ops.push({ op: 'del', s: '책메모', id: w }); });
    ops.push({ op: 'put', s: '설정', id: 'fix1', row: { '키': 'fix1', '값': '1' } });
  }
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
        const mig = migrationOps(srv);
        if (mig.length) { applyOps(srv, mig); this.queue.push(...mig); }
        Object.assign(this, { srv, rev: res.rev, sheetId: res.sheetId || this.sheetId, lastOk: Date.now(), lastLoad: Date.now(), err: '' });
        this.save();
        this.rebuild();
        if (this.queue.length) this.flush();
        return true;
      } catch (e) { this.err = e.message; this.ui(); throw e; }
      finally { this.loading = null; }
    })();
    return this.loading;
  },
  runMigrations() {
    if (!this.srv) return 0;
    const mig = migrationOps(this.srv);
    if (mig.length) { applyOps(this.srv, mig); this.queue.push(...mig); this.save(); }
    return mig.length;
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
  el: null, stream: null, track: null, det: null, timer: null, last: '', lastAt: 0, cand: null, onCode: null, onMsg: null,
  cams: [], camIdx: -1, caps: {}, tick: 0, seenAt: 0, startAt: 0, canvas: null, busyFocus: false,
  zoom: 2.2, hwz: 1, dz: 1, pinchAt: 0, zoomAt: 0, msgAt: 0, curMsg: '', idleAt: 0, box: null, area: null, zlabel: null,
  async detector() {
    if (this.det) return this.det;
    if (!('BarcodeDetector' in window)) return null;
    // 책 ISBN(EAN-13)과 도서관 등록번호 바코드(Code 128/39 등)를 같이 읽음 → 잘못 찍었을 때 알려 주려고
    let fm = ['ean_13', 'ean_8', 'upc_a', 'upc_e', 'code_128', 'code_39', 'code_93', 'codabar', 'itf'];
    try { const sup = await window.BarcodeDetector.getSupportedFormats(); if (sup && sup.length) fm = fm.filter((f) => sup.includes(f)); } catch (e) { /* 그대로 */ }
    try { this.det = new window.BarcodeDetector({ formats: fm.length ? fm : ['ean_13'] }); } catch (e) {
      try { this.det = new window.BarcodeDetector({ formats: ['ean_13'] }); } catch (e2) { this.det = null; }
    }
    return this.det;
  },
  // 같은 안내를 너무 자주 바꾸지 않게
  msg(t, force) {
    const now = Date.now();
    if (!this.onMsg || (t === this.curMsg && !force)) return;
    if (!force && now - this.msgAt < 900) return;
    this.curMsg = t; this.msgAt = now; this.onMsg(t);
  },
  // 네모 칸 색: 바코드가 보이면 노랑, 읽으면 초록
  flash(kind) {
    const b = this.box; if (!b) return;
    b.style.borderColor = kind === 'ok' ? '#22C55E' : kind === 'seen' ? '#FACC15' : '#7DD3C0';
    clearTimeout(this.flashT);
    if (kind) this.flashT = setTimeout(() => { if (this.box) this.box.style.borderColor = '#7DD3C0'; }, kind === 'ok' ? 900 : 500);
  },
  async open(deviceId) {
    const size = { width: { ideal: 1920 }, height: { ideal: 1080 } };
    const v = deviceId ? Object.assign({ deviceId: { exact: deviceId } }, size) : Object.assign({ facingMode: { ideal: 'environment' } }, size);
    return navigator.mediaDevices.getUserMedia({ audio: false, video: v });
  },
  // 초점은 계속 맞추기 + 확대 (폰을 20~30cm 떨어뜨려도 바코드가 크게 → 가까이 대서 흐려지는 걸 막음)
  async tune() {
    const t = this.track; if (!t) return;
    this.caps = (t.getCapabilities && t.getCapabilities()) || {};
    if ((this.caps.focusMode || []).includes('continuous')) { try { await t.applyConstraints({ advanced: [{ focusMode: 'continuous' }] }); } catch (e) { /* 안 되는 폰도 있음 */ } }
    await this.setZoom(this.zoom, true);
  },
  // 확대: 카메라 자체 확대가 되면 그걸로, 모자라는 만큼은 화면 확대(+ 인식할 때도 가운데를 크게 잘라 봄)
  async setZoom(z, now) {
    z = Math.max(1, Math.min(4, z || 1));
    this.zoom = z;
    const zc = this.caps.zoom, t = this.track;
    let hz = 1;
    if (zc && zc.max > 1.05 && t) {
      hz = Math.max(zc.min || 1, Math.min(zc.max, z));
      const ts = Date.now();
      if (now || ts - this.zoomAt > 90) {
        this.zoomAt = ts;
        try { await t.applyConstraints({ advanced: [{ zoom: hz }] }); } catch (e) { hz = 1; }
      } else hz = this.hwz;
    }
    this.hwz = hz;
    this.dz = Math.max(1, z / hz);
    if (this.el) { this.el.style.transform = this.dz > 1.02 ? 'scale(' + this.dz.toFixed(2) + ')' : ''; this.el.style.transformOrigin = '50% 50%'; }
    if (this.zlabel) this.zlabel.textContent = z.toFixed(1) + '배 확대 · 두 손가락으로 조절';
  },
  async listCams() {
    try {
      const all = (await navigator.mediaDevices.enumerateDevices()).filter((d) => d.kind === 'videoinput');
      let back = all.filter((d) => /back|rear|environment|후면/i.test(d.label));
      if (!back.length) back = all;
      const no = (d) => { const m = /camera2 (\d+)/.exec(d.label); return m ? +m[1] : 99; };
      this.cams = back.sort((x, y) => no(x) - no(y));
    } catch (e) { this.cams = []; }
  },
  async start(el, deviceId) {
    const stream = await this.open(deviceId);
    if (this.el !== el) { stream.getTracks().forEach((t) => t.stop()); return false; }
    if (this.stream) this.stream.getTracks().forEach((t) => t.stop());
    this.stream = stream; this.track = stream.getVideoTracks()[0];
    el.muted = true; el.setAttribute('playsinline', ''); el.srcObject = stream;
    try { await el.play(); } catch (e) { /* 자동 재생이 막혀도 인식은 계속 */ }
    await this.tune();
    return true;
  },
  // 두 손가락 벌리기/오므리기 = 확대/축소, 한 번 톡 = 초점 다시
  pinch(area) {
    let d0 = 0, z0 = 1;
    const dist = (t) => Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY);
    this.onTs = (e) => { if (e.touches.length === 2) { d0 = dist(e.touches); z0 = this.zoom; this.pinchAt = Date.now(); } };
    this.onTm = (e) => { if (e.touches.length === 2 && d0) { e.preventDefault(); this.pinchAt = Date.now(); this.setZoom(z0 * dist(e.touches) / d0); } };
    this.onTe = (e) => {
      if (e.touches.length < 2 && d0) { d0 = 0; this.pinchAt = Date.now(); this.setZoom(this.zoom, true); try { localStorage.setItem('jamsu.zoom', this.zoom.toFixed(2)); } catch (er) { /* 무시 */ } }
    };
    area.style.touchAction = 'none';
    area.addEventListener('touchstart', this.onTs, { passive: true });
    area.addEventListener('touchmove', this.onTm, { passive: false });
    area.addEventListener('touchend', this.onTe, { passive: true });
    area.addEventListener('touchcancel', this.onTe, { passive: true });
  },
  async attach(el, onCode, onMsg) {
    if (el === this.el) return;
    this.stop();
    if (!el) return;
    this.el = el; this.onCode = onCode; this.onMsg = onMsg; this.curMsg = ''; this.msgAt = 0;
    this.area = el.parentElement;
    this.box = this.area ? this.area.querySelector('[data-scanbox]') : null;
    this.zlabel = this.area ? this.area.querySelector('[data-zoom]') : null;
    try { localStorage.removeItem('jamsu.cam.v1'); } catch (e) { /* 예전에 고른 카메라 기억은 이제 안 씀 */ }
    try { const zs = parseFloat(localStorage.getItem('jamsu.zoom')); if (zs >= 1 && zs <= 4) this.zoom = zs; } catch (e) { /* 기본 2.2배 */ }
    if (!(await this.detector())) { this.msg('이 브라우저는 바코드 자동 인식이 안 돼요. 안드로이드 크롬으로 열거나 아래 \'제목으로 찾기\'에 ISBN 번호나 제목을 쳐 주세요.', true); return; }
    if (this.el !== el) return;
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) { this.msg('카메라를 쓸 수 없는 환경이에요. 아래 \'제목으로 찾기\'를 써 주세요.', true); return; }
    this.msg('카메라를 켜는 중이에요…', true);
    try {
      if (!(await this.start(el, ''))) return;
    } catch (e) {
      if (this.el === el) this.msg('카메라를 켤 수 없어요. 주소창 왼쪽 자물쇠에서 카메라를 허용해 주세요.', true);
      return;
    }
    await this.listCams();
    const cur = this.track && this.track.getSettings ? this.track.getSettings().deviceId : '';
    this.camIdx = this.cams.findIndex((d) => d.deviceId === cur);
    // 여러 카메라 폰: 주 카메라(camera2 0)로. 광각 렌즈는 가까운 초점이 안 맞음
    if (this.cams.length > 1 && this.camIdx > 0 && /camera2 0\b/.test(this.cams[0].label)) {
      try { if (await this.start(el, this.cams[0].deviceId)) this.camIdx = 0; } catch (e) { /* 그대로 */ }
    }
    if (this.area && !this.onTs) this.pinch(this.area);
    this.msg('바코드를 네모 칸에 맞춰 주세요 · 폰은 책에서 20~30cm', true);
    this.startAt = Date.now(); this.idleAt = Date.now(); this.seenAt = 0;
    this.loop(el);
  },
  // 네모 칸 부분만 잘라 크게 키워서도 읽어 봄 (작거나 화면 확대 중인 바코드)
  crop(el, big) {
    const vw = el.videoWidth, vh = el.videoHeight, cw = el.clientWidth, ch = el.clientHeight;
    if (!vw || !cw) return null;
    const sc = Math.max(cw / vw, ch / vh) * (this.dz || 1);
    const w = Math.min(vw, (big ? 420 : 300) / sc), h = Math.min(vh, (big ? 240 : 170) / sc);
    const k = Math.max(1, Math.min(3, 900 / w));            // 작으면 키워서
    const c = this.canvas || (this.canvas = document.createElement('canvas'));
    c.width = Math.round(w * k); c.height = Math.round(h * k);
    const g = c.getContext('2d');
    g.imageSmoothingEnabled = true;
    g.drawImage(el, (vw - w) / 2, (vh - h) / 2, w, h, 0, 0, c.width, c.height);
    return c;
  },
  loop(el) {
    const tick = async () => {
      if (this.el !== el) return;
      try {
        if (el.readyState >= 2) {
          this.tick += 1;
          const m = this.tick % 3;
          const src = m === 0 ? el : (this.crop(el, m === 2) || el);
          this.take(await this.det.detect(src));
          const now = Date.now();
          if (now - this.idleAt > 6000) {
            this.idleAt = now;
            this.msg('바코드가 안 보여요 · 폰을 책에서 20~30cm 떨어뜨려 보세요 (화면이 ' + this.zoom.toFixed(1) + '배 확대돼 있어요) · 흐리면 화면 톡 · 반사되면 책을 살짝 기울이기', true);
          }
        }
      } catch (e) { /* 한 번 실패는 무시 */ }
      if (this.el === el) this.timer = setTimeout(tick, 110);
    };
    tick();
  },
  // 우리 색인에 있는 ISBN은 한 번만 읽혀도 받아들이고, 처음 보는 번호는 두 번 연달아 읽혀야 받아들임
  take(codes) {
    const now = Date.now();
    if (codes && codes.length) this.idleAt = now;
    for (const c of codes || []) {
      const raw = String(c.rawValue || '').trim(), fmt = String(c.format || '');
      const v = raw.replace(/\D/g, '');
      const ean = fmt === 'ean_13' || (!fmt && /^\d{13}$/.test(raw));
      if (!ean) {
        if (!raw) continue;
        this.flash('seen');
        if (/^(upc|ean_8)/.test(fmt)) { this.msg('책 ISBN이 아닌 상품 바코드예요 · 978이나 979로 시작하는 바코드를 찾아 주세요'); continue; }
        try { localStorage.setItem('jamsu.lastlabel', fmt + ':' + raw); } catch (e) { /* 무시 */ }
        this.msg('도서관 바코드(' + raw + ')예요 · 책 뒤표지의 ISBN 바코드(978·979로 시작)를 찍어 주세요');
        continue;
      }
      if (!isbnOk(v)) {
        this.flash('seen');
        if (/^\d{13}$/.test(v) && !/^97[89]/.test(v)) this.msg('책 ISBN이 아닌 바코드예요 (' + v.slice(0, 3) + '…) · 978이나 979로 시작하는 바코드를 찍어 주세요');
        continue;
      }
      const known = !!(ISB[v] || (typeof ISM !== 'undefined' && ISM[v]));
      if (!this.cand || this.cand.v !== v || now - this.cand.t > 1500) this.cand = { v, n: 0, t: now };
      this.cand.n += 1; this.cand.t = now;
      if (this.cand.n < (known ? 1 : 2)) { this.flash('seen'); this.msg('바코드가 보여요 · 그대로 잠깐만…'); return false; }
      const fresh = v !== this.last || now - this.lastAt > 2500;
      this.last = v; this.lastAt = now;           // 같은 책이 화면에 계속 있으면 다시 띄우지 않음
      if (fresh && this.onCode) {
        this.seenAt = 1;
        this.flash('ok');
        try { if (navigator.vibrate) navigator.vibrate(60); } catch (e) { /* 무시 */ }
        this.curMsg = '';
        this.onCode(v);
      }
      return true;
    }
    return false;
  },
  // 화면 톡 → 카메라를 껐다 켜서 초점을 처음부터 다시 잡음 (대부분 폰에서 가장 확실). 두 손가락 확대 직후는 무시
  async refocus() {
    if (!this.track || !this.el || this.busyFocus || Date.now() - this.pinchAt < 600) return;
    this.busyFocus = true;
    this.msg('초점을 다시 맞추는 중…', true);
    const el = this.el, dev = this.cams[this.camIdx] ? this.cams[this.camIdx].deviceId : (this.track.getSettings().deviceId || '');
    try {
      await this.start(el, dev);
      const t = this.track, modes = this.caps.focusMode || [];
      if (t && modes.includes('single-shot')) {
        await t.applyConstraints({ advanced: [{ focusMode: 'single-shot' }] }).catch(() => {});
        setTimeout(() => { if (this.track === t && modes.includes('continuous')) t.applyConstraints({ advanced: [{ focusMode: 'continuous' }] }).catch(() => {}); }, 1500);
      }
    } catch (e) { /* 그대로 */ }
    this.busyFocus = false;
    this.idleAt = Date.now();
    setTimeout(() => this.msg('바코드를 네모 칸에 맞춰 주세요 · 폰은 책에서 20~30cm', true), 600);
  },
  stop() {
    clearTimeout(this.timer); clearTimeout(this.flashT);
    if (this.stream) this.stream.getTracks().forEach((t) => t.stop());
    if (this.el) { try { this.el.srcObject = null; this.el.style.transform = ''; } catch (e) { /* 무시 */ } }
    if (this.area && this.onTs) {
      this.area.removeEventListener('touchstart', this.onTs); this.area.removeEventListener('touchmove', this.onTm);
      this.area.removeEventListener('touchend', this.onTe); this.area.removeEventListener('touchcancel', this.onTe);
    }
    this.onTs = null; this.area = null; this.box = null; this.zlabel = null;
    this.stream = null; this.track = null; this.el = null; this.cand = null; this.busyFocus = false;
  },
};

// ISBN → 책 정보 (국내 ISBN은 국립중앙도서관 → 구글 북스, 외국 ISBN은 그 반대) → 잠수네 목록에서 같은 책 찾기
const ISBN_KEY = 'jamsu.isbn.v2';
function isbnCache() { try { localStorage.removeItem('jamsu.isbn.v1'); return JSON.parse(localStorage.getItem(ISBN_KEY) || '{}'); } catch (e) { return {}; } }
const HANGUL = /[가-힣ㄱ-ㅎㅏ-ㅣ]/;
async function googleBooks(isbn) {
  const r = await fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn);
  if (!r.ok) throw new Error('책 정보 서버 응답 ' + r.status);
  const j = await r.json();
  const it = j.items && j.items[0] && j.items[0].volumeInfo;
  if (!it || !it.title) return null;
  const t = it.title;
  return { t, sub: it.subtitle || '', a: (it.authors || []).join(', '), pg: it.pageCount || 0, pub: it.publisher || '',
    lang: it.language === 'ko' || HANGUL.test(t) ? 'ko' : 'en' };
}
// 구글 북스에 없는 외국 책: Open Library (인증키 없이 공개)
async function openLibrary(isbn) {
  const r = await fetch('https://openlibrary.org/api/books?bibkeys=ISBN:' + isbn + '&format=json&jscmd=data');
  if (!r.ok) throw new Error('책 정보 서버 응답 ' + r.status);
  const it = (await r.json())['ISBN:' + isbn];
  if (!it || !it.title) return null;
  return { t: it.title, sub: it.subtitle || '', a: (it.authors || []).map((x) => x.name).join(', '), pg: it.number_of_pages || 0,
    pub: ((it.publishers || [])[0] || {}).name || '', lang: HANGUL.test(it.title) ? 'ko' : 'en' };
}
// 우리 저장소(구글 시트)가 국립중앙도서관 ISBN 서지정보를 대신 물어봄 (인증키는 시트 쪽에만 있음)
async function nlBooks(isbn, ask) {
  if (!ask) return null;
  const res = await ask(isbn);
  const d = res && res.info;
  if (!d || !d.t) return null;
  const lat = String(d.t).replace(/[^A-Za-z]/g, '').length, han = (String(d.t).match(/[가-힣]/g) || []).length;
  return { t: d.t, sub: '', a: d.a || '', pg: d.pg || 0, pub: d.pub || '', lang: han > 0 && han * 2 >= lat ? 'ko' : 'en' };
}
// 국내판 상품명 정리: "노부영 세이펜 Skip through the Seasons (Paperback + QR)" → "Skip through the Seasons"
function cleanTitle(t) { return String(t || '').replace(/\([^)]*\)|\[[^\]]*\]|<[^>]*>|【[^】]*】/g, ' ').replace(/\s+/g, ' ').trim(); }
function latinPart(t) {
  const c = cleanTitle(t);
  if (!HANGUL.test(c) || !/[A-Za-z]{3}/.test(c)) return '';
  return c.replace(/[가-힣ㄱ-ㅎㅏ-ㅣ]+/g, ' ').replace(/\s+/g, ' ').replace(/^[\s:\-·,/|]+|[\s:\-·,/|]+$/g, '').trim();
}
function keyList(arr) { return Array.from(new Set(arr.map(normT))).filter((k) => k.length >= 4 || (k.length >= 2 && HANGUL.test(k))); }
// 제목 열쇠 3단계: 1) 원래 제목 2) 괄호·한글 상품명 뺀 제목 3) 콜론 앞뒤 조각
function titleTiers(t, sub) {
  const raw = String(t || ''), c = cleanTitle(raw), lp = latinPart(raw);
  const t1 = Array.from(new Set(keyList([raw, raw.split(/[:(\[\/=·|]/)[0], c].concat(sub ? [raw + ' ' + sub] : []))
    .concat(altKeys(raw).concat(altKeys(c)).filter((k) => k.length >= 4))));
  const t2 = keyList([lp, latinPart(raw + (sub ? ' ' + sub : ''))].filter(Boolean)).filter((k) => !t1.includes(k));
  const t3 = keyList((lp || c).split(/\s*[:/=|]\s*/)).filter((k) => !t1.includes(k) && !t2.includes(k));
  return [t1, t2, t3];
}
// 저자: 역할 낱말(글·그림·옮김 등) 빼고 사람 이름만
const ROLE = /^(글|그림|글그림|그림글|지음|옮김|엮음|편저|편|저|역|원작|원저|저자|지은이|옮긴이|그린이|글쓴이|기획|감수|by|illustrated|illustrator|illustrations|written|retold|author|editor|ed|and|외)$/i;
function authorNames(a) {
  return String(a || '').split(/[,;/&]|\s외\s|\band\b/).map((x) => normT(x.replace(/[·:]/g, ' ').split(/\s+/).filter((w) => w && !ROLE.test(w.replace(/[.]/g, ''))).join(' ')))
    .filter((x) => x.length >= 2);
}
function authorRel(infoA, bookA) {
  const xs = authorNames(infoA), bn = normT(bookA || '');
  if (!xs.length || !bn) return 'unknown';
  if (xs.some((x) => x.length >= 3 && (bn.includes(x) || x.includes(bn)))) return 'match';
  const words = (v) => (String(v).toLowerCase().match(/[a-z]{4,}/g) || []);
  const bw = words(bookA);
  if (words(infoA).some((w) => bw.includes(w))) return 'match';
  // 한글로 옮긴 이름 ↔ 영어 이름처럼 글자가 달라 비교할 수 없으면 '모름' (다른 사람이라고 단정하지 않음)
  const hx = xs.some((x) => HANGUL.test(x)), lx = xs.some((x) => /[a-z]/.test(x));
  if ((hx && !lx && !HANGUL.test(bn)) || (lx && !hx && !/[a-z]/.test(bn))) return 'unknown';
  return 'conflict';
}
function matchBook(info, st) {
  const tiers = titleTiers(info.t, info.sub);
  for (let i = 0; i < tiers.length; i++) {
    const keys = tiers[i];
    if (!keys.length) continue;
    let cand = [];
    keys.forEach((k) => { (TITLE_IDX[k] || []).forEach((id) => cand.push(BK[id])); });
    Object.values(st.manual).forEach((b) => { if (!b.ghost && keys.includes(normT(b.t))) cand.push(b); });
    cand = Array.from(new Set(cand.filter(Boolean)));
    if (!cand.length) continue;
    const same = cand.filter((b) => b.lang === info.lang);
    if (same.length) cand = same;
    const rel = cand.map((b) => [b, authorRel(info.a, b.a)]);
    const hits = rel.filter((x) => x[1] === 'match').map((x) => x[0]);
    const unk = rel.filter((x) => x[1] === 'unknown').map((x) => x[0]);
    // 같은 제목이라도 저자가 다르면 다른 책 (명작·옛이야기는 같은 제목 책이 많음)
    const pool = hits.length ? hits : unk;
    if (!pool.length) return null;
    pool.sort((x, y) => (y.rev || 0) - (x.rev || 0));
    return { id: pool[0].id, sure: hits.length > 0 && i < 2 };
  }
  return null;
}
// 못 맞췄을 때 '제목으로 찾기'에 미리 넣어 줄 검색어
function searchWord(info) { return latinPart(info.t) || cleanTitle(info.t).split(/\s*[:/=|]\s*/)[0] || ''; }
function sameVol(a, b) {
  const x = normT(a), y = normT(b);
  return !!x && !!y && (x === y || (y.length >= 5 && x.endsWith(y)) || (x.length >= 5 && y.endsWith(x)));
}
function withTimeout(p, ms) { return Promise.race([p, new Promise((_, no) => setTimeout(() => no(new Error('timeout')), ms))]); }
async function bookInfo(isbn, ask) {
  const cache = isbnCache();
  if (cache[isbn]) return cache[isbn];
  const kr = /^(97889|97911)/.test(isbn);
  const srcs = kr ? [() => nlBooks(isbn, ask), () => googleBooks(isbn)] : [() => googleBooks(isbn), () => openLibrary(isbn), () => nlBooks(isbn, ask)];
  let info = null;
  for (const f of srcs) {
    try { info = await withTimeout(f(), 7000); } catch (e) { info = null; }
    if (info) break;
  }
  if (info) { cache[isbn] = info; try { localStorage.setItem(ISBN_KEY, JSON.stringify(cache)); } catch (e) { /* 무시 */ } }
  return info;
}
// 한 바코드가 잠수네 책 여러 권과 이어진 경우: 같은 제목의 여러 판이면 'ed'(고르면 기억), 서로 다른 책이면 'set'(전집 공통 번호 → 매번 고름)
function multiOf(isbn) {
  const ms = (ISM[isbn] || []).filter((id) => BK[id]);
  if (ms.length < 2) return null;
  return { ids: ms, kind: new Set(ms.map((id) => normT(BK[id].t))).size === 1 ? 'ed' : 'set' };
}
async function findIsbn(isbn, st, ask) {
  const mu = multiOf(isbn);
  // 0) 우리 집이 고른 적 있는 바코드 (가족 공통) — 전집 공통 번호는 권마다 달라서 기억을 안 씀
  const mine = (st.isbnMap || {})[isbn];
  if (mine && (BK[mine] || st.manual[mine]) && !(mu && mu.kind === 'set')) return { id: mine, how: 'mine' };
  // 1) 우리 자료(도서관 장서로 만든 ISBN 색인) → 인터넷 없이 바로
  //    한 바코드가 잠수네 책 여러 권과 이어지면 고르게 함 (읽은 적 있는 책·전에 고른 책을 위로)
  if (mu) return { cands: mine && mu.ids.includes(mine) ? [mine].concat(mu.ids.filter((x) => x !== mine)) : mu.ids, how: 'multi', kind: mu.kind };
  const hit = ISB[isbn];
  if (typeof hit === 'string' && BK[hit]) return { id: hit, how: 'index' };
  if (Array.isArray(hit) && hit[2] && BK[hit[0]]) return { id: hit[0], how: 'index?' };
  if (Array.isArray(hit) && BK[hit[0]]) {
    const ser = BK[hit[0]], vt = hit[1] || ser.t;
    const same = Object.values(st.manual).find((b) => !b.ghost && b.link === ser.id && sameVol(b.t, vt));
    if (same) return { id: same.id, how: 'series' };
    let pg = 0;
    try { const g = await withTimeout(bookInfo(isbn, ask), 5000); if (g) pg = g.pg || 0; } catch (e) { /* 쪽수는 없어도 됨 */ }
    return { nb: { t: vt, a: ser.a, lv: ser.lv, pg, lang: ser.lang, link: ser.id, sr: ser.t, ec: ser.ec, isbn }, how: 'series' };
  }
  // 2) 우리 자료에 없을 때만 바깥 책 정보(국립중앙도서관·구글 북스)로 제목을 알아내서 잠수네 제목과 맞춤
  const info = await bookInfo(isbn, ask);
  if (!info) return {};
  const m = matchBook(info, st);
  return m ? { id: m.id, how: m.sure ? 'title' : 'title?' }
    : { nb: { t: info.t, a: info.a, pg: info.pg, lang: info.lang, pub: info.pub, isbn }, how: 'new', q: searchWord(info) };
}

// ---- 도서관 청구기호 · 대출 상태
// 앱이 직접 못 가는 곳(http 주소, 인증키 필요)은 우리 구글 시트(Apps Script)가 대신 가져다 줌: a='lib'
//   gb    = 강북구 도서관 Open API (강북문화정보도서관 청구기호·도서상태)
//   nowon / sb = 노원구립·성북구립 도서관 홈페이지 검색 (월계·월계어린이·장위 — 화면 구조 확인 중)
//   (국립중앙도서관 KOLIS-NET 종합목록은 확인해 보니 소장처·청구기호 칸이 비어 있어서 안 씀)
// 해석은 여기(앱)에서 함 → 고칠 때 시트 코드는 그대로 두고 앱만 바꾸면 됨
const CALL_KEY = 'jamsu.call.v1';
const CALL_TTL = 6 * 3600 * 1000;           // 대출 상태 때문에 6시간마다 새로
const CALL_KEEP = 30 * 24 * 3600 * 1000;    // 목록에 보여 줄 청구기호는 30일 보관
const LIB_SHORT = ['강북', '월계', '장위', '월계어린이'];
const AUTO_CALLS = false;   // 목록 자동 받기 (강북 API 한도 때문에 지금은 끔 — 집 컴퓨터에서 모아 넣음)
// 청구기호 하나 고르기: 폰에서 새로 받은 것(30일 안) → 없으면 미리 모아 넣은 것
function callOf(id, li, cc) {
  if (cc === undefined) cc = CallCache.get(id);
  const g = cc && Date.now() - cc.at < CALL_KEEP && cc.r && cc.r[li];
  if (g && g.cn && g.cn.length) return g;
  const p = CALLS[id] && CALLS[id][li];
  return p ? { cn: p[0], sure: !!p[1], loc: p[2], st: '', more: 0 } : null;
}
const CallCache = {
  m: null,
  all() {
    if (!this.m) { try { this.m = JSON.parse(localStorage.getItem(CALL_KEY) || '{}'); } catch (e) { this.m = {}; } }
    return this.m;
  },
  get(id) { return this.all()[id] || null; },
  put(id, v) {
    const m = this.all(); m[id] = v;
    const ks = Object.keys(m);
    if (ks.length > 4000) ks.sort((a, b) => m[a].at - m[b].at).slice(0, ks.length - 4000).forEach((k) => { delete m[k]; });
    try { localStorage.setItem(CALL_KEY, JSON.stringify(m)); } catch (e) { /* 저장 공간 부족은 무시 */ }
  },
};
let ISBN_OF = null;
function isbnsOf(id, isbnMap) {
  if (!ISBN_OF) {
    ISBN_OF = {};
    Object.keys(ISB).forEach((k) => { const v = ISB[k]; const bid = Array.isArray(v) ? v[0] : v; (ISBN_OF[bid] || (ISBN_OF[bid] = [])).push(k); });
  }
  const out = (ISBN_OF[id] || []).slice();
  Object.keys(isbnMap || {}).forEach((k) => { if (isbnMap[k] === id && !out.includes(k)) out.push(k); });
  return out;
}
function xmlDoc(text) {
  try {
    const d = new DOMParser().parseFromString(String(text || ''), 'text/xml');
    return d.getElementsByTagName('parsererror').length ? null : d;
  } catch (e) { return null; }
}
function xt(el, tag) { const x = el.getElementsByTagName(tag)[0]; return x ? String(x.textContent || '').trim() : ''; }
function parseGb(text) {
  const d = xmlDoc(text);
  if (!d) return null;
  const items = Array.from(d.getElementsByTagName('item')).map((it) => ({
    t: xt(it, 'title'), a: xt(it, 'author'), isbn: xt(it, 'isbn').replace(/[^\dX]/gi, ''), cn: xt(it, 'callNo'),
    st: xt(it, 'bookStatus'), lib: xt(it, 'manageCode'), vol: xt(it, 'vol') }));
  return { code: xt(d, 'resultCode'), msg: xt(d, 'resultMsg'), total: Number(xt(d, 'totalCount')) || items.length, items };
}
function parseKolis(text) {
  const d = xmlDoc(text);
  if (!d) return null;
  const recs = Array.from(d.getElementsByTagName('call_no')).map((c) => c.parentNode);
  return recs.map((r) => ({ place: (xt(r, 'place_info') + ' ' + xt(r, 'manage_name')).trim(), cn: xt(r, 'call_no'),
    isbn: xt(r, 'isbn').replace(/[^\dX]/gi, ''), t: xt(r, 'title_info') }));
}
function libOfPlace(p) {
  if (/월계\s*어린이/.test(p)) return 3;
  if (/월계/.test(p)) return 1;
  if (/장위/.test(p)) return 2;
  if (/강북\s*문화\s*정보/.test(p)) return 0;
  return -1;
}
function stText(s) {
  s = String(s || '');
  if (!s) return '';
  if (/예약/.test(s)) return '예약 중';
  if (/배가|비치|대출\s*가능|소장자료/.test(s)) return '대출 가능';
  if (/대출|관외|상호대차/.test(s)) return '대출 중';
  return s.replace(/\(.*?\)/g, '').trim();
}
// 복본 표시(=2, c.2)는 빼고 같은 청구기호는 하나로
function cnKey(cn) { return String(cn || '').replace(/\s*(=\s*\d+|c\.?\s*\d+)\s*$/i, '').replace(/\s+/g, ' ').trim(); }
function gbKeywords(b) {
  const t = String(b.t || '').replace(/\([^)]*\)|\[[^\]]*\]/g, ' ').split(/[:;=/]/)[0].replace(/시리즈\s*$/, '').replace(/\s+/g, ' ').trim();
  const out = [t];
  const ws = t.split(' ').filter((w) => w.length >= 2);
  if (ws.length > 2) out.push(ws.slice(0, 2).join(' '));
  return Array.from(new Set(out.filter((x) => x.length >= 2)));
}
// 한 도서관 결과 정리: 같은 ISBN(같은 판)이면 확실, 제목·저자만 같으면 '?' 표시
function pickItems(items, isbns, b) {
  const set = new Set(isbns);
  let hit = items.filter((x) => x.isbn && set.has(x.isbn)), sure = true;
  if (!hit.length) {
    const k = normT(gbKeywords(b)[0] || b.t);
    hit = items.filter((x) => { const n = normT(String(x.t).split(/[:=/]/)[0]); return n && (n === k || (k.length >= 6 && n.startsWith(k))) && authorRel(b.a, x.a) !== 'conflict'; });
    sure = false;
  }
  if (!hit.length) return null;
  const cns = [];
  hit.forEach((x) => { const c = cnKey(x.cn); if (c && !cns.includes(c)) cns.push(c); });
  const sts = hit.map((x) => stText(x.st)).filter(Boolean);
  const st = sts.includes('대출 가능') ? '대출 가능' : sts[0] || '';
  return { cn: cns.slice(0, 4), more: Math.max(0, cns.length - 4), st, n: hit.length, sure };
}
// 강북 API 검색 한 번: 인증키 파라미터 이름(ServiceKey / serviceKey)은 되는 쪽을 기억
const GB_URL = 'http://openapi.gblib.or.kr/OpenAPI/service/SearchBook/getSearchBook';
// temp = 도서관이 따로 준 임시 키(데이터 안에 있음, 공공데이터포털 개편 뒤 발급 키는 강북 쪽과 안 맞음)
// ServiceKey/serviceKey = 시트에 넣어 둔 공공데이터포털 키
let GB_VARIANTS = ['temp', 'ServiceKey', 'serviceKey'];
function gbVariants() { return GB_VARIANTS.filter((v) => v !== 'temp' || GBK); }
function gbVariant() { const vs = gbVariants(); try { const v = localStorage.getItem('jamsu.gbk'); return vs.includes(v) ? v : vs[0]; } catch (e) { return vs[0]; } }
function gbReq(kw, n, v) {
  const key = v === 'temp' ? 'ServiceKey=' + encodeURIComponent(GBK) : v + '={GB_KEY}';
  return { src: 'api', q: { url: GB_URL + '?' + key + '&keyword=' + encodeURIComponent(kw) + '&lib=MA&numOfRows=' + (n || 100) + '&pageNo=1' } };
}
async function gbSearch(kw, post, log) {
  const first = gbVariant();
  const order = [first].concat(gbVariants().filter((v) => v !== first));
  let last = { items: [], err: '' };
  for (const v of order) {
    const res = await post([gbReq(kw, 100, v)], log && v !== 'temp');
    if (!res || !Array.isArray(res.res)) return { items: [], err: 'old' };
    let x = res.res[0];
    if (x && x.error === '허용 안 된 요청') {                       // 시트 코드가 'api'를 모르는 예전 판 → 예전 방식
      const r2 = await post([{ src: 'gb', q: { keyword: kw, lib: 'MA', n: 100 } }], log);
      x = r2 && r2.res && r2.res[0];
    }
    const p = x && x.ok ? parseGb(x.text) : null;
    if (!p) { last = { items: [], err: 'bad' }; continue; }
    if (p.code && p.code !== '00') {
      if (/LIMITED NUMBER/i.test(p.msg)) return { items: [], err: 'gbquota' };          // 하루 한도: 다른 키로 바꿔도 소용없음
      last = { items: [], err: /NOT REGISTERED/i.test(p.msg) ? 'gbkey' : 'gb', msg: p.code + ' ' + p.msg }; continue;
    }
    if (v !== first) { try { localStorage.setItem('jamsu.gbk', v); } catch (e) { /* 무시 */ } }
    return { items: p.items, err: '', variant: v };
  }
  return last;
}
// 책 하나 → { at, r: { 0: {cn[], st, sure}, ... }, err }
async function lookupCalls(b, libs, isbnMap, post) {
  const isbns = isbnsOf(b.id, isbnMap);
  const out = { at: Date.now(), r: {}, err: '' };
  if (!libs.includes(0)) return out;                     // 월계·장위·월계어린이는 집 컴퓨터에서 모은 청구기호로 (준비 중)
  const kws = gbKeywords(b);
  if (!kws.length) return out;
  let r = await gbSearch(kws[0], post, false);
  if (r.err === 'old' || r.err === 'gbkey' || r.err === 'gb' || r.err === 'gbquota') { out.err = r.err; return out; }
  let items = r.items;
  // 첫 검색어로 못 찾으면 짧은 검색어로 한 번 더
  if (!pickItems(items, isbns, b) && kws.length > 1) {
    const r2 = await gbSearch(kws[1], post, false);
    if (!r2.err) items = items.concat(r2.items);
  }
  const g = pickItems(items, isbns, b);
  if (g) out.r[0] = g;
  else if (gbVariant() !== 'temp') { try { await post([gbReq(kws[0], 100, gbVariant())], true); } catch (e) { /* 점검 기록만 */ } }
  return out;
}
// 여러 권을 한 번에 (목록을 열면 저절로): 시트 한 번 호출에 최대 15권, 못 찾은 책만 짧은 검색어로 한 번 더
async function lookupMany(books, isbnMap, post) {
  const v = gbVariant();
  const now = Date.now(), out = [];
  const one = async (list, kwi) => {
    const reqs = list.map((b) => gbReq(gbKeywords(b)[kwi], 100, v));
    const res = await post(reqs, false);
    if (!res || !Array.isArray(res.res)) return { err: 'old' };
    const got = [];
    for (let i = 0; i < list.length; i++) {
      const x = res.res[i] || {};
      if (x.error === '허용 안 된 요청') return { err: 'old' };
      const p = x.ok ? parseGb(x.text) : null;
      if (p && p.code && p.code !== '00') return { err: p.code === '99' || /NOT REGISTERED/i.test(p.msg) ? 'gbkey' : 'gb' };
      got.push(p ? p.items : null);
    }
    return { got };
  };
  const first = books.filter((b) => gbKeywords(b).length);
  if (!first.length) return { out };
  const r1 = await one(first, 0);
  if (r1.err) return { err: r1.err, out };
  const again = [];
  first.forEach((b, i) => {
    const items = r1.got[i];
    const g = items ? pickItems(items, isbnsOf(b.id, isbnMap), b) : null;
    if (g) out.push([b.id, { at: now, r: { 0: g } }]);
    else if (items && gbKeywords(b).length > 1) again.push(b);
    else if (items) out.push([b.id, { at: now - CALL_KEEP + 7 * 86400000, r: {} }]);     // 못 찾음: 7일 뒤 다시
  });
  if (again.length) {
    const r2 = await one(again, 1);
    again.forEach((b, i) => {
      const items = r2.got && r2.got[i];
      const g = items ? pickItems(items, isbnsOf(b.id, isbnMap), b) : null;
      out.push([b.id, g ? { at: now, r: { 0: g } } : { at: now - CALL_KEEP + 7 * 86400000, r: {} }]);
    });
  }
  return { out };
}
function callLine(li, g) {
  return { lib: LIB_SHORT[li], cn: g.cn.join(' · ') + (g.more ? ' 외 ' + g.more : '') + (g.sure ? '' : ' ?'), st: g.st,
    stStyle: 'font-size: 12px; font-weight: 700; color: ' + (g.st === '대출 가능' ? '#0F766E' : g.st ? '#B45309' : '#8A9590') };
}
// 설정 화면 '도서관 연결 점검' (앱 버전마다 한 번은 저절로도 실행 → 시트 '도서관점검'에 원문이 남음)
// 설정 '도서관 연결 점검' (앱 판이 바뀌면 한 번 저절로) — 강북 API를 인증키 이름 두 가지로 시험
const PROBE_VER = 'p4';
async function libDiag(post, ask) {
  const vs = gbVariants();
  const reqs = vs.map((v) => gbReq('Rosie', 20, v));
  const res = await post(reqs, !GBK);                    // 임시 키가 든 주소는 시트 기록에 안 남김
  if (!res || !Array.isArray(res.res)) return '시트 코드가 아직 예전 판이에요 (새 코드로 바꾸고 배포 관리 → 새 버전)';
  try { localStorage.setItem('jamsu.probe', PROBE_VER); } catch (e) { /* 무시 */ }
  const parts = res.res.map((x, i) => {
    const nm = { temp: '임시 키', ServiceKey: '포털 키(ServiceKey)', serviceKey: '포털 키(serviceKey)' }[vs[i]];
    if (x.error) return nm + ': ' + (x.error === '허용 안 된 요청' ? '시트 코드 예전 판' : x.error);
    const p = x.ok ? parseGb(x.text) : null;
    if (!p) return nm + ': 응답 ' + x.status;
    if (p.code && p.code !== '00') return nm + ': 오류 ' + p.code + ' ' + p.msg;
    return nm + ': 성공 ' + p.items.length + '건' + (p.items[0] ? ' (' + p.items[0].cn + ' · ' + stText(p.items[0].st) + ')' : '');
  });
  // 되는 키 중 첫 번째를 기억
  const okI = res.res.findIndex((x) => { const p = x.ok ? parseGb(x.text) : null; return p && (!p.code || p.code === '00'); });
  if (okI >= 0) { try { localStorage.setItem('jamsu.gbk', vs[okI]); } catch (e) { /* 무시 */ } }
  let nl = '';
  try { const r = await ask('9788954926379'); nl = r && r.info && r.info.t ? '찾음(' + r.info.t + ')' : r && r.nokey ? '키 없음' : '못 찾음'; } catch (e) { nl = '오류'; }
  return ['강북 ' + parts.join(' / '), 'ISBN 서지: ' + nl, '월계·장위: 집 컴퓨터에서 모으는 방식으로 준비 중'].join(' · ');
}
async function autoProbe(post, ask) {
  let v = '';
  try { v = localStorage.getItem('jamsu.probe') || ''; } catch (e) { return; }
  if (v === PROBE_VER) return;
  try { await libDiag(post, ask); } catch (e) { /* 다음에 */ }
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
  const r5 = [];
  [['en', '영어'], ['ko', '한글']].forEach(([lg, ln]) => {
    const T = L.levelStats(lg, s);
    if (!T.months.length) return;
    [['n', '횟수'], ['p', '쪽수'], ['b', '권수(서로 다른 책)']].forEach(([k, kn]) => {
      const val = (c) => (!c ? 0 : k === 'p' ? c.p : k === 'b' ? c.ids.size : c.n);
      if (r5.length) r5.push([]);
      r5.push([ln + ' ' + kn].concat(T.levels).concat(['합계']));
      T.months.forEach((mo) => r5.push([mo].concat(T.levels.map((lv) => val(T.grid[mo][lv]))).concat([val(T.rowT[mo])])));
      r5.push(['합계'].concat(T.levels.map((lv) => val(T.colT[lv]))).concat([val(T.all)]));
    });
  });
  return makeXlsx([
    { name: '읽은 기록', rows: r1, widths: [12, 6, 40, 7, 7, 8, 40] },
    { name: '시간 기록', rows: r2, widths: [12, 14, 7, 7, 7] },
    { name: '월별 요약', rows: r3, widths: [9, 11, 11, 11, 11, 13, 10, 15, 10, 14] },
    { name: '레벨별 월별', rows: r5.length ? r5 : [['기록 없음']], widths: [20, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8] },
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
      Sync.runMigrations();
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
    camTap: () => Scanner.refocus(),
    findIsbn: (isbn, st) => findIsbn(isbn, st, (i) => Sync.post({ a: 'isbn', isbn: i })),
    libPost: (reqs, log) => Sync.post({ a: 'lib', reqs, log: !!log }),
    isbnAsk: (i) => Sync.post({ a: 'isbn', isbn: i }),
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
  // 도서관 연결 점검: 앱이 바뀐 뒤 한 번 저절로 (시트 '도서관점검'에 원문이 남아 화면 구조를 확인할 수 있음)
  setTimeout(() => { if (navigator.onLine !== false) autoProbe(api.libPost, api.isbnAsk); }, 8000);
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
