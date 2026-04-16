"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __export = (target, all2) => {
    for (var name in all2)
      __defProp(target, name, { get: all2[name], enumerable: true });
  };

  // node_modules/@shikijs/langs/dist/typescript.mjs
  var typescript_exports = {};
  __export(typescript_exports, {
    default: () => typescript_default
  });
  var lang, typescript_default;
  var init_typescript = __esm({
    "node_modules/@shikijs/langs/dist/typescript.mjs"() {
      lang = Object.freeze(JSON.parse('{"displayName":"TypeScript","name":"typescript","patterns":[{"include":"#directives"},{"include":"#statements"},{"include":"#shebang"}],"repository":{"access-modifier":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(abstract|declare|override|public|protected|private|readonly|static)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"storage.modifier.ts"},"after-operator-block-as-object-literal":{"begin":"(?<!\\\\+\\\\+|--)(?<=[!(+,:=>?\\\\[]|^await|[^$._[:alnum:]]await|^return|[^$._[:alnum:]]return|^yield|[^$._[:alnum:]]yield|^throw|[^$._[:alnum:]]throw|^in|[^$._[:alnum:]]in|^of|[^$._[:alnum:]]of|^typeof|[^$._[:alnum:]]typeof|&&|\\\\|\\\\||\\\\*)\\\\s*(\\\\{)","beginCaptures":{"1":{"name":"punctuation.definition.block.ts"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.ts"}},"name":"meta.objectliteral.ts","patterns":[{"include":"#object-member"}]},"array-binding-pattern":{"begin":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\[)","beginCaptures":{"1":{"name":"keyword.operator.rest.ts"},"2":{"name":"punctuation.definition.binding-pattern.array.ts"}},"end":"]","endCaptures":{"0":{"name":"punctuation.definition.binding-pattern.array.ts"}},"patterns":[{"include":"#binding-element"},{"include":"#punctuation-comma"}]},"array-binding-pattern-const":{"begin":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\[)","beginCaptures":{"1":{"name":"keyword.operator.rest.ts"},"2":{"name":"punctuation.definition.binding-pattern.array.ts"}},"end":"]","endCaptures":{"0":{"name":"punctuation.definition.binding-pattern.array.ts"}},"patterns":[{"include":"#binding-element-const"},{"include":"#punctuation-comma"}]},"array-literal":{"begin":"\\\\s*(\\\\[)","beginCaptures":{"1":{"name":"meta.brace.square.ts"}},"end":"]","endCaptures":{"0":{"name":"meta.brace.square.ts"}},"name":"meta.array.literal.ts","patterns":[{"include":"#expression"},{"include":"#punctuation-comma"}]},"arrow-function":{"patterns":[{"captures":{"1":{"name":"storage.modifier.async.ts"},"2":{"name":"variable.parameter.ts"}},"match":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))\\\\b(async)\\\\s+)?([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?==>)","name":"meta.arrow.ts"},{"begin":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))\\\\b(async))?((?<![]!)}])\\\\s*(?=((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"\'()`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))","beginCaptures":{"1":{"name":"storage.modifier.async.ts"}},"end":"(?==>|\\\\{|^(\\\\s*(export|function|class|interface|let|var|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|const|import|enum|namespace|module|type|abstract|declare)\\\\s+))","name":"meta.arrow.ts","patterns":[{"include":"#comment"},{"include":"#type-parameters"},{"include":"#function-parameters"},{"include":"#arrow-return-type"},{"include":"#possibly-arrow-return-type"}]},{"begin":"=>","beginCaptures":{"0":{"name":"storage.type.function.arrow.ts"}},"end":"((?<=[}\\\\S])(?<!=>)|((?!\\\\{)(?=\\\\S)))(?!/[*/])","name":"meta.arrow.ts","patterns":[{"include":"#single-line-comment-consuming-line-ending"},{"include":"#decl-block"},{"include":"#expression"}]}]},"arrow-return-type":{"begin":"(?<=\\\\))\\\\s*(:)","beginCaptures":{"1":{"name":"keyword.operator.type.annotation.ts"}},"end":"(?==>|\\\\{|^(\\\\s*(export|function|class|interface|let|var|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|const|import|enum|namespace|module|type|abstract|declare)\\\\s+))","name":"meta.return.type.arrow.ts","patterns":[{"include":"#arrow-return-type-body"}]},"arrow-return-type-body":{"patterns":[{"begin":"(?<=:)(?=\\\\s*\\\\{)","end":"(?<=})","patterns":[{"include":"#type-object"}]},{"include":"#type-predicate-operator"},{"include":"#type"}]},"async-modifier":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(async)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"storage.modifier.async.ts"},"binding-element":{"patterns":[{"include":"#comment"},{"include":"#string"},{"include":"#numeric-literal"},{"include":"#regex"},{"include":"#object-binding-pattern"},{"include":"#array-binding-pattern"},{"include":"#destructuring-variable-rest"},{"include":"#variable-initializer"}]},"binding-element-const":{"patterns":[{"include":"#comment"},{"include":"#string"},{"include":"#numeric-literal"},{"include":"#regex"},{"include":"#object-binding-pattern-const"},{"include":"#array-binding-pattern-const"},{"include":"#destructuring-variable-rest-const"},{"include":"#variable-initializer"}]},"boolean-literal":{"patterns":[{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))true(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"constant.language.boolean.true.ts"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))false(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"constant.language.boolean.false.ts"}]},"brackets":{"patterns":[{"begin":"\\\\{","end":"}|(?=\\\\*/)","patterns":[{"include":"#brackets"}]},{"begin":"\\\\[","end":"]|(?=\\\\*/)","patterns":[{"include":"#brackets"}]}]},"cast":{"patterns":[{"captures":{"1":{"name":"meta.brace.angle.ts"},"2":{"name":"storage.modifier.ts"},"3":{"name":"meta.brace.angle.ts"}},"match":"\\\\s*(<)\\\\s*(const)\\\\s*(>)","name":"cast.expr.ts"},{"begin":"(?<!\\\\+\\\\+|--)(?<=^return|[^$._[:alnum:]]return|^throw|[^$._[:alnum:]]throw|^yield|[^$._[:alnum:]]yield|^await|[^$._[:alnum:]]await|^default|[^$._[:alnum:]]default|[\\\\&(*,:=>?^|]|[^$_[:alnum:]](?:\\\\+\\\\+|--)|[^+]\\\\+|[^-]-)\\\\s*(<)(?!<?=)(?!\\\\s*$)","beginCaptures":{"1":{"name":"meta.brace.angle.ts"}},"end":"(>)","endCaptures":{"1":{"name":"meta.brace.angle.ts"}},"name":"cast.expr.ts","patterns":[{"include":"#type"}]},{"begin":"(?<=^)\\\\s*(<)(?=[$_[:alpha:]][$_[:alnum:]]*\\\\s*>)","beginCaptures":{"1":{"name":"meta.brace.angle.ts"}},"end":"(>)","endCaptures":{"1":{"name":"meta.brace.angle.ts"}},"name":"cast.expr.ts","patterns":[{"include":"#type"}]}]},"class-declaration":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(?:(abstract)\\\\s+)?\\\\b(class)\\\\b(?=\\\\s+|/[*/])","beginCaptures":{"1":{"name":"keyword.control.export.ts"},"2":{"name":"storage.modifier.ts"},"3":{"name":"storage.modifier.ts"},"4":{"name":"storage.type.class.ts"}},"end":"(?<=})","name":"meta.class.ts","patterns":[{"include":"#class-declaration-or-expression-patterns"}]},"class-declaration-or-expression-patterns":{"patterns":[{"include":"#comment"},{"include":"#class-or-interface-heritage"},{"captures":{"0":{"name":"entity.name.type.class.ts"}},"match":"[$_[:alpha:]][$_[:alnum:]]*"},{"include":"#type-parameters"},{"include":"#class-or-interface-body"}]},"class-expression":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(abstract)\\\\s+)?(class)\\\\b(?=\\\\s+|[<{]|/[*/])","beginCaptures":{"1":{"name":"storage.modifier.ts"},"2":{"name":"storage.type.class.ts"}},"end":"(?<=})","name":"meta.class.ts","patterns":[{"include":"#class-declaration-or-expression-patterns"}]},"class-or-interface-body":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.block.ts"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.ts"}},"patterns":[{"include":"#comment"},{"include":"#decorator"},{"begin":"(?<=:)\\\\s*","end":"(?=[-\\\\])+,:;}\\\\s]|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","patterns":[{"include":"#expression"}]},{"include":"#method-declaration"},{"include":"#indexer-declaration"},{"include":"#field-declaration"},{"include":"#string"},{"include":"#type-annotation"},{"include":"#variable-initializer"},{"include":"#access-modifier"},{"include":"#property-accessor"},{"include":"#async-modifier"},{"include":"#after-operator-block-as-object-literal"},{"include":"#decl-block"},{"include":"#expression"},{"include":"#punctuation-comma"},{"include":"#punctuation-semicolon"}]},"class-or-interface-heritage":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))\\\\b(extends|implements)\\\\b(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"1":{"name":"storage.modifier.ts"}},"end":"(?=\\\\{)","patterns":[{"include":"#comment"},{"include":"#class-or-interface-heritage"},{"include":"#type-parameters"},{"include":"#expressionWithoutIdentifiers"},{"captures":{"1":{"name":"entity.name.type.module.ts"},"2":{"name":"punctuation.accessor.ts"},"3":{"name":"punctuation.accessor.optional.ts"}},"match":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))(?=\\\\s*[$_[:alpha:]][$_[:alnum:]]*(\\\\s*\\\\??\\\\.\\\\s*[$_[:alpha:]][$_[:alnum:]]*)*\\\\s*)"},{"captures":{"1":{"name":"entity.other.inherited-class.ts"}},"match":"([$_[:alpha:]][$_[:alnum:]]*)"},{"include":"#expressionPunctuations"}]},"comment":{"patterns":[{"begin":"/\\\\*\\\\*(?!/)","beginCaptures":{"0":{"name":"punctuation.definition.comment.ts"}},"end":"\\\\*/","endCaptures":{"0":{"name":"punctuation.definition.comment.ts"}},"name":"comment.block.documentation.ts","patterns":[{"include":"#docblock"}]},{"begin":"(/\\\\*)(?:\\\\s*((@)internal)(?=\\\\s|(\\\\*/)))?","beginCaptures":{"1":{"name":"punctuation.definition.comment.ts"},"2":{"name":"storage.type.internaldeclaration.ts"},"3":{"name":"punctuation.decorator.internaldeclaration.ts"}},"end":"\\\\*/","endCaptures":{"0":{"name":"punctuation.definition.comment.ts"}},"name":"comment.block.ts"},{"begin":"(^[\\\\t ]+)?((//)(?:\\\\s*((@)internal)(?=\\\\s|$))?)","beginCaptures":{"1":{"name":"punctuation.whitespace.comment.leading.ts"},"2":{"name":"comment.line.double-slash.ts"},"3":{"name":"punctuation.definition.comment.ts"},"4":{"name":"storage.type.internaldeclaration.ts"},"5":{"name":"punctuation.decorator.internaldeclaration.ts"}},"contentName":"comment.line.double-slash.ts","end":"(?=$)"}]},"control-statement":{"patterns":[{"include":"#switch-statement"},{"include":"#for-loop"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(catch|finally|throw|try)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.control.trycatch.ts"},{"captures":{"1":{"name":"keyword.control.loop.ts"},"2":{"name":"entity.name.label.ts"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(break|continue|goto)\\\\s+([$_[:alpha:]][$_[:alnum:]]*)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(break|continue|do|goto|while)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.control.loop.ts"},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(return)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"0":{"name":"keyword.control.flow.ts"}},"end":"(?=[;}]|$|;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","patterns":[{"include":"#expression"}]},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(case|default|switch)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.control.switch.ts"},{"include":"#if-statement"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(else|if)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.control.conditional.ts"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(with)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.control.with.ts"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(package)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.control.ts"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(debugger)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.other.debugger.ts"}]},"decl-block":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.block.ts"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.ts"}},"name":"meta.block.ts","patterns":[{"include":"#statements"}]},"declaration":{"patterns":[{"include":"#decorator"},{"include":"#var-expr"},{"include":"#function-declaration"},{"include":"#class-declaration"},{"include":"#interface-declaration"},{"include":"#enum-declaration"},{"include":"#namespace-declaration"},{"include":"#type-alias-declaration"},{"include":"#import-equals-declaration"},{"include":"#import-declaration"},{"include":"#export-declaration"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(declare|export)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"storage.modifier.ts"}]},"decorator":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))@","beginCaptures":{"0":{"name":"punctuation.decorator.ts"}},"end":"(?=\\\\s)","name":"meta.decorator.ts","patterns":[{"include":"#expression"}]},"destructuring-const":{"patterns":[{"begin":"(?<![:=]|^of|[^$._[:alnum:]]of|^in|[^$._[:alnum:]]in)\\\\s*(?=\\\\{)","end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+))","name":"meta.object-binding-pattern-variable.ts","patterns":[{"include":"#object-binding-pattern-const"},{"include":"#type-annotation"},{"include":"#comment"}]},{"begin":"(?<![:=]|^of|[^$._[:alnum:]]of|^in|[^$._[:alnum:]]in)\\\\s*(?=\\\\[)","end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+))","name":"meta.array-binding-pattern-variable.ts","patterns":[{"include":"#array-binding-pattern-const"},{"include":"#type-annotation"},{"include":"#comment"}]}]},"destructuring-parameter":{"patterns":[{"begin":"(?<![:=])\\\\s*(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\{)","beginCaptures":{"1":{"name":"keyword.operator.rest.ts"},"2":{"name":"punctuation.definition.binding-pattern.object.ts"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.binding-pattern.object.ts"}},"name":"meta.parameter.object-binding-pattern.ts","patterns":[{"include":"#parameter-object-binding-element"}]},{"begin":"(?<![:=])\\\\s*(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\[)","beginCaptures":{"1":{"name":"keyword.operator.rest.ts"},"2":{"name":"punctuation.definition.binding-pattern.array.ts"}},"end":"]","endCaptures":{"0":{"name":"punctuation.definition.binding-pattern.array.ts"}},"name":"meta.paramter.array-binding-pattern.ts","patterns":[{"include":"#parameter-binding-element"},{"include":"#punctuation-comma"}]}]},"destructuring-parameter-rest":{"captures":{"1":{"name":"keyword.operator.rest.ts"},"2":{"name":"variable.parameter.ts"}},"match":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?([$_[:alpha:]][$_[:alnum:]]*)"},"destructuring-variable":{"patterns":[{"begin":"(?<![:=]|^of|[^$._[:alnum:]]of|^in|[^$._[:alnum:]]in)\\\\s*(?=\\\\{)","end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+))","name":"meta.object-binding-pattern-variable.ts","patterns":[{"include":"#object-binding-pattern"},{"include":"#type-annotation"},{"include":"#comment"}]},{"begin":"(?<![:=]|^of|[^$._[:alnum:]]of|^in|[^$._[:alnum:]]in)\\\\s*(?=\\\\[)","end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+))","name":"meta.array-binding-pattern-variable.ts","patterns":[{"include":"#array-binding-pattern"},{"include":"#type-annotation"},{"include":"#comment"}]}]},"destructuring-variable-rest":{"captures":{"1":{"name":"keyword.operator.rest.ts"},"2":{"name":"meta.definition.variable.ts variable.other.readwrite.ts"}},"match":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?([$_[:alpha:]][$_[:alnum:]]*)"},"destructuring-variable-rest-const":{"captures":{"1":{"name":"keyword.operator.rest.ts"},"2":{"name":"meta.definition.variable.ts variable.other.constant.ts"}},"match":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?([$_[:alpha:]][$_[:alnum:]]*)"},"directives":{"begin":"^(///)\\\\s*(?=<(reference|amd-dependency|amd-module)(\\\\s+(path|types|no-default-lib|lib|name|resolution-mode)\\\\s*=\\\\s*((\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)))+\\\\s*/>\\\\s*$)","beginCaptures":{"1":{"name":"punctuation.definition.comment.ts"}},"end":"(?=$)","name":"comment.line.triple-slash.directive.ts","patterns":[{"begin":"(<)(reference|amd-dependency|amd-module)","beginCaptures":{"1":{"name":"punctuation.definition.tag.directive.ts"},"2":{"name":"entity.name.tag.directive.ts"}},"end":"/>","endCaptures":{"0":{"name":"punctuation.definition.tag.directive.ts"}},"name":"meta.tag.ts","patterns":[{"match":"path|types|no-default-lib|lib|name|resolution-mode","name":"entity.other.attribute-name.directive.ts"},{"match":"=","name":"keyword.operator.assignment.ts"},{"include":"#string"}]}]},"docblock":{"patterns":[{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"constant.language.access-type.jsdoc"}},"match":"((@)a(?:ccess|pi))\\\\s+(p(?:rivate|rotected|ublic))\\\\b"},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"entity.name.type.instance.jsdoc"},"4":{"name":"punctuation.definition.bracket.angle.begin.jsdoc"},"5":{"name":"constant.other.email.link.underline.jsdoc"},"6":{"name":"punctuation.definition.bracket.angle.end.jsdoc"}},"match":"((@)author)\\\\s+([^*/<>@\\\\s](?:[^*/<>@]|\\\\*[^/])*)(?:\\\\s*(<)([^>\\\\s]+)(>))?"},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"entity.name.type.instance.jsdoc"},"4":{"name":"keyword.operator.control.jsdoc"},"5":{"name":"entity.name.type.instance.jsdoc"}},"match":"((@)borrows)\\\\s+((?:[^*/@\\\\s]|\\\\*[^/])+)\\\\s+(as)\\\\s+((?:[^*/@\\\\s]|\\\\*[^/])+)"},{"begin":"((@)example)\\\\s+","beginCaptures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"}},"end":"(?=@|\\\\*/)","name":"meta.example.jsdoc","patterns":[{"match":"^\\\\s\\\\*\\\\s+"},{"begin":"\\\\G(<)caption(>)","beginCaptures":{"0":{"name":"entity.name.tag.inline.jsdoc"},"1":{"name":"punctuation.definition.bracket.angle.begin.jsdoc"},"2":{"name":"punctuation.definition.bracket.angle.end.jsdoc"}},"contentName":"constant.other.description.jsdoc","end":"(</)caption(>)|(?=\\\\*/)","endCaptures":{"0":{"name":"entity.name.tag.inline.jsdoc"},"1":{"name":"punctuation.definition.bracket.angle.begin.jsdoc"},"2":{"name":"punctuation.definition.bracket.angle.end.jsdoc"}}},{"captures":{"0":{"name":"source.embedded.ts"}},"match":"[^*@\\\\s](?:[^*]|\\\\*[^/])*"}]},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"constant.language.symbol-type.jsdoc"}},"match":"((@)kind)\\\\s+(class|constant|event|external|file|function|member|mixin|module|namespace|typedef)\\\\b"},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"variable.other.link.underline.jsdoc"},"4":{"name":"entity.name.type.instance.jsdoc"}},"match":"((@)see)\\\\s+(?:((?=https?://)(?:[^*\\\\s]|\\\\*[^/])+)|((?!https?://|(?:\\\\[[^]\\\\[]*])?\\\\{@(?:link|linkcode|linkplain|tutorial)\\\\b)(?:[^*/@\\\\s]|\\\\*[^/])+))"},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"variable.other.jsdoc"}},"match":"((@)template)\\\\s+([$A-Z_a-z][]$.\\\\[\\\\w]*(?:\\\\s*,\\\\s*[$A-Z_a-z][]$.\\\\[\\\\w]*)*)"},{"begin":"((@)template)\\\\s+(?=\\\\{)","beginCaptures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"}},"end":"(?=\\\\s|\\\\*/|[^]$A-\\\\[_a-{}])","patterns":[{"include":"#jsdoctype"},{"match":"([$A-Z_a-z][]$.\\\\[\\\\w]*)","name":"variable.other.jsdoc"}]},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"variable.other.jsdoc"}},"match":"((@)(?:arg|argument|const|constant|member|namespace|param|var))\\\\s+([$A-Z_a-z][]$.\\\\[\\\\w]*)"},{"begin":"((@)typedef)\\\\s+(?=\\\\{)","beginCaptures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"}},"end":"(?=\\\\s|\\\\*/|[^]$A-\\\\[_a-{}])","patterns":[{"include":"#jsdoctype"},{"match":"(?:[^*/@\\\\s]|\\\\*[^/])+","name":"entity.name.type.instance.jsdoc"}]},{"begin":"((@)(?:arg|argument|const|constant|member|namespace|param|prop|property|var))\\\\s+(?=\\\\{)","beginCaptures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"}},"end":"(?=\\\\s|\\\\*/|[^]$A-\\\\[_a-{}])","patterns":[{"include":"#jsdoctype"},{"match":"([$A-Z_a-z][]$.\\\\[\\\\w]*)","name":"variable.other.jsdoc"},{"captures":{"1":{"name":"punctuation.definition.optional-value.begin.bracket.square.jsdoc"},"2":{"name":"keyword.operator.assignment.jsdoc"},"3":{"name":"source.embedded.ts"},"4":{"name":"punctuation.definition.optional-value.end.bracket.square.jsdoc"},"5":{"name":"invalid.illegal.syntax.jsdoc"}},"match":"(\\\\[)\\\\s*[$\\\\w]+(?:(?:\\\\[])?\\\\.[$\\\\w]+)*(?:\\\\s*(=)\\\\s*((?>\\"(?:\\\\*(?!/)|\\\\\\\\(?!\\")|[^*\\\\\\\\])*?\\"|\'(?:\\\\*(?!/)|\\\\\\\\(?!\')|[^*\\\\\\\\])*?\'|\\\\[(?:\\\\*(?!/)|[^*])*?]|(?:\\\\*(?!/)|\\\\s(?!\\\\s*])|\\\\[.*?(?:]|(?=\\\\*/))|[^]*\\\\[\\\\s])*)*))?\\\\s*(?:(])((?:[^*\\\\s]|\\\\*[^/\\\\s])+)?|(?=\\\\*/))","name":"variable.other.jsdoc"}]},{"begin":"((@)(?:define|enum|exception|export|extends|lends|implements|modifies|namespace|private|protected|returns?|satisfies|suppress|this|throws|type|yields?))\\\\s+(?=\\\\{)","beginCaptures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"}},"end":"(?=\\\\s|\\\\*/|[^]$A-\\\\[_a-{}])","patterns":[{"include":"#jsdoctype"}]},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"entity.name.type.instance.jsdoc"}},"match":"((@)(?:alias|augments|callback|constructs|emits|event|fires|exports?|extends|external|function|func|host|lends|listens|interface|memberof!?|method|module|mixes|mixin|name|requires|see|this|typedef|uses))\\\\s+((?:[^*@{}\\\\s]|\\\\*[^/])+)"},{"begin":"((@)(?:default(?:value)?|license|version))\\\\s+(([\\"\']))","beginCaptures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"variable.other.jsdoc"},"4":{"name":"punctuation.definition.string.begin.jsdoc"}},"contentName":"variable.other.jsdoc","end":"(\\\\3)|(?=$|\\\\*/)","endCaptures":{"0":{"name":"variable.other.jsdoc"},"1":{"name":"punctuation.definition.string.end.jsdoc"}}},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"variable.other.jsdoc"}},"match":"((@)(?:default(?:value)?|license|tutorial|variation|version))\\\\s+([^*\\\\s]+)"},{"captures":{"1":{"name":"punctuation.definition.block.tag.jsdoc"}},"match":"(@)(?:abstract|access|alias|api|arg|argument|async|attribute|augments|author|beta|borrows|bubbles|callback|chainable|class|classdesc|code|config|const|constant|constructor|constructs|copyright|default|defaultvalue|define|deprecated|desc|description|dict|emits|enum|event|example|exception|exports?|extends|extension(?:_?for)?|external|externs|file|fileoverview|final|fires|for|func|function|generator|global|hideconstructor|host|ignore|implements|implicitCast|inherit[Dd]oc|inner|instance|interface|internal|kind|lends|license|listens|main|member|memberof!?|method|mixes|mixins?|modifies|module|name|namespace|noalias|nocollapse|nocompile|nosideeffects|override|overview|package|param|polymer(?:Behavior)?|preserve|private|prop|property|protected|public|read[Oo]nly|record|require[ds]|returns?|see|since|static|struct|submodule|summary|suppress|template|this|throws|todo|tutorial|type|typedef|unrestricted|uses|var|variation|version|virtual|writeOnce|yields?)\\\\b","name":"storage.type.class.jsdoc"},{"include":"#inline-tags"},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"}},"match":"((@)[$_[:alpha:]][$_[:alnum:]]*)(?=\\\\s+)"}]},"enum-declaration":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?(?:\\\\b(const)\\\\s+)?\\\\b(enum)\\\\s+([$_[:alpha:]][$_[:alnum:]]*)","beginCaptures":{"1":{"name":"keyword.control.export.ts"},"2":{"name":"storage.modifier.ts"},"3":{"name":"storage.modifier.ts"},"4":{"name":"storage.type.enum.ts"},"5":{"name":"entity.name.type.enum.ts"}},"end":"(?<=})","name":"meta.enum.declaration.ts","patterns":[{"include":"#comment"},{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.block.ts"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.ts"}},"patterns":[{"include":"#comment"},{"begin":"([$_[:alpha:]][$_[:alnum:]]*)","beginCaptures":{"0":{"name":"variable.other.enummember.ts"}},"end":"(?=[,}]|$)","patterns":[{"include":"#comment"},{"include":"#variable-initializer"}]},{"begin":"(?=((\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+])))","end":"(?=[,}]|$)","patterns":[{"include":"#string"},{"include":"#array-literal"},{"include":"#comment"},{"include":"#variable-initializer"}]},{"include":"#punctuation-comma"}]}]},"export-declaration":{"patterns":[{"captures":{"1":{"name":"keyword.control.export.ts"},"2":{"name":"keyword.control.as.ts"},"3":{"name":"storage.type.namespace.ts"},"4":{"name":"entity.name.type.module.ts"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(export)\\\\s+(as)\\\\s+(namespace)\\\\s+([$_[:alpha:]][$_[:alnum:]]*)"},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(export)(?:\\\\s+(type))?(?:\\\\s*(=)|\\\\s+(default)(?=\\\\s+))","beginCaptures":{"1":{"name":"keyword.control.export.ts"},"2":{"name":"keyword.control.type.ts"},"3":{"name":"keyword.operator.assignment.ts"},"4":{"name":"keyword.control.default.ts"}},"end":"(?=$|;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","name":"meta.export.default.ts","patterns":[{"include":"#interface-declaration"},{"include":"#expression"}]},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(export)(?:\\\\s+(type))?\\\\b(?!(\\\\$)|(\\\\s*:))((?=\\\\s*[*{])|((?=\\\\s*[$_[:alpha:]][$_[:alnum:]]*([,\\\\s]))(?!\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)))","beginCaptures":{"1":{"name":"keyword.control.export.ts"},"2":{"name":"keyword.control.type.ts"}},"end":"(?=$|;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","name":"meta.export.ts","patterns":[{"include":"#import-export-declaration"}]}]},"expression":{"patterns":[{"include":"#expressionWithoutIdentifiers"},{"include":"#identifiers"},{"include":"#expressionPunctuations"}]},"expression-inside-possibly-arrow-parens":{"patterns":[{"include":"#expressionWithoutIdentifiers"},{"include":"#comment"},{"include":"#string"},{"include":"#decorator"},{"include":"#destructuring-parameter"},{"captures":{"1":{"name":"storage.modifier.ts"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(override|public|protected|private|readonly)\\\\s+(?=(override|public|protected|private|readonly)\\\\s+)"},{"captures":{"1":{"name":"storage.modifier.ts"},"2":{"name":"keyword.operator.rest.ts"},"3":{"name":"entity.name.function.ts variable.language.this.ts"},"4":{"name":"entity.name.function.ts"},"5":{"name":"keyword.operator.optional.ts"}},"match":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(override|public|private|protected|readonly)\\\\s+)?(?:(\\\\.\\\\.\\\\.)\\\\s*)?(?<![:=])(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*(\\\\??)(?=\\\\s*(=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"\'()`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))))|(:\\\\s*((<)|(\\\\(\\\\s*((\\\\))|(\\\\.\\\\.\\\\.)|([$_[:alnum:]]+\\\\s*(([,:=?])|(\\\\)\\\\s*=>)))))))|(:\\\\s*(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))Function(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|(:\\\\s*((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))))|(:\\\\s*(=>|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(<[^<>]*>)|[^(),<=>])+=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"\'()`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>))))))"},{"captures":{"1":{"name":"storage.modifier.ts"},"2":{"name":"keyword.operator.rest.ts"},"3":{"name":"variable.parameter.ts variable.language.this.ts"},"4":{"name":"variable.parameter.ts"},"5":{"name":"keyword.operator.optional.ts"}},"match":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(override|public|private|protected|readonly)\\\\s+)?(?:(\\\\.\\\\.\\\\.)\\\\s*)?(?<![:=])(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*(\\\\??)(?=\\\\s*[,:]|$)"},{"include":"#type-annotation"},{"include":"#variable-initializer"},{"match":",","name":"punctuation.separator.parameter.ts"},{"include":"#identifiers"},{"include":"#expressionPunctuations"}]},"expression-operators":{"patterns":[{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(await)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.control.flow.ts"},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(yield)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))(?=\\\\s*/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*\\\\*)","beginCaptures":{"1":{"name":"keyword.control.flow.ts"}},"end":"\\\\*","endCaptures":{"0":{"name":"keyword.generator.asterisk.ts"}},"patterns":[{"include":"#comment"}]},{"captures":{"1":{"name":"keyword.control.flow.ts"},"2":{"name":"keyword.generator.asterisk.ts"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(yield)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))(?:\\\\s*(\\\\*))?"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))delete(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.operator.expression.delete.ts"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))in(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))(?!\\\\()","name":"keyword.operator.expression.in.ts"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))of(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))(?!\\\\()","name":"keyword.operator.expression.of.ts"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))instanceof(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.operator.expression.instanceof.ts"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))new(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.operator.new.ts"},{"include":"#typeof-operator"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))void(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.operator.expression.void.ts"},{"captures":{"1":{"name":"keyword.control.as.ts"},"2":{"name":"storage.modifier.ts"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(as)\\\\s+(const)(?=\\\\s*($|[]),:;}]))"},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(as)|(satisfies))\\\\s+","beginCaptures":{"1":{"name":"keyword.control.as.ts"},"2":{"name":"keyword.control.satisfies.ts"}},"end":"(?=^|[-\\\\])+,:;>?}]|\\\\|\\\\||&&|!==|$|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(as|satisfies)\\\\s+)|(\\\\s+<))","patterns":[{"include":"#type"}]},{"match":"\\\\.\\\\.\\\\.","name":"keyword.operator.spread.ts"},{"match":"(?:\\\\*|(?<!\\\\()/|[-%+])=","name":"keyword.operator.assignment.compound.ts"},{"match":"(?:[\\\\&^]|<<|>>>??|\\\\|)=","name":"keyword.operator.assignment.compound.bitwise.ts"},{"match":"<<|>>>?","name":"keyword.operator.bitwise.shift.ts"},{"match":"[!=]==?","name":"keyword.operator.comparison.ts"},{"match":"<=|>=|<>|[<>]","name":"keyword.operator.relational.ts"},{"captures":{"1":{"name":"keyword.operator.logical.ts"},"2":{"name":"keyword.operator.assignment.compound.ts"},"3":{"name":"keyword.operator.arithmetic.ts"}},"match":"(?<=[$_[:alnum:]])(!)\\\\s*(?:(/=)|(/)(?![*/]))"},{"match":"!|&&|\\\\|\\\\||\\\\?\\\\?","name":"keyword.operator.logical.ts"},{"match":"[\\\\&^|~]","name":"keyword.operator.bitwise.ts"},{"match":"=","name":"keyword.operator.assignment.ts"},{"match":"--","name":"keyword.operator.decrement.ts"},{"match":"\\\\+\\\\+","name":"keyword.operator.increment.ts"},{"match":"[-%*+/]","name":"keyword.operator.arithmetic.ts"},{"begin":"(?<=[]$)_[:alnum:]])\\\\s*(?=(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)+(?:(/=)|(/)(?![*/])))","end":"(/=)|(/)(?!\\\\*([^*]|(\\\\*[^/]))*\\\\*/)","endCaptures":{"1":{"name":"keyword.operator.assignment.compound.ts"},"2":{"name":"keyword.operator.arithmetic.ts"}},"patterns":[{"include":"#comment"}]},{"captures":{"1":{"name":"keyword.operator.assignment.compound.ts"},"2":{"name":"keyword.operator.arithmetic.ts"}},"match":"(?<=[]$)_[:alnum:]])\\\\s*(?:(/=)|(/)(?![*/]))"}]},"expressionPunctuations":{"patterns":[{"include":"#punctuation-comma"},{"include":"#punctuation-accessor"}]},"expressionWithoutIdentifiers":{"patterns":[{"include":"#string"},{"include":"#regex"},{"include":"#comment"},{"include":"#function-expression"},{"include":"#class-expression"},{"include":"#arrow-function"},{"include":"#paren-expression-possibly-arrow"},{"include":"#cast"},{"include":"#ternary-expression"},{"include":"#new-expr"},{"include":"#instanceof-expr"},{"include":"#object-literal"},{"include":"#expression-operators"},{"include":"#function-call"},{"include":"#literal"},{"include":"#support-objects"},{"include":"#paren-expression"}]},"field-declaration":{"begin":"(?<!\\\\()(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(readonly)\\\\s+)?(?=\\\\s*(\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|(#?[$_[:alpha:]][$_[:alnum:]]*)|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(?:(?:(\\\\?)|(!))\\\\s*)?([,:;=}]|$))","beginCaptures":{"1":{"name":"storage.modifier.ts"}},"end":"(?=[,;}]|$|^((?!\\\\s*(\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|(#?[$_[:alpha:]][$_[:alnum:]]*)|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(?:(?:(\\\\?)|(!))\\\\s*)?([,:;=]|$))))|(?<=})","name":"meta.field.declaration.ts","patterns":[{"include":"#variable-initializer"},{"include":"#type-annotation"},{"include":"#string"},{"include":"#array-literal"},{"include":"#numeric-literal"},{"include":"#comment"},{"captures":{"1":{"name":"meta.definition.property.ts entity.name.function.ts"},"2":{"name":"keyword.operator.optional.ts"},"3":{"name":"keyword.operator.definiteassignment.ts"}},"match":"(#?[$_[:alpha:]][$_[:alnum:]]*)(?:(\\\\?)|(!))?(?=\\\\s*\\\\s*(=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"\'()`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))))|(:\\\\s*((<)|(\\\\(\\\\s*((\\\\))|(\\\\.\\\\.\\\\.)|([$_[:alnum:]]+\\\\s*(([,:=?])|(\\\\)\\\\s*=>)))))))|(:\\\\s*(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))Function(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|(:\\\\s*((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))))|(:\\\\s*(=>|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(<[^<>]*>)|[^(),<=>])+=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"\'()`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>))))))"},{"match":"#?[$_[:alpha:]][$_[:alnum:]]*","name":"meta.definition.property.ts variable.object.property.ts"},{"match":"\\\\?","name":"keyword.operator.optional.ts"},{"match":"!","name":"keyword.operator.definiteassignment.ts"}]},"for-loop":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))for(?=((\\\\s+|(\\\\s*/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*))await)?\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)?(\\\\())","beginCaptures":{"0":{"name":"keyword.control.loop.ts"}},"end":"(?<=\\\\))","patterns":[{"include":"#comment"},{"match":"await","name":"keyword.control.loop.ts"},{"begin":"\\\\(","beginCaptures":{"0":{"name":"meta.brace.round.ts"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.ts"}},"patterns":[{"include":"#var-expr"},{"include":"#expression"},{"include":"#punctuation-semicolon"}]}]},"function-body":{"patterns":[{"include":"#comment"},{"include":"#type-parameters"},{"include":"#function-parameters"},{"include":"#return-type"},{"include":"#type-function-return-type"},{"include":"#decl-block"},{"match":"\\\\*","name":"keyword.generator.asterisk.ts"}]},"function-call":{"patterns":[{"begin":"(?=(((([$_[:alpha:]][$_[:alnum:]]*)(\\\\s*\\\\??\\\\.\\\\s*(#?[$_[:alpha:]][$_[:alnum:]]*))*)|(\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*))|(?<=\\\\)))\\\\s*(?:(\\\\?\\\\.\\\\s*)|(!))?((<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))(([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>)*(?<!=)>))*(?<!=)>)*(?<!=)>\\\\s*)?\\\\())","end":"(?<=\\\\))(?!(((([$_[:alpha:]][$_[:alnum:]]*)(\\\\s*\\\\??\\\\.\\\\s*(#?[$_[:alpha:]][$_[:alnum:]]*))*)|(\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*))|(?<=\\\\)))\\\\s*(?:(\\\\?\\\\.\\\\s*)|(!))?((<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))(([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>)*(?<!=)>))*(?<!=)>)*(?<!=)>\\\\s*)?\\\\())","patterns":[{"begin":"(?=(([$_[:alpha:]][$_[:alnum:]]*)(\\\\s*\\\\??\\\\.\\\\s*(#?[$_[:alpha:]][$_[:alnum:]]*))*)|(\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*))","end":"(?=\\\\s*(?:(\\\\?\\\\.\\\\s*)|(!))?((<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))(([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>)*(?<!=)>))*(?<!=)>)*(?<!=)>\\\\s*)?\\\\())","name":"meta.function-call.ts","patterns":[{"include":"#function-call-target"}]},{"include":"#comment"},{"include":"#function-call-optionals"},{"include":"#type-arguments"},{"include":"#paren-expression"}]},{"begin":"(?=(((([$_[:alpha:]][$_[:alnum:]]*)(\\\\s*\\\\??\\\\.\\\\s*(#?[$_[:alpha:]][$_[:alnum:]]*))*)|(\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*))|(?<=\\\\)))(<\\\\s*[(\\\\[{]\\\\s*)$)","end":"(?<=>)(?!(((([$_[:alpha:]][$_[:alnum:]]*)(\\\\s*\\\\??\\\\.\\\\s*(#?[$_[:alpha:]][$_[:alnum:]]*))*)|(\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*))|(?<=\\\\)))(<\\\\s*[(\\\\[{]\\\\s*)$)","patterns":[{"begin":"(?=(([$_[:alpha:]][$_[:alnum:]]*)(\\\\s*\\\\??\\\\.\\\\s*(#?[$_[:alpha:]][$_[:alnum:]]*))*)|(\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*))","end":"(?=(<\\\\s*[(\\\\[{]\\\\s*)$)","name":"meta.function-call.ts","patterns":[{"include":"#function-call-target"}]},{"include":"#comment"},{"include":"#function-call-optionals"},{"include":"#type-arguments"}]}]},"function-call-optionals":{"patterns":[{"match":"\\\\?\\\\.","name":"meta.function-call.ts punctuation.accessor.optional.ts"},{"match":"!","name":"meta.function-call.ts keyword.operator.definiteassignment.ts"}]},"function-call-target":{"patterns":[{"include":"#support-function-call-identifiers"},{"match":"(#?[$_[:alpha:]][$_[:alnum:]]*)","name":"entity.name.function.ts"}]},"function-declaration":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?(?:(async)\\\\s+)?(function)\\\\b(?:\\\\s*(\\\\*))?(?:(?:\\\\s+|(?<=\\\\*))([$_[:alpha:]][$_[:alnum:]]*))?\\\\s*","beginCaptures":{"1":{"name":"keyword.control.export.ts"},"2":{"name":"storage.modifier.ts"},"3":{"name":"storage.modifier.async.ts"},"4":{"name":"storage.type.function.ts"},"5":{"name":"keyword.generator.asterisk.ts"},"6":{"name":"meta.definition.function.ts entity.name.function.ts"}},"end":"(?=;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)|(?<=})","name":"meta.function.ts","patterns":[{"include":"#function-name"},{"include":"#function-body"}]},"function-expression":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(async)\\\\s+)?(function)\\\\b(?:\\\\s*(\\\\*))?(?:(?:\\\\s+|(?<=\\\\*))([$_[:alpha:]][$_[:alnum:]]*))?\\\\s*","beginCaptures":{"1":{"name":"storage.modifier.async.ts"},"2":{"name":"storage.type.function.ts"},"3":{"name":"keyword.generator.asterisk.ts"},"4":{"name":"meta.definition.function.ts entity.name.function.ts"}},"end":"(?=;)|(?<=})","name":"meta.function.expression.ts","patterns":[{"include":"#function-name"},{"include":"#single-line-comment-consuming-line-ending"},{"include":"#function-body"}]},"function-name":{"match":"[$_[:alpha:]][$_[:alnum:]]*","name":"meta.definition.function.ts entity.name.function.ts"},"function-parameters":{"begin":"\\\\(","beginCaptures":{"0":{"name":"punctuation.definition.parameters.begin.ts"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.definition.parameters.end.ts"}},"name":"meta.parameters.ts","patterns":[{"include":"#function-parameters-body"}]},"function-parameters-body":{"patterns":[{"include":"#comment"},{"include":"#string"},{"include":"#decorator"},{"include":"#destructuring-parameter"},{"include":"#parameter-name"},{"include":"#parameter-type-annotation"},{"include":"#variable-initializer"},{"match":",","name":"punctuation.separator.parameter.ts"}]},"identifiers":{"patterns":[{"include":"#object-identifiers"},{"captures":{"1":{"name":"punctuation.accessor.ts"},"2":{"name":"punctuation.accessor.optional.ts"},"3":{"name":"entity.name.function.ts"}},"match":"(?:(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*)?([$_[:alpha:]][$_[:alnum:]]*)(?=\\\\s*=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"\'()`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))))"},{"captures":{"1":{"name":"punctuation.accessor.ts"},"2":{"name":"punctuation.accessor.optional.ts"},"3":{"name":"variable.other.constant.property.ts"}},"match":"(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*(#?\\\\p{upper}[$_\\\\d[:upper:]]*)(?![$_[:alnum:]])"},{"captures":{"1":{"name":"punctuation.accessor.ts"},"2":{"name":"punctuation.accessor.optional.ts"},"3":{"name":"variable.other.property.ts"}},"match":"(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*(#?[$_[:alpha:]][$_[:alnum:]]*)"},{"match":"(\\\\p{upper}[$_\\\\d[:upper:]]*)(?![$_[:alnum:]])","name":"variable.other.constant.ts"},{"match":"[$_[:alpha:]][$_[:alnum:]]*","name":"variable.other.readwrite.ts"}]},"if-statement":{"patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?=\\\\bif\\\\s*(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))\\\\s*(?!\\\\{))","end":"(?=;|$|})","patterns":[{"include":"#comment"},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(if)\\\\s*(\\\\()","beginCaptures":{"1":{"name":"keyword.control.conditional.ts"},"2":{"name":"meta.brace.round.ts"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.ts"}},"patterns":[{"include":"#expression"}]},{"begin":"(?<=\\\\))\\\\s*/(?![*/])(?=(?:[^/\\\\[\\\\\\\\]|\\\\\\\\.|\\\\[([^]\\\\\\\\]|\\\\\\\\.)*])+/([dgimsuvy]+|(?![*/])|(?=/\\\\*))(?!\\\\s*[$0-9A-Z_a-z]))","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.ts"}},"end":"(/)([dgimsuvy]*)","endCaptures":{"1":{"name":"punctuation.definition.string.end.ts"},"2":{"name":"keyword.other.ts"}},"name":"string.regexp.ts","patterns":[{"include":"#regexp"}]},{"include":"#statements"}]}]},"import-declaration":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(import)(?:\\\\s+(type)(?!\\\\s+from))?(?!\\\\s*[(:])(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"1":{"name":"keyword.control.export.ts"},"2":{"name":"storage.modifier.ts"},"3":{"name":"keyword.control.import.ts"},"4":{"name":"keyword.control.type.ts"}},"end":"(?<!(?:^|[^$._[:alnum:]])import)(?=;|$|^)","name":"meta.import.ts","patterns":[{"include":"#single-line-comment-consuming-line-ending"},{"include":"#comment"},{"include":"#string"},{"begin":"(?<=(?:^|[^$._[:alnum:]])import)(?!\\\\s*[\\"\'])","end":"\\\\bfrom\\\\b","endCaptures":{"0":{"name":"keyword.control.from.ts"}},"patterns":[{"include":"#import-export-declaration"}]},{"include":"#import-export-declaration"}]},"import-equals-declaration":{"patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(import)(?:\\\\s+(type))?\\\\s+([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(=)\\\\s*(require)\\\\s*(\\\\()","beginCaptures":{"1":{"name":"keyword.control.export.ts"},"2":{"name":"storage.modifier.ts"},"3":{"name":"keyword.control.import.ts"},"4":{"name":"keyword.control.type.ts"},"5":{"name":"variable.other.readwrite.alias.ts"},"6":{"name":"keyword.operator.assignment.ts"},"7":{"name":"keyword.control.require.ts"},"8":{"name":"meta.brace.round.ts"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.ts"}},"name":"meta.import-equals.external.ts","patterns":[{"include":"#comment"},{"include":"#string"}]},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(import)(?:\\\\s+(type))?\\\\s+([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(=)\\\\s*(?!require\\\\b)","beginCaptures":{"1":{"name":"keyword.control.export.ts"},"2":{"name":"storage.modifier.ts"},"3":{"name":"keyword.control.import.ts"},"4":{"name":"keyword.control.type.ts"},"5":{"name":"variable.other.readwrite.alias.ts"},"6":{"name":"keyword.operator.assignment.ts"}},"end":"(?=;|$|^)","name":"meta.import-equals.internal.ts","patterns":[{"include":"#single-line-comment-consuming-line-ending"},{"include":"#comment"},{"captures":{"1":{"name":"entity.name.type.module.ts"},"2":{"name":"punctuation.accessor.ts"},"3":{"name":"punctuation.accessor.optional.ts"}},"match":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))"},{"match":"([$_[:alpha:]][$_[:alnum:]]*)","name":"variable.other.readwrite.ts"}]}]},"import-export-assert-clause":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(with)|(assert))\\\\s*(\\\\{)","beginCaptures":{"1":{"name":"keyword.control.with.ts"},"2":{"name":"keyword.control.assert.ts"},"3":{"name":"punctuation.definition.block.ts"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.ts"}},"patterns":[{"include":"#comment"},{"include":"#string"},{"match":"[$_[:alpha:]][$_[:alnum:]]*\\\\s*(?=(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*:)","name":"meta.object-literal.key.ts"},{"match":":","name":"punctuation.separator.key-value.ts"}]},"import-export-block":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.block.ts"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.ts"}},"name":"meta.block.ts","patterns":[{"include":"#import-export-clause"}]},"import-export-clause":{"patterns":[{"include":"#comment"},{"captures":{"1":{"name":"keyword.control.type.ts"},"2":{"name":"keyword.control.default.ts"},"3":{"name":"constant.language.import-export-all.ts"},"4":{"name":"variable.other.readwrite.ts"},"5":{"name":"string.quoted.alias.ts"},"12":{"name":"keyword.control.as.ts"},"13":{"name":"keyword.control.default.ts"},"14":{"name":"variable.other.readwrite.alias.ts"},"15":{"name":"string.quoted.alias.ts"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(type)\\\\s+)?(?:\\\\b(default)|(\\\\*)|\\\\b([$_[:alpha:]][$_[:alnum:]]*)|((\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)))\\\\s+(as)\\\\s+(?:(default(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|([$_[:alpha:]][$_[:alnum:]]*)|((\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)))"},{"include":"#punctuation-comma"},{"match":"\\\\*","name":"constant.language.import-export-all.ts"},{"match":"\\\\b(default)\\\\b","name":"keyword.control.default.ts"},{"captures":{"1":{"name":"keyword.control.type.ts"},"2":{"name":"variable.other.readwrite.alias.ts"},"3":{"name":"string.quoted.alias.ts"}},"match":"(?:\\\\b(type)\\\\s+)?(?:([$_[:alpha:]][$_[:alnum:]]*)|((\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)))"}]},"import-export-declaration":{"patterns":[{"include":"#comment"},{"include":"#string"},{"include":"#import-export-block"},{"match":"\\\\bfrom\\\\b","name":"keyword.control.from.ts"},{"include":"#import-export-assert-clause"},{"include":"#import-export-clause"}]},"indexer-declaration":{"begin":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(readonly)\\\\s*)?\\\\s*(\\\\[)\\\\s*([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?=:)","beginCaptures":{"1":{"name":"storage.modifier.ts"},"2":{"name":"meta.brace.square.ts"},"3":{"name":"variable.parameter.ts"}},"end":"(])\\\\s*(\\\\?\\\\s*)?|$","endCaptures":{"1":{"name":"meta.brace.square.ts"},"2":{"name":"keyword.operator.optional.ts"}},"name":"meta.indexer.declaration.ts","patterns":[{"include":"#type-annotation"}]},"indexer-mapped-type-declaration":{"begin":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))([-+])?(readonly)\\\\s*)?\\\\s*(\\\\[)\\\\s*([$_[:alpha:]][$_[:alnum:]]*)\\\\s+(in)\\\\s+","beginCaptures":{"1":{"name":"keyword.operator.type.modifier.ts"},"2":{"name":"storage.modifier.ts"},"3":{"name":"meta.brace.square.ts"},"4":{"name":"entity.name.type.ts"},"5":{"name":"keyword.operator.expression.in.ts"}},"end":"(])([-+])?\\\\s*(\\\\?\\\\s*)?|$","endCaptures":{"1":{"name":"meta.brace.square.ts"},"2":{"name":"keyword.operator.type.modifier.ts"},"3":{"name":"keyword.operator.optional.ts"}},"name":"meta.indexer.mappedtype.declaration.ts","patterns":[{"captures":{"1":{"name":"keyword.control.as.ts"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(as)\\\\s+"},{"include":"#type"}]},"inline-tags":{"patterns":[{"captures":{"1":{"name":"punctuation.definition.bracket.square.begin.jsdoc"},"2":{"name":"punctuation.definition.bracket.square.end.jsdoc"}},"match":"(\\\\[)[^]]+(])(?=\\\\{@(?:link|linkcode|linkplain|tutorial))","name":"constant.other.description.jsdoc"},{"begin":"(\\\\{)((@)(?:link(?:code|plain)?|tutorial))\\\\s*","beginCaptures":{"1":{"name":"punctuation.definition.bracket.curly.begin.jsdoc"},"2":{"name":"storage.type.class.jsdoc"},"3":{"name":"punctuation.definition.inline.tag.jsdoc"}},"end":"}|(?=\\\\*/)","endCaptures":{"0":{"name":"punctuation.definition.bracket.curly.end.jsdoc"}},"name":"entity.name.type.instance.jsdoc","patterns":[{"captures":{"1":{"name":"variable.other.link.underline.jsdoc"},"2":{"name":"punctuation.separator.pipe.jsdoc"}},"match":"\\\\G((?=https?://)(?:[^*|}\\\\s]|\\\\*/)+)(\\\\|)?"},{"captures":{"1":{"name":"variable.other.description.jsdoc"},"2":{"name":"punctuation.separator.pipe.jsdoc"}},"match":"\\\\G((?:[^*@{|}\\\\s]|\\\\*[^/])+)(\\\\|)?"}]}]},"instanceof-expr":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(instanceof)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"1":{"name":"keyword.operator.expression.instanceof.ts"}},"end":"(?<=\\\\))|(?=[-\\\\])+,:;>?}]|\\\\|\\\\||&&|!==|$|([!=]==?)|(([\\\\&^|~]\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s+instanceof(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))function((\\\\s+[$_[:alpha:]][$_[:alnum:]]*)|(\\\\s*\\\\())))","patterns":[{"include":"#type"}]},"interface-declaration":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(?:(abstract)\\\\s+)?\\\\b(interface)\\\\b(?=\\\\s+|/[*/])","beginCaptures":{"1":{"name":"keyword.control.export.ts"},"2":{"name":"storage.modifier.ts"},"3":{"name":"storage.modifier.ts"},"4":{"name":"storage.type.interface.ts"}},"end":"(?<=})","name":"meta.interface.ts","patterns":[{"include":"#comment"},{"include":"#class-or-interface-heritage"},{"captures":{"0":{"name":"entity.name.type.interface.ts"}},"match":"[$_[:alpha:]][$_[:alnum:]]*"},{"include":"#type-parameters"},{"include":"#class-or-interface-body"}]},"jsdoctype":{"patterns":[{"begin":"\\\\G(\\\\{)","beginCaptures":{"0":{"name":"entity.name.type.instance.jsdoc"},"1":{"name":"punctuation.definition.bracket.curly.begin.jsdoc"}},"contentName":"entity.name.type.instance.jsdoc","end":"((}))\\\\s*|(?=\\\\*/)","endCaptures":{"1":{"name":"entity.name.type.instance.jsdoc"},"2":{"name":"punctuation.definition.bracket.curly.end.jsdoc"}},"patterns":[{"include":"#brackets"}]}]},"label":{"patterns":[{"begin":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(:)(?=\\\\s*\\\\{)","beginCaptures":{"1":{"name":"entity.name.label.ts"},"2":{"name":"punctuation.separator.label.ts"}},"end":"(?<=})","patterns":[{"include":"#decl-block"}]},{"captures":{"1":{"name":"entity.name.label.ts"},"2":{"name":"punctuation.separator.label.ts"}},"match":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(:)"}]},"literal":{"patterns":[{"include":"#numeric-literal"},{"include":"#boolean-literal"},{"include":"#null-literal"},{"include":"#undefined-literal"},{"include":"#numericConstant-literal"},{"include":"#array-literal"},{"include":"#this-literal"},{"include":"#super-literal"}]},"method-declaration":{"patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(override)\\\\s+)?(?:\\\\b(p(?:ublic|rivate|rotected))\\\\s+)?(?:\\\\b(abstract)\\\\s+)?(?:\\\\b(async)\\\\s+)?\\\\s*\\\\b(constructor)\\\\b(?!:)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"1":{"name":"storage.modifier.ts"},"2":{"name":"storage.modifier.ts"},"3":{"name":"storage.modifier.ts"},"4":{"name":"storage.modifier.async.ts"},"5":{"name":"storage.type.ts"}},"end":"(?=[,;}]|$)|(?<=})","name":"meta.method.declaration.ts","patterns":[{"include":"#method-declaration-name"},{"include":"#function-body"}]},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(override)\\\\s+)?(?:\\\\b(p(?:ublic|rivate|rotected))\\\\s+)?(?:\\\\b(abstract)\\\\s+)?(?:\\\\b(async)\\\\s+)?(?:\\\\s*\\\\b(new)\\\\b(?!:)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))|(?:(\\\\*)\\\\s*)?)(?=\\\\s*((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*))?\\\\()","beginCaptures":{"1":{"name":"storage.modifier.ts"},"2":{"name":"storage.modifier.ts"},"3":{"name":"storage.modifier.ts"},"4":{"name":"storage.modifier.async.ts"},"5":{"name":"keyword.operator.new.ts"},"6":{"name":"keyword.generator.asterisk.ts"}},"end":"(?=[,;}]|$)|(?<=})","name":"meta.method.declaration.ts","patterns":[{"include":"#method-declaration-name"},{"include":"#function-body"}]},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(override)\\\\s+)?(?:\\\\b(p(?:ublic|rivate|rotected))\\\\s+)?(?:\\\\b(abstract)\\\\s+)?(?:\\\\b(async)\\\\s+)?(?:\\\\b([gs]et)\\\\s+)?(?:(\\\\*)\\\\s*)?(?=\\\\s*((\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(\\\\??))\\\\s*((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*))?\\\\()","beginCaptures":{"1":{"name":"storage.modifier.ts"},"2":{"name":"storage.modifier.ts"},"3":{"name":"storage.modifier.ts"},"4":{"name":"storage.modifier.async.ts"},"5":{"name":"storage.type.property.ts"},"6":{"name":"keyword.generator.asterisk.ts"}},"end":"(?=[,;}]|$)|(?<=})","name":"meta.method.declaration.ts","patterns":[{"include":"#method-declaration-name"},{"include":"#function-body"}]}]},"method-declaration-name":{"begin":"(?=(\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(\\\\??)\\\\s*[(<])","end":"(?=[(<])","patterns":[{"include":"#string"},{"include":"#array-literal"},{"include":"#numeric-literal"},{"match":"[$_[:alpha:]][$_[:alnum:]]*","name":"meta.definition.method.ts entity.name.function.ts"},{"match":"\\\\?","name":"keyword.operator.optional.ts"}]},"namespace-declaration":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(namespace|module)\\\\s+(?=[\\"$\'_`[:alpha:]])","beginCaptures":{"1":{"name":"keyword.control.export.ts"},"2":{"name":"storage.modifier.ts"},"3":{"name":"storage.type.namespace.ts"}},"end":"(?<=})|(?=;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","name":"meta.namespace.declaration.ts","patterns":[{"include":"#comment"},{"include":"#string"},{"match":"([$_[:alpha:]][$_[:alnum:]]*)","name":"entity.name.type.module.ts"},{"include":"#punctuation-accessor"},{"include":"#decl-block"}]},"new-expr":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(new)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"1":{"name":"keyword.operator.new.ts"}},"end":"(?<=\\\\))|(?=[-\\\\])+,:;>?}]|\\\\|\\\\||&&|!==|$|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))new(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))function((\\\\s+[$_[:alpha:]][$_[:alnum:]]*)|(\\\\s*\\\\())))","name":"new.expr.ts","patterns":[{"include":"#expression"}]},"null-literal":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))null(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"constant.language.null.ts"},"numeric-literal":{"patterns":[{"captures":{"1":{"name":"storage.type.numeric.bigint.ts"}},"match":"\\\\b(?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$)","name":"constant.numeric.hex.ts"},{"captures":{"1":{"name":"storage.type.numeric.bigint.ts"}},"match":"\\\\b(?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$)","name":"constant.numeric.binary.ts"},{"captures":{"1":{"name":"storage.type.numeric.bigint.ts"}},"match":"\\\\b(?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$)","name":"constant.numeric.octal.ts"},{"captures":{"0":{"name":"constant.numeric.decimal.ts"},"1":{"name":"meta.delimiter.decimal.period.ts"},"2":{"name":"storage.type.numeric.bigint.ts"},"3":{"name":"meta.delimiter.decimal.period.ts"},"4":{"name":"storage.type.numeric.bigint.ts"},"5":{"name":"meta.delimiter.decimal.period.ts"},"6":{"name":"storage.type.numeric.bigint.ts"},"7":{"name":"storage.type.numeric.bigint.ts"},"8":{"name":"meta.delimiter.decimal.period.ts"},"9":{"name":"storage.type.numeric.bigint.ts"},"10":{"name":"meta.delimiter.decimal.period.ts"},"11":{"name":"storage.type.numeric.bigint.ts"},"12":{"name":"meta.delimiter.decimal.period.ts"},"13":{"name":"storage.type.numeric.bigint.ts"},"14":{"name":"storage.type.numeric.bigint.ts"}},"match":"(?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$)"}]},"numericConstant-literal":{"patterns":[{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))NaN(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"constant.language.nan.ts"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))Infinity(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"constant.language.infinity.ts"}]},"object-binding-element":{"patterns":[{"include":"#comment"},{"begin":"(?=(\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(:))","end":"(?=[,}])","patterns":[{"include":"#object-binding-element-propertyName"},{"include":"#binding-element"}]},{"include":"#object-binding-pattern"},{"include":"#destructuring-variable-rest"},{"include":"#variable-initializer"},{"include":"#punctuation-comma"}]},"object-binding-element-const":{"patterns":[{"include":"#comment"},{"begin":"(?=(\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(:))","end":"(?=[,}])","patterns":[{"include":"#object-binding-element-propertyName"},{"include":"#binding-element-const"}]},{"include":"#object-binding-pattern-const"},{"include":"#destructuring-variable-rest-const"},{"include":"#variable-initializer"},{"include":"#punctuation-comma"}]},"object-binding-element-propertyName":{"begin":"(?=(\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(:))","end":"(:)","endCaptures":{"0":{"name":"punctuation.destructuring.ts"}},"patterns":[{"include":"#string"},{"include":"#array-literal"},{"include":"#numeric-literal"},{"match":"([$_[:alpha:]][$_[:alnum:]]*)","name":"variable.object.property.ts"}]},"object-binding-pattern":{"begin":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\{)","beginCaptures":{"1":{"name":"keyword.operator.rest.ts"},"2":{"name":"punctuation.definition.binding-pattern.object.ts"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.binding-pattern.object.ts"}},"patterns":[{"include":"#object-binding-element"}]},"object-binding-pattern-const":{"begin":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\{)","beginCaptures":{"1":{"name":"keyword.operator.rest.ts"},"2":{"name":"punctuation.definition.binding-pattern.object.ts"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.binding-pattern.object.ts"}},"patterns":[{"include":"#object-binding-element-const"}]},"object-identifiers":{"patterns":[{"match":"([$_[:alpha:]][$_[:alnum:]]*)(?=\\\\s*\\\\??\\\\.\\\\s*prototype\\\\b(?!\\\\$))","name":"support.class.ts"},{"captures":{"1":{"name":"punctuation.accessor.ts"},"2":{"name":"punctuation.accessor.optional.ts"},"3":{"name":"variable.other.constant.object.property.ts"},"4":{"name":"variable.other.object.property.ts"}},"match":"(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*(?:(#?\\\\p{upper}[$_\\\\d[:upper:]]*)|(#?[$_[:alpha:]][$_[:alnum:]]*))(?=\\\\s*\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*)"},{"captures":{"1":{"name":"variable.other.constant.object.ts"},"2":{"name":"variable.other.object.ts"}},"match":"(?:(\\\\p{upper}[$_\\\\d[:upper:]]*)|([$_[:alpha:]][$_[:alnum:]]*))(?=\\\\s*\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*)"}]},"object-literal":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.block.ts"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.ts"}},"name":"meta.objectliteral.ts","patterns":[{"include":"#object-member"}]},"object-literal-method-declaration":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(async)\\\\s+)?(?:\\\\b([gs]et)\\\\s+)?(?:(\\\\*)\\\\s*)?(?=\\\\s*((\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(\\\\??))\\\\s*((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*))?\\\\()","beginCaptures":{"1":{"name":"storage.modifier.async.ts"},"2":{"name":"storage.type.property.ts"},"3":{"name":"keyword.generator.asterisk.ts"}},"end":"(?=[,;}])|(?<=})","name":"meta.method.declaration.ts","patterns":[{"include":"#method-declaration-name"},{"include":"#function-body"},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(async)\\\\s+)?(?:\\\\b([gs]et)\\\\s+)?(?:(\\\\*)\\\\s*)?(?=\\\\s*((\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(\\\\??))\\\\s*((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*))?\\\\()","beginCaptures":{"1":{"name":"storage.modifier.async.ts"},"2":{"name":"storage.type.property.ts"},"3":{"name":"keyword.generator.asterisk.ts"}},"end":"(?=[(<])","patterns":[{"include":"#method-declaration-name"}]}]},"object-member":{"patterns":[{"include":"#comment"},{"include":"#object-literal-method-declaration"},{"begin":"(?=\\\\[)","end":"(?=:)|((?<=])(?=\\\\s*[(<]))","name":"meta.object.member.ts meta.object-literal.key.ts","patterns":[{"include":"#comment"},{"include":"#array-literal"}]},{"begin":"(?=[\\"\'`])","end":"(?=:)|((?<=[\\"\'`])(?=((\\\\s*[(,<}])|(\\\\s+(as|satisifies)\\\\s+))))","name":"meta.object.member.ts meta.object-literal.key.ts","patterns":[{"include":"#comment"},{"include":"#string"}]},{"begin":"(?=\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$)))","end":"(?=:)|(?=\\\\s*([(,<}])|(\\\\s+as|satisifies\\\\s+))","name":"meta.object.member.ts meta.object-literal.key.ts","patterns":[{"include":"#comment"},{"include":"#numeric-literal"}]},{"begin":"(?<=[]\\"\'`])(?=\\\\s*[(<])","end":"(?=[,;}])|(?<=})","name":"meta.method.declaration.ts","patterns":[{"include":"#function-body"}]},{"captures":{"0":{"name":"meta.object-literal.key.ts"},"1":{"name":"constant.numeric.decimal.ts"}},"match":"(?![$_[:alpha:]])(\\\\d+)\\\\s*(?=(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*:)","name":"meta.object.member.ts"},{"captures":{"0":{"name":"meta.object-literal.key.ts"},"1":{"name":"entity.name.function.ts"}},"match":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?=(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*:(\\\\s*/\\\\*([^*]|(\\\\*[^/]))*\\\\*/)*\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"\'()`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))))","name":"meta.object.member.ts"},{"captures":{"0":{"name":"meta.object-literal.key.ts"}},"match":"[$_[:alpha:]][$_[:alnum:]]*\\\\s*(?=(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*:)","name":"meta.object.member.ts"},{"begin":"\\\\.\\\\.\\\\.","beginCaptures":{"0":{"name":"keyword.operator.spread.ts"}},"end":"(?=[,}])","name":"meta.object.member.ts","patterns":[{"include":"#expression"}]},{"captures":{"1":{"name":"variable.other.readwrite.ts"}},"match":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?=[,}]|$|//|/\\\\*)","name":"meta.object.member.ts"},{"captures":{"1":{"name":"keyword.control.as.ts"},"2":{"name":"storage.modifier.ts"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(as)\\\\s+(const)(?=\\\\s*([,}]|$))","name":"meta.object.member.ts"},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(as)|(satisfies))\\\\s+","beginCaptures":{"1":{"name":"keyword.control.as.ts"},"2":{"name":"keyword.control.satisfies.ts"}},"end":"(?=[-\\\\])+,:;>?}]|\\\\|\\\\||&&|!==|$|^|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(as|satisifies)\\\\s+))","name":"meta.object.member.ts","patterns":[{"include":"#type"}]},{"begin":"(?=[$_[:alpha:]][$_[:alnum:]]*\\\\s*=)","end":"(?=[,}]|$|//|/\\\\*)","name":"meta.object.member.ts","patterns":[{"include":"#expression"}]},{"begin":":","beginCaptures":{"0":{"name":"meta.object-literal.key.ts punctuation.separator.key-value.ts"}},"end":"(?=[,}])","name":"meta.object.member.ts","patterns":[{"begin":"(?<=:)\\\\s*(async)?(?=\\\\s*(<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))","beginCaptures":{"1":{"name":"storage.modifier.async.ts"}},"end":"(?<=\\\\))","patterns":[{"include":"#type-parameters"},{"begin":"\\\\(","beginCaptures":{"0":{"name":"meta.brace.round.ts"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.ts"}},"patterns":[{"include":"#expression-inside-possibly-arrow-parens"}]}]},{"begin":"(?<=:)\\\\s*(async)?\\\\s*(\\\\()(?=\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))","beginCaptures":{"1":{"name":"storage.modifier.async.ts"},"2":{"name":"meta.brace.round.ts"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.ts"}},"patterns":[{"include":"#expression-inside-possibly-arrow-parens"}]},{"begin":"(?<=:)\\\\s*(async)?\\\\s*(?=<\\\\s*$)","beginCaptures":{"1":{"name":"storage.modifier.async.ts"}},"end":"(?<=>)","patterns":[{"include":"#type-parameters"}]},{"begin":"(?<=>)\\\\s*(\\\\()(?=\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))","beginCaptures":{"1":{"name":"meta.brace.round.ts"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.ts"}},"patterns":[{"include":"#expression-inside-possibly-arrow-parens"}]},{"include":"#possibly-arrow-return-type"},{"include":"#expression"}]},{"include":"#punctuation-comma"},{"include":"#decl-block"}]},"parameter-array-binding-pattern":{"begin":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\[)","beginCaptures":{"1":{"name":"keyword.operator.rest.ts"},"2":{"name":"punctuation.definition.binding-pattern.array.ts"}},"end":"]","endCaptures":{"0":{"name":"punctuation.definition.binding-pattern.array.ts"}},"patterns":[{"include":"#parameter-binding-element"},{"include":"#punctuation-comma"}]},"parameter-binding-element":{"patterns":[{"include":"#comment"},{"include":"#string"},{"include":"#numeric-literal"},{"include":"#regex"},{"include":"#parameter-object-binding-pattern"},{"include":"#parameter-array-binding-pattern"},{"include":"#destructuring-parameter-rest"},{"include":"#variable-initializer"}]},"parameter-name":{"patterns":[{"captures":{"1":{"name":"storage.modifier.ts"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(override|public|protected|private|readonly)\\\\s+(?=(override|public|protected|private|readonly)\\\\s+)"},{"captures":{"1":{"name":"storage.modifier.ts"},"2":{"name":"keyword.operator.rest.ts"},"3":{"name":"entity.name.function.ts variable.language.this.ts"},"4":{"name":"entity.name.function.ts"},"5":{"name":"keyword.operator.optional.ts"}},"match":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(override|public|private|protected|readonly)\\\\s+)?(?:(\\\\.\\\\.\\\\.)\\\\s*)?(?<![:=])(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*(\\\\??)(?=\\\\s*(=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"\'()`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))))|(:\\\\s*((<)|(\\\\(\\\\s*((\\\\))|(\\\\.\\\\.\\\\.)|([$_[:alnum:]]+\\\\s*(([,:=?])|(\\\\)\\\\s*=>)))))))|(:\\\\s*(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))Function(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|(:\\\\s*((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))))|(:\\\\s*(=>|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(<[^<>]*>)|[^(),<=>])+=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"\'()`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>))))))"},{"captures":{"1":{"name":"storage.modifier.ts"},"2":{"name":"keyword.operator.rest.ts"},"3":{"name":"variable.parameter.ts variable.language.this.ts"},"4":{"name":"variable.parameter.ts"},"5":{"name":"keyword.operator.optional.ts"}},"match":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(override|public|private|protected|readonly)\\\\s+)?(?:(\\\\.\\\\.\\\\.)\\\\s*)?(?<![:=])(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*(\\\\??)"}]},"parameter-object-binding-element":{"patterns":[{"include":"#comment"},{"begin":"(?=(\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(:))","end":"(?=[,}])","patterns":[{"include":"#object-binding-element-propertyName"},{"include":"#parameter-binding-element"},{"include":"#paren-expression"}]},{"include":"#parameter-object-binding-pattern"},{"include":"#destructuring-parameter-rest"},{"include":"#variable-initializer"},{"include":"#punctuation-comma"}]},"parameter-object-binding-pattern":{"begin":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\{)","beginCaptures":{"1":{"name":"keyword.operator.rest.ts"},"2":{"name":"punctuation.definition.binding-pattern.object.ts"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.binding-pattern.object.ts"}},"patterns":[{"include":"#parameter-object-binding-element"}]},"parameter-type-annotation":{"patterns":[{"begin":"(:)","beginCaptures":{"1":{"name":"keyword.operator.type.annotation.ts"}},"end":"(?=[),])|(?==[^>])","name":"meta.type.annotation.ts","patterns":[{"include":"#type"}]}]},"paren-expression":{"begin":"\\\\(","beginCaptures":{"0":{"name":"meta.brace.round.ts"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.ts"}},"patterns":[{"include":"#expression"}]},"paren-expression-possibly-arrow":{"patterns":[{"begin":"(?<=[(,=])\\\\s*(async)?(?=\\\\s*((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*))?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))","beginCaptures":{"1":{"name":"storage.modifier.async.ts"}},"end":"(?<=\\\\))","patterns":[{"include":"#paren-expression-possibly-arrow-with-typeparameters"}]},{"begin":"(?<=[(,=]|=>|^return|[^$._[:alnum:]]return)\\\\s*(async)?(?=\\\\s*((((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*))?\\\\()|(<)|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)))\\\\s*$)","beginCaptures":{"1":{"name":"storage.modifier.async.ts"}},"end":"(?<=\\\\))","patterns":[{"include":"#paren-expression-possibly-arrow-with-typeparameters"}]},{"include":"#possibly-arrow-return-type"}]},"paren-expression-possibly-arrow-with-typeparameters":{"patterns":[{"include":"#type-parameters"},{"begin":"\\\\(","beginCaptures":{"0":{"name":"meta.brace.round.ts"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.ts"}},"patterns":[{"include":"#expression-inside-possibly-arrow-parens"}]}]},"possibly-arrow-return-type":{"begin":"(?<=\\\\)|^)\\\\s*(:)(?=\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*=>)","beginCaptures":{"1":{"name":"meta.arrow.ts meta.return.type.arrow.ts keyword.operator.type.annotation.ts"}},"contentName":"meta.arrow.ts meta.return.type.arrow.ts","end":"(?==>|\\\\{|^(\\\\s*(export|function|class|interface|let|var|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|const|import|enum|namespace|module|type|abstract|declare)\\\\s+))","patterns":[{"include":"#arrow-return-type-body"}]},"property-accessor":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(accessor|get|set)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"storage.type.property.ts"},"punctuation-accessor":{"captures":{"1":{"name":"punctuation.accessor.ts"},"2":{"name":"punctuation.accessor.optional.ts"}},"match":"(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d))"},"punctuation-comma":{"match":",","name":"punctuation.separator.comma.ts"},"punctuation-semicolon":{"match":";","name":"punctuation.terminator.statement.ts"},"qstring-double":{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.ts"}},"end":"(\\")|([^\\\\n\\\\\\\\])$","endCaptures":{"1":{"name":"punctuation.definition.string.end.ts"},"2":{"name":"invalid.illegal.newline.ts"}},"name":"string.quoted.double.ts","patterns":[{"include":"#string-character-escape"}]},"qstring-single":{"begin":"\'","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.ts"}},"end":"(\')|([^\\\\n\\\\\\\\])$","endCaptures":{"1":{"name":"punctuation.definition.string.end.ts"},"2":{"name":"invalid.illegal.newline.ts"}},"name":"string.quoted.single.ts","patterns":[{"include":"#string-character-escape"}]},"regex":{"patterns":[{"begin":"(?<!\\\\+\\\\+|--|})(?<=[!(+,:=?\\\\[]|^return|[^$._[:alnum:]]return|^case|[^$._[:alnum:]]case|=>|&&|\\\\|\\\\||\\\\*/)\\\\s*(/)(?![*/])(?=(?:[^()/\\\\[\\\\\\\\]|\\\\\\\\.|\\\\[([^]\\\\\\\\]|\\\\\\\\.)+]|\\\\(([^)\\\\\\\\]|\\\\\\\\.)+\\\\))+/([dgimsuvy]+|(?![*/])|(?=/\\\\*))(?!\\\\s*[$0-9A-Z_a-z]))","beginCaptures":{"1":{"name":"punctuation.definition.string.begin.ts"}},"end":"(/)([dgimsuvy]*)","endCaptures":{"1":{"name":"punctuation.definition.string.end.ts"},"2":{"name":"keyword.other.ts"}},"name":"string.regexp.ts","patterns":[{"include":"#regexp"}]},{"begin":"((?<![]$)_[:alnum:]]|\\\\+\\\\+|--|}|\\\\*/)|((?<=^return|[^$._[:alnum:]]return|^case|[^$._[:alnum:]]case))\\\\s*)/(?![*/])(?=(?:[^/\\\\[\\\\\\\\]|\\\\\\\\.|\\\\[([^]\\\\\\\\]|\\\\\\\\.)*])+/([dgimsuvy]+|(?![*/])|(?=/\\\\*))(?!\\\\s*[$0-9A-Z_a-z]))","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.ts"}},"end":"(/)([dgimsuvy]*)","endCaptures":{"1":{"name":"punctuation.definition.string.end.ts"},"2":{"name":"keyword.other.ts"}},"name":"string.regexp.ts","patterns":[{"include":"#regexp"}]}]},"regex-character-class":{"patterns":[{"match":"\\\\\\\\[DSWdfnrstvw]|\\\\.","name":"constant.other.character-class.regexp"},{"match":"\\\\\\\\([0-7]{3}|x\\\\h{2}|u\\\\h{4})","name":"constant.character.numeric.regexp"},{"match":"\\\\\\\\c[A-Z]","name":"constant.character.control.regexp"},{"match":"\\\\\\\\.","name":"constant.character.escape.backslash.regexp"}]},"regexp":{"patterns":[{"match":"\\\\\\\\[Bb]|[$^]","name":"keyword.control.anchor.regexp"},{"captures":{"0":{"name":"keyword.other.back-reference.regexp"},"1":{"name":"variable.other.regexp"}},"match":"\\\\\\\\(?:[1-9]\\\\d*|k<([$A-Z_a-z][$\\\\w]*)>)"},{"match":"[*+?]|\\\\{(\\\\d+,\\\\d+|\\\\d+,|,\\\\d+|\\\\d+)}\\\\??","name":"keyword.operator.quantifier.regexp"},{"match":"\\\\|","name":"keyword.operator.or.regexp"},{"begin":"(\\\\()((\\\\?=)|(\\\\?!)|(\\\\?<=)|(\\\\?<!))","beginCaptures":{"1":{"name":"punctuation.definition.group.regexp"},"2":{"name":"punctuation.definition.group.assertion.regexp"},"3":{"name":"meta.assertion.look-ahead.regexp"},"4":{"name":"meta.assertion.negative-look-ahead.regexp"},"5":{"name":"meta.assertion.look-behind.regexp"},"6":{"name":"meta.assertion.negative-look-behind.regexp"}},"end":"(\\\\))","endCaptures":{"1":{"name":"punctuation.definition.group.regexp"}},"name":"meta.group.assertion.regexp","patterns":[{"include":"#regexp"}]},{"begin":"\\\\((?:(\\\\?:)|\\\\?<([$A-Z_a-z][$\\\\w]*)>)?","beginCaptures":{"0":{"name":"punctuation.definition.group.regexp"},"1":{"name":"punctuation.definition.group.no-capture.regexp"},"2":{"name":"variable.other.regexp"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.definition.group.regexp"}},"name":"meta.group.regexp","patterns":[{"include":"#regexp"}]},{"begin":"(\\\\[)(\\\\^)?","beginCaptures":{"1":{"name":"punctuation.definition.character-class.regexp"},"2":{"name":"keyword.operator.negation.regexp"}},"end":"(])","endCaptures":{"1":{"name":"punctuation.definition.character-class.regexp"}},"name":"constant.other.character-class.set.regexp","patterns":[{"captures":{"1":{"name":"constant.character.numeric.regexp"},"2":{"name":"constant.character.control.regexp"},"3":{"name":"constant.character.escape.backslash.regexp"},"4":{"name":"constant.character.numeric.regexp"},"5":{"name":"constant.character.control.regexp"},"6":{"name":"constant.character.escape.backslash.regexp"}},"match":"(?:.|(\\\\\\\\(?:[0-7]{3}|x\\\\h{2}|u\\\\h{4}))|(\\\\\\\\c[A-Z])|(\\\\\\\\.))-(?:[^]\\\\\\\\]|(\\\\\\\\(?:[0-7]{3}|x\\\\h{2}|u\\\\h{4}))|(\\\\\\\\c[A-Z])|(\\\\\\\\.))","name":"constant.other.character-class.range.regexp"},{"include":"#regex-character-class"}]},{"include":"#regex-character-class"}]},"return-type":{"patterns":[{"begin":"(?<=\\\\))\\\\s*(:)(?=\\\\s*\\\\S)","beginCaptures":{"1":{"name":"keyword.operator.type.annotation.ts"}},"end":"(?<![\\\\&:|])(?=$|^|[,;{}]|//)","name":"meta.return.type.ts","patterns":[{"include":"#return-type-core"}]},{"begin":"(?<=\\\\))\\\\s*(:)","beginCaptures":{"1":{"name":"keyword.operator.type.annotation.ts"}},"end":"(?<![\\\\&:|])((?=[,;{}]|//|^\\\\s*$)|((?<=\\\\S)(?=\\\\s*$)))","name":"meta.return.type.ts","patterns":[{"include":"#return-type-core"}]}]},"return-type-core":{"patterns":[{"include":"#comment"},{"begin":"(?<=[\\\\&:|])(?=\\\\s*\\\\{)","end":"(?<=})","patterns":[{"include":"#type-object"}]},{"include":"#type-predicate-operator"},{"include":"#type"}]},"shebang":{"captures":{"1":{"name":"punctuation.definition.comment.ts"}},"match":"\\\\A(#!).*(?=$)","name":"comment.line.shebang.ts"},"single-line-comment-consuming-line-ending":{"begin":"(^[\\\\t ]+)?((//)(?:\\\\s*((@)internal)(?=\\\\s|$))?)","beginCaptures":{"1":{"name":"punctuation.whitespace.comment.leading.ts"},"2":{"name":"comment.line.double-slash.ts"},"3":{"name":"punctuation.definition.comment.ts"},"4":{"name":"storage.type.internaldeclaration.ts"},"5":{"name":"punctuation.decorator.internaldeclaration.ts"}},"contentName":"comment.line.double-slash.ts","end":"(?=^)"},"statements":{"patterns":[{"include":"#declaration"},{"include":"#control-statement"},{"include":"#after-operator-block-as-object-literal"},{"include":"#decl-block"},{"include":"#label"},{"include":"#expression"},{"include":"#punctuation-semicolon"},{"include":"#string"},{"include":"#comment"}]},"string":{"patterns":[{"include":"#qstring-single"},{"include":"#qstring-double"},{"include":"#template"}]},"string-character-escape":{"match":"\\\\\\\\(x\\\\h{2}|u\\\\h{4}|u\\\\{\\\\h+}|[012][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.|$)","name":"constant.character.escape.ts"},"super-literal":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))super\\\\b(?!\\\\$)","name":"variable.language.super.ts"},"support-function-call-identifiers":{"patterns":[{"include":"#literal"},{"include":"#support-objects"},{"include":"#object-identifiers"},{"include":"#punctuation-accessor"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))import(?=\\\\s*\\\\(\\\\s*[\\"\'`])","name":"keyword.operator.expression.import.ts"}]},"support-objects":{"patterns":[{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(arguments)\\\\b(?!\\\\$)","name":"variable.language.arguments.ts"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(Promise)\\\\b(?!\\\\$)","name":"support.class.promise.ts"},{"captures":{"1":{"name":"keyword.control.import.ts"},"2":{"name":"punctuation.accessor.ts"},"3":{"name":"punctuation.accessor.optional.ts"},"4":{"name":"support.variable.property.importmeta.ts"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(import)\\\\s*(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*(meta)\\\\b(?!\\\\$)"},{"captures":{"1":{"name":"keyword.operator.new.ts"},"2":{"name":"punctuation.accessor.ts"},"3":{"name":"punctuation.accessor.optional.ts"},"4":{"name":"support.variable.property.target.ts"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(new)\\\\s*(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*(target)\\\\b(?!\\\\$)"},{"captures":{"1":{"name":"punctuation.accessor.ts"},"2":{"name":"punctuation.accessor.optional.ts"},"3":{"name":"support.variable.property.ts"},"4":{"name":"support.constant.ts"}},"match":"(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*(?:(constructor|length|prototype|__proto__)\\\\b(?!\\\\$|\\\\s*(<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\()|(EPSILON|MAX_SAFE_INTEGER|MAX_VALUE|MIN_SAFE_INTEGER|MIN_VALUE|NEGATIVE_INFINITY|POSITIVE_INFINITY)\\\\b(?!\\\\$))"},{"captures":{"1":{"name":"support.type.object.module.ts"},"2":{"name":"support.type.object.module.ts"},"3":{"name":"punctuation.accessor.ts"},"4":{"name":"punctuation.accessor.optional.ts"},"5":{"name":"support.type.object.module.ts"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(exports)|(module)(?:(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))(exports|id|filename|loaded|parent|children))?)\\\\b(?!\\\\$)"}]},"switch-statement":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?=\\\\bswitch\\\\s*\\\\()","end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.ts"}},"name":"switch-statement.expr.ts","patterns":[{"include":"#comment"},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(switch)\\\\s*(\\\\()","beginCaptures":{"1":{"name":"keyword.control.switch.ts"},"2":{"name":"meta.brace.round.ts"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.ts"}},"name":"switch-expression.expr.ts","patterns":[{"include":"#expression"}]},{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.block.ts"}},"end":"(?=})","name":"switch-block.expr.ts","patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(case|default(?=:))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"1":{"name":"keyword.control.switch.ts"}},"end":"(?=:)","name":"case-clause.expr.ts","patterns":[{"include":"#expression"}]},{"begin":"(:)\\\\s*(\\\\{)","beginCaptures":{"1":{"name":"case-clause.expr.ts punctuation.definition.section.case-statement.ts"},"2":{"name":"meta.block.ts punctuation.definition.block.ts"}},"contentName":"meta.block.ts","end":"}","endCaptures":{"0":{"name":"meta.block.ts punctuation.definition.block.ts"}},"patterns":[{"include":"#statements"}]},{"captures":{"0":{"name":"case-clause.expr.ts punctuation.definition.section.case-statement.ts"}},"match":"(:)"},{"include":"#statements"}]}]},"template":{"patterns":[{"include":"#template-call"},{"begin":"([$_[:alpha:]][$_[:alnum:]]*)?(`)","beginCaptures":{"1":{"name":"entity.name.function.tagged-template.ts"},"2":{"name":"string.template.ts punctuation.definition.string.template.begin.ts"}},"contentName":"string.template.ts","end":"`","endCaptures":{"0":{"name":"string.template.ts punctuation.definition.string.template.end.ts"}},"patterns":[{"include":"#template-substitution-element"},{"include":"#string-character-escape"}]}]},"template-call":{"patterns":[{"begin":"(?=(([$_[:alpha:]][$_[:alnum:]]*\\\\s*\\\\??\\\\.\\\\s*)*|(\\\\??\\\\.\\\\s*)?)([$_[:alpha:]][$_[:alnum:]]*)(<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))(([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>)*(?<!=)>))*(?<!=)>)*(?<!=)>\\\\s*)?`)","end":"(?=`)","patterns":[{"begin":"(?=(([$_[:alpha:]][$_[:alnum:]]*\\\\s*\\\\??\\\\.\\\\s*)*|(\\\\??\\\\.\\\\s*)?)([$_[:alpha:]][$_[:alnum:]]*))","end":"(?=(<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))(([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>)*(?<!=)>))*(?<!=)>)*(?<!=)>\\\\s*)?`)","patterns":[{"include":"#support-function-call-identifiers"},{"match":"([$_[:alpha:]][$_[:alnum:]]*)","name":"entity.name.function.tagged-template.ts"}]},{"include":"#type-arguments"}]},{"begin":"([$_[:alpha:]][$_[:alnum:]]*)?\\\\s*(?=(<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))(([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>)*(?<!=)>))*(?<!=)>)*(?<!=)>\\\\s*)`)","beginCaptures":{"1":{"name":"entity.name.function.tagged-template.ts"}},"end":"(?=`)","patterns":[{"include":"#type-arguments"}]}]},"template-substitution-element":{"begin":"\\\\$\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.template-expression.begin.ts"}},"contentName":"meta.embedded.line.ts","end":"}","endCaptures":{"0":{"name":"punctuation.definition.template-expression.end.ts"}},"name":"meta.template.expression.ts","patterns":[{"include":"#expression"}]},"template-type":{"patterns":[{"include":"#template-call"},{"begin":"([$_[:alpha:]][$_[:alnum:]]*)?(`)","beginCaptures":{"1":{"name":"entity.name.function.tagged-template.ts"},"2":{"name":"string.template.ts punctuation.definition.string.template.begin.ts"}},"contentName":"string.template.ts","end":"`","endCaptures":{"0":{"name":"string.template.ts punctuation.definition.string.template.end.ts"}},"patterns":[{"include":"#template-type-substitution-element"},{"include":"#string-character-escape"}]}]},"template-type-substitution-element":{"begin":"\\\\$\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.template-expression.begin.ts"}},"contentName":"meta.embedded.line.ts","end":"}","endCaptures":{"0":{"name":"punctuation.definition.template-expression.end.ts"}},"name":"meta.template.expression.ts","patterns":[{"include":"#type"}]},"ternary-expression":{"begin":"(?!\\\\?\\\\.\\\\s*\\\\D)(\\\\?)(?!\\\\?)","beginCaptures":{"1":{"name":"keyword.operator.ternary.ts"}},"end":"\\\\s*(:)","endCaptures":{"1":{"name":"keyword.operator.ternary.ts"}},"patterns":[{"include":"#expression"}]},"this-literal":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))this\\\\b(?!\\\\$)","name":"variable.language.this.ts"},"type":{"patterns":[{"include":"#comment"},{"include":"#type-string"},{"include":"#numeric-literal"},{"include":"#type-primitive"},{"include":"#type-builtin-literals"},{"include":"#type-parameters"},{"include":"#type-tuple"},{"include":"#type-object"},{"include":"#type-operators"},{"include":"#type-conditional"},{"include":"#type-fn-type-parameters"},{"include":"#type-paren-or-function-parameters"},{"include":"#type-function-return-type"},{"captures":{"1":{"name":"storage.modifier.ts"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(readonly)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*"},{"include":"#type-name"}]},"type-alias-declaration":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(type)\\\\b\\\\s+([$_[:alpha:]][$_[:alnum:]]*)\\\\s*","beginCaptures":{"1":{"name":"keyword.control.export.ts"},"2":{"name":"storage.modifier.ts"},"3":{"name":"storage.type.type.ts"},"4":{"name":"entity.name.type.alias.ts"}},"end":"(?=[;}]|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","name":"meta.type.declaration.ts","patterns":[{"include":"#comment"},{"include":"#type-parameters"},{"begin":"(=)\\\\s*(intrinsic)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"1":{"name":"keyword.operator.assignment.ts"},"2":{"name":"keyword.control.intrinsic.ts"}},"end":"(?=[;}]|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","patterns":[{"include":"#type"}]},{"begin":"(=)\\\\s*","beginCaptures":{"1":{"name":"keyword.operator.assignment.ts"}},"end":"(?=[;}]|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","patterns":[{"include":"#type"}]}]},"type-annotation":{"patterns":[{"begin":"(:)(?=\\\\s*\\\\S)","beginCaptures":{"1":{"name":"keyword.operator.type.annotation.ts"}},"end":"(?<![\\\\&:|])(?!\\\\s*[\\\\&|]\\\\s+)((?=^|[]),;}]|//)|(?==[^>])|((?<=[]$)>_}[:alpha:]])\\\\s*(?=\\\\{)))","name":"meta.type.annotation.ts","patterns":[{"include":"#type"}]},{"begin":"(:)","beginCaptures":{"1":{"name":"keyword.operator.type.annotation.ts"}},"end":"(?<![\\\\&:|])((?=[]),;}]|//)|(?==[^>])|(?=^\\\\s*$)|((?<=[]$)>_}[:alpha:]])\\\\s*(?=\\\\{)))","name":"meta.type.annotation.ts","patterns":[{"include":"#type"}]}]},"type-arguments":{"begin":"<","beginCaptures":{"0":{"name":"punctuation.definition.typeparameters.begin.ts"}},"end":">","endCaptures":{"0":{"name":"punctuation.definition.typeparameters.end.ts"}},"name":"meta.type.parameters.ts","patterns":[{"include":"#type-arguments-body"}]},"type-arguments-body":{"patterns":[{"captures":{"0":{"name":"keyword.operator.type.ts"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(_)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))"},{"include":"#type"},{"include":"#punctuation-comma"}]},"type-builtin-literals":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(this|true|false|undefined|null|object)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"support.type.builtin.ts"},"type-conditional":{"patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(extends)\\\\s+","beginCaptures":{"1":{"name":"storage.modifier.ts"}},"end":"(?<=:)","patterns":[{"begin":"\\\\?","beginCaptures":{"0":{"name":"keyword.operator.ternary.ts"}},"end":":","endCaptures":{"0":{"name":"keyword.operator.ternary.ts"}},"patterns":[{"include":"#type"}]},{"include":"#type"}]}]},"type-fn-type-parameters":{"patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(abstract)\\\\s+)?(new)\\\\b(?=\\\\s*<)","beginCaptures":{"1":{"name":"meta.type.constructor.ts storage.modifier.ts"},"2":{"name":"meta.type.constructor.ts keyword.control.new.ts"}},"end":"(?<=>)","patterns":[{"include":"#comment"},{"include":"#type-parameters"}]},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(abstract)\\\\s+)?(new)\\\\b\\\\s*(?=\\\\()","beginCaptures":{"1":{"name":"storage.modifier.ts"},"2":{"name":"keyword.control.new.ts"}},"end":"(?<=\\\\))","name":"meta.type.constructor.ts","patterns":[{"include":"#function-parameters"}]},{"begin":"((?=\\\\(\\\\s*((\\\\))|(\\\\.\\\\.\\\\.)|([$_[:alnum:]]+\\\\s*(([,:=?])|(\\\\)\\\\s*=>))))))","end":"(?<=\\\\))","name":"meta.type.function.ts","patterns":[{"include":"#function-parameters"}]}]},"type-function-return-type":{"patterns":[{"begin":"(=>)(?=\\\\s*\\\\S)","beginCaptures":{"1":{"name":"storage.type.function.arrow.ts"}},"end":"(?<!=>)(?<![\\\\&|])(?=[]),:;=>?{}]|//|$)","name":"meta.type.function.return.ts","patterns":[{"include":"#type-function-return-type-core"}]},{"begin":"=>","beginCaptures":{"0":{"name":"storage.type.function.arrow.ts"}},"end":"(?<!=>)(?<![\\\\&|])((?=[]),:;=>?{}]|//|^\\\\s*$)|((?<=\\\\S)(?=\\\\s*$)))","name":"meta.type.function.return.ts","patterns":[{"include":"#type-function-return-type-core"}]}]},"type-function-return-type-core":{"patterns":[{"include":"#comment"},{"begin":"(?<==>)(?=\\\\s*\\\\{)","end":"(?<=})","patterns":[{"include":"#type-object"}]},{"include":"#type-predicate-operator"},{"include":"#type"}]},"type-infer":{"patterns":[{"captures":{"1":{"name":"keyword.operator.expression.infer.ts"},"2":{"name":"entity.name.type.ts"},"3":{"name":"keyword.operator.expression.extends.ts"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(infer)\\\\s+([$_[:alpha:]][$_[:alnum:]]*)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))(?:\\\\s+(extends)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))?","name":"meta.type.infer.ts"}]},"type-name":{"patterns":[{"begin":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*(<)","captures":{"1":{"name":"entity.name.type.module.ts"},"2":{"name":"punctuation.accessor.ts"},"3":{"name":"punctuation.accessor.optional.ts"},"4":{"name":"meta.type.parameters.ts punctuation.definition.typeparameters.begin.ts"}},"contentName":"meta.type.parameters.ts","end":"(>)","endCaptures":{"1":{"name":"meta.type.parameters.ts punctuation.definition.typeparameters.end.ts"}},"patterns":[{"include":"#type-arguments-body"}]},{"begin":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(<)","beginCaptures":{"1":{"name":"entity.name.type.ts"},"2":{"name":"meta.type.parameters.ts punctuation.definition.typeparameters.begin.ts"}},"contentName":"meta.type.parameters.ts","end":"(>)","endCaptures":{"1":{"name":"meta.type.parameters.ts punctuation.definition.typeparameters.end.ts"}},"patterns":[{"include":"#type-arguments-body"}]},{"captures":{"1":{"name":"entity.name.type.module.ts"},"2":{"name":"punctuation.accessor.ts"},"3":{"name":"punctuation.accessor.optional.ts"}},"match":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))"},{"match":"[$_[:alpha:]][$_[:alnum:]]*","name":"entity.name.type.ts"}]},"type-object":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.block.ts"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.ts"}},"name":"meta.object.type.ts","patterns":[{"include":"#comment"},{"include":"#method-declaration"},{"include":"#indexer-declaration"},{"include":"#indexer-mapped-type-declaration"},{"include":"#field-declaration"},{"include":"#type-annotation"},{"begin":"\\\\.\\\\.\\\\.","beginCaptures":{"0":{"name":"keyword.operator.spread.ts"}},"end":"(?=[,;}]|$)|(?<=})","patterns":[{"include":"#type"}]},{"include":"#punctuation-comma"},{"include":"#punctuation-semicolon"},{"include":"#type"}]},"type-operators":{"patterns":[{"include":"#typeof-operator"},{"include":"#type-infer"},{"begin":"([\\\\&|])(?=\\\\s*\\\\{)","beginCaptures":{"0":{"name":"keyword.operator.type.ts"}},"end":"(?<=})","patterns":[{"include":"#type-object"}]},{"begin":"[\\\\&|]","beginCaptures":{"0":{"name":"keyword.operator.type.ts"}},"end":"(?=\\\\S)"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))keyof(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.operator.expression.keyof.ts"},{"match":"([:?])","name":"keyword.operator.ternary.ts"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))import(?=\\\\s*\\\\()","name":"keyword.operator.expression.import.ts"}]},"type-parameters":{"begin":"(<)","beginCaptures":{"1":{"name":"punctuation.definition.typeparameters.begin.ts"}},"end":"(>)","endCaptures":{"1":{"name":"punctuation.definition.typeparameters.end.ts"}},"name":"meta.type.parameters.ts","patterns":[{"include":"#comment"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(extends|in|out|const)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"storage.modifier.ts"},{"include":"#type"},{"include":"#punctuation-comma"},{"match":"(=)(?!>)","name":"keyword.operator.assignment.ts"}]},"type-paren-or-function-parameters":{"begin":"\\\\(","beginCaptures":{"0":{"name":"meta.brace.round.ts"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.ts"}},"name":"meta.type.paren.cover.ts","patterns":[{"captures":{"1":{"name":"storage.modifier.ts"},"2":{"name":"keyword.operator.rest.ts"},"3":{"name":"entity.name.function.ts variable.language.this.ts"},"4":{"name":"entity.name.function.ts"},"5":{"name":"keyword.operator.optional.ts"}},"match":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(public|private|protected|readonly)\\\\s+)?(?:(\\\\.\\\\.\\\\.)\\\\s*)?(?<![:=])(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))\\\\s*(\\\\??)(?=\\\\s*(:\\\\s*((<)|(\\\\(\\\\s*((\\\\))|(\\\\.\\\\.\\\\.)|([$_[:alnum:]]+\\\\s*(([,:=?])|(\\\\)\\\\s*=>)))))))|(:\\\\s*(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))Function(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|(:\\\\s*((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))))"},{"captures":{"1":{"name":"storage.modifier.ts"},"2":{"name":"keyword.operator.rest.ts"},"3":{"name":"variable.parameter.ts variable.language.this.ts"},"4":{"name":"variable.parameter.ts"},"5":{"name":"keyword.operator.optional.ts"}},"match":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(public|private|protected|readonly)\\\\s+)?(?:(\\\\.\\\\.\\\\.)\\\\s*)?(?<![:=])(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))\\\\s*(\\\\??)(?=:)"},{"include":"#type-annotation"},{"match":",","name":"punctuation.separator.parameter.ts"},{"include":"#type"}]},"type-predicate-operator":{"patterns":[{"captures":{"1":{"name":"keyword.operator.type.asserts.ts"},"2":{"name":"variable.parameter.ts variable.language.this.ts"},"3":{"name":"variable.parameter.ts"},"4":{"name":"keyword.operator.expression.is.ts"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(asserts)\\\\s+)?(?!asserts)(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))\\\\s(is)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))"},{"captures":{"1":{"name":"keyword.operator.type.asserts.ts"},"2":{"name":"variable.parameter.ts variable.language.this.ts"},"3":{"name":"variable.parameter.ts"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(asserts)\\\\s+(?!is)(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))asserts(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.operator.type.asserts.ts"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))is(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.operator.expression.is.ts"}]},"type-primitive":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(string|number|bigint|boolean|symbol|any|void|never|unknown)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"support.type.primitive.ts"},"type-string":{"patterns":[{"include":"#qstring-single"},{"include":"#qstring-double"},{"include":"#template-type"}]},"type-tuple":{"begin":"\\\\[","beginCaptures":{"0":{"name":"meta.brace.square.ts"}},"end":"]","endCaptures":{"0":{"name":"meta.brace.square.ts"}},"name":"meta.type.tuple.ts","patterns":[{"match":"\\\\.\\\\.\\\\.","name":"keyword.operator.rest.ts"},{"captures":{"1":{"name":"entity.name.label.ts"},"2":{"name":"keyword.operator.optional.ts"},"3":{"name":"punctuation.separator.label.ts"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(\\\\?)?\\\\s*(:)"},{"include":"#type"},{"include":"#punctuation-comma"}]},"typeof-operator":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))typeof(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"0":{"name":"keyword.operator.expression.typeof.ts"}},"end":"(?=[]\\\\&),:;=>?{|}]|(extends\\\\s+)|$|;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","patterns":[{"include":"#type-arguments"},{"include":"#expression"}]},"undefined-literal":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))undefined(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"constant.language.undefined.ts"},"var-expr":{"patterns":[{"begin":"(?=(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(var|let)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))","end":"(?!(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(var|let)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))((?=^|[;}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)|((?<!^let|[^$._[:alnum:]]let|^var|[^$._[:alnum:]]var)(?=\\\\s*$)))","name":"meta.var.expr.ts","patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(var|let)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*","beginCaptures":{"1":{"name":"keyword.control.export.ts"},"2":{"name":"storage.modifier.ts"},"3":{"name":"storage.type.ts"}},"end":"(?=\\\\S)"},{"include":"#destructuring-variable"},{"include":"#var-single-variable"},{"include":"#variable-initializer"},{"include":"#comment"},{"begin":"(,)\\\\s*(?=$|//)","beginCaptures":{"1":{"name":"punctuation.separator.comma.ts"}},"end":"(?<!,)(((?=[;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|^\\\\s*$))|((?<=\\\\S)(?=\\\\s*$)))","patterns":[{"include":"#single-line-comment-consuming-line-ending"},{"include":"#comment"},{"include":"#destructuring-variable"},{"include":"#var-single-variable"},{"include":"#punctuation-comma"}]},{"include":"#punctuation-comma"}]},{"begin":"(?=(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(const(?!\\\\s+enum\\\\b))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))","beginCaptures":{"1":{"name":"keyword.control.export.ts"},"2":{"name":"storage.modifier.ts"},"3":{"name":"storage.type.ts"}},"end":"(?!(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(const(?!\\\\s+enum\\\\b))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))((?=^|[;}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)|((?<!(?:^|[^$._[:alnum:]])const)(?=\\\\s*$)))","name":"meta.var.expr.ts","patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(const(?!\\\\s+enum\\\\b))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*","beginCaptures":{"1":{"name":"keyword.control.export.ts"},"2":{"name":"storage.modifier.ts"},"3":{"name":"storage.type.ts"}},"end":"(?=\\\\S)"},{"include":"#destructuring-const"},{"include":"#var-single-const"},{"include":"#variable-initializer"},{"include":"#comment"},{"begin":"(,)\\\\s*(?=$|//)","beginCaptures":{"1":{"name":"punctuation.separator.comma.ts"}},"end":"(?<!,)(((?=[;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|^\\\\s*$))|((?<=\\\\S)(?=\\\\s*$)))","patterns":[{"include":"#single-line-comment-consuming-line-ending"},{"include":"#comment"},{"include":"#destructuring-const"},{"include":"#var-single-const"},{"include":"#punctuation-comma"}]},{"include":"#punctuation-comma"}]},{"begin":"(?=(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b\\\\b(using(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])|await\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b)\\\\b(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))","beginCaptures":{"1":{"name":"keyword.control.export.ts"},"2":{"name":"storage.modifier.ts"},"3":{"name":"storage.type.ts"}},"end":"(?!(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b\\\\b(using(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])|await\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b)\\\\b(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))((?=[;}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)|((?<!(?:^|[^$._[:alnum:]]|^await\\\\s+|[^$._[:alnum:]]await\\\\s+)using)(?=\\\\s*$)))","name":"meta.var.expr.ts","patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b\\\\b(using(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])|await\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b)\\\\b(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*","beginCaptures":{"1":{"name":"keyword.control.export.ts"},"2":{"name":"storage.modifier.ts"},"3":{"name":"storage.type.ts"}},"end":"(?=\\\\S)"},{"include":"#var-single-const"},{"include":"#variable-initializer"},{"include":"#comment"},{"begin":"(,)\\\\s*((?!\\\\S)|(?=//))","beginCaptures":{"1":{"name":"punctuation.separator.comma.ts"}},"end":"(?<!,)(((?=[;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|^\\\\s*$))|((?<=\\\\S)(?=\\\\s*$)))","patterns":[{"include":"#single-line-comment-consuming-line-ending"},{"include":"#comment"},{"include":"#var-single-const"},{"include":"#punctuation-comma"}]},{"include":"#punctuation-comma"}]}]},"var-single-const":{"patterns":[{"begin":"([$_[:alpha:]][$_[:alnum:]]*)(?=\\\\s*(=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"\'()`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))))|(:\\\\s*((<)|(\\\\(\\\\s*((\\\\))|(\\\\.\\\\.\\\\.)|([$_[:alnum:]]+\\\\s*(([,:=?])|(\\\\)\\\\s*=>)))))))|(:\\\\s*(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))Function(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|(:\\\\s*((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))))|(:\\\\s*(=>|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(<[^<>]*>)|[^(),<=>])+=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"\'()`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>))))))","beginCaptures":{"1":{"name":"meta.definition.variable.ts variable.other.constant.ts entity.name.function.ts"}},"end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|(;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b))","name":"meta.var-single-variable.expr.ts","patterns":[{"include":"#var-single-variable-type-annotation"}]},{"begin":"([$_[:alpha:]][$_[:alnum:]]*)","beginCaptures":{"1":{"name":"meta.definition.variable.ts variable.other.constant.ts"}},"end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|(;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b))","name":"meta.var-single-variable.expr.ts","patterns":[{"include":"#var-single-variable-type-annotation"}]}]},"var-single-variable":{"patterns":[{"begin":"([$_[:alpha:]][$_[:alnum:]]*)(!)?(?=\\\\s*(=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"\'()`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))))|(:\\\\s*((<)|(\\\\(\\\\s*((\\\\))|(\\\\.\\\\.\\\\.)|([$_[:alnum:]]+\\\\s*(([,:=?])|(\\\\)\\\\s*=>)))))))|(:\\\\s*(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))Function(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|(:\\\\s*((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))))|(:\\\\s*(=>|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(<[^<>]*>)|[^(),<=>])+=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"\'()`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\'([^\'\\\\\\\\]|\\\\\\\\.)*\')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(`([^\\\\\\\\`]|\\\\\\\\.)*`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>))))))","beginCaptures":{"1":{"name":"meta.definition.variable.ts entity.name.function.ts"},"2":{"name":"keyword.operator.definiteassignment.ts"}},"end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|(;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b))","name":"meta.var-single-variable.expr.ts","patterns":[{"include":"#var-single-variable-type-annotation"}]},{"begin":"(\\\\p{upper}[$_\\\\d[:upper:]]*)(?![$_[:alnum:]])(!)?","beginCaptures":{"1":{"name":"meta.definition.variable.ts variable.other.constant.ts"},"2":{"name":"keyword.operator.definiteassignment.ts"}},"end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|(;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b))","name":"meta.var-single-variable.expr.ts","patterns":[{"include":"#var-single-variable-type-annotation"}]},{"begin":"([$_[:alpha:]][$_[:alnum:]]*)(!)?","beginCaptures":{"1":{"name":"meta.definition.variable.ts variable.other.readwrite.ts"},"2":{"name":"keyword.operator.definiteassignment.ts"}},"end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|(;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b))","name":"meta.var-single-variable.expr.ts","patterns":[{"include":"#var-single-variable-type-annotation"}]}]},"var-single-variable-type-annotation":{"patterns":[{"include":"#type-annotation"},{"include":"#string"},{"include":"#comment"}]},"variable-initializer":{"patterns":[{"begin":"(?<![!=])(=)(?!=)(?=\\\\s*\\\\S)(?!\\\\s*.*=>\\\\s*$)","beginCaptures":{"1":{"name":"keyword.operator.assignment.ts"}},"end":"(?=$|^|[]),;}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+))","patterns":[{"include":"#expression"}]},{"begin":"(?<![!=])(=)(?!=)","beginCaptures":{"1":{"name":"keyword.operator.assignment.ts"}},"end":"(?=[]),;}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+))|(?=^\\\\s*$)|(?<![-\\\\&*+/|])(?<=\\\\S)(?<!=)(?=\\\\s*$)","patterns":[{"include":"#expression"}]}]}},"scopeName":"source.ts","aliases":["ts","cts","mts"]}'));
      typescript_default = [
        lang
      ];
    }
  });

  // node_modules/@shikijs/langs/dist/javascript.mjs
  var javascript_exports = {};
  __export(javascript_exports, {
    default: () => javascript_default
  });
  var lang2, javascript_default;
  var init_javascript = __esm({
    "node_modules/@shikijs/langs/dist/javascript.mjs"() {
      lang2 = Object.freeze(JSON.parse(`{"displayName":"JavaScript","name":"javascript","patterns":[{"include":"#directives"},{"include":"#statements"},{"include":"#shebang"}],"repository":{"access-modifier":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(abstract|declare|override|public|protected|private|readonly|static)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"storage.modifier.js"},"after-operator-block-as-object-literal":{"begin":"(?<!\\\\+\\\\+|--)(?<=[!(+,:=>?\\\\[]|^await|[^$._[:alnum:]]await|^return|[^$._[:alnum:]]return|^yield|[^$._[:alnum:]]yield|^throw|[^$._[:alnum:]]throw|^in|[^$._[:alnum:]]in|^of|[^$._[:alnum:]]of|^typeof|[^$._[:alnum:]]typeof|&&|\\\\|\\\\||\\\\*)\\\\s*(\\\\{)","beginCaptures":{"1":{"name":"punctuation.definition.block.js"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.js"}},"name":"meta.objectliteral.js","patterns":[{"include":"#object-member"}]},"array-binding-pattern":{"begin":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\[)","beginCaptures":{"1":{"name":"keyword.operator.rest.js"},"2":{"name":"punctuation.definition.binding-pattern.array.js"}},"end":"]","endCaptures":{"0":{"name":"punctuation.definition.binding-pattern.array.js"}},"patterns":[{"include":"#binding-element"},{"include":"#punctuation-comma"}]},"array-binding-pattern-const":{"begin":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\[)","beginCaptures":{"1":{"name":"keyword.operator.rest.js"},"2":{"name":"punctuation.definition.binding-pattern.array.js"}},"end":"]","endCaptures":{"0":{"name":"punctuation.definition.binding-pattern.array.js"}},"patterns":[{"include":"#binding-element-const"},{"include":"#punctuation-comma"}]},"array-literal":{"begin":"\\\\s*(\\\\[)","beginCaptures":{"1":{"name":"meta.brace.square.js"}},"end":"]","endCaptures":{"0":{"name":"meta.brace.square.js"}},"name":"meta.array.literal.js","patterns":[{"include":"#expression"},{"include":"#punctuation-comma"}]},"arrow-function":{"patterns":[{"captures":{"1":{"name":"storage.modifier.async.js"},"2":{"name":"variable.parameter.js"}},"match":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))\\\\b(async)\\\\s+)?([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?==>)","name":"meta.arrow.js"},{"begin":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))\\\\b(async))?((?<![]!)}])\\\\s*(?=((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|(<\\\\s*[$_[:alpha:]][$_[:alnum:]]*\\\\s+extends\\\\s*[^=>])|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"'()\`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))","beginCaptures":{"1":{"name":"storage.modifier.async.js"}},"end":"(?==>|\\\\{|^(\\\\s*(export|function|class|interface|let|var|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|const|import|enum|namespace|module|type|abstract|declare)\\\\s+))","name":"meta.arrow.js","patterns":[{"include":"#comment"},{"include":"#type-parameters"},{"include":"#function-parameters"},{"include":"#arrow-return-type"},{"include":"#possibly-arrow-return-type"}]},{"begin":"=>","beginCaptures":{"0":{"name":"storage.type.function.arrow.js"}},"end":"((?<=[}\\\\S])(?<!=>)|((?!\\\\{)(?=\\\\S)))(?!/[*/])","name":"meta.arrow.js","patterns":[{"include":"#single-line-comment-consuming-line-ending"},{"include":"#decl-block"},{"include":"#expression"}]}]},"arrow-return-type":{"begin":"(?<=\\\\))\\\\s*(:)","beginCaptures":{"1":{"name":"keyword.operator.type.annotation.js"}},"end":"(?==>|\\\\{|^(\\\\s*(export|function|class|interface|let|var|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|const|import|enum|namespace|module|type|abstract|declare)\\\\s+))","name":"meta.return.type.arrow.js","patterns":[{"include":"#arrow-return-type-body"}]},"arrow-return-type-body":{"patterns":[{"begin":"(?<=:)(?=\\\\s*\\\\{)","end":"(?<=})","patterns":[{"include":"#type-object"}]},{"include":"#type-predicate-operator"},{"include":"#type"}]},"async-modifier":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(async)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"storage.modifier.async.js"},"binding-element":{"patterns":[{"include":"#comment"},{"include":"#string"},{"include":"#numeric-literal"},{"include":"#regex"},{"include":"#object-binding-pattern"},{"include":"#array-binding-pattern"},{"include":"#destructuring-variable-rest"},{"include":"#variable-initializer"}]},"binding-element-const":{"patterns":[{"include":"#comment"},{"include":"#string"},{"include":"#numeric-literal"},{"include":"#regex"},{"include":"#object-binding-pattern-const"},{"include":"#array-binding-pattern-const"},{"include":"#destructuring-variable-rest-const"},{"include":"#variable-initializer"}]},"boolean-literal":{"patterns":[{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))true(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"constant.language.boolean.true.js"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))false(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"constant.language.boolean.false.js"}]},"brackets":{"patterns":[{"begin":"\\\\{","end":"}|(?=\\\\*/)","patterns":[{"include":"#brackets"}]},{"begin":"\\\\[","end":"]|(?=\\\\*/)","patterns":[{"include":"#brackets"}]}]},"cast":{"patterns":[{"include":"#jsx"}]},"class-declaration":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(?:(abstract)\\\\s+)?\\\\b(class)\\\\b(?=\\\\s+|/[*/])","beginCaptures":{"1":{"name":"keyword.control.export.js"},"2":{"name":"storage.modifier.js"},"3":{"name":"storage.modifier.js"},"4":{"name":"storage.type.class.js"}},"end":"(?<=})","name":"meta.class.js","patterns":[{"include":"#class-declaration-or-expression-patterns"}]},"class-declaration-or-expression-patterns":{"patterns":[{"include":"#comment"},{"include":"#class-or-interface-heritage"},{"captures":{"0":{"name":"entity.name.type.class.js"}},"match":"[$_[:alpha:]][$_[:alnum:]]*"},{"include":"#type-parameters"},{"include":"#class-or-interface-body"}]},"class-expression":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(abstract)\\\\s+)?(class)\\\\b(?=\\\\s+|[<{]|/[*/])","beginCaptures":{"1":{"name":"storage.modifier.js"},"2":{"name":"storage.type.class.js"}},"end":"(?<=})","name":"meta.class.js","patterns":[{"include":"#class-declaration-or-expression-patterns"}]},"class-or-interface-body":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.block.js"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.js"}},"patterns":[{"include":"#comment"},{"include":"#decorator"},{"begin":"(?<=:)\\\\s*","end":"(?=[-\\\\])+,:;}\\\\s]|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","patterns":[{"include":"#expression"}]},{"include":"#method-declaration"},{"include":"#indexer-declaration"},{"include":"#field-declaration"},{"include":"#string"},{"include":"#type-annotation"},{"include":"#variable-initializer"},{"include":"#access-modifier"},{"include":"#property-accessor"},{"include":"#async-modifier"},{"include":"#after-operator-block-as-object-literal"},{"include":"#decl-block"},{"include":"#expression"},{"include":"#punctuation-comma"},{"include":"#punctuation-semicolon"}]},"class-or-interface-heritage":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))\\\\b(extends|implements)\\\\b(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"1":{"name":"storage.modifier.js"}},"end":"(?=\\\\{)","patterns":[{"include":"#comment"},{"include":"#class-or-interface-heritage"},{"include":"#type-parameters"},{"include":"#expressionWithoutIdentifiers"},{"captures":{"1":{"name":"entity.name.type.module.js"},"2":{"name":"punctuation.accessor.js"},"3":{"name":"punctuation.accessor.optional.js"}},"match":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))(?=\\\\s*[$_[:alpha:]][$_[:alnum:]]*(\\\\s*\\\\??\\\\.\\\\s*[$_[:alpha:]][$_[:alnum:]]*)*\\\\s*)"},{"captures":{"1":{"name":"entity.other.inherited-class.js"}},"match":"([$_[:alpha:]][$_[:alnum:]]*)"},{"include":"#expressionPunctuations"}]},"comment":{"patterns":[{"begin":"/\\\\*\\\\*(?!/)","beginCaptures":{"0":{"name":"punctuation.definition.comment.js"}},"end":"\\\\*/","endCaptures":{"0":{"name":"punctuation.definition.comment.js"}},"name":"comment.block.documentation.js","patterns":[{"include":"#docblock"}]},{"begin":"(/\\\\*)(?:\\\\s*((@)internal)(?=\\\\s|(\\\\*/)))?","beginCaptures":{"1":{"name":"punctuation.definition.comment.js"},"2":{"name":"storage.type.internaldeclaration.js"},"3":{"name":"punctuation.decorator.internaldeclaration.js"}},"end":"\\\\*/","endCaptures":{"0":{"name":"punctuation.definition.comment.js"}},"name":"comment.block.js"},{"begin":"(^[\\\\t ]+)?((//)(?:\\\\s*((@)internal)(?=\\\\s|$))?)","beginCaptures":{"1":{"name":"punctuation.whitespace.comment.leading.js"},"2":{"name":"comment.line.double-slash.js"},"3":{"name":"punctuation.definition.comment.js"},"4":{"name":"storage.type.internaldeclaration.js"},"5":{"name":"punctuation.decorator.internaldeclaration.js"}},"contentName":"comment.line.double-slash.js","end":"(?=$)"}]},"control-statement":{"patterns":[{"include":"#switch-statement"},{"include":"#for-loop"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(catch|finally|throw|try)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.control.trycatch.js"},{"captures":{"1":{"name":"keyword.control.loop.js"},"2":{"name":"entity.name.label.js"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(break|continue|goto)\\\\s+([$_[:alpha:]][$_[:alnum:]]*)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(break|continue|do|goto|while)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.control.loop.js"},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(return)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"0":{"name":"keyword.control.flow.js"}},"end":"(?=[;}]|$|;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","patterns":[{"include":"#expression"}]},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(case|default|switch)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.control.switch.js"},{"include":"#if-statement"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(else|if)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.control.conditional.js"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(with)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.control.with.js"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(package)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.control.js"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(debugger)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.other.debugger.js"}]},"decl-block":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.block.js"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.js"}},"name":"meta.block.js","patterns":[{"include":"#statements"}]},"declaration":{"patterns":[{"include":"#decorator"},{"include":"#var-expr"},{"include":"#function-declaration"},{"include":"#class-declaration"},{"include":"#interface-declaration"},{"include":"#enum-declaration"},{"include":"#namespace-declaration"},{"include":"#type-alias-declaration"},{"include":"#import-equals-declaration"},{"include":"#import-declaration"},{"include":"#export-declaration"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(declare|export)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"storage.modifier.js"}]},"decorator":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))@","beginCaptures":{"0":{"name":"punctuation.decorator.js"}},"end":"(?=\\\\s)","name":"meta.decorator.js","patterns":[{"include":"#expression"}]},"destructuring-const":{"patterns":[{"begin":"(?<![:=]|^of|[^$._[:alnum:]]of|^in|[^$._[:alnum:]]in)\\\\s*(?=\\\\{)","end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+))","name":"meta.object-binding-pattern-variable.js","patterns":[{"include":"#object-binding-pattern-const"},{"include":"#type-annotation"},{"include":"#comment"}]},{"begin":"(?<![:=]|^of|[^$._[:alnum:]]of|^in|[^$._[:alnum:]]in)\\\\s*(?=\\\\[)","end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+))","name":"meta.array-binding-pattern-variable.js","patterns":[{"include":"#array-binding-pattern-const"},{"include":"#type-annotation"},{"include":"#comment"}]}]},"destructuring-parameter":{"patterns":[{"begin":"(?<![:=])\\\\s*(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\{)","beginCaptures":{"1":{"name":"keyword.operator.rest.js"},"2":{"name":"punctuation.definition.binding-pattern.object.js"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.binding-pattern.object.js"}},"name":"meta.parameter.object-binding-pattern.js","patterns":[{"include":"#parameter-object-binding-element"}]},{"begin":"(?<![:=])\\\\s*(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\[)","beginCaptures":{"1":{"name":"keyword.operator.rest.js"},"2":{"name":"punctuation.definition.binding-pattern.array.js"}},"end":"]","endCaptures":{"0":{"name":"punctuation.definition.binding-pattern.array.js"}},"name":"meta.paramter.array-binding-pattern.js","patterns":[{"include":"#parameter-binding-element"},{"include":"#punctuation-comma"}]}]},"destructuring-parameter-rest":{"captures":{"1":{"name":"keyword.operator.rest.js"},"2":{"name":"variable.parameter.js"}},"match":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?([$_[:alpha:]][$_[:alnum:]]*)"},"destructuring-variable":{"patterns":[{"begin":"(?<![:=]|^of|[^$._[:alnum:]]of|^in|[^$._[:alnum:]]in)\\\\s*(?=\\\\{)","end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+))","name":"meta.object-binding-pattern-variable.js","patterns":[{"include":"#object-binding-pattern"},{"include":"#type-annotation"},{"include":"#comment"}]},{"begin":"(?<![:=]|^of|[^$._[:alnum:]]of|^in|[^$._[:alnum:]]in)\\\\s*(?=\\\\[)","end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+))","name":"meta.array-binding-pattern-variable.js","patterns":[{"include":"#array-binding-pattern"},{"include":"#type-annotation"},{"include":"#comment"}]}]},"destructuring-variable-rest":{"captures":{"1":{"name":"keyword.operator.rest.js"},"2":{"name":"meta.definition.variable.js variable.other.readwrite.js"}},"match":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?([$_[:alpha:]][$_[:alnum:]]*)"},"destructuring-variable-rest-const":{"captures":{"1":{"name":"keyword.operator.rest.js"},"2":{"name":"meta.definition.variable.js variable.other.constant.js"}},"match":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?([$_[:alpha:]][$_[:alnum:]]*)"},"directives":{"begin":"^(///)\\\\s*(?=<(reference|amd-dependency|amd-module)(\\\\s+(path|types|no-default-lib|lib|name|resolution-mode)\\\\s*=\\\\s*(('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)))+\\\\s*/>\\\\s*$)","beginCaptures":{"1":{"name":"punctuation.definition.comment.js"}},"end":"(?=$)","name":"comment.line.triple-slash.directive.js","patterns":[{"begin":"(<)(reference|amd-dependency|amd-module)","beginCaptures":{"1":{"name":"punctuation.definition.tag.directive.js"},"2":{"name":"entity.name.tag.directive.js"}},"end":"/>","endCaptures":{"0":{"name":"punctuation.definition.tag.directive.js"}},"name":"meta.tag.js","patterns":[{"match":"path|types|no-default-lib|lib|name|resolution-mode","name":"entity.other.attribute-name.directive.js"},{"match":"=","name":"keyword.operator.assignment.js"},{"include":"#string"}]}]},"docblock":{"patterns":[{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"constant.language.access-type.jsdoc"}},"match":"((@)a(?:ccess|pi))\\\\s+(p(?:rivate|rotected|ublic))\\\\b"},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"entity.name.type.instance.jsdoc"},"4":{"name":"punctuation.definition.bracket.angle.begin.jsdoc"},"5":{"name":"constant.other.email.link.underline.jsdoc"},"6":{"name":"punctuation.definition.bracket.angle.end.jsdoc"}},"match":"((@)author)\\\\s+([^*/<>@\\\\s](?:[^*/<>@]|\\\\*[^/])*)(?:\\\\s*(<)([^>\\\\s]+)(>))?"},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"entity.name.type.instance.jsdoc"},"4":{"name":"keyword.operator.control.jsdoc"},"5":{"name":"entity.name.type.instance.jsdoc"}},"match":"((@)borrows)\\\\s+((?:[^*/@\\\\s]|\\\\*[^/])+)\\\\s+(as)\\\\s+((?:[^*/@\\\\s]|\\\\*[^/])+)"},{"begin":"((@)example)\\\\s+","beginCaptures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"}},"end":"(?=@|\\\\*/)","name":"meta.example.jsdoc","patterns":[{"match":"^\\\\s\\\\*\\\\s+"},{"begin":"\\\\G(<)caption(>)","beginCaptures":{"0":{"name":"entity.name.tag.inline.jsdoc"},"1":{"name":"punctuation.definition.bracket.angle.begin.jsdoc"},"2":{"name":"punctuation.definition.bracket.angle.end.jsdoc"}},"contentName":"constant.other.description.jsdoc","end":"(</)caption(>)|(?=\\\\*/)","endCaptures":{"0":{"name":"entity.name.tag.inline.jsdoc"},"1":{"name":"punctuation.definition.bracket.angle.begin.jsdoc"},"2":{"name":"punctuation.definition.bracket.angle.end.jsdoc"}}},{"captures":{"0":{"name":"source.embedded.js"}},"match":"[^*@\\\\s](?:[^*]|\\\\*[^/])*"}]},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"constant.language.symbol-type.jsdoc"}},"match":"((@)kind)\\\\s+(class|constant|event|external|file|function|member|mixin|module|namespace|typedef)\\\\b"},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"variable.other.link.underline.jsdoc"},"4":{"name":"entity.name.type.instance.jsdoc"}},"match":"((@)see)\\\\s+(?:((?=https?://)(?:[^*\\\\s]|\\\\*[^/])+)|((?!https?://|(?:\\\\[[^]\\\\[]*])?\\\\{@(?:link|linkcode|linkplain|tutorial)\\\\b)(?:[^*/@\\\\s]|\\\\*[^/])+))"},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"variable.other.jsdoc"}},"match":"((@)template)\\\\s+([$A-Z_a-z][]$.\\\\[\\\\w]*(?:\\\\s*,\\\\s*[$A-Z_a-z][]$.\\\\[\\\\w]*)*)"},{"begin":"((@)template)\\\\s+(?=\\\\{)","beginCaptures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"}},"end":"(?=\\\\s|\\\\*/|[^]$A-\\\\[_a-{}])","patterns":[{"include":"#jsdoctype"},{"match":"([$A-Z_a-z][]$.\\\\[\\\\w]*)","name":"variable.other.jsdoc"}]},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"variable.other.jsdoc"}},"match":"((@)(?:arg|argument|const|constant|member|namespace|param|var))\\\\s+([$A-Z_a-z][]$.\\\\[\\\\w]*)"},{"begin":"((@)typedef)\\\\s+(?=\\\\{)","beginCaptures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"}},"end":"(?=\\\\s|\\\\*/|[^]$A-\\\\[_a-{}])","patterns":[{"include":"#jsdoctype"},{"match":"(?:[^*/@\\\\s]|\\\\*[^/])+","name":"entity.name.type.instance.jsdoc"}]},{"begin":"((@)(?:arg|argument|const|constant|member|namespace|param|prop|property|var))\\\\s+(?=\\\\{)","beginCaptures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"}},"end":"(?=\\\\s|\\\\*/|[^]$A-\\\\[_a-{}])","patterns":[{"include":"#jsdoctype"},{"match":"([$A-Z_a-z][]$.\\\\[\\\\w]*)","name":"variable.other.jsdoc"},{"captures":{"1":{"name":"punctuation.definition.optional-value.begin.bracket.square.jsdoc"},"2":{"name":"keyword.operator.assignment.jsdoc"},"3":{"name":"source.embedded.js"},"4":{"name":"punctuation.definition.optional-value.end.bracket.square.jsdoc"},"5":{"name":"invalid.illegal.syntax.jsdoc"}},"match":"(\\\\[)\\\\s*[$\\\\w]+(?:(?:\\\\[])?\\\\.[$\\\\w]+)*(?:\\\\s*(=)\\\\s*((?>\\"(?:\\\\*(?!/)|\\\\\\\\(?!\\")|[^*\\\\\\\\])*?\\"|'(?:\\\\*(?!/)|\\\\\\\\(?!')|[^*\\\\\\\\])*?'|\\\\[(?:\\\\*(?!/)|[^*])*?]|(?:\\\\*(?!/)|\\\\s(?!\\\\s*])|\\\\[.*?(?:]|(?=\\\\*/))|[^]*\\\\[\\\\s])*)*))?\\\\s*(?:(])((?:[^*\\\\s]|\\\\*[^/\\\\s])+)?|(?=\\\\*/))","name":"variable.other.jsdoc"}]},{"begin":"((@)(?:define|enum|exception|export|extends|lends|implements|modifies|namespace|private|protected|returns?|satisfies|suppress|this|throws|type|yields?))\\\\s+(?=\\\\{)","beginCaptures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"}},"end":"(?=\\\\s|\\\\*/|[^]$A-\\\\[_a-{}])","patterns":[{"include":"#jsdoctype"}]},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"entity.name.type.instance.jsdoc"}},"match":"((@)(?:alias|augments|callback|constructs|emits|event|fires|exports?|extends|external|function|func|host|lends|listens|interface|memberof!?|method|module|mixes|mixin|name|requires|see|this|typedef|uses))\\\\s+((?:[^*@{}\\\\s]|\\\\*[^/])+)"},{"begin":"((@)(?:default(?:value)?|license|version))\\\\s+(([\\"']))","beginCaptures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"variable.other.jsdoc"},"4":{"name":"punctuation.definition.string.begin.jsdoc"}},"contentName":"variable.other.jsdoc","end":"(\\\\3)|(?=$|\\\\*/)","endCaptures":{"0":{"name":"variable.other.jsdoc"},"1":{"name":"punctuation.definition.string.end.jsdoc"}}},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"},"3":{"name":"variable.other.jsdoc"}},"match":"((@)(?:default(?:value)?|license|tutorial|variation|version))\\\\s+([^*\\\\s]+)"},{"captures":{"1":{"name":"punctuation.definition.block.tag.jsdoc"}},"match":"(@)(?:abstract|access|alias|api|arg|argument|async|attribute|augments|author|beta|borrows|bubbles|callback|chainable|class|classdesc|code|config|const|constant|constructor|constructs|copyright|default|defaultvalue|define|deprecated|desc|description|dict|emits|enum|event|example|exception|exports?|extends|extension(?:_?for)?|external|externs|file|fileoverview|final|fires|for|func|function|generator|global|hideconstructor|host|ignore|implements|implicitCast|inherit[Dd]oc|inner|instance|interface|internal|kind|lends|license|listens|main|member|memberof!?|method|mixes|mixins?|modifies|module|name|namespace|noalias|nocollapse|nocompile|nosideeffects|override|overview|package|param|polymer(?:Behavior)?|preserve|private|prop|property|protected|public|read[Oo]nly|record|require[ds]|returns?|see|since|static|struct|submodule|summary|suppress|template|this|throws|todo|tutorial|type|typedef|unrestricted|uses|var|variation|version|virtual|writeOnce|yields?)\\\\b","name":"storage.type.class.jsdoc"},{"include":"#inline-tags"},{"captures":{"1":{"name":"storage.type.class.jsdoc"},"2":{"name":"punctuation.definition.block.tag.jsdoc"}},"match":"((@)[$_[:alpha:]][$_[:alnum:]]*)(?=\\\\s+)"}]},"enum-declaration":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?(?:\\\\b(const)\\\\s+)?\\\\b(enum)\\\\s+([$_[:alpha:]][$_[:alnum:]]*)","beginCaptures":{"1":{"name":"keyword.control.export.js"},"2":{"name":"storage.modifier.js"},"3":{"name":"storage.modifier.js"},"4":{"name":"storage.type.enum.js"},"5":{"name":"entity.name.type.enum.js"}},"end":"(?<=})","name":"meta.enum.declaration.js","patterns":[{"include":"#comment"},{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.block.js"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.js"}},"patterns":[{"include":"#comment"},{"begin":"([$_[:alpha:]][$_[:alnum:]]*)","beginCaptures":{"0":{"name":"variable.other.enummember.js"}},"end":"(?=[,}]|$)","patterns":[{"include":"#comment"},{"include":"#variable-initializer"}]},{"begin":"(?=(('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+])))","end":"(?=[,}]|$)","patterns":[{"include":"#string"},{"include":"#array-literal"},{"include":"#comment"},{"include":"#variable-initializer"}]},{"include":"#punctuation-comma"}]}]},"export-declaration":{"patterns":[{"captures":{"1":{"name":"keyword.control.export.js"},"2":{"name":"keyword.control.as.js"},"3":{"name":"storage.type.namespace.js"},"4":{"name":"entity.name.type.module.js"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(export)\\\\s+(as)\\\\s+(namespace)\\\\s+([$_[:alpha:]][$_[:alnum:]]*)"},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(export)(?:\\\\s+(type))?(?:\\\\s*(=)|\\\\s+(default)(?=\\\\s+))","beginCaptures":{"1":{"name":"keyword.control.export.js"},"2":{"name":"keyword.control.type.js"},"3":{"name":"keyword.operator.assignment.js"},"4":{"name":"keyword.control.default.js"}},"end":"(?=$|;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","name":"meta.export.default.js","patterns":[{"include":"#interface-declaration"},{"include":"#expression"}]},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(export)(?:\\\\s+(type))?\\\\b(?!(\\\\$)|(\\\\s*:))((?=\\\\s*[*{])|((?=\\\\s*[$_[:alpha:]][$_[:alnum:]]*([,\\\\s]))(?!\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)))","beginCaptures":{"1":{"name":"keyword.control.export.js"},"2":{"name":"keyword.control.type.js"}},"end":"(?=$|;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","name":"meta.export.js","patterns":[{"include":"#import-export-declaration"}]}]},"expression":{"patterns":[{"include":"#expressionWithoutIdentifiers"},{"include":"#identifiers"},{"include":"#expressionPunctuations"}]},"expression-inside-possibly-arrow-parens":{"patterns":[{"include":"#expressionWithoutIdentifiers"},{"include":"#comment"},{"include":"#string"},{"include":"#decorator"},{"include":"#destructuring-parameter"},{"captures":{"1":{"name":"storage.modifier.js"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(override|public|protected|private|readonly)\\\\s+(?=(override|public|protected|private|readonly)\\\\s+)"},{"captures":{"1":{"name":"storage.modifier.js"},"2":{"name":"keyword.operator.rest.js"},"3":{"name":"entity.name.function.js variable.language.this.js"},"4":{"name":"entity.name.function.js"},"5":{"name":"keyword.operator.optional.js"}},"match":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(override|public|private|protected|readonly)\\\\s+)?(?:(\\\\.\\\\.\\\\.)\\\\s*)?(?<![:=])(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*(\\\\??)(?=\\\\s*(=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|(<\\\\s*[$_[:alpha:]][$_[:alnum:]]*\\\\s+extends\\\\s*[^=>])|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"'()\`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))))|(:\\\\s*((<)|(\\\\(\\\\s*((\\\\))|(\\\\.\\\\.\\\\.)|([$_[:alnum:]]+\\\\s*(([,:=?])|(\\\\)\\\\s*=>)))))))|(:\\\\s*(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))Function(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|(:\\\\s*((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))))|(:\\\\s*(=>|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(<[^<>]*>)|[^(),<=>])+=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|(<\\\\s*[$_[:alpha:]][$_[:alnum:]]*\\\\s+extends\\\\s*[^=>])|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"'()\`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>))))))"},{"captures":{"1":{"name":"storage.modifier.js"},"2":{"name":"keyword.operator.rest.js"},"3":{"name":"variable.parameter.js variable.language.this.js"},"4":{"name":"variable.parameter.js"},"5":{"name":"keyword.operator.optional.js"}},"match":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(override|public|private|protected|readonly)\\\\s+)?(?:(\\\\.\\\\.\\\\.)\\\\s*)?(?<![:=])(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*(\\\\??)(?=\\\\s*[,:]|$)"},{"include":"#type-annotation"},{"include":"#variable-initializer"},{"match":",","name":"punctuation.separator.parameter.js"},{"include":"#identifiers"},{"include":"#expressionPunctuations"}]},"expression-operators":{"patterns":[{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(await)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.control.flow.js"},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(yield)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))(?=\\\\s*/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*\\\\*)","beginCaptures":{"1":{"name":"keyword.control.flow.js"}},"end":"\\\\*","endCaptures":{"0":{"name":"keyword.generator.asterisk.js"}},"patterns":[{"include":"#comment"}]},{"captures":{"1":{"name":"keyword.control.flow.js"},"2":{"name":"keyword.generator.asterisk.js"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(yield)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))(?:\\\\s*(\\\\*))?"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))delete(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.operator.expression.delete.js"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))in(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))(?!\\\\()","name":"keyword.operator.expression.in.js"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))of(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))(?!\\\\()","name":"keyword.operator.expression.of.js"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))instanceof(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.operator.expression.instanceof.js"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))new(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.operator.new.js"},{"include":"#typeof-operator"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))void(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.operator.expression.void.js"},{"captures":{"1":{"name":"keyword.control.as.js"},"2":{"name":"storage.modifier.js"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(as)\\\\s+(const)(?=\\\\s*($|[]),:;}]))"},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(as)|(satisfies))\\\\s+","beginCaptures":{"1":{"name":"keyword.control.as.js"},"2":{"name":"keyword.control.satisfies.js"}},"end":"(?=^|[-\\\\])+,:;>?}]|\\\\|\\\\||&&|!==|$|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(as|satisfies)\\\\s+)|(\\\\s+<))","patterns":[{"include":"#type"}]},{"match":"\\\\.\\\\.\\\\.","name":"keyword.operator.spread.js"},{"match":"(?:\\\\*|(?<!\\\\()/|[-%+])=","name":"keyword.operator.assignment.compound.js"},{"match":"(?:[\\\\&^]|<<|>>>??|\\\\|)=","name":"keyword.operator.assignment.compound.bitwise.js"},{"match":"<<|>>>?","name":"keyword.operator.bitwise.shift.js"},{"match":"[!=]==?","name":"keyword.operator.comparison.js"},{"match":"<=|>=|<>|[<>]","name":"keyword.operator.relational.js"},{"captures":{"1":{"name":"keyword.operator.logical.js"},"2":{"name":"keyword.operator.assignment.compound.js"},"3":{"name":"keyword.operator.arithmetic.js"}},"match":"(?<=[$_[:alnum:]])(!)\\\\s*(?:(/=)|(/)(?![*/]))"},{"match":"!|&&|\\\\|\\\\||\\\\?\\\\?","name":"keyword.operator.logical.js"},{"match":"[\\\\&^|~]","name":"keyword.operator.bitwise.js"},{"match":"=","name":"keyword.operator.assignment.js"},{"match":"--","name":"keyword.operator.decrement.js"},{"match":"\\\\+\\\\+","name":"keyword.operator.increment.js"},{"match":"[-%*+/]","name":"keyword.operator.arithmetic.js"},{"begin":"(?<=[]$)_[:alnum:]])\\\\s*(?=(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)+(?:(/=)|(/)(?![*/])))","end":"(/=)|(/)(?!\\\\*([^*]|(\\\\*[^/]))*\\\\*/)","endCaptures":{"1":{"name":"keyword.operator.assignment.compound.js"},"2":{"name":"keyword.operator.arithmetic.js"}},"patterns":[{"include":"#comment"}]},{"captures":{"1":{"name":"keyword.operator.assignment.compound.js"},"2":{"name":"keyword.operator.arithmetic.js"}},"match":"(?<=[]$)_[:alnum:]])\\\\s*(?:(/=)|(/)(?![*/]))"}]},"expressionPunctuations":{"patterns":[{"include":"#punctuation-comma"},{"include":"#punctuation-accessor"}]},"expressionWithoutIdentifiers":{"patterns":[{"include":"#jsx"},{"include":"#string"},{"include":"#regex"},{"include":"#comment"},{"include":"#function-expression"},{"include":"#class-expression"},{"include":"#arrow-function"},{"include":"#paren-expression-possibly-arrow"},{"include":"#cast"},{"include":"#ternary-expression"},{"include":"#new-expr"},{"include":"#instanceof-expr"},{"include":"#object-literal"},{"include":"#expression-operators"},{"include":"#function-call"},{"include":"#literal"},{"include":"#support-objects"},{"include":"#paren-expression"}]},"field-declaration":{"begin":"(?<!\\\\()(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(readonly)\\\\s+)?(?=\\\\s*(\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|(#?[$_[:alpha:]][$_[:alnum:]]*)|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(?:(?:(\\\\?)|(!))\\\\s*)?([,:;=}]|$))","beginCaptures":{"1":{"name":"storage.modifier.js"}},"end":"(?=[,;}]|$|^((?!\\\\s*(\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|(#?[$_[:alpha:]][$_[:alnum:]]*)|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(?:(?:(\\\\?)|(!))\\\\s*)?([,:;=]|$))))|(?<=})","name":"meta.field.declaration.js","patterns":[{"include":"#variable-initializer"},{"include":"#type-annotation"},{"include":"#string"},{"include":"#array-literal"},{"include":"#numeric-literal"},{"include":"#comment"},{"captures":{"1":{"name":"meta.definition.property.js entity.name.function.js"},"2":{"name":"keyword.operator.optional.js"},"3":{"name":"keyword.operator.definiteassignment.js"}},"match":"(#?[$_[:alpha:]][$_[:alnum:]]*)(?:(\\\\?)|(!))?(?=\\\\s*\\\\s*(=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|(<\\\\s*[$_[:alpha:]][$_[:alnum:]]*\\\\s+extends\\\\s*[^=>])|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"'()\`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))))|(:\\\\s*((<)|(\\\\(\\\\s*((\\\\))|(\\\\.\\\\.\\\\.)|([$_[:alnum:]]+\\\\s*(([,:=?])|(\\\\)\\\\s*=>)))))))|(:\\\\s*(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))Function(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|(:\\\\s*((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))))|(:\\\\s*(=>|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(<[^<>]*>)|[^(),<=>])+=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|(<\\\\s*[$_[:alpha:]][$_[:alnum:]]*\\\\s+extends\\\\s*[^=>])|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"'()\`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>))))))"},{"match":"#?[$_[:alpha:]][$_[:alnum:]]*","name":"meta.definition.property.js variable.object.property.js"},{"match":"\\\\?","name":"keyword.operator.optional.js"},{"match":"!","name":"keyword.operator.definiteassignment.js"}]},"for-loop":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))for(?=((\\\\s+|(\\\\s*/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*))await)?\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)?(\\\\())","beginCaptures":{"0":{"name":"keyword.control.loop.js"}},"end":"(?<=\\\\))","patterns":[{"include":"#comment"},{"match":"await","name":"keyword.control.loop.js"},{"begin":"\\\\(","beginCaptures":{"0":{"name":"meta.brace.round.js"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.js"}},"patterns":[{"include":"#var-expr"},{"include":"#expression"},{"include":"#punctuation-semicolon"}]}]},"function-body":{"patterns":[{"include":"#comment"},{"include":"#type-parameters"},{"include":"#function-parameters"},{"include":"#return-type"},{"include":"#type-function-return-type"},{"include":"#decl-block"},{"match":"\\\\*","name":"keyword.generator.asterisk.js"}]},"function-call":{"patterns":[{"begin":"(?=(((([$_[:alpha:]][$_[:alnum:]]*)(\\\\s*\\\\??\\\\.\\\\s*(#?[$_[:alpha:]][$_[:alnum:]]*))*)|(\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*))|(?<=\\\\)))\\\\s*(?:(\\\\?\\\\.\\\\s*)|(!))?((<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))(([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>)*(?<!=)>))*(?<!=)>)*(?<!=)>\\\\s*)?\\\\())","end":"(?<=\\\\))(?!(((([$_[:alpha:]][$_[:alnum:]]*)(\\\\s*\\\\??\\\\.\\\\s*(#?[$_[:alpha:]][$_[:alnum:]]*))*)|(\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*))|(?<=\\\\)))\\\\s*(?:(\\\\?\\\\.\\\\s*)|(!))?((<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))(([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>)*(?<!=)>))*(?<!=)>)*(?<!=)>\\\\s*)?\\\\())","patterns":[{"begin":"(?=(([$_[:alpha:]][$_[:alnum:]]*)(\\\\s*\\\\??\\\\.\\\\s*(#?[$_[:alpha:]][$_[:alnum:]]*))*)|(\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*))","end":"(?=\\\\s*(?:(\\\\?\\\\.\\\\s*)|(!))?((<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))(([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>)*(?<!=)>))*(?<!=)>)*(?<!=)>\\\\s*)?\\\\())","name":"meta.function-call.js","patterns":[{"include":"#function-call-target"}]},{"include":"#comment"},{"include":"#function-call-optionals"},{"include":"#type-arguments"},{"include":"#paren-expression"}]},{"begin":"(?=(((([$_[:alpha:]][$_[:alnum:]]*)(\\\\s*\\\\??\\\\.\\\\s*(#?[$_[:alpha:]][$_[:alnum:]]*))*)|(\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*))|(?<=\\\\)))(<\\\\s*[(\\\\[{]\\\\s*)$)","end":"(?<=>)(?!(((([$_[:alpha:]][$_[:alnum:]]*)(\\\\s*\\\\??\\\\.\\\\s*(#?[$_[:alpha:]][$_[:alnum:]]*))*)|(\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*))|(?<=\\\\)))(<\\\\s*[(\\\\[{]\\\\s*)$)","patterns":[{"begin":"(?=(([$_[:alpha:]][$_[:alnum:]]*)(\\\\s*\\\\??\\\\.\\\\s*(#?[$_[:alpha:]][$_[:alnum:]]*))*)|(\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*))","end":"(?=(<\\\\s*[(\\\\[{]\\\\s*)$)","name":"meta.function-call.js","patterns":[{"include":"#function-call-target"}]},{"include":"#comment"},{"include":"#function-call-optionals"},{"include":"#type-arguments"}]}]},"function-call-optionals":{"patterns":[{"match":"\\\\?\\\\.","name":"meta.function-call.js punctuation.accessor.optional.js"},{"match":"!","name":"meta.function-call.js keyword.operator.definiteassignment.js"}]},"function-call-target":{"patterns":[{"include":"#support-function-call-identifiers"},{"match":"(#?[$_[:alpha:]][$_[:alnum:]]*)","name":"entity.name.function.js"}]},"function-declaration":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?(?:(async)\\\\s+)?(function)\\\\b(?:\\\\s*(\\\\*))?(?:(?:\\\\s+|(?<=\\\\*))([$_[:alpha:]][$_[:alnum:]]*))?\\\\s*","beginCaptures":{"1":{"name":"keyword.control.export.js"},"2":{"name":"storage.modifier.js"},"3":{"name":"storage.modifier.async.js"},"4":{"name":"storage.type.function.js"},"5":{"name":"keyword.generator.asterisk.js"},"6":{"name":"meta.definition.function.js entity.name.function.js"}},"end":"(?=;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)|(?<=})","name":"meta.function.js","patterns":[{"include":"#function-name"},{"include":"#function-body"}]},"function-expression":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(async)\\\\s+)?(function)\\\\b(?:\\\\s*(\\\\*))?(?:(?:\\\\s+|(?<=\\\\*))([$_[:alpha:]][$_[:alnum:]]*))?\\\\s*","beginCaptures":{"1":{"name":"storage.modifier.async.js"},"2":{"name":"storage.type.function.js"},"3":{"name":"keyword.generator.asterisk.js"},"4":{"name":"meta.definition.function.js entity.name.function.js"}},"end":"(?=;)|(?<=})","name":"meta.function.expression.js","patterns":[{"include":"#function-name"},{"include":"#single-line-comment-consuming-line-ending"},{"include":"#function-body"}]},"function-name":{"match":"[$_[:alpha:]][$_[:alnum:]]*","name":"meta.definition.function.js entity.name.function.js"},"function-parameters":{"begin":"\\\\(","beginCaptures":{"0":{"name":"punctuation.definition.parameters.begin.js"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.definition.parameters.end.js"}},"name":"meta.parameters.js","patterns":[{"include":"#function-parameters-body"}]},"function-parameters-body":{"patterns":[{"include":"#comment"},{"include":"#string"},{"include":"#decorator"},{"include":"#destructuring-parameter"},{"include":"#parameter-name"},{"include":"#parameter-type-annotation"},{"include":"#variable-initializer"},{"match":",","name":"punctuation.separator.parameter.js"}]},"identifiers":{"patterns":[{"include":"#object-identifiers"},{"captures":{"1":{"name":"punctuation.accessor.js"},"2":{"name":"punctuation.accessor.optional.js"},"3":{"name":"entity.name.function.js"}},"match":"(?:(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*)?([$_[:alpha:]][$_[:alnum:]]*)(?=\\\\s*=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|(<\\\\s*[$_[:alpha:]][$_[:alnum:]]*\\\\s+extends\\\\s*[^=>])|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"'()\`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))))"},{"captures":{"1":{"name":"punctuation.accessor.js"},"2":{"name":"punctuation.accessor.optional.js"},"3":{"name":"variable.other.constant.property.js"}},"match":"(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*(#?\\\\p{upper}[$_\\\\d[:upper:]]*)(?![$_[:alnum:]])"},{"captures":{"1":{"name":"punctuation.accessor.js"},"2":{"name":"punctuation.accessor.optional.js"},"3":{"name":"variable.other.property.js"}},"match":"(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*(#?[$_[:alpha:]][$_[:alnum:]]*)"},{"match":"(\\\\p{upper}[$_\\\\d[:upper:]]*)(?![$_[:alnum:]])","name":"variable.other.constant.js"},{"match":"[$_[:alpha:]][$_[:alnum:]]*","name":"variable.other.readwrite.js"}]},"if-statement":{"patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?=\\\\bif\\\\s*(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))\\\\s*(?!\\\\{))","end":"(?=;|$|})","patterns":[{"include":"#comment"},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(if)\\\\s*(\\\\()","beginCaptures":{"1":{"name":"keyword.control.conditional.js"},"2":{"name":"meta.brace.round.js"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.js"}},"patterns":[{"include":"#expression"}]},{"begin":"(?<=\\\\))\\\\s*/(?![*/])(?=(?:[^/\\\\[\\\\\\\\]|\\\\\\\\.|\\\\[([^]\\\\\\\\]|\\\\\\\\.)*])+/([dgimsuvy]+|(?![*/])|(?=/\\\\*))(?!\\\\s*[$0-9A-Z_a-z]))","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.js"}},"end":"(/)([dgimsuvy]*)","endCaptures":{"1":{"name":"punctuation.definition.string.end.js"},"2":{"name":"keyword.other.js"}},"name":"string.regexp.js","patterns":[{"include":"#regexp"}]},{"include":"#statements"}]}]},"import-declaration":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(import)(?:\\\\s+(type)(?!\\\\s+from))?(?!\\\\s*[(:])(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"1":{"name":"keyword.control.export.js"},"2":{"name":"storage.modifier.js"},"3":{"name":"keyword.control.import.js"},"4":{"name":"keyword.control.type.js"}},"end":"(?<!(?:^|[^$._[:alnum:]])import)(?=;|$|^)","name":"meta.import.js","patterns":[{"include":"#single-line-comment-consuming-line-ending"},{"include":"#comment"},{"include":"#string"},{"begin":"(?<=(?:^|[^$._[:alnum:]])import)(?!\\\\s*[\\"'])","end":"\\\\bfrom\\\\b","endCaptures":{"0":{"name":"keyword.control.from.js"}},"patterns":[{"include":"#import-export-declaration"}]},{"include":"#import-export-declaration"}]},"import-equals-declaration":{"patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(import)(?:\\\\s+(type))?\\\\s+([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(=)\\\\s*(require)\\\\s*(\\\\()","beginCaptures":{"1":{"name":"keyword.control.export.js"},"2":{"name":"storage.modifier.js"},"3":{"name":"keyword.control.import.js"},"4":{"name":"keyword.control.type.js"},"5":{"name":"variable.other.readwrite.alias.js"},"6":{"name":"keyword.operator.assignment.js"},"7":{"name":"keyword.control.require.js"},"8":{"name":"meta.brace.round.js"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.js"}},"name":"meta.import-equals.external.js","patterns":[{"include":"#comment"},{"include":"#string"}]},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(import)(?:\\\\s+(type))?\\\\s+([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(=)\\\\s*(?!require\\\\b)","beginCaptures":{"1":{"name":"keyword.control.export.js"},"2":{"name":"storage.modifier.js"},"3":{"name":"keyword.control.import.js"},"4":{"name":"keyword.control.type.js"},"5":{"name":"variable.other.readwrite.alias.js"},"6":{"name":"keyword.operator.assignment.js"}},"end":"(?=;|$|^)","name":"meta.import-equals.internal.js","patterns":[{"include":"#single-line-comment-consuming-line-ending"},{"include":"#comment"},{"captures":{"1":{"name":"entity.name.type.module.js"},"2":{"name":"punctuation.accessor.js"},"3":{"name":"punctuation.accessor.optional.js"}},"match":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))"},{"match":"([$_[:alpha:]][$_[:alnum:]]*)","name":"variable.other.readwrite.js"}]}]},"import-export-assert-clause":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(with)|(assert))\\\\s*(\\\\{)","beginCaptures":{"1":{"name":"keyword.control.with.js"},"2":{"name":"keyword.control.assert.js"},"3":{"name":"punctuation.definition.block.js"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.js"}},"patterns":[{"include":"#comment"},{"include":"#string"},{"match":"[$_[:alpha:]][$_[:alnum:]]*\\\\s*(?=(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*:)","name":"meta.object-literal.key.js"},{"match":":","name":"punctuation.separator.key-value.js"}]},"import-export-block":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.block.js"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.js"}},"name":"meta.block.js","patterns":[{"include":"#import-export-clause"}]},"import-export-clause":{"patterns":[{"include":"#comment"},{"captures":{"1":{"name":"keyword.control.type.js"},"2":{"name":"keyword.control.default.js"},"3":{"name":"constant.language.import-export-all.js"},"4":{"name":"variable.other.readwrite.js"},"5":{"name":"string.quoted.alias.js"},"12":{"name":"keyword.control.as.js"},"13":{"name":"keyword.control.default.js"},"14":{"name":"variable.other.readwrite.alias.js"},"15":{"name":"string.quoted.alias.js"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(type)\\\\s+)?(?:\\\\b(default)|(\\\\*)|\\\\b([$_[:alpha:]][$_[:alnum:]]*)|(('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)))\\\\s+(as)\\\\s+(?:(default(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|([$_[:alpha:]][$_[:alnum:]]*)|(('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)))"},{"include":"#punctuation-comma"},{"match":"\\\\*","name":"constant.language.import-export-all.js"},{"match":"\\\\b(default)\\\\b","name":"keyword.control.default.js"},{"captures":{"1":{"name":"keyword.control.type.js"},"2":{"name":"variable.other.readwrite.alias.js"},"3":{"name":"string.quoted.alias.js"}},"match":"(?:\\\\b(type)\\\\s+)?(?:([$_[:alpha:]][$_[:alnum:]]*)|(('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)))"}]},"import-export-declaration":{"patterns":[{"include":"#comment"},{"include":"#string"},{"include":"#import-export-block"},{"match":"\\\\bfrom\\\\b","name":"keyword.control.from.js"},{"include":"#import-export-assert-clause"},{"include":"#import-export-clause"}]},"indexer-declaration":{"begin":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(readonly)\\\\s*)?\\\\s*(\\\\[)\\\\s*([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?=:)","beginCaptures":{"1":{"name":"storage.modifier.js"},"2":{"name":"meta.brace.square.js"},"3":{"name":"variable.parameter.js"}},"end":"(])\\\\s*(\\\\?\\\\s*)?|$","endCaptures":{"1":{"name":"meta.brace.square.js"},"2":{"name":"keyword.operator.optional.js"}},"name":"meta.indexer.declaration.js","patterns":[{"include":"#type-annotation"}]},"indexer-mapped-type-declaration":{"begin":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))([-+])?(readonly)\\\\s*)?\\\\s*(\\\\[)\\\\s*([$_[:alpha:]][$_[:alnum:]]*)\\\\s+(in)\\\\s+","beginCaptures":{"1":{"name":"keyword.operator.type.modifier.js"},"2":{"name":"storage.modifier.js"},"3":{"name":"meta.brace.square.js"},"4":{"name":"entity.name.type.js"},"5":{"name":"keyword.operator.expression.in.js"}},"end":"(])([-+])?\\\\s*(\\\\?\\\\s*)?|$","endCaptures":{"1":{"name":"meta.brace.square.js"},"2":{"name":"keyword.operator.type.modifier.js"},"3":{"name":"keyword.operator.optional.js"}},"name":"meta.indexer.mappedtype.declaration.js","patterns":[{"captures":{"1":{"name":"keyword.control.as.js"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(as)\\\\s+"},{"include":"#type"}]},"inline-tags":{"patterns":[{"captures":{"1":{"name":"punctuation.definition.bracket.square.begin.jsdoc"},"2":{"name":"punctuation.definition.bracket.square.end.jsdoc"}},"match":"(\\\\[)[^]]+(])(?=\\\\{@(?:link|linkcode|linkplain|tutorial))","name":"constant.other.description.jsdoc"},{"begin":"(\\\\{)((@)(?:link(?:code|plain)?|tutorial))\\\\s*","beginCaptures":{"1":{"name":"punctuation.definition.bracket.curly.begin.jsdoc"},"2":{"name":"storage.type.class.jsdoc"},"3":{"name":"punctuation.definition.inline.tag.jsdoc"}},"end":"}|(?=\\\\*/)","endCaptures":{"0":{"name":"punctuation.definition.bracket.curly.end.jsdoc"}},"name":"entity.name.type.instance.jsdoc","patterns":[{"captures":{"1":{"name":"variable.other.link.underline.jsdoc"},"2":{"name":"punctuation.separator.pipe.jsdoc"}},"match":"\\\\G((?=https?://)(?:[^*|}\\\\s]|\\\\*/)+)(\\\\|)?"},{"captures":{"1":{"name":"variable.other.description.jsdoc"},"2":{"name":"punctuation.separator.pipe.jsdoc"}},"match":"\\\\G((?:[^*@{|}\\\\s]|\\\\*[^/])+)(\\\\|)?"}]}]},"instanceof-expr":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(instanceof)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"1":{"name":"keyword.operator.expression.instanceof.js"}},"end":"(?<=\\\\))|(?=[-\\\\])+,:;>?}]|\\\\|\\\\||&&|!==|$|([!=]==?)|(([\\\\&^|~]\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s+instanceof(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))function((\\\\s+[$_[:alpha:]][$_[:alnum:]]*)|(\\\\s*\\\\())))","patterns":[{"include":"#type"}]},"interface-declaration":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(?:(abstract)\\\\s+)?\\\\b(interface)\\\\b(?=\\\\s+|/[*/])","beginCaptures":{"1":{"name":"keyword.control.export.js"},"2":{"name":"storage.modifier.js"},"3":{"name":"storage.modifier.js"},"4":{"name":"storage.type.interface.js"}},"end":"(?<=})","name":"meta.interface.js","patterns":[{"include":"#comment"},{"include":"#class-or-interface-heritage"},{"captures":{"0":{"name":"entity.name.type.interface.js"}},"match":"[$_[:alpha:]][$_[:alnum:]]*"},{"include":"#type-parameters"},{"include":"#class-or-interface-body"}]},"jsdoctype":{"patterns":[{"begin":"\\\\G(\\\\{)","beginCaptures":{"0":{"name":"entity.name.type.instance.jsdoc"},"1":{"name":"punctuation.definition.bracket.curly.begin.jsdoc"}},"contentName":"entity.name.type.instance.jsdoc","end":"((}))\\\\s*|(?=\\\\*/)","endCaptures":{"1":{"name":"entity.name.type.instance.jsdoc"},"2":{"name":"punctuation.definition.bracket.curly.end.jsdoc"}},"patterns":[{"include":"#brackets"}]}]},"jsx":{"patterns":[{"include":"#jsx-tag-without-attributes-in-expression"},{"include":"#jsx-tag-in-expression"}]},"jsx-children":{"patterns":[{"include":"#jsx-tag-without-attributes"},{"include":"#jsx-tag"},{"include":"#jsx-evaluated-code"},{"include":"#jsx-entities"}]},"jsx-entities":{"patterns":[{"captures":{"1":{"name":"punctuation.definition.entity.js"},"3":{"name":"punctuation.definition.entity.js"}},"match":"(&)([0-9A-Za-z]+|#[0-9]+|#x\\\\h+)(;)","name":"constant.character.entity.js"}]},"jsx-evaluated-code":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.section.embedded.begin.js"}},"contentName":"meta.embedded.expression.js","end":"}","endCaptures":{"0":{"name":"punctuation.section.embedded.end.js"}},"patterns":[{"include":"#expression"}]},"jsx-string-double-quoted":{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.js"}},"end":"\\"","endCaptures":{"0":{"name":"punctuation.definition.string.end.js"}},"name":"string.quoted.double.js","patterns":[{"include":"#jsx-entities"}]},"jsx-string-single-quoted":{"begin":"'","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.js"}},"end":"'","endCaptures":{"0":{"name":"punctuation.definition.string.end.js"}},"name":"string.quoted.single.js","patterns":[{"include":"#jsx-entities"}]},"jsx-tag":{"begin":"(?=(<)\\\\s*(?:([$_[:alpha:]][-$._[:alnum:]]*)(?<![-.])(:))?((?:[a-z][0-9a-z]*|([$_[:alpha:]][-$._[:alnum:]]*))(?<![-.]))(?=((<\\\\s*)|(\\\\s+))(?!\\\\?)|/?>))","end":"(/>)|(</)\\\\s*(?:([$_[:alpha:]][-$._[:alnum:]]*)(?<![-.])(:))?((?:[a-z][0-9a-z]*|([$_[:alpha:]][-$._[:alnum:]]*))(?<![-.]))?\\\\s*(>)","endCaptures":{"1":{"name":"punctuation.definition.tag.end.js"},"2":{"name":"punctuation.definition.tag.begin.js"},"3":{"name":"entity.name.tag.namespace.js"},"4":{"name":"punctuation.separator.namespace.js"},"5":{"name":"entity.name.tag.js"},"6":{"name":"support.class.component.js"},"7":{"name":"punctuation.definition.tag.end.js"}},"name":"meta.tag.js","patterns":[{"begin":"(<)\\\\s*(?:([$_[:alpha:]][-$._[:alnum:]]*)(?<![-.])(:))?((?:[a-z][0-9a-z]*|([$_[:alpha:]][-$._[:alnum:]]*))(?<![-.]))(?=((<\\\\s*)|(\\\\s+))(?!\\\\?)|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.js"},"2":{"name":"entity.name.tag.namespace.js"},"3":{"name":"punctuation.separator.namespace.js"},"4":{"name":"entity.name.tag.js"},"5":{"name":"support.class.component.js"}},"end":"(?=/?>)","patterns":[{"include":"#comment"},{"include":"#type-arguments"},{"include":"#jsx-tag-attributes"}]},{"begin":"(>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.end.js"}},"contentName":"meta.jsx.children.js","end":"(?=</)","patterns":[{"include":"#jsx-children"}]}]},"jsx-tag-attribute-assignment":{"match":"=(?=\\\\s*(?:[\\"'{]|/\\\\*|//|\\\\n))","name":"keyword.operator.assignment.js"},"jsx-tag-attribute-name":{"captures":{"1":{"name":"entity.other.attribute-name.namespace.js"},"2":{"name":"punctuation.separator.namespace.js"},"3":{"name":"entity.other.attribute-name.js"}},"match":"\\\\s*(?:([$_[:alpha:]][-$._[:alnum:]]*)(:))?([$_[:alpha:]][-$_[:alnum:]]*)(?=[=\\\\s]|/?>|/\\\\*|//)"},"jsx-tag-attributes":{"begin":"\\\\s+","end":"(?=/?>)","name":"meta.tag.attributes.js","patterns":[{"include":"#comment"},{"include":"#jsx-tag-attribute-name"},{"include":"#jsx-tag-attribute-assignment"},{"include":"#jsx-string-double-quoted"},{"include":"#jsx-string-single-quoted"},{"include":"#jsx-evaluated-code"},{"include":"#jsx-tag-attributes-illegal"}]},"jsx-tag-attributes-illegal":{"match":"\\\\S+","name":"invalid.illegal.attribute.js"},"jsx-tag-in-expression":{"begin":"(?<!\\\\+\\\\+|--)(?<=[(*,:=>?\\\\[{]|&&|\\\\|\\\\||\\\\?|\\\\*/|^await|[^$._[:alnum:]]await|^return|[^$._[:alnum:]]return|^default|[^$._[:alnum:]]default|^yield|[^$._[:alnum:]]yield|^)\\\\s*(?!<\\\\s*[$_[:alpha:]][$_[:alnum:]]*((\\\\s+extends\\\\s+[^=>])|,))(?=(<)\\\\s*(?:([$_[:alpha:]][-$._[:alnum:]]*)(?<![-.])(:))?((?:[a-z][0-9a-z]*|([$_[:alpha:]][-$._[:alnum:]]*))(?<![-.]))(?=((<\\\\s*)|(\\\\s+))(?!\\\\?)|/?>))","end":"(?!(<)\\\\s*(?:([$_[:alpha:]][-$._[:alnum:]]*)(?<![-.])(:))?((?:[a-z][0-9a-z]*|([$_[:alpha:]][-$._[:alnum:]]*))(?<![-.]))(?=((<\\\\s*)|(\\\\s+))(?!\\\\?)|/?>))","patterns":[{"include":"#jsx-tag"}]},"jsx-tag-without-attributes":{"begin":"(<)\\\\s*(?:([$_[:alpha:]][-$._[:alnum:]]*)(?<![-.])(:))?((?:[a-z][0-9a-z]*|([$_[:alpha:]][-$._[:alnum:]]*))(?<![-.]))?\\\\s*(>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.js"},"2":{"name":"entity.name.tag.namespace.js"},"3":{"name":"punctuation.separator.namespace.js"},"4":{"name":"entity.name.tag.js"},"5":{"name":"support.class.component.js"},"6":{"name":"punctuation.definition.tag.end.js"}},"contentName":"meta.jsx.children.js","end":"(</)\\\\s*(?:([$_[:alpha:]][-$._[:alnum:]]*)(?<![-.])(:))?((?:[a-z][0-9a-z]*|([$_[:alpha:]][-$._[:alnum:]]*))(?<![-.]))?\\\\s*(>)","endCaptures":{"1":{"name":"punctuation.definition.tag.begin.js"},"2":{"name":"entity.name.tag.namespace.js"},"3":{"name":"punctuation.separator.namespace.js"},"4":{"name":"entity.name.tag.js"},"5":{"name":"support.class.component.js"},"6":{"name":"punctuation.definition.tag.end.js"}},"name":"meta.tag.without-attributes.js","patterns":[{"include":"#jsx-children"}]},"jsx-tag-without-attributes-in-expression":{"begin":"(?<!\\\\+\\\\+|--)(?<=[(*,:=>?\\\\[{]|&&|\\\\|\\\\||\\\\?|\\\\*/|^await|[^$._[:alnum:]]await|^return|[^$._[:alnum:]]return|^default|[^$._[:alnum:]]default|^yield|[^$._[:alnum:]]yield|^)\\\\s*(?=(<)\\\\s*(?:([$_[:alpha:]][-$._[:alnum:]]*)(?<![-.])(:))?((?:[a-z][0-9a-z]*|([$_[:alpha:]][-$._[:alnum:]]*))(?<![-.]))?\\\\s*(>))","end":"(?!(<)\\\\s*(?:([$_[:alpha:]][-$._[:alnum:]]*)(?<![-.])(:))?((?:[a-z][0-9a-z]*|([$_[:alpha:]][-$._[:alnum:]]*))(?<![-.]))?\\\\s*(>))","patterns":[{"include":"#jsx-tag-without-attributes"}]},"label":{"patterns":[{"begin":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(:)(?=\\\\s*\\\\{)","beginCaptures":{"1":{"name":"entity.name.label.js"},"2":{"name":"punctuation.separator.label.js"}},"end":"(?<=})","patterns":[{"include":"#decl-block"}]},{"captures":{"1":{"name":"entity.name.label.js"},"2":{"name":"punctuation.separator.label.js"}},"match":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(:)"}]},"literal":{"patterns":[{"include":"#numeric-literal"},{"include":"#boolean-literal"},{"include":"#null-literal"},{"include":"#undefined-literal"},{"include":"#numericConstant-literal"},{"include":"#array-literal"},{"include":"#this-literal"},{"include":"#super-literal"}]},"method-declaration":{"patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(override)\\\\s+)?(?:\\\\b(p(?:ublic|rivate|rotected))\\\\s+)?(?:\\\\b(abstract)\\\\s+)?(?:\\\\b(async)\\\\s+)?\\\\s*\\\\b(constructor)\\\\b(?!:)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"1":{"name":"storage.modifier.js"},"2":{"name":"storage.modifier.js"},"3":{"name":"storage.modifier.js"},"4":{"name":"storage.modifier.async.js"},"5":{"name":"storage.type.js"}},"end":"(?=[,;}]|$)|(?<=})","name":"meta.method.declaration.js","patterns":[{"include":"#method-declaration-name"},{"include":"#function-body"}]},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(override)\\\\s+)?(?:\\\\b(p(?:ublic|rivate|rotected))\\\\s+)?(?:\\\\b(abstract)\\\\s+)?(?:\\\\b(async)\\\\s+)?(?:\\\\s*\\\\b(new)\\\\b(?!:)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))|(?:(\\\\*)\\\\s*)?)(?=\\\\s*((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*))?\\\\()","beginCaptures":{"1":{"name":"storage.modifier.js"},"2":{"name":"storage.modifier.js"},"3":{"name":"storage.modifier.js"},"4":{"name":"storage.modifier.async.js"},"5":{"name":"keyword.operator.new.js"},"6":{"name":"keyword.generator.asterisk.js"}},"end":"(?=[,;}]|$)|(?<=})","name":"meta.method.declaration.js","patterns":[{"include":"#method-declaration-name"},{"include":"#function-body"}]},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(override)\\\\s+)?(?:\\\\b(p(?:ublic|rivate|rotected))\\\\s+)?(?:\\\\b(abstract)\\\\s+)?(?:\\\\b(async)\\\\s+)?(?:\\\\b([gs]et)\\\\s+)?(?:(\\\\*)\\\\s*)?(?=\\\\s*((\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(\\\\??))\\\\s*((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*))?\\\\()","beginCaptures":{"1":{"name":"storage.modifier.js"},"2":{"name":"storage.modifier.js"},"3":{"name":"storage.modifier.js"},"4":{"name":"storage.modifier.async.js"},"5":{"name":"storage.type.property.js"},"6":{"name":"keyword.generator.asterisk.js"}},"end":"(?=[,;}]|$)|(?<=})","name":"meta.method.declaration.js","patterns":[{"include":"#method-declaration-name"},{"include":"#function-body"}]}]},"method-declaration-name":{"begin":"(?=(\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(\\\\??)\\\\s*[(<])","end":"(?=[(<])","patterns":[{"include":"#string"},{"include":"#array-literal"},{"include":"#numeric-literal"},{"match":"[$_[:alpha:]][$_[:alnum:]]*","name":"meta.definition.method.js entity.name.function.js"},{"match":"\\\\?","name":"keyword.operator.optional.js"}]},"namespace-declaration":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(namespace|module)\\\\s+(?=[\\"$'_\`[:alpha:]])","beginCaptures":{"1":{"name":"keyword.control.export.js"},"2":{"name":"storage.modifier.js"},"3":{"name":"storage.type.namespace.js"}},"end":"(?<=})|(?=;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","name":"meta.namespace.declaration.js","patterns":[{"include":"#comment"},{"include":"#string"},{"match":"([$_[:alpha:]][$_[:alnum:]]*)","name":"entity.name.type.module.js"},{"include":"#punctuation-accessor"},{"include":"#decl-block"}]},"new-expr":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(new)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"1":{"name":"keyword.operator.new.js"}},"end":"(?<=\\\\))|(?=[-\\\\])+,:;>?}]|\\\\|\\\\||&&|!==|$|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))new(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))function((\\\\s+[$_[:alpha:]][$_[:alnum:]]*)|(\\\\s*\\\\())))","name":"new.expr.js","patterns":[{"include":"#expression"}]},"null-literal":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))null(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"constant.language.null.js"},"numeric-literal":{"patterns":[{"captures":{"1":{"name":"storage.type.numeric.bigint.js"}},"match":"\\\\b(?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$)","name":"constant.numeric.hex.js"},{"captures":{"1":{"name":"storage.type.numeric.bigint.js"}},"match":"\\\\b(?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$)","name":"constant.numeric.binary.js"},{"captures":{"1":{"name":"storage.type.numeric.bigint.js"}},"match":"\\\\b(?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$)","name":"constant.numeric.octal.js"},{"captures":{"0":{"name":"constant.numeric.decimal.js"},"1":{"name":"meta.delimiter.decimal.period.js"},"2":{"name":"storage.type.numeric.bigint.js"},"3":{"name":"meta.delimiter.decimal.period.js"},"4":{"name":"storage.type.numeric.bigint.js"},"5":{"name":"meta.delimiter.decimal.period.js"},"6":{"name":"storage.type.numeric.bigint.js"},"7":{"name":"storage.type.numeric.bigint.js"},"8":{"name":"meta.delimiter.decimal.period.js"},"9":{"name":"storage.type.numeric.bigint.js"},"10":{"name":"meta.delimiter.decimal.period.js"},"11":{"name":"storage.type.numeric.bigint.js"},"12":{"name":"meta.delimiter.decimal.period.js"},"13":{"name":"storage.type.numeric.bigint.js"},"14":{"name":"storage.type.numeric.bigint.js"}},"match":"(?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$)"}]},"numericConstant-literal":{"patterns":[{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))NaN(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"constant.language.nan.js"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))Infinity(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"constant.language.infinity.js"}]},"object-binding-element":{"patterns":[{"include":"#comment"},{"begin":"(?=(\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(:))","end":"(?=[,}])","patterns":[{"include":"#object-binding-element-propertyName"},{"include":"#binding-element"}]},{"include":"#object-binding-pattern"},{"include":"#destructuring-variable-rest"},{"include":"#variable-initializer"},{"include":"#punctuation-comma"}]},"object-binding-element-const":{"patterns":[{"include":"#comment"},{"begin":"(?=(\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(:))","end":"(?=[,}])","patterns":[{"include":"#object-binding-element-propertyName"},{"include":"#binding-element-const"}]},{"include":"#object-binding-pattern-const"},{"include":"#destructuring-variable-rest-const"},{"include":"#variable-initializer"},{"include":"#punctuation-comma"}]},"object-binding-element-propertyName":{"begin":"(?=(\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(:))","end":"(:)","endCaptures":{"0":{"name":"punctuation.destructuring.js"}},"patterns":[{"include":"#string"},{"include":"#array-literal"},{"include":"#numeric-literal"},{"match":"([$_[:alpha:]][$_[:alnum:]]*)","name":"variable.object.property.js"}]},"object-binding-pattern":{"begin":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\{)","beginCaptures":{"1":{"name":"keyword.operator.rest.js"},"2":{"name":"punctuation.definition.binding-pattern.object.js"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.binding-pattern.object.js"}},"patterns":[{"include":"#object-binding-element"}]},"object-binding-pattern-const":{"begin":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\{)","beginCaptures":{"1":{"name":"keyword.operator.rest.js"},"2":{"name":"punctuation.definition.binding-pattern.object.js"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.binding-pattern.object.js"}},"patterns":[{"include":"#object-binding-element-const"}]},"object-identifiers":{"patterns":[{"match":"([$_[:alpha:]][$_[:alnum:]]*)(?=\\\\s*\\\\??\\\\.\\\\s*prototype\\\\b(?!\\\\$))","name":"support.class.js"},{"captures":{"1":{"name":"punctuation.accessor.js"},"2":{"name":"punctuation.accessor.optional.js"},"3":{"name":"variable.other.constant.object.property.js"},"4":{"name":"variable.other.object.property.js"}},"match":"(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*(?:(#?\\\\p{upper}[$_\\\\d[:upper:]]*)|(#?[$_[:alpha:]][$_[:alnum:]]*))(?=\\\\s*\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*)"},{"captures":{"1":{"name":"variable.other.constant.object.js"},"2":{"name":"variable.other.object.js"}},"match":"(?:(\\\\p{upper}[$_\\\\d[:upper:]]*)|([$_[:alpha:]][$_[:alnum:]]*))(?=\\\\s*\\\\??\\\\.\\\\s*#?[$_[:alpha:]][$_[:alnum:]]*)"}]},"object-literal":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.block.js"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.js"}},"name":"meta.objectliteral.js","patterns":[{"include":"#object-member"}]},"object-literal-method-declaration":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(async)\\\\s+)?(?:\\\\b([gs]et)\\\\s+)?(?:(\\\\*)\\\\s*)?(?=\\\\s*((\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(\\\\??))\\\\s*((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*))?\\\\()","beginCaptures":{"1":{"name":"storage.modifier.async.js"},"2":{"name":"storage.type.property.js"},"3":{"name":"keyword.generator.asterisk.js"}},"end":"(?=[,;}])|(?<=})","name":"meta.method.declaration.js","patterns":[{"include":"#method-declaration-name"},{"include":"#function-body"},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(async)\\\\s+)?(?:\\\\b([gs]et)\\\\s+)?(?:(\\\\*)\\\\s*)?(?=\\\\s*((\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(\\\\??))\\\\s*((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*))?\\\\()","beginCaptures":{"1":{"name":"storage.modifier.async.js"},"2":{"name":"storage.type.property.js"},"3":{"name":"keyword.generator.asterisk.js"}},"end":"(?=[(<])","patterns":[{"include":"#method-declaration-name"}]}]},"object-member":{"patterns":[{"include":"#comment"},{"include":"#object-literal-method-declaration"},{"begin":"(?=\\\\[)","end":"(?=:)|((?<=])(?=\\\\s*[(<]))","name":"meta.object.member.js meta.object-literal.key.js","patterns":[{"include":"#comment"},{"include":"#array-literal"}]},{"begin":"(?=[\\"'\`])","end":"(?=:)|((?<=[\\"'\`])(?=((\\\\s*[(,<}])|(\\\\s+(as|satisifies)\\\\s+))))","name":"meta.object.member.js meta.object-literal.key.js","patterns":[{"include":"#comment"},{"include":"#string"}]},{"begin":"(?=\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$)))","end":"(?=:)|(?=\\\\s*([(,<}])|(\\\\s+as|satisifies\\\\s+))","name":"meta.object.member.js meta.object-literal.key.js","patterns":[{"include":"#comment"},{"include":"#numeric-literal"}]},{"begin":"(?<=[]\\"'\`])(?=\\\\s*[(<])","end":"(?=[,;}])|(?<=})","name":"meta.method.declaration.js","patterns":[{"include":"#function-body"}]},{"captures":{"0":{"name":"meta.object-literal.key.js"},"1":{"name":"constant.numeric.decimal.js"}},"match":"(?![$_[:alpha:]])(\\\\d+)\\\\s*(?=(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*:)","name":"meta.object.member.js"},{"captures":{"0":{"name":"meta.object-literal.key.js"},"1":{"name":"entity.name.function.js"}},"match":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?=(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*:(\\\\s*/\\\\*([^*]|(\\\\*[^/]))*\\\\*/)*\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|(<\\\\s*[$_[:alpha:]][$_[:alnum:]]*\\\\s+extends\\\\s*[^=>])|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"'()\`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))))","name":"meta.object.member.js"},{"captures":{"0":{"name":"meta.object-literal.key.js"}},"match":"[$_[:alpha:]][$_[:alnum:]]*\\\\s*(?=(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*:)","name":"meta.object.member.js"},{"begin":"\\\\.\\\\.\\\\.","beginCaptures":{"0":{"name":"keyword.operator.spread.js"}},"end":"(?=[,}])","name":"meta.object.member.js","patterns":[{"include":"#expression"}]},{"captures":{"1":{"name":"variable.other.readwrite.js"}},"match":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?=[,}]|$|//|/\\\\*)","name":"meta.object.member.js"},{"captures":{"1":{"name":"keyword.control.as.js"},"2":{"name":"storage.modifier.js"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(as)\\\\s+(const)(?=\\\\s*([,}]|$))","name":"meta.object.member.js"},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(as)|(satisfies))\\\\s+","beginCaptures":{"1":{"name":"keyword.control.as.js"},"2":{"name":"keyword.control.satisfies.js"}},"end":"(?=[-\\\\])+,:;>?}]|\\\\|\\\\||&&|!==|$|^|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(as|satisifies)\\\\s+))","name":"meta.object.member.js","patterns":[{"include":"#type"}]},{"begin":"(?=[$_[:alpha:]][$_[:alnum:]]*\\\\s*=)","end":"(?=[,}]|$|//|/\\\\*)","name":"meta.object.member.js","patterns":[{"include":"#expression"}]},{"begin":":","beginCaptures":{"0":{"name":"meta.object-literal.key.js punctuation.separator.key-value.js"}},"end":"(?=[,}])","name":"meta.object.member.js","patterns":[{"begin":"(?<=:)\\\\s*(async)?(?=\\\\s*(<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))","beginCaptures":{"1":{"name":"storage.modifier.async.js"}},"end":"(?<=\\\\))","patterns":[{"include":"#type-parameters"},{"begin":"\\\\(","beginCaptures":{"0":{"name":"meta.brace.round.js"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.js"}},"patterns":[{"include":"#expression-inside-possibly-arrow-parens"}]}]},{"begin":"(?<=:)\\\\s*(async)?\\\\s*(\\\\()(?=\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))","beginCaptures":{"1":{"name":"storage.modifier.async.js"},"2":{"name":"meta.brace.round.js"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.js"}},"patterns":[{"include":"#expression-inside-possibly-arrow-parens"}]},{"begin":"(?<=:)\\\\s*(async)?\\\\s*(?=<\\\\s*$)","beginCaptures":{"1":{"name":"storage.modifier.async.js"}},"end":"(?<=>)","patterns":[{"include":"#type-parameters"}]},{"begin":"(?<=>)\\\\s*(\\\\()(?=\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))","beginCaptures":{"1":{"name":"meta.brace.round.js"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.js"}},"patterns":[{"include":"#expression-inside-possibly-arrow-parens"}]},{"include":"#possibly-arrow-return-type"},{"include":"#expression"}]},{"include":"#punctuation-comma"},{"include":"#decl-block"}]},"parameter-array-binding-pattern":{"begin":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\[)","beginCaptures":{"1":{"name":"keyword.operator.rest.js"},"2":{"name":"punctuation.definition.binding-pattern.array.js"}},"end":"]","endCaptures":{"0":{"name":"punctuation.definition.binding-pattern.array.js"}},"patterns":[{"include":"#parameter-binding-element"},{"include":"#punctuation-comma"}]},"parameter-binding-element":{"patterns":[{"include":"#comment"},{"include":"#string"},{"include":"#numeric-literal"},{"include":"#regex"},{"include":"#parameter-object-binding-pattern"},{"include":"#parameter-array-binding-pattern"},{"include":"#destructuring-parameter-rest"},{"include":"#variable-initializer"}]},"parameter-name":{"patterns":[{"captures":{"1":{"name":"storage.modifier.js"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(override|public|protected|private|readonly)\\\\s+(?=(override|public|protected|private|readonly)\\\\s+)"},{"captures":{"1":{"name":"storage.modifier.js"},"2":{"name":"keyword.operator.rest.js"},"3":{"name":"entity.name.function.js variable.language.this.js"},"4":{"name":"entity.name.function.js"},"5":{"name":"keyword.operator.optional.js"}},"match":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(override|public|private|protected|readonly)\\\\s+)?(?:(\\\\.\\\\.\\\\.)\\\\s*)?(?<![:=])(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*(\\\\??)(?=\\\\s*(=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|(<\\\\s*[$_[:alpha:]][$_[:alnum:]]*\\\\s+extends\\\\s*[^=>])|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"'()\`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))))|(:\\\\s*((<)|(\\\\(\\\\s*((\\\\))|(\\\\.\\\\.\\\\.)|([$_[:alnum:]]+\\\\s*(([,:=?])|(\\\\)\\\\s*=>)))))))|(:\\\\s*(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))Function(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|(:\\\\s*((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))))|(:\\\\s*(=>|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(<[^<>]*>)|[^(),<=>])+=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|(<\\\\s*[$_[:alpha:]][$_[:alnum:]]*\\\\s+extends\\\\s*[^=>])|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"'()\`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>))))))"},{"captures":{"1":{"name":"storage.modifier.js"},"2":{"name":"keyword.operator.rest.js"},"3":{"name":"variable.parameter.js variable.language.this.js"},"4":{"name":"variable.parameter.js"},"5":{"name":"keyword.operator.optional.js"}},"match":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(override|public|private|protected|readonly)\\\\s+)?(?:(\\\\.\\\\.\\\\.)\\\\s*)?(?<![:=])(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*(\\\\??)"}]},"parameter-object-binding-element":{"patterns":[{"include":"#comment"},{"begin":"(?=(\\\\b((?<!\\\\$)0[Xx]\\\\h[_\\\\h]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Bb][01][01_]*(n)?\\\\b(?!\\\\$))|\\\\b((?<!\\\\$)0[Oo]?[0-7][0-7_]*(n)?\\\\b(?!\\\\$))|((?<!\\\\$)(?:\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\B(\\\\.)[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*[Ee][-+]?[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(\\\\.)(n)?\\\\B|\\\\B(\\\\.)[0-9][0-9_]*(n)?\\\\b|\\\\b[0-9][0-9_]*(n)?\\\\b(?!\\\\.))(?!\\\\$))|([$_[:alpha:]][$_[:alnum:]]*)|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`)|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])+]))\\\\s*(:))","end":"(?=[,}])","patterns":[{"include":"#object-binding-element-propertyName"},{"include":"#parameter-binding-element"},{"include":"#paren-expression"}]},{"include":"#parameter-object-binding-pattern"},{"include":"#destructuring-parameter-rest"},{"include":"#variable-initializer"},{"include":"#punctuation-comma"}]},"parameter-object-binding-pattern":{"begin":"(?:(\\\\.\\\\.\\\\.)\\\\s*)?(\\\\{)","beginCaptures":{"1":{"name":"keyword.operator.rest.js"},"2":{"name":"punctuation.definition.binding-pattern.object.js"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.binding-pattern.object.js"}},"patterns":[{"include":"#parameter-object-binding-element"}]},"parameter-type-annotation":{"patterns":[{"begin":"(:)","beginCaptures":{"1":{"name":"keyword.operator.type.annotation.js"}},"end":"(?=[),])|(?==[^>])","name":"meta.type.annotation.js","patterns":[{"include":"#type"}]}]},"paren-expression":{"begin":"\\\\(","beginCaptures":{"0":{"name":"meta.brace.round.js"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.js"}},"patterns":[{"include":"#expression"}]},"paren-expression-possibly-arrow":{"patterns":[{"begin":"(?<=[(,=])\\\\s*(async)?(?=\\\\s*((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*))?\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))","beginCaptures":{"1":{"name":"storage.modifier.async.js"}},"end":"(?<=\\\\))","patterns":[{"include":"#paren-expression-possibly-arrow-with-typeparameters"}]},{"begin":"(?<=[(,=]|=>|^return|[^$._[:alnum:]]return)\\\\s*(async)?(?=\\\\s*((((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*))?\\\\()|(<)|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)))\\\\s*$)","beginCaptures":{"1":{"name":"storage.modifier.async.js"}},"end":"(?<=\\\\))","patterns":[{"include":"#paren-expression-possibly-arrow-with-typeparameters"}]},{"include":"#possibly-arrow-return-type"}]},"paren-expression-possibly-arrow-with-typeparameters":{"patterns":[{"include":"#type-parameters"},{"begin":"\\\\(","beginCaptures":{"0":{"name":"meta.brace.round.js"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.js"}},"patterns":[{"include":"#expression-inside-possibly-arrow-parens"}]}]},"possibly-arrow-return-type":{"begin":"(?<=\\\\)|^)\\\\s*(:)(?=\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*=>)","beginCaptures":{"1":{"name":"meta.arrow.js meta.return.type.arrow.js keyword.operator.type.annotation.js"}},"contentName":"meta.arrow.js meta.return.type.arrow.js","end":"(?==>|\\\\{|^(\\\\s*(export|function|class|interface|let|var|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|const|import|enum|namespace|module|type|abstract|declare)\\\\s+))","patterns":[{"include":"#arrow-return-type-body"}]},"property-accessor":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(accessor|get|set)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"storage.type.property.js"},"punctuation-accessor":{"captures":{"1":{"name":"punctuation.accessor.js"},"2":{"name":"punctuation.accessor.optional.js"}},"match":"(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d))"},"punctuation-comma":{"match":",","name":"punctuation.separator.comma.js"},"punctuation-semicolon":{"match":";","name":"punctuation.terminator.statement.js"},"qstring-double":{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.js"}},"end":"(\\")|([^\\\\n\\\\\\\\])$","endCaptures":{"1":{"name":"punctuation.definition.string.end.js"},"2":{"name":"invalid.illegal.newline.js"}},"name":"string.quoted.double.js","patterns":[{"include":"#string-character-escape"}]},"qstring-single":{"begin":"'","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.js"}},"end":"(')|([^\\\\n\\\\\\\\])$","endCaptures":{"1":{"name":"punctuation.definition.string.end.js"},"2":{"name":"invalid.illegal.newline.js"}},"name":"string.quoted.single.js","patterns":[{"include":"#string-character-escape"}]},"regex":{"patterns":[{"begin":"(?<!\\\\+\\\\+|--|})(?<=[!(+,:=?\\\\[]|^return|[^$._[:alnum:]]return|^case|[^$._[:alnum:]]case|=>|&&|\\\\|\\\\||\\\\*/)\\\\s*(/)(?![*/])(?=(?:[^()/\\\\[\\\\\\\\]|\\\\\\\\.|\\\\[([^]\\\\\\\\]|\\\\\\\\.)+]|\\\\(([^)\\\\\\\\]|\\\\\\\\.)+\\\\))+/([dgimsuvy]+|(?![*/])|(?=/\\\\*))(?!\\\\s*[$0-9A-Z_a-z]))","beginCaptures":{"1":{"name":"punctuation.definition.string.begin.js"}},"end":"(/)([dgimsuvy]*)","endCaptures":{"1":{"name":"punctuation.definition.string.end.js"},"2":{"name":"keyword.other.js"}},"name":"string.regexp.js","patterns":[{"include":"#regexp"}]},{"begin":"((?<![]$)_[:alnum:]]|\\\\+\\\\+|--|}|\\\\*/)|((?<=^return|[^$._[:alnum:]]return|^case|[^$._[:alnum:]]case))\\\\s*)/(?![*/])(?=(?:[^/\\\\[\\\\\\\\]|\\\\\\\\.|\\\\[([^]\\\\\\\\]|\\\\\\\\.)*])+/([dgimsuvy]+|(?![*/])|(?=/\\\\*))(?!\\\\s*[$0-9A-Z_a-z]))","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.js"}},"end":"(/)([dgimsuvy]*)","endCaptures":{"1":{"name":"punctuation.definition.string.end.js"},"2":{"name":"keyword.other.js"}},"name":"string.regexp.js","patterns":[{"include":"#regexp"}]}]},"regex-character-class":{"patterns":[{"match":"\\\\\\\\[DSWdfnrstvw]|\\\\.","name":"constant.other.character-class.regexp"},{"match":"\\\\\\\\([0-7]{3}|x\\\\h{2}|u\\\\h{4})","name":"constant.character.numeric.regexp"},{"match":"\\\\\\\\c[A-Z]","name":"constant.character.control.regexp"},{"match":"\\\\\\\\.","name":"constant.character.escape.backslash.regexp"}]},"regexp":{"patterns":[{"match":"\\\\\\\\[Bb]|[$^]","name":"keyword.control.anchor.regexp"},{"captures":{"0":{"name":"keyword.other.back-reference.regexp"},"1":{"name":"variable.other.regexp"}},"match":"\\\\\\\\(?:[1-9]\\\\d*|k<([$A-Z_a-z][$\\\\w]*)>)"},{"match":"[*+?]|\\\\{(\\\\d+,\\\\d+|\\\\d+,|,\\\\d+|\\\\d+)}\\\\??","name":"keyword.operator.quantifier.regexp"},{"match":"\\\\|","name":"keyword.operator.or.regexp"},{"begin":"(\\\\()((\\\\?=)|(\\\\?!)|(\\\\?<=)|(\\\\?<!))","beginCaptures":{"1":{"name":"punctuation.definition.group.regexp"},"2":{"name":"punctuation.definition.group.assertion.regexp"},"3":{"name":"meta.assertion.look-ahead.regexp"},"4":{"name":"meta.assertion.negative-look-ahead.regexp"},"5":{"name":"meta.assertion.look-behind.regexp"},"6":{"name":"meta.assertion.negative-look-behind.regexp"}},"end":"(\\\\))","endCaptures":{"1":{"name":"punctuation.definition.group.regexp"}},"name":"meta.group.assertion.regexp","patterns":[{"include":"#regexp"}]},{"begin":"\\\\((?:(\\\\?:)|\\\\?<([$A-Z_a-z][$\\\\w]*)>)?","beginCaptures":{"0":{"name":"punctuation.definition.group.regexp"},"1":{"name":"punctuation.definition.group.no-capture.regexp"},"2":{"name":"variable.other.regexp"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.definition.group.regexp"}},"name":"meta.group.regexp","patterns":[{"include":"#regexp"}]},{"begin":"(\\\\[)(\\\\^)?","beginCaptures":{"1":{"name":"punctuation.definition.character-class.regexp"},"2":{"name":"keyword.operator.negation.regexp"}},"end":"(])","endCaptures":{"1":{"name":"punctuation.definition.character-class.regexp"}},"name":"constant.other.character-class.set.regexp","patterns":[{"captures":{"1":{"name":"constant.character.numeric.regexp"},"2":{"name":"constant.character.control.regexp"},"3":{"name":"constant.character.escape.backslash.regexp"},"4":{"name":"constant.character.numeric.regexp"},"5":{"name":"constant.character.control.regexp"},"6":{"name":"constant.character.escape.backslash.regexp"}},"match":"(?:.|(\\\\\\\\(?:[0-7]{3}|x\\\\h{2}|u\\\\h{4}))|(\\\\\\\\c[A-Z])|(\\\\\\\\.))-(?:[^]\\\\\\\\]|(\\\\\\\\(?:[0-7]{3}|x\\\\h{2}|u\\\\h{4}))|(\\\\\\\\c[A-Z])|(\\\\\\\\.))","name":"constant.other.character-class.range.regexp"},{"include":"#regex-character-class"}]},{"include":"#regex-character-class"}]},"return-type":{"patterns":[{"begin":"(?<=\\\\))\\\\s*(:)(?=\\\\s*\\\\S)","beginCaptures":{"1":{"name":"keyword.operator.type.annotation.js"}},"end":"(?<![\\\\&:|])(?=$|^|[,;{}]|//)","name":"meta.return.type.js","patterns":[{"include":"#return-type-core"}]},{"begin":"(?<=\\\\))\\\\s*(:)","beginCaptures":{"1":{"name":"keyword.operator.type.annotation.js"}},"end":"(?<![\\\\&:|])((?=[,;{}]|//|^\\\\s*$)|((?<=\\\\S)(?=\\\\s*$)))","name":"meta.return.type.js","patterns":[{"include":"#return-type-core"}]}]},"return-type-core":{"patterns":[{"include":"#comment"},{"begin":"(?<=[\\\\&:|])(?=\\\\s*\\\\{)","end":"(?<=})","patterns":[{"include":"#type-object"}]},{"include":"#type-predicate-operator"},{"include":"#type"}]},"shebang":{"captures":{"1":{"name":"punctuation.definition.comment.js"}},"match":"\\\\A(#!).*(?=$)","name":"comment.line.shebang.js"},"single-line-comment-consuming-line-ending":{"begin":"(^[\\\\t ]+)?((//)(?:\\\\s*((@)internal)(?=\\\\s|$))?)","beginCaptures":{"1":{"name":"punctuation.whitespace.comment.leading.js"},"2":{"name":"comment.line.double-slash.js"},"3":{"name":"punctuation.definition.comment.js"},"4":{"name":"storage.type.internaldeclaration.js"},"5":{"name":"punctuation.decorator.internaldeclaration.js"}},"contentName":"comment.line.double-slash.js","end":"(?=^)"},"statements":{"patterns":[{"include":"#declaration"},{"include":"#control-statement"},{"include":"#after-operator-block-as-object-literal"},{"include":"#decl-block"},{"include":"#label"},{"include":"#expression"},{"include":"#punctuation-semicolon"},{"include":"#string"},{"include":"#comment"}]},"string":{"patterns":[{"include":"#qstring-single"},{"include":"#qstring-double"},{"include":"#template"}]},"string-character-escape":{"match":"\\\\\\\\(x\\\\h{2}|u\\\\h{4}|u\\\\{\\\\h+}|[012][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.|$)","name":"constant.character.escape.js"},"super-literal":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))super\\\\b(?!\\\\$)","name":"variable.language.super.js"},"support-function-call-identifiers":{"patterns":[{"include":"#literal"},{"include":"#support-objects"},{"include":"#object-identifiers"},{"include":"#punctuation-accessor"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))import(?=\\\\s*\\\\(\\\\s*[\\"'\`])","name":"keyword.operator.expression.import.js"}]},"support-objects":{"patterns":[{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(arguments)\\\\b(?!\\\\$)","name":"variable.language.arguments.js"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(Promise)\\\\b(?!\\\\$)","name":"support.class.promise.js"},{"captures":{"1":{"name":"keyword.control.import.js"},"2":{"name":"punctuation.accessor.js"},"3":{"name":"punctuation.accessor.optional.js"},"4":{"name":"support.variable.property.importmeta.js"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(import)\\\\s*(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*(meta)\\\\b(?!\\\\$)"},{"captures":{"1":{"name":"keyword.operator.new.js"},"2":{"name":"punctuation.accessor.js"},"3":{"name":"punctuation.accessor.optional.js"},"4":{"name":"support.variable.property.target.js"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(new)\\\\s*(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*(target)\\\\b(?!\\\\$)"},{"captures":{"1":{"name":"punctuation.accessor.js"},"2":{"name":"punctuation.accessor.optional.js"},"3":{"name":"support.variable.property.js"},"4":{"name":"support.constant.js"}},"match":"(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*(?:(constructor|length|prototype|__proto__)\\\\b(?!\\\\$|\\\\s*(<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\()|(EPSILON|MAX_SAFE_INTEGER|MAX_VALUE|MIN_SAFE_INTEGER|MIN_VALUE|NEGATIVE_INFINITY|POSITIVE_INFINITY)\\\\b(?!\\\\$))"},{"captures":{"1":{"name":"support.type.object.module.js"},"2":{"name":"support.type.object.module.js"},"3":{"name":"punctuation.accessor.js"},"4":{"name":"punctuation.accessor.optional.js"},"5":{"name":"support.type.object.module.js"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(exports)|(module)(?:(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))(exports|id|filename|loaded|parent|children))?)\\\\b(?!\\\\$)"}]},"switch-statement":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?=\\\\bswitch\\\\s*\\\\()","end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.js"}},"name":"switch-statement.expr.js","patterns":[{"include":"#comment"},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(switch)\\\\s*(\\\\()","beginCaptures":{"1":{"name":"keyword.control.switch.js"},"2":{"name":"meta.brace.round.js"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.js"}},"name":"switch-expression.expr.js","patterns":[{"include":"#expression"}]},{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.block.js"}},"end":"(?=})","name":"switch-block.expr.js","patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(case|default(?=:))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"1":{"name":"keyword.control.switch.js"}},"end":"(?=:)","name":"case-clause.expr.js","patterns":[{"include":"#expression"}]},{"begin":"(:)\\\\s*(\\\\{)","beginCaptures":{"1":{"name":"case-clause.expr.js punctuation.definition.section.case-statement.js"},"2":{"name":"meta.block.js punctuation.definition.block.js"}},"contentName":"meta.block.js","end":"}","endCaptures":{"0":{"name":"meta.block.js punctuation.definition.block.js"}},"patterns":[{"include":"#statements"}]},{"captures":{"0":{"name":"case-clause.expr.js punctuation.definition.section.case-statement.js"}},"match":"(:)"},{"include":"#statements"}]}]},"template":{"patterns":[{"include":"#template-call"},{"begin":"([$_[:alpha:]][$_[:alnum:]]*)?(\`)","beginCaptures":{"1":{"name":"entity.name.function.tagged-template.js"},"2":{"name":"string.template.js punctuation.definition.string.template.begin.js"}},"contentName":"string.template.js","end":"\`","endCaptures":{"0":{"name":"string.template.js punctuation.definition.string.template.end.js"}},"patterns":[{"include":"#template-substitution-element"},{"include":"#string-character-escape"}]}]},"template-call":{"patterns":[{"begin":"(?=(([$_[:alpha:]][$_[:alnum:]]*\\\\s*\\\\??\\\\.\\\\s*)*|(\\\\??\\\\.\\\\s*)?)([$_[:alpha:]][$_[:alnum:]]*)(<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))(([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>)*(?<!=)>))*(?<!=)>)*(?<!=)>\\\\s*)?\`)","end":"(?=\`)","patterns":[{"begin":"(?=(([$_[:alpha:]][$_[:alnum:]]*\\\\s*\\\\??\\\\.\\\\s*)*|(\\\\??\\\\.\\\\s*)?)([$_[:alpha:]][$_[:alnum:]]*))","end":"(?=(<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))(([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>)*(?<!=)>))*(?<!=)>)*(?<!=)>\\\\s*)?\`)","patterns":[{"include":"#support-function-call-identifiers"},{"match":"([$_[:alpha:]][$_[:alnum:]]*)","name":"entity.name.function.tagged-template.js"}]},{"include":"#type-arguments"}]},{"begin":"([$_[:alpha:]][$_[:alnum:]]*)?\\\\s*(?=(<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))(([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>|<\\\\s*(((keyof|infer|typeof|readonly)\\\\s+)|(([$_[:alpha:]][$_[:alnum:]]*|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))(?=\\\\s*([,.<>\\\\[]|=>|&(?!&)|\\\\|(?!\\\\|)))))([^(<>]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(?<==)>)*(?<!=)>))*(?<!=)>)*(?<!=)>\\\\s*)\`)","beginCaptures":{"1":{"name":"entity.name.function.tagged-template.js"}},"end":"(?=\`)","patterns":[{"include":"#type-arguments"}]}]},"template-substitution-element":{"begin":"\\\\$\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.template-expression.begin.js"}},"contentName":"meta.embedded.line.js","end":"}","endCaptures":{"0":{"name":"punctuation.definition.template-expression.end.js"}},"name":"meta.template.expression.js","patterns":[{"include":"#expression"}]},"template-type":{"patterns":[{"include":"#template-call"},{"begin":"([$_[:alpha:]][$_[:alnum:]]*)?(\`)","beginCaptures":{"1":{"name":"entity.name.function.tagged-template.js"},"2":{"name":"string.template.js punctuation.definition.string.template.begin.js"}},"contentName":"string.template.js","end":"\`","endCaptures":{"0":{"name":"string.template.js punctuation.definition.string.template.end.js"}},"patterns":[{"include":"#template-type-substitution-element"},{"include":"#string-character-escape"}]}]},"template-type-substitution-element":{"begin":"\\\\$\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.template-expression.begin.js"}},"contentName":"meta.embedded.line.js","end":"}","endCaptures":{"0":{"name":"punctuation.definition.template-expression.end.js"}},"name":"meta.template.expression.js","patterns":[{"include":"#type"}]},"ternary-expression":{"begin":"(?!\\\\?\\\\.\\\\s*\\\\D)(\\\\?)(?!\\\\?)","beginCaptures":{"1":{"name":"keyword.operator.ternary.js"}},"end":"\\\\s*(:)","endCaptures":{"1":{"name":"keyword.operator.ternary.js"}},"patterns":[{"include":"#expression"}]},"this-literal":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))this\\\\b(?!\\\\$)","name":"variable.language.this.js"},"type":{"patterns":[{"include":"#comment"},{"include":"#type-string"},{"include":"#numeric-literal"},{"include":"#type-primitive"},{"include":"#type-builtin-literals"},{"include":"#type-parameters"},{"include":"#type-tuple"},{"include":"#type-object"},{"include":"#type-operators"},{"include":"#type-conditional"},{"include":"#type-fn-type-parameters"},{"include":"#type-paren-or-function-parameters"},{"include":"#type-function-return-type"},{"captures":{"1":{"name":"storage.modifier.js"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(readonly)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*"},{"include":"#type-name"}]},"type-alias-declaration":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(type)\\\\b\\\\s+([$_[:alpha:]][$_[:alnum:]]*)\\\\s*","beginCaptures":{"1":{"name":"keyword.control.export.js"},"2":{"name":"storage.modifier.js"},"3":{"name":"storage.type.type.js"},"4":{"name":"entity.name.type.alias.js"}},"end":"(?=[;}]|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","name":"meta.type.declaration.js","patterns":[{"include":"#comment"},{"include":"#type-parameters"},{"begin":"(=)\\\\s*(intrinsic)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"1":{"name":"keyword.operator.assignment.js"},"2":{"name":"keyword.control.intrinsic.js"}},"end":"(?=[;}]|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","patterns":[{"include":"#type"}]},{"begin":"(=)\\\\s*","beginCaptures":{"1":{"name":"keyword.operator.assignment.js"}},"end":"(?=[;}]|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","patterns":[{"include":"#type"}]}]},"type-annotation":{"patterns":[{"begin":"(:)(?=\\\\s*\\\\S)","beginCaptures":{"1":{"name":"keyword.operator.type.annotation.js"}},"end":"(?<![\\\\&:|])(?!\\\\s*[\\\\&|]\\\\s+)((?=^|[]),;}]|//)|(?==[^>])|((?<=[]$)>_}[:alpha:]])\\\\s*(?=\\\\{)))","name":"meta.type.annotation.js","patterns":[{"include":"#type"}]},{"begin":"(:)","beginCaptures":{"1":{"name":"keyword.operator.type.annotation.js"}},"end":"(?<![\\\\&:|])((?=[]),;}]|//)|(?==[^>])|(?=^\\\\s*$)|((?<=[]$)>_}[:alpha:]])\\\\s*(?=\\\\{)))","name":"meta.type.annotation.js","patterns":[{"include":"#type"}]}]},"type-arguments":{"begin":"<","beginCaptures":{"0":{"name":"punctuation.definition.typeparameters.begin.js"}},"end":">","endCaptures":{"0":{"name":"punctuation.definition.typeparameters.end.js"}},"name":"meta.type.parameters.js","patterns":[{"include":"#type-arguments-body"}]},"type-arguments-body":{"patterns":[{"captures":{"0":{"name":"keyword.operator.type.js"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(_)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))"},{"include":"#type"},{"include":"#punctuation-comma"}]},"type-builtin-literals":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(this|true|false|undefined|null|object)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"support.type.builtin.js"},"type-conditional":{"patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(extends)\\\\s+","beginCaptures":{"1":{"name":"storage.modifier.js"}},"end":"(?<=:)","patterns":[{"begin":"\\\\?","beginCaptures":{"0":{"name":"keyword.operator.ternary.js"}},"end":":","endCaptures":{"0":{"name":"keyword.operator.ternary.js"}},"patterns":[{"include":"#type"}]},{"include":"#type"}]}]},"type-fn-type-parameters":{"patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(abstract)\\\\s+)?(new)\\\\b(?=\\\\s*<)","beginCaptures":{"1":{"name":"meta.type.constructor.js storage.modifier.js"},"2":{"name":"meta.type.constructor.js keyword.control.new.js"}},"end":"(?<=>)","patterns":[{"include":"#comment"},{"include":"#type-parameters"}]},{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(abstract)\\\\s+)?(new)\\\\b\\\\s*(?=\\\\()","beginCaptures":{"1":{"name":"storage.modifier.js"},"2":{"name":"keyword.control.new.js"}},"end":"(?<=\\\\))","name":"meta.type.constructor.js","patterns":[{"include":"#function-parameters"}]},{"begin":"((?=\\\\(\\\\s*((\\\\))|(\\\\.\\\\.\\\\.)|([$_[:alnum:]]+\\\\s*(([,:=?])|(\\\\)\\\\s*=>))))))","end":"(?<=\\\\))","name":"meta.type.function.js","patterns":[{"include":"#function-parameters"}]}]},"type-function-return-type":{"patterns":[{"begin":"(=>)(?=\\\\s*\\\\S)","beginCaptures":{"1":{"name":"storage.type.function.arrow.js"}},"end":"(?<!=>)(?<![\\\\&|])(?=[]),:;=>?{}]|//|$)","name":"meta.type.function.return.js","patterns":[{"include":"#type-function-return-type-core"}]},{"begin":"=>","beginCaptures":{"0":{"name":"storage.type.function.arrow.js"}},"end":"(?<!=>)(?<![\\\\&|])((?=[]),:;=>?{}]|//|^\\\\s*$)|((?<=\\\\S)(?=\\\\s*$)))","name":"meta.type.function.return.js","patterns":[{"include":"#type-function-return-type-core"}]}]},"type-function-return-type-core":{"patterns":[{"include":"#comment"},{"begin":"(?<==>)(?=\\\\s*\\\\{)","end":"(?<=})","patterns":[{"include":"#type-object"}]},{"include":"#type-predicate-operator"},{"include":"#type"}]},"type-infer":{"patterns":[{"captures":{"1":{"name":"keyword.operator.expression.infer.js"},"2":{"name":"entity.name.type.js"},"3":{"name":"keyword.operator.expression.extends.js"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(infer)\\\\s+([$_[:alpha:]][$_[:alnum:]]*)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))(?:\\\\s+(extends)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))?","name":"meta.type.infer.js"}]},"type-name":{"patterns":[{"begin":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))\\\\s*(<)","captures":{"1":{"name":"entity.name.type.module.js"},"2":{"name":"punctuation.accessor.js"},"3":{"name":"punctuation.accessor.optional.js"},"4":{"name":"meta.type.parameters.js punctuation.definition.typeparameters.begin.js"}},"contentName":"meta.type.parameters.js","end":"(>)","endCaptures":{"1":{"name":"meta.type.parameters.js punctuation.definition.typeparameters.end.js"}},"patterns":[{"include":"#type-arguments-body"}]},{"begin":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(<)","beginCaptures":{"1":{"name":"entity.name.type.js"},"2":{"name":"meta.type.parameters.js punctuation.definition.typeparameters.begin.js"}},"contentName":"meta.type.parameters.js","end":"(>)","endCaptures":{"1":{"name":"meta.type.parameters.js punctuation.definition.typeparameters.end.js"}},"patterns":[{"include":"#type-arguments-body"}]},{"captures":{"1":{"name":"entity.name.type.module.js"},"2":{"name":"punctuation.accessor.js"},"3":{"name":"punctuation.accessor.optional.js"}},"match":"([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(?:(\\\\.)|(\\\\?\\\\.(?!\\\\s*\\\\d)))"},{"match":"[$_[:alpha:]][$_[:alnum:]]*","name":"entity.name.type.js"}]},"type-object":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.block.js"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.block.js"}},"name":"meta.object.type.js","patterns":[{"include":"#comment"},{"include":"#method-declaration"},{"include":"#indexer-declaration"},{"include":"#indexer-mapped-type-declaration"},{"include":"#field-declaration"},{"include":"#type-annotation"},{"begin":"\\\\.\\\\.\\\\.","beginCaptures":{"0":{"name":"keyword.operator.spread.js"}},"end":"(?=[,;}]|$)|(?<=})","patterns":[{"include":"#type"}]},{"include":"#punctuation-comma"},{"include":"#punctuation-semicolon"},{"include":"#type"}]},"type-operators":{"patterns":[{"include":"#typeof-operator"},{"include":"#type-infer"},{"begin":"([\\\\&|])(?=\\\\s*\\\\{)","beginCaptures":{"0":{"name":"keyword.operator.type.js"}},"end":"(?<=})","patterns":[{"include":"#type-object"}]},{"begin":"[\\\\&|]","beginCaptures":{"0":{"name":"keyword.operator.type.js"}},"end":"(?=\\\\S)"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))keyof(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.operator.expression.keyof.js"},{"match":"([:?])","name":"keyword.operator.ternary.js"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))import(?=\\\\s*\\\\()","name":"keyword.operator.expression.import.js"}]},"type-parameters":{"begin":"(<)","beginCaptures":{"1":{"name":"punctuation.definition.typeparameters.begin.js"}},"end":"(>)","endCaptures":{"1":{"name":"punctuation.definition.typeparameters.end.js"}},"name":"meta.type.parameters.js","patterns":[{"include":"#comment"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(extends|in|out|const)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"storage.modifier.js"},{"include":"#type"},{"include":"#punctuation-comma"},{"match":"(=)(?!>)","name":"keyword.operator.assignment.js"}]},"type-paren-or-function-parameters":{"begin":"\\\\(","beginCaptures":{"0":{"name":"meta.brace.round.js"}},"end":"\\\\)","endCaptures":{"0":{"name":"meta.brace.round.js"}},"name":"meta.type.paren.cover.js","patterns":[{"captures":{"1":{"name":"storage.modifier.js"},"2":{"name":"keyword.operator.rest.js"},"3":{"name":"entity.name.function.js variable.language.this.js"},"4":{"name":"entity.name.function.js"},"5":{"name":"keyword.operator.optional.js"}},"match":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(public|private|protected|readonly)\\\\s+)?(?:(\\\\.\\\\.\\\\.)\\\\s*)?(?<![:=])(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))\\\\s*(\\\\??)(?=\\\\s*(:\\\\s*((<)|(\\\\(\\\\s*((\\\\))|(\\\\.\\\\.\\\\.)|([$_[:alnum:]]+\\\\s*(([,:=?])|(\\\\)\\\\s*=>)))))))|(:\\\\s*(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))Function(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|(:\\\\s*((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))))"},{"captures":{"1":{"name":"storage.modifier.js"},"2":{"name":"keyword.operator.rest.js"},"3":{"name":"variable.parameter.js variable.language.this.js"},"4":{"name":"variable.parameter.js"},"5":{"name":"keyword.operator.optional.js"}},"match":"(?:(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(public|private|protected|readonly)\\\\s+)?(?:(\\\\.\\\\.\\\\.)\\\\s*)?(?<![:=])(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))\\\\s*(\\\\??)(?=:)"},{"include":"#type-annotation"},{"match":",","name":"punctuation.separator.parameter.js"},{"include":"#type"}]},"type-predicate-operator":{"patterns":[{"captures":{"1":{"name":"keyword.operator.type.asserts.js"},"2":{"name":"variable.parameter.js variable.language.this.js"},"3":{"name":"variable.parameter.js"},"4":{"name":"keyword.operator.expression.is.js"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:(asserts)\\\\s+)?(?!asserts)(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))\\\\s(is)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))"},{"captures":{"1":{"name":"keyword.operator.type.asserts.js"},"2":{"name":"variable.parameter.js variable.language.this.js"},"3":{"name":"variable.parameter.js"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(asserts)\\\\s+(?!is)(?:(this)|([$_[:alpha:]][$_[:alnum:]]*))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))asserts(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.operator.type.asserts.js"},{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))is(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"keyword.operator.expression.is.js"}]},"type-primitive":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(string|number|bigint|boolean|symbol|any|void|never|unknown)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"support.type.primitive.js"},"type-string":{"patterns":[{"include":"#qstring-single"},{"include":"#qstring-double"},{"include":"#template-type"}]},"type-tuple":{"begin":"\\\\[","beginCaptures":{"0":{"name":"meta.brace.square.js"}},"end":"]","endCaptures":{"0":{"name":"meta.brace.square.js"}},"name":"meta.type.tuple.js","patterns":[{"match":"\\\\.\\\\.\\\\.","name":"keyword.operator.rest.js"},{"captures":{"1":{"name":"entity.name.label.js"},"2":{"name":"keyword.operator.optional.js"},"3":{"name":"punctuation.separator.label.js"}},"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))([$_[:alpha:]][$_[:alnum:]]*)\\\\s*(\\\\?)?\\\\s*(:)"},{"include":"#type"},{"include":"#punctuation-comma"}]},"typeof-operator":{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))typeof(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","beginCaptures":{"0":{"name":"keyword.operator.expression.typeof.js"}},"end":"(?=[]\\\\&),:;=>?{|}]|(extends\\\\s+)|$|;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)","patterns":[{"include":"#type-arguments"},{"include":"#expression"}]},"undefined-literal":{"match":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))undefined(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))","name":"constant.language.undefined.js"},"var-expr":{"patterns":[{"begin":"(?=(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(var|let)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))","end":"(?!(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(var|let)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))((?=^|[;}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)|((?<!^let|[^$._[:alnum:]]let|^var|[^$._[:alnum:]]var)(?=\\\\s*$)))","name":"meta.var.expr.js","patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(var|let)(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*","beginCaptures":{"1":{"name":"keyword.control.export.js"},"2":{"name":"storage.modifier.js"},"3":{"name":"storage.type.js"}},"end":"(?=\\\\S)"},{"include":"#destructuring-variable"},{"include":"#var-single-variable"},{"include":"#variable-initializer"},{"include":"#comment"},{"begin":"(,)\\\\s*(?=$|//)","beginCaptures":{"1":{"name":"punctuation.separator.comma.js"}},"end":"(?<!,)(((?=[;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|^\\\\s*$))|((?<=\\\\S)(?=\\\\s*$)))","patterns":[{"include":"#single-line-comment-consuming-line-ending"},{"include":"#comment"},{"include":"#destructuring-variable"},{"include":"#var-single-variable"},{"include":"#punctuation-comma"}]},{"include":"#punctuation-comma"}]},{"begin":"(?=(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(const(?!\\\\s+enum\\\\b))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))","beginCaptures":{"1":{"name":"keyword.control.export.js"},"2":{"name":"storage.modifier.js"},"3":{"name":"storage.type.js"}},"end":"(?!(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(const(?!\\\\s+enum\\\\b))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))((?=^|[;}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)|((?<!(?:^|[^$._[:alnum:]])const)(?=\\\\s*$)))","name":"meta.var.expr.js","patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b(const(?!\\\\s+enum\\\\b))(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*","beginCaptures":{"1":{"name":"keyword.control.export.js"},"2":{"name":"storage.modifier.js"},"3":{"name":"storage.type.js"}},"end":"(?=\\\\S)"},{"include":"#destructuring-const"},{"include":"#var-single-const"},{"include":"#variable-initializer"},{"include":"#comment"},{"begin":"(,)\\\\s*(?=$|//)","beginCaptures":{"1":{"name":"punctuation.separator.comma.js"}},"end":"(?<!,)(((?=[;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|^\\\\s*$))|((?<=\\\\S)(?=\\\\s*$)))","patterns":[{"include":"#single-line-comment-consuming-line-ending"},{"include":"#comment"},{"include":"#destructuring-const"},{"include":"#var-single-const"},{"include":"#punctuation-comma"}]},{"include":"#punctuation-comma"}]},{"begin":"(?=(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b\\\\b(using(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])|await\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b)\\\\b(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))","beginCaptures":{"1":{"name":"keyword.control.export.js"},"2":{"name":"storage.modifier.js"},"3":{"name":"storage.type.js"}},"end":"(?!(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b\\\\b(using(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])|await\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b)\\\\b(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))((?=[;}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b)|((?<!(?:^|[^$._[:alnum:]]|^await\\\\s+|[^$._[:alnum:]]await\\\\s+)using)(?=\\\\s*$)))","name":"meta.var.expr.js","patterns":[{"begin":"(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(?:\\\\b(export)\\\\s+)?(?:\\\\b(declare)\\\\s+)?\\\\b\\\\b(using(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])|await\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b)\\\\b(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.))\\\\s*","beginCaptures":{"1":{"name":"keyword.control.export.js"},"2":{"name":"storage.modifier.js"},"3":{"name":"storage.type.js"}},"end":"(?=\\\\S)"},{"include":"#var-single-const"},{"include":"#variable-initializer"},{"include":"#comment"},{"begin":"(,)\\\\s*((?!\\\\S)|(?=//))","beginCaptures":{"1":{"name":"punctuation.separator.comma.js"}},"end":"(?<!,)(((?=[;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|^\\\\s*$))|((?<=\\\\S)(?=\\\\s*$)))","patterns":[{"include":"#single-line-comment-consuming-line-ending"},{"include":"#comment"},{"include":"#var-single-const"},{"include":"#punctuation-comma"}]},{"include":"#punctuation-comma"}]}]},"var-single-const":{"patterns":[{"begin":"([$_[:alpha:]][$_[:alnum:]]*)(?=\\\\s*(=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|(<\\\\s*[$_[:alpha:]][$_[:alnum:]]*\\\\s+extends\\\\s*[^=>])|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"'()\`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))))|(:\\\\s*((<)|(\\\\(\\\\s*((\\\\))|(\\\\.\\\\.\\\\.)|([$_[:alnum:]]+\\\\s*(([,:=?])|(\\\\)\\\\s*=>)))))))|(:\\\\s*(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))Function(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|(:\\\\s*((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))))|(:\\\\s*(=>|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(<[^<>]*>)|[^(),<=>])+=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|(<\\\\s*[$_[:alpha:]][$_[:alnum:]]*\\\\s+extends\\\\s*[^=>])|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"'()\`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>))))))","beginCaptures":{"1":{"name":"meta.definition.variable.js variable.other.constant.js entity.name.function.js"}},"end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|(;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b))","name":"meta.var-single-variable.expr.js","patterns":[{"include":"#var-single-variable-type-annotation"}]},{"begin":"([$_[:alpha:]][$_[:alnum:]]*)","beginCaptures":{"1":{"name":"meta.definition.variable.js variable.other.constant.js"}},"end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|(;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b))","name":"meta.var-single-variable.expr.js","patterns":[{"include":"#var-single-variable-type-annotation"}]}]},"var-single-variable":{"patterns":[{"begin":"([$_[:alpha:]][$_[:alnum:]]*)(!)?(?=\\\\s*(=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|(<\\\\s*[$_[:alpha:]][$_[:alnum:]]*\\\\s+extends\\\\s*[^=>])|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"'()\`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>)))))|(:\\\\s*((<)|(\\\\(\\\\s*((\\\\))|(\\\\.\\\\.\\\\.)|([$_[:alnum:]]+\\\\s*(([,:=?])|(\\\\)\\\\s*=>)))))))|(:\\\\s*(?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))Function(?![$_[:alnum:]])(?:(?=\\\\.\\\\.\\\\.)|(?!\\\\.)))|(:\\\\s*((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))))))|(:\\\\s*(=>|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(<[^<>]*>)|[^(),<=>])+=\\\\s*(((async\\\\s+)?((function\\\\s*[(*<])|(function\\\\s+)|([$_[:alpha:]][$_[:alnum:]]*\\\\s*=>)))|((async\\\\s*)?(((<\\\\s*)$|(\\\\(\\\\s*((([\\\\[{]\\\\s*)?)$|((\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})\\\\s*((:\\\\s*\\\\{?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*)))|((\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])\\\\s*((:\\\\s*\\\\[?)$|((\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+\\\\s*)?=\\\\s*))))))|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*((\\\\)\\\\s*:)|((\\\\.\\\\.\\\\.\\\\s*)?[$_[:alpha:]][$_[:alnum:]]*\\\\s*:)))|(<\\\\s*[$_[:alpha:]][$_[:alnum:]]*\\\\s+extends\\\\s*[^=>])|((<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<]|<\\\\s*(((const\\\\s+)?[$_[:alpha:]])|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*]))([^<=>]|=[^<])*>)*>)*>\\\\s*)?\\\\(\\\\s*(/\\\\*([^*]|(\\\\*[^/]))*\\\\*/\\\\s*)*(([$_[:alpha:]]|(\\\\{([^{}]|(\\\\{([^{}]|\\\\{[^{}]*})*}))*})|(\\\\[([^]\\\\[]|(\\\\[([^]\\\\[]|\\\\[[^]\\\\[]*])*]))*])|(\\\\.\\\\.\\\\.\\\\s*[$_[:alpha:]]))([^\\"'()\`]|(\\\\(([^()]|(\\\\(([^()]|\\\\([^()]*\\\\))*\\\\)))*\\\\))|('([^'\\\\\\\\]|\\\\\\\\.)*')|(\\"([^\\"\\\\\\\\]|\\\\\\\\.)*\\")|(\`([^\\\\\\\\\`]|\\\\\\\\.)*\`))*)?\\\\)(\\\\s*:\\\\s*([^()<>{}]|<([^<>]|<([^<>]|<[^<>]+>)+>)+>|\\\\([^()]+\\\\)|\\\\{[^{}]+})+)?\\\\s*=>))))))","beginCaptures":{"1":{"name":"meta.definition.variable.js entity.name.function.js"},"2":{"name":"keyword.operator.definiteassignment.js"}},"end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|(;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b))","name":"meta.var-single-variable.expr.js","patterns":[{"include":"#var-single-variable-type-annotation"}]},{"begin":"(\\\\p{upper}[$_\\\\d[:upper:]]*)(?![$_[:alnum:]])(!)?","beginCaptures":{"1":{"name":"meta.definition.variable.js variable.other.constant.js"},"2":{"name":"keyword.operator.definiteassignment.js"}},"end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|(;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b))","name":"meta.var-single-variable.expr.js","patterns":[{"include":"#var-single-variable-type-annotation"}]},{"begin":"([$_[:alpha:]][$_[:alnum:]]*)(!)?","beginCaptures":{"1":{"name":"meta.definition.variable.js variable.other.readwrite.js"},"2":{"name":"keyword.operator.definiteassignment.js"}},"end":"(?=$|^|[,;=}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+)|(;|^\\\\s*$|^\\\\s*(?:abstract|async|\\\\bawait\\\\s+\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b\\\\b|break|case|catch|class|const|continue|declare|do|else|enum|export|finally|function|for|goto|if|import|interface|let|module|namespace|switch|return|throw|try|type|\\\\busing(?=\\\\s+(?!in\\\\b|of\\\\b(?!\\\\s*(?:of\\\\b|=)))[$_[:alpha:]])\\\\b|var|while)\\\\b))","name":"meta.var-single-variable.expr.js","patterns":[{"include":"#var-single-variable-type-annotation"}]}]},"var-single-variable-type-annotation":{"patterns":[{"include":"#type-annotation"},{"include":"#string"},{"include":"#comment"}]},"variable-initializer":{"patterns":[{"begin":"(?<![!=])(=)(?!=)(?=\\\\s*\\\\S)(?!\\\\s*.*=>\\\\s*$)","beginCaptures":{"1":{"name":"keyword.operator.assignment.js"}},"end":"(?=$|^|[]),;}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+))","patterns":[{"include":"#expression"}]},{"begin":"(?<![!=])(=)(?!=)","beginCaptures":{"1":{"name":"keyword.operator.assignment.js"}},"end":"(?=[]),;}]|((?<![$_[:alnum:]])(?:(?<=\\\\.\\\\.\\\\.)|(?<!\\\\.))(of|in)\\\\s+))|(?=^\\\\s*$)|(?<![-\\\\&*+/|])(?<=\\\\S)(?<!=)(?=\\\\s*$)","patterns":[{"include":"#expression"}]}]}},"scopeName":"source.js","aliases":["js","cjs","mjs"]}`));
      javascript_default = [
        lang2
      ];
    }
  });

  // node_modules/@shikijs/langs/dist/css.mjs
  var css_exports = {};
  __export(css_exports, {
    default: () => css_default
  });
  var lang3, css_default;
  var init_css = __esm({
    "node_modules/@shikijs/langs/dist/css.mjs"() {
      lang3 = Object.freeze(JSON.parse(`{"displayName":"CSS","name":"css","patterns":[{"include":"#comment-block"},{"include":"#escapes"},{"include":"#combinators"},{"include":"#selector"},{"include":"#at-rules"},{"include":"#rule-list"}],"repository":{"at-rules":{"patterns":[{"begin":"\\\\A\\\\uFEFF?(?i:(?=\\\\s*@charset\\\\b))","end":";|(?=$)","endCaptures":{"0":{"name":"punctuation.terminator.rule.css"}},"name":"meta.at-rule.charset.css","patterns":[{"captures":{"1":{"name":"invalid.illegal.not-lowercase.charset.css"},"2":{"name":"invalid.illegal.leading-whitespace.charset.css"},"3":{"name":"invalid.illegal.no-whitespace.charset.css"},"4":{"name":"invalid.illegal.whitespace.charset.css"},"5":{"name":"invalid.illegal.not-double-quoted.charset.css"},"6":{"name":"invalid.illegal.unclosed-string.charset.css"},"7":{"name":"invalid.illegal.unexpected-characters.charset.css"}},"match":"\\\\G((?!@charset)@\\\\w+)|\\\\G(\\\\s+)|(@charset\\\\S[^;]*)|(?<=@charset)( {2,}|\\\\t+)|(?<=@charset )([^\\";]+)|(\\"[^\\"]+)$|(?<=\\")([^;]+)"},{"captures":{"1":{"name":"keyword.control.at-rule.charset.css"},"2":{"name":"punctuation.definition.keyword.css"}},"match":"((@)charset)(?=\\\\s)"},{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.css"}},"end":"\\"|$","endCaptures":{"0":{"name":"punctuation.definition.string.end.css"}},"name":"string.quoted.double.css","patterns":[{"begin":"(?:\\\\G|^)(?=[^\\"]+$)","end":"$","name":"invalid.illegal.unclosed.string.css"}]}]},{"begin":"(?i)((@)import)(?:\\\\s+|$|(?=[\\"']|/\\\\*))","beginCaptures":{"1":{"name":"keyword.control.at-rule.import.css"},"2":{"name":"punctuation.definition.keyword.css"}},"end":";","endCaptures":{"0":{"name":"punctuation.terminator.rule.css"}},"name":"meta.at-rule.import.css","patterns":[{"begin":"\\\\G\\\\s*(?=/\\\\*)","end":"(?<=\\\\*/)\\\\s*","patterns":[{"include":"#comment-block"}]},{"include":"#string"},{"include":"#url"},{"include":"#media-query-list"}]},{"begin":"(?i)((@)font-face)(?=\\\\s*|\\\\{|/\\\\*|$)","beginCaptures":{"1":{"name":"keyword.control.at-rule.font-face.css"},"2":{"name":"punctuation.definition.keyword.css"}},"end":"(?!\\\\G)","name":"meta.at-rule.font-face.css","patterns":[{"include":"#comment-block"},{"include":"#escapes"},{"include":"#rule-list"}]},{"begin":"(?i)(@)page(?=[:{\\\\s]|/\\\\*|$)","captures":{"0":{"name":"keyword.control.at-rule.page.css"},"1":{"name":"punctuation.definition.keyword.css"}},"end":"(?=\\\\s*($|[:;{]))","name":"meta.at-rule.page.css","patterns":[{"include":"#rule-list"}]},{"begin":"(?i)(?=@media([(\\\\s]|/\\\\*|$))","end":"(?<=})(?!\\\\G)","patterns":[{"begin":"(?i)\\\\G(@)media","beginCaptures":{"0":{"name":"keyword.control.at-rule.media.css"},"1":{"name":"punctuation.definition.keyword.css"}},"end":"(?=\\\\s*[;{])","name":"meta.at-rule.media.header.css","patterns":[{"include":"#media-query-list"}]},{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.section.media.begin.bracket.curly.css"}},"end":"}","endCaptures":{"0":{"name":"punctuation.section.media.end.bracket.curly.css"}},"name":"meta.at-rule.media.body.css","patterns":[{"include":"$self"}]}]},{"begin":"(?i)(?=@counter-style([\\"';{\\\\s]|/\\\\*|$))","end":"(?<=})(?!\\\\G)","patterns":[{"begin":"(?i)\\\\G(@)counter-style","beginCaptures":{"0":{"name":"keyword.control.at-rule.counter-style.css"},"1":{"name":"punctuation.definition.keyword.css"}},"end":"(?=\\\\s*\\\\{)","name":"meta.at-rule.counter-style.header.css","patterns":[{"include":"#comment-block"},{"include":"#escapes"},{"captures":{"0":{"patterns":[{"include":"#escapes"}]}},"match":"[-A-Z_a-z[^\\\\x00-\\\\x7F]](?:[-0-9A-Z_a-z[^\\\\x00-\\\\x7F]]|\\\\\\\\(?:\\\\h{1,6}|.))*","name":"variable.parameter.style-name.css"}]},{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.section.property-list.begin.bracket.curly.css"}},"end":"}","endCaptures":{"0":{"name":"punctuation.section.property-list.end.bracket.curly.css"}},"name":"meta.at-rule.counter-style.body.css","patterns":[{"include":"#comment-block"},{"include":"#escapes"},{"include":"#rule-list-innards"}]}]},{"begin":"(?i)(?=@document([\\"';{\\\\s]|/\\\\*|$))","end":"(?<=})(?!\\\\G)","patterns":[{"begin":"(?i)\\\\G(@)document","beginCaptures":{"0":{"name":"keyword.control.at-rule.document.css"},"1":{"name":"punctuation.definition.keyword.css"}},"end":"(?=\\\\s*[;{])","name":"meta.at-rule.document.header.css","patterns":[{"begin":"(?i)(?<![-\\\\w])(url-prefix|domain|regexp)(\\\\()","beginCaptures":{"1":{"name":"support.function.document-rule.css"},"2":{"name":"punctuation.section.function.begin.bracket.round.css"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.section.function.end.bracket.round.css"}},"name":"meta.function.document-rule.css","patterns":[{"include":"#string"},{"include":"#comment-block"},{"include":"#escapes"},{"match":"[^\\"')\\\\s]+","name":"variable.parameter.document-rule.css"}]},{"include":"#url"},{"include":"#commas"},{"include":"#comment-block"},{"include":"#escapes"}]},{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.section.document.begin.bracket.curly.css"}},"end":"}","endCaptures":{"0":{"name":"punctuation.section.document.end.bracket.curly.css"}},"name":"meta.at-rule.document.body.css","patterns":[{"include":"$self"}]}]},{"begin":"(?i)(?=@(?:-(?:webkit|moz|o|ms)-)?keyframes([\\"';{\\\\s]|/\\\\*|$))","end":"(?<=})(?!\\\\G)","patterns":[{"begin":"(?i)\\\\G(@)(?:-(?:webkit|moz|o|ms)-)?keyframes","beginCaptures":{"0":{"name":"keyword.control.at-rule.keyframes.css"},"1":{"name":"punctuation.definition.keyword.css"}},"end":"(?=\\\\s*\\\\{)","name":"meta.at-rule.keyframes.header.css","patterns":[{"include":"#comment-block"},{"include":"#escapes"},{"captures":{"0":{"patterns":[{"include":"#escapes"}]}},"match":"[-A-Z_a-z[^\\\\x00-\\\\x7F]](?:[-0-9A-Z_a-z[^\\\\x00-\\\\x7F]]|\\\\\\\\(?:\\\\h{1,6}|.))*","name":"variable.parameter.keyframe-list.css"}]},{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.section.keyframes.begin.bracket.curly.css"}},"end":"}","endCaptures":{"0":{"name":"punctuation.section.keyframes.end.bracket.curly.css"}},"name":"meta.at-rule.keyframes.body.css","patterns":[{"include":"#comment-block"},{"include":"#escapes"},{"captures":{"1":{"name":"entity.other.keyframe-offset.css"},"2":{"name":"entity.other.keyframe-offset.percentage.css"}},"match":"(?i)(?<![-\\\\w])(from|to)(?![-\\\\w])|([-+]?(?:\\\\d+(?:\\\\.\\\\d+)?|\\\\.\\\\d+)%)"},{"include":"#rule-list"}]}]},{"begin":"(?i)(?=@supports([(\\\\s]|/\\\\*|$))","end":"(?<=})(?!\\\\G)|(?=;)","patterns":[{"begin":"(?i)\\\\G(@)supports","beginCaptures":{"0":{"name":"keyword.control.at-rule.supports.css"},"1":{"name":"punctuation.definition.keyword.css"}},"end":"(?=\\\\s*[;{])","name":"meta.at-rule.supports.header.css","patterns":[{"include":"#feature-query-operators"},{"include":"#feature-query"},{"include":"#comment-block"},{"include":"#escapes"}]},{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.section.supports.begin.bracket.curly.css"}},"end":"}","endCaptures":{"0":{"name":"punctuation.section.supports.end.bracket.curly.css"}},"name":"meta.at-rule.supports.body.css","patterns":[{"include":"$self"}]}]},{"begin":"(?i)((@)(-(ms|o)-)?viewport)(?=[\\"';{\\\\s]|/\\\\*|$)","beginCaptures":{"1":{"name":"keyword.control.at-rule.viewport.css"},"2":{"name":"punctuation.definition.keyword.css"}},"end":"(?=\\\\s*[;@{])","name":"meta.at-rule.viewport.css","patterns":[{"include":"#comment-block"},{"include":"#escapes"}]},{"begin":"(?i)((@)font-feature-values)(?=[\\"';{\\\\s]|/\\\\*|$)\\\\s*","beginCaptures":{"1":{"name":"keyword.control.at-rule.font-feature-values.css"},"2":{"name":"punctuation.definition.keyword.css"}},"contentName":"variable.parameter.font-name.css","end":"(?=\\\\s*[;@{])","name":"meta.at-rule.font-features.css","patterns":[{"include":"#comment-block"},{"include":"#escapes"}]},{"include":"#font-features"},{"begin":"(?i)((@)namespace)(?=[\\"';\\\\s]|/\\\\*|$)","beginCaptures":{"1":{"name":"keyword.control.at-rule.namespace.css"},"2":{"name":"punctuation.definition.keyword.css"}},"end":";|(?=[@{])","endCaptures":{"0":{"name":"punctuation.terminator.rule.css"}},"name":"meta.at-rule.namespace.css","patterns":[{"include":"#url"},{"captures":{"1":{"patterns":[{"include":"#comment-block"}]},"2":{"name":"entity.name.function.namespace-prefix.css","patterns":[{"include":"#escapes"}]}},"match":"(?i)(?:\\\\G|^|(?<=\\\\s))(?=(?<=\\\\s|^)[-A-Z_a-z[^\\\\x00-\\\\x7F]]|\\\\s*/\\\\*(?:[^*]|\\\\*[^/])*\\\\*/)(.*?)([-A-Z_a-z[^\\\\x00-\\\\x7F]](?:[-0-9A-Z_a-z[^\\\\x00-\\\\x7F]]|\\\\\\\\(?:\\\\h{1,6}|.))*)"},{"include":"#comment-block"},{"include":"#escapes"},{"include":"#string"}]},{"begin":"(?i)(?=@[-\\\\w]+[^;]+;s*$)","end":"(?<=;)(?!\\\\G)","patterns":[{"begin":"(?i)\\\\G(@)[-\\\\w]+","beginCaptures":{"0":{"name":"keyword.control.at-rule.css"},"1":{"name":"punctuation.definition.keyword.css"}},"end":";","endCaptures":{"0":{"name":"punctuation.terminator.rule.css"}},"name":"meta.at-rule.header.css"}]},{"begin":"(?i)(?=@[-\\\\w]+([({\\\\s]|/\\\\*|$))","end":"(?<=})(?!\\\\G)","patterns":[{"begin":"(?i)\\\\G(@)[-\\\\w]+","beginCaptures":{"0":{"name":"keyword.control.at-rule.css"},"1":{"name":"punctuation.definition.keyword.css"}},"end":"(?=\\\\s*[;{])","name":"meta.at-rule.header.css"},{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.section.begin.bracket.curly.css"}},"end":"}","endCaptures":{"0":{"name":"punctuation.section.end.bracket.curly.css"}},"name":"meta.at-rule.body.css","patterns":[{"include":"$self"}]}]}]},"color-keywords":{"patterns":[{"match":"(?i)(?<![-\\\\w])(aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow)(?![-\\\\w])","name":"support.constant.color.w3c-standard-color-name.css"},{"match":"(?i)(?<![-\\\\w])(aliceblue|antiquewhite|aquamarine|azure|beige|bisque|blanchedalmond|blueviolet|brown|burlywood|cadetblue|chartreuse|chocolate|coral|cornflowerblue|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|darkgray|darkgreen|darkgrey|darkkhaki|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|darkseagreen|darkslateblue|darkslategray|darkslategrey|darkturquoise|darkviolet|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|gainsboro|ghostwhite|gold|goldenrod|greenyellow|grey|honeydew|hotpink|indianred|indigo|ivory|khaki|lavender|lavenderblush|lawngreen|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|limegreen|linen|magenta|mediumaquamarine|mediumblue|mediumorchid|mediumpurple|mediumseagreen|mediumslateblue|mediumspringgreen|mediumturquoise|mediumvioletred|midnightblue|mintcream|mistyrose|moccasin|navajowhite|oldlace|olivedrab|orangered|orchid|palegoldenrod|palegreen|paleturquoise|palevioletred|papayawhip|peachpuff|peru|pink|plum|powderblue|rebeccapurple|rosybrown|royalblue|saddlebrown|salmon|sandybrown|seagreen|seashell|sienna|skyblue|slateblue|slategray|slategrey|snow|springgreen|steelblue|tan|thistle|tomato|transparent|turquoise|violet|wheat|whitesmoke|yellowgreen)(?![-\\\\w])","name":"support.constant.color.w3c-extended-color-name.css"},{"match":"(?i)(?<![-\\\\w])currentColor(?![-\\\\w])","name":"support.constant.color.current.css"},{"match":"(?i)(?<![-\\\\w])(ActiveBorder|ActiveCaption|AppWorkspace|Background|ButtonFace|ButtonHighlight|ButtonShadow|ButtonText|CaptionText|GrayText|Highlight|HighlightText|InactiveBorder|InactiveCaption|InactiveCaptionText|InfoBackground|InfoText|Menu|MenuText|Scrollbar|ThreeDDarkShadow|ThreeDFace|ThreeDHighlight|ThreeDLightShadow|ThreeDShadow|Window|WindowFrame|WindowText)(?![-\\\\w])","name":"invalid.deprecated.color.system.css"}]},"combinators":{"patterns":[{"match":"/deep/|>>>","name":"invalid.deprecated.combinator.css"},{"match":">>|[+>~]","name":"keyword.operator.combinator.css"}]},"commas":{"match":",","name":"punctuation.separator.list.comma.css"},"comment-block":{"begin":"/\\\\*","beginCaptures":{"0":{"name":"punctuation.definition.comment.begin.css"}},"end":"\\\\*/","endCaptures":{"0":{"name":"punctuation.definition.comment.end.css"}},"name":"comment.block.css"},"escapes":{"patterns":[{"match":"\\\\\\\\\\\\h{1,6}","name":"constant.character.escape.codepoint.css"},{"begin":"\\\\\\\\$\\\\s*","end":"^(?<!\\\\G)","name":"constant.character.escape.newline.css"},{"match":"\\\\\\\\.","name":"constant.character.escape.css"}]},"feature-query":{"begin":"\\\\(","beginCaptures":{"0":{"name":"punctuation.definition.condition.begin.bracket.round.css"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.definition.condition.end.bracket.round.css"}},"name":"meta.feature-query.css","patterns":[{"include":"#feature-query-operators"},{"include":"#feature-query"}]},"feature-query-operators":{"patterns":[{"match":"(?i)(?<=[()\\\\s]|^|\\\\*/)(and|not|or)(?=[()\\\\s]|/\\\\*|$)","name":"keyword.operator.logical.feature.$1.css"},{"include":"#rule-list-innards"}]},"font-features":{"begin":"(?i)((@)(annotation|character-variant|ornaments|styleset|stylistic|swash))(?=[\\"';@{\\\\s]|/\\\\*|$)","beginCaptures":{"1":{"name":"keyword.control.at-rule.\${3:/downcase}.css"},"2":{"name":"punctuation.definition.keyword.css"}},"end":"(?<=})","name":"meta.at-rule.\${3:/downcase}.css","patterns":[{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.section.property-list.begin.bracket.curly.css"}},"end":"}","endCaptures":{"0":{"name":"punctuation.section.property-list.end.bracket.curly.css"}},"name":"meta.property-list.font-feature.css","patterns":[{"captures":{"0":{"patterns":[{"include":"#escapes"}]}},"match":"[-A-Z_a-z[^\\\\x00-\\\\x7F]](?:[-0-9A-Z_a-z[^\\\\x00-\\\\x7F]]|\\\\\\\\(?:\\\\h{1,6}|.))*","name":"variable.font-feature.css"},{"include":"#rule-list-innards"}]}]},"functional-pseudo-classes":{"patterns":[{"begin":"(?i)((:)dir)(\\\\()","beginCaptures":{"1":{"name":"entity.other.attribute-name.pseudo-class.css"},"2":{"name":"punctuation.definition.entity.css"},"3":{"name":"punctuation.section.function.begin.bracket.round.css"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.section.function.end.bracket.round.css"}},"patterns":[{"include":"#comment-block"},{"include":"#escapes"},{"match":"(?i)(?<![-\\\\w])(ltr|rtl)(?![-\\\\w])","name":"support.constant.text-direction.css"},{"include":"#property-values"}]},{"begin":"(?i)((:)lang)(\\\\()","beginCaptures":{"1":{"name":"entity.other.attribute-name.pseudo-class.css"},"2":{"name":"punctuation.definition.entity.css"},"3":{"name":"punctuation.section.function.begin.bracket.round.css"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.section.function.end.bracket.round.css"}},"patterns":[{"match":"(?<=[(,\\\\s])[A-Za-z]+(-[0-9A-Za-z]*|\\\\\\\\(?:\\\\h{1,6}|.))*(?=[),\\\\s])","name":"support.constant.language-range.css"},{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.css"}},"end":"\\"","endCaptures":{"0":{"name":"punctuation.definition.string.end.css"}},"name":"string.quoted.double.css","patterns":[{"include":"#escapes"},{"match":"(?<=[\\"\\\\s])[*A-Za-z]+(-[*0-9A-Za-z]*)*(?=[\\"\\\\s])","name":"support.constant.language-range.css"}]},{"begin":"'","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.css"}},"end":"'","endCaptures":{"0":{"name":"punctuation.definition.string.end.css"}},"name":"string.quoted.single.css","patterns":[{"include":"#escapes"},{"match":"(?<=['\\\\s])[*A-Za-z]+(-[*0-9A-Za-z]*)*(?=['\\\\s])","name":"support.constant.language-range.css"}]},{"include":"#commas"}]},{"begin":"(?i)((:)(?:not|has|matches|where|is))(\\\\()","beginCaptures":{"1":{"name":"entity.other.attribute-name.pseudo-class.css"},"2":{"name":"punctuation.definition.entity.css"},"3":{"name":"punctuation.section.function.begin.bracket.round.css"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.section.function.end.bracket.round.css"}},"patterns":[{"include":"#selector-innards"}]},{"begin":"(?i)((:)nth-(?:last-)?(?:child|of-type))(\\\\()","beginCaptures":{"1":{"name":"entity.other.attribute-name.pseudo-class.css"},"2":{"name":"punctuation.definition.entity.css"},"3":{"name":"punctuation.section.function.begin.bracket.round.css"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.section.function.end.bracket.round.css"}},"patterns":[{"match":"(?i)[-+]?(\\\\d+n?|n)(\\\\s*[-+]\\\\s*\\\\d+)?","name":"constant.numeric.css"},{"match":"(?i)even|odd","name":"support.constant.parity.css"}]}]},"functions":{"patterns":[{"begin":"(?i)(?<![-\\\\w])(calc)(\\\\()","beginCaptures":{"1":{"name":"support.function.calc.css"},"2":{"name":"punctuation.section.function.begin.bracket.round.css"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.section.function.end.bracket.round.css"}},"name":"meta.function.calc.css","patterns":[{"match":"[*/]|(?<=\\\\s|^)[-+](?=\\\\s|$)","name":"keyword.operator.arithmetic.css"},{"include":"#property-values"}]},{"begin":"(?i)(?<![-\\\\w])(rgba?|hsla?|hwb|lab|oklab|lch|oklch|color)(\\\\()","beginCaptures":{"1":{"name":"support.function.misc.css"},"2":{"name":"punctuation.section.function.begin.bracket.round.css"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.section.function.end.bracket.round.css"}},"name":"meta.function.color.css","patterns":[{"include":"#property-values"}]},{"begin":"(?i)(?<![-\\\\w])((?:-(?:webkit-|moz-|o-))?(?:repeating-)?(?:linear|radial|conic)-gradient)(\\\\()","beginCaptures":{"1":{"name":"support.function.gradient.css"},"2":{"name":"punctuation.section.function.begin.bracket.round.css"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.section.function.end.bracket.round.css"}},"name":"meta.function.gradient.css","patterns":[{"match":"(?i)(?<![-\\\\w])(from|to|at|in|hue)(?![-\\\\w])","name":"keyword.operator.gradient.css"},{"include":"#property-values"}]},{"begin":"(?i)(?<![-\\\\w])(-webkit-gradient)(\\\\()","beginCaptures":{"1":{"name":"invalid.deprecated.gradient.function.css"},"2":{"name":"punctuation.section.function.begin.bracket.round.css"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.section.function.end.bracket.round.css"}},"name":"meta.function.gradient.invalid.deprecated.gradient.css","patterns":[{"begin":"(?i)(?<![-\\\\w])(from|to|color-stop)(\\\\()","beginCaptures":{"1":{"name":"invalid.deprecated.function.css"},"2":{"name":"punctuation.section.function.begin.bracket.round.css"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.section.function.end.bracket.round.css"}},"patterns":[{"include":"#property-values"}]},{"include":"#property-values"}]},{"begin":"(?i)(?<![-\\\\w])(annotation|attr|blur|brightness|character-variant|clamp|contrast|counters?|cross-fade|drop-shadow|element|fit-content|format|grayscale|hue-rotate|color-mix|image-set|invert|local|max|min|minmax|opacity|ornaments|repeat|saturate|sepia|styleset|stylistic|swash|symbols|cos|sin|tan|acos|asin|atan2??|hypot|sqrt|pow|log|exp|abs|sign)(\\\\()","beginCaptures":{"1":{"name":"support.function.misc.css"},"2":{"name":"punctuation.section.function.begin.bracket.round.css"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.section.function.end.bracket.round.css"}},"name":"meta.function.misc.css","patterns":[{"match":"(?i)(?<=[\\",\\\\s]|\\\\*/|^)\\\\d+x(?=[\\"'),\\\\s]|/\\\\*|$)","name":"constant.numeric.other.density.css"},{"include":"#property-values"},{"match":"[^\\"'),\\\\s]+","name":"variable.parameter.misc.css"}]},{"begin":"(?i)(?<![-\\\\w])(circle|ellipse|inset|polygon|rect)(\\\\()","beginCaptures":{"1":{"name":"support.function.shape.css"},"2":{"name":"punctuation.section.function.begin.bracket.round.css"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.section.function.end.bracket.round.css"}},"name":"meta.function.shape.css","patterns":[{"match":"(?i)(?<=\\\\s|^|\\\\*/)(at|round)(?=\\\\s|/\\\\*|$)","name":"keyword.operator.shape.css"},{"include":"#property-values"}]},{"begin":"(?i)(?<![-\\\\w])(cubic-bezier|steps)(\\\\()","beginCaptures":{"1":{"name":"support.function.timing-function.css"},"2":{"name":"punctuation.section.function.begin.bracket.round.css"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.section.function.end.bracket.round.css"}},"name":"meta.function.timing-function.css","patterns":[{"match":"(?i)(?<![-\\\\w])(start|end)(?=\\\\s*\\\\)|$)","name":"support.constant.step-direction.css"},{"include":"#property-values"}]},{"begin":"(?i)(?<![-\\\\w])((?:translate|scale|rotate)(?:[XYZ]|3D)?|matrix(?:3D)?|skew[XY]?|perspective)(\\\\()","beginCaptures":{"1":{"name":"support.function.transform.css"},"2":{"name":"punctuation.section.function.begin.bracket.round.css"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.section.function.end.bracket.round.css"}},"patterns":[{"include":"#property-values"}]},{"include":"#url"},{"begin":"(?i)(?<![-\\\\w])(var)(\\\\()","beginCaptures":{"1":{"name":"support.function.misc.css"},"2":{"name":"punctuation.section.function.begin.bracket.round.css"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.section.function.end.bracket.round.css"}},"name":"meta.function.variable.css","patterns":[{"match":"--[-A-Z_a-z[^\\\\x00-\\\\x7F]](?:[-0-9A-Z_a-z[^\\\\x00-\\\\x7F]]|\\\\\\\\(?:\\\\h{1,6}|.))*","name":"variable.argument.css"},{"include":"#property-values"}]}]},"media-feature-keywords":{"match":"(?i)(?<=^|[:\\\\s]|\\\\*/)(?:portrait|landscape|progressive|interlace|fullscreen|standalone|minimal-ui|browser|hover)(?=[)\\\\s]|$)","name":"support.constant.property-value.css"},"media-features":{"captures":{"1":{"name":"support.type.property-name.media.css"},"2":{"name":"support.type.property-name.media.css"},"3":{"name":"support.type.vendored.property-name.media.css"}},"match":"(?i)(?<=^|[(\\\\s]|\\\\*/)(?:((?:m(?:in-|ax-))?(?:height|width|aspect-ratio|color|color-index|monochrome|resolution)|grid|scan|orientation|display-mode|hover)|((?:m(?:in-|ax-))?device-(?:height|width|aspect-ratio))|((?:[-_](?:webkit|apple|khtml|epub|moz|ms|o|xv|ah|rim|atsc|hp|tc|wap|ro)|(?:mso|prince))-[-\\\\w]+(?=\\\\s*(?:/\\\\*(?:[^*]|\\\\*[^/])*\\\\*/)?\\\\s*[):])))(?=\\\\s|$|[):<=>]|/\\\\*)"},"media-query":{"begin":"\\\\G","end":"(?=\\\\s*[;{])","patterns":[{"include":"#comment-block"},{"include":"#escapes"},{"include":"#media-types"},{"match":"(?i)(?<=\\\\s|^|,|\\\\*/)(only|not)(?=[{\\\\s]|/\\\\*|$)","name":"keyword.operator.logical.$1.media.css"},{"match":"(?i)(?<=\\\\s|^|\\\\*/|\\\\))and(?=\\\\s|/\\\\*|$)","name":"keyword.operator.logical.and.media.css"},{"match":",(?:(?:\\\\s*,)+|(?=\\\\s*[);{]))","name":"invalid.illegal.comma.css"},{"include":"#commas"},{"begin":"\\\\(","beginCaptures":{"0":{"name":"punctuation.definition.parameters.begin.bracket.round.css"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.definition.parameters.end.bracket.round.css"}},"patterns":[{"include":"#media-features"},{"include":"#media-feature-keywords"},{"match":":","name":"punctuation.separator.key-value.css"},{"match":">=|<=|[<=>]","name":"keyword.operator.comparison.css"},{"captures":{"1":{"name":"constant.numeric.css"},"2":{"name":"keyword.operator.arithmetic.css"},"3":{"name":"constant.numeric.css"}},"match":"(\\\\d+)\\\\s*(/)\\\\s*(\\\\d+)","name":"meta.ratio.css"},{"include":"#numeric-values"},{"include":"#comment-block"}]}]},"media-query-list":{"begin":"(?=\\\\s*[^;{])","end":"(?=\\\\s*[;{])","patterns":[{"include":"#media-query"}]},"media-types":{"captures":{"1":{"name":"support.constant.media.css"},"2":{"name":"invalid.deprecated.constant.media.css"}},"match":"(?i)(?<=^|[,\\\\s]|\\\\*/)(?:(all|print|screen|speech)|(aural|braille|embossed|handheld|projection|tty|tv))(?=$|[,;{\\\\s]|/\\\\*)"},"numeric-values":{"patterns":[{"captures":{"1":{"name":"punctuation.definition.constant.css"}},"match":"(#)(?:\\\\h{3,4}|\\\\h{6}|\\\\h{8})\\\\b","name":"constant.other.color.rgb-value.hex.css"},{"captures":{"1":{"name":"keyword.other.unit.percentage.css"},"2":{"name":"keyword.other.unit.\${2:/downcase}.css"}},"match":"(?i)(?<![-\\\\w])[-+]?(?:[0-9]+(?:\\\\.[0-9]+)?|\\\\.[0-9]+)(?:(?<=[0-9])E[-+]?[0-9]+)?(?:(%)|(deg|grad|rad|turn|Hz|kHz|ch|cm|em|ex|fr|in|mm|mozmm|pc|pt|px|q|rem|rch|rex|rlh|ic|ric|rcap|vh|vw|vb|vi|svh|svw|svb|svi|dvh|dvw|dvb|dvi|lvh|lvw|lvb|lvi|vmax|vmin|cqw|cqi|cqh|cqb|cqmin|cqmax|dpi|dpcm|dppx|s|ms)\\\\b)?","name":"constant.numeric.css"}]},"property-keywords":{"patterns":[{"match":"(?i)(?<![-\\\\w])(above|absolute|active|add|additive|after-edge|alias|all|all-petite-caps|all-scroll|all-small-caps|alpha|alphabetic|alternate|alternate-reverse|always|antialiased|auto|auto-fill|auto-fit|auto-pos|available|avoid|avoid-column|avoid-page|avoid-region|backwards|balance|baseline|before-edge|below|bevel|bidi-override|blink|block|block-axis|block-start|block-end|bold|bolder|border|border-box|both|bottom|bottom-outside|break-all|break-word|bullets|butt|capitalize|caption|cell|center|central|char|circle|clip|clone|close-quote|closest-corner|closest-side|col-resize|collapse|color|color-burn|color-dodge|column|column-reverse|common-ligatures|compact|condensed|contain|content|content-box|contents|context-menu|contextual|copy|cover|crisp-edges|crispEdges|crosshair|cyclic|dark|darken|dashed|decimal|default|dense|diagonal-fractions|difference|digits|disabled|disc|discretionary-ligatures|distribute|distribute-all-lines|distribute-letter|distribute-space|dot|dotted|double|double-circle|downleft|downright|e-resize|each-line|ease|ease-in|ease-in-out|ease-out|economy|ellipse|ellipsis|embed|end|evenodd|ew-resize|exact|exclude|exclusion|expanded|extends|extra-condensed|extra-expanded|fallback|farthest-corner|farthest-side|fill|fill-available|fill-box|filled|fit-content|fixed|flat|flex|flex-end|flex-start|flip|flow-root|forwards|freeze|from-image|full-width|geometricPrecision|georgian|grab|grabbing|grayscale|grid|groove|hand|hanging|hard-light|help|hidden|hide|historical-forms|historical-ligatures|horizontal|horizontal-tb|hue|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|ideographic|inactive|infinite|inherit|initial|inline|inline-axis|inline-block|inline-end|inline-flex|inline-grid|inline-list-item|inline-start|inline-table|inset|inside|inter-character|inter-ideograph|inter-word|intersect|invert|isolate|isolate-override|italic|jis04|jis78|jis83|jis90|justify|justify-all|kannada|keep-all|landscape|larger??|left|light|lighten|lighter|line|line-edge|line-through|linear|linearRGB|lining-nums|list-item|local|loose|lowercase|lr|lr-tb|ltr|luminance|luminosity|main-size|mandatory|manipulation|manual|margin-box|match-parent|match-source|mathematical|max-content|medium|menu|message-box|middle|min-content|miter|mixed|move|multiply|n-resize|narrower|ne-resize|nearest-neighbor|nesw-resize|newspaper|no-change|no-clip|no-close-quote|no-common-ligatures|no-contextual|no-discretionary-ligatures|no-drop|no-historical-ligatures|no-open-quote|no-repeat|none|nonzero|normal|not-allowed|nowrap|ns-resize|numbers|numeric|nw-resize|nwse-resize|oblique|oldstyle-nums|open|open-quote|optimizeLegibility|optimizeQuality|optimizeSpeed|optional|ordinal|outset|outside|over|overlay|overline|padding|padding-box|page|painted|pan-down|pan-left|pan-right|pan-up|pan-x|pan-y|paused|petite-caps|pixelated|plaintext|pointer|portrait|pre|pre-line|pre-wrap|preserve-3d|progress|progressive|proportional-nums|proportional-width|proximity|radial|recto|region|relative|remove|repeat|repeat-[xy]|reset-size|reverse|revert|ridge|right|rl|rl-tb|round|row|row-resize|row-reverse|row-severse|rtl|ruby|ruby-base|ruby-base-container|ruby-text|ruby-text-container|run-in|running|s-resize|saturation|scale-down|screen|scroll|scroll-position|se-resize|semi-condensed|semi-expanded|separate|sesame|show|sideways|sideways-left|sideways-lr|sideways-right|sideways-rl|simplified|slashed-zero|slice|small|small-caps|small-caption|smaller|smooth|soft-light|solid|space|space-around|space-between|space-evenly|spell-out|square|sRGB|stacked-fractions|start|static|status-bar|swap|step-end|step-start|sticky|stretch|strict|stroke|stroke-box|style|sub|subgrid|subpixel-antialiased|subtract|super|sw-resize|symbolic|table|table-caption|table-cell|table-column|table-column-group|table-footer-group|table-header-group|table-row|table-row-group|tabular-nums|tb|tb-rl|text|text-after-edge|text-before-edge|text-bottom|text-top|thick|thin|titling-caps|top|top-outside|touch|traditional|transparent|triangle|ultra-condensed|ultra-expanded|under|underline|unicase|unset|upleft|uppercase|upright|use-glyph-orientation|use-script|verso|vertical|vertical-ideographic|vertical-lr|vertical-rl|vertical-text|view-box|visible|visibleFill|visiblePainted|visibleStroke|w-resize|wait|wavy|weight|whitespace|wider|words|wrap|wrap-reverse|x|x-large|x-small|xx-large|xx-small|y|zero|zoom-in|zoom-out)(?![-\\\\w])","name":"support.constant.property-value.css"},{"match":"(?i)(?<![-\\\\w])(arabic-indic|armenian|bengali|cambodian|circle|cjk-decimal|cjk-earthly-branch|cjk-heavenly-stem|cjk-ideographic|decimal|decimal-leading-zero|devanagari|disc|disclosure-closed|disclosure-open|ethiopic-halehame-am|ethiopic-halehame-ti-e[rt]|ethiopic-numeric|georgian|gujarati|gurmukhi|hangul|hangul-consonant|hebrew|hiragana|hiragana-iroha|japanese-formal|japanese-informal|kannada|katakana|katakana-iroha|khmer|korean-hangul-formal|korean-hanja-formal|korean-hanja-informal|lao|lower-alpha|lower-armenian|lower-greek|lower-latin|lower-roman|malayalam|mongolian|myanmar|oriya|persian|simp-chinese-formal|simp-chinese-informal|square|tamil|telugu|thai|tibetan|trad-chinese-formal|trad-chinese-informal|upper-alpha|upper-armenian|upper-latin|upper-roman|urdu)(?![-\\\\w])","name":"support.constant.property-value.list-style-type.css"},{"match":"(?<![-\\\\w])(?i:-(?:ah|apple|atsc|epub|hp|khtml|moz|ms|o|rim|ro|tc|wap|webkit|xv)|(?:mso|prince))-[-A-Za-z]+","name":"support.constant.vendored.property-value.css"},{"match":"(?<![-\\\\w])(?i:arial|century|comic|courier|garamond|georgia|helvetica|impact|lucida|symbol|system-ui|system|tahoma|times|trebuchet|ui-monospace|ui-rounded|ui-sans-serif|ui-serif|utopia|verdana|webdings|sans-serif|serif|monospace)(?![-\\\\w])","name":"support.constant.font-name.css"}]},"property-names":{"patterns":[{"match":"(?i)(?<![-\\\\w])(?:accent-color|additive-symbols|align-content|align-items|align-self|all|animation|animation-delay|animation-direction|animation-duration|animation-fill-mode|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|aspect-ratio|backdrop-filter|backface-visibility|background|background-attachment|background-blend-mode|background-clip|background-color|background-image|background-origin|background-position|background-position-[xy]|background-repeat|background-size|bleed|block-size|border|border-block-end|border-block-end-color|border-block-end-style|border-block-end-width|border-block-start|border-block-start-color|border-block-start-style|border-block-start-width|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius|border-bottom-style|border-bottom-width|border-collapse|border-color|border-end-end-radius|border-end-start-radius|border-image|border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-inline-end|border-inline-end-color|border-inline-end-style|border-inline-end-width|border-inline-start|border-inline-start-color|border-inline-start-style|border-inline-start-width|border-left|border-left-color|border-left-style|border-left-width|border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-start-end-radius|border-start-start-radius|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style|border-top-width|border-width|bottom|box-decoration-break|box-shadow|box-sizing|break-after|break-before|break-inside|caption-side|caret-color|clear|clip|clip-path|clip-rule|color|color-adjust|color-interpolation-filters|color-scheme|column-count|column-fill|column-gap|column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|contain|container|container-name|container-type|content|counter-increment|counter-reset|cursor|direction|display|empty-cells|enable-background|fallback|fill|fill-opacity|fill-rule|filter|flex|flex-basis|flex-direction|flex-flow|flex-grow|flex-shrink|flex-wrap|float|flood-color|flood-opacity|font|font-display|font-family|font-feature-settings|font-kerning|font-language-override|font-optical-sizing|font-size|font-size-adjust|font-stretch|font-style|font-synthesis|font-variant|font-variant-alternates|font-variant-caps|font-variant-east-asian|font-variant-ligatures|font-variant-numeric|font-variant-position|font-variation-settings|font-weight|gap|glyph-orientation-horizontal|glyph-orientation-vertical|grid|grid-area|grid-auto-columns|grid-auto-flow|grid-auto-rows|grid-column|grid-column-end|grid-column-gap|grid-column-start|grid-gap|grid-row|grid-row-end|grid-row-gap|grid-row-start|grid-template|grid-template-areas|grid-template-columns|grid-template-rows|hanging-punctuation|height|hyphens|image-orientation|image-rendering|image-resolution|ime-mode|initial-letter|initial-letter-align|inline-size|inset|inset-block|inset-block-end|inset-block-start|inset-inline|inset-inline-end|inset-inline-start|isolation|justify-content|justify-items|justify-self|kerning|left|letter-spacing|lighting-color|line-break|line-clamp|line-height|list-style|list-style-image|list-style-position|list-style-type|margin|margin-block|margin-block-end|margin-block-start|margin-bottom|margin-inline|margin-inline-end|margin-inline-start|margin-left|margin-right|margin-top|marker-end|marker-mid|marker-start|marks|mask|mask-border|mask-border-mode|mask-border-outset|mask-border-repeat|mask-border-slice|mask-border-source|mask-border-width|mask-clip|mask-composite|mask-image|mask-mode|mask-origin|mask-position|mask-repeat|mask-size|mask-type|max-block-size|max-height|max-inline-size|max-lines|max-width|max-zoom|min-block-size|min-height|min-inline-size|min-width|min-zoom|mix-blend-mode|negative|object-fit|object-position|offset|offset-anchor|offset-distance|offset-path|offset-position|offset-rotation|opacity|order|orientation|orphans|outline|outline-color|outline-offset|outline-style|outline-width|overflow|overflow-anchor|overflow-block|overflow-inline|overflow-wrap|overflow-[xy]|overscroll-behavior|overscroll-behavior-block|overscroll-behavior-inline|overscroll-behavior-[xy]|pad|padding|padding-block|padding-block-end|padding-block-start|padding-bottom|padding-inline|padding-inline-end|padding-inline-start|padding-left|padding-right|padding-top|page-break-after|page-break-before|page-break-inside|paint-order|perspective|perspective-origin|place-content|place-items|place-self|pointer-events|position|prefix|quotes|range|resize|right|rotate|row-gap|ruby-align|ruby-merge|ruby-position|scale|scroll-behavior|scroll-margin|scroll-margin-block|scroll-margin-block-end|scroll-margin-block-start|scroll-margin-bottom|scroll-margin-inline|scroll-margin-inline-end|scroll-margin-inline-start|scroll-margin-left|scroll-margin-right|scroll-margin-top|scroll-padding|scroll-padding-block|scroll-padding-block-end|scroll-padding-block-start|scroll-padding-bottom|scroll-padding-inline|scroll-padding-inline-end|scroll-padding-inline-start|scroll-padding-left|scroll-padding-right|scroll-padding-top|scroll-snap-align|scroll-snap-coordinate|scroll-snap-destination|scroll-snap-stop|scroll-snap-type|scrollbar-color|scrollbar-gutter|scrollbar-width|shape-image-threshold|shape-margin|shape-outside|shape-rendering|size|speak-as|src|stop-color|stop-opacity|stroke|stroke-dasharray|stroke-dashoffset|stroke-linecap|stroke-linejoin|stroke-miterlimit|stroke-opacity|stroke-width|suffix|symbols|system|tab-size|table-layout|text-align|text-align-last|text-anchor|text-combine-upright|text-decoration|text-decoration-color|text-decoration-line|text-decoration-skip|text-decoration-skip-ink|text-decoration-style|text-decoration-thickness|text-emphasis|text-emphasis-color|text-emphasis-position|text-emphasis-style|text-indent|text-justify|text-orientation|text-overflow|text-rendering|text-shadow|text-size-adjust|text-transform|text-underline-offset|text-underline-position|top|touch-action|transform|transform-box|transform-origin|transform-style|transition|transition-delay|transition-duration|transition-property|transition-timing-function|translate|unicode-bidi|unicode-range|user-select|user-zoom|vertical-align|visibility|white-space|widows|width|will-change|word-break|word-spacing|word-wrap|writing-mode|z-index|zoom|alignment-baseline|baseline-shift|clip-rule|color-interpolation|color-interpolation-filters|color-profile|color-rendering|cx|cy|dominant-baseline|enable-background|fill|fill-opacity|fill-rule|flood-color|flood-opacity|glyph-orientation-horizontal|glyph-orientation-vertical|height|kerning|lighting-color|marker-end|marker-mid|marker-start|rx??|ry|shape-rendering|stop-color|stop-opacity|stroke|stroke-dasharray|stroke-dashoffset|stroke-linecap|stroke-linejoin|stroke-miterlimit|stroke-opacity|stroke-width|text-anchor|width|[xy]|adjust|after|align|align-last|alignment|alignment-adjust|appearance|attachment|azimuth|background-break|balance|baseline|before|bidi|binding|bookmark|bookmark-label|bookmark-level|bookmark-target|border-length|bottom-color|bottom-left-radius|bottom-right-radius|bottom-style|bottom-width|box|box-align|box-direction|box-flex|box-flex-group|box-lines|box-ordinal-group|box-orient|box-pack|break|character|collapse|column|column-break-after|column-break-before|count|counter|crop|cue|cue-after|cue-before|decoration|decoration-break|delay|display-model|display-role|down|drop|drop-initial-after-adjust|drop-initial-after-align|drop-initial-before-adjust|drop-initial-before-align|drop-initial-size|drop-initial-value|duration|elevation|emphasis|family|fit|fit-position|flex-group|float-offset|gap|grid-columns|grid-rows|hanging-punctuation|header|hyphenate|hyphenate-after|hyphenate-before|hyphenate-character|hyphenate-lines|hyphenate-resource|icon|image|increment|indent|index|initial-after-adjust|initial-after-align|initial-before-adjust|initial-before-align|initial-size|initial-value|inline-box-align|iteration-count|justify|label|left-color|left-style|left-width|length|level|line|line-stacking|line-stacking-ruby|line-stacking-shift|line-stacking-strategy|lines|list|mark|mark-after|mark-before|marks|marquee|marquee-direction|marquee-play-count|marquee-speed|marquee-style|max|min|model|move-to|name|nav|nav-down|nav-index|nav-left|nav-right|nav-up|new|numeral|offset|ordinal-group|orient|origin|overflow-style|overhang|pack|page|page-policy|pause|pause-after|pause-before|phonemes|pitch|pitch-range|play-count|play-during|play-state|point|presentation|presentation-level|profile|property|punctuation|punctuation-trim|radius|rate|rendering-intent|repeat|replace|reset|resolution|resource|respond-to|rest|rest-after|rest-before|richness|right-color|right-style|right-width|role|rotation|rotation-point|rows|ruby|ruby-overhang|ruby-span|rule|rule-color|rule-style|rule-width|shadow|size|size-adjust|sizing|space|space-collapse|spacing|span|speak|speak-header|speak-numeral|speak-punctuation|speech|speech-rate|speed|stacking|stacking-ruby|stacking-shift|stacking-strategy|stress|stretch|string-set|style|style-image|style-position|style-type|target|target-name|target-new|target-position|text|text-height|text-justify|text-outline|text-replace|text-wrap|timing-function|top-color|top-left-radius|top-right-radius|top-style|top-width|trim|unicode|up|user-select|variant|voice|voice-balance|voice-duration|voice-family|voice-pitch|voice-pitch-range|voice-rate|voice-stress|voice-volume|volume|weight|white|white-space-collapse|word|wrap)(?![-\\\\w])","name":"support.type.property-name.css"},{"match":"(?<![-\\\\w])(?i:-(?:ah|apple|atsc|epub|hp|khtml|moz|ms|o|rim|ro|tc|wap|webkit|xv)|(?:mso|prince))-[-A-Za-z]+","name":"support.type.vendored.property-name.css"}]},"property-values":{"patterns":[{"include":"#commas"},{"include":"#comment-block"},{"include":"#escapes"},{"include":"#functions"},{"include":"#property-keywords"},{"include":"#unicode-range"},{"include":"#numeric-values"},{"include":"#color-keywords"},{"include":"#string"},{"match":"!\\\\s*important(?![-\\\\w])","name":"keyword.other.important.css"}]},"pseudo-classes":{"captures":{"1":{"name":"punctuation.definition.entity.css"},"2":{"name":"invalid.illegal.colon.css"}},"match":"(?i)(:)(:*)(?:active|any-link|checked|default|disabled|empty|enabled|first|(?:first|last|only)-(?:child|of-type)|focus|focus-visible|focus-within|fullscreen|host|hover|in-range|indeterminate|invalid|left|link|optional|out-of-range|read-only|read-write|required|right|root|scope|target|unresolved|valid|visited)(?![-\\\\w]|\\\\s*[;}])","name":"entity.other.attribute-name.pseudo-class.css"},"pseudo-elements":{"captures":{"1":{"name":"punctuation.definition.entity.css"},"2":{"name":"punctuation.definition.entity.css"}},"match":"(?i)(?:(::?)(?:after|before|first-letter|first-line|(?:-(?:ah|apple|atsc|epub|hp|khtml|moz|ms|o|rim|ro|tc|wap|webkit|xv)|(?:mso|prince))-[-a-z]+)|(::)(?:backdrop|content|grammar-error|marker|placeholder|selection|shadow|spelling-error))(?![-\\\\w]|\\\\s*[;}])","name":"entity.other.attribute-name.pseudo-element.css"},"rule-list":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.section.property-list.begin.bracket.curly.css"}},"end":"}","endCaptures":{"0":{"name":"punctuation.section.property-list.end.bracket.curly.css"}},"name":"meta.property-list.css","patterns":[{"include":"#rule-list-innards"}]},"rule-list-innards":{"patterns":[{"include":"#comment-block"},{"include":"#escapes"},{"include":"#font-features"},{"match":"(?<![-\\\\w])--[-A-Z_a-z[^\\\\x00-\\\\x7F]](?:[-0-9A-Z_a-z[^\\\\x00-\\\\x7F]]|\\\\\\\\(?:\\\\h{1,6}|.))*","name":"variable.css"},{"begin":"(?<![-A-Za-z])(?=[-A-Za-z])","end":"$|(?![-A-Za-z])","name":"meta.property-name.css","patterns":[{"include":"#property-names"}]},{"begin":"(:)\\\\s*","beginCaptures":{"1":{"name":"punctuation.separator.key-value.css"}},"contentName":"meta.property-value.css","end":"\\\\s*(;)|\\\\s*(?=[)}])","endCaptures":{"1":{"name":"punctuation.terminator.rule.css"}},"patterns":[{"include":"#comment-block"},{"include":"#property-values"}]},{"match":";","name":"punctuation.terminator.rule.css"}]},"selector":{"begin":"(?=\\\\|?(?:[-#*.:A-\\\\[_a-z[^\\\\x00-\\\\x7F]]|\\\\\\\\(?:\\\\h{1,6}|.)))","end":"(?=\\\\s*[)/@{])","name":"meta.selector.css","patterns":[{"include":"#selector-innards"}]},"selector-innards":{"patterns":[{"include":"#comment-block"},{"include":"#commas"},{"include":"#escapes"},{"include":"#combinators"},{"captures":{"1":{"name":"entity.other.namespace-prefix.css"},"2":{"name":"punctuation.separator.css"}},"match":"(?:^|(?<=[(,;}\\\\s]))(?![-*\\\\w]+\\\\|(?![-#*.:A-\\\\[_a-z[^\\\\x00-\\\\x7F]]))([-A-Z_a-z[^\\\\x00-\\\\x7F]](?:[-0-9A-Z_a-z[^\\\\x00-\\\\x7F]]|\\\\\\\\(?:\\\\h{1,6}|.))*|\\\\*)?(\\\\|)"},{"include":"#tag-names"},{"match":"\\\\*","name":"entity.name.tag.wildcard.css"},{"captures":{"1":{"name":"punctuation.definition.entity.css"},"2":{"patterns":[{"include":"#escapes"}]}},"match":"(?<![-@\\\\w])([#.])((?:-?[0-9]|-(?=$|[#)+,.:>\\\\[{|~\\\\s]|/\\\\*)|(?:[-0-9A-Z_a-z[^\\\\x00-\\\\x7F]]|\\\\\\\\(?:\\\\h{1,6}|.))*(?:[]!\\"%-(*;<?@^\`|}]|/(?!\\\\*))+)(?:[-0-9A-Z_a-z[^\\\\x00-\\\\x7F]]|\\\\\\\\(?:\\\\h{1,6}|.))*)","name":"invalid.illegal.bad-identifier.css"},{"captures":{"1":{"name":"punctuation.definition.entity.css"},"2":{"patterns":[{"include":"#escapes"}]}},"match":"(\\\\.)((?:[-0-9A-Z_a-z[^\\\\x00-\\\\x7F]]|\\\\\\\\(?:\\\\h{1,6}|.))+)(?=$|[#)+,.:>\\\\[{|~\\\\s]|/\\\\*)","name":"entity.other.attribute-name.class.css"},{"captures":{"1":{"name":"punctuation.definition.entity.css"},"2":{"patterns":[{"include":"#escapes"}]}},"match":"(#)(-?(?![0-9])(?:[-0-9A-Z_a-z[^\\\\x00-\\\\x7F]]|\\\\\\\\(?:\\\\h{1,6}|.))+)(?=$|[#)+,.:>\\\\[{|~\\\\s]|/\\\\*)","name":"entity.other.attribute-name.id.css"},{"begin":"\\\\[","beginCaptures":{"0":{"name":"punctuation.definition.entity.begin.bracket.square.css"}},"end":"]","endCaptures":{"0":{"name":"punctuation.definition.entity.end.bracket.square.css"}},"name":"meta.attribute-selector.css","patterns":[{"include":"#comment-block"},{"include":"#string"},{"captures":{"1":{"name":"storage.modifier.ignore-case.css"}},"match":"(?<=[\\"'\\\\s]|^|\\\\*/)\\\\s*([Ii])\\\\s*(?=[]\\\\s]|/\\\\*|$)"},{"captures":{"1":{"name":"string.unquoted.attribute-value.css","patterns":[{"include":"#escapes"}]}},"match":"(?<==)\\\\s*((?!/\\\\*)(?:[^]\\"'\\\\\\\\\\\\s]|\\\\\\\\.)+)"},{"include":"#escapes"},{"match":"[$*^|~]?=","name":"keyword.operator.pattern.css"},{"match":"\\\\|","name":"punctuation.separator.css"},{"captures":{"1":{"name":"entity.other.namespace-prefix.css","patterns":[{"include":"#escapes"}]}},"match":"(-?(?!\\\\d)(?:[-\\\\w[^\\\\x00-\\\\x7F]]|\\\\\\\\(?:\\\\h{1,6}|.))+|\\\\*)(?=\\\\|(?![=\\\\s]|$|])(?:-?(?!\\\\d)|[-\\\\\\\\\\\\w[^\\\\x00-\\\\x7F]]))"},{"captures":{"1":{"name":"entity.other.attribute-name.css","patterns":[{"include":"#escapes"}]}},"match":"(-?(?!\\\\d)(?>[-\\\\w[^\\\\x00-\\\\x7F]]|\\\\\\\\(?:\\\\h{1,6}|.))+)\\\\s*(?=[]$*=^|~]|/\\\\*)"}]},{"include":"#pseudo-classes"},{"include":"#pseudo-elements"},{"include":"#functional-pseudo-classes"},{"match":"(?<![-@\\\\w])(?=[a-z]\\\\w*-)(?:(?![A-Z])[-\\\\w])+(?![-(\\\\w])","name":"entity.name.tag.custom.css"}]},"string":{"patterns":[{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.css"}},"end":"\\"|(?<!\\\\\\\\)(?=$|\\\\n)","endCaptures":{"0":{"name":"punctuation.definition.string.end.css"}},"name":"string.quoted.double.css","patterns":[{"begin":"(?:\\\\G|^)(?=(?:[^\\"\\\\\\\\]|\\\\\\\\.)+$)","end":"$","name":"invalid.illegal.unclosed.string.css","patterns":[{"include":"#escapes"}]},{"include":"#escapes"}]},{"begin":"'","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.css"}},"end":"'|(?<!\\\\\\\\)(?=$|\\\\n)","endCaptures":{"0":{"name":"punctuation.definition.string.end.css"}},"name":"string.quoted.single.css","patterns":[{"begin":"(?:\\\\G|^)(?=(?:[^'\\\\\\\\]|\\\\\\\\.)+$)","end":"$","name":"invalid.illegal.unclosed.string.css","patterns":[{"include":"#escapes"}]},{"include":"#escapes"}]}]},"tag-names":{"match":"(?i)(?<![-:\\\\w])(?:a|abbr|acronym|address|applet|area|article|aside|audio|b|base|basefont|bdi|bdo|bgsound|big|blink|blockquote|body|br|button|canvas|caption|center|cite|code|col|colgroup|command|content|data|datalist|dd|del|details|dfn|dialog|dir|div|dl|dt|element|em|embed|fieldset|figcaption|figure|font|footer|form|frame|frameset|h[1-6]|head|header|hgroup|hr|html|i|iframe|image|img|input|ins|isindex|kbd|keygen|label|legend|li|link|listing|main|map|mark|marquee|math|menu|menuitem|meta|meter|multicol|nav|nextid|nobr|noembed|noframes|noscript|object|ol|optgroup|option|output|p|param|picture|plaintext|pre|progress|q|rb|rp|rtc??|ruby|s|samp|script|section|select|shadow|slot|small|source|spacer|span|strike|strong|style|sub|summary|sup|table|tbody|td|template|textarea|tfoot|th|thead|time|title|tr|track|tt|ul??|var|video|wbr|xmp|altGlyph|altGlyphDef|altGlyphItem|animate|animateColor|animateMotion|animateTransform|circle|clipPath|color-profile|cursor|defs|desc|discard|ellipse|feBlend|feColorMatrix|feComponentTransfer|feComposite|feConvolveMatrix|feDiffuseLighting|feDisplacementMap|feDistantLight|feDropShadow|feFlood|feFuncA|feFuncB|feFuncG|feFuncR|feGaussianBlur|feImage|feMerge|feMergeNode|feMorphology|feOffset|fePointLight|feSpecularLighting|feSpotLight|feTile|feTurbulence|filter|font-face|font-face-format|font-face-name|font-face-src|font-face-uri|foreignObject|g|glyph|glyphRef|hatch|hatchpath|hkern|line|linearGradient|marker|mask|mesh|meshgradient|meshpatch|meshrow|metadata|missing-glyph|mpath|path|pattern|polygon|polyline|radialGradient|rect|set|solidcolor|stop|svg|switch|symbol|text|textPath|tref|tspan|use|view|vkern|annotation|annotation-xml|maction|maligngroup|malignmark|math|menclose|merror|mfenced|mfrac|mglyph|mi|mlabeledtr|mlongdiv|mmultiscripts|mn|mo|mover|mpadded|mphantom|mroot|mrow|ms|mscarries|mscarry|msgroup|msline|mspace|msqrt|msrow|mstack|mstyle|msub|msubsup|msup|mtable|mtd|mtext|mtr|munder|munderover|semantics)(?=[#)+,.:>\\\\[{|~\\\\s]|/\\\\*|$)","name":"entity.name.tag.css"},"unicode-range":{"captures":{"0":{"name":"constant.other.unicode-range.css"},"1":{"name":"punctuation.separator.dash.unicode-range.css"}},"match":"(?<![-\\\\w])[Uu]\\\\+[?\\\\h]{1,6}(?:(-)\\\\h{1,6})?(?![-\\\\w])"},"url":{"begin":"(?i)(?<![-@\\\\w])(url)(\\\\()","beginCaptures":{"1":{"name":"support.function.url.css"},"2":{"name":"punctuation.section.function.begin.bracket.round.css"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.section.function.end.bracket.round.css"}},"name":"meta.function.url.css","patterns":[{"match":"[^\\"')\\\\s]+","name":"variable.parameter.url.css"},{"include":"#string"},{"include":"#comment-block"},{"include":"#escapes"}]}},"scopeName":"source.css"}`));
      css_default = [
        lang3
      ];
    }
  });

  // node_modules/@shikijs/langs/dist/html.mjs
  var html_exports = {};
  __export(html_exports, {
    default: () => html_default
  });
  var lang4, html_default;
  var init_html = __esm({
    "node_modules/@shikijs/langs/dist/html.mjs"() {
      init_javascript();
      init_css();
      lang4 = Object.freeze(JSON.parse(`{"displayName":"HTML","injections":{"R:text.html - (comment.block, text.html meta.embedded, meta.tag.*.*.html, meta.tag.*.*.*.html, meta.tag.*.*.*.*.html)":{"patterns":[{"match":"<","name":"invalid.illegal.bad-angle-bracket.html"}]}},"name":"html","patterns":[{"include":"#xml-processing"},{"include":"#comment"},{"include":"#doctype"},{"include":"#cdata"},{"include":"#tags-valid"},{"include":"#tags-invalid"},{"include":"#entities"}],"repository":{"attribute":{"patterns":[{"begin":"(s(hape|cope|t(ep|art)|ize(s)?|p(ellcheck|an)|elected|lot|andbox|rc(set|doc|lang)?)|h(ttp-equiv|i(dden|gh)|e(ight|aders)|ref(lang)?)|n(o(nce|validate|module)|ame)|c(h(ecked|arset)|ite|o(nt(ent(editable)?|rols)|ords|l(s(pan)?|or))|lass|rossorigin)|t(ype(mustmatch)?|itle|a(rget|bindex)|ranslate)|i(s(map)?|n(tegrity|putmode)|tem(scope|type|id|prop|ref)|d)|op(timum|en)|d(i(sabled|r(name)?)|ownload|e(coding|f(er|ault))|at(etime|a)|raggable)|usemap|p(ing|oster|la(ysinline|ceholder)|attern|reload)|enctype|value|kind|for(m(novalidate|target|enctype|action|method)?)?|w(idth|rap)|l(ist|o(op|w)|a(ng|bel))|a(s(ync)?|c(ce(sskey|pt(-charset)?)|tion)|uto(c(omplete|apitalize)|play|focus)|l(t|low(usermedia|paymentrequest|fullscreen))|bbr)|r(ows(pan)?|e(versed|quired|ferrerpolicy|l|adonly))|m(in(length)?|u(ted|ltiple)|e(thod|dia)|a(nifest|x(length)?)))(?![-:\\\\w])","beginCaptures":{"0":{"name":"entity.other.attribute-name.html"}},"end":"(?=\\\\s*+[^=\\\\s])","name":"meta.attribute.$1.html","patterns":[{"include":"#attribute-interior"}]},{"begin":"style(?![-:\\\\w])","beginCaptures":{"0":{"name":"entity.other.attribute-name.html"}},"end":"(?=\\\\s*+[^=\\\\s])","name":"meta.attribute.style.html","patterns":[{"begin":"=","beginCaptures":{"0":{"name":"punctuation.separator.key-value.html"}},"end":"(?<=[^=\\\\s])(?!\\\\s*=)|(?=/?>)","patterns":[{"begin":"(?=[^/<=>\`\\\\s]|/(?!>))","end":"(?!\\\\G)","name":"meta.embedded.line.css","patterns":[{"captures":{"0":{"name":"source.css"}},"match":"([^\\"'/<=>\`\\\\s]|/(?!>))+","name":"string.unquoted.html"},{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.html"}},"contentName":"source.css","end":"(\\")","endCaptures":{"0":{"name":"punctuation.definition.string.end.html"},"1":{"name":"source.css"}},"name":"string.quoted.double.html","patterns":[{"include":"#entities"}]},{"begin":"'","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.html"}},"contentName":"source.css","end":"(')","endCaptures":{"0":{"name":"punctuation.definition.string.end.html"},"1":{"name":"source.css"}},"name":"string.quoted.single.html","patterns":[{"include":"#entities"}]}]},{"match":"=","name":"invalid.illegal.unexpected-equals-sign.html"}]}]},{"begin":"on(s(croll|t(orage|alled)|u(spend|bmit)|e(curitypolicyviolation|ek(ing|ed)|lect))|hashchange|c(hange|o(ntextmenu|py)|u(t|echange)|l(ick|ose)|an(cel|play(through)?))|t(imeupdate|oggle)|in(put|valid)|o((?:n|ff)line)|d(urationchange|r(op|ag(start|over|e(n(ter|d)|xit)|leave)?)|blclick)|un(handledrejection|load)|p(opstate|lay(ing)?|a(ste|use|ge(show|hide))|rogress)|e(nded|rror|mptied)|volumechange|key(down|up|press)|focus|w(heel|aiting)|l(oad(start|e(nd|d((?:|meta)data)))?|anguagechange)|a(uxclick|fterprint|bort)|r(e(s(ize|et)|jectionhandled)|atechange)|m(ouse(o(ut|ver)|down|up|enter|leave|move)|essage(error)?)|b(efore(unload|print)|lur))(?![-:\\\\w])","beginCaptures":{"0":{"name":"entity.other.attribute-name.html"}},"end":"(?=\\\\s*+[^=\\\\s])","name":"meta.attribute.event-handler.$1.html","patterns":[{"begin":"=","beginCaptures":{"0":{"name":"punctuation.separator.key-value.html"}},"end":"(?<=[^=\\\\s])(?!\\\\s*=)|(?=/?>)","patterns":[{"begin":"(?=[^/<=>\`\\\\s]|/(?!>))","end":"(?!\\\\G)","name":"meta.embedded.line.js","patterns":[{"captures":{"0":{"name":"source.js"},"1":{"patterns":[{"include":"source.js"}]}},"match":"(([^\\"'/<=>\`\\\\s]|/(?!>))+)","name":"string.unquoted.html"},{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.html"}},"contentName":"source.js","end":"(\\")","endCaptures":{"0":{"name":"punctuation.definition.string.end.html"},"1":{"name":"source.js"}},"name":"string.quoted.double.html","patterns":[{"captures":{"0":{"patterns":[{"include":"source.js"}]}},"match":"([^\\\\n\\"/]|/(?![*/]))+"},{"begin":"//","beginCaptures":{"0":{"name":"punctuation.definition.comment.js"}},"end":"(?=\\")|\\\\n","name":"comment.line.double-slash.js"},{"begin":"/\\\\*","beginCaptures":{"0":{"name":"punctuation.definition.comment.begin.js"}},"end":"(?=\\")|\\\\*/","endCaptures":{"0":{"name":"punctuation.definition.comment.end.js"}},"name":"comment.block.js"}]},{"begin":"'","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.html"}},"contentName":"source.js","end":"(')","endCaptures":{"0":{"name":"punctuation.definition.string.end.html"},"1":{"name":"source.js"}},"name":"string.quoted.single.html","patterns":[{"captures":{"0":{"patterns":[{"include":"source.js"}]}},"match":"([^\\\\n'/]|/(?![*/]))+"},{"begin":"//","beginCaptures":{"0":{"name":"punctuation.definition.comment.js"}},"end":"(?=')|\\\\n","name":"comment.line.double-slash.js"},{"begin":"/\\\\*","beginCaptures":{"0":{"name":"punctuation.definition.comment.begin.js"}},"end":"(?=')|\\\\*/","endCaptures":{"0":{"name":"punctuation.definition.comment.end.js"}},"name":"comment.block.js"}]}]},{"match":"=","name":"invalid.illegal.unexpected-equals-sign.html"}]}]},{"begin":"(data-[-a-z]+)(?![-:\\\\w])","beginCaptures":{"0":{"name":"entity.other.attribute-name.html"}},"end":"(?=\\\\s*+[^=\\\\s])","name":"meta.attribute.data-x.$1.html","patterns":[{"include":"#attribute-interior"}]},{"begin":"(align|bgcolor|border)(?![-:\\\\w])","beginCaptures":{"0":{"name":"invalid.deprecated.entity.other.attribute-name.html"}},"end":"(?=\\\\s*+[^=\\\\s])","name":"meta.attribute.$1.html","patterns":[{"include":"#attribute-interior"}]},{"begin":"([^\\\\x00- \\"'/<=>\\\\x7F-\\\\x{9F}\uFDD0-\uFDEF\uFFFE\uFFFF\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\\\\x{4FFFE}\\\\x{4FFFF}\\\\x{5FFFE}\\\\x{5FFFF}\\\\x{6FFFE}\\\\x{6FFFF}\\\\x{7FFFE}\\\\x{7FFFF}\\\\x{8FFFE}\\\\x{8FFFF}\\\\x{9FFFE}\\\\x{9FFFF}\\\\x{AFFFE}\\\\x{AFFFF}\\\\x{BFFFE}\\\\x{BFFFF}\\\\x{CFFFE}\\\\x{CFFFF}\\\\x{DFFFE}\\\\x{DFFFF}\\\\x{EFFFE}\\\\x{EFFFF}\\\\x{FFFFE}\\\\x{FFFFF}\\\\x{10FFFE}\\\\x{10FFFF}]+)","beginCaptures":{"0":{"name":"entity.other.attribute-name.html"}},"end":"(?=\\\\s*+[^=\\\\s])","name":"meta.attribute.unrecognized.$1.html","patterns":[{"include":"#attribute-interior"}]},{"match":"[^>\\\\s]+","name":"invalid.illegal.character-not-allowed-here.html"}]},"attribute-interior":{"patterns":[{"begin":"=","beginCaptures":{"0":{"name":"punctuation.separator.key-value.html"}},"end":"(?<=[^=\\\\s])(?!\\\\s*=)|(?=/?>)","patterns":[{"match":"([^\\"'/<=>\`\\\\s]|/(?!>))+","name":"string.unquoted.html"},{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.html"}},"end":"\\"","endCaptures":{"0":{"name":"punctuation.definition.string.end.html"}},"name":"string.quoted.double.html","patterns":[{"include":"#entities"}]},{"begin":"'","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.html"}},"end":"'","endCaptures":{"0":{"name":"punctuation.definition.string.end.html"}},"name":"string.quoted.single.html","patterns":[{"include":"#entities"}]},{"match":"=","name":"invalid.illegal.unexpected-equals-sign.html"}]}]},"cdata":{"begin":"<!\\\\[CDATA\\\\[","beginCaptures":{"0":{"name":"punctuation.definition.tag.begin.html"}},"contentName":"string.other.inline-data.html","end":"]]>","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.metadata.cdata.html"},"comment":{"begin":"<!--","captures":{"0":{"name":"punctuation.definition.comment.html"}},"end":"-->","name":"comment.block.html","patterns":[{"match":"\\\\G-?>","name":"invalid.illegal.characters-not-allowed-here.html"},{"match":"<!-(?:-(?!>)|(?=-->))","name":"invalid.illegal.characters-not-allowed-here.html"},{"match":"--!>","name":"invalid.illegal.characters-not-allowed-here.html"}]},"core-minus-invalid":{"patterns":[{"include":"#xml-processing"},{"include":"#comment"},{"include":"#doctype"},{"include":"#cdata"},{"include":"#tags-valid"},{"include":"#entities"}]},"doctype":{"begin":"<!(?=(?i:DOCTYPE\\\\s))","beginCaptures":{"0":{"name":"punctuation.definition.tag.begin.html"}},"end":">","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.metadata.doctype.html","patterns":[{"match":"\\\\G(?i:DOCTYPE)","name":"entity.name.tag.html"},{"begin":"\\"","end":"\\"","name":"string.quoted.double.html"},{"match":"[^>\\\\s]+","name":"entity.other.attribute-name.html"}]},"entities":{"patterns":[{"captures":{"1":{"name":"punctuation.definition.entity.html"},"912":{"name":"punctuation.definition.entity.html"}},"match":"(&)(?=[A-Za-z])((a(s(ymp(eq)?|cr|t)|n(d(slope|[dv]|and)?|g(s(t|ph)|zarr|e|le|rt(vb(d)?)?|msd(a([a-h]))?)?)|c(y|irc|d|ute|E)?|tilde|o(pf|gon)|uml|p(id|os|prox(eq)?|[Ee]|acir)?|elig|f(r)?|w((?:con|)int)|l(pha|e(ph|fsym))|acute|ring|grave|m(p|a(cr|lg))|breve)|A(s(sign|cr)|nd|MP|c(y|irc)|tilde|o(pf|gon)|uml|pplyFunction|fr|Elig|lpha|acute|ring|grave|macr|breve))|(B(scr|cy|opf|umpeq|e(cause|ta|rnoullis)|fr|a(ckslash|r(v|wed))|reve)|b(s(cr|im(e)?|ol(hsub|b)?|emi)|n(ot|e(quiv)?)|c(y|ong)|ig(s(tar|qcup)|c(irc|up|ap)|triangle(down|up)|o(times|dot|plus)|uplus|vee|wedge)|o(t(tom)?|pf|wtie|x(h([DUdu])?|times|H([DUdu])?|d([LRlr])|u([LRlr])|plus|D([LRlr])|v([HLRhlr])?|U([LRlr])|V([HLRhlr])?|minus|box))|Not|dquo|u(ll(et)?|mp(e(q)?|E)?)|prime|e(caus(e)?|t(h|ween|a)|psi|rnou|mptyv)|karow|fr|l(ock|k(1([24])|34)|a(nk|ck(square|triangle(down|left|right)?|lozenge)))|a(ck(sim(eq)?|cong|prime|epsilon)|r(vee|wed(ge)?))|r(eve|vbar)|brk(tbrk)?))|(c(s(cr|u(p(e)?|b(e)?))|h(cy|i|eck(mark)?)|ylcty|c(irc|ups(sm)?|edil|a(ps|ron))|tdot|ir(scir|c(eq|le(d(R|circ|S|dash|ast)|arrow(left|right)))?|e|fnint|E|mid)?|o(n(int|g(dot)?)|p(y(sr)?|f|rod)|lon(e(q)?)?|m(p(fn|le(xes|ment))?|ma(t)?))|dot|u(darr([lr])|p(s|c([au]p)|or|dot|brcap)?|e(sc|pr)|vee|wed|larr(p)?|r(vearrow(left|right)|ly(eq(succ|prec)|vee|wedge)|arr(m)?|ren))|e(nt(erdot)?|dil|mptyv)|fr|w((?:con|)int)|lubs(uit)?|a(cute|p(s|c([au]p)|dot|and|brcup)?|r(on|et))|r(oss|arr))|C(scr|hi|c(irc|onint|edil|aron)|ircle(Minus|Times|Dot|Plus)|Hcy|o(n(tourIntegral|int|gruent)|unterClockwiseContourIntegral|p(f|roduct)|lon(e)?)|dot|up(Cap)?|OPY|e(nterDot|dilla)|fr|lo(seCurly((?:Double|)Quote)|ckwiseContourIntegral)|a(yleys|cute|p(italDifferentialD)?)|ross))|(d(s(c([ry])|trok|ol)|har([lr])|c(y|aron)|t(dot|ri(f)?)|i(sin|e|v(ide(ontimes)?|onx)?|am(s|ond(suit)?)?|gamma)|Har|z(cy|igrarr)|o(t(square|plus|eq(dot)?|minus)?|ublebarwedge|pf|wn(harpoon(left|right)|downarrows|arrow)|llar)|d(otseq|a(rr|gger))?|u(har|arr)|jcy|e(lta|g|mptyv)|f(isht|r)|wangle|lc(orn|rop)|a(sh(v)?|leth|rr|gger)|r(c(orn|rop)|bkarow)|b(karow|lac)|Arr)|D(s(cr|trok)|c(y|aron)|Scy|i(fferentialD|a(critical(Grave|Tilde|Do(t|ubleAcute)|Acute)|mond))|o(t(Dot|Equal)?|uble(Right(Tee|Arrow)|ContourIntegral|Do(t|wnArrow)|Up((?:Down|)Arrow)|VerticalBar|L(ong(RightArrow|Left((?:Right|)Arrow))|eft(RightArrow|Tee|Arrow)))|pf|wn(Right(TeeVector|Vector(Bar)?)|Breve|Tee(Arrow)?|arrow|Left(RightVector|TeeVector|Vector(Bar)?)|Arrow(Bar|UpArrow)?))|Zcy|el(ta)?|D(otrahd)?|Jcy|fr|a(shv|rr|gger)))|(e(s(cr|im|dot)|n(sp|g)|c(y|ir(c)?|olon|aron)|t([ah])|o(pf|gon)|dot|u(ro|ml)|p(si(v|lon)?|lus|ar(sl)?)|e|D(D??ot)|q(s(im|lant(less|gtr))|c(irc|olon)|u(iv(DD)?|est|als)|vparsl)|f(Dot|r)|l(s(dot)?|inters|l)?|a(ster|cute)|r(Dot|arr)|g(s(dot)?|rave)?|x(cl|ist|p(onentiale|ectation))|m(sp(1([34]))?|pty(set|v)?|acr))|E(s(cr|im)|c(y|irc|aron)|ta|o(pf|gon)|NG|dot|uml|TH|psilon|qu(ilibrium|al(Tilde)?)|fr|lement|acute|grave|x(ists|ponentialE)|m(pty((?:|Very)SmallSquare)|acr)))|(f(scr|nof|cy|ilig|o(pf|r(k(v)?|all))|jlig|partint|emale|f(ilig|l(l??ig)|r)|l(tns|lig|at)|allingdotseq|r(own|a(sl|c(1([2-68])|78|2([35])|3([458])|45|5([68])))))|F(scr|cy|illed((?:|Very)SmallSquare)|o(uriertrf|pf|rAll)|fr))|(G(scr|c(y|irc|edil)|t|opf|dot|T|Jcy|fr|amma(d)?|reater(Greater|SlantEqual|Tilde|Equal(Less)?|FullEqual|Less)|g|breve)|g(s(cr|im([el])?)|n(sim|e(q(q)?)?|E|ap(prox)?)|c(y|irc)|t(c(c|ir)|dot|quest|lPar|r(sim|dot|eq(q?less)|less|a(pprox|rr)))?|imel|opf|dot|jcy|e(s(cc|dot(o(l)?)?|l(es)?)?|q(slant|q)?|l)?|v(nE|ertneqq)|fr|E(l)?|l([Eaj])?|a(cute|p|mma(d)?)|rave|g(g)?|breve))|(h(s(cr|trok|lash)|y(phen|bull)|circ|o(ok((?:lef|righ)tarrow)|pf|arr|rbar|mtht)|e(llip|arts(uit)?|rcon)|ks([ew]arow)|fr|a(irsp|lf|r(dcy|r(cir|w)?)|milt)|bar|Arr)|H(s(cr|trok)|circ|ilbertSpace|o(pf|rizontalLine)|ump(DownHump|Equal)|fr|a(cek|t)|ARDcy))|(i(s(cr|in(s(v)?|dot|[Ev])?)|n(care|t(cal|prod|e(rcal|gers)|larhk)?|odot|fin(tie)?)?|c(y|irc)?|t(ilde)?|i(nfin|i(i??nt)|ota)?|o(cy|ta|pf|gon)|u(kcy|ml)|jlig|prod|e(cy|xcl)|quest|f([fr])|acute|grave|m(of|ped|a(cr|th|g(part|e|line))))|I(scr|n(t(e(rsection|gral))?|visible(Comma|Times))|c(y|irc)|tilde|o(ta|pf|gon)|dot|u(kcy|ml)|Ocy|Jlig|fr|Ecy|acute|grave|m(plies|a(cr|ginaryI))?))|(j(s(cr|ercy)|c(y|irc)|opf|ukcy|fr|math)|J(s(cr|ercy)|c(y|irc)|opf|ukcy|fr))|(k(scr|hcy|c(y|edil)|opf|jcy|fr|appa(v)?|green)|K(scr|c(y|edil)|Hcy|opf|Jcy|fr|appa))|(l(s(h|cr|trok|im([eg])?|q(uo(r)?|b)|aquo)|h(ar(d|u(l)?)|blk)|n(sim|e(q(q)?)?|E|ap(prox)?)|c(y|ub|e(d??il)|aron)|Barr|t(hree|c(c|ir)|imes|dot|quest|larr|r(i([ef])?|Par))?|Har|o(ng(left((?:|right)arrow)|rightarrow|mapsto)|times|z(enge|f)?|oparrow(left|right)|p(f|lus|ar)|w(ast|bar)|a(ng|rr)|brk)|d(sh|ca|quo(r)?|r((?:d|us)har))|ur((?:ds|u)har)|jcy|par(lt)?|e(s(s(sim|dot|eq(q?gtr)|approx|gtr)|cc|dot(o(r)?)?|g(es)?)?|q(slant|q)?|ft(harpoon(down|up)|threetimes|leftarrows|arrow(tail)?|right(squigarrow|harpoons|arrow(s)?))|g)?|v(nE|ertneqq)|f(isht|loor|r)|E(g)?|l(hard|corner|tri|arr)?|a(ng(d|le)?|cute|t(e(s)?|ail)?|p|emptyv|quo|rr(sim|hk|tl|pl|fs|lp|b(fs)?)?|gran|mbda)|r(har(d)?|corner|tri|arr|m)|g(E)?|m(idot|oust(ache)?)|b(arr|r(k(sl([du])|e)|ac([ek]))|brk)|A(tail|arr|rr))|L(s(h|cr|trok)|c(y|edil|aron)|t|o(ng(RightArrow|left((?:|right)arrow)|rightarrow|Left((?:Right|)Arrow))|pf|wer((?:Righ|Lef)tArrow))|T|e(ss(Greater|SlantEqual|Tilde|EqualGreater|FullEqual|Less)|ft(Right(Vector|Arrow)|Ceiling|T(ee(Vector|Arrow)?|riangle(Bar|Equal)?)|Do(ubleBracket|wn(TeeVector|Vector(Bar)?))|Up(TeeVector|DownVector|Vector(Bar)?)|Vector(Bar)?|arrow|rightarrow|Floor|A(ngleBracket|rrow(RightArrow|Bar)?)))|Jcy|fr|l(eftarrow)?|a(ng|cute|placetrf|rr|mbda)|midot))|(M(scr|cy|inusPlus|opf|u|e(diumSpace|llintrf)|fr|ap)|m(s(cr|tpos)|ho|nplus|c(y|omma)|i(nus(d(u)?|b)?|cro|d(cir|dot|ast)?)|o(dels|pf)|dash|u((?:lti|)map)?|p|easuredangle|DDot|fr|l(cp|dr)|a(cr|p(sto(down|up|left)?)?|l(t(ese)?|e)|rker)))|(n(s(hort(parallel|mid)|c(cue|[er])?|im(e(q)?)?|u(cc(eq)?|p(set(eq(q)?)?|[Ee])?|b(set(eq(q)?)?|[Ee])?)|par|qsu([bp]e)|mid)|Rightarrow|h(par|arr|Arr)|G(t(v)?|g)|c(y|ong(dot)?|up|edil|a(p|ron))|t(ilde|lg|riangle(left(eq)?|right(eq)?)|gl)|i(s(d)?|v)?|o(t(ni(v([abc]))?|in(dot|v([abc])|E)?)?|pf)|dash|u(m(sp|ero)?)?|jcy|p(olint|ar(sl|t|allel)?|r(cue|e(c(eq)?)?)?)|e(s(im|ear)|dot|quiv|ar(hk|r(ow)?)|xist(s)?|Arr)?|v(sim|infin|Harr|dash|Dash|l(t(rie)?|e|Arr)|ap|r(trie|Arr)|g([et]))|fr|w(near|ar(hk|r(ow)?)|Arr)|V([Dd]ash)|l(sim|t(ri(e)?)?|dr|e(s(s)?|q(slant|q)?|ft((?:|right)arrow))?|E|arr|Arr)|a(ng|cute|tur(al(s)?)?|p(id|os|prox|E)?|bla)|r(tri(e)?|ightarrow|arr([cw])?|Arr)|g(sim|t(r)?|e(s|q(slant|q)?)?|E)|mid|L(t(v)?|eft((?:|right)arrow)|l)|b(sp|ump(e)?))|N(scr|c(y|edil|aron)|tilde|o(nBreakingSpace|Break|t(R(ightTriangle(Bar|Equal)?|everseElement)|Greater(Greater|SlantEqual|Tilde|Equal|FullEqual|Less)?|S(u(cceeds(SlantEqual|Tilde|Equal)?|perset(Equal)?|bset(Equal)?)|quareSu(perset(Equal)?|bset(Equal)?))|Hump(DownHump|Equal)|Nested(GreaterGreater|LessLess)|C(ongruent|upCap)|Tilde(Tilde|Equal|FullEqual)?|DoubleVerticalBar|Precedes((?:Slant|)Equal)?|E(qual(Tilde)?|lement|xists)|VerticalBar|Le(ss(Greater|SlantEqual|Tilde|Equal|Less)?|ftTriangle(Bar|Equal)?))?|pf)|u|e(sted(GreaterGreater|LessLess)|wLine|gative(MediumSpace|Thi((?:n|ck)Space)|VeryThinSpace))|Jcy|fr|acute))|(o(s(cr|ol|lash)|h(m|bar)|c(y|ir(c)?)|ti(lde|mes(as)?)|S|int|opf|d(sold|iv|ot|ash|blac)|uml|p(erp|lus|ar)|elig|vbar|f(cir|r)|l(c(ir|ross)|t|ine|arr)|a(st|cute)|r(slope|igof|or|d(er(of)?|[fm])?|v|arr)?|g(t|on|rave)|m(i(nus|cron|d)|ega|acr))|O(s(cr|lash)|c(y|irc)|ti(lde|mes)|opf|dblac|uml|penCurly((?:Double|)Quote)|ver(B(ar|rac(e|ket))|Parenthesis)|fr|Elig|acute|r|grave|m(icron|ega|acr)))|(p(s(cr|i)|h(i(v)?|one|mmat)|cy|i(tchfork|v)?|o(intint|und|pf)|uncsp|er(cnt|tenk|iod|p|mil)|fr|l(us(sim|cir|two|d([ou])|e|acir|mn|b)?|an(ck(h)?|kv))|ar(s(im|l)|t|a(llel)?)?|r(sim|n(sim|E|ap)|cue|ime(s)?|o(d|p(to)?|f(surf|line|alar))|urel|e(c(sim|n(sim|eqq|approx)|curlyeq|eq|approx)?)?|E|ap)?|m)|P(s(cr|i)|hi|cy|i|o(incareplane|pf)|fr|lusMinus|artialD|r(ime|o(duct|portion(al)?)|ecedes(SlantEqual|Tilde|Equal)?)?))|(q(scr|int|opf|u(ot|est(eq)?|at(int|ernions))|prime|fr)|Q(scr|opf|UOT|fr))|(R(s(h|cr)|ho|c(y|edil|aron)|Barr|ight(Ceiling|T(ee(Vector|Arrow)?|riangle(Bar|Equal)?)|Do(ubleBracket|wn(TeeVector|Vector(Bar)?))|Up(TeeVector|DownVector|Vector(Bar)?)|Vector(Bar)?|arrow|Floor|A(ngleBracket|rrow(Bar|LeftArrow)?))|o(undImplies|pf)|uleDelayed|e(verse(UpEquilibrium|E(quilibrium|lement)))?|fr|EG|a(ng|cute|rr(tl)?)|rightarrow)|r(s(h|cr|q(uo(r)?|b)|aquo)|h(o(v)?|ar(d|u(l)?))|nmid|c(y|ub|e(d??il)|aron)|Barr|t(hree|imes|ri([ef]|ltri)?)|i(singdotseq|ng|ght(squigarrow|harpoon(down|up)|threetimes|left(harpoons|arrows)|arrow(tail)?|rightarrows))|Har|o(times|p(f|lus|ar)|a(ng|rr)|brk)|d(sh|ca|quo(r)?|ldhar)|uluhar|p(polint|ar(gt)?)|e(ct|al(s|ine|part)?|g)|f(isht|loor|r)|l(har|arr|m)|a(ng([de]|le)?|c(ute|e)|t(io(nals)?|ail)|dic|emptyv|quo|rr(sim|hk|c|tl|pl|fs|w|lp|ap|b(fs)?)?)|rarr|x|moust(ache)?|b(arr|r(k(sl([du])|e)|ac([ek]))|brk)|A(tail|arr|rr)))|(s(s(cr|tarf|etmn|mile)|h(y|c(hcy|y)|ort(parallel|mid)|arp)|c(sim|y|n(sim|E|ap)|cue|irc|polint|e(dil)?|E|a(p|ron))?|t(ar(f)?|r(ns|aight(phi|epsilon)))|i(gma([fv])?|m(ne|dot|plus|e(q)?|l(E)?|rarr|g(E)?)?)|zlig|o(pf|ftcy|l(b(ar)?)?)|dot([be])?|u(ng|cc(sim|n(sim|eqq|approx)|curlyeq|eq|approx)?|p(s(im|u([bp])|et(neq(q)?|eq(q)?)?)|hs(ol|ub)|1|n([Ee])|2|d(sub|ot)|3|plus|e(dot)?|E|larr|mult)?|m|b(s(im|u([bp])|et(neq(q)?|eq(q)?)?)|n([Ee])|dot|plus|e(dot)?|E|rarr|mult)?)|pa(des(uit)?|r)|e(swar|ct|tm(n|inus)|ar(hk|r(ow)?)|xt|mi|Arr)|q(su(p(set(eq)?|e)?|b(set(eq)?|e)?)|c(up(s)?|ap(s)?)|u(f|ar([ef]))?)|fr(own)?|w(nwar|ar(hk|r(ow)?)|Arr)|larr|acute|rarr|m(t(e(s)?)?|i(d|le)|eparsl|a(shp|llsetminus))|bquo)|S(scr|hort((?:Right|Down|Up|Left)Arrow)|c(y|irc|edil|aron)?|tar|igma|H(cy|CHcy)|opf|u(c(hThat|ceeds(SlantEqual|Tilde|Equal)?)|p(set|erset(Equal)?)?|m|b(set(Equal)?)?)|OFTcy|q(uare(Su(perset(Equal)?|bset(Equal)?)|Intersection|Union)?|rt)|fr|acute|mallCircle))|(t(s(hcy|c([ry])|trok)|h(i(nsp|ck(sim|approx))|orn|e(ta(sym|v)?|re(4|fore))|k(sim|ap))|c(y|edil|aron)|i(nt|lde|mes(d|b(ar)?)?)|o(sa|p(cir|f(ork)?|bot)?|ea)|dot|prime|elrec|fr|w(ixt|ohead((?:lef|righ)tarrow))|a(u|rget)|r(i(sb|time|dot|plus|e|angle(down|q|left(eq)?|right(eq)?)?|minus)|pezium|ade)|brk)|T(s(cr|trok)|RADE|h(i((?:n|ck)Space)|e(ta|refore))|c(y|edil|aron)|S(H??cy)|ilde(Tilde|Equal|FullEqual)?|HORN|opf|fr|a([bu])|ripleDot))|(u(scr|h(ar([lr])|blk)|c(y|irc)|t(ilde|dot|ri(f)?)|Har|o(pf|gon)|d(har|arr|blac)|u(arr|ml)|p(si(h|lon)?|harpoon(left|right)|downarrow|uparrows|lus|arrow)|f(isht|r)|wangle|l(c(orn(er)?|rop)|tri)|a(cute|rr)|r(c(orn(er)?|rop)|tri|ing)|grave|m(l|acr)|br(cy|eve)|Arr)|U(scr|n(ion(Plus)?|der(B(ar|rac(e|ket))|Parenthesis))|c(y|irc)|tilde|o(pf|gon)|dblac|uml|p(si(lon)?|downarrow|Tee(Arrow)?|per((?:Righ|Lef)tArrow)|DownArrow|Equilibrium|arrow|Arrow(Bar|DownArrow)?)|fr|a(cute|rr(ocir)?)|ring|grave|macr|br(cy|eve)))|(v(s(cr|u(pn([Ee])|bn([Ee])))|nsu([bp])|cy|Bar(v)?|zigzag|opf|dash|prop|e(e(eq|bar)?|llip|r(t|bar))|Dash|fr|ltri|a(ngrt|r(s(igma|u(psetneq(q)?|bsetneq(q)?))|nothing|t(heta|riangle(left|right))|p(hi|i|ropto)|epsilon|kappa|r(ho)?))|rtri|Arr)|V(scr|cy|opf|dash(l)?|e(e|r(yThinSpace|t(ical(Bar|Separator|Tilde|Line))?|bar))|Dash|vdash|fr|bar))|(w(scr|circ|opf|p|e(ierp|d(ge(q)?|bar))|fr|r(eath)?)|W(scr|circ|opf|edge|fr))|(X(scr|i|opf|fr)|x(s(cr|qcup)|h([Aa]rr)|nis|c(irc|up|ap)|i|o(time|dot|p(f|lus))|dtri|u(tri|plus)|vee|fr|wedge|l([Aa]rr)|r([Aa]rr)|map))|(y(scr|c(y|irc)|icy|opf|u(cy|ml)|en|fr|ac(y|ute))|Y(scr|c(y|irc)|opf|uml|Icy|Ucy|fr|acute|Acy))|(z(scr|hcy|c(y|aron)|igrarr|opf|dot|e(ta|etrf)|fr|w(n?j)|acute)|Z(scr|c(y|aron)|Hcy|opf|dot|e(ta|roWidthSpace)|fr|acute)))(;)","name":"constant.character.entity.named.$2.html"},{"captures":{"1":{"name":"punctuation.definition.entity.html"},"3":{"name":"punctuation.definition.entity.html"}},"match":"(&)#[0-9]+(;)","name":"constant.character.entity.numeric.decimal.html"},{"captures":{"1":{"name":"punctuation.definition.entity.html"},"3":{"name":"punctuation.definition.entity.html"}},"match":"(&)#[Xx]\\\\h+(;)","name":"constant.character.entity.numeric.hexadecimal.html"},{"match":"&(?=[0-9A-Za-z]+;)","name":"invalid.illegal.ambiguous-ampersand.html"}]},"math":{"patterns":[{"begin":"(?i)(<)(math)(?=\\\\s|/?>)(?:(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(>))?","beginCaptures":{"0":{"name":"meta.tag.structure.$2.start.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"patterns":[{"include":"#attribute"}]},"5":{"name":"punctuation.definition.tag.end.html"}},"end":"(?i)(</)(\\\\2)\\\\s*(>)","endCaptures":{"0":{"name":"meta.tag.structure.$2.end.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.element.structure.$2.html","patterns":[{"begin":"(?<!>)\\\\G","end":">","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.structure.start.html","patterns":[{"include":"#attribute"}]},{"include":"#tags"}]}],"repository":{"attribute":{"patterns":[{"begin":"(s(hift|ymmetric|cript(sizemultiplier|level|minsize)|t(ackalign|retchy)|ide|u([bp]scriptshift)|e(parator(s)?|lection)|rc)|h(eight|ref)|n(otation|umalign)|c(haralign|olumn(spa(n|cing)|width|lines|align)|lose|rossout)|i(n(dent(shift(first|last)?|target|align(first|last)?)|fixlinebreakstyle)|d)|o(pen|verflow)|d(i(splay(style)?|r)|e(nomalign|cimalpoint|pth))|position|e(dge|qual(columns|rows))|voffset|f(orm|ence|rame(spacing)?)|width|l(space|ine(thickness|leading|break(style|multchar)?)|o(ngdivstyle|cation)|ength|quote|argeop)|a(c(cent(under)?|tiontype)|l(t(text|img(-(height|valign|width))?)|ign(mentscope)?))|r(space|ow(spa(n|cing)|lines|align)|quote)|groupalign|x(link:href|mlns)|m(in(size|labelspacing)|ovablelimits|a(th(size|color|variant|background)|xsize))|bevelled)(?![-:\\\\w])","beginCaptures":{"0":{"name":"entity.other.attribute-name.html"}},"end":"(?=\\\\s*+[^=\\\\s])","name":"meta.attribute.$1.html","patterns":[{"include":"#attribute-interior"}]},{"begin":"([^\\\\x00- \\"'/<=>\\\\x7F-\\\\x{9F}\uFDD0-\uFDEF\uFFFE\uFFFF\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\\\\x{4FFFE}\\\\x{4FFFF}\\\\x{5FFFE}\\\\x{5FFFF}\\\\x{6FFFE}\\\\x{6FFFF}\\\\x{7FFFE}\\\\x{7FFFF}\\\\x{8FFFE}\\\\x{8FFFF}\\\\x{9FFFE}\\\\x{9FFFF}\\\\x{AFFFE}\\\\x{AFFFF}\\\\x{BFFFE}\\\\x{BFFFF}\\\\x{CFFFE}\\\\x{CFFFF}\\\\x{DFFFE}\\\\x{DFFFF}\\\\x{EFFFE}\\\\x{EFFFF}\\\\x{FFFFE}\\\\x{FFFFF}\\\\x{10FFFE}\\\\x{10FFFF}]+)","beginCaptures":{"0":{"name":"entity.other.attribute-name.html"}},"end":"(?=\\\\s*+[^=\\\\s])","name":"meta.attribute.unrecognized.$1.html","patterns":[{"include":"#attribute-interior"}]},{"match":"[^>\\\\s]+","name":"invalid.illegal.character-not-allowed-here.html"}]},"tags":{"patterns":[{"include":"#comment"},{"include":"#cdata"},{"captures":{"0":{"name":"meta.tag.structure.math.$2.void.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"patterns":[{"include":"#attribute"}]},"5":{"name":"punctuation.definition.tag.end.html"}},"match":"(?i)(<)(annotation|annotation-xml|semantics|menclose|merror|mfenced|mfrac|mpadded|mphantom|mroot|mrow|msqrt|mstyle|mmultiscripts|mover|mprescripts|msub|msubsup|msup|munder|munderover|none|mlabeledtr|mtable|mtd|mtr|mlongdiv|mscarries|mscarry|msgroup|msline|msrow|mstack|maction)(?=\\\\s|/?>)(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(/>)","name":"meta.element.structure.math.$2.html"},{"begin":"(?i)(<)(annotation|annotation-xml|semantics|menclose|merror|mfenced|mfrac|mpadded|mphantom|mroot|mrow|msqrt|mstyle|mmultiscripts|mover|mprescripts|msub|msubsup|msup|munder|munderover|none|mlabeledtr|mtable|mtd|mtr|mlongdiv|mscarries|mscarry|msgroup|msline|msrow|mstack|maction)(?=\\\\s|/?>)(?:(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(>))?","beginCaptures":{"0":{"name":"meta.tag.structure.math.$2.start.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"patterns":[{"include":"#attribute"}]},"5":{"name":"punctuation.definition.tag.end.html"}},"end":"(?i)(</)(\\\\2)\\\\s*(>)|(/>)|(?=</\\\\w+)","endCaptures":{"0":{"name":"meta.tag.structure.math.$2.end.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"punctuation.definition.tag.end.html"},"4":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.element.structure.math.$2.html","patterns":[{"begin":"(?<!>)\\\\G","end":"(?=/>)|>","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.structure.start.html","patterns":[{"include":"#attribute"}]},{"include":"#tags"}]},{"captures":{"0":{"name":"meta.tag.inline.math.$2.void.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"patterns":[{"include":"#attribute"}]},"5":{"name":"punctuation.definition.tag.end.html"}},"match":"(?i)(<)(m(?:[inos]|space|text|aligngroup|alignmark))(?=\\\\s|/?>)(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(/>)","name":"meta.element.inline.math.$2.html"},{"begin":"(?i)(<)(m(?:[inos]|space|text|aligngroup|alignmark))(?=\\\\s|/?>)(?:(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(>))?","beginCaptures":{"0":{"name":"meta.tag.inline.math.$2.start.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"patterns":[{"include":"#attribute"}]},"5":{"name":"punctuation.definition.tag.end.html"}},"end":"(?i)(</)(\\\\2)\\\\s*(>)|(/>)|(?=</\\\\w+)","endCaptures":{"0":{"name":"meta.tag.inline.math.$2.end.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"punctuation.definition.tag.end.html"},"4":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.element.inline.math.$2.html","patterns":[{"begin":"(?<!>)\\\\G","end":"(?=/>)|>","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.inline.start.html","patterns":[{"include":"#attribute"}]},{"include":"#tags"}]},{"captures":{"0":{"name":"meta.tag.object.math.$2.void.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"patterns":[{"include":"#attribute"}]},"5":{"name":"punctuation.definition.tag.end.html"}},"match":"(?i)(<)(mglyph)(?=\\\\s|/?>)(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(/>)","name":"meta.element.object.math.$2.html"},{"begin":"(?i)(<)(mglyph)(?=\\\\s|/?>)(?:(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(>))?","beginCaptures":{"0":{"name":"meta.tag.object.math.$2.start.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"patterns":[{"include":"#attribute"}]},"5":{"name":"punctuation.definition.tag.end.html"}},"end":"(?i)(</)(\\\\2)\\\\s*(>)|(/>)|(?=</\\\\w+)","endCaptures":{"0":{"name":"meta.tag.object.math.$2.end.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"punctuation.definition.tag.end.html"},"4":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.element.object.math.$2.html","patterns":[{"begin":"(?<!>)\\\\G","end":"(?=/>)|>","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.object.start.html","patterns":[{"include":"#attribute"}]},{"include":"#tags"}]},{"captures":{"0":{"name":"meta.tag.other.invalid.void.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"invalid.illegal.unrecognized-tag.html"},"4":{"patterns":[{"include":"#attribute"}]},"6":{"name":"punctuation.definition.tag.end.html"}},"match":"(?i)(<)(([:\\\\w]+))(?=\\\\s|/?>)(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(/>)","name":"meta.element.other.invalid.html"},{"begin":"(?i)(<)((\\\\w[^>\\\\s]*))(?=\\\\s|/?>)(?:(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(>))?","beginCaptures":{"0":{"name":"meta.tag.other.invalid.start.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"invalid.illegal.unrecognized-tag.html"},"4":{"patterns":[{"include":"#attribute"}]},"6":{"name":"punctuation.definition.tag.end.html"}},"end":"(?i)(</)((\\\\2))\\\\s*(>)|(/>)|(?=</\\\\w+)","endCaptures":{"0":{"name":"meta.tag.other.invalid.end.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"invalid.illegal.unrecognized-tag.html"},"4":{"name":"punctuation.definition.tag.end.html"},"5":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.element.other.invalid.html","patterns":[{"begin":"(?<!>)\\\\G","end":"(?=/>)|>","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.other.invalid.start.html","patterns":[{"include":"#attribute"}]},{"include":"#tags"}]},{"include":"#tags-invalid"}]}}},"svg":{"patterns":[{"begin":"(?i)(<)(svg)(?=\\\\s|/?>)(?:(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(>))?","beginCaptures":{"0":{"name":"meta.tag.structure.$2.start.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"patterns":[{"include":"#attribute"}]},"5":{"name":"punctuation.definition.tag.end.html"}},"end":"(?i)(</)(\\\\2)\\\\s*(>)","endCaptures":{"0":{"name":"meta.tag.structure.$2.end.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.element.structure.$2.html","patterns":[{"begin":"(?<!>)\\\\G","end":">","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.structure.start.html","patterns":[{"include":"#attribute"}]},{"include":"#tags"}]}],"repository":{"attribute":{"patterns":[{"begin":"(s(hape-rendering|ystemLanguage|cale|t(yle|itchTiles|op-(color|opacity)|dDeviation|em([hv])|artOffset|r(i(ng|kethrough-(thickness|position))|oke(-(opacity|dash(offset|array)|width|line(cap|join)|miterlimit))?))|urfaceScale|p(e(cular(Constant|Exponent)|ed)|acing|readMethod)|eed|lope)|h(oriz-(origin-x|adv-x)|eight|anging|ref(lang)?)|y([12]|ChannelSelector)?|n(umOctaves|ame)|c(y|o(ntentS((?:cript|tyle)Type)|lor(-(interpolation(-filters)?|profile|rendering))?)|ursor|l(ip(-(path|rule)|PathUnits)?|ass)|a(p-height|lcMode)|x)|t(ype|o|ext(-(decoration|anchor|rendering)|Length)|a(rget([XY])?|b(index|leValues))|ransform)|i(n(tercept|2)?|d(eographic)?|mage-rendering)|z(oomAndPan)?|o(p(erator|acity)|ver(flow|line-(thickness|position))|ffset|r(i(ent(ation)?|gin)|der))|d(y|i(splay|visor|ffuseConstant|rection)|ominant-baseline|ur|e(scent|celerate)|x)?|u(1|n(i(code(-(range|bidi))?|ts-per-em)|derline-(thickness|position))|2)|p(ing|oint(s(At([XYZ]))?|er-events)|a(nose-1|t(h(Length)?|tern(ContentUnits|Transform|Units))|int-order)|r(imitiveUnits|eserveA(spectRatio|lpha)))|e(n(d|able-background)|dgeMode|levation|x(ternalResourcesRequired|ponent))|v(i(sibility|ew(Box|Target))|-(hanging|ideographic|alphabetic|mathematical)|e(ctor-effect|r(sion|t-(origin-([xy])|adv-y)))|alues)|k([123]|e(y(Splines|Times|Points)|rn(ing|el(Matrix|UnitLength)))|4)?|f(y|il(ter(Res|Units)?|l(-(opacity|rule))?)|o(nt-(s(t(yle|retch)|ize(-adjust)?)|variant|family|weight)|rmat)|lood-(color|opacity)|r(om)?|x)|w(idth(s)?|ord-spacing|riting-mode)|l(i(ghting-color|mitingConeAngle)|ocal|e(ngthAdjust|tter-spacing)|ang)|a(scent|cc(umulate|ent-height)|ttribute(Name|Type)|zimuth|dditive|utoReverse|l(ignment-baseline|phabetic|lowReorder)|rabic-form|mplitude)|r(y|otate|e(s(tart|ult)|ndering-intent|peat(Count|Dur)|quired(Extensions|Features)|f([XY]|errerPolicy)|l)|adius|x)?|g([12]|lyph(Ref|-(name|orientation-(horizontal|vertical)))|radient(Transform|Units))|x([12]|ChannelSelector|-height|link:(show|href|t(ype|itle)|a(ctuate|rcrole)|role)|ml:(space|lang|base))?|m(in|ode|e(thod|dia)|a(sk((?:Content|)Units)?|thematical|rker(Height|-(start|end|mid)|Units|Width)|x))|b(y|ias|egin|ase(Profile|line-shift|Frequency)|box))(?![-:\\\\w])","beginCaptures":{"0":{"name":"entity.other.attribute-name.html"}},"end":"(?=\\\\s*+[^=\\\\s])","name":"meta.attribute.$1.html","patterns":[{"include":"#attribute-interior"}]},{"begin":"([^\\\\x00- \\"'/<=>\\\\x7F-\\\\x{9F}\uFDD0-\uFDEF\uFFFE\uFFFF\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\\\\x{4FFFE}\\\\x{4FFFF}\\\\x{5FFFE}\\\\x{5FFFF}\\\\x{6FFFE}\\\\x{6FFFF}\\\\x{7FFFE}\\\\x{7FFFF}\\\\x{8FFFE}\\\\x{8FFFF}\\\\x{9FFFE}\\\\x{9FFFF}\\\\x{AFFFE}\\\\x{AFFFF}\\\\x{BFFFE}\\\\x{BFFFF}\\\\x{CFFFE}\\\\x{CFFFF}\\\\x{DFFFE}\\\\x{DFFFF}\\\\x{EFFFE}\\\\x{EFFFF}\\\\x{FFFFE}\\\\x{FFFFF}\\\\x{10FFFE}\\\\x{10FFFF}]+)","beginCaptures":{"0":{"name":"entity.other.attribute-name.html"}},"end":"(?=\\\\s*+[^=\\\\s])","name":"meta.attribute.unrecognized.$1.html","patterns":[{"include":"#attribute-interior"}]},{"match":"[^>\\\\s]+","name":"invalid.illegal.character-not-allowed-here.html"}]},"tags":{"patterns":[{"include":"#comment"},{"include":"#cdata"},{"captures":{"0":{"name":"meta.tag.metadata.svg.$2.void.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"patterns":[{"include":"#attribute"}]},"5":{"name":"punctuation.definition.tag.end.html"}},"match":"(?i)(<)(color-profile|desc|metadata|script|style|title)(?=\\\\s|/?>)(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(/>)","name":"meta.element.metadata.svg.$2.html"},{"begin":"(?i)(<)(color-profile|desc|metadata|script|style|title)(?=\\\\s|/?>)(?:(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(>))?","beginCaptures":{"0":{"name":"meta.tag.metadata.svg.$2.start.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"patterns":[{"include":"#attribute"}]},"5":{"name":"punctuation.definition.tag.end.html"}},"end":"(?i)(</)(\\\\2)\\\\s*(>)|(/>)|(?=</\\\\w+)","endCaptures":{"0":{"name":"meta.tag.metadata.svg.$2.end.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"punctuation.definition.tag.end.html"},"4":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.element.metadata.svg.$2.html","patterns":[{"begin":"(?<!>)\\\\G","end":"(?=/>)|>","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.metadata.start.html","patterns":[{"include":"#attribute"}]},{"include":"#tags"}]},{"captures":{"0":{"name":"meta.tag.structure.svg.$2.void.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"patterns":[{"include":"#attribute"}]},"5":{"name":"punctuation.definition.tag.end.html"}},"match":"(?i)(<)(animateMotion|clipPath|defs|feComponentTransfer|feDiffuseLighting|feMerge|feSpecularLighting|filter|g|hatch|linearGradient|marker|mask|mesh|meshgradient|meshpatch|meshrow|pattern|radialGradient|switch|text|textPath)(?=\\\\s|/?>)(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(/>)","name":"meta.element.structure.svg.$2.html"},{"begin":"(?i)(<)(animateMotion|clipPath|defs|feComponentTransfer|feDiffuseLighting|feMerge|feSpecularLighting|filter|g|hatch|linearGradient|marker|mask|mesh|meshgradient|meshpatch|meshrow|pattern|radialGradient|switch|text|textPath)(?=\\\\s|/?>)(?:(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(>))?","beginCaptures":{"0":{"name":"meta.tag.structure.svg.$2.start.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"patterns":[{"include":"#attribute"}]},"5":{"name":"punctuation.definition.tag.end.html"}},"end":"(?i)(</)(\\\\2)\\\\s*(>)|(/>)|(?=</\\\\w+)","endCaptures":{"0":{"name":"meta.tag.structure.svg.$2.end.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"punctuation.definition.tag.end.html"},"4":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.element.structure.svg.$2.html","patterns":[{"begin":"(?<!>)\\\\G","end":"(?=/>)|>","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.structure.start.html","patterns":[{"include":"#attribute"}]},{"include":"#tags"}]},{"captures":{"0":{"name":"meta.tag.inline.svg.$2.void.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"patterns":[{"include":"#attribute"}]},"5":{"name":"punctuation.definition.tag.end.html"}},"match":"(?i)(<)(a|animate|discard|feBlend|feColorMatrix|feComposite|feConvolveMatrix|feDisplacementMap|feDistantLight|feDropShadow|feFlood|feFuncA|feFuncB|feFuncG|feFuncR|feGaussianBlur|feMergeNode|feMorphology|feOffset|fePointLight|feSpotLight|feTile|feTurbulence|hatchPath|mpath|set|solidcolor|stop|tspan)(?=\\\\s|/?>)(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(/>)","name":"meta.element.inline.svg.$2.html"},{"begin":"(?i)(<)(a|animate|discard|feBlend|feColorMatrix|feComposite|feConvolveMatrix|feDisplacementMap|feDistantLight|feDropShadow|feFlood|feFuncA|feFuncB|feFuncG|feFuncR|feGaussianBlur|feMergeNode|feMorphology|feOffset|fePointLight|feSpotLight|feTile|feTurbulence|hatchPath|mpath|set|solidcolor|stop|tspan)(?=\\\\s|/?>)(?:(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(>))?","beginCaptures":{"0":{"name":"meta.tag.inline.svg.$2.start.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"patterns":[{"include":"#attribute"}]},"5":{"name":"punctuation.definition.tag.end.html"}},"end":"(?i)(</)(\\\\2)\\\\s*(>)|(/>)|(?=</\\\\w+)","endCaptures":{"0":{"name":"meta.tag.inline.svg.$2.end.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"punctuation.definition.tag.end.html"},"4":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.element.inline.svg.$2.html","patterns":[{"begin":"(?<!>)\\\\G","end":"(?=/>)|>","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.inline.start.html","patterns":[{"include":"#attribute"}]},{"include":"#tags"}]},{"captures":{"0":{"name":"meta.tag.object.svg.$2.void.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"patterns":[{"include":"#attribute"}]},"5":{"name":"punctuation.definition.tag.end.html"}},"match":"(?i)(<)(circle|ellipse|feImage|foreignObject|image|line|path|polygon|polyline|rect|symbol|use|view)(?=\\\\s|/?>)(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(/>)","name":"meta.element.object.svg.$2.html"},{"begin":"(?i)(<)(a|circle|ellipse|feImage|foreignObject|image|line|path|polygon|polyline|rect|symbol|use|view)(?=\\\\s|/?>)(?:(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(>))?","beginCaptures":{"0":{"name":"meta.tag.object.svg.$2.start.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"patterns":[{"include":"#attribute"}]},"5":{"name":"punctuation.definition.tag.end.html"}},"end":"(?i)(</)(\\\\2)\\\\s*(>)|(/>)|(?=</\\\\w+)","endCaptures":{"0":{"name":"meta.tag.object.svg.$2.end.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"punctuation.definition.tag.end.html"},"4":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.element.object.svg.$2.html","patterns":[{"begin":"(?<!>)\\\\G","end":"(?=/>)|>","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.object.start.html","patterns":[{"include":"#attribute"}]},{"include":"#tags"}]},{"captures":{"0":{"name":"meta.tag.other.svg.$2.void.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"invalid.deprecated.html"},"4":{"patterns":[{"include":"#attribute"}]},"6":{"name":"punctuation.definition.tag.end.html"}},"match":"(?i)(<)((altGlyph|altGlyphDef|altGlyphItem|animateColor|animateTransform|cursor|font|font-face|font-face-format|font-face-name|font-face-src|font-face-uri|glyph|glyphRef|hkern|missing-glyph|tref|vkern))(?=\\\\s|/?>)(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(/>)","name":"meta.element.other.svg.$2.html"},{"begin":"(?i)(<)((altGlyph|altGlyphDef|altGlyphItem|animateColor|animateTransform|cursor|font|font-face|font-face-format|font-face-name|font-face-src|font-face-uri|glyph|glyphRef|hkern|missing-glyph|tref|vkern))(?=\\\\s|/?>)(?:(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(>))?","beginCaptures":{"0":{"name":"meta.tag.other.svg.$2.start.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"invalid.deprecated.html"},"4":{"patterns":[{"include":"#attribute"}]},"6":{"name":"punctuation.definition.tag.end.html"}},"end":"(?i)(</)((\\\\2))\\\\s*(>)|(/>)|(?=</\\\\w+)","endCaptures":{"0":{"name":"meta.tag.other.svg.$2.end.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"invalid.deprecated.html"},"4":{"name":"punctuation.definition.tag.end.html"},"5":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.element.other.svg.$2.html","patterns":[{"begin":"(?<!>)\\\\G","end":"(?=/>)|>","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.other.start.html","patterns":[{"include":"#attribute"}]},{"include":"#tags"}]},{"captures":{"0":{"name":"meta.tag.other.invalid.void.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"invalid.illegal.unrecognized-tag.html"},"4":{"patterns":[{"include":"#attribute"}]},"6":{"name":"punctuation.definition.tag.end.html"}},"match":"(?i)(<)(([:\\\\w]+))(?=\\\\s|/?>)(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(/>)","name":"meta.element.other.invalid.html"},{"begin":"(?i)(<)((\\\\w[^>\\\\s]*))(?=\\\\s|/?>)(?:(([^\\"'>]|\\"[^\\"]*\\"|'[^']*')*)(>))?","beginCaptures":{"0":{"name":"meta.tag.other.invalid.start.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"invalid.illegal.unrecognized-tag.html"},"4":{"patterns":[{"include":"#attribute"}]},"6":{"name":"punctuation.definition.tag.end.html"}},"end":"(?i)(</)((\\\\2))\\\\s*(>)|(/>)|(?=</\\\\w+)","endCaptures":{"0":{"name":"meta.tag.other.invalid.end.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"invalid.illegal.unrecognized-tag.html"},"4":{"name":"punctuation.definition.tag.end.html"},"5":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.element.other.invalid.html","patterns":[{"begin":"(?<!>)\\\\G","end":"(?=/>)|>","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.other.invalid.start.html","patterns":[{"include":"#attribute"}]},{"include":"#tags"}]},{"include":"#tags-invalid"}]}}},"tags-invalid":{"patterns":[{"begin":"(</?)((\\\\w[^>\\\\s]*))(?<!/)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"invalid.illegal.unrecognized-tag.html"}},"end":"((?: ?/)?>)","endCaptures":{"1":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.other.$2.html","patterns":[{"include":"#attribute"}]}]},"tags-valid":{"patterns":[{"begin":"(^[\\\\t ]+)?(?=<(?i:style)\\\\b(?!-))","beginCaptures":{"1":{"name":"punctuation.whitespace.embedded.leading.html"}},"end":"(?!\\\\G)([\\\\t ]*$\\\\n?)?","endCaptures":{"1":{"name":"punctuation.whitespace.embedded.trailing.html"}},"patterns":[{"begin":"(?i)(<)(style)(?=\\\\s|/?>)","beginCaptures":{"0":{"name":"meta.tag.metadata.style.start.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"}},"end":"(?i)((<)/)(style)\\\\s*(>)","endCaptures":{"0":{"name":"meta.tag.metadata.style.end.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"source.css-ignored-vscode"},"3":{"name":"entity.name.tag.html"},"4":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.embedded.block.html","patterns":[{"begin":"\\\\G","captures":{"1":{"name":"punctuation.definition.tag.end.html"}},"end":"(>)","name":"meta.tag.metadata.style.start.html","patterns":[{"include":"#attribute"}]},{"begin":"(?!\\\\G)","end":"(?=</(?i:style))","name":"source.css","patterns":[{"include":"source.css"}]}]}]},{"begin":"(^[\\\\t ]+)?(?=<(?i:script)\\\\b(?!-))","beginCaptures":{"1":{"name":"punctuation.whitespace.embedded.leading.html"}},"end":"(?!\\\\G)([\\\\t ]*$\\\\n?)?","endCaptures":{"1":{"name":"punctuation.whitespace.embedded.trailing.html"}},"patterns":[{"begin":"(<)((?i:script))\\\\b","beginCaptures":{"0":{"name":"meta.tag.metadata.script.start.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"}},"end":"(/)((?i:script))(>)","endCaptures":{"0":{"name":"meta.tag.metadata.script.end.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.embedded.block.html","patterns":[{"begin":"\\\\G","end":"(?=/)","patterns":[{"begin":"(>)","beginCaptures":{"0":{"name":"meta.tag.metadata.script.start.html"},"1":{"name":"punctuation.definition.tag.end.html"}},"end":"((<))(?=/(?i:script))","endCaptures":{"0":{"name":"meta.tag.metadata.script.end.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"source.js-ignored-vscode"}},"patterns":[{"begin":"\\\\G","end":"(?=</(?i:script))","name":"source.js","patterns":[{"begin":"(^[\\\\t ]+)?(?=//)","beginCaptures":{"1":{"name":"punctuation.whitespace.comment.leading.js"}},"end":"(?!\\\\G)","patterns":[{"begin":"//","beginCaptures":{"0":{"name":"punctuation.definition.comment.js"}},"end":"(?=<\/script)|\\\\n","name":"comment.line.double-slash.js"}]},{"begin":"/\\\\*","captures":{"0":{"name":"punctuation.definition.comment.js"}},"end":"\\\\*/|(?=<\/script)","name":"comment.block.js"},{"include":"source.js"}]}]},{"begin":"\\\\G","end":"(?i:(?=>|type(?=[=\\\\s])(?!\\\\s*=\\\\s*(''|\\"\\"|([\\"']?)(text/(javascript(1\\\\.[0-5])?|x-javascript|jscript|livescript|(x-)?ecmascript|babel)|application/((?:(x-)?jav|(x-)?ecm)ascript)|module)[\\"'>\\\\s]))))","name":"meta.tag.metadata.script.start.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i:(?=type\\\\s*=\\\\s*([\\"']?)text/(x-handlebars|(x-(handlebars-)?|ng-)?template|html)[\\"'>\\\\s]))","end":"((<))(?=/(?i:script))","endCaptures":{"0":{"name":"meta.tag.metadata.script.end.html"},"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"text.html.basic"}},"patterns":[{"begin":"\\\\G","end":"(>)","endCaptures":{"1":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.metadata.script.start.html","patterns":[{"include":"#attribute"}]},{"begin":"(?!\\\\G)","end":"(?=</(?i:script))","name":"text.html.basic","patterns":[{"include":"text.html.basic"}]}]},{"begin":"(?=(?i:type))","end":"(<)(?=/(?i:script))","endCaptures":{"0":{"name":"meta.tag.metadata.script.end.html"},"1":{"name":"punctuation.definition.tag.begin.html"}},"patterns":[{"begin":"\\\\G","end":"(>)","endCaptures":{"1":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.metadata.script.start.html","patterns":[{"include":"#attribute"}]},{"begin":"(?!\\\\G)","end":"(?=</(?i:script))","name":"source.unknown"}]}]}]}]},{"begin":"(?i)(<)(base|link|meta)(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"}},"end":"/?>","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.metadata.$2.void.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i)(<)(noscript|title)(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"}},"end":">","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.metadata.$2.start.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i)(</)(noscript|title)(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"}},"end":">","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.metadata.$2.end.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i)(<)(col|hr|input)(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"}},"end":"/?>","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.structure.$2.void.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i)(<)(address|article|aside|blockquote|body|button|caption|colgroup|datalist|dd|details|dialog|div|dl|dt|fieldset|figcaption|figure|footer|form|head|header|hgroup|html|h[1-6]|label|legend|li|main|map|menu|meter|nav|ol|optgroup|option|output|p|pre|progress|section|select|slot|summary|table|tbody|td|template|textarea|tfoot|th|thead|tr|ul)(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"}},"end":">","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.structure.$2.start.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i)(</)(address|article|aside|blockquote|body|button|caption|colgroup|datalist|dd|details|dialog|div|dl|dt|fieldset|figcaption|figure|footer|form|head|header|hgroup|html|h[1-6]|label|legend|li|main|map|menu|meter|nav|ol|optgroup|option|output|p|pre|progress|section|select|slot|summary|table|tbody|td|template|textarea|tfoot|th|thead|tr|ul)(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"}},"end":">","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.structure.$2.end.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i)(<)(area|br|wbr)(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"}},"end":"/?>","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.inline.$2.void.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i)(<)(a|abbr|b|bdi|bdo|cite|code|data|del|dfn|em|i|ins|kbd|mark|q|rp|rt|ruby|s|samp|small|span|strong|sub|sup|time|u|var)(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"}},"end":">","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.inline.$2.start.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i)(</)(a|abbr|b|bdi|bdo|cite|code|data|del|dfn|em|i|ins|kbd|mark|q|rp|rt|ruby|s|samp|small|span|strong|sub|sup|time|u|var)(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"}},"end":">","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.inline.$2.end.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i)(<)(embed|img|param|source|track)(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"}},"end":"/?>","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.object.$2.void.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i)(<)(audio|canvas|iframe|object|picture|video)(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"}},"end":">","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.object.$2.start.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i)(</)(audio|canvas|iframe|object|picture|video)(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"}},"end":">","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.object.$2.end.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i)(<)((basefont|isindex))(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"invalid.deprecated.html"}},"end":"/?>","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.metadata.$2.void.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i)(<)((center|frameset|noembed|noframes))(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"invalid.deprecated.html"}},"end":">","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.structure.$2.start.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i)(</)((center|frameset|noembed|noframes))(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"invalid.deprecated.html"}},"end":">","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.structure.$2.end.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i)(<)((acronym|big|blink|font|strike|tt|xmp))(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"invalid.deprecated.html"}},"end":">","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.inline.$2.start.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i)(</)((acronym|big|blink|font|strike|tt|xmp))(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"invalid.deprecated.html"}},"end":">","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.inline.$2.end.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i)(<)((frame))(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"invalid.deprecated.html"}},"end":"/?>","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.object.$2.void.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i)(<)((applet))(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"invalid.deprecated.html"}},"end":">","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.object.$2.start.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i)(</)((applet))(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"invalid.deprecated.html"}},"end":">","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.object.$2.end.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i)(<)((dir|keygen|listing|menuitem|plaintext|spacer))(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"invalid.illegal.no-longer-supported.html"}},"end":">","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.other.$2.start.html","patterns":[{"include":"#attribute"}]},{"begin":"(?i)(</)((dir|keygen|listing|menuitem|plaintext|spacer))(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"},"3":{"name":"invalid.illegal.no-longer-supported.html"}},"end":">","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.other.$2.end.html","patterns":[{"include":"#attribute"}]},{"include":"#math"},{"include":"#svg"},{"begin":"(<)([A-Za-z][.0-9A-Z_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u{10000}-\\\\x{EFFFF}]*-[-.0-9A-Z_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u{10000}-\\\\x{EFFFF}]*)(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"}},"end":"/?>","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.custom.start.html","patterns":[{"include":"#attribute"}]},{"begin":"(</)([A-Za-z][.0-9A-Z_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u{10000}-\\\\x{EFFFF}]*-[-.0-9A-Z_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u{10000}-\\\\x{EFFFF}]*)(?=\\\\s|/?>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.begin.html"},"2":{"name":"entity.name.tag.html"}},"end":">","endCaptures":{"0":{"name":"punctuation.definition.tag.end.html"}},"name":"meta.tag.custom.end.html","patterns":[{"include":"#attribute"}]}]},"xml-processing":{"begin":"(<\\\\?)(xml)","captures":{"1":{"name":"punctuation.definition.tag.html"},"2":{"name":"entity.name.tag.html"}},"end":"(\\\\?>)","name":"meta.tag.metadata.processing.xml.html","patterns":[{"include":"#attribute"}]}},"scopeName":"text.html.basic","embeddedLangs":["javascript","css"]}`));
      html_default = [
        ...javascript_default,
        ...css_default,
        lang4
      ];
    }
  });

  // node_modules/@shikijs/langs/dist/java.mjs
  var lang5, java_default;
  var init_java = __esm({
    "node_modules/@shikijs/langs/dist/java.mjs"() {
      lang5 = Object.freeze(JSON.parse(`{"displayName":"Java","name":"java","patterns":[{"begin":"\\\\b(package)\\\\b\\\\s*","beginCaptures":{"1":{"name":"keyword.other.package.java"}},"contentName":"storage.modifier.package.java","end":"\\\\s*(;)","endCaptures":{"1":{"name":"punctuation.terminator.java"}},"name":"meta.package.java","patterns":[{"include":"#comments"},{"match":"(?<=\\\\.)\\\\s*\\\\.|\\\\.(?=\\\\s*;)","name":"invalid.illegal.character_not_allowed_here.java"},{"match":"(?<!_)_(?=\\\\s*([.;]))|\\\\b\\\\d+|-+","name":"invalid.illegal.character_not_allowed_here.java"},{"match":"[A-Z]+","name":"invalid.deprecated.package_name_not_lowercase.java"},{"match":"\\\\b(?<!\\\\$)(abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|native|new|non-sealed|package|permits|private|protected|public|return|sealed|short|static|strictfp|super|switch|syncronized|this|throws??|transient|try|void|volatile|while|yield|true|false|null)\\\\b","name":"invalid.illegal.character_not_allowed_here.java"},{"match":"\\\\.","name":"punctuation.separator.java"}]},{"begin":"\\\\b(import)\\\\b\\\\s*\\\\b(static)?\\\\b\\\\s","beginCaptures":{"1":{"name":"keyword.other.import.java"},"2":{"name":"storage.modifier.java"}},"contentName":"storage.modifier.import.java","end":"\\\\s*(;)","endCaptures":{"1":{"name":"punctuation.terminator.java"}},"name":"meta.import.java","patterns":[{"include":"#comments"},{"match":"(?<=\\\\.)\\\\s*\\\\.|\\\\.(?=\\\\s*;)","name":"invalid.illegal.character_not_allowed_here.java"},{"match":"(?<!\\\\.)\\\\s*\\\\*","name":"invalid.illegal.character_not_allowed_here.java"},{"match":"(?<!_)_(?=\\\\s*([.;]))|\\\\b\\\\d+|-+","name":"invalid.illegal.character_not_allowed_here.java"},{"match":"\\\\b(?<!\\\\$)(abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|native|new|non-sealed|package|permits|private|protected|public|return|sealed|short|static|strictfp|super|switch|syncronized|this|throws??|transient|try|void|volatile|while|yield|true|false|null)\\\\b","name":"invalid.illegal.character_not_allowed_here.java"},{"match":"\\\\.","name":"punctuation.separator.java"},{"match":"\\\\*","name":"variable.language.wildcard.java"}]},{"include":"#comments-javadoc"},{"include":"#code"},{"include":"#module"}],"repository":{"all-types":{"patterns":[{"include":"#primitive-arrays"},{"include":"#primitive-types"},{"include":"#object-types"}]},"annotations":{"patterns":[{"begin":"((@)\\\\s*([^(\\\\s]+))(\\\\()","beginCaptures":{"2":{"name":"punctuation.definition.annotation.java"},"3":{"name":"storage.type.annotation.java"},"4":{"name":"punctuation.definition.annotation-arguments.begin.bracket.round.java"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.definition.annotation-arguments.end.bracket.round.java"}},"name":"meta.declaration.annotation.java","patterns":[{"captures":{"1":{"name":"constant.other.key.java"},"2":{"name":"keyword.operator.assignment.java"}},"match":"(\\\\w*)\\\\s*(=)"},{"include":"#code"}]},{"captures":{"1":{"name":"punctuation.definition.annotation.java"},"2":{"name":"storage.modifier.java"},"3":{"name":"storage.type.annotation.java"},"5":{"name":"punctuation.definition.annotation.java"},"6":{"name":"storage.type.annotation.java"}},"match":"(@)(interface)\\\\s+(\\\\w*)|((@)\\\\s*(\\\\w+))","name":"meta.declaration.annotation.java"}]},"anonymous-block-and-instance-initializer":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.section.block.begin.bracket.curly.java"}},"end":"}","endCaptures":{"0":{"name":"punctuation.section.block.end.bracket.curly.java"}},"patterns":[{"include":"#code"}]},"anonymous-classes-and-new":{"begin":"\\\\bnew\\\\b","beginCaptures":{"0":{"name":"keyword.control.new.java"}},"end":"(?=[])-.:;?}]|/(?![*/])|[!%\\\\&=^|])","patterns":[{"include":"#comments"},{"include":"#function-call"},{"include":"#all-types"},{"begin":"(?<=\\\\))","end":"(?=[])-.:;?}]|/(?![*/])|[!%\\\\&=^|])","patterns":[{"include":"#comments"},{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.section.inner-class.begin.bracket.curly.java"}},"end":"}","endCaptures":{"0":{"name":"punctuation.section.inner-class.end.bracket.curly.java"}},"name":"meta.inner-class.java","patterns":[{"include":"#class-body"}]}]},{"begin":"(?<=])","end":"(?=[])-.:;?}]|/(?![*/])|[!%\\\\&=^|])","patterns":[{"include":"#comments"},{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.section.array-initializer.begin.bracket.curly.java"}},"end":"}","endCaptures":{"0":{"name":"punctuation.section.array-initializer.end.bracket.curly.java"}},"name":"meta.array-initializer.java","patterns":[{"include":"#code"}]}]},{"include":"#parens"}]},"assertions":{"patterns":[{"begin":"\\\\b(assert)\\\\s","beginCaptures":{"1":{"name":"keyword.control.assert.java"}},"end":"$","name":"meta.declaration.assertion.java","patterns":[{"match":":","name":"keyword.operator.assert.expression-separator.java"},{"include":"#code"}]}]},"class":{"begin":"(?=\\\\w?[-\\\\w\\\\s]*\\\\b(?:class|(?<!@)interface|enum)\\\\s+[$\\\\w]+)","end":"}","endCaptures":{"0":{"name":"punctuation.section.class.end.bracket.curly.java"}},"name":"meta.class.java","patterns":[{"include":"#storage-modifiers"},{"include":"#generics"},{"include":"#comments"},{"captures":{"1":{"name":"storage.modifier.java"},"2":{"name":"entity.name.type.class.java"}},"match":"(class|(?<!@)interface|enum)\\\\s+([$\\\\w]+)","name":"meta.class.identifier.java"},{"begin":"extends","beginCaptures":{"0":{"name":"storage.modifier.extends.java"}},"end":"(?=\\\\{|implements|permits)","name":"meta.definition.class.inherited.classes.java","patterns":[{"include":"#object-types-inherited"},{"include":"#comments"}]},{"begin":"(implements)\\\\s","beginCaptures":{"1":{"name":"storage.modifier.implements.java"}},"end":"(?=\\\\s*extends|permits|\\\\{)","name":"meta.definition.class.implemented.interfaces.java","patterns":[{"include":"#object-types-inherited"},{"include":"#comments"}]},{"begin":"(permits)\\\\s","beginCaptures":{"1":{"name":"storage.modifier.permits.java"}},"end":"(?=\\\\s*extends|implements|\\\\{)","name":"meta.definition.class.permits.classes.java","patterns":[{"include":"#object-types-inherited"},{"include":"#comments"}]},{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.section.class.begin.bracket.curly.java"}},"contentName":"meta.class.body.java","end":"(?=})","patterns":[{"include":"#class-body"}]}]},"class-body":{"patterns":[{"include":"#comments-javadoc"},{"include":"#comments"},{"include":"#enums"},{"include":"#class"},{"include":"#generics"},{"include":"#static-initializer"},{"include":"#class-fields-and-methods"},{"include":"#annotations"},{"include":"#storage-modifiers"},{"include":"#member-variables"},{"include":"#code"}]},"class-fields-and-methods":{"patterns":[{"begin":"(?==)","end":"(?=;)","patterns":[{"include":"#code"}]},{"include":"#methods"}]},"code":{"patterns":[{"include":"#annotations"},{"include":"#comments"},{"include":"#enums"},{"include":"#class"},{"include":"#record"},{"include":"#anonymous-block-and-instance-initializer"},{"include":"#try-catch-finally"},{"include":"#assertions"},{"include":"#parens"},{"include":"#constants-and-special-vars"},{"include":"#numbers"},{"include":"#anonymous-classes-and-new"},{"include":"#lambda-expression"},{"include":"#keywords"},{"include":"#storage-modifiers"},{"include":"#method-call"},{"include":"#function-call"},{"include":"#variables"},{"include":"#variables-local"},{"include":"#objects"},{"include":"#properties"},{"include":"#strings"},{"include":"#all-types"},{"match":",","name":"punctuation.separator.delimiter.java"},{"match":"\\\\.","name":"punctuation.separator.period.java"},{"match":";","name":"punctuation.terminator.java"}]},"comments":{"patterns":[{"captures":{"0":{"name":"punctuation.definition.comment.java"}},"match":"/\\\\*\\\\*/","name":"comment.block.empty.java"},{"include":"#comments-inline"}]},"comments-inline":{"patterns":[{"begin":"/\\\\*","captures":{"0":{"name":"punctuation.definition.comment.java"}},"end":"\\\\*/","name":"comment.block.java"},{"begin":"(^[\\\\t ]+)?(?=//)","beginCaptures":{"1":{"name":"punctuation.whitespace.comment.leading.java"}},"end":"(?!\\\\G)","patterns":[{"begin":"//","beginCaptures":{"0":{"name":"punctuation.definition.comment.java"}},"end":"\\\\n","name":"comment.line.double-slash.java"}]}]},"comments-javadoc":{"patterns":[{"begin":"^\\\\s*(/\\\\*\\\\*)(?!/)","beginCaptures":{"1":{"name":"punctuation.definition.comment.java"}},"end":"\\\\*/","endCaptures":{"0":{"name":"punctuation.definition.comment.java"}},"name":"comment.block.javadoc.java","patterns":[{"match":"@(author|deprecated|return|see|serial|since|version)\\\\b","name":"keyword.other.documentation.javadoc.java"},{"captures":{"1":{"name":"keyword.other.documentation.javadoc.java"},"2":{"name":"variable.parameter.java"}},"match":"(@param)\\\\s+(\\\\S+)"},{"captures":{"1":{"name":"keyword.other.documentation.javadoc.java"},"2":{"name":"entity.name.type.class.java"}},"match":"(@(?:exception|throws))\\\\s+(\\\\S+)"},{"captures":{"1":{"name":"keyword.other.documentation.javadoc.java"},"2":{"name":"entity.name.type.class.java"},"3":{"name":"variable.parameter.java"}},"match":"\\\\{(@link)\\\\s+(\\\\S+)?#([$\\\\w]+\\\\s*\\\\([^()]*\\\\)).*?}"}]}]},"constants-and-special-vars":{"patterns":[{"match":"\\\\b(true|false|null)\\\\b","name":"constant.language.java"},{"match":"\\\\bthis\\\\b","name":"variable.language.this.java"},{"match":"\\\\bsuper\\\\b","name":"variable.language.java"}]},"enums":{"begin":"^\\\\s*([\\\\w\\\\s]*)(enum)\\\\s+(\\\\w+)","beginCaptures":{"1":{"patterns":[{"include":"#storage-modifiers"}]},"2":{"name":"storage.modifier.java"},"3":{"name":"entity.name.type.enum.java"}},"end":"}","endCaptures":{"0":{"name":"punctuation.section.enum.end.bracket.curly.java"}},"name":"meta.enum.java","patterns":[{"begin":"\\\\b(extends)\\\\b","beginCaptures":{"1":{"name":"storage.modifier.extends.java"}},"end":"(?=\\\\{|\\\\bimplements\\\\b)","name":"meta.definition.class.inherited.classes.java","patterns":[{"include":"#object-types-inherited"},{"include":"#comments"}]},{"begin":"\\\\b(implements)\\\\b","beginCaptures":{"1":{"name":"storage.modifier.implements.java"}},"end":"(?=\\\\{|\\\\bextends\\\\b)","name":"meta.definition.class.implemented.interfaces.java","patterns":[{"include":"#object-types-inherited"},{"include":"#comments"}]},{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.section.enum.begin.bracket.curly.java"}},"end":"(?=})","patterns":[{"begin":"(?<=\\\\{)","end":"(?=[;}])","patterns":[{"include":"#comments-javadoc"},{"include":"#comments"},{"begin":"\\\\b(\\\\w+)\\\\b","beginCaptures":{"1":{"name":"constant.other.enum.java"}},"end":"(,)|(?=[;}])","endCaptures":{"1":{"name":"punctuation.separator.delimiter.java"}},"patterns":[{"include":"#comments-javadoc"},{"include":"#comments"},{"begin":"\\\\(","beginCaptures":{"0":{"name":"punctuation.bracket.round.java"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.bracket.round.java"}},"patterns":[{"include":"#code"}]},{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.bracket.curly.java"}},"end":"}","endCaptures":{"0":{"name":"punctuation.bracket.curly.java"}},"patterns":[{"include":"#class-body"}]}]}]},{"include":"#class-body"}]}]},"function-call":{"begin":"([$A-Z_a-z][$\\\\w]*)\\\\s*(\\\\()","beginCaptures":{"1":{"name":"entity.name.function.java"},"2":{"name":"punctuation.definition.parameters.begin.bracket.round.java"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.definition.parameters.end.bracket.round.java"}},"name":"meta.function-call.java","patterns":[{"include":"#code"}]},"generics":{"begin":"<","beginCaptures":{"0":{"name":"punctuation.bracket.angle.java"}},"end":">","endCaptures":{"0":{"name":"punctuation.bracket.angle.java"}},"patterns":[{"match":"\\\\b(extends|super)\\\\b","name":"storage.modifier.$1.java"},{"captures":{"1":{"name":"storage.type.java"}},"match":"(?<!\\\\.)([$A-Z_a-z][$0-9A-Z_a-z]*)(?=\\\\s*<)"},{"include":"#primitive-arrays"},{"match":"[$A-Z_a-z][$0-9A-Z_a-z]*","name":"storage.type.generic.java"},{"match":"\\\\?","name":"storage.type.generic.wildcard.java"},{"match":"&","name":"punctuation.separator.types.java"},{"match":",","name":"punctuation.separator.delimiter.java"},{"match":"\\\\.","name":"punctuation.separator.period.java"},{"include":"#parens"},{"include":"#generics"},{"include":"#comments"}]},"keywords":{"patterns":[{"match":"\\\\bthrow\\\\b","name":"keyword.control.throw.java"},{"match":"[:?]","name":"keyword.control.ternary.java"},{"match":"\\\\b(return|yield|break|case|continue|default|do|while|for|switch|if|else)\\\\b","name":"keyword.control.java"},{"match":"\\\\b(instanceof)\\\\b","name":"keyword.operator.instanceof.java"},{"match":"(<<|>>>?|[\\\\^~])","name":"keyword.operator.bitwise.java"},{"match":"(([\\\\&^|]|<<|>>>?)=)","name":"keyword.operator.assignment.bitwise.java"},{"match":"(===?|!=|<=|>=|<>|[<>])","name":"keyword.operator.comparison.java"},{"match":"([-%*+/]=)","name":"keyword.operator.assignment.arithmetic.java"},{"match":"(=)","name":"keyword.operator.assignment.java"},{"match":"(--|\\\\+\\\\+)","name":"keyword.operator.increment-decrement.java"},{"match":"([-%*+/])","name":"keyword.operator.arithmetic.java"},{"match":"(!|&&|\\\\|\\\\|)","name":"keyword.operator.logical.java"},{"match":"([\\\\&|])","name":"keyword.operator.bitwise.java"},{"match":"\\\\b(const|goto)\\\\b","name":"keyword.reserved.java"}]},"lambda-expression":{"patterns":[{"match":"->","name":"storage.type.function.arrow.java"}]},"member-variables":{"begin":"(?=private|protected|public|native|synchronized|abstract|threadsafe|transient|static|final)","end":"(?=[;=])","patterns":[{"include":"#storage-modifiers"},{"include":"#variables"},{"include":"#primitive-arrays"},{"include":"#object-types"}]},"method-call":{"begin":"(\\\\.)\\\\s*([$A-Z_a-z][$\\\\w]*)\\\\s*(\\\\()","beginCaptures":{"1":{"name":"punctuation.separator.period.java"},"2":{"name":"entity.name.function.java"},"3":{"name":"punctuation.definition.parameters.begin.bracket.round.java"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.definition.parameters.end.bracket.round.java"}},"name":"meta.method-call.java","patterns":[{"include":"#code"}]},"methods":{"begin":"(?!new)(?=[<\\\\w].*\\\\s+)(?=([^/=]|/(?!/))+\\\\()","end":"(})|(?=;)","endCaptures":{"1":{"name":"punctuation.section.method.end.bracket.curly.java"}},"name":"meta.method.java","patterns":[{"include":"#storage-modifiers"},{"begin":"(\\\\w+)\\\\s*(\\\\()","beginCaptures":{"1":{"name":"entity.name.function.java"},"2":{"name":"punctuation.definition.parameters.begin.bracket.round.java"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.definition.parameters.end.bracket.round.java"}},"name":"meta.method.identifier.java","patterns":[{"include":"#parameters"},{"include":"#parens"},{"include":"#comments"}]},{"include":"#generics"},{"begin":"(?=\\\\w.*\\\\s+\\\\w+\\\\s*\\\\()","end":"(?=\\\\s+\\\\w+\\\\s*\\\\()","name":"meta.method.return-type.java","patterns":[{"include":"#all-types"},{"include":"#parens"},{"include":"#comments"}]},{"include":"#throws"},{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.section.method.begin.bracket.curly.java"}},"contentName":"meta.method.body.java","end":"(?=})","patterns":[{"include":"#code"}]},{"include":"#comments"}]},"module":{"begin":"((open)\\\\s)?(module)\\\\s+(\\\\w+)","beginCaptures":{"1":{"name":"storage.modifier.java"},"3":{"name":"storage.modifier.java"},"4":{"name":"entity.name.type.module.java"}},"end":"}","endCaptures":{"0":{"name":"punctuation.section.module.end.bracket.curly.java"}},"name":"meta.module.java","patterns":[{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.section.module.begin.bracket.curly.java"}},"contentName":"meta.module.body.java","end":"(?=})","patterns":[{"include":"#comments"},{"include":"#comments-javadoc"},{"match":"\\\\b(requires|transitive|exports|opens|to|uses|provides|with)\\\\b","name":"keyword.module.java"}]}]},"numbers":{"patterns":[{"match":"\\\\b(?<!\\\\$)0([Xx])((?<!\\\\.)\\\\h([_\\\\h]*\\\\h)?[Ll]?(?!\\\\.)|(\\\\h([_\\\\h]*\\\\h)?\\\\.?|(\\\\h([_\\\\h]*\\\\h)?)?\\\\.\\\\h([_\\\\h]*\\\\h)?)[Pp][-+]?[0-9]([0-9_]*[0-9])?[DFdf]?)\\\\b(?!\\\\$)","name":"constant.numeric.hex.java"},{"match":"\\\\b(?<!\\\\$)0([Bb])[01]([01_]*[01])?[Ll]?\\\\b(?!\\\\$)","name":"constant.numeric.binary.java"},{"match":"\\\\b(?<!\\\\$)0[0-7]([0-7_]*[0-7])?[Ll]?\\\\b(?!\\\\$)","name":"constant.numeric.octal.java"},{"match":"(?<!\\\\$)(\\\\b[0-9]([0-9_]*[0-9])?\\\\.\\\\B(?!\\\\.)|\\\\b[0-9]([0-9_]*[0-9])?\\\\.([Ee][-+]?[0-9]([0-9_]*[0-9])?)[DFdf]?\\\\b|\\\\b[0-9]([0-9_]*[0-9])?\\\\.([Ee][-+]?[0-9]([0-9_]*[0-9])?)?[DFdf]\\\\b|\\\\b[0-9]([0-9_]*[0-9])?\\\\.([0-9]([0-9_]*[0-9])?)([Ee][-+]?[0-9]([0-9_]*[0-9])?)?[DFdf]?\\\\b|(?<!\\\\.)\\\\B\\\\.[0-9]([0-9_]*[0-9])?([Ee][-+]?[0-9]([0-9_]*[0-9])?)?[DFdf]?\\\\b|\\\\b[0-9]([0-9_]*[0-9])?([Ee][-+]?[0-9]([0-9_]*[0-9])?)[DFdf]?\\\\b|\\\\b[0-9]([0-9_]*[0-9])?([Ee][-+]?[0-9]([0-9_]*[0-9])?)?[DFdf]\\\\b|\\\\b(0|[1-9]([0-9_]*[0-9])?)(?!\\\\.)[Ll]?\\\\b)(?!\\\\$)","name":"constant.numeric.decimal.java"}]},"object-types":{"patterns":[{"include":"#generics"},{"begin":"\\\\b((?:[A-Z_a-z]\\\\w*\\\\s*\\\\.\\\\s*)*)([A-Z_]\\\\w*)\\\\s*(?=\\\\[)","beginCaptures":{"1":{"patterns":[{"match":"[A-Z_a-z]\\\\w*","name":"storage.type.java"},{"match":"\\\\.","name":"punctuation.separator.period.java"}]},"2":{"name":"storage.type.object.array.java"}},"end":"(?!\\\\s*\\\\[)","patterns":[{"include":"#comments"},{"include":"#parens"}]},{"captures":{"1":{"patterns":[{"match":"[A-Z_a-z]\\\\w*","name":"storage.type.java"},{"match":"\\\\.","name":"punctuation.separator.period.java"}]}},"match":"\\\\b((?:[A-Z_a-z]\\\\w*\\\\s*\\\\.\\\\s*)*[A-Z_]\\\\w*)\\\\s*(?=<)"},{"captures":{"1":{"patterns":[{"match":"[A-Z_a-z]\\\\w*","name":"storage.type.java"},{"match":"\\\\.","name":"punctuation.separator.period.java"}]}},"match":"\\\\b((?:[A-Z_a-z]\\\\w*\\\\s*\\\\.\\\\s*)*[A-Z_]\\\\w*)\\\\b((?=\\\\s*[\\\\n$A-Z_a-z])|(?=\\\\s*\\\\.\\\\.\\\\.))"}]},"object-types-inherited":{"patterns":[{"include":"#generics"},{"captures":{"1":{"name":"punctuation.separator.period.java"}},"match":"\\\\b(?:[A-Z]\\\\w*\\\\s*(\\\\.)\\\\s*)*[A-Z]\\\\w*\\\\b","name":"entity.other.inherited-class.java"},{"match":",","name":"punctuation.separator.delimiter.java"}]},"objects":{"match":"(?<![$\\\\w])[$A-Z_a-z][$\\\\w]*(?=\\\\s*\\\\.\\\\s*[$\\\\w]+)","name":"variable.other.object.java"},"parameters":{"patterns":[{"match":"\\\\bfinal\\\\b","name":"storage.modifier.java"},{"include":"#annotations"},{"include":"#all-types"},{"include":"#strings"},{"match":"\\\\w+","name":"variable.parameter.java"},{"match":",","name":"punctuation.separator.delimiter.java"},{"match":"\\\\.\\\\.\\\\.","name":"punctuation.definition.parameters.varargs.java"}]},"parens":{"patterns":[{"begin":"\\\\(","beginCaptures":{"0":{"name":"punctuation.bracket.round.java"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.bracket.round.java"}},"patterns":[{"include":"#code"}]},{"begin":"\\\\[","beginCaptures":{"0":{"name":"punctuation.bracket.square.java"}},"end":"]","endCaptures":{"0":{"name":"punctuation.bracket.square.java"}},"patterns":[{"include":"#code"}]},{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.bracket.curly.java"}},"end":"}","endCaptures":{"0":{"name":"punctuation.bracket.curly.java"}},"patterns":[{"include":"#code"}]}]},"primitive-arrays":{"patterns":[{"begin":"\\\\b(void|boolean|byte|char|short|int|float|long|double)\\\\b\\\\s*(?=\\\\[)","beginCaptures":{"1":{"name":"storage.type.primitive.array.java"}},"end":"(?!\\\\s*\\\\[)","patterns":[{"include":"#comments"},{"include":"#parens"}]}]},"primitive-types":{"match":"\\\\b(void|boolean|byte|char|short|int|float|long|double)\\\\b","name":"storage.type.primitive.java"},"properties":{"patterns":[{"captures":{"1":{"name":"punctuation.separator.period.java"},"2":{"name":"keyword.control.new.java"}},"match":"(\\\\.)\\\\s*(new)"},{"captures":{"1":{"name":"punctuation.separator.period.java"},"2":{"name":"variable.other.object.property.java"}},"match":"(\\\\.)\\\\s*([$A-Z_a-z][$\\\\w]*)(?=\\\\s*\\\\.\\\\s*[$A-Z_a-z][$\\\\w]*)"},{"captures":{"1":{"name":"punctuation.separator.period.java"},"2":{"name":"variable.other.object.property.java"}},"match":"(\\\\.)\\\\s*([$A-Z_a-z][$\\\\w]*)"},{"captures":{"1":{"name":"punctuation.separator.period.java"},"2":{"name":"invalid.illegal.identifier.java"}},"match":"(\\\\.)\\\\s*([0-9][$\\\\w]*)"}]},"record":{"begin":"(?=\\\\w?[\\\\w\\\\s]*\\\\brecord\\\\s+[$\\\\w]+)","end":"}","endCaptures":{"0":{"name":"punctuation.section.class.end.bracket.curly.java"}},"name":"meta.record.java","patterns":[{"include":"#storage-modifiers"},{"include":"#generics"},{"include":"#comments"},{"begin":"(record)\\\\s+([$\\\\w]+)(<[$\\\\w]+>)?(\\\\()","beginCaptures":{"1":{"name":"storage.modifier.java"},"2":{"name":"entity.name.type.record.java"},"3":{"patterns":[{"include":"#generics"}]},"4":{"name":"punctuation.definition.parameters.begin.bracket.round.java"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.definition.parameters.end.bracket.round.java"}},"name":"meta.record.identifier.java","patterns":[{"include":"#code"}]},{"begin":"(implements)\\\\s","beginCaptures":{"1":{"name":"storage.modifier.implements.java"}},"end":"(?=\\\\s*\\\\{)","name":"meta.definition.class.implemented.interfaces.java","patterns":[{"include":"#object-types-inherited"},{"include":"#comments"}]},{"include":"#record-body"}]},"record-body":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.section.class.begin.bracket.curly.java"}},"end":"(?=})","name":"meta.record.body.java","patterns":[{"include":"#record-constructor"},{"include":"#class-body"}]},"record-constructor":{"begin":"(?!new)(?=[<\\\\w].*\\\\s+)(?=([^(/=]|/(?!/))+(?=\\\\{))","end":"(})|(?=;)","endCaptures":{"1":{"name":"punctuation.section.method.end.bracket.curly.java"}},"name":"meta.method.java","patterns":[{"include":"#storage-modifiers"},{"begin":"(\\\\w+)","beginCaptures":{"1":{"name":"entity.name.function.java"}},"end":"(?=\\\\s*\\\\{)","name":"meta.method.identifier.java","patterns":[{"include":"#comments"}]},{"include":"#comments"},{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.section.method.begin.bracket.curly.java"}},"contentName":"meta.method.body.java","end":"(?=})","patterns":[{"include":"#code"}]}]},"static-initializer":{"patterns":[{"include":"#anonymous-block-and-instance-initializer"},{"match":"static","name":"storage.modifier.java"}]},"storage-modifiers":{"match":"\\\\b(public|private|protected|static|final|native|synchronized|abstract|threadsafe|transient|volatile|default|strictfp|sealed|non-sealed)\\\\b","name":"storage.modifier.java"},"strings":{"patterns":[{"begin":"\\"\\"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.java"}},"end":"\\"\\"\\"","endCaptures":{"0":{"name":"punctuation.definition.string.end.java"}},"name":"string.quoted.triple.java","patterns":[{"match":"(\\\\\\\\\\"\\"\\")(?!\\")|(\\\\\\\\.)","name":"constant.character.escape.java"}]},{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.java"}},"end":"\\"","endCaptures":{"0":{"name":"punctuation.definition.string.end.java"}},"name":"string.quoted.double.java","patterns":[{"match":"\\\\\\\\.","name":"constant.character.escape.java"}]},{"begin":"'","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.java"}},"end":"'","endCaptures":{"0":{"name":"punctuation.definition.string.end.java"}},"name":"string.quoted.single.java","patterns":[{"match":"\\\\\\\\.","name":"constant.character.escape.java"}]}]},"throws":{"begin":"throws","beginCaptures":{"0":{"name":"storage.modifier.java"}},"end":"(?=[;{])","name":"meta.throwables.java","patterns":[{"match":",","name":"punctuation.separator.delimiter.java"},{"match":"[$A-Z_a-z][$.0-9A-Z_a-z]*","name":"storage.type.java"},{"include":"#comments"}]},"try-catch-finally":{"patterns":[{"begin":"\\\\btry\\\\b","beginCaptures":{"0":{"name":"keyword.control.try.java"}},"end":"}","endCaptures":{"0":{"name":"punctuation.section.try.end.bracket.curly.java"}},"name":"meta.try.java","patterns":[{"begin":"\\\\(","beginCaptures":{"0":{"name":"punctuation.section.try.resources.begin.bracket.round.java"}},"end":"\\\\)","endCaptures":{"0":{"name":"punctuation.section.try.resources.end.bracket.round.java"}},"name":"meta.try.resources.java","patterns":[{"include":"#code"}]},{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.section.try.begin.bracket.curly.java"}},"contentName":"meta.try.body.java","end":"(?=})","patterns":[{"include":"#code"}]}]},{"begin":"\\\\b(catch)\\\\b","beginCaptures":{"1":{"name":"keyword.control.catch.java"}},"end":"}","endCaptures":{"0":{"name":"punctuation.section.catch.end.bracket.curly.java"}},"name":"meta.catch.java","patterns":[{"include":"#comments"},{"begin":"\\\\(","beginCaptures":{"0":{"name":"punctuation.definition.parameters.begin.bracket.round.java"}},"contentName":"meta.catch.parameters.java","end":"\\\\)","endCaptures":{"0":{"name":"punctuation.definition.parameters.end.bracket.round.java"}},"patterns":[{"include":"#comments"},{"include":"#storage-modifiers"},{"begin":"[$A-Z_a-z][$.0-9A-Z_a-z]*","beginCaptures":{"0":{"name":"storage.type.java"}},"end":"(\\\\|)|(?=\\\\))","endCaptures":{"1":{"name":"punctuation.catch.separator.java"}},"patterns":[{"include":"#comments"},{"captures":{"0":{"name":"variable.parameter.java"}},"match":"\\\\w+"}]}]},{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.section.catch.begin.bracket.curly.java"}},"contentName":"meta.catch.body.java","end":"(?=})","patterns":[{"include":"#code"}]}]},{"begin":"\\\\bfinally\\\\b","beginCaptures":{"0":{"name":"keyword.control.finally.java"}},"end":"}","endCaptures":{"0":{"name":"punctuation.section.finally.end.bracket.curly.java"}},"name":"meta.finally.java","patterns":[{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.section.finally.begin.bracket.curly.java"}},"contentName":"meta.finally.body.java","end":"(?=})","patterns":[{"include":"#code"}]}]}]},"variables":{"begin":"(?=\\\\b((void|boolean|byte|char|short|int|float|long|double)|(?>(\\\\w+\\\\.)*[A-Z_]+\\\\w*))\\\\b\\\\s*(<[],.<>?\\\\[\\\\w\\\\s]*>)?\\\\s*((\\\\[])*)?\\\\s+[$A-Z_a-z][$\\\\w]*([]$,\\\\[\\\\w][],\\\\[\\\\w\\\\s]*)?\\\\s*([:;=]))","end":"(?=[:;=])","name":"meta.definition.variable.java","patterns":[{"captures":{"1":{"name":"variable.other.definition.java"}},"match":"([$A-Z_a-z][$\\\\w]*)(?=\\\\s*(\\\\[])*\\\\s*([,:;=]))"},{"include":"#all-types"},{"include":"#code"}]},"variables-local":{"begin":"(?=\\\\b(var)\\\\b\\\\s+[$A-Z_a-z][$\\\\w]*\\\\s*([:;=]))","end":"(?=[:;=])","name":"meta.definition.variable.local.java","patterns":[{"match":"\\\\bvar\\\\b","name":"storage.type.local.java"},{"captures":{"1":{"name":"variable.other.definition.java"}},"match":"([$A-Z_a-z][$\\\\w]*)(?=\\\\s*(\\\\[])*\\\\s*([:;=]))"},{"include":"#code"}]}},"scopeName":"source.java"}`));
      java_default = [
        lang5
      ];
    }
  });

  // node_modules/@shikijs/langs/dist/xml.mjs
  var xml_exports = {};
  __export(xml_exports, {
    default: () => xml_default
  });
  var lang6, xml_default;
  var init_xml = __esm({
    "node_modules/@shikijs/langs/dist/xml.mjs"() {
      init_java();
      lang6 = Object.freeze(JSON.parse(`{"displayName":"XML","name":"xml","patterns":[{"begin":"(<\\\\?)\\\\s*([-0-9A-Z_a-z]+)","captures":{"1":{"name":"punctuation.definition.tag.xml"},"2":{"name":"entity.name.tag.xml"}},"end":"(\\\\?>)","name":"meta.tag.preprocessor.xml","patterns":[{"match":" ([-A-Za-z]+)","name":"entity.other.attribute-name.xml"},{"include":"#doublequotedString"},{"include":"#singlequotedString"}]},{"begin":"(<!)(DOCTYPE)\\\\s+([:A-Z_a-z][-.0-:A-Z_a-z]*)","captures":{"1":{"name":"punctuation.definition.tag.xml"},"2":{"name":"keyword.other.doctype.xml"},"3":{"name":"variable.language.documentroot.xml"}},"end":"\\\\s*(>)","name":"meta.tag.sgml.doctype.xml","patterns":[{"include":"#internalSubset"}]},{"include":"#comments"},{"begin":"(<)((?:([-0-9A-Z_a-z]+)(:))?([-0-:A-Z_a-z]+))(?=(\\\\s[^>]*)?></\\\\2>)","beginCaptures":{"1":{"name":"punctuation.definition.tag.xml"},"2":{"name":"entity.name.tag.xml"},"3":{"name":"entity.name.tag.namespace.xml"},"4":{"name":"punctuation.separator.namespace.xml"},"5":{"name":"entity.name.tag.localname.xml"}},"end":"(>)(</)((?:([-0-9A-Z_a-z]+)(:))?([-0-:A-Z_a-z]+))(>)","endCaptures":{"1":{"name":"punctuation.definition.tag.xml"},"2":{"name":"punctuation.definition.tag.xml"},"3":{"name":"entity.name.tag.xml"},"4":{"name":"entity.name.tag.namespace.xml"},"5":{"name":"punctuation.separator.namespace.xml"},"6":{"name":"entity.name.tag.localname.xml"},"7":{"name":"punctuation.definition.tag.xml"}},"name":"meta.tag.no-content.xml","patterns":[{"include":"#tagStuff"}]},{"begin":"(</?)(?:([-.\\\\w]+)((:)))?([-.:\\\\w]+)","captures":{"1":{"name":"punctuation.definition.tag.xml"},"2":{"name":"entity.name.tag.namespace.xml"},"3":{"name":"entity.name.tag.xml"},"4":{"name":"punctuation.separator.namespace.xml"},"5":{"name":"entity.name.tag.localname.xml"}},"end":"(/?>)","name":"meta.tag.xml","patterns":[{"include":"#tagStuff"}]},{"include":"#entity"},{"include":"#bare-ampersand"},{"begin":"<%@","beginCaptures":{"0":{"name":"punctuation.section.embedded.begin.xml"}},"end":"%>","endCaptures":{"0":{"name":"punctuation.section.embedded.end.xml"}},"name":"source.java-props.embedded.xml","patterns":[{"match":"page|include|taglib","name":"keyword.other.page-props.xml"}]},{"begin":"<%[!=]?(?!--)","beginCaptures":{"0":{"name":"punctuation.section.embedded.begin.xml"}},"end":"(?!--)%>","endCaptures":{"0":{"name":"punctuation.section.embedded.end.xml"}},"name":"source.java.embedded.xml","patterns":[{"include":"source.java"}]},{"begin":"<!\\\\[CDATA\\\\[","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.xml"}},"end":"]]>","endCaptures":{"0":{"name":"punctuation.definition.string.end.xml"}},"name":"string.unquoted.cdata.xml"}],"repository":{"EntityDecl":{"begin":"(<!)(ENTITY)\\\\s+(%\\\\s+)?([:A-Z_a-z][-.0-:A-Z_a-z]*)(\\\\s+(?:SYSTEM|PUBLIC)\\\\s+)?","captures":{"1":{"name":"punctuation.definition.tag.xml"},"2":{"name":"keyword.other.entity.xml"},"3":{"name":"punctuation.definition.entity.xml"},"4":{"name":"variable.language.entity.xml"},"5":{"name":"keyword.other.entitytype.xml"}},"end":"(>)","patterns":[{"include":"#doublequotedString"},{"include":"#singlequotedString"}]},"bare-ampersand":{"match":"&","name":"invalid.illegal.bad-ampersand.xml"},"comments":{"patterns":[{"begin":"<%--","captures":{"0":{"name":"punctuation.definition.comment.xml"},"end":"--%>","name":"comment.block.xml"}},{"begin":"<!--","captures":{"0":{"name":"punctuation.definition.comment.xml"}},"end":"-->","name":"comment.block.xml","patterns":[{"begin":"--(?!>)","captures":{"0":{"name":"invalid.illegal.bad-comments-or-CDATA.xml"}}}]}]},"doublequotedString":{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.xml"}},"end":"\\"","endCaptures":{"0":{"name":"punctuation.definition.string.end.xml"}},"name":"string.quoted.double.xml","patterns":[{"include":"#entity"},{"include":"#bare-ampersand"}]},"entity":{"captures":{"1":{"name":"punctuation.definition.constant.xml"},"3":{"name":"punctuation.definition.constant.xml"}},"match":"(&)([:A-Z_a-z][-.0-:A-Z_a-z]*|#[0-9]+|#x\\\\h+)(;)","name":"constant.character.entity.xml"},"internalSubset":{"begin":"(\\\\[)","captures":{"1":{"name":"punctuation.definition.constant.xml"}},"end":"(])","name":"meta.internalsubset.xml","patterns":[{"include":"#EntityDecl"},{"include":"#parameterEntity"},{"include":"#comments"}]},"parameterEntity":{"captures":{"1":{"name":"punctuation.definition.constant.xml"},"3":{"name":"punctuation.definition.constant.xml"}},"match":"(%)([:A-Z_a-z][-.0-:A-Z_a-z]*)(;)","name":"constant.character.parameter-entity.xml"},"singlequotedString":{"begin":"'","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.xml"}},"end":"'","endCaptures":{"0":{"name":"punctuation.definition.string.end.xml"}},"name":"string.quoted.single.xml","patterns":[{"include":"#entity"},{"include":"#bare-ampersand"}]},"tagStuff":{"patterns":[{"captures":{"1":{"name":"entity.other.attribute-name.namespace.xml"},"2":{"name":"entity.other.attribute-name.xml"},"3":{"name":"punctuation.separator.namespace.xml"},"4":{"name":"entity.other.attribute-name.localname.xml"}},"match":"(?:^|\\\\s+)(?:([-.\\\\w]+)((:)))?([-.:\\\\w]+)\\\\s*="},{"include":"#doublequotedString"},{"include":"#singlequotedString"}]}},"scopeName":"text.xml","embeddedLangs":["java"]}`));
      xml_default = [
        ...java_default,
        lang6
      ];
    }
  });

  // node_modules/@shikijs/langs/dist/json.mjs
  var json_exports = {};
  __export(json_exports, {
    default: () => json_default
  });
  var lang7, json_default;
  var init_json = __esm({
    "node_modules/@shikijs/langs/dist/json.mjs"() {
      lang7 = Object.freeze(JSON.parse('{"displayName":"JSON","name":"json","patterns":[{"include":"#value"}],"repository":{"array":{"begin":"\\\\[","beginCaptures":{"0":{"name":"punctuation.definition.array.begin.json"}},"end":"]","endCaptures":{"0":{"name":"punctuation.definition.array.end.json"}},"name":"meta.structure.array.json","patterns":[{"include":"#value"},{"match":",","name":"punctuation.separator.array.json"},{"match":"[^]\\\\s]","name":"invalid.illegal.expected-array-separator.json"}]},"comments":{"patterns":[{"begin":"/\\\\*\\\\*(?!/)","captures":{"0":{"name":"punctuation.definition.comment.json"}},"end":"\\\\*/","name":"comment.block.documentation.json"},{"begin":"/\\\\*","captures":{"0":{"name":"punctuation.definition.comment.json"}},"end":"\\\\*/","name":"comment.block.json"},{"captures":{"1":{"name":"punctuation.definition.comment.json"}},"match":"(//).*$\\\\n?","name":"comment.line.double-slash.js"}]},"constant":{"match":"\\\\b(?:true|false|null)\\\\b","name":"constant.language.json"},"number":{"match":"-?(?:0|[1-9]\\\\d*)(?:(?:\\\\.\\\\d+)?(?:[Ee][-+]?\\\\d+)?)?","name":"constant.numeric.json"},"object":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.dictionary.begin.json"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.dictionary.end.json"}},"name":"meta.structure.dictionary.json","patterns":[{"include":"#objectkey"},{"include":"#comments"},{"begin":":","beginCaptures":{"0":{"name":"punctuation.separator.dictionary.key-value.json"}},"end":"(,)|(?=})","endCaptures":{"1":{"name":"punctuation.separator.dictionary.pair.json"}},"name":"meta.structure.dictionary.value.json","patterns":[{"include":"#value"},{"match":"[^,\\\\s]","name":"invalid.illegal.expected-dictionary-separator.json"}]},{"match":"[^}\\\\s]","name":"invalid.illegal.expected-dictionary-separator.json"}]},"objectkey":{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.support.type.property-name.begin.json"}},"end":"\\"","endCaptures":{"0":{"name":"punctuation.support.type.property-name.end.json"}},"name":"string.json support.type.property-name.json","patterns":[{"include":"#stringcontent"}]},"string":{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.json"}},"end":"\\"","endCaptures":{"0":{"name":"punctuation.definition.string.end.json"}},"name":"string.quoted.double.json","patterns":[{"include":"#stringcontent"}]},"stringcontent":{"patterns":[{"match":"\\\\\\\\(?:[\\"/\\\\\\\\bfnrt]|u\\\\h{4})","name":"constant.character.escape.json"},{"match":"\\\\\\\\.","name":"invalid.illegal.unrecognized-string-escape.json"}]},"value":{"patterns":[{"include":"#constant"},{"include":"#number"},{"include":"#string"},{"include":"#array"},{"include":"#object"},{"include":"#comments"}]}},"scopeName":"source.json"}'));
      json_default = [
        lang7
      ];
    }
  });

  // node_modules/@shikijs/langs/dist/diff.mjs
  var diff_exports = {};
  __export(diff_exports, {
    default: () => diff_default
  });
  var lang8, diff_default;
  var init_diff = __esm({
    "node_modules/@shikijs/langs/dist/diff.mjs"() {
      lang8 = Object.freeze(JSON.parse('{"displayName":"Diff","name":"diff","patterns":[{"captures":{"1":{"name":"punctuation.definition.separator.diff"}},"match":"^((\\\\*{15})|(={67})|(-{3}))$\\\\n?","name":"meta.separator.diff"},{"match":"^\\\\d+(,\\\\d+)*([acd])\\\\d+(,\\\\d+)*$\\\\n?","name":"meta.diff.range.normal"},{"captures":{"1":{"name":"punctuation.definition.range.diff"},"2":{"name":"meta.toc-list.line-number.diff"},"3":{"name":"punctuation.definition.range.diff"}},"match":"^(@@)\\\\s*(.+?)\\\\s*(@@)($\\\\n?)?","name":"meta.diff.range.unified"},{"captures":{"3":{"name":"punctuation.definition.range.diff"},"4":{"name":"punctuation.definition.range.diff"},"6":{"name":"punctuation.definition.range.diff"},"7":{"name":"punctuation.definition.range.diff"}},"match":"^(((-{3}) .+ (-{4}))|((\\\\*{3}) .+ (\\\\*{4})))$\\\\n?","name":"meta.diff.range.context"},{"match":"^diff --git a/.*$\\\\n?","name":"meta.diff.header.git"},{"match":"^diff (-|\\\\S+\\\\s+\\\\S+).*$\\\\n?","name":"meta.diff.header.command"},{"captures":{"4":{"name":"punctuation.definition.from-file.diff"},"6":{"name":"punctuation.definition.from-file.diff"},"7":{"name":"punctuation.definition.from-file.diff"}},"match":"^((((-{3}) .+)|((\\\\*{3}) .+))$\\\\n?|(={4}) .+(?= - ))","name":"meta.diff.header.from-file"},{"captures":{"2":{"name":"punctuation.definition.to-file.diff"},"3":{"name":"punctuation.definition.to-file.diff"},"4":{"name":"punctuation.definition.to-file.diff"}},"match":"(^(\\\\+{3}) .+$\\\\n?| (-) .* (={4})$\\\\n?)","name":"meta.diff.header.to-file"},{"captures":{"3":{"name":"punctuation.definition.inserted.diff"},"6":{"name":"punctuation.definition.inserted.diff"}},"match":"^(((>)( .*)?)|((\\\\+).*))$\\\\n?","name":"markup.inserted.diff"},{"captures":{"1":{"name":"punctuation.definition.changed.diff"}},"match":"^(!).*$\\\\n?","name":"markup.changed.diff"},{"captures":{"3":{"name":"punctuation.definition.deleted.diff"},"6":{"name":"punctuation.definition.deleted.diff"}},"match":"^(((<)( .*)?)|((-).*))$\\\\n?","name":"markup.deleted.diff"},{"begin":"^(#)","captures":{"1":{"name":"punctuation.definition.comment.diff"}},"end":"\\\\n","name":"comment.line.number-sign.diff"},{"match":"^index [0-9a-f]{7,40}\\\\.\\\\.[0-9a-f]{7,40}.*$\\\\n?","name":"meta.diff.index.git"},{"captures":{"1":{"name":"punctuation.separator.key-value.diff"},"2":{"name":"meta.toc-list.file-name.diff"}},"match":"^Index(:) (.+)$\\\\n?","name":"meta.diff.index"},{"match":"^Only in .*: .*$\\\\n?","name":"meta.diff.only-in"}],"scopeName":"source.diff"}'));
      diff_default = [
        lang8
      ];
    }
  });

  // node_modules/@shikijs/langs/dist/dotenv.mjs
  var dotenv_exports = {};
  __export(dotenv_exports, {
    default: () => dotenv_default
  });
  var lang9, dotenv_default;
  var init_dotenv = __esm({
    "node_modules/@shikijs/langs/dist/dotenv.mjs"() {
      lang9 = Object.freeze(JSON.parse(`{"displayName":"dotEnv","name":"dotenv","patterns":[{"captures":{"1":{"patterns":[{"include":"#line-comment"}]}},"match":"^\\\\s?(#.*)$\\\\n"},{"captures":{"1":{"patterns":[{"include":"#key"}]},"2":{"name":"keyword.operator.assignment.dotenv"},"3":{"name":"property.value.dotenv","patterns":[{"include":"#line-comment"},{"include":"#double-quoted-string"},{"include":"#single-quoted-string"},{"include":"#interpolation"}]}},"match":"^\\\\s?(.*?)\\\\s?(=)(.*)$"}],"repository":{"double-quoted-string":{"captures":{"1":{"patterns":[{"include":"#interpolation"},{"include":"#escape-characters"}]}},"match":"\\"(.*)\\"","name":"string.quoted.double.dotenv"},"escape-characters":{"match":"\\\\\\\\(?:[\\"'\\\\\\\\bfnrt]|u[0-9A-F]{4})","name":"constant.character.escape.dotenv"},"interpolation":{"captures":{"1":{"name":"keyword.interpolation.begin.dotenv"},"2":{"name":"variable.interpolation.dotenv"},"3":{"name":"keyword.interpolation.end.dotenv"}},"match":"(\\\\$\\\\{)(.*)(})"},"key":{"captures":{"1":{"name":"keyword.key.export.dotenv"},"2":{"name":"variable.key.dotenv","patterns":[{"include":"#variable"}]}},"match":"(export\\\\s)?(.*)"},"line-comment":{"match":"#.*$","name":"comment.line.dotenv"},"single-quoted-string":{"match":"'(.*)'","name":"string.quoted.single.dotenv"},"variable":{"match":"[A-Z_a-z]+[0-9A-Z_a-z]*"}},"scopeName":"source.dotenv"}`));
      dotenv_default = [
        lang9
      ];
    }
  });

  // node_modules/@shikijs/langs/dist/json5.mjs
  var json5_exports = {};
  __export(json5_exports, {
    default: () => json5_default
  });
  var lang10, json5_default;
  var init_json5 = __esm({
    "node_modules/@shikijs/langs/dist/json5.mjs"() {
      lang10 = Object.freeze(JSON.parse(`{"displayName":"JSON5","fileTypes":["json5"],"name":"json5","patterns":[{"include":"#comments"},{"include":"#value"}],"repository":{"array":{"begin":"\\\\[","beginCaptures":{"0":{"name":"punctuation.definition.array.begin.json5"}},"end":"]","endCaptures":{"0":{"name":"punctuation.definition.array.end.json5"}},"name":"meta.structure.array.json5","patterns":[{"include":"#comments"},{"include":"#value"},{"match":",","name":"punctuation.separator.array.json5"},{"match":"[^]\\\\s]","name":"invalid.illegal.expected-array-separator.json5"}]},"comments":{"patterns":[{"match":"/{2}.*","name":"comment.single.json5"},{"begin":"/\\\\*\\\\*(?!/)","captures":{"0":{"name":"punctuation.definition.comment.json5"}},"end":"\\\\*/","name":"comment.block.documentation.json5"},{"begin":"/\\\\*","captures":{"0":{"name":"punctuation.definition.comment.json5"}},"end":"\\\\*/","name":"comment.block.json5"}]},"constant":{"match":"\\\\b(?:true|false|null|Infinity|NaN)\\\\b","name":"constant.language.json5"},"infinity":{"match":"(-)*\\\\b(?:Infinity|NaN)\\\\b","name":"constant.language.json5"},"key":{"name":"string.key.json5","patterns":[{"include":"#stringSingle"},{"include":"#stringDouble"},{"match":"[-0-9A-Z_a-z]","name":"string.key.json5"}]},"number":{"patterns":[{"match":"(0x)[0-9A-f]*","name":"constant.hex.numeric.json5"},{"match":"[+-.]?(?=[1-9]|0(?!\\\\d))\\\\d+(\\\\.\\\\d+)?([Ee][-+]?\\\\d+)?","name":"constant.dec.numeric.json5"}]},"object":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.dictionary.begin.json5"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.dictionary.end.json5"}},"name":"meta.structure.dictionary.json5","patterns":[{"include":"#comments"},{"include":"#key"},{"begin":":","beginCaptures":{"0":{"name":"punctuation.separator.dictionary.key-value.json5"}},"end":"(,)|(?=})","endCaptures":{"1":{"name":"punctuation.separator.dictionary.pair.json5"}},"name":"meta.structure.dictionary.value.json5","patterns":[{"include":"#value"},{"match":"[^,\\\\s]","name":"invalid.illegal.expected-dictionary-separator.json5"}]},{"match":"[^}\\\\s]","name":"invalid.illegal.expected-dictionary-separator.json5"}]},"stringDouble":{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.json5"}},"end":"\\"","endCaptures":{"0":{"name":"punctuation.definition.string.end.json5"}},"name":"string.quoted.json5","patterns":[{"match":"\\\\\\\\(?:[\\"/\\\\\\\\bfnrt]|u\\\\h{4})","name":"constant.character.escape.json5"},{"match":"\\\\\\\\.","name":"invalid.illegal.unrecognized-string-escape.json5"}]},"stringSingle":{"begin":"'","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.json5"}},"end":"'","endCaptures":{"0":{"name":"punctuation.definition.string.end.json5"}},"name":"string.quoted.json5","patterns":[{"match":"\\\\\\\\(?:[\\"/\\\\\\\\bfnrt]|u\\\\h{4})","name":"constant.character.escape.json5"},{"match":"\\\\\\\\.","name":"invalid.illegal.unrecognized-string-escape.json5"}]},"value":{"patterns":[{"include":"#constant"},{"include":"#infinity"},{"include":"#number"},{"include":"#stringSingle"},{"include":"#stringDouble"},{"include":"#array"},{"include":"#object"}]}},"scopeName":"source.json5"}`));
      json5_default = [
        lang10
      ];
    }
  });

  // node_modules/@shikijs/langs/dist/jsonc.mjs
  var jsonc_exports = {};
  __export(jsonc_exports, {
    default: () => jsonc_default
  });
  var lang11, jsonc_default;
  var init_jsonc = __esm({
    "node_modules/@shikijs/langs/dist/jsonc.mjs"() {
      lang11 = Object.freeze(JSON.parse('{"displayName":"JSON with Comments","name":"jsonc","patterns":[{"include":"#value"}],"repository":{"array":{"begin":"\\\\[","beginCaptures":{"0":{"name":"punctuation.definition.array.begin.json.comments"}},"end":"]","endCaptures":{"0":{"name":"punctuation.definition.array.end.json.comments"}},"name":"meta.structure.array.json.comments","patterns":[{"include":"#value"},{"match":",","name":"punctuation.separator.array.json.comments"},{"match":"[^]\\\\s]","name":"invalid.illegal.expected-array-separator.json.comments"}]},"comments":{"patterns":[{"begin":"/\\\\*\\\\*(?!/)","captures":{"0":{"name":"punctuation.definition.comment.json.comments"}},"end":"\\\\*/","name":"comment.block.documentation.json.comments"},{"begin":"/\\\\*","captures":{"0":{"name":"punctuation.definition.comment.json.comments"}},"end":"\\\\*/","name":"comment.block.json.comments"},{"captures":{"1":{"name":"punctuation.definition.comment.json.comments"}},"match":"(//).*$\\\\n?","name":"comment.line.double-slash.js"}]},"constant":{"match":"\\\\b(?:true|false|null)\\\\b","name":"constant.language.json.comments"},"number":{"match":"-?(?:0|[1-9]\\\\d*)(?:(?:\\\\.\\\\d+)?(?:[Ee][-+]?\\\\d+)?)?","name":"constant.numeric.json.comments"},"object":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.dictionary.begin.json.comments"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.dictionary.end.json.comments"}},"name":"meta.structure.dictionary.json.comments","patterns":[{"include":"#objectkey"},{"include":"#comments"},{"begin":":","beginCaptures":{"0":{"name":"punctuation.separator.dictionary.key-value.json.comments"}},"end":"(,)|(?=})","endCaptures":{"1":{"name":"punctuation.separator.dictionary.pair.json.comments"}},"name":"meta.structure.dictionary.value.json.comments","patterns":[{"include":"#value"},{"match":"[^,\\\\s]","name":"invalid.illegal.expected-dictionary-separator.json.comments"}]},{"match":"[^}\\\\s]","name":"invalid.illegal.expected-dictionary-separator.json.comments"}]},"objectkey":{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.support.type.property-name.begin.json.comments"}},"end":"\\"","endCaptures":{"0":{"name":"punctuation.support.type.property-name.end.json.comments"}},"name":"string.json.comments support.type.property-name.json.comments","patterns":[{"include":"#stringcontent"}]},"string":{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.json.comments"}},"end":"\\"","endCaptures":{"0":{"name":"punctuation.definition.string.end.json.comments"}},"name":"string.quoted.double.json.comments","patterns":[{"include":"#stringcontent"}]},"stringcontent":{"patterns":[{"match":"\\\\\\\\(?:[\\"/\\\\\\\\bfnrt]|u\\\\h{4})","name":"constant.character.escape.json.comments"},{"match":"\\\\\\\\.","name":"invalid.illegal.unrecognized-string-escape.json.comments"}]},"value":{"patterns":[{"include":"#constant"},{"include":"#number"},{"include":"#string"},{"include":"#array"},{"include":"#object"},{"include":"#comments"}]}},"scopeName":"source.json.comments"}'));
      jsonc_default = [
        lang11
      ];
    }
  });

  // node_modules/@shikijs/langs/dist/jsonl.mjs
  var jsonl_exports = {};
  __export(jsonl_exports, {
    default: () => jsonl_default
  });
  var lang12, jsonl_default;
  var init_jsonl = __esm({
    "node_modules/@shikijs/langs/dist/jsonl.mjs"() {
      lang12 = Object.freeze(JSON.parse('{"displayName":"JSON Lines","name":"jsonl","patterns":[{"include":"#value"}],"repository":{"array":{"begin":"\\\\[","beginCaptures":{"0":{"name":"punctuation.definition.array.begin.json.lines"}},"end":"]","endCaptures":{"0":{"name":"punctuation.definition.array.end.json.lines"}},"name":"meta.structure.array.json.lines","patterns":[{"include":"#value"},{"match":",","name":"punctuation.separator.array.json.lines"},{"match":"[^]\\\\s]","name":"invalid.illegal.expected-array-separator.json.lines"}]},"comments":{"patterns":[{"begin":"/\\\\*\\\\*(?!/)","captures":{"0":{"name":"punctuation.definition.comment.json.lines"}},"end":"\\\\*/","name":"comment.block.documentation.json.lines"},{"begin":"/\\\\*","captures":{"0":{"name":"punctuation.definition.comment.json.lines"}},"end":"\\\\*/","name":"comment.block.json.lines"},{"captures":{"1":{"name":"punctuation.definition.comment.json.lines"}},"match":"(//).*$\\\\n?","name":"comment.line.double-slash.js"}]},"constant":{"match":"\\\\b(?:true|false|null)\\\\b","name":"constant.language.json.lines"},"number":{"match":"-?(?:0|[1-9]\\\\d*)(?:(?:\\\\.\\\\d+)?(?:[Ee][-+]?\\\\d+)?)?","name":"constant.numeric.json.lines"},"object":{"begin":"\\\\{","beginCaptures":{"0":{"name":"punctuation.definition.dictionary.begin.json.lines"}},"end":"}","endCaptures":{"0":{"name":"punctuation.definition.dictionary.end.json.lines"}},"name":"meta.structure.dictionary.json.lines","patterns":[{"include":"#objectkey"},{"include":"#comments"},{"begin":":","beginCaptures":{"0":{"name":"punctuation.separator.dictionary.key-value.json.lines"}},"end":"(,)|(?=})","endCaptures":{"1":{"name":"punctuation.separator.dictionary.pair.json.lines"}},"name":"meta.structure.dictionary.value.json.lines","patterns":[{"include":"#value"},{"match":"[^,\\\\s]","name":"invalid.illegal.expected-dictionary-separator.json.lines"}]},{"match":"[^}\\\\s]","name":"invalid.illegal.expected-dictionary-separator.json.lines"}]},"objectkey":{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.support.type.property-name.begin.json.lines"}},"end":"\\"","endCaptures":{"0":{"name":"punctuation.support.type.property-name.end.json.lines"}},"name":"string.json.lines support.type.property-name.json.lines","patterns":[{"include":"#stringcontent"}]},"string":{"begin":"\\"","beginCaptures":{"0":{"name":"punctuation.definition.string.begin.json.lines"}},"end":"\\"","endCaptures":{"0":{"name":"punctuation.definition.string.end.json.lines"}},"name":"string.quoted.double.json.lines","patterns":[{"include":"#stringcontent"}]},"stringcontent":{"patterns":[{"match":"\\\\\\\\(?:[\\"/\\\\\\\\bfnrt]|u\\\\h{4})","name":"constant.character.escape.json.lines"},{"match":"\\\\\\\\.","name":"invalid.illegal.unrecognized-string-escape.json.lines"}]},"value":{"patterns":[{"include":"#constant"},{"include":"#number"},{"include":"#string"},{"include":"#array"},{"include":"#object"},{"include":"#comments"}]}},"scopeName":"source.json.lines"}'));
      jsonl_default = [
        lang12
      ];
    }
  });

  // node_modules/@shikijs/langs/dist/regexp.mjs
  var regexp_exports = {};
  __export(regexp_exports, {
    default: () => regexp_default
  });
  var lang13, regexp_default;
  var init_regexp = __esm({
    "node_modules/@shikijs/langs/dist/regexp.mjs"() {
      lang13 = Object.freeze(JSON.parse('{"displayName":"RegExp","fileTypes":["re"],"name":"regexp","patterns":[{"include":"#regexp-expression"}],"repository":{"codetags":{"captures":{"1":{"name":"keyword.codetag.notation.python"}},"match":"\\\\b(NOTE|XXX|HACK|FIXME|BUG|TODO)\\\\b"},"fregexp-base-expression":{"patterns":[{"include":"#fregexp-quantifier"},{"include":"#fstring-formatting-braces"},{"match":"\\\\{.*?}"},{"include":"#regexp-base-common"}]},"fregexp-quantifier":{"match":"\\\\{\\\\{(\\\\d+|\\\\d+,(\\\\d+)?|,\\\\d+)}}","name":"keyword.operator.quantifier.regexp"},"fstring-formatting-braces":{"patterns":[{"captures":{"1":{"name":"constant.character.format.placeholder.other.python"},"2":{"name":"invalid.illegal.brace.python"},"3":{"name":"constant.character.format.placeholder.other.python"}},"match":"(\\\\{)(\\\\s*?)(})"},{"match":"(\\\\{\\\\{|}})","name":"constant.character.escape.python"}]},"regexp-backreference":{"captures":{"1":{"name":"support.other.parenthesis.regexp punctuation.parenthesis.backreference.named.begin.regexp"},"2":{"name":"entity.name.tag.named.backreference.regexp"},"3":{"name":"support.other.parenthesis.regexp punctuation.parenthesis.backreference.named.end.regexp"}},"match":"(\\\\()(\\\\?P=\\\\w+(?:\\\\s+\\\\p{alnum}+)?)(\\\\))","name":"meta.backreference.named.regexp"},"regexp-backreference-number":{"captures":{"1":{"name":"entity.name.tag.backreference.regexp"}},"match":"(\\\\\\\\[1-9]\\\\d?)","name":"meta.backreference.regexp"},"regexp-base-common":{"patterns":[{"match":"\\\\.","name":"support.other.match.any.regexp"},{"match":"\\\\^","name":"support.other.match.begin.regexp"},{"match":"\\\\$","name":"support.other.match.end.regexp"},{"match":"[*+?]\\\\??","name":"keyword.operator.quantifier.regexp"},{"match":"\\\\|","name":"keyword.operator.disjunction.regexp"},{"include":"#regexp-escape-sequence"}]},"regexp-base-expression":{"patterns":[{"include":"#regexp-quantifier"},{"include":"#regexp-base-common"}]},"regexp-character-set":{"patterns":[{"match":"\\\\[\\\\^?](?!.*?])"},{"begin":"(\\\\[)(\\\\^)?(])?","beginCaptures":{"1":{"name":"punctuation.character.set.begin.regexp constant.other.set.regexp"},"2":{"name":"keyword.operator.negation.regexp"},"3":{"name":"constant.character.set.regexp"}},"end":"(])","endCaptures":{"1":{"name":"punctuation.character.set.end.regexp constant.other.set.regexp"},"2":{"name":"invalid.illegal.newline.python"}},"name":"meta.character.set.regexp","patterns":[{"include":"#regexp-charecter-set-escapes"},{"match":"\\\\N","name":"constant.character.set.regexp"}]}]},"regexp-charecter-set-escapes":{"patterns":[{"match":"\\\\\\\\[\\\\\\\\abfnrtv]","name":"constant.character.escape.regexp"},{"include":"#regexp-escape-special"},{"match":"\\\\\\\\([0-7]{1,3})","name":"constant.character.escape.regexp"},{"include":"#regexp-escape-character"},{"include":"#regexp-escape-unicode"},{"include":"#regexp-escape-catchall"}]},"regexp-comments":{"begin":"\\\\(\\\\?#","beginCaptures":{"0":{"name":"punctuation.comment.begin.regexp"}},"end":"(\\\\))","endCaptures":{"1":{"name":"punctuation.comment.end.regexp"},"2":{"name":"invalid.illegal.newline.python"}},"name":"comment.regexp","patterns":[{"include":"#codetags"}]},"regexp-conditional":{"begin":"(\\\\()\\\\?\\\\((\\\\w+(?:\\\\s+\\\\p{alnum}+)?|\\\\d+)\\\\)","beginCaptures":{"0":{"name":"keyword.operator.conditional.regexp"},"1":{"name":"punctuation.parenthesis.conditional.begin.regexp"}},"end":"(\\\\))","endCaptures":{"1":{"name":"keyword.operator.conditional.negative.regexp punctuation.parenthesis.conditional.end.regexp"},"2":{"name":"invalid.illegal.newline.python"}},"patterns":[{"include":"#regexp-expression"}]},"regexp-escape-catchall":{"match":"\\\\\\\\(.|\\\\n)","name":"constant.character.escape.regexp"},"regexp-escape-character":{"match":"\\\\\\\\(x\\\\h{2}|0[0-7]{1,2}|[0-7]{3})","name":"constant.character.escape.regexp"},"regexp-escape-sequence":{"patterns":[{"include":"#regexp-escape-special"},{"include":"#regexp-escape-character"},{"include":"#regexp-escape-unicode"},{"include":"#regexp-backreference-number"},{"include":"#regexp-escape-catchall"}]},"regexp-escape-special":{"match":"\\\\\\\\([ABDSWZbdsw])","name":"support.other.escape.special.regexp"},"regexp-escape-unicode":{"match":"\\\\\\\\(u\\\\h{4}|U\\\\h{8})","name":"constant.character.unicode.regexp"},"regexp-expression":{"patterns":[{"include":"#regexp-base-expression"},{"include":"#regexp-character-set"},{"include":"#regexp-comments"},{"include":"#regexp-flags"},{"include":"#regexp-named-group"},{"include":"#regexp-backreference"},{"include":"#regexp-lookahead"},{"include":"#regexp-lookahead-negative"},{"include":"#regexp-lookbehind"},{"include":"#regexp-lookbehind-negative"},{"include":"#regexp-conditional"},{"include":"#regexp-parentheses-non-capturing"},{"include":"#regexp-parentheses"}]},"regexp-flags":{"match":"\\\\(\\\\?[Laimsux]+\\\\)","name":"storage.modifier.flag.regexp"},"regexp-lookahead":{"begin":"(\\\\()\\\\?=","beginCaptures":{"0":{"name":"keyword.operator.lookahead.regexp"},"1":{"name":"punctuation.parenthesis.lookahead.begin.regexp"}},"end":"(\\\\))","endCaptures":{"1":{"name":"keyword.operator.lookahead.regexp punctuation.parenthesis.lookahead.end.regexp"},"2":{"name":"invalid.illegal.newline.python"}},"patterns":[{"include":"#regexp-expression"}]},"regexp-lookahead-negative":{"begin":"(\\\\()\\\\?!","beginCaptures":{"0":{"name":"keyword.operator.lookahead.negative.regexp"},"1":{"name":"punctuation.parenthesis.lookahead.begin.regexp"}},"end":"(\\\\))","endCaptures":{"1":{"name":"keyword.operator.lookahead.negative.regexp punctuation.parenthesis.lookahead.end.regexp"},"2":{"name":"invalid.illegal.newline.python"}},"patterns":[{"include":"#regexp-expression"}]},"regexp-lookbehind":{"begin":"(\\\\()\\\\?<=","beginCaptures":{"0":{"name":"keyword.operator.lookbehind.regexp"},"1":{"name":"punctuation.parenthesis.lookbehind.begin.regexp"}},"end":"(\\\\))","endCaptures":{"1":{"name":"keyword.operator.lookbehind.regexp punctuation.parenthesis.lookbehind.end.regexp"},"2":{"name":"invalid.illegal.newline.python"}},"patterns":[{"include":"#regexp-expression"}]},"regexp-lookbehind-negative":{"begin":"(\\\\()\\\\?<!","beginCaptures":{"0":{"name":"keyword.operator.lookbehind.negative.regexp"},"1":{"name":"punctuation.parenthesis.lookbehind.begin.regexp"}},"end":"(\\\\))","endCaptures":{"1":{"name":"keyword.operator.lookbehind.negative.regexp punctuation.parenthesis.lookbehind.end.regexp"},"2":{"name":"invalid.illegal.newline.python"}},"patterns":[{"include":"#regexp-expression"}]},"regexp-named-group":{"begin":"(\\\\()(\\\\?P<\\\\w+(?:\\\\s+\\\\p{alnum}+)?>)","beginCaptures":{"1":{"name":"support.other.parenthesis.regexp punctuation.parenthesis.named.begin.regexp"},"2":{"name":"entity.name.tag.named.group.regexp"}},"end":"(\\\\))","endCaptures":{"1":{"name":"support.other.parenthesis.regexp punctuation.parenthesis.named.end.regexp"},"2":{"name":"invalid.illegal.newline.python"}},"name":"meta.named.regexp","patterns":[{"include":"#regexp-expression"}]},"regexp-parentheses":{"begin":"\\\\(","beginCaptures":{"0":{"name":"support.other.parenthesis.regexp punctuation.parenthesis.begin.regexp"}},"end":"(\\\\))","endCaptures":{"1":{"name":"support.other.parenthesis.regexp punctuation.parenthesis.end.regexp"},"2":{"name":"invalid.illegal.newline.python"}},"patterns":[{"include":"#regexp-expression"}]},"regexp-parentheses-non-capturing":{"begin":"\\\\(\\\\?:","beginCaptures":{"0":{"name":"support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.begin.regexp"}},"end":"(\\\\))","endCaptures":{"1":{"name":"support.other.parenthesis.regexp punctuation.parenthesis.non-capturing.end.regexp"},"2":{"name":"invalid.illegal.newline.python"}},"patterns":[{"include":"#regexp-expression"}]},"regexp-quantifier":{"match":"\\\\{(\\\\d+|\\\\d+,(\\\\d+)?|,\\\\d+)}","name":"keyword.operator.quantifier.regexp"}},"scopeName":"source.regexp.python","aliases":["regex"]}'));
      regexp_default = [
        lang13
      ];
    }
  });

  // node_modules/@shikijs/themes/dist/light-plus.mjs
  var light_plus_exports = {};
  __export(light_plus_exports, {
    default: () => light_plus_default
  });
  var light_plus_default;
  var init_light_plus = __esm({
    "node_modules/@shikijs/themes/dist/light-plus.mjs"() {
      light_plus_default = Object.freeze(JSON.parse('{"colors":{"actionBar.toggledBackground":"#dddddd","activityBarBadge.background":"#007ACC","checkbox.border":"#919191","diffEditor.unchangedRegionBackground":"#f8f8f8","editor.background":"#FFFFFF","editor.foreground":"#000000","editor.inactiveSelectionBackground":"#E5EBF1","editor.selectionHighlightBackground":"#ADD6FF80","editorIndentGuide.activeBackground1":"#939393","editorIndentGuide.background1":"#D3D3D3","editorSuggestWidget.background":"#F3F3F3","input.placeholderForeground":"#767676","list.activeSelectionIconForeground":"#FFF","list.focusAndSelectionOutline":"#90C2F9","list.hoverBackground":"#E8E8E8","menu.border":"#D4D4D4","notebook.cellBorderColor":"#E8E8E8","notebook.selectedCellBackground":"#c8ddf150","ports.iconRunningProcessForeground":"#369432","searchEditor.textInputBorder":"#CECECE","settings.numberInputBorder":"#CECECE","settings.textInputBorder":"#CECECE","sideBarSectionHeader.background":"#0000","sideBarSectionHeader.border":"#61616130","sideBarTitle.foreground":"#6F6F6F","statusBarItem.errorBackground":"#c72e0f","statusBarItem.remoteBackground":"#16825D","statusBarItem.remoteForeground":"#FFF","tab.lastPinnedBorder":"#61616130","tab.selectedBackground":"#ffffffa5","tab.selectedForeground":"#333333b3","terminal.inactiveSelectionBackground":"#E5EBF1","widget.border":"#d4d4d4"},"displayName":"Light Plus","name":"light-plus","semanticHighlighting":true,"semanticTokenColors":{"customLiteral":"#795E26","newOperator":"#AF00DB","numberLiteral":"#098658","stringLiteral":"#a31515"},"tokenColors":[{"scope":["meta.embedded","source.groovy.embedded","string meta.image.inline.markdown","variable.legacy.builtin.python"],"settings":{"foreground":"#000000ff"}},{"scope":"emphasis","settings":{"fontStyle":"italic"}},{"scope":"strong","settings":{"fontStyle":"bold"}},{"scope":"meta.diff.header","settings":{"foreground":"#000080"}},{"scope":"comment","settings":{"foreground":"#008000"}},{"scope":"constant.language","settings":{"foreground":"#0000ff"}},{"scope":["constant.numeric","variable.other.enummember","keyword.operator.plus.exponent","keyword.operator.minus.exponent"],"settings":{"foreground":"#098658"}},{"scope":"constant.regexp","settings":{"foreground":"#811f3f"}},{"scope":"entity.name.tag","settings":{"foreground":"#800000"}},{"scope":"entity.name.selector","settings":{"foreground":"#800000"}},{"scope":"entity.other.attribute-name","settings":{"foreground":"#e50000"}},{"scope":["entity.other.attribute-name.class.css","source.css entity.other.attribute-name.class","entity.other.attribute-name.id.css","entity.other.attribute-name.parent-selector.css","entity.other.attribute-name.parent.less","source.css entity.other.attribute-name.pseudo-class","entity.other.attribute-name.pseudo-element.css","source.css.less entity.other.attribute-name.id","entity.other.attribute-name.scss"],"settings":{"foreground":"#800000"}},{"scope":"invalid","settings":{"foreground":"#cd3131"}},{"scope":"markup.underline","settings":{"fontStyle":"underline"}},{"scope":"markup.bold","settings":{"fontStyle":"bold","foreground":"#000080"}},{"scope":"markup.heading","settings":{"fontStyle":"bold","foreground":"#800000"}},{"scope":"markup.italic","settings":{"fontStyle":"italic"}},{"scope":"markup.strikethrough","settings":{"fontStyle":"strikethrough"}},{"scope":"markup.inserted","settings":{"foreground":"#098658"}},{"scope":"markup.deleted","settings":{"foreground":"#a31515"}},{"scope":"markup.changed","settings":{"foreground":"#0451a5"}},{"scope":["punctuation.definition.quote.begin.markdown","punctuation.definition.list.begin.markdown"],"settings":{"foreground":"#0451a5"}},{"scope":"markup.inline.raw","settings":{"foreground":"#800000"}},{"scope":"punctuation.definition.tag","settings":{"foreground":"#800000"}},{"scope":["meta.preprocessor","entity.name.function.preprocessor"],"settings":{"foreground":"#0000ff"}},{"scope":"meta.preprocessor.string","settings":{"foreground":"#a31515"}},{"scope":"meta.preprocessor.numeric","settings":{"foreground":"#098658"}},{"scope":"meta.structure.dictionary.key.python","settings":{"foreground":"#0451a5"}},{"scope":"storage","settings":{"foreground":"#0000ff"}},{"scope":"storage.type","settings":{"foreground":"#0000ff"}},{"scope":["storage.modifier","keyword.operator.noexcept"],"settings":{"foreground":"#0000ff"}},{"scope":["string","meta.embedded.assembly"],"settings":{"foreground":"#a31515"}},{"scope":["string.comment.buffered.block.pug","string.quoted.pug","string.interpolated.pug","string.unquoted.plain.in.yaml","string.unquoted.plain.out.yaml","string.unquoted.block.yaml","string.quoted.single.yaml","string.quoted.double.xml","string.quoted.single.xml","string.unquoted.cdata.xml","string.quoted.double.html","string.quoted.single.html","string.unquoted.html","string.quoted.single.handlebars","string.quoted.double.handlebars"],"settings":{"foreground":"#0000ff"}},{"scope":"string.regexp","settings":{"foreground":"#811f3f"}},{"scope":["punctuation.definition.template-expression.begin","punctuation.definition.template-expression.end","punctuation.section.embedded"],"settings":{"foreground":"#0000ff"}},{"scope":["meta.template.expression"],"settings":{"foreground":"#000000"}},{"scope":["support.constant.property-value","support.constant.font-name","support.constant.media-type","support.constant.media","constant.other.color.rgb-value","constant.other.rgb-value","support.constant.color"],"settings":{"foreground":"#0451a5"}},{"scope":["support.type.vendored.property-name","support.type.property-name","source.css variable","source.coffee.embedded"],"settings":{"foreground":"#e50000"}},{"scope":["support.type.property-name.json"],"settings":{"foreground":"#0451a5"}},{"scope":"keyword","settings":{"foreground":"#0000ff"}},{"scope":"keyword.control","settings":{"foreground":"#0000ff"}},{"scope":"keyword.operator","settings":{"foreground":"#000000"}},{"scope":["keyword.operator.new","keyword.operator.expression","keyword.operator.cast","keyword.operator.sizeof","keyword.operator.alignof","keyword.operator.typeid","keyword.operator.alignas","keyword.operator.instanceof","keyword.operator.logical.python","keyword.operator.wordlike"],"settings":{"foreground":"#0000ff"}},{"scope":"keyword.other.unit","settings":{"foreground":"#098658"}},{"scope":["punctuation.section.embedded.begin.php","punctuation.section.embedded.end.php"],"settings":{"foreground":"#800000"}},{"scope":"support.function.git-rebase","settings":{"foreground":"#0451a5"}},{"scope":"constant.sha.git-rebase","settings":{"foreground":"#098658"}},{"scope":["storage.modifier.import.java","variable.language.wildcard.java","storage.modifier.package.java"],"settings":{"foreground":"#000000"}},{"scope":"variable.language","settings":{"foreground":"#0000ff"}},{"scope":["entity.name.function","support.function","support.constant.handlebars","source.powershell variable.other.member","entity.name.operator.custom-literal"],"settings":{"foreground":"#795E26"}},{"scope":["support.class","support.type","entity.name.type","entity.name.namespace","entity.other.attribute","entity.name.scope-resolution","entity.name.class","storage.type.numeric.go","storage.type.byte.go","storage.type.boolean.go","storage.type.string.go","storage.type.uintptr.go","storage.type.error.go","storage.type.rune.go","storage.type.cs","storage.type.generic.cs","storage.type.modifier.cs","storage.type.variable.cs","storage.type.annotation.java","storage.type.generic.java","storage.type.java","storage.type.object.array.java","storage.type.primitive.array.java","storage.type.primitive.java","storage.type.token.java","storage.type.groovy","storage.type.annotation.groovy","storage.type.parameters.groovy","storage.type.generic.groovy","storage.type.object.array.groovy","storage.type.primitive.array.groovy","storage.type.primitive.groovy"],"settings":{"foreground":"#267f99"}},{"scope":["meta.type.cast.expr","meta.type.new.expr","support.constant.math","support.constant.dom","support.constant.json","entity.other.inherited-class","punctuation.separator.namespace.ruby"],"settings":{"foreground":"#267f99"}},{"scope":["keyword.control","source.cpp keyword.operator.new","source.cpp keyword.operator.delete","keyword.other.using","keyword.other.directive.using","keyword.other.operator","entity.name.operator"],"settings":{"foreground":"#AF00DB"}},{"scope":["variable","meta.definition.variable.name","support.variable","entity.name.variable","constant.other.placeholder"],"settings":{"foreground":"#001080"}},{"scope":["variable.other.constant","variable.other.enummember"],"settings":{"foreground":"#0070C1"}},{"scope":["meta.object-literal.key"],"settings":{"foreground":"#001080"}},{"scope":["support.constant.property-value","support.constant.font-name","support.constant.media-type","support.constant.media","constant.other.color.rgb-value","constant.other.rgb-value","support.constant.color"],"settings":{"foreground":"#0451a5"}},{"scope":["punctuation.definition.group.regexp","punctuation.definition.group.assertion.regexp","punctuation.definition.character-class.regexp","punctuation.character.set.begin.regexp","punctuation.character.set.end.regexp","keyword.operator.negation.regexp","support.other.parenthesis.regexp"],"settings":{"foreground":"#d16969"}},{"scope":["constant.character.character-class.regexp","constant.other.character-class.set.regexp","constant.other.character-class.regexp","constant.character.set.regexp"],"settings":{"foreground":"#811f3f"}},{"scope":"keyword.operator.quantifier.regexp","settings":{"foreground":"#000000"}},{"scope":["keyword.operator.or.regexp","keyword.control.anchor.regexp"],"settings":{"foreground":"#EE0000"}},{"scope":["constant.character","constant.other.option"],"settings":{"foreground":"#0000ff"}},{"scope":"constant.character.escape","settings":{"foreground":"#EE0000"}},{"scope":"entity.name.label","settings":{"foreground":"#000000"}}],"type":"light"}'));
    }
  });

  // node_modules/@shikijs/themes/dist/dark-plus.mjs
  var dark_plus_exports = {};
  __export(dark_plus_exports, {
    default: () => dark_plus_default
  });
  var dark_plus_default;
  var init_dark_plus = __esm({
    "node_modules/@shikijs/themes/dist/dark-plus.mjs"() {
      dark_plus_default = Object.freeze(JSON.parse('{"colors":{"actionBar.toggledBackground":"#383a49","activityBarBadge.background":"#007ACC","checkbox.border":"#6B6B6B","editor.background":"#1E1E1E","editor.foreground":"#D4D4D4","editor.inactiveSelectionBackground":"#3A3D41","editor.selectionHighlightBackground":"#ADD6FF26","editorIndentGuide.activeBackground1":"#707070","editorIndentGuide.background1":"#404040","input.placeholderForeground":"#A6A6A6","list.activeSelectionIconForeground":"#FFF","list.dropBackground":"#383B3D","menu.background":"#252526","menu.border":"#454545","menu.foreground":"#CCCCCC","menu.selectionBackground":"#0078d4","menu.separatorBackground":"#454545","ports.iconRunningProcessForeground":"#369432","sideBarSectionHeader.background":"#0000","sideBarSectionHeader.border":"#ccc3","sideBarTitle.foreground":"#BBBBBB","statusBarItem.remoteBackground":"#16825D","statusBarItem.remoteForeground":"#FFF","tab.lastPinnedBorder":"#ccc3","tab.selectedBackground":"#222222","tab.selectedForeground":"#ffffffa0","terminal.inactiveSelectionBackground":"#3A3D41","widget.border":"#303031"},"displayName":"Dark Plus","name":"dark-plus","semanticHighlighting":true,"semanticTokenColors":{"customLiteral":"#DCDCAA","newOperator":"#C586C0","numberLiteral":"#b5cea8","stringLiteral":"#ce9178"},"tokenColors":[{"scope":["meta.embedded","source.groovy.embedded","string meta.image.inline.markdown","variable.legacy.builtin.python"],"settings":{"foreground":"#D4D4D4"}},{"scope":"emphasis","settings":{"fontStyle":"italic"}},{"scope":"strong","settings":{"fontStyle":"bold"}},{"scope":"header","settings":{"foreground":"#000080"}},{"scope":"comment","settings":{"foreground":"#6A9955"}},{"scope":"constant.language","settings":{"foreground":"#569cd6"}},{"scope":["constant.numeric","variable.other.enummember","keyword.operator.plus.exponent","keyword.operator.minus.exponent"],"settings":{"foreground":"#b5cea8"}},{"scope":"constant.regexp","settings":{"foreground":"#646695"}},{"scope":"entity.name.tag","settings":{"foreground":"#569cd6"}},{"scope":["entity.name.tag.css","entity.name.tag.less"],"settings":{"foreground":"#d7ba7d"}},{"scope":"entity.other.attribute-name","settings":{"foreground":"#9cdcfe"}},{"scope":["entity.other.attribute-name.class.css","source.css entity.other.attribute-name.class","entity.other.attribute-name.id.css","entity.other.attribute-name.parent-selector.css","entity.other.attribute-name.parent.less","source.css entity.other.attribute-name.pseudo-class","entity.other.attribute-name.pseudo-element.css","source.css.less entity.other.attribute-name.id","entity.other.attribute-name.scss"],"settings":{"foreground":"#d7ba7d"}},{"scope":"invalid","settings":{"foreground":"#f44747"}},{"scope":"markup.underline","settings":{"fontStyle":"underline"}},{"scope":"markup.bold","settings":{"fontStyle":"bold","foreground":"#569cd6"}},{"scope":"markup.heading","settings":{"fontStyle":"bold","foreground":"#569cd6"}},{"scope":"markup.italic","settings":{"fontStyle":"italic"}},{"scope":"markup.strikethrough","settings":{"fontStyle":"strikethrough"}},{"scope":"markup.inserted","settings":{"foreground":"#b5cea8"}},{"scope":"markup.deleted","settings":{"foreground":"#ce9178"}},{"scope":"markup.changed","settings":{"foreground":"#569cd6"}},{"scope":"punctuation.definition.quote.begin.markdown","settings":{"foreground":"#6A9955"}},{"scope":"punctuation.definition.list.begin.markdown","settings":{"foreground":"#6796e6"}},{"scope":"markup.inline.raw","settings":{"foreground":"#ce9178"}},{"scope":"punctuation.definition.tag","settings":{"foreground":"#808080"}},{"scope":["meta.preprocessor","entity.name.function.preprocessor"],"settings":{"foreground":"#569cd6"}},{"scope":"meta.preprocessor.string","settings":{"foreground":"#ce9178"}},{"scope":"meta.preprocessor.numeric","settings":{"foreground":"#b5cea8"}},{"scope":"meta.structure.dictionary.key.python","settings":{"foreground":"#9cdcfe"}},{"scope":"meta.diff.header","settings":{"foreground":"#569cd6"}},{"scope":"storage","settings":{"foreground":"#569cd6"}},{"scope":"storage.type","settings":{"foreground":"#569cd6"}},{"scope":["storage.modifier","keyword.operator.noexcept"],"settings":{"foreground":"#569cd6"}},{"scope":["string","meta.embedded.assembly"],"settings":{"foreground":"#ce9178"}},{"scope":"string.tag","settings":{"foreground":"#ce9178"}},{"scope":"string.value","settings":{"foreground":"#ce9178"}},{"scope":"string.regexp","settings":{"foreground":"#d16969"}},{"scope":["punctuation.definition.template-expression.begin","punctuation.definition.template-expression.end","punctuation.section.embedded"],"settings":{"foreground":"#569cd6"}},{"scope":["meta.template.expression"],"settings":{"foreground":"#d4d4d4"}},{"scope":["support.type.vendored.property-name","support.type.property-name","source.css variable","source.coffee.embedded"],"settings":{"foreground":"#9cdcfe"}},{"scope":"keyword","settings":{"foreground":"#569cd6"}},{"scope":"keyword.control","settings":{"foreground":"#569cd6"}},{"scope":"keyword.operator","settings":{"foreground":"#d4d4d4"}},{"scope":["keyword.operator.new","keyword.operator.expression","keyword.operator.cast","keyword.operator.sizeof","keyword.operator.alignof","keyword.operator.typeid","keyword.operator.alignas","keyword.operator.instanceof","keyword.operator.logical.python","keyword.operator.wordlike"],"settings":{"foreground":"#569cd6"}},{"scope":"keyword.other.unit","settings":{"foreground":"#b5cea8"}},{"scope":["punctuation.section.embedded.begin.php","punctuation.section.embedded.end.php"],"settings":{"foreground":"#569cd6"}},{"scope":"support.function.git-rebase","settings":{"foreground":"#9cdcfe"}},{"scope":"constant.sha.git-rebase","settings":{"foreground":"#b5cea8"}},{"scope":["storage.modifier.import.java","variable.language.wildcard.java","storage.modifier.package.java"],"settings":{"foreground":"#d4d4d4"}},{"scope":"variable.language","settings":{"foreground":"#569cd6"}},{"scope":["entity.name.function","support.function","support.constant.handlebars","source.powershell variable.other.member","entity.name.operator.custom-literal"],"settings":{"foreground":"#DCDCAA"}},{"scope":["support.class","support.type","entity.name.type","entity.name.namespace","entity.other.attribute","entity.name.scope-resolution","entity.name.class","storage.type.numeric.go","storage.type.byte.go","storage.type.boolean.go","storage.type.string.go","storage.type.uintptr.go","storage.type.error.go","storage.type.rune.go","storage.type.cs","storage.type.generic.cs","storage.type.modifier.cs","storage.type.variable.cs","storage.type.annotation.java","storage.type.generic.java","storage.type.java","storage.type.object.array.java","storage.type.primitive.array.java","storage.type.primitive.java","storage.type.token.java","storage.type.groovy","storage.type.annotation.groovy","storage.type.parameters.groovy","storage.type.generic.groovy","storage.type.object.array.groovy","storage.type.primitive.array.groovy","storage.type.primitive.groovy"],"settings":{"foreground":"#4EC9B0"}},{"scope":["meta.type.cast.expr","meta.type.new.expr","support.constant.math","support.constant.dom","support.constant.json","entity.other.inherited-class","punctuation.separator.namespace.ruby"],"settings":{"foreground":"#4EC9B0"}},{"scope":["keyword.control","source.cpp keyword.operator.new","keyword.operator.delete","keyword.other.using","keyword.other.directive.using","keyword.other.operator","entity.name.operator"],"settings":{"foreground":"#C586C0"}},{"scope":["variable","meta.definition.variable.name","support.variable","entity.name.variable","constant.other.placeholder"],"settings":{"foreground":"#9CDCFE"}},{"scope":["variable.other.constant","variable.other.enummember"],"settings":{"foreground":"#4FC1FF"}},{"scope":["meta.object-literal.key"],"settings":{"foreground":"#9CDCFE"}},{"scope":["support.constant.property-value","support.constant.font-name","support.constant.media-type","support.constant.media","constant.other.color.rgb-value","constant.other.rgb-value","support.constant.color"],"settings":{"foreground":"#CE9178"}},{"scope":["punctuation.definition.group.regexp","punctuation.definition.group.assertion.regexp","punctuation.definition.character-class.regexp","punctuation.character.set.begin.regexp","punctuation.character.set.end.regexp","keyword.operator.negation.regexp","support.other.parenthesis.regexp"],"settings":{"foreground":"#CE9178"}},{"scope":["constant.character.character-class.regexp","constant.other.character-class.set.regexp","constant.other.character-class.regexp","constant.character.set.regexp"],"settings":{"foreground":"#d16969"}},{"scope":["keyword.operator.or.regexp","keyword.control.anchor.regexp"],"settings":{"foreground":"#DCDCAA"}},{"scope":"keyword.operator.quantifier.regexp","settings":{"foreground":"#d7ba7d"}},{"scope":["constant.character","constant.other.option"],"settings":{"foreground":"#569cd6"}},{"scope":"constant.character.escape","settings":{"foreground":"#d7ba7d"}},{"scope":"entity.name.label","settings":{"foreground":"#C8C8C8"}}],"type":"dark"}'));
    }
  });

  // node_modules/@shikijs/types/dist/index.mjs
  var ShikiError = class extends Error {
    constructor(message) {
      super(message);
      this.name = "ShikiError";
    }
  };

  // node_modules/@shikijs/vscode-textmate/dist/index.js
  function clone(something) {
    return doClone(something);
  }
  function doClone(something) {
    if (Array.isArray(something)) {
      return cloneArray(something);
    }
    if (something instanceof RegExp) {
      return something;
    }
    if (typeof something === "object") {
      return cloneObj(something);
    }
    return something;
  }
  function cloneArray(arr) {
    let r4 = [];
    for (let i2 = 0, len = arr.length; i2 < len; i2++) {
      r4[i2] = doClone(arr[i2]);
    }
    return r4;
  }
  function cloneObj(obj) {
    let r4 = {};
    for (let key2 in obj) {
      r4[key2] = doClone(obj[key2]);
    }
    return r4;
  }
  function mergeObjects(target, ...sources) {
    sources.forEach((source) => {
      for (let key2 in source) {
        target[key2] = source[key2];
      }
    });
    return target;
  }
  function basename(path) {
    const idx = ~path.lastIndexOf("/") || ~path.lastIndexOf("\\");
    if (idx === 0) {
      return path;
    } else if (~idx === path.length - 1) {
      return basename(path.substring(0, path.length - 1));
    } else {
      return path.substr(~idx + 1);
    }
  }
  var CAPTURING_REGEX_SOURCE = /\$(\d+)|\${(\d+):\/(downcase|upcase)}/g;
  var RegexSource = class {
    static hasCaptures(regexSource) {
      if (regexSource === null) {
        return false;
      }
      CAPTURING_REGEX_SOURCE.lastIndex = 0;
      return CAPTURING_REGEX_SOURCE.test(regexSource);
    }
    static replaceCaptures(regexSource, captureSource, captureIndices) {
      return regexSource.replace(CAPTURING_REGEX_SOURCE, (match, index, commandIndex, command) => {
        let capture = captureIndices[parseInt(index || commandIndex, 10)];
        if (capture) {
          let result = captureSource.substring(capture.start, capture.end);
          while (result[0] === ".") {
            result = result.substring(1);
          }
          switch (command) {
            case "downcase":
              return result.toLowerCase();
            case "upcase":
              return result.toUpperCase();
            default:
              return result;
          }
        } else {
          return match;
        }
      });
    }
  };
  function strcmp(a2, b3) {
    if (a2 < b3) {
      return -1;
    }
    if (a2 > b3) {
      return 1;
    }
    return 0;
  }
  function strArrCmp(a2, b3) {
    if (a2 === null && b3 === null) {
      return 0;
    }
    if (!a2) {
      return -1;
    }
    if (!b3) {
      return 1;
    }
    let len1 = a2.length;
    let len2 = b3.length;
    if (len1 === len2) {
      for (let i2 = 0; i2 < len1; i2++) {
        let res = strcmp(a2[i2], b3[i2]);
        if (res !== 0) {
          return res;
        }
      }
      return 0;
    }
    return len1 - len2;
  }
  function isValidHexColor(hex) {
    if (/^#[0-9a-f]{6}$/i.test(hex)) {
      return true;
    }
    if (/^#[0-9a-f]{8}$/i.test(hex)) {
      return true;
    }
    if (/^#[0-9a-f]{3}$/i.test(hex)) {
      return true;
    }
    if (/^#[0-9a-f]{4}$/i.test(hex)) {
      return true;
    }
    return false;
  }
  function escapeRegExpCharacters(value) {
    return value.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&");
  }
  var CachedFn = class {
    constructor(fn) {
      this.fn = fn;
    }
    cache = /* @__PURE__ */ new Map();
    get(key2) {
      if (this.cache.has(key2)) {
        return this.cache.get(key2);
      }
      const value = this.fn(key2);
      this.cache.set(key2, value);
      return value;
    }
  };
  var Theme = class {
    constructor(_colorMap, _defaults, _root) {
      this._colorMap = _colorMap;
      this._defaults = _defaults;
      this._root = _root;
    }
    static createFromRawTheme(source, colorMap) {
      return this.createFromParsedTheme(parseTheme(source), colorMap);
    }
    static createFromParsedTheme(source, colorMap) {
      return resolveParsedThemeRules(source, colorMap);
    }
    _cachedMatchRoot = new CachedFn(
      (scopeName) => this._root.match(scopeName)
    );
    getColorMap() {
      return this._colorMap.getColorMap();
    }
    getDefaults() {
      return this._defaults;
    }
    match(scopePath) {
      if (scopePath === null) {
        return this._defaults;
      }
      const scopeName = scopePath.scopeName;
      const matchingTrieElements = this._cachedMatchRoot.get(scopeName);
      const effectiveRule = matchingTrieElements.find(
        (v2) => _scopePathMatchesParentScopes(scopePath.parent, v2.parentScopes)
      );
      if (!effectiveRule) {
        return null;
      }
      return new StyleAttributes(
        effectiveRule.fontStyle,
        effectiveRule.foreground,
        effectiveRule.background
      );
    }
  };
  var ScopeStack = class _ScopeStack {
    constructor(parent, scopeName) {
      this.parent = parent;
      this.scopeName = scopeName;
    }
    static push(path, scopeNames) {
      for (const name of scopeNames) {
        path = new _ScopeStack(path, name);
      }
      return path;
    }
    static from(...segments) {
      let result = null;
      for (let i2 = 0; i2 < segments.length; i2++) {
        result = new _ScopeStack(result, segments[i2]);
      }
      return result;
    }
    push(scopeName) {
      return new _ScopeStack(this, scopeName);
    }
    getSegments() {
      let item = this;
      const result = [];
      while (item) {
        result.push(item.scopeName);
        item = item.parent;
      }
      result.reverse();
      return result;
    }
    toString() {
      return this.getSegments().join(" ");
    }
    extends(other) {
      if (this === other) {
        return true;
      }
      if (this.parent === null) {
        return false;
      }
      return this.parent.extends(other);
    }
    getExtensionIfDefined(base) {
      const result = [];
      let item = this;
      while (item && item !== base) {
        result.push(item.scopeName);
        item = item.parent;
      }
      return item === base ? result.reverse() : void 0;
    }
  };
  function _scopePathMatchesParentScopes(scopePath, parentScopes) {
    if (parentScopes.length === 0) {
      return true;
    }
    for (let index = 0; index < parentScopes.length; index++) {
      let scopePattern = parentScopes[index];
      let scopeMustMatch = false;
      if (scopePattern === ">") {
        if (index === parentScopes.length - 1) {
          return false;
        }
        scopePattern = parentScopes[++index];
        scopeMustMatch = true;
      }
      while (scopePath) {
        if (_matchesScope(scopePath.scopeName, scopePattern)) {
          break;
        }
        if (scopeMustMatch) {
          return false;
        }
        scopePath = scopePath.parent;
      }
      if (!scopePath) {
        return false;
      }
      scopePath = scopePath.parent;
    }
    return true;
  }
  function _matchesScope(scopeName, scopePattern) {
    return scopePattern === scopeName || scopeName.startsWith(scopePattern) && scopeName[scopePattern.length] === ".";
  }
  var StyleAttributes = class {
    constructor(fontStyle, foregroundId, backgroundId) {
      this.fontStyle = fontStyle;
      this.foregroundId = foregroundId;
      this.backgroundId = backgroundId;
    }
  };
  function parseTheme(source) {
    if (!source) {
      return [];
    }
    if (!source.settings || !Array.isArray(source.settings)) {
      return [];
    }
    let settings = source.settings;
    let result = [], resultLen = 0;
    for (let i2 = 0, len = settings.length; i2 < len; i2++) {
      let entry = settings[i2];
      if (!entry.settings) {
        continue;
      }
      let scopes;
      if (typeof entry.scope === "string") {
        let _scope = entry.scope;
        _scope = _scope.replace(/^[,]+/, "");
        _scope = _scope.replace(/[,]+$/, "");
        scopes = _scope.split(",");
      } else if (Array.isArray(entry.scope)) {
        scopes = entry.scope;
      } else {
        scopes = [""];
      }
      let fontStyle = -1;
      if (typeof entry.settings.fontStyle === "string") {
        fontStyle = 0;
        let segments = entry.settings.fontStyle.split(" ");
        for (let j2 = 0, lenJ = segments.length; j2 < lenJ; j2++) {
          let segment = segments[j2];
          switch (segment) {
            case "italic":
              fontStyle = fontStyle | 1;
              break;
            case "bold":
              fontStyle = fontStyle | 2;
              break;
            case "underline":
              fontStyle = fontStyle | 4;
              break;
            case "strikethrough":
              fontStyle = fontStyle | 8;
              break;
          }
        }
      }
      let foreground = null;
      if (typeof entry.settings.foreground === "string" && isValidHexColor(entry.settings.foreground)) {
        foreground = entry.settings.foreground;
      }
      let background = null;
      if (typeof entry.settings.background === "string" && isValidHexColor(entry.settings.background)) {
        background = entry.settings.background;
      }
      for (let j2 = 0, lenJ = scopes.length; j2 < lenJ; j2++) {
        let _scope = scopes[j2].trim();
        let segments = _scope.split(" ");
        let scope = segments[segments.length - 1];
        let parentScopes = null;
        if (segments.length > 1) {
          parentScopes = segments.slice(0, segments.length - 1);
          parentScopes.reverse();
        }
        result[resultLen++] = new ParsedThemeRule(
          scope,
          parentScopes,
          i2,
          fontStyle,
          foreground,
          background
        );
      }
    }
    return result;
  }
  var ParsedThemeRule = class {
    constructor(scope, parentScopes, index, fontStyle, foreground, background) {
      this.scope = scope;
      this.parentScopes = parentScopes;
      this.index = index;
      this.fontStyle = fontStyle;
      this.foreground = foreground;
      this.background = background;
    }
  };
  var FontStyle = /* @__PURE__ */ ((FontStyle2) => {
    FontStyle2[FontStyle2["NotSet"] = -1] = "NotSet";
    FontStyle2[FontStyle2["None"] = 0] = "None";
    FontStyle2[FontStyle2["Italic"] = 1] = "Italic";
    FontStyle2[FontStyle2["Bold"] = 2] = "Bold";
    FontStyle2[FontStyle2["Underline"] = 4] = "Underline";
    FontStyle2[FontStyle2["Strikethrough"] = 8] = "Strikethrough";
    return FontStyle2;
  })(FontStyle || {});
  function resolveParsedThemeRules(parsedThemeRules, _colorMap) {
    parsedThemeRules.sort((a2, b3) => {
      let r4 = strcmp(a2.scope, b3.scope);
      if (r4 !== 0) {
        return r4;
      }
      r4 = strArrCmp(a2.parentScopes, b3.parentScopes);
      if (r4 !== 0) {
        return r4;
      }
      return a2.index - b3.index;
    });
    let defaultFontStyle = 0;
    let defaultForeground = "#000000";
    let defaultBackground = "#ffffff";
    while (parsedThemeRules.length >= 1 && parsedThemeRules[0].scope === "") {
      let incomingDefaults = parsedThemeRules.shift();
      if (incomingDefaults.fontStyle !== -1) {
        defaultFontStyle = incomingDefaults.fontStyle;
      }
      if (incomingDefaults.foreground !== null) {
        defaultForeground = incomingDefaults.foreground;
      }
      if (incomingDefaults.background !== null) {
        defaultBackground = incomingDefaults.background;
      }
    }
    let colorMap = new ColorMap(_colorMap);
    let defaults = new StyleAttributes(defaultFontStyle, colorMap.getId(defaultForeground), colorMap.getId(defaultBackground));
    let root2 = new ThemeTrieElement(new ThemeTrieElementRule(0, null, -1, 0, 0), []);
    for (let i2 = 0, len = parsedThemeRules.length; i2 < len; i2++) {
      let rule = parsedThemeRules[i2];
      root2.insert(0, rule.scope, rule.parentScopes, rule.fontStyle, colorMap.getId(rule.foreground), colorMap.getId(rule.background));
    }
    return new Theme(colorMap, defaults, root2);
  }
  var ColorMap = class {
    _isFrozen;
    _lastColorId;
    _id2color;
    _color2id;
    constructor(_colorMap) {
      this._lastColorId = 0;
      this._id2color = [];
      this._color2id = /* @__PURE__ */ Object.create(null);
      if (Array.isArray(_colorMap)) {
        this._isFrozen = true;
        for (let i2 = 0, len = _colorMap.length; i2 < len; i2++) {
          this._color2id[_colorMap[i2]] = i2;
          this._id2color[i2] = _colorMap[i2];
        }
      } else {
        this._isFrozen = false;
      }
    }
    getId(color) {
      if (color === null) {
        return 0;
      }
      color = color.toUpperCase();
      let value = this._color2id[color];
      if (value) {
        return value;
      }
      if (this._isFrozen) {
        throw new Error(`Missing color in color map - ${color}`);
      }
      value = ++this._lastColorId;
      this._color2id[color] = value;
      this._id2color[value] = color;
      return value;
    }
    getColorMap() {
      return this._id2color.slice(0);
    }
  };
  var emptyParentScopes = Object.freeze([]);
  var ThemeTrieElementRule = class _ThemeTrieElementRule {
    scopeDepth;
    parentScopes;
    fontStyle;
    foreground;
    background;
    constructor(scopeDepth, parentScopes, fontStyle, foreground, background) {
      this.scopeDepth = scopeDepth;
      this.parentScopes = parentScopes || emptyParentScopes;
      this.fontStyle = fontStyle;
      this.foreground = foreground;
      this.background = background;
    }
    clone() {
      return new _ThemeTrieElementRule(this.scopeDepth, this.parentScopes, this.fontStyle, this.foreground, this.background);
    }
    static cloneArr(arr) {
      let r4 = [];
      for (let i2 = 0, len = arr.length; i2 < len; i2++) {
        r4[i2] = arr[i2].clone();
      }
      return r4;
    }
    acceptOverwrite(scopeDepth, fontStyle, foreground, background) {
      if (this.scopeDepth > scopeDepth) {
        console.log("how did this happen?");
      } else {
        this.scopeDepth = scopeDepth;
      }
      if (fontStyle !== -1) {
        this.fontStyle = fontStyle;
      }
      if (foreground !== 0) {
        this.foreground = foreground;
      }
      if (background !== 0) {
        this.background = background;
      }
    }
  };
  var ThemeTrieElement = class _ThemeTrieElement {
    constructor(_mainRule, rulesWithParentScopes = [], _children = {}) {
      this._mainRule = _mainRule;
      this._children = _children;
      this._rulesWithParentScopes = rulesWithParentScopes;
    }
    _rulesWithParentScopes;
    static _cmpBySpecificity(a2, b3) {
      if (a2.scopeDepth !== b3.scopeDepth) {
        return b3.scopeDepth - a2.scopeDepth;
      }
      let aParentIndex = 0;
      let bParentIndex = 0;
      while (true) {
        if (a2.parentScopes[aParentIndex] === ">") {
          aParentIndex++;
        }
        if (b3.parentScopes[bParentIndex] === ">") {
          bParentIndex++;
        }
        if (aParentIndex >= a2.parentScopes.length || bParentIndex >= b3.parentScopes.length) {
          break;
        }
        const parentScopeLengthDiff = b3.parentScopes[bParentIndex].length - a2.parentScopes[aParentIndex].length;
        if (parentScopeLengthDiff !== 0) {
          return parentScopeLengthDiff;
        }
        aParentIndex++;
        bParentIndex++;
      }
      return b3.parentScopes.length - a2.parentScopes.length;
    }
    match(scope) {
      if (scope !== "") {
        let dotIndex = scope.indexOf(".");
        let head2;
        let tail;
        if (dotIndex === -1) {
          head2 = scope;
          tail = "";
        } else {
          head2 = scope.substring(0, dotIndex);
          tail = scope.substring(dotIndex + 1);
        }
        if (this._children.hasOwnProperty(head2)) {
          return this._children[head2].match(tail);
        }
      }
      const rules = this._rulesWithParentScopes.concat(this._mainRule);
      rules.sort(_ThemeTrieElement._cmpBySpecificity);
      return rules;
    }
    insert(scopeDepth, scope, parentScopes, fontStyle, foreground, background) {
      if (scope === "") {
        this._doInsertHere(scopeDepth, parentScopes, fontStyle, foreground, background);
        return;
      }
      let dotIndex = scope.indexOf(".");
      let head2;
      let tail;
      if (dotIndex === -1) {
        head2 = scope;
        tail = "";
      } else {
        head2 = scope.substring(0, dotIndex);
        tail = scope.substring(dotIndex + 1);
      }
      let child;
      if (this._children.hasOwnProperty(head2)) {
        child = this._children[head2];
      } else {
        child = new _ThemeTrieElement(this._mainRule.clone(), ThemeTrieElementRule.cloneArr(this._rulesWithParentScopes));
        this._children[head2] = child;
      }
      child.insert(scopeDepth + 1, tail, parentScopes, fontStyle, foreground, background);
    }
    _doInsertHere(scopeDepth, parentScopes, fontStyle, foreground, background) {
      if (parentScopes === null) {
        this._mainRule.acceptOverwrite(scopeDepth, fontStyle, foreground, background);
        return;
      }
      for (let i2 = 0, len = this._rulesWithParentScopes.length; i2 < len; i2++) {
        let rule = this._rulesWithParentScopes[i2];
        if (strArrCmp(rule.parentScopes, parentScopes) === 0) {
          rule.acceptOverwrite(scopeDepth, fontStyle, foreground, background);
          return;
        }
      }
      if (fontStyle === -1) {
        fontStyle = this._mainRule.fontStyle;
      }
      if (foreground === 0) {
        foreground = this._mainRule.foreground;
      }
      if (background === 0) {
        background = this._mainRule.background;
      }
      this._rulesWithParentScopes.push(new ThemeTrieElementRule(scopeDepth, parentScopes, fontStyle, foreground, background));
    }
  };
  var EncodedTokenMetadata = class _EncodedTokenMetadata {
    static toBinaryStr(encodedTokenAttributes) {
      return encodedTokenAttributes.toString(2).padStart(32, "0");
    }
    static print(encodedTokenAttributes) {
      const languageId = _EncodedTokenMetadata.getLanguageId(encodedTokenAttributes);
      const tokenType = _EncodedTokenMetadata.getTokenType(encodedTokenAttributes);
      const fontStyle = _EncodedTokenMetadata.getFontStyle(encodedTokenAttributes);
      const foreground = _EncodedTokenMetadata.getForeground(encodedTokenAttributes);
      const background = _EncodedTokenMetadata.getBackground(encodedTokenAttributes);
      console.log({
        languageId,
        tokenType,
        fontStyle,
        foreground,
        background
      });
    }
    static getLanguageId(encodedTokenAttributes) {
      return (encodedTokenAttributes & 255) >>> 0;
    }
    static getTokenType(encodedTokenAttributes) {
      return (encodedTokenAttributes & 768) >>> 8;
    }
    static containsBalancedBrackets(encodedTokenAttributes) {
      return (encodedTokenAttributes & 1024) !== 0;
    }
    static getFontStyle(encodedTokenAttributes) {
      return (encodedTokenAttributes & 30720) >>> 11;
    }
    static getForeground(encodedTokenAttributes) {
      return (encodedTokenAttributes & 16744448) >>> 15;
    }
    static getBackground(encodedTokenAttributes) {
      return (encodedTokenAttributes & 4278190080) >>> 24;
    }
    /**
     * Updates the fields in `metadata`.
     * A value of `0`, `NotSet` or `null` indicates that the corresponding field should be left as is.
     */
    static set(encodedTokenAttributes, languageId, tokenType, containsBalancedBrackets, fontStyle, foreground, background) {
      let _languageId = _EncodedTokenMetadata.getLanguageId(encodedTokenAttributes);
      let _tokenType = _EncodedTokenMetadata.getTokenType(encodedTokenAttributes);
      let _containsBalancedBracketsBit = _EncodedTokenMetadata.containsBalancedBrackets(encodedTokenAttributes) ? 1 : 0;
      let _fontStyle = _EncodedTokenMetadata.getFontStyle(encodedTokenAttributes);
      let _foreground = _EncodedTokenMetadata.getForeground(encodedTokenAttributes);
      let _background = _EncodedTokenMetadata.getBackground(encodedTokenAttributes);
      if (languageId !== 0) {
        _languageId = languageId;
      }
      if (tokenType !== 8) {
        _tokenType = fromOptionalTokenType(tokenType);
      }
      if (containsBalancedBrackets !== null) {
        _containsBalancedBracketsBit = containsBalancedBrackets ? 1 : 0;
      }
      if (fontStyle !== -1) {
        _fontStyle = fontStyle;
      }
      if (foreground !== 0) {
        _foreground = foreground;
      }
      if (background !== 0) {
        _background = background;
      }
      return (_languageId << 0 | _tokenType << 8 | _containsBalancedBracketsBit << 10 | _fontStyle << 11 | _foreground << 15 | _background << 24) >>> 0;
    }
  };
  function toOptionalTokenType(standardType) {
    return standardType;
  }
  function fromOptionalTokenType(standardType) {
    return standardType;
  }
  function createMatchers(selector, matchesName) {
    const results = [];
    const tokenizer = newTokenizer(selector);
    let token2 = tokenizer.next();
    while (token2 !== null) {
      let priority = 0;
      if (token2.length === 2 && token2.charAt(1) === ":") {
        switch (token2.charAt(0)) {
          case "R":
            priority = 1;
            break;
          case "L":
            priority = -1;
            break;
          default:
            console.log(`Unknown priority ${token2} in scope selector`);
        }
        token2 = tokenizer.next();
      }
      let matcher = parseConjunction();
      results.push({ matcher, priority });
      if (token2 !== ",") {
        break;
      }
      token2 = tokenizer.next();
    }
    return results;
    function parseOperand() {
      if (token2 === "-") {
        token2 = tokenizer.next();
        const expressionToNegate = parseOperand();
        return (matcherInput) => !!expressionToNegate && !expressionToNegate(matcherInput);
      }
      if (token2 === "(") {
        token2 = tokenizer.next();
        const expressionInParents = parseInnerExpression();
        if (token2 === ")") {
          token2 = tokenizer.next();
        }
        return expressionInParents;
      }
      if (isIdentifier(token2)) {
        const identifiers = [];
        do {
          identifiers.push(token2);
          token2 = tokenizer.next();
        } while (isIdentifier(token2));
        return (matcherInput) => matchesName(identifiers, matcherInput);
      }
      return null;
    }
    function parseConjunction() {
      const matchers = [];
      let matcher = parseOperand();
      while (matcher) {
        matchers.push(matcher);
        matcher = parseOperand();
      }
      return (matcherInput) => matchers.every((matcher2) => matcher2(matcherInput));
    }
    function parseInnerExpression() {
      const matchers = [];
      let matcher = parseConjunction();
      while (matcher) {
        matchers.push(matcher);
        if (token2 === "|" || token2 === ",") {
          do {
            token2 = tokenizer.next();
          } while (token2 === "|" || token2 === ",");
        } else {
          break;
        }
        matcher = parseConjunction();
      }
      return (matcherInput) => matchers.some((matcher2) => matcher2(matcherInput));
    }
  }
  function isIdentifier(token2) {
    return !!token2 && !!token2.match(/[\w\.:]+/);
  }
  function newTokenizer(input) {
    let regex = /([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g;
    let match = regex.exec(input);
    return {
      next: () => {
        if (!match) {
          return null;
        }
        const res = match[0];
        match = regex.exec(input);
        return res;
      }
    };
  }
  function disposeOnigString(str) {
    if (typeof str.dispose === "function") {
      str.dispose();
    }
  }
  var TopLevelRuleReference = class {
    constructor(scopeName) {
      this.scopeName = scopeName;
    }
    toKey() {
      return this.scopeName;
    }
  };
  var TopLevelRepositoryRuleReference = class {
    constructor(scopeName, ruleName) {
      this.scopeName = scopeName;
      this.ruleName = ruleName;
    }
    toKey() {
      return `${this.scopeName}#${this.ruleName}`;
    }
  };
  var ExternalReferenceCollector = class {
    _references = [];
    _seenReferenceKeys = /* @__PURE__ */ new Set();
    get references() {
      return this._references;
    }
    visitedRule = /* @__PURE__ */ new Set();
    add(reference) {
      const key2 = reference.toKey();
      if (this._seenReferenceKeys.has(key2)) {
        return;
      }
      this._seenReferenceKeys.add(key2);
      this._references.push(reference);
    }
  };
  var ScopeDependencyProcessor = class {
    constructor(repo, initialScopeName) {
      this.repo = repo;
      this.initialScopeName = initialScopeName;
      this.seenFullScopeRequests.add(this.initialScopeName);
      this.Q = [new TopLevelRuleReference(this.initialScopeName)];
    }
    seenFullScopeRequests = /* @__PURE__ */ new Set();
    seenPartialScopeRequests = /* @__PURE__ */ new Set();
    Q;
    processQueue() {
      const q2 = this.Q;
      this.Q = [];
      const deps = new ExternalReferenceCollector();
      for (const dep of q2) {
        collectReferencesOfReference(dep, this.initialScopeName, this.repo, deps);
      }
      for (const dep of deps.references) {
        if (dep instanceof TopLevelRuleReference) {
          if (this.seenFullScopeRequests.has(dep.scopeName)) {
            continue;
          }
          this.seenFullScopeRequests.add(dep.scopeName);
          this.Q.push(dep);
        } else {
          if (this.seenFullScopeRequests.has(dep.scopeName)) {
            continue;
          }
          if (this.seenPartialScopeRequests.has(dep.toKey())) {
            continue;
          }
          this.seenPartialScopeRequests.add(dep.toKey());
          this.Q.push(dep);
        }
      }
    }
  };
  function collectReferencesOfReference(reference, baseGrammarScopeName, repo, result) {
    const selfGrammar = repo.lookup(reference.scopeName);
    if (!selfGrammar) {
      if (reference.scopeName === baseGrammarScopeName) {
        throw new Error(`No grammar provided for <${baseGrammarScopeName}>`);
      }
      return;
    }
    const baseGrammar = repo.lookup(baseGrammarScopeName);
    if (reference instanceof TopLevelRuleReference) {
      collectExternalReferencesInTopLevelRule({ baseGrammar, selfGrammar }, result);
    } else {
      collectExternalReferencesInTopLevelRepositoryRule(
        reference.ruleName,
        { baseGrammar, selfGrammar, repository: selfGrammar.repository },
        result
      );
    }
    const injections = repo.injections(reference.scopeName);
    if (injections) {
      for (const injection of injections) {
        result.add(new TopLevelRuleReference(injection));
      }
    }
  }
  function collectExternalReferencesInTopLevelRepositoryRule(ruleName, context, result) {
    if (context.repository && context.repository[ruleName]) {
      const rule = context.repository[ruleName];
      collectExternalReferencesInRules([rule], context, result);
    }
  }
  function collectExternalReferencesInTopLevelRule(context, result) {
    if (context.selfGrammar.patterns && Array.isArray(context.selfGrammar.patterns)) {
      collectExternalReferencesInRules(
        context.selfGrammar.patterns,
        { ...context, repository: context.selfGrammar.repository },
        result
      );
    }
    if (context.selfGrammar.injections) {
      collectExternalReferencesInRules(
        Object.values(context.selfGrammar.injections),
        { ...context, repository: context.selfGrammar.repository },
        result
      );
    }
  }
  function collectExternalReferencesInRules(rules, context, result) {
    for (const rule of rules) {
      if (result.visitedRule.has(rule)) {
        continue;
      }
      result.visitedRule.add(rule);
      const patternRepository = rule.repository ? mergeObjects({}, context.repository, rule.repository) : context.repository;
      if (Array.isArray(rule.patterns)) {
        collectExternalReferencesInRules(rule.patterns, { ...context, repository: patternRepository }, result);
      }
      const include = rule.include;
      if (!include) {
        continue;
      }
      const reference = parseInclude(include);
      switch (reference.kind) {
        case 0:
          collectExternalReferencesInTopLevelRule({ ...context, selfGrammar: context.baseGrammar }, result);
          break;
        case 1:
          collectExternalReferencesInTopLevelRule(context, result);
          break;
        case 2:
          collectExternalReferencesInTopLevelRepositoryRule(reference.ruleName, { ...context, repository: patternRepository }, result);
          break;
        case 3:
        case 4:
          const selfGrammar = reference.scopeName === context.selfGrammar.scopeName ? context.selfGrammar : reference.scopeName === context.baseGrammar.scopeName ? context.baseGrammar : void 0;
          if (selfGrammar) {
            const newContext = { baseGrammar: context.baseGrammar, selfGrammar, repository: patternRepository };
            if (reference.kind === 4) {
              collectExternalReferencesInTopLevelRepositoryRule(reference.ruleName, newContext, result);
            } else {
              collectExternalReferencesInTopLevelRule(newContext, result);
            }
          } else {
            if (reference.kind === 4) {
              result.add(new TopLevelRepositoryRuleReference(reference.scopeName, reference.ruleName));
            } else {
              result.add(new TopLevelRuleReference(reference.scopeName));
            }
          }
          break;
      }
    }
  }
  var BaseReference = class {
    kind = 0;
  };
  var SelfReference = class {
    kind = 1;
  };
  var RelativeReference = class {
    constructor(ruleName) {
      this.ruleName = ruleName;
    }
    kind = 2;
  };
  var TopLevelReference = class {
    constructor(scopeName) {
      this.scopeName = scopeName;
    }
    kind = 3;
  };
  var TopLevelRepositoryReference = class {
    constructor(scopeName, ruleName) {
      this.scopeName = scopeName;
      this.ruleName = ruleName;
    }
    kind = 4;
  };
  function parseInclude(include) {
    if (include === "$base") {
      return new BaseReference();
    } else if (include === "$self") {
      return new SelfReference();
    }
    const indexOfSharp = include.indexOf("#");
    if (indexOfSharp === -1) {
      return new TopLevelReference(include);
    } else if (indexOfSharp === 0) {
      return new RelativeReference(include.substring(1));
    } else {
      const scopeName = include.substring(0, indexOfSharp);
      const ruleName = include.substring(indexOfSharp + 1);
      return new TopLevelRepositoryReference(scopeName, ruleName);
    }
  }
  var HAS_BACK_REFERENCES = /\\(\d+)/;
  var BACK_REFERENCING_END = /\\(\d+)/g;
  var ruleIdSymbol = Symbol("RuleId");
  var endRuleId = -1;
  var whileRuleId = -2;
  function ruleIdFromNumber(id) {
    return id;
  }
  function ruleIdToNumber(id) {
    return id;
  }
  var Rule = class {
    $location;
    id;
    _nameIsCapturing;
    _name;
    _contentNameIsCapturing;
    _contentName;
    constructor($location, id, name, contentName) {
      this.$location = $location;
      this.id = id;
      this._name = name || null;
      this._nameIsCapturing = RegexSource.hasCaptures(this._name);
      this._contentName = contentName || null;
      this._contentNameIsCapturing = RegexSource.hasCaptures(this._contentName);
    }
    get debugName() {
      const location = this.$location ? `${basename(this.$location.filename)}:${this.$location.line}` : "unknown";
      return `${this.constructor.name}#${this.id} @ ${location}`;
    }
    getName(lineText, captureIndices) {
      if (!this._nameIsCapturing || this._name === null || lineText === null || captureIndices === null) {
        return this._name;
      }
      return RegexSource.replaceCaptures(this._name, lineText, captureIndices);
    }
    getContentName(lineText, captureIndices) {
      if (!this._contentNameIsCapturing || this._contentName === null) {
        return this._contentName;
      }
      return RegexSource.replaceCaptures(this._contentName, lineText, captureIndices);
    }
  };
  var CaptureRule = class extends Rule {
    retokenizeCapturedWithRuleId;
    constructor($location, id, name, contentName, retokenizeCapturedWithRuleId) {
      super($location, id, name, contentName);
      this.retokenizeCapturedWithRuleId = retokenizeCapturedWithRuleId;
    }
    dispose() {
    }
    collectPatterns(grammar, out) {
      throw new Error("Not supported!");
    }
    compile(grammar, endRegexSource) {
      throw new Error("Not supported!");
    }
    compileAG(grammar, endRegexSource, allowA, allowG) {
      throw new Error("Not supported!");
    }
  };
  var MatchRule = class extends Rule {
    _match;
    captures;
    _cachedCompiledPatterns;
    constructor($location, id, name, match, captures) {
      super($location, id, name, null);
      this._match = new RegExpSource(match, this.id);
      this.captures = captures;
      this._cachedCompiledPatterns = null;
    }
    dispose() {
      if (this._cachedCompiledPatterns) {
        this._cachedCompiledPatterns.dispose();
        this._cachedCompiledPatterns = null;
      }
    }
    get debugMatchRegExp() {
      return `${this._match.source}`;
    }
    collectPatterns(grammar, out) {
      out.push(this._match);
    }
    compile(grammar, endRegexSource) {
      return this._getCachedCompiledPatterns(grammar).compile(grammar);
    }
    compileAG(grammar, endRegexSource, allowA, allowG) {
      return this._getCachedCompiledPatterns(grammar).compileAG(grammar, allowA, allowG);
    }
    _getCachedCompiledPatterns(grammar) {
      if (!this._cachedCompiledPatterns) {
        this._cachedCompiledPatterns = new RegExpSourceList();
        this.collectPatterns(grammar, this._cachedCompiledPatterns);
      }
      return this._cachedCompiledPatterns;
    }
  };
  var IncludeOnlyRule = class extends Rule {
    hasMissingPatterns;
    patterns;
    _cachedCompiledPatterns;
    constructor($location, id, name, contentName, patterns) {
      super($location, id, name, contentName);
      this.patterns = patterns.patterns;
      this.hasMissingPatterns = patterns.hasMissingPatterns;
      this._cachedCompiledPatterns = null;
    }
    dispose() {
      if (this._cachedCompiledPatterns) {
        this._cachedCompiledPatterns.dispose();
        this._cachedCompiledPatterns = null;
      }
    }
    collectPatterns(grammar, out) {
      for (const pattern of this.patterns) {
        const rule = grammar.getRule(pattern);
        rule.collectPatterns(grammar, out);
      }
    }
    compile(grammar, endRegexSource) {
      return this._getCachedCompiledPatterns(grammar).compile(grammar);
    }
    compileAG(grammar, endRegexSource, allowA, allowG) {
      return this._getCachedCompiledPatterns(grammar).compileAG(grammar, allowA, allowG);
    }
    _getCachedCompiledPatterns(grammar) {
      if (!this._cachedCompiledPatterns) {
        this._cachedCompiledPatterns = new RegExpSourceList();
        this.collectPatterns(grammar, this._cachedCompiledPatterns);
      }
      return this._cachedCompiledPatterns;
    }
  };
  var BeginEndRule = class extends Rule {
    _begin;
    beginCaptures;
    _end;
    endHasBackReferences;
    endCaptures;
    applyEndPatternLast;
    hasMissingPatterns;
    patterns;
    _cachedCompiledPatterns;
    constructor($location, id, name, contentName, begin, beginCaptures, end, endCaptures, applyEndPatternLast, patterns) {
      super($location, id, name, contentName);
      this._begin = new RegExpSource(begin, this.id);
      this.beginCaptures = beginCaptures;
      this._end = new RegExpSource(end ? end : "\uFFFF", -1);
      this.endHasBackReferences = this._end.hasBackReferences;
      this.endCaptures = endCaptures;
      this.applyEndPatternLast = applyEndPatternLast || false;
      this.patterns = patterns.patterns;
      this.hasMissingPatterns = patterns.hasMissingPatterns;
      this._cachedCompiledPatterns = null;
    }
    dispose() {
      if (this._cachedCompiledPatterns) {
        this._cachedCompiledPatterns.dispose();
        this._cachedCompiledPatterns = null;
      }
    }
    get debugBeginRegExp() {
      return `${this._begin.source}`;
    }
    get debugEndRegExp() {
      return `${this._end.source}`;
    }
    getEndWithResolvedBackReferences(lineText, captureIndices) {
      return this._end.resolveBackReferences(lineText, captureIndices);
    }
    collectPatterns(grammar, out) {
      out.push(this._begin);
    }
    compile(grammar, endRegexSource) {
      return this._getCachedCompiledPatterns(grammar, endRegexSource).compile(grammar);
    }
    compileAG(grammar, endRegexSource, allowA, allowG) {
      return this._getCachedCompiledPatterns(grammar, endRegexSource).compileAG(grammar, allowA, allowG);
    }
    _getCachedCompiledPatterns(grammar, endRegexSource) {
      if (!this._cachedCompiledPatterns) {
        this._cachedCompiledPatterns = new RegExpSourceList();
        for (const pattern of this.patterns) {
          const rule = grammar.getRule(pattern);
          rule.collectPatterns(grammar, this._cachedCompiledPatterns);
        }
        if (this.applyEndPatternLast) {
          this._cachedCompiledPatterns.push(this._end.hasBackReferences ? this._end.clone() : this._end);
        } else {
          this._cachedCompiledPatterns.unshift(this._end.hasBackReferences ? this._end.clone() : this._end);
        }
      }
      if (this._end.hasBackReferences) {
        if (this.applyEndPatternLast) {
          this._cachedCompiledPatterns.setSource(this._cachedCompiledPatterns.length() - 1, endRegexSource);
        } else {
          this._cachedCompiledPatterns.setSource(0, endRegexSource);
        }
      }
      return this._cachedCompiledPatterns;
    }
  };
  var BeginWhileRule = class extends Rule {
    _begin;
    beginCaptures;
    whileCaptures;
    _while;
    whileHasBackReferences;
    hasMissingPatterns;
    patterns;
    _cachedCompiledPatterns;
    _cachedCompiledWhilePatterns;
    constructor($location, id, name, contentName, begin, beginCaptures, _while, whileCaptures, patterns) {
      super($location, id, name, contentName);
      this._begin = new RegExpSource(begin, this.id);
      this.beginCaptures = beginCaptures;
      this.whileCaptures = whileCaptures;
      this._while = new RegExpSource(_while, whileRuleId);
      this.whileHasBackReferences = this._while.hasBackReferences;
      this.patterns = patterns.patterns;
      this.hasMissingPatterns = patterns.hasMissingPatterns;
      this._cachedCompiledPatterns = null;
      this._cachedCompiledWhilePatterns = null;
    }
    dispose() {
      if (this._cachedCompiledPatterns) {
        this._cachedCompiledPatterns.dispose();
        this._cachedCompiledPatterns = null;
      }
      if (this._cachedCompiledWhilePatterns) {
        this._cachedCompiledWhilePatterns.dispose();
        this._cachedCompiledWhilePatterns = null;
      }
    }
    get debugBeginRegExp() {
      return `${this._begin.source}`;
    }
    get debugWhileRegExp() {
      return `${this._while.source}`;
    }
    getWhileWithResolvedBackReferences(lineText, captureIndices) {
      return this._while.resolveBackReferences(lineText, captureIndices);
    }
    collectPatterns(grammar, out) {
      out.push(this._begin);
    }
    compile(grammar, endRegexSource) {
      return this._getCachedCompiledPatterns(grammar).compile(grammar);
    }
    compileAG(grammar, endRegexSource, allowA, allowG) {
      return this._getCachedCompiledPatterns(grammar).compileAG(grammar, allowA, allowG);
    }
    _getCachedCompiledPatterns(grammar) {
      if (!this._cachedCompiledPatterns) {
        this._cachedCompiledPatterns = new RegExpSourceList();
        for (const pattern of this.patterns) {
          const rule = grammar.getRule(pattern);
          rule.collectPatterns(grammar, this._cachedCompiledPatterns);
        }
      }
      return this._cachedCompiledPatterns;
    }
    compileWhile(grammar, endRegexSource) {
      return this._getCachedCompiledWhilePatterns(grammar, endRegexSource).compile(grammar);
    }
    compileWhileAG(grammar, endRegexSource, allowA, allowG) {
      return this._getCachedCompiledWhilePatterns(grammar, endRegexSource).compileAG(grammar, allowA, allowG);
    }
    _getCachedCompiledWhilePatterns(grammar, endRegexSource) {
      if (!this._cachedCompiledWhilePatterns) {
        this._cachedCompiledWhilePatterns = new RegExpSourceList();
        this._cachedCompiledWhilePatterns.push(this._while.hasBackReferences ? this._while.clone() : this._while);
      }
      if (this._while.hasBackReferences) {
        this._cachedCompiledWhilePatterns.setSource(0, endRegexSource ? endRegexSource : "\uFFFF");
      }
      return this._cachedCompiledWhilePatterns;
    }
  };
  var RuleFactory = class _RuleFactory {
    static createCaptureRule(helper, $location, name, contentName, retokenizeCapturedWithRuleId) {
      return helper.registerRule((id) => {
        return new CaptureRule($location, id, name, contentName, retokenizeCapturedWithRuleId);
      });
    }
    static getCompiledRuleId(desc, helper, repository) {
      if (!desc.id) {
        helper.registerRule((id) => {
          desc.id = id;
          if (desc.match) {
            return new MatchRule(
              desc.$vscodeTextmateLocation,
              desc.id,
              desc.name,
              desc.match,
              _RuleFactory._compileCaptures(desc.captures, helper, repository)
            );
          }
          if (typeof desc.begin === "undefined") {
            if (desc.repository) {
              repository = mergeObjects({}, repository, desc.repository);
            }
            let patterns = desc.patterns;
            if (typeof patterns === "undefined" && desc.include) {
              patterns = [{ include: desc.include }];
            }
            return new IncludeOnlyRule(
              desc.$vscodeTextmateLocation,
              desc.id,
              desc.name,
              desc.contentName,
              _RuleFactory._compilePatterns(patterns, helper, repository)
            );
          }
          if (desc.while) {
            return new BeginWhileRule(
              desc.$vscodeTextmateLocation,
              desc.id,
              desc.name,
              desc.contentName,
              desc.begin,
              _RuleFactory._compileCaptures(desc.beginCaptures || desc.captures, helper, repository),
              desc.while,
              _RuleFactory._compileCaptures(desc.whileCaptures || desc.captures, helper, repository),
              _RuleFactory._compilePatterns(desc.patterns, helper, repository)
            );
          }
          return new BeginEndRule(
            desc.$vscodeTextmateLocation,
            desc.id,
            desc.name,
            desc.contentName,
            desc.begin,
            _RuleFactory._compileCaptures(desc.beginCaptures || desc.captures, helper, repository),
            desc.end,
            _RuleFactory._compileCaptures(desc.endCaptures || desc.captures, helper, repository),
            desc.applyEndPatternLast,
            _RuleFactory._compilePatterns(desc.patterns, helper, repository)
          );
        });
      }
      return desc.id;
    }
    static _compileCaptures(captures, helper, repository) {
      let r4 = [];
      if (captures) {
        let maximumCaptureId = 0;
        for (const captureId in captures) {
          if (captureId === "$vscodeTextmateLocation") {
            continue;
          }
          const numericCaptureId = parseInt(captureId, 10);
          if (numericCaptureId > maximumCaptureId) {
            maximumCaptureId = numericCaptureId;
          }
        }
        for (let i2 = 0; i2 <= maximumCaptureId; i2++) {
          r4[i2] = null;
        }
        for (const captureId in captures) {
          if (captureId === "$vscodeTextmateLocation") {
            continue;
          }
          const numericCaptureId = parseInt(captureId, 10);
          let retokenizeCapturedWithRuleId = 0;
          if (captures[captureId].patterns) {
            retokenizeCapturedWithRuleId = _RuleFactory.getCompiledRuleId(captures[captureId], helper, repository);
          }
          r4[numericCaptureId] = _RuleFactory.createCaptureRule(helper, captures[captureId].$vscodeTextmateLocation, captures[captureId].name, captures[captureId].contentName, retokenizeCapturedWithRuleId);
        }
      }
      return r4;
    }
    static _compilePatterns(patterns, helper, repository) {
      let r4 = [];
      if (patterns) {
        for (let i2 = 0, len = patterns.length; i2 < len; i2++) {
          const pattern = patterns[i2];
          let ruleId = -1;
          if (pattern.include) {
            const reference = parseInclude(pattern.include);
            switch (reference.kind) {
              case 0:
              case 1:
                ruleId = _RuleFactory.getCompiledRuleId(repository[pattern.include], helper, repository);
                break;
              case 2:
                let localIncludedRule = repository[reference.ruleName];
                if (localIncludedRule) {
                  ruleId = _RuleFactory.getCompiledRuleId(localIncludedRule, helper, repository);
                } else {
                }
                break;
              case 3:
              case 4:
                const externalGrammarName = reference.scopeName;
                const externalGrammarInclude = reference.kind === 4 ? reference.ruleName : null;
                const externalGrammar = helper.getExternalGrammar(externalGrammarName, repository);
                if (externalGrammar) {
                  if (externalGrammarInclude) {
                    let externalIncludedRule = externalGrammar.repository[externalGrammarInclude];
                    if (externalIncludedRule) {
                      ruleId = _RuleFactory.getCompiledRuleId(externalIncludedRule, helper, externalGrammar.repository);
                    } else {
                    }
                  } else {
                    ruleId = _RuleFactory.getCompiledRuleId(externalGrammar.repository.$self, helper, externalGrammar.repository);
                  }
                } else {
                }
                break;
            }
          } else {
            ruleId = _RuleFactory.getCompiledRuleId(pattern, helper, repository);
          }
          if (ruleId !== -1) {
            const rule = helper.getRule(ruleId);
            let skipRule = false;
            if (rule instanceof IncludeOnlyRule || rule instanceof BeginEndRule || rule instanceof BeginWhileRule) {
              if (rule.hasMissingPatterns && rule.patterns.length === 0) {
                skipRule = true;
              }
            }
            if (skipRule) {
              continue;
            }
            r4.push(ruleId);
          }
        }
      }
      return {
        patterns: r4,
        hasMissingPatterns: (patterns ? patterns.length : 0) !== r4.length
      };
    }
  };
  var RegExpSource = class _RegExpSource {
    source;
    ruleId;
    hasAnchor;
    hasBackReferences;
    _anchorCache;
    constructor(regExpSource, ruleId) {
      if (regExpSource && typeof regExpSource === "string") {
        const len = regExpSource.length;
        let lastPushedPos = 0;
        let output = [];
        let hasAnchor = false;
        for (let pos = 0; pos < len; pos++) {
          const ch = regExpSource.charAt(pos);
          if (ch === "\\") {
            if (pos + 1 < len) {
              const nextCh = regExpSource.charAt(pos + 1);
              if (nextCh === "z") {
                output.push(regExpSource.substring(lastPushedPos, pos));
                output.push("$(?!\\n)(?<!\\n)");
                lastPushedPos = pos + 2;
              } else if (nextCh === "A" || nextCh === "G") {
                hasAnchor = true;
              }
              pos++;
            }
          }
        }
        this.hasAnchor = hasAnchor;
        if (lastPushedPos === 0) {
          this.source = regExpSource;
        } else {
          output.push(regExpSource.substring(lastPushedPos, len));
          this.source = output.join("");
        }
      } else {
        this.hasAnchor = false;
        this.source = regExpSource;
      }
      if (this.hasAnchor) {
        this._anchorCache = this._buildAnchorCache();
      } else {
        this._anchorCache = null;
      }
      this.ruleId = ruleId;
      if (typeof this.source === "string") {
        this.hasBackReferences = HAS_BACK_REFERENCES.test(this.source);
      } else {
        this.hasBackReferences = false;
      }
    }
    clone() {
      return new _RegExpSource(this.source, this.ruleId);
    }
    setSource(newSource) {
      if (this.source === newSource) {
        return;
      }
      this.source = newSource;
      if (this.hasAnchor) {
        this._anchorCache = this._buildAnchorCache();
      }
    }
    resolveBackReferences(lineText, captureIndices) {
      if (typeof this.source !== "string") {
        throw new Error("This method should only be called if the source is a string");
      }
      let capturedValues = captureIndices.map((capture) => {
        return lineText.substring(capture.start, capture.end);
      });
      BACK_REFERENCING_END.lastIndex = 0;
      return this.source.replace(BACK_REFERENCING_END, (match, g1) => {
        return escapeRegExpCharacters(capturedValues[parseInt(g1, 10)] || "");
      });
    }
    _buildAnchorCache() {
      if (typeof this.source !== "string") {
        throw new Error("This method should only be called if the source is a string");
      }
      let A0_G0_result = [];
      let A0_G1_result = [];
      let A1_G0_result = [];
      let A1_G1_result = [];
      let pos, len, ch, nextCh;
      for (pos = 0, len = this.source.length; pos < len; pos++) {
        ch = this.source.charAt(pos);
        A0_G0_result[pos] = ch;
        A0_G1_result[pos] = ch;
        A1_G0_result[pos] = ch;
        A1_G1_result[pos] = ch;
        if (ch === "\\") {
          if (pos + 1 < len) {
            nextCh = this.source.charAt(pos + 1);
            if (nextCh === "A") {
              A0_G0_result[pos + 1] = "\uFFFF";
              A0_G1_result[pos + 1] = "\uFFFF";
              A1_G0_result[pos + 1] = "A";
              A1_G1_result[pos + 1] = "A";
            } else if (nextCh === "G") {
              A0_G0_result[pos + 1] = "\uFFFF";
              A0_G1_result[pos + 1] = "G";
              A1_G0_result[pos + 1] = "\uFFFF";
              A1_G1_result[pos + 1] = "G";
            } else {
              A0_G0_result[pos + 1] = nextCh;
              A0_G1_result[pos + 1] = nextCh;
              A1_G0_result[pos + 1] = nextCh;
              A1_G1_result[pos + 1] = nextCh;
            }
            pos++;
          }
        }
      }
      return {
        A0_G0: A0_G0_result.join(""),
        A0_G1: A0_G1_result.join(""),
        A1_G0: A1_G0_result.join(""),
        A1_G1: A1_G1_result.join("")
      };
    }
    resolveAnchors(allowA, allowG) {
      if (!this.hasAnchor || !this._anchorCache || typeof this.source !== "string") {
        return this.source;
      }
      if (allowA) {
        if (allowG) {
          return this._anchorCache.A1_G1;
        } else {
          return this._anchorCache.A1_G0;
        }
      } else {
        if (allowG) {
          return this._anchorCache.A0_G1;
        } else {
          return this._anchorCache.A0_G0;
        }
      }
    }
  };
  var RegExpSourceList = class {
    _items;
    _hasAnchors;
    _cached;
    _anchorCache;
    constructor() {
      this._items = [];
      this._hasAnchors = false;
      this._cached = null;
      this._anchorCache = {
        A0_G0: null,
        A0_G1: null,
        A1_G0: null,
        A1_G1: null
      };
    }
    dispose() {
      this._disposeCaches();
    }
    _disposeCaches() {
      if (this._cached) {
        this._cached.dispose();
        this._cached = null;
      }
      if (this._anchorCache.A0_G0) {
        this._anchorCache.A0_G0.dispose();
        this._anchorCache.A0_G0 = null;
      }
      if (this._anchorCache.A0_G1) {
        this._anchorCache.A0_G1.dispose();
        this._anchorCache.A0_G1 = null;
      }
      if (this._anchorCache.A1_G0) {
        this._anchorCache.A1_G0.dispose();
        this._anchorCache.A1_G0 = null;
      }
      if (this._anchorCache.A1_G1) {
        this._anchorCache.A1_G1.dispose();
        this._anchorCache.A1_G1 = null;
      }
    }
    push(item) {
      this._items.push(item);
      this._hasAnchors = this._hasAnchors || item.hasAnchor;
    }
    unshift(item) {
      this._items.unshift(item);
      this._hasAnchors = this._hasAnchors || item.hasAnchor;
    }
    length() {
      return this._items.length;
    }
    setSource(index, newSource) {
      if (this._items[index].source !== newSource) {
        this._disposeCaches();
        this._items[index].setSource(newSource);
      }
    }
    compile(onigLib) {
      if (!this._cached) {
        let regExps = this._items.map((e) => e.source);
        this._cached = new CompiledRule(onigLib, regExps, this._items.map((e) => e.ruleId));
      }
      return this._cached;
    }
    compileAG(onigLib, allowA, allowG) {
      if (!this._hasAnchors) {
        return this.compile(onigLib);
      } else {
        if (allowA) {
          if (allowG) {
            if (!this._anchorCache.A1_G1) {
              this._anchorCache.A1_G1 = this._resolveAnchors(onigLib, allowA, allowG);
            }
            return this._anchorCache.A1_G1;
          } else {
            if (!this._anchorCache.A1_G0) {
              this._anchorCache.A1_G0 = this._resolveAnchors(onigLib, allowA, allowG);
            }
            return this._anchorCache.A1_G0;
          }
        } else {
          if (allowG) {
            if (!this._anchorCache.A0_G1) {
              this._anchorCache.A0_G1 = this._resolveAnchors(onigLib, allowA, allowG);
            }
            return this._anchorCache.A0_G1;
          } else {
            if (!this._anchorCache.A0_G0) {
              this._anchorCache.A0_G0 = this._resolveAnchors(onigLib, allowA, allowG);
            }
            return this._anchorCache.A0_G0;
          }
        }
      }
    }
    _resolveAnchors(onigLib, allowA, allowG) {
      let regExps = this._items.map((e) => e.resolveAnchors(allowA, allowG));
      return new CompiledRule(onigLib, regExps, this._items.map((e) => e.ruleId));
    }
  };
  var CompiledRule = class {
    constructor(onigLib, regExps, rules) {
      this.regExps = regExps;
      this.rules = rules;
      this.scanner = onigLib.createOnigScanner(regExps);
    }
    scanner;
    dispose() {
      if (typeof this.scanner.dispose === "function") {
        this.scanner.dispose();
      }
    }
    toString() {
      const r4 = [];
      for (let i2 = 0, len = this.rules.length; i2 < len; i2++) {
        r4.push("   - " + this.rules[i2] + ": " + this.regExps[i2]);
      }
      return r4.join("\n");
    }
    findNextMatchSync(string, startPosition, options) {
      const result = this.scanner.findNextMatchSync(string, startPosition, options);
      if (!result) {
        return null;
      }
      return {
        ruleId: this.rules[result.index],
        captureIndices: result.captureIndices
      };
    }
  };
  var BasicScopeAttributes = class {
    constructor(languageId, tokenType) {
      this.languageId = languageId;
      this.tokenType = tokenType;
    }
  };
  var BasicScopeAttributesProvider = class _BasicScopeAttributesProvider {
    _defaultAttributes;
    _embeddedLanguagesMatcher;
    constructor(initialLanguageId, embeddedLanguages) {
      this._defaultAttributes = new BasicScopeAttributes(
        initialLanguageId,
        8
        /* NotSet */
      );
      this._embeddedLanguagesMatcher = new ScopeMatcher(Object.entries(embeddedLanguages || {}));
    }
    getDefaultAttributes() {
      return this._defaultAttributes;
    }
    getBasicScopeAttributes(scopeName) {
      if (scopeName === null) {
        return _BasicScopeAttributesProvider._NULL_SCOPE_METADATA;
      }
      return this._getBasicScopeAttributes.get(scopeName);
    }
    static _NULL_SCOPE_METADATA = new BasicScopeAttributes(0, 0);
    _getBasicScopeAttributes = new CachedFn((scopeName) => {
      const languageId = this._scopeToLanguage(scopeName);
      const standardTokenType = this._toStandardTokenType(scopeName);
      return new BasicScopeAttributes(languageId, standardTokenType);
    });
    /**
     * Given a produced TM scope, return the language that token describes or null if unknown.
     * e.g. source.html => html, source.css.embedded.html => css, punctuation.definition.tag.html => null
     */
    _scopeToLanguage(scope) {
      return this._embeddedLanguagesMatcher.match(scope) || 0;
    }
    _toStandardTokenType(scopeName) {
      const m3 = scopeName.match(_BasicScopeAttributesProvider.STANDARD_TOKEN_TYPE_REGEXP);
      if (!m3) {
        return 8;
      }
      switch (m3[1]) {
        case "comment":
          return 1;
        case "string":
          return 2;
        case "regex":
          return 3;
        case "meta.embedded":
          return 0;
      }
      throw new Error("Unexpected match for standard token type!");
    }
    static STANDARD_TOKEN_TYPE_REGEXP = /\b(comment|string|regex|meta\.embedded)\b/;
  };
  var ScopeMatcher = class {
    values;
    scopesRegExp;
    constructor(values) {
      if (values.length === 0) {
        this.values = null;
        this.scopesRegExp = null;
      } else {
        this.values = new Map(values);
        const escapedScopes = values.map(
          ([scopeName, value]) => escapeRegExpCharacters(scopeName)
        );
        escapedScopes.sort();
        escapedScopes.reverse();
        this.scopesRegExp = new RegExp(
          `^((${escapedScopes.join(")|(")}))($|\\.)`,
          ""
        );
      }
    }
    match(scope) {
      if (!this.scopesRegExp) {
        return void 0;
      }
      const m3 = scope.match(this.scopesRegExp);
      if (!m3) {
        return void 0;
      }
      return this.values.get(m3[1]);
    }
  };
  var DebugFlags = {
    InDebugMode: typeof process !== "undefined" && !!process.env["VSCODE_TEXTMATE_DEBUG"]
  };
  var UseOnigurumaFindOptions = false;
  var TokenizeStringResult = class {
    constructor(stack, stoppedEarly) {
      this.stack = stack;
      this.stoppedEarly = stoppedEarly;
    }
  };
  function _tokenizeString(grammar, lineText, isFirstLine, linePos, stack, lineTokens, checkWhileConditions, timeLimit) {
    const lineLength = lineText.content.length;
    let STOP = false;
    let anchorPosition = -1;
    if (checkWhileConditions) {
      const whileCheckResult = _checkWhileConditions(
        grammar,
        lineText,
        isFirstLine,
        linePos,
        stack,
        lineTokens
      );
      stack = whileCheckResult.stack;
      linePos = whileCheckResult.linePos;
      isFirstLine = whileCheckResult.isFirstLine;
      anchorPosition = whileCheckResult.anchorPosition;
    }
    const startTime = Date.now();
    while (!STOP) {
      if (timeLimit !== 0) {
        const elapsedTime = Date.now() - startTime;
        if (elapsedTime > timeLimit) {
          return new TokenizeStringResult(stack, true);
        }
      }
      scanNext();
    }
    return new TokenizeStringResult(stack, false);
    function scanNext() {
      if (false) {
        console.log("");
        console.log(
          `@@scanNext ${linePos}: |${lineText.content.substr(linePos).replace(/\n$/, "\\n")}|`
        );
      }
      const r4 = matchRuleOrInjections(
        grammar,
        lineText,
        isFirstLine,
        linePos,
        stack,
        anchorPosition
      );
      if (!r4) {
        lineTokens.produce(stack, lineLength);
        STOP = true;
        return;
      }
      const captureIndices = r4.captureIndices;
      const matchedRuleId = r4.matchedRuleId;
      const hasAdvanced = captureIndices && captureIndices.length > 0 ? captureIndices[0].end > linePos : false;
      if (matchedRuleId === endRuleId) {
        const poppedRule = stack.getRule(grammar);
        if (false) {
          console.log(
            "  popping " + poppedRule.debugName + " - " + poppedRule.debugEndRegExp
          );
        }
        lineTokens.produce(stack, captureIndices[0].start);
        stack = stack.withContentNameScopesList(stack.nameScopesList);
        handleCaptures(
          grammar,
          lineText,
          isFirstLine,
          stack,
          lineTokens,
          poppedRule.endCaptures,
          captureIndices
        );
        lineTokens.produce(stack, captureIndices[0].end);
        const popped = stack;
        stack = stack.parent;
        anchorPosition = popped.getAnchorPos();
        if (!hasAdvanced && popped.getEnterPos() === linePos) {
          if (false) {
            console.error(
              "[1] - Grammar is in an endless loop - Grammar pushed & popped a rule without advancing"
            );
          }
          stack = popped;
          lineTokens.produce(stack, lineLength);
          STOP = true;
          return;
        }
      } else {
        const _rule = grammar.getRule(matchedRuleId);
        lineTokens.produce(stack, captureIndices[0].start);
        const beforePush = stack;
        const scopeName = _rule.getName(lineText.content, captureIndices);
        const nameScopesList = stack.contentNameScopesList.pushAttributed(
          scopeName,
          grammar
        );
        stack = stack.push(
          matchedRuleId,
          linePos,
          anchorPosition,
          captureIndices[0].end === lineLength,
          null,
          nameScopesList,
          nameScopesList
        );
        if (_rule instanceof BeginEndRule) {
          const pushedRule = _rule;
          if (false) {
            console.log(
              "  pushing " + pushedRule.debugName + " - " + pushedRule.debugBeginRegExp
            );
          }
          handleCaptures(
            grammar,
            lineText,
            isFirstLine,
            stack,
            lineTokens,
            pushedRule.beginCaptures,
            captureIndices
          );
          lineTokens.produce(stack, captureIndices[0].end);
          anchorPosition = captureIndices[0].end;
          const contentName = pushedRule.getContentName(
            lineText.content,
            captureIndices
          );
          const contentNameScopesList = nameScopesList.pushAttributed(
            contentName,
            grammar
          );
          stack = stack.withContentNameScopesList(contentNameScopesList);
          if (pushedRule.endHasBackReferences) {
            stack = stack.withEndRule(
              pushedRule.getEndWithResolvedBackReferences(
                lineText.content,
                captureIndices
              )
            );
          }
          if (!hasAdvanced && beforePush.hasSameRuleAs(stack)) {
            if (false) {
              console.error(
                "[2] - Grammar is in an endless loop - Grammar pushed the same rule without advancing"
              );
            }
            stack = stack.pop();
            lineTokens.produce(stack, lineLength);
            STOP = true;
            return;
          }
        } else if (_rule instanceof BeginWhileRule) {
          const pushedRule = _rule;
          if (false) {
            console.log("  pushing " + pushedRule.debugName);
          }
          handleCaptures(
            grammar,
            lineText,
            isFirstLine,
            stack,
            lineTokens,
            pushedRule.beginCaptures,
            captureIndices
          );
          lineTokens.produce(stack, captureIndices[0].end);
          anchorPosition = captureIndices[0].end;
          const contentName = pushedRule.getContentName(
            lineText.content,
            captureIndices
          );
          const contentNameScopesList = nameScopesList.pushAttributed(
            contentName,
            grammar
          );
          stack = stack.withContentNameScopesList(contentNameScopesList);
          if (pushedRule.whileHasBackReferences) {
            stack = stack.withEndRule(
              pushedRule.getWhileWithResolvedBackReferences(
                lineText.content,
                captureIndices
              )
            );
          }
          if (!hasAdvanced && beforePush.hasSameRuleAs(stack)) {
            if (false) {
              console.error(
                "[3] - Grammar is in an endless loop - Grammar pushed the same rule without advancing"
              );
            }
            stack = stack.pop();
            lineTokens.produce(stack, lineLength);
            STOP = true;
            return;
          }
        } else {
          const matchingRule = _rule;
          if (false) {
            console.log(
              "  matched " + matchingRule.debugName + " - " + matchingRule.debugMatchRegExp
            );
          }
          handleCaptures(
            grammar,
            lineText,
            isFirstLine,
            stack,
            lineTokens,
            matchingRule.captures,
            captureIndices
          );
          lineTokens.produce(stack, captureIndices[0].end);
          stack = stack.pop();
          if (!hasAdvanced) {
            if (false) {
              console.error(
                "[4] - Grammar is in an endless loop - Grammar is not advancing, nor is it pushing/popping"
              );
            }
            stack = stack.safePop();
            lineTokens.produce(stack, lineLength);
            STOP = true;
            return;
          }
        }
      }
      if (captureIndices[0].end > linePos) {
        linePos = captureIndices[0].end;
        isFirstLine = false;
      }
    }
  }
  function _checkWhileConditions(grammar, lineText, isFirstLine, linePos, stack, lineTokens) {
    let anchorPosition = stack.beginRuleCapturedEOL ? 0 : -1;
    const whileRules = [];
    for (let node = stack; node; node = node.pop()) {
      const nodeRule = node.getRule(grammar);
      if (nodeRule instanceof BeginWhileRule) {
        whileRules.push({
          rule: nodeRule,
          stack: node
        });
      }
    }
    for (let whileRule = whileRules.pop(); whileRule; whileRule = whileRules.pop()) {
      const { ruleScanner, findOptions } = prepareRuleWhileSearch(whileRule.rule, grammar, whileRule.stack.endRule, isFirstLine, linePos === anchorPosition);
      const r4 = ruleScanner.findNextMatchSync(lineText, linePos, findOptions);
      if (false) {
        console.log("  scanning for while rule");
        console.log(ruleScanner.toString());
      }
      if (r4) {
        const matchedRuleId = r4.ruleId;
        if (matchedRuleId !== whileRuleId) {
          stack = whileRule.stack.pop();
          break;
        }
        if (r4.captureIndices && r4.captureIndices.length) {
          lineTokens.produce(whileRule.stack, r4.captureIndices[0].start);
          handleCaptures(grammar, lineText, isFirstLine, whileRule.stack, lineTokens, whileRule.rule.whileCaptures, r4.captureIndices);
          lineTokens.produce(whileRule.stack, r4.captureIndices[0].end);
          anchorPosition = r4.captureIndices[0].end;
          if (r4.captureIndices[0].end > linePos) {
            linePos = r4.captureIndices[0].end;
            isFirstLine = false;
          }
        }
      } else {
        if (false) {
          console.log("  popping " + whileRule.rule.debugName + " - " + whileRule.rule.debugWhileRegExp);
        }
        stack = whileRule.stack.pop();
        break;
      }
    }
    return { stack, linePos, anchorPosition, isFirstLine };
  }
  function matchRuleOrInjections(grammar, lineText, isFirstLine, linePos, stack, anchorPosition) {
    const matchResult = matchRule(grammar, lineText, isFirstLine, linePos, stack, anchorPosition);
    const injections = grammar.getInjections();
    if (injections.length === 0) {
      return matchResult;
    }
    const injectionResult = matchInjections(injections, grammar, lineText, isFirstLine, linePos, stack, anchorPosition);
    if (!injectionResult) {
      return matchResult;
    }
    if (!matchResult) {
      return injectionResult;
    }
    const matchResultScore = matchResult.captureIndices[0].start;
    const injectionResultScore = injectionResult.captureIndices[0].start;
    if (injectionResultScore < matchResultScore || injectionResult.priorityMatch && injectionResultScore === matchResultScore) {
      return injectionResult;
    }
    return matchResult;
  }
  function matchRule(grammar, lineText, isFirstLine, linePos, stack, anchorPosition) {
    const rule = stack.getRule(grammar);
    const { ruleScanner, findOptions } = prepareRuleSearch(rule, grammar, stack.endRule, isFirstLine, linePos === anchorPosition);
    const r4 = ruleScanner.findNextMatchSync(lineText, linePos, findOptions);
    if (r4) {
      return {
        captureIndices: r4.captureIndices,
        matchedRuleId: r4.ruleId
      };
    }
    return null;
  }
  function matchInjections(injections, grammar, lineText, isFirstLine, linePos, stack, anchorPosition) {
    let bestMatchRating = Number.MAX_VALUE;
    let bestMatchCaptureIndices = null;
    let bestMatchRuleId;
    let bestMatchResultPriority = 0;
    const scopes = stack.contentNameScopesList.getScopeNames();
    for (let i2 = 0, len = injections.length; i2 < len; i2++) {
      const injection = injections[i2];
      if (!injection.matcher(scopes)) {
        continue;
      }
      const rule = grammar.getRule(injection.ruleId);
      const { ruleScanner, findOptions } = prepareRuleSearch(rule, grammar, null, isFirstLine, linePos === anchorPosition);
      const matchResult = ruleScanner.findNextMatchSync(lineText, linePos, findOptions);
      if (!matchResult) {
        continue;
      }
      if (false) {
        console.log(`  matched injection: ${injection.debugSelector}`);
        console.log(ruleScanner.toString());
      }
      const matchRating = matchResult.captureIndices[0].start;
      if (matchRating >= bestMatchRating) {
        continue;
      }
      bestMatchRating = matchRating;
      bestMatchCaptureIndices = matchResult.captureIndices;
      bestMatchRuleId = matchResult.ruleId;
      bestMatchResultPriority = injection.priority;
      if (bestMatchRating === linePos) {
        break;
      }
    }
    if (bestMatchCaptureIndices) {
      return {
        priorityMatch: bestMatchResultPriority === -1,
        captureIndices: bestMatchCaptureIndices,
        matchedRuleId: bestMatchRuleId
      };
    }
    return null;
  }
  function prepareRuleSearch(rule, grammar, endRegexSource, allowA, allowG) {
    if (UseOnigurumaFindOptions) {
      const ruleScanner2 = rule.compile(grammar, endRegexSource);
      const findOptions = getFindOptions(allowA, allowG);
      return { ruleScanner: ruleScanner2, findOptions };
    }
    const ruleScanner = rule.compileAG(grammar, endRegexSource, allowA, allowG);
    return {
      ruleScanner,
      findOptions: 0
      /* None */
    };
  }
  function prepareRuleWhileSearch(rule, grammar, endRegexSource, allowA, allowG) {
    if (UseOnigurumaFindOptions) {
      const ruleScanner2 = rule.compileWhile(grammar, endRegexSource);
      const findOptions = getFindOptions(allowA, allowG);
      return { ruleScanner: ruleScanner2, findOptions };
    }
    const ruleScanner = rule.compileWhileAG(grammar, endRegexSource, allowA, allowG);
    return {
      ruleScanner,
      findOptions: 0
      /* None */
    };
  }
  function getFindOptions(allowA, allowG) {
    let options = 0;
    if (!allowA) {
      options |= 1;
    }
    if (!allowG) {
      options |= 4;
    }
    return options;
  }
  function handleCaptures(grammar, lineText, isFirstLine, stack, lineTokens, captures, captureIndices) {
    if (captures.length === 0) {
      return;
    }
    const lineTextContent = lineText.content;
    const len = Math.min(captures.length, captureIndices.length);
    const localStack = [];
    const maxEnd = captureIndices[0].end;
    for (let i2 = 0; i2 < len; i2++) {
      const captureRule = captures[i2];
      if (captureRule === null) {
        continue;
      }
      const captureIndex = captureIndices[i2];
      if (captureIndex.length === 0) {
        continue;
      }
      if (captureIndex.start > maxEnd) {
        break;
      }
      while (localStack.length > 0 && localStack[localStack.length - 1].endPos <= captureIndex.start) {
        lineTokens.produceFromScopes(localStack[localStack.length - 1].scopes, localStack[localStack.length - 1].endPos);
        localStack.pop();
      }
      if (localStack.length > 0) {
        lineTokens.produceFromScopes(localStack[localStack.length - 1].scopes, captureIndex.start);
      } else {
        lineTokens.produce(stack, captureIndex.start);
      }
      if (captureRule.retokenizeCapturedWithRuleId) {
        const scopeName = captureRule.getName(lineTextContent, captureIndices);
        const nameScopesList = stack.contentNameScopesList.pushAttributed(scopeName, grammar);
        const contentName = captureRule.getContentName(lineTextContent, captureIndices);
        const contentNameScopesList = nameScopesList.pushAttributed(contentName, grammar);
        const stackClone = stack.push(captureRule.retokenizeCapturedWithRuleId, captureIndex.start, -1, false, null, nameScopesList, contentNameScopesList);
        const onigSubStr = grammar.createOnigString(lineTextContent.substring(0, captureIndex.end));
        _tokenizeString(
          grammar,
          onigSubStr,
          isFirstLine && captureIndex.start === 0,
          captureIndex.start,
          stackClone,
          lineTokens,
          false,
          /* no time limit */
          0
        );
        disposeOnigString(onigSubStr);
        continue;
      }
      const captureRuleScopeName = captureRule.getName(lineTextContent, captureIndices);
      if (captureRuleScopeName !== null) {
        const base = localStack.length > 0 ? localStack[localStack.length - 1].scopes : stack.contentNameScopesList;
        const captureRuleScopesList = base.pushAttributed(captureRuleScopeName, grammar);
        localStack.push(new LocalStackElement(captureRuleScopesList, captureIndex.end));
      }
    }
    while (localStack.length > 0) {
      lineTokens.produceFromScopes(localStack[localStack.length - 1].scopes, localStack[localStack.length - 1].endPos);
      localStack.pop();
    }
  }
  var LocalStackElement = class {
    scopes;
    endPos;
    constructor(scopes, endPos) {
      this.scopes = scopes;
      this.endPos = endPos;
    }
  };
  function createGrammar(scopeName, grammar, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors, grammarRepository, onigLib) {
    return new Grammar(
      scopeName,
      grammar,
      initialLanguage,
      embeddedLanguages,
      tokenTypes,
      balancedBracketSelectors,
      grammarRepository,
      onigLib
    );
  }
  function collectInjections(result, selector, rule, ruleFactoryHelper, grammar) {
    const matchers = createMatchers(selector, nameMatcher);
    const ruleId = RuleFactory.getCompiledRuleId(rule, ruleFactoryHelper, grammar.repository);
    for (const matcher of matchers) {
      result.push({
        debugSelector: selector,
        matcher: matcher.matcher,
        ruleId,
        grammar,
        priority: matcher.priority
      });
    }
  }
  function nameMatcher(identifers, scopes) {
    if (scopes.length < identifers.length) {
      return false;
    }
    let lastIndex = 0;
    return identifers.every((identifier) => {
      for (let i2 = lastIndex; i2 < scopes.length; i2++) {
        if (scopesAreMatching(scopes[i2], identifier)) {
          lastIndex = i2 + 1;
          return true;
        }
      }
      return false;
    });
  }
  function scopesAreMatching(thisScopeName, scopeName) {
    if (!thisScopeName) {
      return false;
    }
    if (thisScopeName === scopeName) {
      return true;
    }
    const len = scopeName.length;
    return thisScopeName.length > len && thisScopeName.substr(0, len) === scopeName && thisScopeName[len] === ".";
  }
  var Grammar = class {
    constructor(_rootScopeName, grammar, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors, grammarRepository, _onigLib) {
      this._rootScopeName = _rootScopeName;
      this.balancedBracketSelectors = balancedBracketSelectors;
      this._onigLib = _onigLib;
      this._basicScopeAttributesProvider = new BasicScopeAttributesProvider(
        initialLanguage,
        embeddedLanguages
      );
      this._rootId = -1;
      this._lastRuleId = 0;
      this._ruleId2desc = [null];
      this._includedGrammars = {};
      this._grammarRepository = grammarRepository;
      this._grammar = initGrammar(grammar, null);
      this._injections = null;
      this._tokenTypeMatchers = [];
      if (tokenTypes) {
        for (const selector of Object.keys(tokenTypes)) {
          const matchers = createMatchers(selector, nameMatcher);
          for (const matcher of matchers) {
            this._tokenTypeMatchers.push({
              matcher: matcher.matcher,
              type: tokenTypes[selector]
            });
          }
        }
      }
    }
    _rootId;
    _lastRuleId;
    _ruleId2desc;
    _includedGrammars;
    _grammarRepository;
    _grammar;
    _injections;
    _basicScopeAttributesProvider;
    _tokenTypeMatchers;
    get themeProvider() {
      return this._grammarRepository;
    }
    dispose() {
      for (const rule of this._ruleId2desc) {
        if (rule) {
          rule.dispose();
        }
      }
    }
    createOnigScanner(sources) {
      return this._onigLib.createOnigScanner(sources);
    }
    createOnigString(sources) {
      return this._onigLib.createOnigString(sources);
    }
    getMetadataForScope(scope) {
      return this._basicScopeAttributesProvider.getBasicScopeAttributes(scope);
    }
    _collectInjections() {
      const grammarRepository = {
        lookup: (scopeName2) => {
          if (scopeName2 === this._rootScopeName) {
            return this._grammar;
          }
          return this.getExternalGrammar(scopeName2);
        },
        injections: (scopeName2) => {
          return this._grammarRepository.injections(scopeName2);
        }
      };
      const result = [];
      const scopeName = this._rootScopeName;
      const grammar = grammarRepository.lookup(scopeName);
      if (grammar) {
        const rawInjections = grammar.injections;
        if (rawInjections) {
          for (let expression in rawInjections) {
            collectInjections(
              result,
              expression,
              rawInjections[expression],
              this,
              grammar
            );
          }
        }
        const injectionScopeNames = this._grammarRepository.injections(scopeName);
        if (injectionScopeNames) {
          injectionScopeNames.forEach((injectionScopeName) => {
            const injectionGrammar = this.getExternalGrammar(injectionScopeName);
            if (injectionGrammar) {
              const selector = injectionGrammar.injectionSelector;
              if (selector) {
                collectInjections(
                  result,
                  selector,
                  injectionGrammar,
                  this,
                  injectionGrammar
                );
              }
            }
          });
        }
      }
      result.sort((i1, i2) => i1.priority - i2.priority);
      return result;
    }
    getInjections() {
      if (this._injections === null) {
        this._injections = this._collectInjections();
      }
      return this._injections;
    }
    registerRule(factory) {
      const id = ++this._lastRuleId;
      const result = factory(ruleIdFromNumber(id));
      this._ruleId2desc[id] = result;
      return result;
    }
    getRule(ruleId) {
      return this._ruleId2desc[ruleIdToNumber(ruleId)];
    }
    getExternalGrammar(scopeName, repository) {
      if (this._includedGrammars[scopeName]) {
        return this._includedGrammars[scopeName];
      } else if (this._grammarRepository) {
        const rawIncludedGrammar = this._grammarRepository.lookup(scopeName);
        if (rawIncludedGrammar) {
          this._includedGrammars[scopeName] = initGrammar(
            rawIncludedGrammar,
            repository && repository.$base
          );
          return this._includedGrammars[scopeName];
        }
      }
      return void 0;
    }
    tokenizeLine(lineText, prevState, timeLimit = 0) {
      const r4 = this._tokenize(lineText, prevState, false, timeLimit);
      return {
        tokens: r4.lineTokens.getResult(r4.ruleStack, r4.lineLength),
        ruleStack: r4.ruleStack,
        stoppedEarly: r4.stoppedEarly
      };
    }
    tokenizeLine2(lineText, prevState, timeLimit = 0) {
      const r4 = this._tokenize(lineText, prevState, true, timeLimit);
      return {
        tokens: r4.lineTokens.getBinaryResult(r4.ruleStack, r4.lineLength),
        ruleStack: r4.ruleStack,
        stoppedEarly: r4.stoppedEarly
      };
    }
    _tokenize(lineText, prevState, emitBinaryTokens, timeLimit) {
      if (this._rootId === -1) {
        this._rootId = RuleFactory.getCompiledRuleId(
          this._grammar.repository.$self,
          this,
          this._grammar.repository
        );
        this.getInjections();
      }
      let isFirstLine;
      if (!prevState || prevState === StateStackImpl.NULL) {
        isFirstLine = true;
        const rawDefaultMetadata = this._basicScopeAttributesProvider.getDefaultAttributes();
        const defaultStyle = this.themeProvider.getDefaults();
        const defaultMetadata = EncodedTokenMetadata.set(
          0,
          rawDefaultMetadata.languageId,
          rawDefaultMetadata.tokenType,
          null,
          defaultStyle.fontStyle,
          defaultStyle.foregroundId,
          defaultStyle.backgroundId
        );
        const rootScopeName = this.getRule(this._rootId).getName(
          null,
          null
        );
        let scopeList;
        if (rootScopeName) {
          scopeList = AttributedScopeStack.createRootAndLookUpScopeName(
            rootScopeName,
            defaultMetadata,
            this
          );
        } else {
          scopeList = AttributedScopeStack.createRoot(
            "unknown",
            defaultMetadata
          );
        }
        prevState = new StateStackImpl(
          null,
          this._rootId,
          -1,
          -1,
          false,
          null,
          scopeList,
          scopeList
        );
      } else {
        isFirstLine = false;
        prevState.reset();
      }
      lineText = lineText + "\n";
      const onigLineText = this.createOnigString(lineText);
      const lineLength = onigLineText.content.length;
      const lineTokens = new LineTokens(
        emitBinaryTokens,
        lineText,
        this._tokenTypeMatchers,
        this.balancedBracketSelectors
      );
      const r4 = _tokenizeString(
        this,
        onigLineText,
        isFirstLine,
        0,
        prevState,
        lineTokens,
        true,
        timeLimit
      );
      disposeOnigString(onigLineText);
      return {
        lineLength,
        lineTokens,
        ruleStack: r4.stack,
        stoppedEarly: r4.stoppedEarly
      };
    }
  };
  function initGrammar(grammar, base) {
    grammar = clone(grammar);
    grammar.repository = grammar.repository || {};
    grammar.repository.$self = {
      $vscodeTextmateLocation: grammar.$vscodeTextmateLocation,
      patterns: grammar.patterns,
      name: grammar.scopeName
    };
    grammar.repository.$base = base || grammar.repository.$self;
    return grammar;
  }
  var AttributedScopeStack = class _AttributedScopeStack {
    /**
     * Invariant:
     * ```
     * if (parent && !scopePath.extends(parent.scopePath)) {
     * 	throw new Error();
     * }
     * ```
     */
    constructor(parent, scopePath, tokenAttributes) {
      this.parent = parent;
      this.scopePath = scopePath;
      this.tokenAttributes = tokenAttributes;
    }
    static fromExtension(namesScopeList, contentNameScopesList) {
      let current = namesScopeList;
      let scopeNames = namesScopeList?.scopePath ?? null;
      for (const frame of contentNameScopesList) {
        scopeNames = ScopeStack.push(scopeNames, frame.scopeNames);
        current = new _AttributedScopeStack(current, scopeNames, frame.encodedTokenAttributes);
      }
      return current;
    }
    static createRoot(scopeName, tokenAttributes) {
      return new _AttributedScopeStack(null, new ScopeStack(null, scopeName), tokenAttributes);
    }
    static createRootAndLookUpScopeName(scopeName, tokenAttributes, grammar) {
      const rawRootMetadata = grammar.getMetadataForScope(scopeName);
      const scopePath = new ScopeStack(null, scopeName);
      const rootStyle = grammar.themeProvider.themeMatch(scopePath);
      const resolvedTokenAttributes = _AttributedScopeStack.mergeAttributes(
        tokenAttributes,
        rawRootMetadata,
        rootStyle
      );
      return new _AttributedScopeStack(null, scopePath, resolvedTokenAttributes);
    }
    get scopeName() {
      return this.scopePath.scopeName;
    }
    toString() {
      return this.getScopeNames().join(" ");
    }
    equals(other) {
      return _AttributedScopeStack.equals(this, other);
    }
    static equals(a2, b3) {
      do {
        if (a2 === b3) {
          return true;
        }
        if (!a2 && !b3) {
          return true;
        }
        if (!a2 || !b3) {
          return false;
        }
        if (a2.scopeName !== b3.scopeName || a2.tokenAttributes !== b3.tokenAttributes) {
          return false;
        }
        a2 = a2.parent;
        b3 = b3.parent;
      } while (true);
    }
    static mergeAttributes(existingTokenAttributes, basicScopeAttributes, styleAttributes) {
      let fontStyle = -1;
      let foreground = 0;
      let background = 0;
      if (styleAttributes !== null) {
        fontStyle = styleAttributes.fontStyle;
        foreground = styleAttributes.foregroundId;
        background = styleAttributes.backgroundId;
      }
      return EncodedTokenMetadata.set(
        existingTokenAttributes,
        basicScopeAttributes.languageId,
        basicScopeAttributes.tokenType,
        null,
        fontStyle,
        foreground,
        background
      );
    }
    pushAttributed(scopePath, grammar) {
      if (scopePath === null) {
        return this;
      }
      if (scopePath.indexOf(" ") === -1) {
        return _AttributedScopeStack._pushAttributed(this, scopePath, grammar);
      }
      const scopes = scopePath.split(/ /g);
      let result = this;
      for (const scope of scopes) {
        result = _AttributedScopeStack._pushAttributed(result, scope, grammar);
      }
      return result;
    }
    static _pushAttributed(target, scopeName, grammar) {
      const rawMetadata = grammar.getMetadataForScope(scopeName);
      const newPath = target.scopePath.push(scopeName);
      const scopeThemeMatchResult = grammar.themeProvider.themeMatch(newPath);
      const metadata = _AttributedScopeStack.mergeAttributes(
        target.tokenAttributes,
        rawMetadata,
        scopeThemeMatchResult
      );
      return new _AttributedScopeStack(target, newPath, metadata);
    }
    getScopeNames() {
      return this.scopePath.getSegments();
    }
    getExtensionIfDefined(base) {
      const result = [];
      let self = this;
      while (self && self !== base) {
        result.push({
          encodedTokenAttributes: self.tokenAttributes,
          scopeNames: self.scopePath.getExtensionIfDefined(self.parent?.scopePath ?? null)
        });
        self = self.parent;
      }
      return self === base ? result.reverse() : void 0;
    }
  };
  var StateStackImpl = class _StateStackImpl {
    /**
     * Invariant:
     * ```
     * if (contentNameScopesList !== nameScopesList && contentNameScopesList?.parent !== nameScopesList) {
     * 	throw new Error();
     * }
     * if (this.parent && !nameScopesList.extends(this.parent.contentNameScopesList)) {
     * 	throw new Error();
     * }
     * ```
     */
    constructor(parent, ruleId, enterPos, anchorPos, beginRuleCapturedEOL, endRule, nameScopesList, contentNameScopesList) {
      this.parent = parent;
      this.ruleId = ruleId;
      this.beginRuleCapturedEOL = beginRuleCapturedEOL;
      this.endRule = endRule;
      this.nameScopesList = nameScopesList;
      this.contentNameScopesList = contentNameScopesList;
      this.depth = this.parent ? this.parent.depth + 1 : 1;
      this._enterPos = enterPos;
      this._anchorPos = anchorPos;
    }
    _stackElementBrand = void 0;
    // TODO remove me
    static NULL = new _StateStackImpl(
      null,
      0,
      0,
      0,
      false,
      null,
      null,
      null
    );
    /**
     * The position on the current line where this state was pushed.
     * This is relevant only while tokenizing a line, to detect endless loops.
     * Its value is meaningless across lines.
     */
    _enterPos;
    /**
     * The captured anchor position when this stack element was pushed.
     * This is relevant only while tokenizing a line, to restore the anchor position when popping.
     * Its value is meaningless across lines.
     */
    _anchorPos;
    /**
     * The depth of the stack.
     */
    depth;
    equals(other) {
      if (other === null) {
        return false;
      }
      return _StateStackImpl._equals(this, other);
    }
    static _equals(a2, b3) {
      if (a2 === b3) {
        return true;
      }
      if (!this._structuralEquals(a2, b3)) {
        return false;
      }
      return AttributedScopeStack.equals(a2.contentNameScopesList, b3.contentNameScopesList);
    }
    /**
     * A structural equals check. Does not take into account `scopes`.
     */
    static _structuralEquals(a2, b3) {
      do {
        if (a2 === b3) {
          return true;
        }
        if (!a2 && !b3) {
          return true;
        }
        if (!a2 || !b3) {
          return false;
        }
        if (a2.depth !== b3.depth || a2.ruleId !== b3.ruleId || a2.endRule !== b3.endRule) {
          return false;
        }
        a2 = a2.parent;
        b3 = b3.parent;
      } while (true);
    }
    clone() {
      return this;
    }
    static _reset(el) {
      while (el) {
        el._enterPos = -1;
        el._anchorPos = -1;
        el = el.parent;
      }
    }
    reset() {
      _StateStackImpl._reset(this);
    }
    pop() {
      return this.parent;
    }
    safePop() {
      if (this.parent) {
        return this.parent;
      }
      return this;
    }
    push(ruleId, enterPos, anchorPos, beginRuleCapturedEOL, endRule, nameScopesList, contentNameScopesList) {
      return new _StateStackImpl(
        this,
        ruleId,
        enterPos,
        anchorPos,
        beginRuleCapturedEOL,
        endRule,
        nameScopesList,
        contentNameScopesList
      );
    }
    getEnterPos() {
      return this._enterPos;
    }
    getAnchorPos() {
      return this._anchorPos;
    }
    getRule(grammar) {
      return grammar.getRule(this.ruleId);
    }
    toString() {
      const r4 = [];
      this._writeString(r4, 0);
      return "[" + r4.join(",") + "]";
    }
    _writeString(res, outIndex) {
      if (this.parent) {
        outIndex = this.parent._writeString(res, outIndex);
      }
      res[outIndex++] = `(${this.ruleId}, ${this.nameScopesList?.toString()}, ${this.contentNameScopesList?.toString()})`;
      return outIndex;
    }
    withContentNameScopesList(contentNameScopeStack) {
      if (this.contentNameScopesList === contentNameScopeStack) {
        return this;
      }
      return this.parent.push(
        this.ruleId,
        this._enterPos,
        this._anchorPos,
        this.beginRuleCapturedEOL,
        this.endRule,
        this.nameScopesList,
        contentNameScopeStack
      );
    }
    withEndRule(endRule) {
      if (this.endRule === endRule) {
        return this;
      }
      return new _StateStackImpl(
        this.parent,
        this.ruleId,
        this._enterPos,
        this._anchorPos,
        this.beginRuleCapturedEOL,
        endRule,
        this.nameScopesList,
        this.contentNameScopesList
      );
    }
    // Used to warn of endless loops
    hasSameRuleAs(other) {
      let el = this;
      while (el && el._enterPos === other._enterPos) {
        if (el.ruleId === other.ruleId) {
          return true;
        }
        el = el.parent;
      }
      return false;
    }
    toStateStackFrame() {
      return {
        ruleId: ruleIdToNumber(this.ruleId),
        beginRuleCapturedEOL: this.beginRuleCapturedEOL,
        endRule: this.endRule,
        nameScopesList: this.nameScopesList?.getExtensionIfDefined(this.parent?.nameScopesList ?? null) ?? [],
        contentNameScopesList: this.contentNameScopesList?.getExtensionIfDefined(this.nameScopesList) ?? []
      };
    }
    static pushFrame(self, frame) {
      const namesScopeList = AttributedScopeStack.fromExtension(self?.nameScopesList ?? null, frame.nameScopesList);
      return new _StateStackImpl(
        self,
        ruleIdFromNumber(frame.ruleId),
        frame.enterPos ?? -1,
        frame.anchorPos ?? -1,
        frame.beginRuleCapturedEOL,
        frame.endRule,
        namesScopeList,
        AttributedScopeStack.fromExtension(namesScopeList, frame.contentNameScopesList)
      );
    }
  };
  var BalancedBracketSelectors = class {
    balancedBracketScopes;
    unbalancedBracketScopes;
    allowAny = false;
    constructor(balancedBracketScopes, unbalancedBracketScopes) {
      this.balancedBracketScopes = balancedBracketScopes.flatMap(
        (selector) => {
          if (selector === "*") {
            this.allowAny = true;
            return [];
          }
          return createMatchers(selector, nameMatcher).map((m3) => m3.matcher);
        }
      );
      this.unbalancedBracketScopes = unbalancedBracketScopes.flatMap(
        (selector) => createMatchers(selector, nameMatcher).map((m3) => m3.matcher)
      );
    }
    get matchesAlways() {
      return this.allowAny && this.unbalancedBracketScopes.length === 0;
    }
    get matchesNever() {
      return this.balancedBracketScopes.length === 0 && !this.allowAny;
    }
    match(scopes) {
      for (const excluder of this.unbalancedBracketScopes) {
        if (excluder(scopes)) {
          return false;
        }
      }
      for (const includer of this.balancedBracketScopes) {
        if (includer(scopes)) {
          return true;
        }
      }
      return this.allowAny;
    }
  };
  var LineTokens = class {
    constructor(emitBinaryTokens, lineText, tokenTypeOverrides, balancedBracketSelectors) {
      this.balancedBracketSelectors = balancedBracketSelectors;
      this._emitBinaryTokens = emitBinaryTokens;
      this._tokenTypeOverrides = tokenTypeOverrides;
      if (false) {
        this._lineText = lineText;
      } else {
        this._lineText = null;
      }
      this._tokens = [];
      this._binaryTokens = [];
      this._lastTokenEndIndex = 0;
    }
    _emitBinaryTokens;
    /**
     * defined only if `false`.
     */
    _lineText;
    /**
     * used only if `_emitBinaryTokens` is false.
     */
    _tokens;
    /**
     * used only if `_emitBinaryTokens` is true.
     */
    _binaryTokens;
    _lastTokenEndIndex;
    _tokenTypeOverrides;
    produce(stack, endIndex) {
      this.produceFromScopes(stack.contentNameScopesList, endIndex);
    }
    produceFromScopes(scopesList, endIndex) {
      if (this._lastTokenEndIndex >= endIndex) {
        return;
      }
      if (this._emitBinaryTokens) {
        let metadata = scopesList?.tokenAttributes ?? 0;
        let containsBalancedBrackets = false;
        if (this.balancedBracketSelectors?.matchesAlways) {
          containsBalancedBrackets = true;
        }
        if (this._tokenTypeOverrides.length > 0 || this.balancedBracketSelectors && !this.balancedBracketSelectors.matchesAlways && !this.balancedBracketSelectors.matchesNever) {
          const scopes2 = scopesList?.getScopeNames() ?? [];
          for (const tokenType of this._tokenTypeOverrides) {
            if (tokenType.matcher(scopes2)) {
              metadata = EncodedTokenMetadata.set(
                metadata,
                0,
                toOptionalTokenType(tokenType.type),
                null,
                -1,
                0,
                0
              );
            }
          }
          if (this.balancedBracketSelectors) {
            containsBalancedBrackets = this.balancedBracketSelectors.match(scopes2);
          }
        }
        if (containsBalancedBrackets) {
          metadata = EncodedTokenMetadata.set(
            metadata,
            0,
            8,
            containsBalancedBrackets,
            -1,
            0,
            0
          );
        }
        if (this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 1] === metadata) {
          this._lastTokenEndIndex = endIndex;
          return;
        }
        this._binaryTokens.push(this._lastTokenEndIndex);
        this._binaryTokens.push(metadata);
        this._lastTokenEndIndex = endIndex;
        return;
      }
      const scopes = scopesList?.getScopeNames() ?? [];
      this._tokens.push({
        startIndex: this._lastTokenEndIndex,
        endIndex,
        // value: lineText.substring(lastTokenEndIndex, endIndex),
        scopes
      });
      this._lastTokenEndIndex = endIndex;
    }
    getResult(stack, lineLength) {
      if (this._tokens.length > 0 && this._tokens[this._tokens.length - 1].startIndex === lineLength - 1) {
        this._tokens.pop();
      }
      if (this._tokens.length === 0) {
        this._lastTokenEndIndex = -1;
        this.produce(stack, lineLength);
        this._tokens[this._tokens.length - 1].startIndex = 0;
      }
      return this._tokens;
    }
    getBinaryResult(stack, lineLength) {
      if (this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 2] === lineLength - 1) {
        this._binaryTokens.pop();
        this._binaryTokens.pop();
      }
      if (this._binaryTokens.length === 0) {
        this._lastTokenEndIndex = -1;
        this.produce(stack, lineLength);
        this._binaryTokens[this._binaryTokens.length - 2] = 0;
      }
      const result = new Uint32Array(this._binaryTokens.length);
      for (let i2 = 0, len = this._binaryTokens.length; i2 < len; i2++) {
        result[i2] = this._binaryTokens[i2];
      }
      return result;
    }
  };
  var SyncRegistry = class {
    constructor(theme, _onigLib) {
      this._onigLib = _onigLib;
      this._theme = theme;
    }
    _grammars = /* @__PURE__ */ new Map();
    _rawGrammars = /* @__PURE__ */ new Map();
    _injectionGrammars = /* @__PURE__ */ new Map();
    _theme;
    dispose() {
      for (const grammar of this._grammars.values()) {
        grammar.dispose();
      }
    }
    setTheme(theme) {
      this._theme = theme;
    }
    getColorMap() {
      return this._theme.getColorMap();
    }
    /**
     * Add `grammar` to registry and return a list of referenced scope names
     */
    addGrammar(grammar, injectionScopeNames) {
      this._rawGrammars.set(grammar.scopeName, grammar);
      if (injectionScopeNames) {
        this._injectionGrammars.set(grammar.scopeName, injectionScopeNames);
      }
    }
    /**
     * Lookup a raw grammar.
     */
    lookup(scopeName) {
      return this._rawGrammars.get(scopeName);
    }
    /**
     * Returns the injections for the given grammar
     */
    injections(targetScope) {
      return this._injectionGrammars.get(targetScope);
    }
    /**
     * Get the default theme settings
     */
    getDefaults() {
      return this._theme.getDefaults();
    }
    /**
     * Match a scope in the theme.
     */
    themeMatch(scopePath) {
      return this._theme.match(scopePath);
    }
    /**
     * Lookup a grammar.
     */
    grammarForScopeName(scopeName, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors) {
      if (!this._grammars.has(scopeName)) {
        let rawGrammar = this._rawGrammars.get(scopeName);
        if (!rawGrammar) {
          return null;
        }
        this._grammars.set(scopeName, createGrammar(
          scopeName,
          rawGrammar,
          initialLanguage,
          embeddedLanguages,
          tokenTypes,
          balancedBracketSelectors,
          this,
          this._onigLib
        ));
      }
      return this._grammars.get(scopeName);
    }
  };
  var Registry = class {
    _options;
    _syncRegistry;
    _ensureGrammarCache;
    constructor(options) {
      this._options = options;
      this._syncRegistry = new SyncRegistry(
        Theme.createFromRawTheme(options.theme, options.colorMap),
        options.onigLib
      );
      this._ensureGrammarCache = /* @__PURE__ */ new Map();
    }
    dispose() {
      this._syncRegistry.dispose();
    }
    /**
     * Change the theme. Once called, no previous `ruleStack` should be used anymore.
     */
    setTheme(theme, colorMap) {
      this._syncRegistry.setTheme(Theme.createFromRawTheme(theme, colorMap));
    }
    /**
     * Returns a lookup array for color ids.
     */
    getColorMap() {
      return this._syncRegistry.getColorMap();
    }
    /**
     * Load the grammar for `scopeName` and all referenced included grammars asynchronously.
     * Please do not use language id 0.
     */
    loadGrammarWithEmbeddedLanguages(initialScopeName, initialLanguage, embeddedLanguages) {
      return this.loadGrammarWithConfiguration(initialScopeName, initialLanguage, { embeddedLanguages });
    }
    /**
     * Load the grammar for `scopeName` and all referenced included grammars asynchronously.
     * Please do not use language id 0.
     */
    loadGrammarWithConfiguration(initialScopeName, initialLanguage, configuration) {
      return this._loadGrammar(
        initialScopeName,
        initialLanguage,
        configuration.embeddedLanguages,
        configuration.tokenTypes,
        new BalancedBracketSelectors(
          configuration.balancedBracketSelectors || [],
          configuration.unbalancedBracketSelectors || []
        )
      );
    }
    /**
     * Load the grammar for `scopeName` and all referenced included grammars asynchronously.
     */
    loadGrammar(initialScopeName) {
      return this._loadGrammar(initialScopeName, 0, null, null, null);
    }
    _loadGrammar(initialScopeName, initialLanguage, embeddedLanguages, tokenTypes, balancedBracketSelectors) {
      const dependencyProcessor = new ScopeDependencyProcessor(this._syncRegistry, initialScopeName);
      while (dependencyProcessor.Q.length > 0) {
        dependencyProcessor.Q.map((request) => this._loadSingleGrammar(request.scopeName));
        dependencyProcessor.processQueue();
      }
      return this._grammarForScopeName(
        initialScopeName,
        initialLanguage,
        embeddedLanguages,
        tokenTypes,
        balancedBracketSelectors
      );
    }
    _loadSingleGrammar(scopeName) {
      if (!this._ensureGrammarCache.has(scopeName)) {
        this._doLoadSingleGrammar(scopeName);
        this._ensureGrammarCache.set(scopeName, true);
      }
    }
    _doLoadSingleGrammar(scopeName) {
      const grammar = this._options.loadGrammar(scopeName);
      if (grammar) {
        const injections = typeof this._options.getInjections === "function" ? this._options.getInjections(scopeName) : void 0;
        this._syncRegistry.addGrammar(grammar, injections);
      }
    }
    /**
     * Adds a rawGrammar.
     */
    addGrammar(rawGrammar, injections = [], initialLanguage = 0, embeddedLanguages = null) {
      this._syncRegistry.addGrammar(rawGrammar, injections);
      return this._grammarForScopeName(rawGrammar.scopeName, initialLanguage, embeddedLanguages);
    }
    /**
     * Get the grammar for `scopeName`. The grammar must first be created via `loadGrammar` or `addGrammar`.
     */
    _grammarForScopeName(scopeName, initialLanguage = 0, embeddedLanguages = null, tokenTypes = null, balancedBracketSelectors = null) {
      return this._syncRegistry.grammarForScopeName(
        scopeName,
        initialLanguage,
        embeddedLanguages,
        tokenTypes,
        balancedBracketSelectors
      );
    }
  };
  var INITIAL = StateStackImpl.NULL;

  // node_modules/html-void-elements/index.js
  var htmlVoidElements = [
    "area",
    "base",
    "basefont",
    "bgsound",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "image",
    "img",
    "input",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
  ];

  // node_modules/property-information/lib/util/schema.js
  var Schema = class {
    /**
     * @param {SchemaType['property']} property
     *   Property.
     * @param {SchemaType['normal']} normal
     *   Normal.
     * @param {Space | undefined} [space]
     *   Space.
     * @returns
     *   Schema.
     */
    constructor(property, normal, space) {
      this.normal = normal;
      this.property = property;
      if (space) {
        this.space = space;
      }
    }
  };
  Schema.prototype.normal = {};
  Schema.prototype.property = {};
  Schema.prototype.space = void 0;

  // node_modules/property-information/lib/util/merge.js
  function merge(definitions, space) {
    const property = {};
    const normal = {};
    for (const definition of definitions) {
      Object.assign(property, definition.property);
      Object.assign(normal, definition.normal);
    }
    return new Schema(property, normal, space);
  }

  // node_modules/property-information/lib/normalize.js
  function normalize(value) {
    return value.toLowerCase();
  }

  // node_modules/property-information/lib/util/info.js
  var Info = class {
    /**
     * @param {string} property
     *   Property.
     * @param {string} attribute
     *   Attribute.
     * @returns
     *   Info.
     */
    constructor(property, attribute) {
      this.attribute = attribute;
      this.property = property;
    }
  };
  Info.prototype.attribute = "";
  Info.prototype.booleanish = false;
  Info.prototype.boolean = false;
  Info.prototype.commaOrSpaceSeparated = false;
  Info.prototype.commaSeparated = false;
  Info.prototype.defined = false;
  Info.prototype.mustUseProperty = false;
  Info.prototype.number = false;
  Info.prototype.overloadedBoolean = false;
  Info.prototype.property = "";
  Info.prototype.spaceSeparated = false;
  Info.prototype.space = void 0;

  // node_modules/property-information/lib/util/types.js
  var types_exports = {};
  __export(types_exports, {
    boolean: () => boolean,
    booleanish: () => booleanish,
    commaOrSpaceSeparated: () => commaOrSpaceSeparated,
    commaSeparated: () => commaSeparated,
    number: () => number,
    overloadedBoolean: () => overloadedBoolean,
    spaceSeparated: () => spaceSeparated
  });
  var powers = 0;
  var boolean = increment();
  var booleanish = increment();
  var overloadedBoolean = increment();
  var number = increment();
  var spaceSeparated = increment();
  var commaSeparated = increment();
  var commaOrSpaceSeparated = increment();
  function increment() {
    return 2 ** ++powers;
  }

  // node_modules/property-information/lib/util/defined-info.js
  var checks = (
    /** @type {ReadonlyArray<keyof typeof types>} */
    Object.keys(types_exports)
  );
  var DefinedInfo = class extends Info {
    /**
     * @constructor
     * @param {string} property
     *   Property.
     * @param {string} attribute
     *   Attribute.
     * @param {number | null | undefined} [mask]
     *   Mask.
     * @param {Space | undefined} [space]
     *   Space.
     * @returns
     *   Info.
     */
    constructor(property, attribute, mask, space) {
      let index = -1;
      super(property, attribute);
      mark(this, "space", space);
      if (typeof mask === "number") {
        while (++index < checks.length) {
          const check = checks[index];
          mark(this, checks[index], (mask & types_exports[check]) === types_exports[check]);
        }
      }
    }
  };
  DefinedInfo.prototype.defined = true;
  function mark(values, key2, value) {
    if (value) {
      values[key2] = value;
    }
  }

  // node_modules/property-information/lib/util/create.js
  function create(definition) {
    const properties = {};
    const normals = {};
    for (const [property, value] of Object.entries(definition.properties)) {
      const info = new DefinedInfo(
        property,
        definition.transform(definition.attributes || {}, property),
        value,
        definition.space
      );
      if (definition.mustUseProperty && definition.mustUseProperty.includes(property)) {
        info.mustUseProperty = true;
      }
      properties[property] = info;
      normals[normalize(property)] = property;
      normals[normalize(info.attribute)] = property;
    }
    return new Schema(properties, normals, definition.space);
  }

  // node_modules/property-information/lib/aria.js
  var aria = create({
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: booleanish,
      ariaAutoComplete: null,
      ariaBusy: booleanish,
      ariaChecked: booleanish,
      ariaColCount: number,
      ariaColIndex: number,
      ariaColSpan: number,
      ariaControls: spaceSeparated,
      ariaCurrent: null,
      ariaDescribedBy: spaceSeparated,
      ariaDetails: null,
      ariaDisabled: booleanish,
      ariaDropEffect: spaceSeparated,
      ariaErrorMessage: null,
      ariaExpanded: booleanish,
      ariaFlowTo: spaceSeparated,
      ariaGrabbed: booleanish,
      ariaHasPopup: null,
      ariaHidden: booleanish,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: spaceSeparated,
      ariaLevel: number,
      ariaLive: null,
      ariaModal: booleanish,
      ariaMultiLine: booleanish,
      ariaMultiSelectable: booleanish,
      ariaOrientation: null,
      ariaOwns: spaceSeparated,
      ariaPlaceholder: null,
      ariaPosInSet: number,
      ariaPressed: booleanish,
      ariaReadOnly: booleanish,
      ariaRelevant: null,
      ariaRequired: booleanish,
      ariaRoleDescription: spaceSeparated,
      ariaRowCount: number,
      ariaRowIndex: number,
      ariaRowSpan: number,
      ariaSelected: booleanish,
      ariaSetSize: number,
      ariaSort: null,
      ariaValueMax: number,
      ariaValueMin: number,
      ariaValueNow: number,
      ariaValueText: null,
      role: null
    },
    transform(_3, property) {
      return property === "role" ? property : "aria-" + property.slice(4).toLowerCase();
    }
  });

  // node_modules/property-information/lib/util/case-sensitive-transform.js
  function caseSensitiveTransform(attributes, attribute) {
    return attribute in attributes ? attributes[attribute] : attribute;
  }

  // node_modules/property-information/lib/util/case-insensitive-transform.js
  function caseInsensitiveTransform(attributes, property) {
    return caseSensitiveTransform(attributes, property.toLowerCase());
  }

  // node_modules/property-information/lib/html.js
  var html = create({
    attributes: {
      acceptcharset: "accept-charset",
      classname: "class",
      htmlfor: "for",
      httpequiv: "http-equiv"
    },
    mustUseProperty: ["checked", "multiple", "muted", "selected"],
    properties: {
      // Standard Properties.
      abbr: null,
      accept: commaSeparated,
      acceptCharset: spaceSeparated,
      accessKey: spaceSeparated,
      action: null,
      allow: null,
      allowFullScreen: boolean,
      allowPaymentRequest: boolean,
      allowUserMedia: boolean,
      alt: null,
      as: null,
      async: boolean,
      autoCapitalize: null,
      autoComplete: spaceSeparated,
      autoFocus: boolean,
      autoPlay: boolean,
      blocking: spaceSeparated,
      capture: null,
      charSet: null,
      checked: boolean,
      cite: null,
      className: spaceSeparated,
      cols: number,
      colSpan: null,
      content: null,
      contentEditable: booleanish,
      controls: boolean,
      controlsList: spaceSeparated,
      coords: number | commaSeparated,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: boolean,
      defer: boolean,
      dir: null,
      dirName: null,
      disabled: boolean,
      download: overloadedBoolean,
      draggable: booleanish,
      encType: null,
      enterKeyHint: null,
      fetchPriority: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: boolean,
      formTarget: null,
      headers: spaceSeparated,
      height: number,
      hidden: overloadedBoolean,
      high: number,
      href: null,
      hrefLang: null,
      htmlFor: spaceSeparated,
      httpEquiv: spaceSeparated,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inert: boolean,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: boolean,
      itemId: null,
      itemProp: spaceSeparated,
      itemRef: spaceSeparated,
      itemScope: boolean,
      itemType: spaceSeparated,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: boolean,
      low: number,
      manifest: null,
      max: null,
      maxLength: number,
      media: null,
      method: null,
      min: null,
      minLength: number,
      multiple: boolean,
      muted: boolean,
      name: null,
      nonce: null,
      noModule: boolean,
      noValidate: boolean,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforeMatch: null,
      onBeforePrint: null,
      onBeforeToggle: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextLost: null,
      onContextMenu: null,
      onContextRestored: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onScrollEnd: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: boolean,
      optimum: number,
      pattern: null,
      ping: spaceSeparated,
      placeholder: null,
      playsInline: boolean,
      popover: null,
      popoverTarget: null,
      popoverTargetAction: null,
      poster: null,
      preload: null,
      readOnly: boolean,
      referrerPolicy: null,
      rel: spaceSeparated,
      required: boolean,
      reversed: boolean,
      rows: number,
      rowSpan: number,
      sandbox: spaceSeparated,
      scope: null,
      scoped: boolean,
      seamless: boolean,
      selected: boolean,
      shadowRootClonable: boolean,
      shadowRootDelegatesFocus: boolean,
      shadowRootMode: null,
      shape: null,
      size: number,
      sizes: null,
      slot: null,
      span: number,
      spellCheck: booleanish,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: number,
      step: null,
      style: null,
      tabIndex: number,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: boolean,
      useMap: null,
      value: booleanish,
      width: number,
      wrap: null,
      writingSuggestions: null,
      // Legacy.
      // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
      align: null,
      // Several. Use CSS `text-align` instead,
      aLink: null,
      // `<body>`. Use CSS `a:active {color}` instead
      archive: spaceSeparated,
      // `<object>`. List of URIs to archives
      axis: null,
      // `<td>` and `<th>`. Use `scope` on `<th>`
      background: null,
      // `<body>`. Use CSS `background-image` instead
      bgColor: null,
      // `<body>` and table elements. Use CSS `background-color` instead
      border: number,
      // `<table>`. Use CSS `border-width` instead,
      borderColor: null,
      // `<table>`. Use CSS `border-color` instead,
      bottomMargin: number,
      // `<body>`
      cellPadding: null,
      // `<table>`
      cellSpacing: null,
      // `<table>`
      char: null,
      // Several table elements. When `align=char`, sets the character to align on
      charOff: null,
      // Several table elements. When `char`, offsets the alignment
      classId: null,
      // `<object>`
      clear: null,
      // `<br>`. Use CSS `clear` instead
      code: null,
      // `<object>`
      codeBase: null,
      // `<object>`
      codeType: null,
      // `<object>`
      color: null,
      // `<font>` and `<hr>`. Use CSS instead
      compact: boolean,
      // Lists. Use CSS to reduce space between items instead
      declare: boolean,
      // `<object>`
      event: null,
      // `<script>`
      face: null,
      // `<font>`. Use CSS instead
      frame: null,
      // `<table>`
      frameBorder: null,
      // `<iframe>`. Use CSS `border` instead
      hSpace: number,
      // `<img>` and `<object>`
      leftMargin: number,
      // `<body>`
      link: null,
      // `<body>`. Use CSS `a:link {color: *}` instead
      longDesc: null,
      // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
      lowSrc: null,
      // `<img>`. Use a `<picture>`
      marginHeight: number,
      // `<body>`
      marginWidth: number,
      // `<body>`
      noResize: boolean,
      // `<frame>`
      noHref: boolean,
      // `<area>`. Use no href instead of an explicit `nohref`
      noShade: boolean,
      // `<hr>`. Use background-color and height instead of borders
      noWrap: boolean,
      // `<td>` and `<th>`
      object: null,
      // `<applet>`
      profile: null,
      // `<head>`
      prompt: null,
      // `<isindex>`
      rev: null,
      // `<link>`
      rightMargin: number,
      // `<body>`
      rules: null,
      // `<table>`
      scheme: null,
      // `<meta>`
      scrolling: booleanish,
      // `<frame>`. Use overflow in the child context
      standby: null,
      // `<object>`
      summary: null,
      // `<table>`
      text: null,
      // `<body>`. Use CSS `color` instead
      topMargin: number,
      // `<body>`
      valueType: null,
      // `<param>`
      version: null,
      // `<html>`. Use a doctype.
      vAlign: null,
      // Several. Use CSS `vertical-align` instead
      vLink: null,
      // `<body>`. Use CSS `a:visited {color}` instead
      vSpace: number,
      // `<img>` and `<object>`
      // Non-standard Properties.
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: boolean,
      disableRemotePlayback: boolean,
      prefix: null,
      property: null,
      results: number,
      security: null,
      unselectable: null
    },
    space: "html",
    transform: caseInsensitiveTransform
  });

  // node_modules/property-information/lib/svg.js
  var svg = create({
    attributes: {
      accentHeight: "accent-height",
      alignmentBaseline: "alignment-baseline",
      arabicForm: "arabic-form",
      baselineShift: "baseline-shift",
      capHeight: "cap-height",
      className: "class",
      clipPath: "clip-path",
      clipRule: "clip-rule",
      colorInterpolation: "color-interpolation",
      colorInterpolationFilters: "color-interpolation-filters",
      colorProfile: "color-profile",
      colorRendering: "color-rendering",
      crossOrigin: "crossorigin",
      dataType: "datatype",
      dominantBaseline: "dominant-baseline",
      enableBackground: "enable-background",
      fillOpacity: "fill-opacity",
      fillRule: "fill-rule",
      floodColor: "flood-color",
      floodOpacity: "flood-opacity",
      fontFamily: "font-family",
      fontSize: "font-size",
      fontSizeAdjust: "font-size-adjust",
      fontStretch: "font-stretch",
      fontStyle: "font-style",
      fontVariant: "font-variant",
      fontWeight: "font-weight",
      glyphName: "glyph-name",
      glyphOrientationHorizontal: "glyph-orientation-horizontal",
      glyphOrientationVertical: "glyph-orientation-vertical",
      hrefLang: "hreflang",
      horizAdvX: "horiz-adv-x",
      horizOriginX: "horiz-origin-x",
      horizOriginY: "horiz-origin-y",
      imageRendering: "image-rendering",
      letterSpacing: "letter-spacing",
      lightingColor: "lighting-color",
      markerEnd: "marker-end",
      markerMid: "marker-mid",
      markerStart: "marker-start",
      navDown: "nav-down",
      navDownLeft: "nav-down-left",
      navDownRight: "nav-down-right",
      navLeft: "nav-left",
      navNext: "nav-next",
      navPrev: "nav-prev",
      navRight: "nav-right",
      navUp: "nav-up",
      navUpLeft: "nav-up-left",
      navUpRight: "nav-up-right",
      onAbort: "onabort",
      onActivate: "onactivate",
      onAfterPrint: "onafterprint",
      onBeforePrint: "onbeforeprint",
      onBegin: "onbegin",
      onCancel: "oncancel",
      onCanPlay: "oncanplay",
      onCanPlayThrough: "oncanplaythrough",
      onChange: "onchange",
      onClick: "onclick",
      onClose: "onclose",
      onCopy: "oncopy",
      onCueChange: "oncuechange",
      onCut: "oncut",
      onDblClick: "ondblclick",
      onDrag: "ondrag",
      onDragEnd: "ondragend",
      onDragEnter: "ondragenter",
      onDragExit: "ondragexit",
      onDragLeave: "ondragleave",
      onDragOver: "ondragover",
      onDragStart: "ondragstart",
      onDrop: "ondrop",
      onDurationChange: "ondurationchange",
      onEmptied: "onemptied",
      onEnd: "onend",
      onEnded: "onended",
      onError: "onerror",
      onFocus: "onfocus",
      onFocusIn: "onfocusin",
      onFocusOut: "onfocusout",
      onHashChange: "onhashchange",
      onInput: "oninput",
      onInvalid: "oninvalid",
      onKeyDown: "onkeydown",
      onKeyPress: "onkeypress",
      onKeyUp: "onkeyup",
      onLoad: "onload",
      onLoadedData: "onloadeddata",
      onLoadedMetadata: "onloadedmetadata",
      onLoadStart: "onloadstart",
      onMessage: "onmessage",
      onMouseDown: "onmousedown",
      onMouseEnter: "onmouseenter",
      onMouseLeave: "onmouseleave",
      onMouseMove: "onmousemove",
      onMouseOut: "onmouseout",
      onMouseOver: "onmouseover",
      onMouseUp: "onmouseup",
      onMouseWheel: "onmousewheel",
      onOffline: "onoffline",
      onOnline: "ononline",
      onPageHide: "onpagehide",
      onPageShow: "onpageshow",
      onPaste: "onpaste",
      onPause: "onpause",
      onPlay: "onplay",
      onPlaying: "onplaying",
      onPopState: "onpopstate",
      onProgress: "onprogress",
      onRateChange: "onratechange",
      onRepeat: "onrepeat",
      onReset: "onreset",
      onResize: "onresize",
      onScroll: "onscroll",
      onSeeked: "onseeked",
      onSeeking: "onseeking",
      onSelect: "onselect",
      onShow: "onshow",
      onStalled: "onstalled",
      onStorage: "onstorage",
      onSubmit: "onsubmit",
      onSuspend: "onsuspend",
      onTimeUpdate: "ontimeupdate",
      onToggle: "ontoggle",
      onUnload: "onunload",
      onVolumeChange: "onvolumechange",
      onWaiting: "onwaiting",
      onZoom: "onzoom",
      overlinePosition: "overline-position",
      overlineThickness: "overline-thickness",
      paintOrder: "paint-order",
      panose1: "panose-1",
      pointerEvents: "pointer-events",
      referrerPolicy: "referrerpolicy",
      renderingIntent: "rendering-intent",
      shapeRendering: "shape-rendering",
      stopColor: "stop-color",
      stopOpacity: "stop-opacity",
      strikethroughPosition: "strikethrough-position",
      strikethroughThickness: "strikethrough-thickness",
      strokeDashArray: "stroke-dasharray",
      strokeDashOffset: "stroke-dashoffset",
      strokeLineCap: "stroke-linecap",
      strokeLineJoin: "stroke-linejoin",
      strokeMiterLimit: "stroke-miterlimit",
      strokeOpacity: "stroke-opacity",
      strokeWidth: "stroke-width",
      tabIndex: "tabindex",
      textAnchor: "text-anchor",
      textDecoration: "text-decoration",
      textRendering: "text-rendering",
      transformOrigin: "transform-origin",
      typeOf: "typeof",
      underlinePosition: "underline-position",
      underlineThickness: "underline-thickness",
      unicodeBidi: "unicode-bidi",
      unicodeRange: "unicode-range",
      unitsPerEm: "units-per-em",
      vAlphabetic: "v-alphabetic",
      vHanging: "v-hanging",
      vIdeographic: "v-ideographic",
      vMathematical: "v-mathematical",
      vectorEffect: "vector-effect",
      vertAdvY: "vert-adv-y",
      vertOriginX: "vert-origin-x",
      vertOriginY: "vert-origin-y",
      wordSpacing: "word-spacing",
      writingMode: "writing-mode",
      xHeight: "x-height",
      // These were camelcased in Tiny. Now lowercased in SVG 2
      playbackOrder: "playbackorder",
      timelineBegin: "timelinebegin"
    },
    properties: {
      about: commaOrSpaceSeparated,
      accentHeight: number,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: number,
      amplitude: number,
      arabicForm: null,
      ascent: number,
      attributeName: null,
      attributeType: null,
      azimuth: number,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: number,
      by: null,
      calcMode: null,
      capHeight: number,
      className: spaceSeparated,
      clip: null,
      clipPath: null,
      clipPathUnits: null,
      clipRule: null,
      color: null,
      colorInterpolation: null,
      colorInterpolationFilters: null,
      colorProfile: null,
      colorRendering: null,
      content: null,
      contentScriptType: null,
      contentStyleType: null,
      crossOrigin: null,
      cursor: null,
      cx: null,
      cy: null,
      d: null,
      dataType: null,
      defaultAction: null,
      descent: number,
      diffuseConstant: number,
      direction: null,
      display: null,
      dur: null,
      divisor: number,
      dominantBaseline: null,
      download: boolean,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: number,
      enableBackground: null,
      end: null,
      event: null,
      exponent: number,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: number,
      fillRule: null,
      filter: null,
      filterRes: null,
      filterUnits: null,
      floodColor: null,
      floodOpacity: null,
      focusable: null,
      focusHighlight: null,
      fontFamily: null,
      fontSize: null,
      fontSizeAdjust: null,
      fontStretch: null,
      fontStyle: null,
      fontVariant: null,
      fontWeight: null,
      format: null,
      fr: null,
      from: null,
      fx: null,
      fy: null,
      g1: commaSeparated,
      g2: commaSeparated,
      glyphName: commaSeparated,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: number,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: number,
      horizOriginX: number,
      horizOriginY: number,
      id: null,
      ideographic: number,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: number,
      k: number,
      k1: number,
      k2: number,
      k3: number,
      k4: number,
      kernelMatrix: commaOrSpaceSeparated,
      kernelUnitLength: null,
      keyPoints: null,
      // SEMI_COLON_SEPARATED
      keySplines: null,
      // SEMI_COLON_SEPARATED
      keyTimes: null,
      // SEMI_COLON_SEPARATED
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: number,
      local: null,
      markerEnd: null,
      markerMid: null,
      markerStart: null,
      markerHeight: null,
      markerUnits: null,
      markerWidth: null,
      mask: null,
      maskContentUnits: null,
      maskUnits: null,
      mathematical: null,
      max: null,
      media: null,
      mediaCharacterEncoding: null,
      mediaContentEncodings: null,
      mediaSize: number,
      mediaTime: null,
      method: null,
      min: null,
      mode: null,
      name: null,
      navDown: null,
      navDownLeft: null,
      navDownRight: null,
      navLeft: null,
      navNext: null,
      navPrev: null,
      navRight: null,
      navUp: null,
      navUpLeft: null,
      navUpRight: null,
      numOctaves: null,
      observer: null,
      offset: null,
      onAbort: null,
      onActivate: null,
      onAfterPrint: null,
      onBeforePrint: null,
      onBegin: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnd: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFocusIn: null,
      onFocusOut: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadStart: null,
      onMessage: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onMouseWheel: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRepeat: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onShow: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onZoom: null,
      opacity: null,
      operator: null,
      order: null,
      orient: null,
      orientation: null,
      origin: null,
      overflow: null,
      overlay: null,
      overlinePosition: number,
      overlineThickness: number,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: number,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: spaceSeparated,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: number,
      pointsAtY: number,
      pointsAtZ: number,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: commaOrSpaceSeparated,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: commaOrSpaceSeparated,
      rev: commaOrSpaceSeparated,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: commaOrSpaceSeparated,
      requiredFeatures: commaOrSpaceSeparated,
      requiredFonts: commaOrSpaceSeparated,
      requiredFormats: commaOrSpaceSeparated,
      resource: null,
      restart: null,
      result: null,
      rotate: null,
      rx: null,
      ry: null,
      scale: null,
      seed: null,
      shapeRendering: null,
      side: null,
      slope: null,
      snapshotTime: null,
      specularConstant: number,
      specularExponent: number,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: number,
      strikethroughThickness: number,
      string: null,
      stroke: null,
      strokeDashArray: commaOrSpaceSeparated,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: number,
      strokeOpacity: number,
      strokeWidth: null,
      style: null,
      surfaceScale: number,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: commaOrSpaceSeparated,
      tabIndex: number,
      tableValues: null,
      target: null,
      targetX: number,
      targetY: number,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: commaOrSpaceSeparated,
      to: null,
      transform: null,
      transformOrigin: null,
      u1: null,
      u2: null,
      underlinePosition: number,
      underlineThickness: number,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: number,
      values: null,
      vAlphabetic: number,
      vMathematical: number,
      vectorEffect: null,
      vHanging: number,
      vIdeographic: number,
      version: null,
      vertAdvY: number,
      vertOriginX: number,
      vertOriginY: number,
      viewBox: null,
      viewTarget: null,
      visibility: null,
      width: null,
      widths: null,
      wordSpacing: null,
      writingMode: null,
      x: null,
      x1: null,
      x2: null,
      xChannelSelector: null,
      xHeight: number,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null
    },
    space: "svg",
    transform: caseSensitiveTransform
  });

  // node_modules/property-information/lib/xlink.js
  var xlink = create({
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null
    },
    space: "xlink",
    transform(_3, property) {
      return "xlink:" + property.slice(5).toLowerCase();
    }
  });

  // node_modules/property-information/lib/xmlns.js
  var xmlns = create({
    attributes: { xmlnsxlink: "xmlns:xlink" },
    properties: { xmlnsXLink: null, xmlns: null },
    space: "xmlns",
    transform: caseInsensitiveTransform
  });

  // node_modules/property-information/lib/xml.js
  var xml = create({
    properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
    space: "xml",
    transform(_3, property) {
      return "xml:" + property.slice(3).toLowerCase();
    }
  });

  // node_modules/property-information/lib/find.js
  var cap = /[A-Z]/g;
  var dash = /-[a-z]/g;
  var valid = /^data[-\w.:]+$/i;
  function find(schema, value) {
    const normal = normalize(value);
    let property = value;
    let Type = Info;
    if (normal in schema.normal) {
      return schema.property[schema.normal[normal]];
    }
    if (normal.length > 4 && normal.slice(0, 4) === "data" && valid.test(value)) {
      if (value.charAt(4) === "-") {
        const rest = value.slice(5).replace(dash, camelcase);
        property = "data" + rest.charAt(0).toUpperCase() + rest.slice(1);
      } else {
        const rest = value.slice(4);
        if (!dash.test(rest)) {
          let dashes = rest.replace(cap, kebab);
          if (dashes.charAt(0) !== "-") {
            dashes = "-" + dashes;
          }
          value = "data" + dashes;
        }
      }
      Type = DefinedInfo;
    }
    return new Type(property, value);
  }
  function kebab($0) {
    return "-" + $0.toLowerCase();
  }
  function camelcase($0) {
    return $0.charAt(1).toUpperCase();
  }

  // node_modules/property-information/index.js
  var html2 = merge([aria, html, xlink, xmlns, xml], "html");
  var svg2 = merge([aria, svg, xlink, xmlns, xml], "svg");

  // node_modules/zwitch/index.js
  var own = {}.hasOwnProperty;
  function zwitch(key2, options) {
    const settings = options || {};
    function one2(value, ...parameters) {
      let fn = one2.invalid;
      const handlers = one2.handlers;
      if (value && own.call(value, key2)) {
        const id = String(value[key2]);
        fn = own.call(handlers, id) ? handlers[id] : one2.unknown;
      }
      if (fn) {
        return fn.call(this, value, ...parameters);
      }
    }
    one2.handlers = settings.handlers || {};
    one2.invalid = settings.invalid;
    one2.unknown = settings.unknown;
    return one2;
  }

  // node_modules/stringify-entities/lib/core.js
  var defaultSubsetRegex = /["&'<>`]/g;
  var surrogatePairsRegex = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var controlCharactersRegex = (
    // eslint-disable-next-line no-control-regex, unicorn/no-hex-escape
    /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g
  );
  var regexEscapeRegex = /[|\\{}()[\]^$+*?.]/g;
  var subsetToRegexCache = /* @__PURE__ */ new WeakMap();
  function core(value, options) {
    value = value.replace(
      options.subset ? charactersToExpressionCached(options.subset) : defaultSubsetRegex,
      basic
    );
    if (options.subset || options.escapeOnly) {
      return value;
    }
    return value.replace(surrogatePairsRegex, surrogate).replace(controlCharactersRegex, basic);
    function surrogate(pair, index, all2) {
      return options.format(
        (pair.charCodeAt(0) - 55296) * 1024 + pair.charCodeAt(1) - 56320 + 65536,
        all2.charCodeAt(index + 2),
        options
      );
    }
    function basic(character, index, all2) {
      return options.format(
        character.charCodeAt(0),
        all2.charCodeAt(index + 1),
        options
      );
    }
  }
  function charactersToExpressionCached(subset) {
    let cached = subsetToRegexCache.get(subset);
    if (!cached) {
      cached = charactersToExpression(subset);
      subsetToRegexCache.set(subset, cached);
    }
    return cached;
  }
  function charactersToExpression(subset) {
    const groups = [];
    let index = -1;
    while (++index < subset.length) {
      groups.push(subset[index].replace(regexEscapeRegex, "\\$&"));
    }
    return new RegExp("(?:" + groups.join("|") + ")", "g");
  }

  // node_modules/stringify-entities/lib/util/to-hexadecimal.js
  var hexadecimalRegex = /[\dA-Fa-f]/;
  function toHexadecimal(code, next, omit) {
    const value = "&#x" + code.toString(16).toUpperCase();
    return omit && next && !hexadecimalRegex.test(String.fromCharCode(next)) ? value : value + ";";
  }

  // node_modules/stringify-entities/lib/util/to-decimal.js
  var decimalRegex = /\d/;
  function toDecimal(code, next, omit) {
    const value = "&#" + String(code);
    return omit && next && !decimalRegex.test(String.fromCharCode(next)) ? value : value + ";";
  }

  // node_modules/character-entities-legacy/index.js
  var characterEntitiesLegacy = [
    "AElig",
    "AMP",
    "Aacute",
    "Acirc",
    "Agrave",
    "Aring",
    "Atilde",
    "Auml",
    "COPY",
    "Ccedil",
    "ETH",
    "Eacute",
    "Ecirc",
    "Egrave",
    "Euml",
    "GT",
    "Iacute",
    "Icirc",
    "Igrave",
    "Iuml",
    "LT",
    "Ntilde",
    "Oacute",
    "Ocirc",
    "Ograve",
    "Oslash",
    "Otilde",
    "Ouml",
    "QUOT",
    "REG",
    "THORN",
    "Uacute",
    "Ucirc",
    "Ugrave",
    "Uuml",
    "Yacute",
    "aacute",
    "acirc",
    "acute",
    "aelig",
    "agrave",
    "amp",
    "aring",
    "atilde",
    "auml",
    "brvbar",
    "ccedil",
    "cedil",
    "cent",
    "copy",
    "curren",
    "deg",
    "divide",
    "eacute",
    "ecirc",
    "egrave",
    "eth",
    "euml",
    "frac12",
    "frac14",
    "frac34",
    "gt",
    "iacute",
    "icirc",
    "iexcl",
    "igrave",
    "iquest",
    "iuml",
    "laquo",
    "lt",
    "macr",
    "micro",
    "middot",
    "nbsp",
    "not",
    "ntilde",
    "oacute",
    "ocirc",
    "ograve",
    "ordf",
    "ordm",
    "oslash",
    "otilde",
    "ouml",
    "para",
    "plusmn",
    "pound",
    "quot",
    "raquo",
    "reg",
    "sect",
    "shy",
    "sup1",
    "sup2",
    "sup3",
    "szlig",
    "thorn",
    "times",
    "uacute",
    "ucirc",
    "ugrave",
    "uml",
    "uuml",
    "yacute",
    "yen",
    "yuml"
  ];

  // node_modules/character-entities-html4/index.js
  var characterEntitiesHtml4 = {
    nbsp: "\xA0",
    iexcl: "\xA1",
    cent: "\xA2",
    pound: "\xA3",
    curren: "\xA4",
    yen: "\xA5",
    brvbar: "\xA6",
    sect: "\xA7",
    uml: "\xA8",
    copy: "\xA9",
    ordf: "\xAA",
    laquo: "\xAB",
    not: "\xAC",
    shy: "\xAD",
    reg: "\xAE",
    macr: "\xAF",
    deg: "\xB0",
    plusmn: "\xB1",
    sup2: "\xB2",
    sup3: "\xB3",
    acute: "\xB4",
    micro: "\xB5",
    para: "\xB6",
    middot: "\xB7",
    cedil: "\xB8",
    sup1: "\xB9",
    ordm: "\xBA",
    raquo: "\xBB",
    frac14: "\xBC",
    frac12: "\xBD",
    frac34: "\xBE",
    iquest: "\xBF",
    Agrave: "\xC0",
    Aacute: "\xC1",
    Acirc: "\xC2",
    Atilde: "\xC3",
    Auml: "\xC4",
    Aring: "\xC5",
    AElig: "\xC6",
    Ccedil: "\xC7",
    Egrave: "\xC8",
    Eacute: "\xC9",
    Ecirc: "\xCA",
    Euml: "\xCB",
    Igrave: "\xCC",
    Iacute: "\xCD",
    Icirc: "\xCE",
    Iuml: "\xCF",
    ETH: "\xD0",
    Ntilde: "\xD1",
    Ograve: "\xD2",
    Oacute: "\xD3",
    Ocirc: "\xD4",
    Otilde: "\xD5",
    Ouml: "\xD6",
    times: "\xD7",
    Oslash: "\xD8",
    Ugrave: "\xD9",
    Uacute: "\xDA",
    Ucirc: "\xDB",
    Uuml: "\xDC",
    Yacute: "\xDD",
    THORN: "\xDE",
    szlig: "\xDF",
    agrave: "\xE0",
    aacute: "\xE1",
    acirc: "\xE2",
    atilde: "\xE3",
    auml: "\xE4",
    aring: "\xE5",
    aelig: "\xE6",
    ccedil: "\xE7",
    egrave: "\xE8",
    eacute: "\xE9",
    ecirc: "\xEA",
    euml: "\xEB",
    igrave: "\xEC",
    iacute: "\xED",
    icirc: "\xEE",
    iuml: "\xEF",
    eth: "\xF0",
    ntilde: "\xF1",
    ograve: "\xF2",
    oacute: "\xF3",
    ocirc: "\xF4",
    otilde: "\xF5",
    ouml: "\xF6",
    divide: "\xF7",
    oslash: "\xF8",
    ugrave: "\xF9",
    uacute: "\xFA",
    ucirc: "\xFB",
    uuml: "\xFC",
    yacute: "\xFD",
    thorn: "\xFE",
    yuml: "\xFF",
    fnof: "\u0192",
    Alpha: "\u0391",
    Beta: "\u0392",
    Gamma: "\u0393",
    Delta: "\u0394",
    Epsilon: "\u0395",
    Zeta: "\u0396",
    Eta: "\u0397",
    Theta: "\u0398",
    Iota: "\u0399",
    Kappa: "\u039A",
    Lambda: "\u039B",
    Mu: "\u039C",
    Nu: "\u039D",
    Xi: "\u039E",
    Omicron: "\u039F",
    Pi: "\u03A0",
    Rho: "\u03A1",
    Sigma: "\u03A3",
    Tau: "\u03A4",
    Upsilon: "\u03A5",
    Phi: "\u03A6",
    Chi: "\u03A7",
    Psi: "\u03A8",
    Omega: "\u03A9",
    alpha: "\u03B1",
    beta: "\u03B2",
    gamma: "\u03B3",
    delta: "\u03B4",
    epsilon: "\u03B5",
    zeta: "\u03B6",
    eta: "\u03B7",
    theta: "\u03B8",
    iota: "\u03B9",
    kappa: "\u03BA",
    lambda: "\u03BB",
    mu: "\u03BC",
    nu: "\u03BD",
    xi: "\u03BE",
    omicron: "\u03BF",
    pi: "\u03C0",
    rho: "\u03C1",
    sigmaf: "\u03C2",
    sigma: "\u03C3",
    tau: "\u03C4",
    upsilon: "\u03C5",
    phi: "\u03C6",
    chi: "\u03C7",
    psi: "\u03C8",
    omega: "\u03C9",
    thetasym: "\u03D1",
    upsih: "\u03D2",
    piv: "\u03D6",
    bull: "\u2022",
    hellip: "\u2026",
    prime: "\u2032",
    Prime: "\u2033",
    oline: "\u203E",
    frasl: "\u2044",
    weierp: "\u2118",
    image: "\u2111",
    real: "\u211C",
    trade: "\u2122",
    alefsym: "\u2135",
    larr: "\u2190",
    uarr: "\u2191",
    rarr: "\u2192",
    darr: "\u2193",
    harr: "\u2194",
    crarr: "\u21B5",
    lArr: "\u21D0",
    uArr: "\u21D1",
    rArr: "\u21D2",
    dArr: "\u21D3",
    hArr: "\u21D4",
    forall: "\u2200",
    part: "\u2202",
    exist: "\u2203",
    empty: "\u2205",
    nabla: "\u2207",
    isin: "\u2208",
    notin: "\u2209",
    ni: "\u220B",
    prod: "\u220F",
    sum: "\u2211",
    minus: "\u2212",
    lowast: "\u2217",
    radic: "\u221A",
    prop: "\u221D",
    infin: "\u221E",
    ang: "\u2220",
    and: "\u2227",
    or: "\u2228",
    cap: "\u2229",
    cup: "\u222A",
    int: "\u222B",
    there4: "\u2234",
    sim: "\u223C",
    cong: "\u2245",
    asymp: "\u2248",
    ne: "\u2260",
    equiv: "\u2261",
    le: "\u2264",
    ge: "\u2265",
    sub: "\u2282",
    sup: "\u2283",
    nsub: "\u2284",
    sube: "\u2286",
    supe: "\u2287",
    oplus: "\u2295",
    otimes: "\u2297",
    perp: "\u22A5",
    sdot: "\u22C5",
    lceil: "\u2308",
    rceil: "\u2309",
    lfloor: "\u230A",
    rfloor: "\u230B",
    lang: "\u2329",
    rang: "\u232A",
    loz: "\u25CA",
    spades: "\u2660",
    clubs: "\u2663",
    hearts: "\u2665",
    diams: "\u2666",
    quot: '"',
    amp: "&",
    lt: "<",
    gt: ">",
    OElig: "\u0152",
    oelig: "\u0153",
    Scaron: "\u0160",
    scaron: "\u0161",
    Yuml: "\u0178",
    circ: "\u02C6",
    tilde: "\u02DC",
    ensp: "\u2002",
    emsp: "\u2003",
    thinsp: "\u2009",
    zwnj: "\u200C",
    zwj: "\u200D",
    lrm: "\u200E",
    rlm: "\u200F",
    ndash: "\u2013",
    mdash: "\u2014",
    lsquo: "\u2018",
    rsquo: "\u2019",
    sbquo: "\u201A",
    ldquo: "\u201C",
    rdquo: "\u201D",
    bdquo: "\u201E",
    dagger: "\u2020",
    Dagger: "\u2021",
    permil: "\u2030",
    lsaquo: "\u2039",
    rsaquo: "\u203A",
    euro: "\u20AC"
  };

  // node_modules/stringify-entities/lib/constant/dangerous.js
  var dangerous = [
    "cent",
    "copy",
    "divide",
    "gt",
    "lt",
    "not",
    "para",
    "times"
  ];

  // node_modules/stringify-entities/lib/util/to-named.js
  var own2 = {}.hasOwnProperty;
  var characters = {};
  var key;
  for (key in characterEntitiesHtml4) {
    if (own2.call(characterEntitiesHtml4, key)) {
      characters[characterEntitiesHtml4[key]] = key;
    }
  }
  var notAlphanumericRegex = /[^\dA-Za-z]/;
  function toNamed(code, next, omit, attribute) {
    const character = String.fromCharCode(code);
    if (own2.call(characters, character)) {
      const name = characters[character];
      const value = "&" + name;
      if (omit && characterEntitiesLegacy.includes(name) && !dangerous.includes(name) && (!attribute || next && next !== 61 && notAlphanumericRegex.test(String.fromCharCode(next)))) {
        return value;
      }
      return value + ";";
    }
    return "";
  }

  // node_modules/stringify-entities/lib/util/format-smart.js
  function formatSmart(code, next, options) {
    let numeric = toHexadecimal(code, next, options.omitOptionalSemicolons);
    let named;
    if (options.useNamedReferences || options.useShortestReferences) {
      named = toNamed(
        code,
        next,
        options.omitOptionalSemicolons,
        options.attribute
      );
    }
    if ((options.useShortestReferences || !named) && options.useShortestReferences) {
      const decimal = toDecimal(code, next, options.omitOptionalSemicolons);
      if (decimal.length < numeric.length) {
        numeric = decimal;
      }
    }
    return named && (!options.useShortestReferences || named.length < numeric.length) ? named : numeric;
  }

  // node_modules/stringify-entities/lib/index.js
  function stringifyEntities(value, options) {
    return core(value, Object.assign({ format: formatSmart }, options));
  }

  // node_modules/hast-util-to-html/lib/handle/comment.js
  var htmlCommentRegex = /^>|^->|<!--|-->|--!>|<!-$/g;
  var bogusCommentEntitySubset = [">"];
  var commentEntitySubset = ["<", ">"];
  function comment(node, _1, _22, state) {
    return state.settings.bogusComments ? "<?" + stringifyEntities(
      node.value,
      Object.assign({}, state.settings.characterReferences, {
        subset: bogusCommentEntitySubset
      })
    ) + ">" : "<!--" + node.value.replace(htmlCommentRegex, encode) + "-->";
    function encode($0) {
      return stringifyEntities(
        $0,
        Object.assign({}, state.settings.characterReferences, {
          subset: commentEntitySubset
        })
      );
    }
  }

  // node_modules/hast-util-to-html/lib/handle/doctype.js
  function doctype(_1, _22, _3, state) {
    return "<!" + (state.settings.upperDoctype ? "DOCTYPE" : "doctype") + (state.settings.tightDoctype ? "" : " ") + "html>";
  }

  // node_modules/ccount/index.js
  function ccount(value, character) {
    const source = String(value);
    if (typeof character !== "string") {
      throw new TypeError("Expected character");
    }
    let count = 0;
    let index = source.indexOf(character);
    while (index !== -1) {
      count++;
      index = source.indexOf(character, index + character.length);
    }
    return count;
  }

  // node_modules/comma-separated-tokens/index.js
  function stringify(values, options) {
    const settings = options || {};
    const input = values[values.length - 1] === "" ? [...values, ""] : values;
    return input.join(
      (settings.padRight ? " " : "") + "," + (settings.padLeft === false ? "" : " ")
    ).trim();
  }

  // node_modules/space-separated-tokens/index.js
  function stringify2(values) {
    return values.join(" ").trim();
  }

  // node_modules/hast-util-whitespace/lib/index.js
  var re = /[ \t\n\f\r]/g;
  function whitespace(thing) {
    return typeof thing === "object" ? thing.type === "text" ? empty(thing.value) : false : empty(thing);
  }
  function empty(value) {
    return value.replace(re, "") === "";
  }

  // node_modules/hast-util-to-html/lib/omission/util/siblings.js
  var siblingAfter = siblings(1);
  var siblingBefore = siblings(-1);
  var emptyChildren = [];
  function siblings(increment2) {
    return sibling;
    function sibling(parent, index, includeWhitespace) {
      const siblings2 = parent ? parent.children : emptyChildren;
      let offset = (index || 0) + increment2;
      let next = siblings2[offset];
      if (!includeWhitespace) {
        while (next && whitespace(next)) {
          offset += increment2;
          next = siblings2[offset];
        }
      }
      return next;
    }
  }

  // node_modules/hast-util-to-html/lib/omission/omission.js
  var own3 = {}.hasOwnProperty;
  function omission(handlers) {
    return omit;
    function omit(node, index, parent) {
      return own3.call(handlers, node.tagName) && handlers[node.tagName](node, index, parent);
    }
  }

  // node_modules/hast-util-to-html/lib/omission/closing.js
  var closing = omission({
    body,
    caption: headOrColgroupOrCaption,
    colgroup: headOrColgroupOrCaption,
    dd,
    dt,
    head: headOrColgroupOrCaption,
    html: html3,
    li,
    optgroup,
    option,
    p,
    rp: rubyElement,
    rt: rubyElement,
    tbody,
    td: cells,
    tfoot,
    th: cells,
    thead,
    tr
  });
  function headOrColgroupOrCaption(_3, index, parent) {
    const next = siblingAfter(parent, index, true);
    return !next || next.type !== "comment" && !(next.type === "text" && whitespace(next.value.charAt(0)));
  }
  function html3(_3, index, parent) {
    const next = siblingAfter(parent, index);
    return !next || next.type !== "comment";
  }
  function body(_3, index, parent) {
    const next = siblingAfter(parent, index);
    return !next || next.type !== "comment";
  }
  function p(_3, index, parent) {
    const next = siblingAfter(parent, index);
    return next ? next.type === "element" && (next.tagName === "address" || next.tagName === "article" || next.tagName === "aside" || next.tagName === "blockquote" || next.tagName === "details" || next.tagName === "div" || next.tagName === "dl" || next.tagName === "fieldset" || next.tagName === "figcaption" || next.tagName === "figure" || next.tagName === "footer" || next.tagName === "form" || next.tagName === "h1" || next.tagName === "h2" || next.tagName === "h3" || next.tagName === "h4" || next.tagName === "h5" || next.tagName === "h6" || next.tagName === "header" || next.tagName === "hgroup" || next.tagName === "hr" || next.tagName === "main" || next.tagName === "menu" || next.tagName === "nav" || next.tagName === "ol" || next.tagName === "p" || next.tagName === "pre" || next.tagName === "section" || next.tagName === "table" || next.tagName === "ul") : !parent || // Confusing parent.
    !(parent.type === "element" && (parent.tagName === "a" || parent.tagName === "audio" || parent.tagName === "del" || parent.tagName === "ins" || parent.tagName === "map" || parent.tagName === "noscript" || parent.tagName === "video"));
  }
  function li(_3, index, parent) {
    const next = siblingAfter(parent, index);
    return !next || next.type === "element" && next.tagName === "li";
  }
  function dt(_3, index, parent) {
    const next = siblingAfter(parent, index);
    return Boolean(
      next && next.type === "element" && (next.tagName === "dt" || next.tagName === "dd")
    );
  }
  function dd(_3, index, parent) {
    const next = siblingAfter(parent, index);
    return !next || next.type === "element" && (next.tagName === "dt" || next.tagName === "dd");
  }
  function rubyElement(_3, index, parent) {
    const next = siblingAfter(parent, index);
    return !next || next.type === "element" && (next.tagName === "rp" || next.tagName === "rt");
  }
  function optgroup(_3, index, parent) {
    const next = siblingAfter(parent, index);
    return !next || next.type === "element" && next.tagName === "optgroup";
  }
  function option(_3, index, parent) {
    const next = siblingAfter(parent, index);
    return !next || next.type === "element" && (next.tagName === "option" || next.tagName === "optgroup");
  }
  function thead(_3, index, parent) {
    const next = siblingAfter(parent, index);
    return Boolean(
      next && next.type === "element" && (next.tagName === "tbody" || next.tagName === "tfoot")
    );
  }
  function tbody(_3, index, parent) {
    const next = siblingAfter(parent, index);
    return !next || next.type === "element" && (next.tagName === "tbody" || next.tagName === "tfoot");
  }
  function tfoot(_3, index, parent) {
    return !siblingAfter(parent, index);
  }
  function tr(_3, index, parent) {
    const next = siblingAfter(parent, index);
    return !next || next.type === "element" && next.tagName === "tr";
  }
  function cells(_3, index, parent) {
    const next = siblingAfter(parent, index);
    return !next || next.type === "element" && (next.tagName === "td" || next.tagName === "th");
  }

  // node_modules/hast-util-to-html/lib/omission/opening.js
  var opening = omission({
    body: body2,
    colgroup,
    head,
    html: html4,
    tbody: tbody2
  });
  function html4(node) {
    const head2 = siblingAfter(node, -1);
    return !head2 || head2.type !== "comment";
  }
  function head(node) {
    const seen = /* @__PURE__ */ new Set();
    for (const child2 of node.children) {
      if (child2.type === "element" && (child2.tagName === "base" || child2.tagName === "title")) {
        if (seen.has(child2.tagName)) return false;
        seen.add(child2.tagName);
      }
    }
    const child = node.children[0];
    return !child || child.type === "element";
  }
  function body2(node) {
    const head2 = siblingAfter(node, -1, true);
    return !head2 || head2.type !== "comment" && !(head2.type === "text" && whitespace(head2.value.charAt(0))) && !(head2.type === "element" && (head2.tagName === "meta" || head2.tagName === "link" || head2.tagName === "script" || head2.tagName === "style" || head2.tagName === "template"));
  }
  function colgroup(node, index, parent) {
    const previous = siblingBefore(parent, index);
    const head2 = siblingAfter(node, -1, true);
    if (parent && previous && previous.type === "element" && previous.tagName === "colgroup" && closing(previous, parent.children.indexOf(previous), parent)) {
      return false;
    }
    return Boolean(head2 && head2.type === "element" && head2.tagName === "col");
  }
  function tbody2(node, index, parent) {
    const previous = siblingBefore(parent, index);
    const head2 = siblingAfter(node, -1);
    if (parent && previous && previous.type === "element" && (previous.tagName === "thead" || previous.tagName === "tbody") && closing(previous, parent.children.indexOf(previous), parent)) {
      return false;
    }
    return Boolean(head2 && head2.type === "element" && head2.tagName === "tr");
  }

  // node_modules/hast-util-to-html/lib/handle/element.js
  var constants = {
    // See: <https://html.spec.whatwg.org/#attribute-name-state>.
    name: [
      ["	\n\f\r &/=>".split(""), "	\n\f\r \"&'/=>`".split("")],
      [`\0	
\f\r "&'/<=>`.split(""), "\0	\n\f\r \"&'/<=>`".split("")]
    ],
    // See: <https://html.spec.whatwg.org/#attribute-value-(unquoted)-state>.
    unquoted: [
      ["	\n\f\r &>".split(""), "\0	\n\f\r \"&'<=>`".split("")],
      ["\0	\n\f\r \"&'<=>`".split(""), "\0	\n\f\r \"&'<=>`".split("")]
    ],
    // See: <https://html.spec.whatwg.org/#attribute-value-(single-quoted)-state>.
    single: [
      ["&'".split(""), "\"&'`".split("")],
      ["\0&'".split(""), "\0\"&'`".split("")]
    ],
    // See: <https://html.spec.whatwg.org/#attribute-value-(double-quoted)-state>.
    double: [
      ['"&'.split(""), "\"&'`".split("")],
      ['\0"&'.split(""), "\0\"&'`".split("")]
    ]
  };
  function element(node, index, parent, state) {
    const schema = state.schema;
    const omit = schema.space === "svg" ? false : state.settings.omitOptionalTags;
    let selfClosing = schema.space === "svg" ? state.settings.closeEmptyElements : state.settings.voids.includes(node.tagName.toLowerCase());
    const parts = [];
    let last;
    if (schema.space === "html" && node.tagName === "svg") {
      state.schema = svg2;
    }
    const attributes = serializeAttributes(state, node.properties);
    const content = state.all(
      schema.space === "html" && node.tagName === "template" ? node.content : node
    );
    state.schema = schema;
    if (content) selfClosing = false;
    if (attributes || !omit || !opening(node, index, parent)) {
      parts.push("<", node.tagName, attributes ? " " + attributes : "");
      if (selfClosing && (schema.space === "svg" || state.settings.closeSelfClosing)) {
        last = attributes.charAt(attributes.length - 1);
        if (!state.settings.tightSelfClosing || last === "/" || last && last !== '"' && last !== "'") {
          parts.push(" ");
        }
        parts.push("/");
      }
      parts.push(">");
    }
    parts.push(content);
    if (!selfClosing && (!omit || !closing(node, index, parent))) {
      parts.push("</" + node.tagName + ">");
    }
    return parts.join("");
  }
  function serializeAttributes(state, properties) {
    const values = [];
    let index = -1;
    let key2;
    if (properties) {
      for (key2 in properties) {
        if (properties[key2] !== null && properties[key2] !== void 0) {
          const value = serializeAttribute(state, key2, properties[key2]);
          if (value) values.push(value);
        }
      }
    }
    while (++index < values.length) {
      const last = state.settings.tightAttributes ? values[index].charAt(values[index].length - 1) : void 0;
      if (index !== values.length - 1 && last !== '"' && last !== "'") {
        values[index] += " ";
      }
    }
    return values.join("");
  }
  function serializeAttribute(state, key2, value) {
    const info = find(state.schema, key2);
    const x2 = state.settings.allowParseErrors && state.schema.space === "html" ? 0 : 1;
    const y3 = state.settings.allowDangerousCharacters ? 0 : 1;
    let quote = state.quote;
    let result;
    if (info.overloadedBoolean && (value === info.attribute || value === "")) {
      value = true;
    } else if ((info.boolean || info.overloadedBoolean) && (typeof value !== "string" || value === info.attribute || value === "")) {
      value = Boolean(value);
    }
    if (value === null || value === void 0 || value === false || typeof value === "number" && Number.isNaN(value)) {
      return "";
    }
    const name = stringifyEntities(
      info.attribute,
      Object.assign({}, state.settings.characterReferences, {
        // Always encode without parse errors in non-HTML.
        subset: constants.name[x2][y3]
      })
    );
    if (value === true) return name;
    value = Array.isArray(value) ? (info.commaSeparated ? stringify : stringify2)(value, {
      padLeft: !state.settings.tightCommaSeparatedLists
    }) : String(value);
    if (state.settings.collapseEmptyAttributes && !value) return name;
    if (state.settings.preferUnquoted) {
      result = stringifyEntities(
        value,
        Object.assign({}, state.settings.characterReferences, {
          attribute: true,
          subset: constants.unquoted[x2][y3]
        })
      );
    }
    if (result !== value) {
      if (state.settings.quoteSmart && ccount(value, quote) > ccount(value, state.alternative)) {
        quote = state.alternative;
      }
      result = quote + stringifyEntities(
        value,
        Object.assign({}, state.settings.characterReferences, {
          // Always encode without parse errors in non-HTML.
          subset: (quote === "'" ? constants.single : constants.double)[x2][y3],
          attribute: true
        })
      ) + quote;
    }
    return name + (result ? "=" + result : result);
  }

  // node_modules/hast-util-to-html/lib/handle/text.js
  var textEntitySubset = ["<", "&"];
  function text(node, _3, parent, state) {
    return parent && parent.type === "element" && (parent.tagName === "script" || parent.tagName === "style") ? node.value : stringifyEntities(
      node.value,
      Object.assign({}, state.settings.characterReferences, {
        subset: textEntitySubset
      })
    );
  }

  // node_modules/hast-util-to-html/lib/handle/raw.js
  function raw(node, index, parent, state) {
    return state.settings.allowDangerousHtml ? node.value : text(node, index, parent, state);
  }

  // node_modules/hast-util-to-html/lib/handle/root.js
  function root(node, _1, _22, state) {
    return state.all(node);
  }

  // node_modules/hast-util-to-html/lib/handle/index.js
  var handle = zwitch("type", {
    invalid,
    unknown,
    handlers: { comment, doctype, element, raw, root, text }
  });
  function invalid(node) {
    throw new Error("Expected node, not `" + node + "`");
  }
  function unknown(node_) {
    const node = (
      /** @type {Nodes} */
      node_
    );
    throw new Error("Cannot compile unknown node `" + node.type + "`");
  }

  // node_modules/hast-util-to-html/lib/index.js
  var emptyOptions = {};
  var emptyCharacterReferences = {};
  var emptyChildren2 = [];
  function toHtml(tree, options) {
    const options_ = options || emptyOptions;
    const quote = options_.quote || '"';
    const alternative = quote === '"' ? "'" : '"';
    if (quote !== '"' && quote !== "'") {
      throw new Error("Invalid quote `" + quote + "`, expected `'` or `\"`");
    }
    const state = {
      one,
      all,
      settings: {
        omitOptionalTags: options_.omitOptionalTags || false,
        allowParseErrors: options_.allowParseErrors || false,
        allowDangerousCharacters: options_.allowDangerousCharacters || false,
        quoteSmart: options_.quoteSmart || false,
        preferUnquoted: options_.preferUnquoted || false,
        tightAttributes: options_.tightAttributes || false,
        upperDoctype: options_.upperDoctype || false,
        tightDoctype: options_.tightDoctype || false,
        bogusComments: options_.bogusComments || false,
        tightCommaSeparatedLists: options_.tightCommaSeparatedLists || false,
        tightSelfClosing: options_.tightSelfClosing || false,
        collapseEmptyAttributes: options_.collapseEmptyAttributes || false,
        allowDangerousHtml: options_.allowDangerousHtml || false,
        voids: options_.voids || htmlVoidElements,
        characterReferences: options_.characterReferences || emptyCharacterReferences,
        closeSelfClosing: options_.closeSelfClosing || false,
        closeEmptyElements: options_.closeEmptyElements || false
      },
      schema: options_.space === "svg" ? svg2 : html2,
      quote,
      alternative
    };
    return state.one(
      Array.isArray(tree) ? { type: "root", children: tree } : tree,
      void 0,
      void 0
    );
  }
  function one(node, index, parent) {
    return handle(node, index, parent, this);
  }
  function all(parent) {
    const results = [];
    const children = parent && parent.children || emptyChildren2;
    let index = -1;
    while (++index < children.length) {
      results[index] = this.one(children[index], index, parent);
    }
    return results.join("");
  }

  // node_modules/@shikijs/core/dist/index.mjs
  function resolveColorReplacements(theme, options) {
    const replacements = typeof theme === "string" ? {} : { ...theme.colorReplacements };
    const themeName = typeof theme === "string" ? theme : theme.name;
    for (const [key2, value] of Object.entries(options?.colorReplacements || {})) {
      if (typeof value === "string")
        replacements[key2] = value;
      else if (key2 === themeName)
        Object.assign(replacements, value);
    }
    return replacements;
  }
  function applyColorReplacements(color, replacements) {
    if (!color)
      return color;
    return replacements?.[color?.toLowerCase()] || color;
  }
  function toArray(x2) {
    return Array.isArray(x2) ? x2 : [x2];
  }
  async function normalizeGetter(p2) {
    return Promise.resolve(typeof p2 === "function" ? p2() : p2).then((r4) => r4.default || r4);
  }
  function isPlainLang(lang14) {
    return !lang14 || ["plaintext", "txt", "text", "plain"].includes(lang14);
  }
  function isSpecialLang(lang14) {
    return lang14 === "ansi" || isPlainLang(lang14);
  }
  function isNoneTheme(theme) {
    return theme === "none";
  }
  function isSpecialTheme(theme) {
    return isNoneTheme(theme);
  }
  function addClassToHast(node, className) {
    if (!className)
      return node;
    node.properties ||= {};
    node.properties.class ||= [];
    if (typeof node.properties.class === "string")
      node.properties.class = node.properties.class.split(/\s+/g);
    if (!Array.isArray(node.properties.class))
      node.properties.class = [];
    const targets = Array.isArray(className) ? className : className.split(/\s+/g);
    for (const c of targets) {
      if (c && !node.properties.class.includes(c))
        node.properties.class.push(c);
    }
    return node;
  }
  function splitLines(code, preserveEnding = false) {
    if (code.length === 0) {
      return [["", 0]];
    }
    const parts = code.split(/(\r?\n)/g);
    let index = 0;
    const lines = [];
    for (let i2 = 0; i2 < parts.length; i2 += 2) {
      const line = preserveEnding ? parts[i2] + (parts[i2 + 1] || "") : parts[i2];
      lines.push([line, index]);
      index += parts[i2].length;
      index += parts[i2 + 1]?.length || 0;
    }
    return lines;
  }
  function createPositionConverter(code) {
    const lines = splitLines(code, true).map(([line]) => line);
    function indexToPos(index) {
      if (index === code.length) {
        return {
          line: lines.length - 1,
          character: lines[lines.length - 1].length
        };
      }
      let character = index;
      let line = 0;
      for (const lineText of lines) {
        if (character < lineText.length)
          break;
        character -= lineText.length;
        line++;
      }
      return { line, character };
    }
    function posToIndex(line, character) {
      let index = 0;
      for (let i2 = 0; i2 < line; i2++)
        index += lines[i2].length;
      index += character;
      return index;
    }
    return {
      lines,
      indexToPos,
      posToIndex
    };
  }
  var DEFAULT_COLOR_LIGHT_DARK = "light-dark()";
  var COLOR_KEYS = ["color", "background-color"];
  function splitToken(token2, offsets) {
    let lastOffset = 0;
    const tokens = [];
    for (const offset of offsets) {
      if (offset > lastOffset) {
        tokens.push({
          ...token2,
          content: token2.content.slice(lastOffset, offset),
          offset: token2.offset + lastOffset
        });
      }
      lastOffset = offset;
    }
    if (lastOffset < token2.content.length) {
      tokens.push({
        ...token2,
        content: token2.content.slice(lastOffset),
        offset: token2.offset + lastOffset
      });
    }
    return tokens;
  }
  function splitTokens(tokens, breakpoints) {
    const sorted = Array.from(breakpoints instanceof Set ? breakpoints : new Set(breakpoints)).sort((a2, b3) => a2 - b3);
    if (!sorted.length)
      return tokens;
    return tokens.map((line) => {
      return line.flatMap((token2) => {
        const breakpointsInToken = sorted.filter((i2) => token2.offset < i2 && i2 < token2.offset + token2.content.length).map((i2) => i2 - token2.offset).sort((a2, b3) => a2 - b3);
        if (!breakpointsInToken.length)
          return token2;
        return splitToken(token2, breakpointsInToken);
      });
    });
  }
  function flatTokenVariants(merged, variantsOrder, cssVariablePrefix, defaultColor, colorsRendering = "css-vars") {
    const token2 = {
      content: merged.content,
      explanation: merged.explanation,
      offset: merged.offset
    };
    const styles = variantsOrder.map((t) => getTokenStyleObject(merged.variants[t]));
    const styleKeys = new Set(styles.flatMap((t) => Object.keys(t)));
    const mergedStyles = {};
    const varKey = (idx, key2) => {
      const keyName = key2 === "color" ? "" : key2 === "background-color" ? "-bg" : `-${key2}`;
      return cssVariablePrefix + variantsOrder[idx] + (key2 === "color" ? "" : keyName);
    };
    styles.forEach((cur, idx) => {
      for (const key2 of styleKeys) {
        const value = cur[key2] || "inherit";
        if (idx === 0 && defaultColor && COLOR_KEYS.includes(key2)) {
          if (defaultColor === DEFAULT_COLOR_LIGHT_DARK && styles.length > 1) {
            const lightIndex = variantsOrder.findIndex((t) => t === "light");
            const darkIndex = variantsOrder.findIndex((t) => t === "dark");
            if (lightIndex === -1 || darkIndex === -1)
              throw new ShikiError('When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes');
            const lightValue = styles[lightIndex][key2] || "inherit";
            const darkValue = styles[darkIndex][key2] || "inherit";
            mergedStyles[key2] = `light-dark(${lightValue}, ${darkValue})`;
            if (colorsRendering === "css-vars")
              mergedStyles[varKey(idx, key2)] = value;
          } else {
            mergedStyles[key2] = value;
          }
        } else {
          if (colorsRendering === "css-vars")
            mergedStyles[varKey(idx, key2)] = value;
        }
      }
    });
    token2.htmlStyle = mergedStyles;
    return token2;
  }
  function getTokenStyleObject(token2) {
    const styles = {};
    if (token2.color)
      styles.color = token2.color;
    if (token2.bgColor)
      styles["background-color"] = token2.bgColor;
    if (token2.fontStyle) {
      if (token2.fontStyle & FontStyle.Italic)
        styles["font-style"] = "italic";
      if (token2.fontStyle & FontStyle.Bold)
        styles["font-weight"] = "bold";
      const decorations2 = [];
      if (token2.fontStyle & FontStyle.Underline)
        decorations2.push("underline");
      if (token2.fontStyle & FontStyle.Strikethrough)
        decorations2.push("line-through");
      if (decorations2.length)
        styles["text-decoration"] = decorations2.join(" ");
    }
    return styles;
  }
  function stringifyTokenStyle(token2) {
    if (typeof token2 === "string")
      return token2;
    return Object.entries(token2).map(([key2, value]) => `${key2}:${value}`).join(";");
  }
  var _grammarStateMap = /* @__PURE__ */ new WeakMap();
  function setLastGrammarStateToMap(keys, state) {
    _grammarStateMap.set(keys, state);
  }
  function getLastGrammarStateFromMap(keys) {
    return _grammarStateMap.get(keys);
  }
  var GrammarState = class _GrammarState {
    /**
     * Theme to Stack mapping
     */
    _stacks = {};
    lang;
    get themes() {
      return Object.keys(this._stacks);
    }
    get theme() {
      return this.themes[0];
    }
    get _stack() {
      return this._stacks[this.theme];
    }
    /**
     * Static method to create a initial grammar state.
     */
    static initial(lang14, themes) {
      return new _GrammarState(
        Object.fromEntries(toArray(themes).map((theme) => [theme, INITIAL])),
        lang14
      );
    }
    constructor(...args) {
      if (args.length === 2) {
        const [stacksMap, lang14] = args;
        this.lang = lang14;
        this._stacks = stacksMap;
      } else {
        const [stack, lang14, theme] = args;
        this.lang = lang14;
        this._stacks = { [theme]: stack };
      }
    }
    /**
     * Get the internal stack object.
     * @internal
     */
    getInternalStack(theme = this.theme) {
      return this._stacks[theme];
    }
    getScopes(theme = this.theme) {
      return getScopes(this._stacks[theme]);
    }
    toJSON() {
      return {
        lang: this.lang,
        theme: this.theme,
        themes: this.themes,
        scopes: this.getScopes()
      };
    }
  };
  function getScopes(stack) {
    const scopes = [];
    const visited = /* @__PURE__ */ new Set();
    function pushScope(stack2) {
      if (visited.has(stack2))
        return;
      visited.add(stack2);
      const name = stack2?.nameScopesList?.scopeName;
      if (name)
        scopes.push(name);
      if (stack2.parent)
        pushScope(stack2.parent);
    }
    pushScope(stack);
    return scopes;
  }
  function getGrammarStack(state, theme) {
    if (!(state instanceof GrammarState))
      throw new ShikiError("Invalid grammar state");
    return state.getInternalStack(theme);
  }
  function transformerDecorations() {
    const map = /* @__PURE__ */ new WeakMap();
    function getContext(shiki) {
      if (!map.has(shiki.meta)) {
        let normalizePosition = function(p2) {
          if (typeof p2 === "number") {
            if (p2 < 0 || p2 > shiki.source.length)
              throw new ShikiError(`Invalid decoration offset: ${p2}. Code length: ${shiki.source.length}`);
            return {
              ...converter.indexToPos(p2),
              offset: p2
            };
          } else {
            const line = converter.lines[p2.line];
            if (line === void 0)
              throw new ShikiError(`Invalid decoration position ${JSON.stringify(p2)}. Lines length: ${converter.lines.length}`);
            let character = p2.character;
            if (character < 0)
              character = line.length + character;
            if (character < 0 || character > line.length)
              throw new ShikiError(`Invalid decoration position ${JSON.stringify(p2)}. Line ${p2.line} length: ${line.length}`);
            return {
              ...p2,
              character,
              offset: converter.posToIndex(p2.line, character)
            };
          }
        };
        const converter = createPositionConverter(shiki.source);
        const decorations2 = (shiki.options.decorations || []).map((d2) => ({
          ...d2,
          start: normalizePosition(d2.start),
          end: normalizePosition(d2.end)
        }));
        verifyIntersections(decorations2);
        map.set(shiki.meta, {
          decorations: decorations2,
          converter,
          source: shiki.source
        });
      }
      return map.get(shiki.meta);
    }
    return {
      name: "shiki:decorations",
      tokens(tokens) {
        if (!this.options.decorations?.length)
          return;
        const ctx = getContext(this);
        const breakpoints = ctx.decorations.flatMap((d2) => [d2.start.offset, d2.end.offset]);
        const splitted = splitTokens(tokens, breakpoints);
        return splitted;
      },
      code(codeEl) {
        if (!this.options.decorations?.length)
          return;
        const ctx = getContext(this);
        const lines = Array.from(codeEl.children).filter((i2) => i2.type === "element" && i2.tagName === "span");
        if (lines.length !== ctx.converter.lines.length)
          throw new ShikiError(`Number of lines in code element (${lines.length}) does not match the number of lines in the source (${ctx.converter.lines.length}). Failed to apply decorations.`);
        function applyLineSection(line, start, end, decoration) {
          const lineEl = lines[line];
          let text2 = "";
          let startIndex = -1;
          let endIndex = -1;
          if (start === 0)
            startIndex = 0;
          if (end === 0)
            endIndex = 0;
          if (end === Number.POSITIVE_INFINITY)
            endIndex = lineEl.children.length;
          if (startIndex === -1 || endIndex === -1) {
            for (let i2 = 0; i2 < lineEl.children.length; i2++) {
              text2 += stringify3(lineEl.children[i2]);
              if (startIndex === -1 && text2.length === start)
                startIndex = i2 + 1;
              if (endIndex === -1 && text2.length === end)
                endIndex = i2 + 1;
            }
          }
          if (startIndex === -1)
            throw new ShikiError(`Failed to find start index for decoration ${JSON.stringify(decoration.start)}`);
          if (endIndex === -1)
            throw new ShikiError(`Failed to find end index for decoration ${JSON.stringify(decoration.end)}`);
          const children = lineEl.children.slice(startIndex, endIndex);
          if (!decoration.alwaysWrap && children.length === lineEl.children.length) {
            applyDecoration(lineEl, decoration, "line");
          } else if (!decoration.alwaysWrap && children.length === 1 && children[0].type === "element") {
            applyDecoration(children[0], decoration, "token");
          } else {
            const wrapper = {
              type: "element",
              tagName: "span",
              properties: {},
              children
            };
            applyDecoration(wrapper, decoration, "wrapper");
            lineEl.children.splice(startIndex, children.length, wrapper);
          }
        }
        function applyLine(line, decoration) {
          lines[line] = applyDecoration(lines[line], decoration, "line");
        }
        function applyDecoration(el, decoration, type) {
          const properties = decoration.properties || {};
          const transform2 = decoration.transform || ((i2) => i2);
          el.tagName = decoration.tagName || "span";
          el.properties = {
            ...el.properties,
            ...properties,
            class: el.properties.class
          };
          if (decoration.properties?.class)
            addClassToHast(el, decoration.properties.class);
          el = transform2(el, type) || el;
          return el;
        }
        const lineApplies = [];
        const sorted = ctx.decorations.sort((a2, b3) => b3.start.offset - a2.start.offset || a2.end.offset - b3.end.offset);
        for (const decoration of sorted) {
          const { start, end } = decoration;
          if (start.line === end.line) {
            applyLineSection(start.line, start.character, end.character, decoration);
          } else if (start.line < end.line) {
            applyLineSection(start.line, start.character, Number.POSITIVE_INFINITY, decoration);
            for (let i2 = start.line + 1; i2 < end.line; i2++)
              lineApplies.unshift(() => applyLine(i2, decoration));
            applyLineSection(end.line, 0, end.character, decoration);
          }
        }
        lineApplies.forEach((i2) => i2());
      }
    };
  }
  function verifyIntersections(items) {
    for (let i2 = 0; i2 < items.length; i2++) {
      const foo = items[i2];
      if (foo.start.offset > foo.end.offset)
        throw new ShikiError(`Invalid decoration range: ${JSON.stringify(foo.start)} - ${JSON.stringify(foo.end)}`);
      for (let j2 = i2 + 1; j2 < items.length; j2++) {
        const bar = items[j2];
        const isFooHasBarStart = foo.start.offset <= bar.start.offset && bar.start.offset < foo.end.offset;
        const isFooHasBarEnd = foo.start.offset < bar.end.offset && bar.end.offset <= foo.end.offset;
        const isBarHasFooStart = bar.start.offset <= foo.start.offset && foo.start.offset < bar.end.offset;
        const isBarHasFooEnd = bar.start.offset < foo.end.offset && foo.end.offset <= bar.end.offset;
        if (isFooHasBarStart || isFooHasBarEnd || isBarHasFooStart || isBarHasFooEnd) {
          if (isFooHasBarStart && isFooHasBarEnd)
            continue;
          if (isBarHasFooStart && isBarHasFooEnd)
            continue;
          if (isBarHasFooStart && foo.start.offset === foo.end.offset)
            continue;
          if (isFooHasBarEnd && bar.start.offset === bar.end.offset)
            continue;
          throw new ShikiError(`Decorations ${JSON.stringify(foo.start)} and ${JSON.stringify(bar.start)} intersect.`);
        }
      }
    }
  }
  function stringify3(el) {
    if (el.type === "text")
      return el.value;
    if (el.type === "element")
      return el.children.map(stringify3).join("");
    return "";
  }
  var builtInTransformers = [
    /* @__PURE__ */ transformerDecorations()
  ];
  function getTransformers(options) {
    const transformers = sortTransformersByEnforcement(options.transformers || []);
    return [
      ...transformers.pre,
      ...transformers.normal,
      ...transformers.post,
      ...builtInTransformers
    ];
  }
  function sortTransformersByEnforcement(transformers) {
    const pre = [];
    const post = [];
    const normal = [];
    for (const transformer of transformers) {
      switch (transformer.enforce) {
        case "pre":
          pre.push(transformer);
          break;
        case "post":
          post.push(transformer);
          break;
        default:
          normal.push(transformer);
      }
    }
    return { pre, post, normal };
  }
  var namedColors = [
    "black",
    "red",
    "green",
    "yellow",
    "blue",
    "magenta",
    "cyan",
    "white",
    "brightBlack",
    "brightRed",
    "brightGreen",
    "brightYellow",
    "brightBlue",
    "brightMagenta",
    "brightCyan",
    "brightWhite"
  ];
  var decorations = {
    1: "bold",
    2: "dim",
    3: "italic",
    4: "underline",
    7: "reverse",
    8: "hidden",
    9: "strikethrough"
  };
  function findSequence(value, position) {
    const nextEscape = value.indexOf("\x1B", position);
    if (nextEscape !== -1) {
      if (value[nextEscape + 1] === "[") {
        const nextClose = value.indexOf("m", nextEscape);
        if (nextClose !== -1) {
          return {
            sequence: value.substring(nextEscape + 2, nextClose).split(";"),
            startPosition: nextEscape,
            position: nextClose + 1
          };
        }
      }
    }
    return {
      position: value.length
    };
  }
  function parseColor(sequence) {
    const colorMode = sequence.shift();
    if (colorMode === "2") {
      const rgb = sequence.splice(0, 3).map((x2) => Number.parseInt(x2));
      if (rgb.length !== 3 || rgb.some((x2) => Number.isNaN(x2)))
        return;
      return {
        type: "rgb",
        rgb
      };
    } else if (colorMode === "5") {
      const index = sequence.shift();
      if (index) {
        return { type: "table", index: Number(index) };
      }
    }
  }
  function parseSequence(sequence) {
    const commands = [];
    while (sequence.length > 0) {
      const code = sequence.shift();
      if (!code)
        continue;
      const codeInt = Number.parseInt(code);
      if (Number.isNaN(codeInt))
        continue;
      if (codeInt === 0) {
        commands.push({ type: "resetAll" });
      } else if (codeInt <= 9) {
        const decoration = decorations[codeInt];
        if (decoration) {
          commands.push({
            type: "setDecoration",
            value: decorations[codeInt]
          });
        }
      } else if (codeInt <= 29) {
        const decoration = decorations[codeInt - 20];
        if (decoration) {
          commands.push({
            type: "resetDecoration",
            value: decoration
          });
          if (decoration === "dim") {
            commands.push({
              type: "resetDecoration",
              value: "bold"
            });
          }
        }
      } else if (codeInt <= 37) {
        commands.push({
          type: "setForegroundColor",
          value: { type: "named", name: namedColors[codeInt - 30] }
        });
      } else if (codeInt === 38) {
        const color = parseColor(sequence);
        if (color) {
          commands.push({
            type: "setForegroundColor",
            value: color
          });
        }
      } else if (codeInt === 39) {
        commands.push({
          type: "resetForegroundColor"
        });
      } else if (codeInt <= 47) {
        commands.push({
          type: "setBackgroundColor",
          value: { type: "named", name: namedColors[codeInt - 40] }
        });
      } else if (codeInt === 48) {
        const color = parseColor(sequence);
        if (color) {
          commands.push({
            type: "setBackgroundColor",
            value: color
          });
        }
      } else if (codeInt === 49) {
        commands.push({
          type: "resetBackgroundColor"
        });
      } else if (codeInt === 53) {
        commands.push({
          type: "setDecoration",
          value: "overline"
        });
      } else if (codeInt === 55) {
        commands.push({
          type: "resetDecoration",
          value: "overline"
        });
      } else if (codeInt >= 90 && codeInt <= 97) {
        commands.push({
          type: "setForegroundColor",
          value: { type: "named", name: namedColors[codeInt - 90 + 8] }
        });
      } else if (codeInt >= 100 && codeInt <= 107) {
        commands.push({
          type: "setBackgroundColor",
          value: { type: "named", name: namedColors[codeInt - 100 + 8] }
        });
      }
    }
    return commands;
  }
  function createAnsiSequenceParser() {
    let foreground = null;
    let background = null;
    let decorations2 = /* @__PURE__ */ new Set();
    return {
      parse(value) {
        const tokens = [];
        let position = 0;
        do {
          const findResult = findSequence(value, position);
          const text2 = findResult.sequence ? value.substring(position, findResult.startPosition) : value.substring(position);
          if (text2.length > 0) {
            tokens.push({
              value: text2,
              foreground,
              background,
              decorations: new Set(decorations2)
            });
          }
          if (findResult.sequence) {
            const commands = parseSequence(findResult.sequence);
            for (const styleToken of commands) {
              if (styleToken.type === "resetAll") {
                foreground = null;
                background = null;
                decorations2.clear();
              } else if (styleToken.type === "resetForegroundColor") {
                foreground = null;
              } else if (styleToken.type === "resetBackgroundColor") {
                background = null;
              } else if (styleToken.type === "resetDecoration") {
                decorations2.delete(styleToken.value);
              }
            }
            for (const styleToken of commands) {
              if (styleToken.type === "setForegroundColor") {
                foreground = styleToken.value;
              } else if (styleToken.type === "setBackgroundColor") {
                background = styleToken.value;
              } else if (styleToken.type === "setDecoration") {
                decorations2.add(styleToken.value);
              }
            }
          }
          position = findResult.position;
        } while (position < value.length);
        return tokens;
      }
    };
  }
  var defaultNamedColorsMap = {
    black: "#000000",
    red: "#bb0000",
    green: "#00bb00",
    yellow: "#bbbb00",
    blue: "#0000bb",
    magenta: "#ff00ff",
    cyan: "#00bbbb",
    white: "#eeeeee",
    brightBlack: "#555555",
    brightRed: "#ff5555",
    brightGreen: "#00ff00",
    brightYellow: "#ffff55",
    brightBlue: "#5555ff",
    brightMagenta: "#ff55ff",
    brightCyan: "#55ffff",
    brightWhite: "#ffffff"
  };
  function createColorPalette(namedColorsMap = defaultNamedColorsMap) {
    function namedColor(name) {
      return namedColorsMap[name];
    }
    function rgbColor(rgb) {
      return `#${rgb.map((x2) => Math.max(0, Math.min(x2, 255)).toString(16).padStart(2, "0")).join("")}`;
    }
    let colorTable;
    function getColorTable() {
      if (colorTable) {
        return colorTable;
      }
      colorTable = [];
      for (let i2 = 0; i2 < namedColors.length; i2++) {
        colorTable.push(namedColor(namedColors[i2]));
      }
      let levels = [0, 95, 135, 175, 215, 255];
      for (let r4 = 0; r4 < 6; r4++) {
        for (let g = 0; g < 6; g++) {
          for (let b3 = 0; b3 < 6; b3++) {
            colorTable.push(rgbColor([levels[r4], levels[g], levels[b3]]));
          }
        }
      }
      let level = 8;
      for (let i2 = 0; i2 < 24; i2++, level += 10) {
        colorTable.push(rgbColor([level, level, level]));
      }
      return colorTable;
    }
    function tableColor(index) {
      return getColorTable()[index];
    }
    function value(color) {
      switch (color.type) {
        case "named":
          return namedColor(color.name);
        case "rgb":
          return rgbColor(color.rgb);
        case "table":
          return tableColor(color.index);
      }
    }
    return {
      value
    };
  }
  var defaultAnsiColors = {
    black: "#000000",
    red: "#cd3131",
    green: "#0DBC79",
    yellow: "#E5E510",
    blue: "#2472C8",
    magenta: "#BC3FBC",
    cyan: "#11A8CD",
    white: "#E5E5E5",
    brightBlack: "#666666",
    brightRed: "#F14C4C",
    brightGreen: "#23D18B",
    brightYellow: "#F5F543",
    brightBlue: "#3B8EEA",
    brightMagenta: "#D670D6",
    brightCyan: "#29B8DB",
    brightWhite: "#FFFFFF"
  };
  function tokenizeAnsiWithTheme(theme, fileContents, options) {
    const colorReplacements = resolveColorReplacements(theme, options);
    const lines = splitLines(fileContents);
    const ansiPalette = Object.fromEntries(
      namedColors.map((name) => {
        const key2 = `terminal.ansi${name[0].toUpperCase()}${name.substring(1)}`;
        const themeColor = theme.colors?.[key2];
        return [name, themeColor || defaultAnsiColors[name]];
      })
    );
    const colorPalette = createColorPalette(ansiPalette);
    const parser = createAnsiSequenceParser();
    return lines.map(
      (line) => parser.parse(line[0]).map((token2) => {
        let color;
        let bgColor;
        if (token2.decorations.has("reverse")) {
          color = token2.background ? colorPalette.value(token2.background) : theme.bg;
          bgColor = token2.foreground ? colorPalette.value(token2.foreground) : theme.fg;
        } else {
          color = token2.foreground ? colorPalette.value(token2.foreground) : theme.fg;
          bgColor = token2.background ? colorPalette.value(token2.background) : void 0;
        }
        color = applyColorReplacements(color, colorReplacements);
        bgColor = applyColorReplacements(bgColor, colorReplacements);
        if (token2.decorations.has("dim"))
          color = dimColor(color);
        let fontStyle = FontStyle.None;
        if (token2.decorations.has("bold"))
          fontStyle |= FontStyle.Bold;
        if (token2.decorations.has("italic"))
          fontStyle |= FontStyle.Italic;
        if (token2.decorations.has("underline"))
          fontStyle |= FontStyle.Underline;
        if (token2.decorations.has("strikethrough"))
          fontStyle |= FontStyle.Strikethrough;
        return {
          content: token2.value,
          offset: line[1],
          // TODO: more accurate offset? might need to fork ansi-sequence-parser
          color,
          bgColor,
          fontStyle
        };
      })
    );
  }
  function dimColor(color) {
    const hexMatch = color.match(/#([0-9a-f]{3,8})/i);
    if (hexMatch) {
      const hex = hexMatch[1];
      if (hex.length === 8) {
        const alpha = Math.round(Number.parseInt(hex.slice(6, 8), 16) / 2).toString(16).padStart(2, "0");
        return `#${hex.slice(0, 6)}${alpha}`;
      } else if (hex.length === 6) {
        return `#${hex}80`;
      } else if (hex.length === 4) {
        const r4 = hex[0];
        const g = hex[1];
        const b3 = hex[2];
        const a2 = hex[3];
        const alpha = Math.round(Number.parseInt(`${a2}${a2}`, 16) / 2).toString(16).padStart(2, "0");
        return `#${r4}${r4}${g}${g}${b3}${b3}${alpha}`;
      } else if (hex.length === 3) {
        const r4 = hex[0];
        const g = hex[1];
        const b3 = hex[2];
        return `#${r4}${r4}${g}${g}${b3}${b3}80`;
      }
    }
    const cssVarMatch = color.match(/var\((--[\w-]+-ansi-[\w-]+)\)/);
    if (cssVarMatch)
      return `var(${cssVarMatch[1]}-dim)`;
    return color;
  }
  function codeToTokensBase(internal, code, options = {}) {
    const {
      theme: themeName = internal.getLoadedThemes()[0]
    } = options;
    const lang14 = internal.resolveLangAlias(options.lang || "text");
    if (isPlainLang(lang14) || isNoneTheme(themeName))
      return splitLines(code).map((line) => [{ content: line[0], offset: line[1] }]);
    const { theme, colorMap } = internal.setTheme(themeName);
    if (lang14 === "ansi")
      return tokenizeAnsiWithTheme(theme, code, options);
    const _grammar = internal.getLanguage(options.lang || "text");
    if (options.grammarState) {
      if (options.grammarState.lang !== _grammar.name) {
        throw new ShikiError(`Grammar state language "${options.grammarState.lang}" does not match highlight language "${_grammar.name}"`);
      }
      if (!options.grammarState.themes.includes(theme.name)) {
        throw new ShikiError(`Grammar state themes "${options.grammarState.themes}" do not contain highlight theme "${theme.name}"`);
      }
    }
    return tokenizeWithTheme(code, _grammar, theme, colorMap, options);
  }
  function getLastGrammarState(...args) {
    if (args.length === 2) {
      return getLastGrammarStateFromMap(args[1]);
    }
    const [internal, code, options = {}] = args;
    const {
      lang: lang14 = "text",
      theme: themeName = internal.getLoadedThemes()[0]
    } = options;
    if (isPlainLang(lang14) || isNoneTheme(themeName))
      throw new ShikiError("Plain language does not have grammar state");
    if (lang14 === "ansi")
      throw new ShikiError("ANSI language does not have grammar state");
    const { theme, colorMap } = internal.setTheme(themeName);
    const _grammar = internal.getLanguage(lang14);
    return new GrammarState(
      _tokenizeWithTheme(code, _grammar, theme, colorMap, options).stateStack,
      _grammar.name,
      theme.name
    );
  }
  function tokenizeWithTheme(code, grammar, theme, colorMap, options) {
    const result = _tokenizeWithTheme(code, grammar, theme, colorMap, options);
    const grammarState = new GrammarState(
      result.stateStack,
      grammar.name,
      theme.name
    );
    setLastGrammarStateToMap(result.tokens, grammarState);
    return result.tokens;
  }
  function _tokenizeWithTheme(code, grammar, theme, colorMap, options) {
    const colorReplacements = resolveColorReplacements(theme, options);
    const {
      tokenizeMaxLineLength = 0,
      tokenizeTimeLimit = 500
    } = options;
    const lines = splitLines(code);
    let stateStack = options.grammarState ? getGrammarStack(options.grammarState, theme.name) ?? INITIAL : options.grammarContextCode != null ? _tokenizeWithTheme(
      options.grammarContextCode,
      grammar,
      theme,
      colorMap,
      {
        ...options,
        grammarState: void 0,
        grammarContextCode: void 0
      }
    ).stateStack : INITIAL;
    let actual = [];
    const final = [];
    for (let i2 = 0, len = lines.length; i2 < len; i2++) {
      const [line, lineOffset] = lines[i2];
      if (line === "") {
        actual = [];
        final.push([]);
        continue;
      }
      if (tokenizeMaxLineLength > 0 && line.length >= tokenizeMaxLineLength) {
        actual = [];
        final.push([{
          content: line,
          offset: lineOffset,
          color: "",
          fontStyle: 0
        }]);
        continue;
      }
      let resultWithScopes;
      let tokensWithScopes;
      let tokensWithScopesIndex;
      if (options.includeExplanation) {
        resultWithScopes = grammar.tokenizeLine(line, stateStack, tokenizeTimeLimit);
        tokensWithScopes = resultWithScopes.tokens;
        tokensWithScopesIndex = 0;
      }
      const result = grammar.tokenizeLine2(line, stateStack, tokenizeTimeLimit);
      const tokensLength = result.tokens.length / 2;
      for (let j2 = 0; j2 < tokensLength; j2++) {
        const startIndex = result.tokens[2 * j2];
        const nextStartIndex = j2 + 1 < tokensLength ? result.tokens[2 * j2 + 2] : line.length;
        if (startIndex === nextStartIndex)
          continue;
        const metadata = result.tokens[2 * j2 + 1];
        const color = applyColorReplacements(
          colorMap[EncodedTokenMetadata.getForeground(metadata)],
          colorReplacements
        );
        const fontStyle = EncodedTokenMetadata.getFontStyle(metadata);
        const token2 = {
          content: line.substring(startIndex, nextStartIndex),
          offset: lineOffset + startIndex,
          color,
          fontStyle
        };
        if (options.includeExplanation) {
          const themeSettingsSelectors = [];
          if (options.includeExplanation !== "scopeName") {
            for (const setting of theme.settings) {
              let selectors;
              switch (typeof setting.scope) {
                case "string":
                  selectors = setting.scope.split(/,/).map((scope) => scope.trim());
                  break;
                case "object":
                  selectors = setting.scope;
                  break;
                default:
                  continue;
              }
              themeSettingsSelectors.push({
                settings: setting,
                selectors: selectors.map((selector) => selector.split(/ /))
              });
            }
          }
          token2.explanation = [];
          let offset = 0;
          while (startIndex + offset < nextStartIndex) {
            const tokenWithScopes = tokensWithScopes[tokensWithScopesIndex];
            const tokenWithScopesText = line.substring(
              tokenWithScopes.startIndex,
              tokenWithScopes.endIndex
            );
            offset += tokenWithScopesText.length;
            token2.explanation.push({
              content: tokenWithScopesText,
              scopes: options.includeExplanation === "scopeName" ? explainThemeScopesNameOnly(
                tokenWithScopes.scopes
              ) : explainThemeScopesFull(
                themeSettingsSelectors,
                tokenWithScopes.scopes
              )
            });
            tokensWithScopesIndex += 1;
          }
        }
        actual.push(token2);
      }
      final.push(actual);
      actual = [];
      stateStack = result.ruleStack;
    }
    return {
      tokens: final,
      stateStack
    };
  }
  function explainThemeScopesNameOnly(scopes) {
    return scopes.map((scope) => ({ scopeName: scope }));
  }
  function explainThemeScopesFull(themeSelectors, scopes) {
    const result = [];
    for (let i2 = 0, len = scopes.length; i2 < len; i2++) {
      const scope = scopes[i2];
      result[i2] = {
        scopeName: scope,
        themeMatches: explainThemeScope(themeSelectors, scope, scopes.slice(0, i2))
      };
    }
    return result;
  }
  function matchesOne(selector, scope) {
    return selector === scope || scope.substring(0, selector.length) === selector && scope[selector.length] === ".";
  }
  function matches(selectors, scope, parentScopes) {
    if (!matchesOne(selectors[selectors.length - 1], scope))
      return false;
    let selectorParentIndex = selectors.length - 2;
    let parentIndex = parentScopes.length - 1;
    while (selectorParentIndex >= 0 && parentIndex >= 0) {
      if (matchesOne(selectors[selectorParentIndex], parentScopes[parentIndex]))
        selectorParentIndex -= 1;
      parentIndex -= 1;
    }
    if (selectorParentIndex === -1)
      return true;
    return false;
  }
  function explainThemeScope(themeSettingsSelectors, scope, parentScopes) {
    const result = [];
    for (const { selectors, settings } of themeSettingsSelectors) {
      for (const selectorPieces of selectors) {
        if (matches(selectorPieces, scope, parentScopes)) {
          result.push(settings);
          break;
        }
      }
    }
    return result;
  }
  function codeToTokensWithThemes(internal, code, options) {
    const themes = Object.entries(options.themes).filter((i2) => i2[1]).map((i2) => ({ color: i2[0], theme: i2[1] }));
    const themedTokens = themes.map((t) => {
      const tokens2 = codeToTokensBase(internal, code, {
        ...options,
        theme: t.theme
      });
      const state = getLastGrammarStateFromMap(tokens2);
      const theme = typeof t.theme === "string" ? t.theme : t.theme.name;
      return {
        tokens: tokens2,
        state,
        theme
      };
    });
    const tokens = syncThemesTokenization(
      ...themedTokens.map((i2) => i2.tokens)
    );
    const mergedTokens = tokens[0].map(
      (line, lineIdx) => line.map((_token, tokenIdx) => {
        const mergedToken = {
          content: _token.content,
          variants: {},
          offset: _token.offset
        };
        if ("includeExplanation" in options && options.includeExplanation) {
          mergedToken.explanation = _token.explanation;
        }
        tokens.forEach((t, themeIdx) => {
          const {
            content: _3,
            explanation: __,
            offset: ___,
            ...styles
          } = t[lineIdx][tokenIdx];
          mergedToken.variants[themes[themeIdx].color] = styles;
        });
        return mergedToken;
      })
    );
    const mergedGrammarState = themedTokens[0].state ? new GrammarState(
      Object.fromEntries(themedTokens.map((s2) => [s2.theme, s2.state?.getInternalStack(s2.theme)])),
      themedTokens[0].state.lang
    ) : void 0;
    if (mergedGrammarState)
      setLastGrammarStateToMap(mergedTokens, mergedGrammarState);
    return mergedTokens;
  }
  function syncThemesTokenization(...themes) {
    const outThemes = themes.map(() => []);
    const count = themes.length;
    for (let i2 = 0; i2 < themes[0].length; i2++) {
      const lines = themes.map((t) => t[i2]);
      const outLines = outThemes.map(() => []);
      outThemes.forEach((t, i22) => t.push(outLines[i22]));
      const indexes = lines.map(() => 0);
      const current = lines.map((l3) => l3[0]);
      while (current.every((t) => t)) {
        const minLength = Math.min(...current.map((t) => t.content.length));
        for (let n = 0; n < count; n++) {
          const token2 = current[n];
          if (token2.content.length === minLength) {
            outLines[n].push(token2);
            indexes[n] += 1;
            current[n] = lines[n][indexes[n]];
          } else {
            outLines[n].push({
              ...token2,
              content: token2.content.slice(0, minLength)
            });
            current[n] = {
              ...token2,
              content: token2.content.slice(minLength),
              offset: token2.offset + minLength
            };
          }
        }
      }
    }
    return outThemes;
  }
  function codeToTokens(internal, code, options) {
    let bg;
    let fg;
    let tokens;
    let themeName;
    let rootStyle;
    let grammarState;
    if ("themes" in options) {
      const {
        defaultColor = "light",
        cssVariablePrefix = "--shiki-",
        colorsRendering = "css-vars"
      } = options;
      const themes = Object.entries(options.themes).filter((i2) => i2[1]).map((i2) => ({ color: i2[0], theme: i2[1] })).sort((a2, b3) => a2.color === defaultColor ? -1 : b3.color === defaultColor ? 1 : 0);
      if (themes.length === 0)
        throw new ShikiError("`themes` option must not be empty");
      const themeTokens = codeToTokensWithThemes(
        internal,
        code,
        options
      );
      grammarState = getLastGrammarStateFromMap(themeTokens);
      if (defaultColor && DEFAULT_COLOR_LIGHT_DARK !== defaultColor && !themes.find((t) => t.color === defaultColor))
        throw new ShikiError(`\`themes\` option must contain the defaultColor key \`${defaultColor}\``);
      const themeRegs = themes.map((t) => internal.getTheme(t.theme));
      const themesOrder = themes.map((t) => t.color);
      tokens = themeTokens.map((line) => line.map((token2) => flatTokenVariants(token2, themesOrder, cssVariablePrefix, defaultColor, colorsRendering)));
      if (grammarState)
        setLastGrammarStateToMap(tokens, grammarState);
      const themeColorReplacements = themes.map((t) => resolveColorReplacements(t.theme, options));
      fg = mapThemeColors(themes, themeRegs, themeColorReplacements, cssVariablePrefix, defaultColor, "fg", colorsRendering);
      bg = mapThemeColors(themes, themeRegs, themeColorReplacements, cssVariablePrefix, defaultColor, "bg", colorsRendering);
      themeName = `shiki-themes ${themeRegs.map((t) => t.name).join(" ")}`;
      rootStyle = defaultColor ? void 0 : [fg, bg].join(";");
    } else if ("theme" in options) {
      const colorReplacements = resolveColorReplacements(options.theme, options);
      tokens = codeToTokensBase(
        internal,
        code,
        options
      );
      const _theme = internal.getTheme(options.theme);
      bg = applyColorReplacements(_theme.bg, colorReplacements);
      fg = applyColorReplacements(_theme.fg, colorReplacements);
      themeName = _theme.name;
      grammarState = getLastGrammarStateFromMap(tokens);
    } else {
      throw new ShikiError("Invalid options, either `theme` or `themes` must be provided");
    }
    return {
      tokens,
      fg,
      bg,
      themeName,
      rootStyle,
      grammarState
    };
  }
  function mapThemeColors(themes, themeRegs, themeColorReplacements, cssVariablePrefix, defaultColor, property, colorsRendering) {
    return themes.map((t, idx) => {
      const value = applyColorReplacements(themeRegs[idx][property], themeColorReplacements[idx]) || "inherit";
      const cssVar = `${cssVariablePrefix + t.color}${property === "bg" ? "-bg" : ""}:${value}`;
      if (idx === 0 && defaultColor) {
        if (defaultColor === DEFAULT_COLOR_LIGHT_DARK && themes.length > 1) {
          const lightIndex = themes.findIndex((t2) => t2.color === "light");
          const darkIndex = themes.findIndex((t2) => t2.color === "dark");
          if (lightIndex === -1 || darkIndex === -1)
            throw new ShikiError('When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes');
          const lightValue = applyColorReplacements(themeRegs[lightIndex][property], themeColorReplacements[lightIndex]) || "inherit";
          const darkValue = applyColorReplacements(themeRegs[darkIndex][property], themeColorReplacements[darkIndex]) || "inherit";
          return `light-dark(${lightValue}, ${darkValue});${cssVar}`;
        }
        return value;
      }
      if (colorsRendering === "css-vars") {
        return cssVar;
      }
      return null;
    }).filter((i2) => !!i2).join(";");
  }
  function codeToHast(internal, code, options, transformerContext = {
    meta: {},
    options,
    codeToHast: (_code, _options) => codeToHast(internal, _code, _options),
    codeToTokens: (_code, _options) => codeToTokens(internal, _code, _options)
  }) {
    let input = code;
    for (const transformer of getTransformers(options))
      input = transformer.preprocess?.call(transformerContext, input, options) || input;
    let {
      tokens,
      fg,
      bg,
      themeName,
      rootStyle,
      grammarState
    } = codeToTokens(internal, input, options);
    const {
      mergeWhitespaces = true,
      mergeSameStyleTokens = false
    } = options;
    if (mergeWhitespaces === true)
      tokens = mergeWhitespaceTokens(tokens);
    else if (mergeWhitespaces === "never")
      tokens = splitWhitespaceTokens(tokens);
    if (mergeSameStyleTokens) {
      tokens = mergeAdjacentStyledTokens(tokens);
    }
    const contextSource = {
      ...transformerContext,
      get source() {
        return input;
      }
    };
    for (const transformer of getTransformers(options))
      tokens = transformer.tokens?.call(contextSource, tokens) || tokens;
    return tokensToHast(
      tokens,
      {
        ...options,
        fg,
        bg,
        themeName,
        rootStyle: options.rootStyle === false ? false : options.rootStyle ?? rootStyle
      },
      contextSource,
      grammarState
    );
  }
  function tokensToHast(tokens, options, transformerContext, grammarState = getLastGrammarStateFromMap(tokens)) {
    const transformers = getTransformers(options);
    const lines = [];
    const root2 = {
      type: "root",
      children: []
    };
    const {
      structure = "classic",
      tabindex = "0"
    } = options;
    const properties = {
      class: `shiki ${options.themeName || ""}`
    };
    if (options.rootStyle !== false) {
      if (options.rootStyle != null)
        properties.style = options.rootStyle;
      else
        properties.style = `background-color:${options.bg};color:${options.fg}`;
    }
    if (tabindex !== false && tabindex != null)
      properties.tabindex = tabindex.toString();
    for (const [key2, value] of Object.entries(options.meta || {})) {
      if (!key2.startsWith("_"))
        properties[key2] = value;
    }
    let preNode = {
      type: "element",
      tagName: "pre",
      properties,
      children: []
    };
    let codeNode = {
      type: "element",
      tagName: "code",
      properties: {},
      children: lines
    };
    const lineNodes = [];
    const context = {
      ...transformerContext,
      structure,
      addClassToHast,
      get source() {
        return transformerContext.source;
      },
      get tokens() {
        return tokens;
      },
      get options() {
        return options;
      },
      get root() {
        return root2;
      },
      get pre() {
        return preNode;
      },
      get code() {
        return codeNode;
      },
      get lines() {
        return lineNodes;
      }
    };
    tokens.forEach((line, idx) => {
      if (idx) {
        if (structure === "inline")
          root2.children.push({ type: "element", tagName: "br", properties: {}, children: [] });
        else if (structure === "classic")
          lines.push({ type: "text", value: "\n" });
      }
      let lineNode = {
        type: "element",
        tagName: "span",
        properties: { class: "line" },
        children: []
      };
      let col = 0;
      for (const token2 of line) {
        let tokenNode = {
          type: "element",
          tagName: "span",
          properties: {
            ...token2.htmlAttrs
          },
          children: [{ type: "text", value: token2.content }]
        };
        const style = stringifyTokenStyle(token2.htmlStyle || getTokenStyleObject(token2));
        if (style)
          tokenNode.properties.style = style;
        for (const transformer of transformers)
          tokenNode = transformer?.span?.call(context, tokenNode, idx + 1, col, lineNode, token2) || tokenNode;
        if (structure === "inline")
          root2.children.push(tokenNode);
        else if (structure === "classic")
          lineNode.children.push(tokenNode);
        col += token2.content.length;
      }
      if (structure === "classic") {
        for (const transformer of transformers)
          lineNode = transformer?.line?.call(context, lineNode, idx + 1) || lineNode;
        lineNodes.push(lineNode);
        lines.push(lineNode);
      } else if (structure === "inline") {
        lineNodes.push(lineNode);
      }
    });
    if (structure === "classic") {
      for (const transformer of transformers)
        codeNode = transformer?.code?.call(context, codeNode) || codeNode;
      preNode.children.push(codeNode);
      for (const transformer of transformers)
        preNode = transformer?.pre?.call(context, preNode) || preNode;
      root2.children.push(preNode);
    } else if (structure === "inline") {
      const syntheticLines = [];
      let currentLine = {
        type: "element",
        tagName: "span",
        properties: { class: "line" },
        children: []
      };
      for (const child of root2.children) {
        if (child.type === "element" && child.tagName === "br") {
          syntheticLines.push(currentLine);
          currentLine = {
            type: "element",
            tagName: "span",
            properties: { class: "line" },
            children: []
          };
        } else if (child.type === "element" || child.type === "text") {
          currentLine.children.push(child);
        }
      }
      syntheticLines.push(currentLine);
      const syntheticCode = {
        type: "element",
        tagName: "code",
        properties: {},
        children: syntheticLines
      };
      let transformedCode = syntheticCode;
      for (const transformer of transformers)
        transformedCode = transformer?.code?.call(context, transformedCode) || transformedCode;
      root2.children = [];
      for (let i2 = 0; i2 < transformedCode.children.length; i2++) {
        if (i2 > 0)
          root2.children.push({ type: "element", tagName: "br", properties: {}, children: [] });
        const line = transformedCode.children[i2];
        if (line.type === "element")
          root2.children.push(...line.children);
      }
    }
    let result = root2;
    for (const transformer of transformers)
      result = transformer?.root?.call(context, result) || result;
    if (grammarState)
      setLastGrammarStateToMap(result, grammarState);
    return result;
  }
  function mergeWhitespaceTokens(tokens) {
    return tokens.map((line) => {
      const newLine = [];
      let carryOnContent = "";
      let firstOffset;
      line.forEach((token2, idx) => {
        const isDecorated = token2.fontStyle && (token2.fontStyle & FontStyle.Underline || token2.fontStyle & FontStyle.Strikethrough);
        const couldMerge = !isDecorated;
        if (couldMerge && token2.content.match(/^\s+$/) && line[idx + 1]) {
          if (firstOffset === void 0)
            firstOffset = token2.offset;
          carryOnContent += token2.content;
        } else {
          if (carryOnContent) {
            if (couldMerge) {
              newLine.push({
                ...token2,
                offset: firstOffset,
                content: carryOnContent + token2.content
              });
            } else {
              newLine.push(
                {
                  content: carryOnContent,
                  offset: firstOffset
                },
                token2
              );
            }
            firstOffset = void 0;
            carryOnContent = "";
          } else {
            newLine.push(token2);
          }
        }
      });
      return newLine;
    });
  }
  function splitWhitespaceTokens(tokens) {
    return tokens.map((line) => {
      return line.flatMap((token2) => {
        if (token2.content.match(/^\s+$/))
          return token2;
        const match = token2.content.match(/^(\s*)(.*?)(\s*)$/);
        if (!match)
          return token2;
        const [, leading, content, trailing] = match;
        if (!leading && !trailing)
          return token2;
        const expanded = [{
          ...token2,
          offset: token2.offset + leading.length,
          content
        }];
        if (leading) {
          expanded.unshift({
            content: leading,
            offset: token2.offset
          });
        }
        if (trailing) {
          expanded.push({
            content: trailing,
            offset: token2.offset + leading.length + content.length
          });
        }
        return expanded;
      });
    });
  }
  function mergeAdjacentStyledTokens(tokens) {
    return tokens.map((line) => {
      const newLine = [];
      for (const token2 of line) {
        if (newLine.length === 0) {
          newLine.push({ ...token2 });
          continue;
        }
        const prevToken = newLine[newLine.length - 1];
        const prevStyle = stringifyTokenStyle(prevToken.htmlStyle || getTokenStyleObject(prevToken));
        const currentStyle = stringifyTokenStyle(token2.htmlStyle || getTokenStyleObject(token2));
        const isPrevDecorated = prevToken.fontStyle && (prevToken.fontStyle & FontStyle.Underline || prevToken.fontStyle & FontStyle.Strikethrough);
        const isDecorated = token2.fontStyle && (token2.fontStyle & FontStyle.Underline || token2.fontStyle & FontStyle.Strikethrough);
        if (!isPrevDecorated && !isDecorated && prevStyle === currentStyle) {
          prevToken.content += token2.content;
        } else {
          newLine.push({ ...token2 });
        }
      }
      return newLine;
    });
  }
  var hastToHtml = toHtml;
  function codeToHtml(internal, code, options) {
    const context = {
      meta: {},
      options,
      codeToHast: (_code, _options) => codeToHast(internal, _code, _options),
      codeToTokens: (_code, _options) => codeToTokens(internal, _code, _options)
    };
    let result = hastToHtml(codeToHast(internal, code, options, context));
    for (const transformer of getTransformers(options))
      result = transformer.postprocess?.call(context, result, options) || result;
    return result;
  }
  var VSCODE_FALLBACK_EDITOR_FG = { light: "#333333", dark: "#bbbbbb" };
  var VSCODE_FALLBACK_EDITOR_BG = { light: "#fffffe", dark: "#1e1e1e" };
  var RESOLVED_KEY = "__shiki_resolved";
  function normalizeTheme(rawTheme) {
    if (rawTheme?.[RESOLVED_KEY])
      return rawTheme;
    const theme = {
      ...rawTheme
    };
    if (theme.tokenColors && !theme.settings) {
      theme.settings = theme.tokenColors;
      delete theme.tokenColors;
    }
    theme.type ||= "dark";
    theme.colorReplacements = { ...theme.colorReplacements };
    theme.settings ||= [];
    let { bg, fg } = theme;
    if (!bg || !fg) {
      const globalSetting = theme.settings ? theme.settings.find((s2) => !s2.name && !s2.scope) : void 0;
      if (globalSetting?.settings?.foreground)
        fg = globalSetting.settings.foreground;
      if (globalSetting?.settings?.background)
        bg = globalSetting.settings.background;
      if (!fg && theme?.colors?.["editor.foreground"])
        fg = theme.colors["editor.foreground"];
      if (!bg && theme?.colors?.["editor.background"])
        bg = theme.colors["editor.background"];
      if (!fg)
        fg = theme.type === "light" ? VSCODE_FALLBACK_EDITOR_FG.light : VSCODE_FALLBACK_EDITOR_FG.dark;
      if (!bg)
        bg = theme.type === "light" ? VSCODE_FALLBACK_EDITOR_BG.light : VSCODE_FALLBACK_EDITOR_BG.dark;
      theme.fg = fg;
      theme.bg = bg;
    }
    if (!(theme.settings[0] && theme.settings[0].settings && !theme.settings[0].scope)) {
      theme.settings.unshift({
        settings: {
          foreground: theme.fg,
          background: theme.bg
        }
      });
    }
    let replacementCount = 0;
    const replacementMap = /* @__PURE__ */ new Map();
    function getReplacementColor(value) {
      if (replacementMap.has(value))
        return replacementMap.get(value);
      replacementCount += 1;
      const hex = `#${replacementCount.toString(16).padStart(8, "0").toLowerCase()}`;
      if (theme.colorReplacements?.[`#${hex}`])
        return getReplacementColor(value);
      replacementMap.set(value, hex);
      return hex;
    }
    theme.settings = theme.settings.map((setting) => {
      const replaceFg = setting.settings?.foreground && !setting.settings.foreground.startsWith("#");
      const replaceBg = setting.settings?.background && !setting.settings.background.startsWith("#");
      if (!replaceFg && !replaceBg)
        return setting;
      const clone2 = {
        ...setting,
        settings: {
          ...setting.settings
        }
      };
      if (replaceFg) {
        const replacement = getReplacementColor(setting.settings.foreground);
        theme.colorReplacements[replacement] = setting.settings.foreground;
        clone2.settings.foreground = replacement;
      }
      if (replaceBg) {
        const replacement = getReplacementColor(setting.settings.background);
        theme.colorReplacements[replacement] = setting.settings.background;
        clone2.settings.background = replacement;
      }
      return clone2;
    });
    for (const key2 of Object.keys(theme.colors || {})) {
      if (key2 === "editor.foreground" || key2 === "editor.background" || key2.startsWith("terminal.ansi")) {
        if (!theme.colors[key2]?.startsWith("#")) {
          const replacement = getReplacementColor(theme.colors[key2]);
          theme.colorReplacements[replacement] = theme.colors[key2];
          theme.colors[key2] = replacement;
        }
      }
    }
    Object.defineProperty(theme, RESOLVED_KEY, {
      enumerable: false,
      writable: false,
      value: true
    });
    return theme;
  }
  async function resolveLangs(langs) {
    return Array.from(new Set((await Promise.all(
      langs.filter((l3) => !isSpecialLang(l3)).map(async (lang14) => await normalizeGetter(lang14).then((r4) => Array.isArray(r4) ? r4 : [r4]))
    )).flat()));
  }
  async function resolveThemes(themes) {
    const resolved = await Promise.all(
      themes.map(
        async (theme) => isSpecialTheme(theme) ? null : normalizeTheme(await normalizeGetter(theme))
      )
    );
    return resolved.filter((i2) => !!i2);
  }
  var _emitDeprecation = 3;
  var _emitError = false;
  function warnDeprecated(message, version = 3) {
    if (!_emitDeprecation)
      return;
    if (typeof _emitDeprecation === "number" && version > _emitDeprecation)
      return;
    if (_emitError) {
      throw new Error(`[SHIKI DEPRECATE]: ${message}`);
    } else {
      console.trace(`[SHIKI DEPRECATE]: ${message}`);
    }
  }
  var ShikiError2 = class extends Error {
    constructor(message) {
      super(message);
      this.name = "ShikiError";
    }
  };
  function resolveLangAlias(name, alias) {
    if (!alias)
      return name;
    if (alias[name]) {
      const resolved = /* @__PURE__ */ new Set([name]);
      while (alias[name]) {
        name = alias[name];
        if (resolved.has(name))
          throw new ShikiError2(`Circular alias \`${Array.from(resolved).join(" -> ")} -> ${name}\``);
        resolved.add(name);
      }
    }
    return name;
  }
  var Registry2 = class extends Registry {
    constructor(_resolver, _themes, _langs, _alias = {}) {
      super(_resolver);
      this._resolver = _resolver;
      this._themes = _themes;
      this._langs = _langs;
      this._alias = _alias;
      this._themes.map((t) => this.loadTheme(t));
      this.loadLanguages(this._langs);
    }
    _resolvedThemes = /* @__PURE__ */ new Map();
    _resolvedGrammars = /* @__PURE__ */ new Map();
    _langMap = /* @__PURE__ */ new Map();
    _langGraph = /* @__PURE__ */ new Map();
    _textmateThemeCache = /* @__PURE__ */ new WeakMap();
    _loadedThemesCache = null;
    _loadedLanguagesCache = null;
    getTheme(theme) {
      if (typeof theme === "string")
        return this._resolvedThemes.get(theme);
      else
        return this.loadTheme(theme);
    }
    loadTheme(theme) {
      const _theme = normalizeTheme(theme);
      if (_theme.name) {
        this._resolvedThemes.set(_theme.name, _theme);
        this._loadedThemesCache = null;
      }
      return _theme;
    }
    getLoadedThemes() {
      if (!this._loadedThemesCache)
        this._loadedThemesCache = [...this._resolvedThemes.keys()];
      return this._loadedThemesCache;
    }
    // Override and re-implement this method to cache the textmate themes as `TextMateTheme.createFromRawTheme`
    // is expensive. Themes can switch often especially for dual-theme support.
    //
    // The parent class also accepts `colorMap` as the second parameter, but since we don't use that,
    // we omit here so it's easier to cache the themes.
    setTheme(theme) {
      let textmateTheme = this._textmateThemeCache.get(theme);
      if (!textmateTheme) {
        textmateTheme = Theme.createFromRawTheme(theme);
        this._textmateThemeCache.set(theme, textmateTheme);
      }
      this._syncRegistry.setTheme(textmateTheme);
    }
    getGrammar(name) {
      name = resolveLangAlias(name, this._alias);
      return this._resolvedGrammars.get(name);
    }
    loadLanguage(lang14) {
      if (this.getGrammar(lang14.name))
        return;
      const embeddedLazilyBy = new Set(
        [...this._langMap.values()].filter((i2) => i2.embeddedLangsLazy?.includes(lang14.name))
      );
      this._resolver.addLanguage(lang14);
      const grammarConfig = {
        balancedBracketSelectors: lang14.balancedBracketSelectors || ["*"],
        unbalancedBracketSelectors: lang14.unbalancedBracketSelectors || []
      };
      this._syncRegistry._rawGrammars.set(lang14.scopeName, lang14);
      const g = this.loadGrammarWithConfiguration(lang14.scopeName, 1, grammarConfig);
      g.name = lang14.name;
      this._resolvedGrammars.set(lang14.name, g);
      if (lang14.aliases) {
        lang14.aliases.forEach((alias) => {
          this._alias[alias] = lang14.name;
        });
      }
      this._loadedLanguagesCache = null;
      if (embeddedLazilyBy.size) {
        for (const e of embeddedLazilyBy) {
          this._resolvedGrammars.delete(e.name);
          this._loadedLanguagesCache = null;
          this._syncRegistry?._injectionGrammars?.delete(e.scopeName);
          this._syncRegistry?._grammars?.delete(e.scopeName);
          this.loadLanguage(this._langMap.get(e.name));
        }
      }
    }
    dispose() {
      super.dispose();
      this._resolvedThemes.clear();
      this._resolvedGrammars.clear();
      this._langMap.clear();
      this._langGraph.clear();
      this._loadedThemesCache = null;
    }
    loadLanguages(langs) {
      for (const lang14 of langs)
        this.resolveEmbeddedLanguages(lang14);
      const langsGraphArray = Array.from(this._langGraph.entries());
      const missingLangs = langsGraphArray.filter(([_3, lang14]) => !lang14);
      if (missingLangs.length) {
        const dependents = langsGraphArray.filter(([_3, lang14]) => {
          if (!lang14)
            return false;
          const embedded = lang14.embeddedLanguages || lang14.embeddedLangs;
          return embedded?.some((l3) => missingLangs.map(([name]) => name).includes(l3));
        }).filter((lang14) => !missingLangs.includes(lang14));
        throw new ShikiError2(`Missing languages ${missingLangs.map(([name]) => `\`${name}\``).join(", ")}, required by ${dependents.map(([name]) => `\`${name}\``).join(", ")}`);
      }
      for (const [_3, lang14] of langsGraphArray)
        this._resolver.addLanguage(lang14);
      for (const [_3, lang14] of langsGraphArray)
        this.loadLanguage(lang14);
    }
    getLoadedLanguages() {
      if (!this._loadedLanguagesCache) {
        this._loadedLanguagesCache = [
          .../* @__PURE__ */ new Set([...this._resolvedGrammars.keys(), ...Object.keys(this._alias)])
        ];
      }
      return this._loadedLanguagesCache;
    }
    resolveEmbeddedLanguages(lang14) {
      this._langMap.set(lang14.name, lang14);
      this._langGraph.set(lang14.name, lang14);
      const embedded = lang14.embeddedLanguages ?? lang14.embeddedLangs;
      if (embedded) {
        for (const embeddedLang of embedded)
          this._langGraph.set(embeddedLang, this._langMap.get(embeddedLang));
      }
    }
  };
  var Resolver = class {
    _langs = /* @__PURE__ */ new Map();
    _scopeToLang = /* @__PURE__ */ new Map();
    _injections = /* @__PURE__ */ new Map();
    _onigLib;
    constructor(engine, langs) {
      this._onigLib = {
        createOnigScanner: (patterns) => engine.createScanner(patterns),
        createOnigString: (s2) => engine.createString(s2)
      };
      langs.forEach((i2) => this.addLanguage(i2));
    }
    get onigLib() {
      return this._onigLib;
    }
    getLangRegistration(langIdOrAlias) {
      return this._langs.get(langIdOrAlias);
    }
    loadGrammar(scopeName) {
      return this._scopeToLang.get(scopeName);
    }
    addLanguage(l3) {
      this._langs.set(l3.name, l3);
      if (l3.aliases) {
        l3.aliases.forEach((a2) => {
          this._langs.set(a2, l3);
        });
      }
      this._scopeToLang.set(l3.scopeName, l3);
      if (l3.injectTo) {
        l3.injectTo.forEach((i2) => {
          if (!this._injections.get(i2))
            this._injections.set(i2, []);
          this._injections.get(i2).push(l3.scopeName);
        });
      }
    }
    getInjections(scopeName) {
      const scopeParts = scopeName.split(".");
      let injections = [];
      for (let i2 = 1; i2 <= scopeParts.length; i2++) {
        const subScopeName = scopeParts.slice(0, i2).join(".");
        injections = [...injections, ...this._injections.get(subScopeName) || []];
      }
      return injections;
    }
  };
  var instancesCount = 0;
  function createShikiInternalSync(options) {
    instancesCount += 1;
    if (options.warnings !== false && instancesCount >= 10 && instancesCount % 10 === 0)
      console.warn(`[Shiki] ${instancesCount} instances have been created. Shiki is supposed to be used as a singleton, consider refactoring your code to cache your highlighter instance; Or call \`highlighter.dispose()\` to release unused instances.`);
    let isDisposed = false;
    if (!options.engine)
      throw new ShikiError2("`engine` option is required for synchronous mode");
    const langs = (options.langs || []).flat(1);
    const themes = (options.themes || []).flat(1).map(normalizeTheme);
    const resolver = new Resolver(options.engine, langs);
    const _registry = new Registry2(resolver, themes, langs, options.langAlias);
    let _lastTheme;
    function resolveLangAlias$1(name) {
      return resolveLangAlias(name, options.langAlias);
    }
    function getLanguage(name) {
      ensureNotDisposed();
      const _lang = _registry.getGrammar(typeof name === "string" ? name : name.name);
      if (!_lang)
        throw new ShikiError2(`Language \`${name}\` not found, you may need to load it first`);
      return _lang;
    }
    function getTheme(name) {
      if (name === "none")
        return { bg: "", fg: "", name: "none", settings: [], type: "dark" };
      ensureNotDisposed();
      const _theme = _registry.getTheme(name);
      if (!_theme)
        throw new ShikiError2(`Theme \`${name}\` not found, you may need to load it first`);
      return _theme;
    }
    function setTheme(name) {
      ensureNotDisposed();
      const theme = getTheme(name);
      if (_lastTheme !== name) {
        _registry.setTheme(theme);
        _lastTheme = name;
      }
      const colorMap = _registry.getColorMap();
      return {
        theme,
        colorMap
      };
    }
    function getLoadedThemes() {
      ensureNotDisposed();
      return _registry.getLoadedThemes();
    }
    function getLoadedLanguages() {
      ensureNotDisposed();
      return _registry.getLoadedLanguages();
    }
    function loadLanguageSync(...langs2) {
      ensureNotDisposed();
      _registry.loadLanguages(langs2.flat(1));
    }
    async function loadLanguage(...langs2) {
      return loadLanguageSync(await resolveLangs(langs2));
    }
    function loadThemeSync(...themes2) {
      ensureNotDisposed();
      for (const theme of themes2.flat(1)) {
        _registry.loadTheme(theme);
      }
    }
    async function loadTheme(...themes2) {
      ensureNotDisposed();
      return loadThemeSync(await resolveThemes(themes2));
    }
    function ensureNotDisposed() {
      if (isDisposed)
        throw new ShikiError2("Shiki instance has been disposed");
    }
    function dispose() {
      if (isDisposed)
        return;
      isDisposed = true;
      _registry.dispose();
      instancesCount -= 1;
    }
    return {
      setTheme,
      getTheme,
      getLanguage,
      getLoadedThemes,
      getLoadedLanguages,
      resolveLangAlias: resolveLangAlias$1,
      loadLanguage,
      loadLanguageSync,
      loadTheme,
      loadThemeSync,
      dispose,
      [Symbol.dispose]: dispose
    };
  }
  async function createShikiInternal(options) {
    if (!options.engine) {
      warnDeprecated("`engine` option is required. Use `createOnigurumaEngine` or `createJavaScriptRegexEngine` to create an engine.");
    }
    const [
      themes,
      langs,
      engine
    ] = await Promise.all([
      resolveThemes(options.themes || []),
      resolveLangs(options.langs || []),
      options.engine
    ]);
    return createShikiInternalSync({
      ...options,
      themes,
      langs,
      engine
    });
  }
  async function createHighlighterCore(options) {
    const internal = await createShikiInternal(options);
    return {
      getLastGrammarState: (...args) => getLastGrammarState(internal, ...args),
      codeToTokensBase: (code, options2) => codeToTokensBase(internal, code, options2),
      codeToTokensWithThemes: (code, options2) => codeToTokensWithThemes(internal, code, options2),
      codeToTokens: (code, options2) => codeToTokens(internal, code, options2),
      codeToHast: (code, options2) => codeToHast(internal, code, options2),
      codeToHtml: (code, options2) => codeToHtml(internal, code, options2),
      getBundledLanguages: () => ({}),
      getBundledThemes: () => ({}),
      ...internal,
      getInternalContext: () => internal
    };
  }
  function createBundledHighlighter(options) {
    const bundledLanguages2 = options.langs;
    const bundledThemes2 = options.themes;
    const engine = options.engine;
    async function createHighlighter2(options2) {
      function resolveLang(lang14) {
        if (typeof lang14 === "string") {
          lang14 = options2.langAlias?.[lang14] || lang14;
          if (isSpecialLang(lang14))
            return [];
          const bundle = bundledLanguages2[lang14];
          if (!bundle)
            throw new ShikiError(`Language \`${lang14}\` is not included in this bundle. You may want to load it from external source.`);
          return bundle;
        }
        return lang14;
      }
      function resolveTheme(theme) {
        if (isSpecialTheme(theme))
          return "none";
        if (typeof theme === "string") {
          const bundle = bundledThemes2[theme];
          if (!bundle)
            throw new ShikiError(`Theme \`${theme}\` is not included in this bundle. You may want to load it from external source.`);
          return bundle;
        }
        return theme;
      }
      const _themes = (options2.themes ?? []).map((i2) => resolveTheme(i2));
      const langs = (options2.langs ?? []).map((i2) => resolveLang(i2));
      const core2 = await createHighlighterCore({
        engine: options2.engine ?? engine(),
        ...options2,
        themes: _themes,
        langs
      });
      return {
        ...core2,
        loadLanguage(...langs2) {
          return core2.loadLanguage(...langs2.map(resolveLang));
        },
        loadTheme(...themes) {
          return core2.loadTheme(...themes.map(resolveTheme));
        },
        getBundledLanguages() {
          return bundledLanguages2;
        },
        getBundledThemes() {
          return bundledThemes2;
        }
      };
    }
    return createHighlighter2;
  }
  function makeSingletonHighlighter(createHighlighter2) {
    let _shiki;
    async function getSingletonHighlighter2(options = {}) {
      if (!_shiki) {
        _shiki = createHighlighter2({
          ...options,
          themes: [],
          langs: []
        });
        const s2 = await _shiki;
        await Promise.all([
          s2.loadTheme(...options.themes || []),
          s2.loadLanguage(...options.langs || [])
        ]);
        return s2;
      } else {
        const s2 = await _shiki;
        await Promise.all([
          s2.loadTheme(...options.themes || []),
          s2.loadLanguage(...options.langs || [])
        ]);
        return s2;
      }
    }
    return getSingletonHighlighter2;
  }
  function createSingletonShorthands(createHighlighter2, config) {
    const getSingletonHighlighter2 = makeSingletonHighlighter(createHighlighter2);
    async function get(code, options) {
      const shiki = await getSingletonHighlighter2({
        langs: [options.lang],
        themes: "theme" in options ? [options.theme] : Object.values(options.themes)
      });
      const langs = await config?.guessEmbeddedLanguages?.(code, options.lang, shiki);
      if (langs) {
        await shiki.loadLanguage(...langs);
      }
      return shiki;
    }
    return {
      getSingletonHighlighter(options) {
        return getSingletonHighlighter2(options);
      },
      async codeToHtml(code, options) {
        const shiki = await get(code, options);
        return shiki.codeToHtml(code, options);
      },
      async codeToHast(code, options) {
        const shiki = await get(code, options);
        return shiki.codeToHast(code, options);
      },
      async codeToTokens(code, options) {
        const shiki = await get(code, options);
        return shiki.codeToTokens(code, options);
      },
      async codeToTokensBase(code, options) {
        const shiki = await get(code, options);
        return shiki.codeToTokensBase(code, options);
      },
      async codeToTokensWithThemes(code, options) {
        const shiki = await get(code, options);
        return shiki.codeToTokensWithThemes(code, options);
      },
      async getLastGrammarState(code, options) {
        const shiki = await getSingletonHighlighter2({
          langs: [options.lang],
          themes: [options.theme]
        });
        return shiki.getLastGrammarState(code, options);
      }
    };
  }

  // node_modules/oniguruma-parser/dist/utils.js
  function r(e) {
    if ([...e].length !== 1) throw new Error(`Expected "${e}" to be a single code point`);
    return e.codePointAt(0);
  }
  function l(e, t, n) {
    return e.has(t) || e.set(t, n), e.get(t);
  }
  var i = /* @__PURE__ */ new Set(["alnum", "alpha", "ascii", "blank", "cntrl", "digit", "graph", "lower", "print", "punct", "space", "upper", "word", "xdigit"]);
  var o = String.raw;
  function u(e, t) {
    if (e == null) throw new Error(t ?? "Value expected");
    return e;
  }

  // node_modules/oniguruma-parser/dist/tokenizer/tokenize.js
  var m = o`\[\^?`;
  var b = `c.? | C(?:-.?)?|${o`[pP]\{(?:\^?[-\x20_]*[A-Za-z][-\x20\w]*\})?`}|${o`x[89A-Fa-f]\p{AHex}(?:\\x[89A-Fa-f]\p{AHex})*`}|${o`u(?:\p{AHex}{4})? | x\{[^\}]*\}? | x\p{AHex}{0,2}`}|${o`o\{[^\}]*\}?`}|${o`\d{1,3}`}`;
  var y = /[?*+][?+]?|\{(?:\d+(?:,\d*)?|,\d+)\}\??/;
  var C = new RegExp(o`
  \\ (?:
    ${b}
    | [gk]<[^>]*>?
    | [gk]'[^']*'?
    | .
  )
  | \( (?:
    \? (?:
      [:=!>({]
      | <[=!]
      | <[^>]*>
      | '[^']*'
      | ~\|?
      | #(?:[^)\\]|\\.?)*
      | [^:)]*[:)]
    )?
    | \*[^\)]*\)?
  )?
  | (?:${y.source})+
  | ${m}
  | .
`.replace(/\s+/g, ""), "gsu");
  var T = new RegExp(o`
  \\ (?:
    ${b}
    | .
  )
  | \[:(?:\^?\p{Alpha}+|\^):\]
  | ${m}
  | &&
  | .
`.replace(/\s+/g, ""), "gsu");
  function M(e, n = {}) {
    const t = { flags: "", ...n, rules: { captureGroup: false, singleline: false, ...n.rules } };
    if (typeof e != "string") throw new Error("String expected as pattern");
    const o3 = Y(t.flags), s2 = [o3.extended], a2 = { captureGroup: t.rules.captureGroup, getCurrentModX() {
      return s2.at(-1);
    }, numOpenGroups: 0, popModX() {
      s2.pop();
    }, pushModX(u2) {
      s2.push(u2);
    }, replaceCurrentModX(u2) {
      s2[s2.length - 1] = u2;
    }, singleline: t.rules.singleline };
    let r4 = [], i2;
    for (C.lastIndex = 0; i2 = C.exec(e); ) {
      const u2 = F(a2, e, i2[0], C.lastIndex);
      u2.tokens ? r4.push(...u2.tokens) : u2.token && r4.push(u2.token), u2.lastIndex !== void 0 && (C.lastIndex = u2.lastIndex);
    }
    const l3 = [];
    let c = 0;
    r4.filter((u2) => u2.type === "GroupOpen").forEach((u2) => {
      u2.kind === "capturing" ? u2.number = ++c : u2.raw === "(" && l3.push(u2);
    }), c || l3.forEach((u2, S2) => {
      u2.kind = "capturing", u2.number = S2 + 1;
    });
    const g = c || l3.length;
    return { tokens: r4.map((u2) => u2.type === "EscapedNumber" ? ee(u2, g) : u2).flat(), flags: o3 };
  }
  function F(e, n, t, o3) {
    const [s2, a2] = t;
    if (t === "[" || t === "[^") {
      const r4 = K(n, t, o3);
      return { tokens: r4.tokens, lastIndex: r4.lastIndex };
    }
    if (s2 === "\\") {
      if ("AbBGyYzZ".includes(a2)) return { token: w(t, t) };
      if (/^\\g[<']/.test(t)) {
        if (!/^\\g(?:<[^>]+>|'[^']+')$/.test(t)) throw new Error(`Invalid group name "${t}"`);
        return { token: R(t) };
      }
      if (/^\\k[<']/.test(t)) {
        if (!/^\\k(?:<[^>]+>|'[^']+')$/.test(t)) throw new Error(`Invalid group name "${t}"`);
        return { token: A(t) };
      }
      if (a2 === "K") return { token: I("keep", t) };
      if (a2 === "N" || a2 === "R") return { token: k("newline", t, { negate: a2 === "N" }) };
      if (a2 === "O") return { token: k("any", t) };
      if (a2 === "X") return { token: k("text_segment", t) };
      const r4 = x(t, { inCharClass: false });
      return Array.isArray(r4) ? { tokens: r4 } : { token: r4 };
    }
    if (s2 === "(") {
      if (a2 === "*") return { token: j(t) };
      if (t === "(?{") throw new Error(`Unsupported callout "${t}"`);
      if (t.startsWith("(?#")) {
        if (n[o3] !== ")") throw new Error('Unclosed comment group "(?#"');
        return { lastIndex: o3 + 1 };
      }
      if (/^\(\?[-imx]+[:)]$/.test(t)) return { token: L(t, e) };
      if (e.pushModX(e.getCurrentModX()), e.numOpenGroups++, t === "(" && !e.captureGroup || t === "(?:") return { token: f("group", t) };
      if (t === "(?>") return { token: f("atomic", t) };
      if (t === "(?=" || t === "(?!" || t === "(?<=" || t === "(?<!") return { token: f(t[2] === "<" ? "lookbehind" : "lookahead", t, { negate: t.endsWith("!") }) };
      if (t === "(" && e.captureGroup || t.startsWith("(?<") && t.endsWith(">") || t.startsWith("(?'") && t.endsWith("'")) return { token: f("capturing", t, { ...t !== "(" && { name: t.slice(3, -1) } }) };
      if (t.startsWith("(?~")) {
        if (t === "(?~|") throw new Error(`Unsupported absence function kind "${t}"`);
        return { token: f("absence_repeater", t) };
      }
      throw t === "(?(" ? new Error(`Unsupported conditional "${t}"`) : new Error(`Invalid or unsupported group option "${t}"`);
    }
    if (t === ")") {
      if (e.popModX(), e.numOpenGroups--, e.numOpenGroups < 0) throw new Error('Unmatched ")"');
      return { token: Q(t) };
    }
    if (e.getCurrentModX()) {
      if (t === "#") {
        const r4 = n.indexOf(`
`, o3);
        return { lastIndex: r4 === -1 ? n.length : r4 };
      }
      if (/^\s$/.test(t)) {
        const r4 = /\s+/y;
        return r4.lastIndex = o3, { lastIndex: r4.exec(n) ? r4.lastIndex : o3 };
      }
    }
    if (t === ".") return { token: k("dot", t) };
    if (t === "^" || t === "$") {
      const r4 = e.singleline ? { "^": o`\A`, $: o`\Z` }[t] : t;
      return { token: w(r4, t) };
    }
    return t === "|" ? { token: P(t) } : y.test(t) ? { tokens: te(t) } : { token: d(r(t), t) };
  }
  function K(e, n, t) {
    const o3 = [E(n[1] === "^", n)];
    let s2 = 1, a2;
    for (T.lastIndex = t; a2 = T.exec(e); ) {
      const r4 = a2[0];
      if (r4[0] === "[" && r4[1] !== ":") s2++, o3.push(E(r4[1] === "^", r4));
      else if (r4 === "]") {
        if (o3.at(-1).type === "CharacterClassOpen") o3.push(d(93, r4));
        else if (s2--, o3.push(z(r4)), !s2) break;
      } else {
        const i2 = X(r4);
        Array.isArray(i2) ? o3.push(...i2) : o3.push(i2);
      }
    }
    return { tokens: o3, lastIndex: T.lastIndex || e.length };
  }
  function X(e) {
    if (e[0] === "\\") return x(e, { inCharClass: true });
    if (e[0] === "[") {
      const n = /\[:(?<negate>\^?)(?<name>[a-z]+):\]/.exec(e);
      if (!n || !i.has(n.groups.name)) throw new Error(`Invalid POSIX class "${e}"`);
      return k("posix", e, { value: n.groups.name, negate: !!n.groups.negate });
    }
    return e === "-" ? U(e) : e === "&&" ? H(e) : d(r(e), e);
  }
  function x(e, { inCharClass: n }) {
    const t = e[1];
    if (t === "c" || t === "C") return Z(e);
    if ("dDhHsSwW".includes(t)) return q(e);
    if (e.startsWith(o`\o{`)) throw new Error(`Incomplete, invalid, or unsupported octal code point "${e}"`);
    if (/^\\[pP]\{/.test(e)) {
      if (e.length === 3) throw new Error(`Incomplete or invalid Unicode property "${e}"`);
      return V(e);
    }
    if (/^\\x[89A-Fa-f]\p{AHex}/u.test(e)) try {
      const o3 = e.split(/\\x/).slice(1).map((i2) => parseInt(i2, 16)), s2 = new TextDecoder("utf-8", { ignoreBOM: true, fatal: true }).decode(new Uint8Array(o3)), a2 = new TextEncoder();
      return [...s2].map((i2) => {
        const l3 = [...a2.encode(i2)].map((c) => `\\x${c.toString(16)}`).join("");
        return d(r(i2), l3);
      });
    } catch {
      throw new Error(`Multibyte code "${e}" incomplete or invalid in Oniguruma`);
    }
    if (t === "u" || t === "x") return d(J(e), e);
    if ($.has(t)) return d($.get(t), e);
    if (/\d/.test(t)) return W(n, e);
    if (e === "\\") throw new Error(o`Incomplete escape "\"`);
    if (t === "M") throw new Error(`Unsupported meta "${e}"`);
    if ([...e].length === 2) return d(e.codePointAt(1), e);
    throw new Error(`Unexpected escape "${e}"`);
  }
  function P(e) {
    return { type: "Alternator", raw: e };
  }
  function w(e, n) {
    return { type: "Assertion", kind: e, raw: n };
  }
  function A(e) {
    return { type: "Backreference", raw: e };
  }
  function d(e, n) {
    return { type: "Character", value: e, raw: n };
  }
  function z(e) {
    return { type: "CharacterClassClose", raw: e };
  }
  function U(e) {
    return { type: "CharacterClassHyphen", raw: e };
  }
  function H(e) {
    return { type: "CharacterClassIntersector", raw: e };
  }
  function E(e, n) {
    return { type: "CharacterClassOpen", negate: e, raw: n };
  }
  function k(e, n, t = {}) {
    return { type: "CharacterSet", kind: e, ...t, raw: n };
  }
  function I(e, n, t = {}) {
    return e === "keep" ? { type: "Directive", kind: e, raw: n } : { type: "Directive", kind: e, flags: u(t.flags), raw: n };
  }
  function W(e, n) {
    return { type: "EscapedNumber", inCharClass: e, raw: n };
  }
  function Q(e) {
    return { type: "GroupClose", raw: e };
  }
  function f(e, n, t = {}) {
    return { type: "GroupOpen", kind: e, ...t, raw: n };
  }
  function D(e, n, t, o3) {
    return { type: "NamedCallout", kind: e, tag: n, arguments: t, raw: o3 };
  }
  function _(e, n, t, o3) {
    return { type: "Quantifier", kind: e, min: n, max: t, raw: o3 };
  }
  function R(e) {
    return { type: "Subroutine", raw: e };
  }
  var B = /* @__PURE__ */ new Set(["COUNT", "CMP", "ERROR", "FAIL", "MAX", "MISMATCH", "SKIP", "TOTAL_COUNT"]);
  var $ = /* @__PURE__ */ new Map([["a", 7], ["b", 8], ["e", 27], ["f", 12], ["n", 10], ["r", 13], ["t", 9], ["v", 11]]);
  function Z(e) {
    const n = e[1] === "c" ? e[2] : e[3];
    if (!n || !/[A-Za-z]/.test(n)) throw new Error(`Unsupported control character "${e}"`);
    return d(r(n.toUpperCase()) - 64, e);
  }
  function L(e, n) {
    let { on: t, off: o3 } = /^\(\?(?<on>[imx]*)(?:-(?<off>[-imx]*))?/.exec(e).groups;
    o3 ??= "";
    const s2 = (n.getCurrentModX() || t.includes("x")) && !o3.includes("x"), a2 = v(t), r4 = v(o3), i2 = {};
    if (a2 && (i2.enable = a2), r4 && (i2.disable = r4), e.endsWith(")")) return n.replaceCurrentModX(s2), I("flags", e, { flags: i2 });
    if (e.endsWith(":")) return n.pushModX(s2), n.numOpenGroups++, f("group", e, { ...(a2 || r4) && { flags: i2 } });
    throw new Error(`Unexpected flag modifier "${e}"`);
  }
  function j(e) {
    const n = /\(\*(?<name>[A-Za-z_]\w*)?(?:\[(?<tag>(?:[A-Za-z_]\w*)?)\])?(?:\{(?<args>[^}]*)\})?\)/.exec(e);
    if (!n) throw new Error(`Incomplete or invalid named callout "${e}"`);
    const { name: t, tag: o3, args: s2 } = n.groups;
    if (!t) throw new Error(`Invalid named callout "${e}"`);
    if (o3 === "") throw new Error(`Named callout tag with empty value not allowed "${e}"`);
    const a2 = s2 ? s2.split(",").filter((g) => g !== "").map((g) => /^[+-]?\d+$/.test(g) ? +g : g) : [], [r4, i2, l3] = a2, c = B.has(t) ? t.toLowerCase() : "custom";
    switch (c) {
      case "fail":
      case "mismatch":
      case "skip":
        if (a2.length > 0) throw new Error(`Named callout arguments not allowed "${a2}"`);
        break;
      case "error":
        if (a2.length > 1) throw new Error(`Named callout allows only one argument "${a2}"`);
        if (typeof r4 == "string") throw new Error(`Named callout argument must be a number "${r4}"`);
        break;
      case "max":
        if (!a2.length || a2.length > 2) throw new Error(`Named callout must have one or two arguments "${a2}"`);
        if (typeof r4 == "string" && !/^[A-Za-z_]\w*$/.test(r4)) throw new Error(`Named callout argument one must be a tag or number "${r4}"`);
        if (a2.length === 2 && (typeof i2 == "number" || !/^[<>X]$/.test(i2))) throw new Error(`Named callout optional argument two must be '<', '>', or 'X' "${i2}"`);
        break;
      case "count":
      case "total_count":
        if (a2.length > 1) throw new Error(`Named callout allows only one argument "${a2}"`);
        if (a2.length === 1 && (typeof r4 == "number" || !/^[<>X]$/.test(r4))) throw new Error(`Named callout optional argument must be '<', '>', or 'X' "${r4}"`);
        break;
      case "cmp":
        if (a2.length !== 3) throw new Error(`Named callout must have three arguments "${a2}"`);
        if (typeof r4 == "string" && !/^[A-Za-z_]\w*$/.test(r4)) throw new Error(`Named callout argument one must be a tag or number "${r4}"`);
        if (typeof i2 == "number" || !/^(?:[<>!=]=|[<>])$/.test(i2)) throw new Error(`Named callout argument two must be '==', '!=', '>', '<', '>=', or '<=' "${i2}"`);
        if (typeof l3 == "string" && !/^[A-Za-z_]\w*$/.test(l3)) throw new Error(`Named callout argument three must be a tag or number "${l3}"`);
        break;
      case "custom":
        throw new Error(`Undefined callout name "${t}"`);
      default:
        throw new Error(`Unexpected named callout kind "${c}"`);
    }
    return D(c, o3 ?? null, s2?.split(",") ?? null, e);
  }
  function O(e) {
    let n = null, t, o3;
    if (e[0] === "{") {
      const { minStr: s2, maxStr: a2 } = /^\{(?<minStr>\d*)(?:,(?<maxStr>\d*))?/.exec(e).groups, r4 = 1e5;
      if (+s2 > r4 || a2 && +a2 > r4) throw new Error("Quantifier value unsupported in Oniguruma");
      if (t = +s2, o3 = a2 === void 0 ? +s2 : a2 === "" ? 1 / 0 : +a2, t > o3 && (n = "possessive", [t, o3] = [o3, t]), e.endsWith("?")) {
        if (n === "possessive") throw new Error('Unsupported possessive interval quantifier chain with "?"');
        n = "lazy";
      } else n || (n = "greedy");
    } else t = e[0] === "+" ? 1 : 0, o3 = e[0] === "?" ? 1 : 1 / 0, n = e[1] === "+" ? "possessive" : e[1] === "?" ? "lazy" : "greedy";
    return _(n, t, o3, e);
  }
  function q(e) {
    const n = e[1].toLowerCase();
    return k({ d: "digit", h: "hex", s: "space", w: "word" }[n], e, { negate: e[1] !== n });
  }
  function V(e) {
    const { p: n, neg: t, value: o3 } = /^\\(?<p>[pP])\{(?<neg>\^?)(?<value>[^}]+)/.exec(e).groups;
    return k("property", e, { value: o3, negate: n === "P" && !t || n === "p" && !!t });
  }
  function v(e) {
    const n = {};
    return e.includes("i") && (n.ignoreCase = true), e.includes("m") && (n.dotAll = true), e.includes("x") && (n.extended = true), Object.keys(n).length ? n : null;
  }
  function Y(e) {
    const n = { ignoreCase: false, dotAll: false, extended: false, digitIsAscii: false, posixIsAscii: false, spaceIsAscii: false, wordIsAscii: false, textSegmentMode: null };
    for (let t = 0; t < e.length; t++) {
      const o3 = e[t];
      if (!"imxDPSWy".includes(o3)) throw new Error(`Invalid flag "${o3}"`);
      if (o3 === "y") {
        if (!/^y{[gw]}/.test(e.slice(t))) throw new Error('Invalid or unspecified flag "y" mode');
        n.textSegmentMode = e[t + 2] === "g" ? "grapheme" : "word", t += 3;
        continue;
      }
      n[{ i: "ignoreCase", m: "dotAll", x: "extended", D: "digitIsAscii", P: "posixIsAscii", S: "spaceIsAscii", W: "wordIsAscii" }[o3]] = true;
    }
    return n;
  }
  function J(e) {
    if (/^(?:\\u(?!\p{AHex}{4})|\\x(?!\p{AHex}{1,2}|\{\p{AHex}{1,8}\}))/u.test(e)) throw new Error(`Incomplete or invalid escape "${e}"`);
    const n = e[2] === "{" ? /^\\x\{\s*(?<hex>\p{AHex}+)/u.exec(e).groups.hex : e.slice(2);
    return parseInt(n, 16);
  }
  function ee(e, n) {
    const { raw: t, inCharClass: o3 } = e, s2 = t.slice(1);
    if (!o3 && (s2 !== "0" && s2.length === 1 || s2[0] !== "0" && +s2 <= n)) return [A(t)];
    const a2 = [], r4 = s2.match(/^[0-7]+|\d/g);
    for (let i2 = 0; i2 < r4.length; i2++) {
      const l3 = r4[i2];
      let c;
      if (i2 === 0 && l3 !== "8" && l3 !== "9") {
        if (c = parseInt(l3, 8), c > 127) throw new Error(o`Octal encoded byte above 177 unsupported "${t}"`);
      } else c = r(l3);
      a2.push(d(c, (i2 === 0 ? "\\" : "") + l3));
    }
    return a2;
  }
  function te(e) {
    const n = [], t = new RegExp(y, "gy");
    let o3;
    for (; o3 = t.exec(e); ) {
      const s2 = o3[0];
      if (s2[0] === "{") {
        const a2 = /^\{(?<min>\d+),(?<max>\d+)\}\??$/.exec(s2);
        if (a2) {
          const { min: r4, max: i2 } = a2.groups;
          if (+r4 > +i2 && s2.endsWith("?")) {
            t.lastIndex--, n.push(O(s2.slice(0, -1)));
            continue;
          }
        }
      }
      n.push(O(s2));
    }
    return n;
  }

  // node_modules/oniguruma-parser/dist/parser/node-utils.js
  function o2(e, t) {
    if (!Array.isArray(e.body)) throw new Error("Expected node with body array");
    if (e.body.length !== 1) return false;
    const r4 = e.body[0];
    return !t || Object.keys(t).every((n) => t[n] === r4[n]);
  }
  function s(e) {
    return y2.has(e.type);
  }
  var y2 = /* @__PURE__ */ new Set(["AbsenceFunction", "Backreference", "CapturingGroup", "Character", "CharacterClass", "CharacterSet", "Group", "Quantifier", "Subroutine"]);

  // node_modules/oniguruma-parser/dist/parser/parse.js
  function J2(e, r4 = {}) {
    const n = { flags: "", normalizeUnknownPropertyNames: false, skipBackrefValidation: false, skipLookbehindValidation: false, skipPropertyNameValidation: false, unicodePropertyMap: null, ...r4, rules: { captureGroup: false, singleline: false, ...r4.rules } }, t = M(e, { flags: n.flags, rules: { captureGroup: n.rules.captureGroup, singleline: n.rules.singleline } }), s2 = (p2, N) => {
      const u2 = t.tokens[o3.nextIndex];
      switch (o3.parent = p2, o3.nextIndex++, u2.type) {
        case "Alternator":
          return b2();
        case "Assertion":
          return W2(u2);
        case "Backreference":
          return X2(u2, o3);
        case "Character":
          return m2(u2.value, { useLastValid: !!N.isCheckingRangeEnd });
        case "CharacterClassHyphen":
          return ee2(u2, o3, N);
        case "CharacterClassOpen":
          return re2(u2, o3, N);
        case "CharacterSet":
          return ne(u2, o3);
        case "Directive":
          return I2(u2.kind, { flags: u2.flags });
        case "GroupOpen":
          return te2(u2, o3, N);
        case "NamedCallout":
          return U2(u2.kind, u2.tag, u2.arguments);
        case "Quantifier":
          return oe(u2, o3);
        case "Subroutine":
          return ae(u2, o3);
        default:
          throw new Error(`Unexpected token type "${u2.type}"`);
      }
    }, o3 = { capturingGroups: [], hasNumberedRef: false, namedGroupsByName: /* @__PURE__ */ new Map(), nextIndex: 0, normalizeUnknownPropertyNames: n.normalizeUnknownPropertyNames, parent: null, skipBackrefValidation: n.skipBackrefValidation, skipLookbehindValidation: n.skipLookbehindValidation, skipPropertyNameValidation: n.skipPropertyNameValidation, subroutines: [], tokens: t.tokens, unicodePropertyMap: n.unicodePropertyMap, walk: s2 }, i2 = B2(T2(t.flags));
    let d2 = i2.body[0];
    for (; o3.nextIndex < t.tokens.length; ) {
      const p2 = s2(d2, {});
      p2.type === "Alternative" ? (i2.body.push(p2), d2 = p2) : d2.body.push(p2);
    }
    const { capturingGroups: a2, hasNumberedRef: l3, namedGroupsByName: c, subroutines: f3 } = o3;
    if (l3 && c.size && !n.rules.captureGroup) throw new Error("Numbered backref/subroutine not allowed when using named capture");
    for (const { ref: p2 } of f3) if (typeof p2 == "number") {
      if (p2 > a2.length) throw new Error("Subroutine uses a group number that's not defined");
      p2 && (a2[p2 - 1].isSubroutined = true);
    } else if (c.has(p2)) {
      if (c.get(p2).length > 1) throw new Error(o`Subroutine uses a duplicate group name "\g<${p2}>"`);
      c.get(p2)[0].isSubroutined = true;
    } else throw new Error(o`Subroutine uses a group name that's not defined "\g<${p2}>"`);
    return i2;
  }
  function W2({ kind: e }) {
    return F2(u({ "^": "line_start", $: "line_end", "\\A": "string_start", "\\b": "word_boundary", "\\B": "word_boundary", "\\G": "search_start", "\\y": "text_segment_boundary", "\\Y": "text_segment_boundary", "\\z": "string_end", "\\Z": "string_end_newline" }[e], `Unexpected assertion kind "${e}"`), { negate: e === o`\B` || e === o`\Y` });
  }
  function X2({ raw: e }, r4) {
    const n = /^\\k[<']/.test(e), t = n ? e.slice(3, -1) : e.slice(1), s2 = (o3, i2 = false) => {
      const d2 = r4.capturingGroups.length;
      let a2 = false;
      if (o3 > d2) if (r4.skipBackrefValidation) a2 = true;
      else throw new Error(`Not enough capturing groups defined to the left "${e}"`);
      return r4.hasNumberedRef = true, k2(i2 ? d2 + 1 - o3 : o3, { orphan: a2 });
    };
    if (n) {
      const o3 = /^(?<sign>-?)0*(?<num>[1-9]\d*)$/.exec(t);
      if (o3) return s2(+o3.groups.num, !!o3.groups.sign);
      if (/[-+]/.test(t)) throw new Error(`Invalid backref name "${e}"`);
      if (!r4.namedGroupsByName.has(t)) throw new Error(`Group name not defined to the left "${e}"`);
      return k2(t);
    }
    return s2(+t);
  }
  function ee2(e, r4, n) {
    const { tokens: t, walk: s2 } = r4, o3 = r4.parent, i2 = o3.body.at(-1), d2 = t[r4.nextIndex];
    if (!n.isCheckingRangeEnd && i2 && i2.type !== "CharacterClass" && i2.type !== "CharacterClassRange" && d2 && d2.type !== "CharacterClassOpen" && d2.type !== "CharacterClassClose" && d2.type !== "CharacterClassIntersector") {
      const a2 = s2(o3, { ...n, isCheckingRangeEnd: true });
      if (i2.type === "Character" && a2.type === "Character") return o3.body.pop(), L2(i2, a2);
      throw new Error("Invalid character class range");
    }
    return m2(r("-"));
  }
  function re2({ negate: e }, r4, n) {
    const { tokens: t, walk: s2 } = r4, o3 = t[r4.nextIndex], i2 = [C2()];
    let d2 = z2(o3);
    for (; d2.type !== "CharacterClassClose"; ) {
      if (d2.type === "CharacterClassIntersector") i2.push(C2()), r4.nextIndex++;
      else {
        const l3 = i2.at(-1);
        l3.body.push(s2(l3, n));
      }
      d2 = z2(t[r4.nextIndex], o3);
    }
    const a2 = C2({ negate: e });
    return i2.length === 1 ? a2.body = i2[0].body : (a2.kind = "intersection", a2.body = i2.map((l3) => l3.body.length === 1 ? l3.body[0] : l3)), r4.nextIndex++, a2;
  }
  function ne({ kind: e, negate: r4, value: n }, t) {
    const { normalizeUnknownPropertyNames: s2, skipPropertyNameValidation: o3, unicodePropertyMap: i2 } = t;
    if (e === "property") {
      const d2 = w2(n);
      if (i.has(d2) && !i2?.has(d2)) e = "posix", n = d2;
      else return Q2(n, { negate: r4, normalizeUnknownPropertyNames: s2, skipPropertyNameValidation: o3, unicodePropertyMap: i2 });
    }
    return e === "posix" ? R2(n, { negate: r4 }) : E2(e, { negate: r4 });
  }
  function te2(e, r4, n) {
    const { tokens: t, capturingGroups: s2, namedGroupsByName: o3, skipLookbehindValidation: i2, walk: d2 } = r4, a2 = ie(e), l3 = a2.type === "AbsenceFunction", c = $2(a2), f3 = c && a2.negate;
    if (a2.type === "CapturingGroup" && (s2.push(a2), a2.name && l(o3, a2.name, []).push(a2)), l3 && n.isInAbsenceFunction) throw new Error("Nested absence function not supported by Oniguruma");
    let p2 = D2(t[r4.nextIndex]);
    for (; p2.type !== "GroupClose"; ) {
      if (p2.type === "Alternator") a2.body.push(b2()), r4.nextIndex++;
      else {
        const N = a2.body.at(-1), u2 = d2(N, { ...n, isInAbsenceFunction: n.isInAbsenceFunction || l3, isInLookbehind: n.isInLookbehind || c, isInNegLookbehind: n.isInNegLookbehind || f3 });
        if (N.body.push(u2), (c || n.isInLookbehind) && !i2) {
          const v2 = "Lookbehind includes a pattern not allowed by Oniguruma";
          if (f3 || n.isInNegLookbehind) {
            if (M2(u2) || u2.type === "CapturingGroup") throw new Error(v2);
          } else if (M2(u2) || $2(u2) && u2.negate) throw new Error(v2);
        }
      }
      p2 = D2(t[r4.nextIndex]);
    }
    return r4.nextIndex++, a2;
  }
  function oe({ kind: e, min: r4, max: n }, t) {
    const s2 = t.parent, o3 = s2.body.at(-1);
    if (!o3 || !s(o3)) throw new Error("Quantifier requires a repeatable token");
    const i2 = _2(e, r4, n, o3);
    return s2.body.pop(), i2;
  }
  function ae({ raw: e }, r4) {
    const { capturingGroups: n, subroutines: t } = r4;
    let s2 = e.slice(3, -1);
    const o3 = /^(?<sign>[-+]?)0*(?<num>[1-9]\d*)$/.exec(s2);
    if (o3) {
      const d2 = +o3.groups.num, a2 = n.length;
      if (r4.hasNumberedRef = true, s2 = { "": d2, "+": a2 + d2, "-": a2 + 1 - d2 }[o3.groups.sign], s2 < 1) throw new Error("Invalid subroutine number");
    } else s2 === "0" && (s2 = 0);
    const i2 = O2(s2);
    return t.push(i2), i2;
  }
  function G(e, r4) {
    if (e !== "repeater") throw new Error(`Unexpected absence function kind "${e}"`);
    return { type: "AbsenceFunction", kind: e, body: h(r4?.body) };
  }
  function b2(e) {
    return { type: "Alternative", body: V2(e?.body) };
  }
  function F2(e, r4) {
    const n = { type: "Assertion", kind: e };
    return (e === "word_boundary" || e === "text_segment_boundary") && (n.negate = !!r4?.negate), n;
  }
  function k2(e, r4) {
    const n = !!r4?.orphan;
    return { type: "Backreference", ref: e, ...n && { orphan: n } };
  }
  function P2(e, r4) {
    const n = { name: void 0, isSubroutined: false, ...r4 };
    if (n.name !== void 0 && !se(n.name)) throw new Error(`Group name "${n.name}" invalid in Oniguruma`);
    return { type: "CapturingGroup", number: e, ...n.name && { name: n.name }, ...n.isSubroutined && { isSubroutined: n.isSubroutined }, body: h(r4?.body) };
  }
  function m2(e, r4) {
    const n = { useLastValid: false, ...r4 };
    if (e > 1114111) {
      const t = e.toString(16);
      if (n.useLastValid) e = 1114111;
      else throw e > 1310719 ? new Error(`Invalid code point out of range "\\x{${t}}"`) : new Error(`Invalid code point out of range in JS "\\x{${t}}"`);
    }
    return { type: "Character", value: e };
  }
  function C2(e) {
    const r4 = { kind: "union", negate: false, ...e };
    return { type: "CharacterClass", kind: r4.kind, negate: r4.negate, body: V2(e?.body) };
  }
  function L2(e, r4) {
    if (r4.value < e.value) throw new Error("Character class range out of order");
    return { type: "CharacterClassRange", min: e, max: r4 };
  }
  function E2(e, r4) {
    const n = !!r4?.negate, t = { type: "CharacterSet", kind: e };
    return (e === "digit" || e === "hex" || e === "newline" || e === "space" || e === "word") && (t.negate = n), (e === "text_segment" || e === "newline" && !n) && (t.variableLength = true), t;
  }
  function I2(e, r4 = {}) {
    if (e === "keep") return { type: "Directive", kind: e };
    if (e === "flags") return { type: "Directive", kind: e, flags: u(r4.flags) };
    throw new Error(`Unexpected directive kind "${e}"`);
  }
  function T2(e) {
    return { type: "Flags", ...e };
  }
  function A2(e) {
    const r4 = e?.atomic, n = e?.flags;
    if (r4 && n) throw new Error("Atomic group cannot have flags");
    return { type: "Group", ...r4 && { atomic: r4 }, ...n && { flags: n }, body: h(e?.body) };
  }
  function K2(e) {
    const r4 = { behind: false, negate: false, ...e };
    return { type: "LookaroundAssertion", kind: r4.behind ? "lookbehind" : "lookahead", negate: r4.negate, body: h(e?.body) };
  }
  function U2(e, r4, n) {
    return { type: "NamedCallout", kind: e, tag: r4, arguments: n };
  }
  function R2(e, r4) {
    const n = !!r4?.negate;
    if (!i.has(e)) throw new Error(`Invalid POSIX class "${e}"`);
    return { type: "CharacterSet", kind: "posix", value: e, negate: n };
  }
  function _2(e, r4, n, t) {
    if (r4 > n) throw new Error("Invalid reversed quantifier range");
    return { type: "Quantifier", kind: e, min: r4, max: n, body: t };
  }
  function B2(e, r4) {
    return { type: "Regex", body: h(r4?.body), flags: e };
  }
  function O2(e) {
    return { type: "Subroutine", ref: e };
  }
  function Q2(e, r4) {
    const n = { negate: false, normalizeUnknownPropertyNames: false, skipPropertyNameValidation: false, unicodePropertyMap: null, ...r4 };
    let t = n.unicodePropertyMap?.get(w2(e));
    if (!t) {
      if (n.normalizeUnknownPropertyNames) t = de(e);
      else if (n.unicodePropertyMap && !n.skipPropertyNameValidation) throw new Error(o`Invalid Unicode property "\p{${e}}"`);
    }
    return { type: "CharacterSet", kind: "property", value: t ?? e, negate: n.negate };
  }
  function ie({ flags: e, kind: r4, name: n, negate: t, number: s2 }) {
    switch (r4) {
      case "absence_repeater":
        return G("repeater");
      case "atomic":
        return A2({ atomic: true });
      case "capturing":
        return P2(s2, { name: n });
      case "group":
        return A2({ flags: e });
      case "lookahead":
      case "lookbehind":
        return K2({ behind: r4 === "lookbehind", negate: t });
      default:
        throw new Error(`Unexpected group kind "${r4}"`);
    }
  }
  function h(e) {
    if (e === void 0) e = [b2()];
    else if (!Array.isArray(e) || !e.length || !e.every((r4) => r4.type === "Alternative")) throw new Error("Invalid body; expected array of one or more Alternative nodes");
    return e;
  }
  function V2(e) {
    if (e === void 0) e = [];
    else if (!Array.isArray(e) || !e.every((r4) => !!r4.type)) throw new Error("Invalid body; expected array of nodes");
    return e;
  }
  function M2(e) {
    return e.type === "LookaroundAssertion" && e.kind === "lookahead";
  }
  function $2(e) {
    return e.type === "LookaroundAssertion" && e.kind === "lookbehind";
  }
  function se(e) {
    return /^[\p{Alpha}\p{Pc}][^)]*$/u.test(e);
  }
  function de(e) {
    return e.trim().replace(/[- _]+/g, "_").replace(/[A-Z][a-z]+(?=[A-Z])/g, "$&_").replace(/[A-Za-z]+/g, (r4) => r4[0].toUpperCase() + r4.slice(1).toLowerCase());
  }
  function w2(e) {
    return e.replace(/[- _]+/g, "").toLowerCase();
  }
  function z2(e, r4) {
    return u(e, `${r4?.type === "Character" && r4.value === 93 ? "Empty" : "Unclosed"} character class`);
  }
  function D2(e) {
    return u(e, "Unclosed group");
  }

  // node_modules/oniguruma-parser/dist/traverser/traverse.js
  function S(a2, v2, N = null) {
    function u2(e, s2) {
      for (let t = 0; t < e.length; t++) {
        const r4 = n(e[t], s2, t, e);
        t = Math.max(-1, t + r4);
      }
    }
    function n(e, s2 = null, t = null, r4 = null) {
      let i2 = 0, c = false;
      const d2 = { node: e, parent: s2, key: t, container: r4, root: a2, remove() {
        f2(r4).splice(Math.max(0, l2(t) + i2), 1), i2--, c = true;
      }, removeAllNextSiblings() {
        return f2(r4).splice(l2(t) + 1);
      }, removeAllPrevSiblings() {
        const o3 = l2(t) + i2;
        return i2 -= o3, f2(r4).splice(0, Math.max(0, o3));
      }, replaceWith(o3, y3 = {}) {
        const b3 = !!y3.traverse;
        r4 ? r4[Math.max(0, l2(t) + i2)] = o3 : u(s2, "Can't replace root node")[t] = o3, b3 && n(o3, s2, t, r4), c = true;
      }, replaceWithMultiple(o3, y3 = {}) {
        const b3 = !!y3.traverse;
        if (f2(r4).splice(Math.max(0, l2(t) + i2), 1, ...o3), i2 += o3.length - 1, b3) {
          let g = 0;
          for (let x2 = 0; x2 < o3.length; x2++) g += n(o3[x2], s2, l2(t) + x2 + g, r4);
        }
        c = true;
      }, skip() {
        c = true;
      } }, { type: m3 } = e, h2 = v2["*"], p2 = v2[m3], R3 = typeof h2 == "function" ? h2 : h2?.enter, P3 = typeof p2 == "function" ? p2 : p2?.enter;
      if (R3?.(d2, N), P3?.(d2, N), !c) switch (m3) {
        case "AbsenceFunction":
        case "CapturingGroup":
        case "Group":
          u2(e.body, e);
          break;
        case "Alternative":
        case "CharacterClass":
          u2(e.body, e);
          break;
        case "Assertion":
        case "Backreference":
        case "Character":
        case "CharacterSet":
        case "Directive":
        case "Flags":
        case "NamedCallout":
        case "Subroutine":
          break;
        case "CharacterClassRange":
          n(e.min, e, "min"), n(e.max, e, "max");
          break;
        case "LookaroundAssertion":
          u2(e.body, e);
          break;
        case "Quantifier":
          n(e.body, e, "body");
          break;
        case "Regex":
          u2(e.body, e), n(e.flags, e, "flags");
          break;
        default:
          throw new Error(`Unexpected node type "${m3}"`);
      }
      return p2?.exit?.(d2, N), h2?.exit?.(d2, N), i2;
    }
    return n(a2), a2;
  }
  function f2(a2) {
    if (!Array.isArray(a2)) throw new Error("Container expected");
    return a2;
  }
  function l2(a2) {
    if (typeof a2 != "number") throw new Error("Numeric key expected");
    return a2;
  }

  // node_modules/regex/src/utils-internals.js
  var noncapturingDelim = String.raw`\(\?(?:[:=!>A-Za-z\-]|<[=!]|\(DEFINE\))`;
  function incrementIfAtLeast(arr, threshold) {
    for (let i2 = 0; i2 < arr.length; i2++) {
      if (arr[i2] >= threshold) {
        arr[i2]++;
      }
    }
  }
  function spliceStr(str, pos, oldValue, newValue) {
    return str.slice(0, pos) + newValue + str.slice(pos + oldValue.length);
  }

  // node_modules/regex-utilities/src/index.js
  var Context = Object.freeze({
    DEFAULT: "DEFAULT",
    CHAR_CLASS: "CHAR_CLASS"
  });
  function replaceUnescaped(expression, needle, replacement, context) {
    const re3 = new RegExp(String.raw`${needle}|(?<$skip>\[\^?|\\?.)`, "gsu");
    const negated = [false];
    let numCharClassesOpen = 0;
    let result = "";
    for (const match of expression.matchAll(re3)) {
      const { 0: m3, groups: { $skip } } = match;
      if (!$skip && (!context || context === Context.DEFAULT === !numCharClassesOpen)) {
        if (replacement instanceof Function) {
          result += replacement(match, {
            context: numCharClassesOpen ? Context.CHAR_CLASS : Context.DEFAULT,
            negated: negated[negated.length - 1]
          });
        } else {
          result += replacement;
        }
        continue;
      }
      if (m3[0] === "[") {
        numCharClassesOpen++;
        negated.push(m3[1] === "^");
      } else if (m3 === "]" && numCharClassesOpen) {
        numCharClassesOpen--;
        negated.pop();
      }
      result += m3;
    }
    return result;
  }
  function forEachUnescaped(expression, needle, callback, context) {
    replaceUnescaped(expression, needle, callback, context);
  }
  function execUnescaped(expression, needle, pos = 0, context) {
    if (!new RegExp(needle, "su").test(expression)) {
      return null;
    }
    const re3 = new RegExp(`${needle}|(?<$skip>\\\\?.)`, "gsu");
    re3.lastIndex = pos;
    let numCharClassesOpen = 0;
    let match;
    while (match = re3.exec(expression)) {
      const { 0: m3, groups: { $skip } } = match;
      if (!$skip && (!context || context === Context.DEFAULT === !numCharClassesOpen)) {
        return match;
      }
      if (m3 === "[") {
        numCharClassesOpen++;
      } else if (m3 === "]" && numCharClassesOpen) {
        numCharClassesOpen--;
      }
      if (re3.lastIndex == match.index) {
        re3.lastIndex++;
      }
    }
    return null;
  }
  function hasUnescaped(expression, needle, context) {
    return !!execUnescaped(expression, needle, 0, context);
  }
  function getGroupContents(expression, contentsStartPos) {
    const token2 = /\\?./gsu;
    token2.lastIndex = contentsStartPos;
    let contentsEndPos = expression.length;
    let numCharClassesOpen = 0;
    let numGroupsOpen = 1;
    let match;
    while (match = token2.exec(expression)) {
      const [m3] = match;
      if (m3 === "[") {
        numCharClassesOpen++;
      } else if (!numCharClassesOpen) {
        if (m3 === "(") {
          numGroupsOpen++;
        } else if (m3 === ")") {
          numGroupsOpen--;
          if (!numGroupsOpen) {
            contentsEndPos = match.index;
            break;
          }
        }
      } else if (m3 === "]") {
        numCharClassesOpen--;
      }
    }
    return expression.slice(contentsStartPos, contentsEndPos);
  }

  // node_modules/regex/src/atomic.js
  var atomicPluginToken = new RegExp(String.raw`(?<noncapturingStart>${noncapturingDelim})|(?<capturingStart>\((?:\?<[^>]+>)?)|\\?.`, "gsu");
  function atomic(expression, data) {
    const hiddenCaptures = data?.hiddenCaptures ?? [];
    let captureTransfers = data?.captureTransfers ?? /* @__PURE__ */ new Map();
    if (!/\(\?>/.test(expression)) {
      return {
        pattern: expression,
        captureTransfers,
        hiddenCaptures
      };
    }
    const aGDelim = "(?>";
    const emulatedAGDelim = "(?:(?=(";
    const captureNumMap = [0];
    const addedHiddenCaptures = [];
    let numCapturesBeforeAG = 0;
    let numAGs = 0;
    let aGPos = NaN;
    let hasProcessedAG;
    do {
      hasProcessedAG = false;
      let numCharClassesOpen = 0;
      let numGroupsOpenInAG = 0;
      let inAG = false;
      let match;
      atomicPluginToken.lastIndex = Number.isNaN(aGPos) ? 0 : aGPos + emulatedAGDelim.length;
      while (match = atomicPluginToken.exec(expression)) {
        const { 0: m3, index, groups: { capturingStart, noncapturingStart } } = match;
        if (m3 === "[") {
          numCharClassesOpen++;
        } else if (!numCharClassesOpen) {
          if (m3 === aGDelim && !inAG) {
            aGPos = index;
            inAG = true;
          } else if (inAG && noncapturingStart) {
            numGroupsOpenInAG++;
          } else if (capturingStart) {
            if (inAG) {
              numGroupsOpenInAG++;
            } else {
              numCapturesBeforeAG++;
              captureNumMap.push(numCapturesBeforeAG + numAGs);
            }
          } else if (m3 === ")" && inAG) {
            if (!numGroupsOpenInAG) {
              numAGs++;
              const addedCaptureNum = numCapturesBeforeAG + numAGs;
              expression = `${expression.slice(0, aGPos)}${emulatedAGDelim}${expression.slice(aGPos + aGDelim.length, index)}))<$$${addedCaptureNum}>)${expression.slice(index + 1)}`;
              hasProcessedAG = true;
              addedHiddenCaptures.push(addedCaptureNum);
              incrementIfAtLeast(hiddenCaptures, addedCaptureNum);
              if (captureTransfers.size) {
                const newCaptureTransfers = /* @__PURE__ */ new Map();
                captureTransfers.forEach((from, to) => {
                  newCaptureTransfers.set(
                    to >= addedCaptureNum ? to + 1 : to,
                    from.map((f3) => f3 >= addedCaptureNum ? f3 + 1 : f3)
                  );
                });
                captureTransfers = newCaptureTransfers;
              }
              break;
            }
            numGroupsOpenInAG--;
          }
        } else if (m3 === "]") {
          numCharClassesOpen--;
        }
      }
    } while (hasProcessedAG);
    hiddenCaptures.push(...addedHiddenCaptures);
    expression = replaceUnescaped(
      expression,
      String.raw`\\(?<backrefNum>[1-9]\d*)|<\$\$(?<wrappedBackrefNum>\d+)>`,
      ({ 0: m3, groups: { backrefNum, wrappedBackrefNum } }) => {
        if (backrefNum) {
          const bNum = +backrefNum;
          if (bNum > captureNumMap.length - 1) {
            throw new Error(`Backref "${m3}" greater than number of captures`);
          }
          return `\\${captureNumMap[bNum]}`;
        }
        return `\\${wrappedBackrefNum}`;
      },
      Context.DEFAULT
    );
    return {
      pattern: expression,
      captureTransfers,
      hiddenCaptures
    };
  }
  var baseQuantifier = String.raw`(?:[?*+]|\{\d+(?:,\d*)?\})`;
  var possessivePluginToken = new RegExp(String.raw`
\\(?: \d+
  | c[A-Za-z]
  | [gk]<[^>]+>
  | [pPu]\{[^\}]+\}
  | u[A-Fa-f\d]{4}
  | x[A-Fa-f\d]{2}
  )
| \((?: \? (?: [:=!>]
  | <(?:[=!]|[^>]+>)
  | [A-Za-z\-]+:
  | \(DEFINE\)
  ))?
| (?<qBase>${baseQuantifier})(?<qMod>[?+]?)(?<invalidQ>[?*+\{]?)
| \\?.
`.replace(/\s+/g, ""), "gsu");
  function possessive(expression) {
    if (!new RegExp(`${baseQuantifier}\\+`).test(expression)) {
      return {
        pattern: expression
      };
    }
    const openGroupIndices = [];
    let lastGroupIndex = null;
    let lastCharClassIndex = null;
    let lastToken = "";
    let numCharClassesOpen = 0;
    let match;
    possessivePluginToken.lastIndex = 0;
    while (match = possessivePluginToken.exec(expression)) {
      const { 0: m3, index, groups: { qBase, qMod, invalidQ } } = match;
      if (m3 === "[") {
        if (!numCharClassesOpen) {
          lastCharClassIndex = index;
        }
        numCharClassesOpen++;
      } else if (m3 === "]") {
        if (numCharClassesOpen) {
          numCharClassesOpen--;
        } else {
          lastCharClassIndex = null;
        }
      } else if (!numCharClassesOpen) {
        if (qMod === "+" && lastToken && !lastToken.startsWith("(")) {
          if (invalidQ) {
            throw new Error(`Invalid quantifier "${m3}"`);
          }
          let charsAdded = -1;
          if (/^\{\d+\}$/.test(qBase)) {
            expression = spliceStr(expression, index + qBase.length, qMod, "");
          } else {
            if (lastToken === ")" || lastToken === "]") {
              const nodeIndex = lastToken === ")" ? lastGroupIndex : lastCharClassIndex;
              if (nodeIndex === null) {
                throw new Error(`Invalid unmatched "${lastToken}"`);
              }
              expression = `${expression.slice(0, nodeIndex)}(?>${expression.slice(nodeIndex, index)}${qBase})${expression.slice(index + m3.length)}`;
            } else {
              expression = `${expression.slice(0, index - lastToken.length)}(?>${lastToken}${qBase})${expression.slice(index + m3.length)}`;
            }
            charsAdded += 4;
          }
          possessivePluginToken.lastIndex += charsAdded;
        } else if (m3[0] === "(") {
          openGroupIndices.push(index);
        } else if (m3 === ")") {
          lastGroupIndex = openGroupIndices.length ? openGroupIndices.pop() : null;
        }
      }
      lastToken = m3;
    }
    return {
      pattern: expression
    };
  }

  // node_modules/regex-recursion/src/index.js
  var r2 = String.raw;
  var gRToken = r2`\\g<(?<gRNameOrNum>[^>&]+)&R=(?<gRDepth>[^>]+)>`;
  var recursiveToken = r2`\(\?R=(?<rDepth>[^\)]+)\)|${gRToken}`;
  var namedCaptureDelim = r2`\(\?<(?![=!])(?<captureName>[^>]+)>`;
  var captureDelim = r2`${namedCaptureDelim}|(?<unnamed>\()(?!\?)`;
  var token = new RegExp(r2`${namedCaptureDelim}|${recursiveToken}|\(\?|\\?.`, "gsu");
  var overlappingRecursionMsg = "Cannot use multiple overlapping recursions";
  function recursion(pattern, data) {
    const { hiddenCaptures, mode } = {
      hiddenCaptures: [],
      mode: "plugin",
      ...data
    };
    let captureTransfers = data?.captureTransfers ?? /* @__PURE__ */ new Map();
    if (!new RegExp(recursiveToken, "su").test(pattern)) {
      return {
        pattern,
        captureTransfers,
        hiddenCaptures
      };
    }
    if (mode === "plugin" && hasUnescaped(pattern, r2`\(\?\(DEFINE\)`, Context.DEFAULT)) {
      throw new Error("DEFINE groups cannot be used with recursion");
    }
    const addedHiddenCaptures = [];
    const hasNumberedBackref = hasUnescaped(pattern, r2`\\[1-9]`, Context.DEFAULT);
    const groupContentsStartPos = /* @__PURE__ */ new Map();
    const openGroups = [];
    let hasRecursed = false;
    let numCharClassesOpen = 0;
    let numCapturesPassed = 0;
    let match;
    token.lastIndex = 0;
    while (match = token.exec(pattern)) {
      const { 0: m3, groups: { captureName, rDepth, gRNameOrNum, gRDepth } } = match;
      if (m3 === "[") {
        numCharClassesOpen++;
      } else if (!numCharClassesOpen) {
        if (rDepth) {
          assertMaxInBounds(rDepth);
          if (hasRecursed) {
            throw new Error(overlappingRecursionMsg);
          }
          if (hasNumberedBackref) {
            throw new Error(
              // When used in `external` mode by transpilers other than Regex+, backrefs might have
              // gone through conversion from named to numbered, so avoid a misleading error
              `${mode === "external" ? "Backrefs" : "Numbered backrefs"} cannot be used with global recursion`
            );
          }
          const left = pattern.slice(0, match.index);
          const right = pattern.slice(token.lastIndex);
          if (hasUnescaped(right, recursiveToken, Context.DEFAULT)) {
            throw new Error(overlappingRecursionMsg);
          }
          const reps = +rDepth - 1;
          pattern = makeRecursive(
            left,
            right,
            reps,
            false,
            hiddenCaptures,
            addedHiddenCaptures,
            numCapturesPassed
          );
          captureTransfers = mapCaptureTransfers(
            captureTransfers,
            left,
            reps,
            addedHiddenCaptures.length,
            0,
            numCapturesPassed
          );
          break;
        } else if (gRNameOrNum) {
          assertMaxInBounds(gRDepth);
          let isWithinReffedGroup = false;
          for (const g of openGroups) {
            if (g.name === gRNameOrNum || g.num === +gRNameOrNum) {
              isWithinReffedGroup = true;
              if (g.hasRecursedWithin) {
                throw new Error(overlappingRecursionMsg);
              }
              break;
            }
          }
          if (!isWithinReffedGroup) {
            throw new Error(r2`Recursive \g cannot be used outside the referenced group "${mode === "external" ? gRNameOrNum : r2`\g<${gRNameOrNum}&R=${gRDepth}>`}"`);
          }
          const startPos = groupContentsStartPos.get(gRNameOrNum);
          const groupContents = getGroupContents(pattern, startPos);
          if (hasNumberedBackref && hasUnescaped(groupContents, r2`${namedCaptureDelim}|\((?!\?)`, Context.DEFAULT)) {
            throw new Error(
              // When used in `external` mode by transpilers other than Regex+, backrefs might have
              // gone through conversion from named to numbered, so avoid a misleading error
              `${mode === "external" ? "Backrefs" : "Numbered backrefs"} cannot be used with recursion of capturing groups`
            );
          }
          const groupContentsLeft = pattern.slice(startPos, match.index);
          const groupContentsRight = groupContents.slice(groupContentsLeft.length + m3.length);
          const numAddedHiddenCapturesPreExpansion = addedHiddenCaptures.length;
          const reps = +gRDepth - 1;
          const expansion = makeRecursive(
            groupContentsLeft,
            groupContentsRight,
            reps,
            true,
            hiddenCaptures,
            addedHiddenCaptures,
            numCapturesPassed
          );
          captureTransfers = mapCaptureTransfers(
            captureTransfers,
            groupContentsLeft,
            reps,
            addedHiddenCaptures.length - numAddedHiddenCapturesPreExpansion,
            numAddedHiddenCapturesPreExpansion,
            numCapturesPassed
          );
          const pre = pattern.slice(0, startPos);
          const post = pattern.slice(startPos + groupContents.length);
          pattern = `${pre}${expansion}${post}`;
          token.lastIndex += expansion.length - m3.length - groupContentsLeft.length - groupContentsRight.length;
          openGroups.forEach((g) => g.hasRecursedWithin = true);
          hasRecursed = true;
        } else if (captureName) {
          numCapturesPassed++;
          groupContentsStartPos.set(String(numCapturesPassed), token.lastIndex);
          groupContentsStartPos.set(captureName, token.lastIndex);
          openGroups.push({
            num: numCapturesPassed,
            name: captureName
          });
        } else if (m3[0] === "(") {
          const isUnnamedCapture = m3 === "(";
          if (isUnnamedCapture) {
            numCapturesPassed++;
            groupContentsStartPos.set(String(numCapturesPassed), token.lastIndex);
          }
          openGroups.push(isUnnamedCapture ? { num: numCapturesPassed } : {});
        } else if (m3 === ")") {
          openGroups.pop();
        }
      } else if (m3 === "]") {
        numCharClassesOpen--;
      }
    }
    hiddenCaptures.push(...addedHiddenCaptures);
    return {
      pattern,
      captureTransfers,
      hiddenCaptures
    };
  }
  function assertMaxInBounds(max) {
    const errMsg = `Max depth must be integer between 2 and 100; used ${max}`;
    if (!/^[1-9]\d*$/.test(max)) {
      throw new Error(errMsg);
    }
    max = +max;
    if (max < 2 || max > 100) {
      throw new Error(errMsg);
    }
  }
  function makeRecursive(left, right, reps, isSubpattern, hiddenCaptures, addedHiddenCaptures, numCapturesPassed) {
    const namesInRecursed = /* @__PURE__ */ new Set();
    if (isSubpattern) {
      forEachUnescaped(left + right, namedCaptureDelim, ({ groups: { captureName } }) => {
        namesInRecursed.add(captureName);
      }, Context.DEFAULT);
    }
    const rest = [
      reps,
      isSubpattern ? namesInRecursed : null,
      hiddenCaptures,
      addedHiddenCaptures,
      numCapturesPassed
    ];
    return `${left}${repeatWithDepth(`(?:${left}`, "forward", ...rest)}(?:)${repeatWithDepth(`${right})`, "backward", ...rest)}${right}`;
  }
  function repeatWithDepth(pattern, direction, reps, namesInRecursed, hiddenCaptures, addedHiddenCaptures, numCapturesPassed) {
    const startNum = 2;
    const getDepthNum = (i2) => direction === "forward" ? i2 + startNum : reps - i2 + startNum - 1;
    let result = "";
    for (let i2 = 0; i2 < reps; i2++) {
      const depthNum = getDepthNum(i2);
      result += replaceUnescaped(
        pattern,
        r2`${captureDelim}|\\k<(?<backref>[^>]+)>`,
        ({ 0: m3, groups: { captureName, unnamed, backref } }) => {
          if (backref && namesInRecursed && !namesInRecursed.has(backref)) {
            return m3;
          }
          const suffix = `_$${depthNum}`;
          if (unnamed || captureName) {
            const addedCaptureNum = numCapturesPassed + addedHiddenCaptures.length + 1;
            addedHiddenCaptures.push(addedCaptureNum);
            incrementIfAtLeast2(hiddenCaptures, addedCaptureNum);
            return unnamed ? m3 : `(?<${captureName}${suffix}>`;
          }
          return r2`\k<${backref}${suffix}>`;
        },
        Context.DEFAULT
      );
    }
    return result;
  }
  function incrementIfAtLeast2(arr, threshold) {
    for (let i2 = 0; i2 < arr.length; i2++) {
      if (arr[i2] >= threshold) {
        arr[i2]++;
      }
    }
  }
  function mapCaptureTransfers(captureTransfers, left, reps, numCapturesAddedInExpansion, numAddedHiddenCapturesPreExpansion, numCapturesPassed) {
    if (captureTransfers.size && numCapturesAddedInExpansion) {
      let numCapturesInLeft = 0;
      forEachUnescaped(left, captureDelim, () => numCapturesInLeft++, Context.DEFAULT);
      const recursionDelimCaptureNum = numCapturesPassed - numCapturesInLeft + numAddedHiddenCapturesPreExpansion;
      const newCaptureTransfers = /* @__PURE__ */ new Map();
      captureTransfers.forEach((from, to) => {
        const numCapturesInRight = (numCapturesAddedInExpansion - numCapturesInLeft * reps) / reps;
        const numCapturesAddedInLeft = numCapturesInLeft * reps;
        const newTo = to > recursionDelimCaptureNum + numCapturesInLeft ? to + numCapturesAddedInExpansion : to;
        const newFrom = [];
        for (const f3 of from) {
          if (f3 <= recursionDelimCaptureNum) {
            newFrom.push(f3);
          } else if (f3 > recursionDelimCaptureNum + numCapturesInLeft + numCapturesInRight) {
            newFrom.push(f3 + numCapturesAddedInExpansion);
          } else if (f3 <= recursionDelimCaptureNum + numCapturesInLeft) {
            for (let i2 = 0; i2 <= reps; i2++) {
              newFrom.push(f3 + numCapturesInLeft * i2);
            }
          } else {
            for (let i2 = 0; i2 <= reps; i2++) {
              newFrom.push(f3 + numCapturesAddedInLeft + numCapturesInRight * i2);
            }
          }
        }
        newCaptureTransfers.set(newTo, newFrom);
      });
      return newCaptureTransfers;
    }
    return captureTransfers;
  }

  // node_modules/oniguruma-to-es/dist/esm/index.js
  var cp = String.fromCodePoint;
  var r3 = String.raw;
  var envFlags = {
    flagGroups: (() => {
      try {
        new RegExp("(?i:)");
      } catch {
        return false;
      }
      return true;
    })(),
    unicodeSets: (() => {
      try {
        new RegExp("[[]]", "v");
      } catch {
        return false;
      }
      return true;
    })()
  };
  envFlags.bugFlagVLiteralHyphenIsRange = envFlags.unicodeSets ? (() => {
    try {
      new RegExp(r3`[\d\-a]`, "v");
    } catch {
      return true;
    }
    return false;
  })() : false;
  envFlags.bugNestedClassIgnoresNegation = envFlags.unicodeSets && new RegExp("[[^a]]", "v").test("a");
  function getNewCurrentFlags(current, { enable, disable }) {
    return {
      dotAll: !disable?.dotAll && !!(enable?.dotAll || current.dotAll),
      ignoreCase: !disable?.ignoreCase && !!(enable?.ignoreCase || current.ignoreCase)
    };
  }
  function getOrInsert(map, key2, defaultValue) {
    if (!map.has(key2)) {
      map.set(key2, defaultValue);
    }
    return map.get(key2);
  }
  function isMinTarget(target, min) {
    return EsVersion[target] >= EsVersion[min];
  }
  function throwIfNullish(value, msg) {
    if (value == null) {
      throw new Error(msg ?? "Value expected");
    }
    return value;
  }
  var EsVersion = {
    ES2025: 2025,
    ES2024: 2024,
    ES2018: 2018
  };
  var Target = (
    /** @type {const} */
    {
      auto: "auto",
      ES2025: "ES2025",
      ES2024: "ES2024",
      ES2018: "ES2018"
    }
  );
  function getOptions(options = {}) {
    if ({}.toString.call(options) !== "[object Object]") {
      throw new Error("Unexpected options");
    }
    if (options.target !== void 0 && !Target[options.target]) {
      throw new Error(`Unexpected target "${options.target}"`);
    }
    const opts = {
      // Sets the level of emulation rigor/strictness.
      accuracy: "default",
      // Disables advanced emulation that relies on returning a `RegExp` subclass, resulting in
      // certain patterns not being emulatable.
      avoidSubclass: false,
      // Oniguruma flags; a string with `i`, `m`, `x`, `D`, `S`, `W`, `y{g}` in any order (all
      // optional). Oniguruma's `m` is equivalent to JavaScript's `s` (`dotAll`).
      flags: "",
      // Include JavaScript flag `g` (`global`) in the result.
      global: false,
      // Include JavaScript flag `d` (`hasIndices`) in the result.
      hasIndices: false,
      // Delay regex construction until first use if the transpiled pattern is at least this length.
      lazyCompileLength: Infinity,
      // JavaScript version used for generated regexes. Using `auto` detects the best value based on
      // your environment. Later targets allow faster processing, simpler generated source, and
      // support for additional features.
      target: "auto",
      // Disables minifications that simplify the pattern without changing the meaning.
      verbose: false,
      ...options,
      // Advanced options that override standard behavior, error checking, and flags when enabled.
      rules: {
        // Useful with TextMate grammars that merge backreferences across patterns.
        allowOrphanBackrefs: false,
        // Use ASCII `\b` and `\B`, which increases search performance of generated regexes.
        asciiWordBoundaries: false,
        // Allow unnamed captures and numbered calls (backreferences and subroutines) when using
        // named capture. This is Oniguruma option `ONIG_OPTION_CAPTURE_GROUP`; on by default in
        // `vscode-oniguruma`.
        captureGroup: false,
        // Change the recursion depth limit from Oniguruma's `20` to an integer `2`–`20`.
        recursionLimit: 20,
        // `^` as `\A`; `$` as`\Z`. Improves search performance of generated regexes without changing
        // the meaning if searching line by line. This is Oniguruma option `ONIG_OPTION_SINGLELINE`.
        singleline: false,
        ...options.rules
      }
    };
    if (opts.target === "auto") {
      opts.target = envFlags.flagGroups ? "ES2025" : envFlags.unicodeSets ? "ES2024" : "ES2018";
    }
    return opts;
  }
  var asciiSpaceChar = "[	-\r ]";
  var CharsWithoutIgnoreCaseExpansion = /* @__PURE__ */ new Set([
    cp(304),
    // İ
    cp(305)
    // ı
  ]);
  var defaultWordChar = r3`[\p{L}\p{M}\p{N}\p{Pc}]`;
  function getIgnoreCaseMatchChars(char) {
    if (CharsWithoutIgnoreCaseExpansion.has(char)) {
      return [char];
    }
    const set = /* @__PURE__ */ new Set();
    const lower = char.toLowerCase();
    const upper = lower.toUpperCase();
    const title = LowerToTitleCaseMap.get(lower);
    const altLower = LowerToAlternativeLowerCaseMap.get(lower);
    const altUpper = LowerToAlternativeUpperCaseMap.get(lower);
    if ([...upper].length === 1) {
      set.add(upper);
    }
    altUpper && set.add(altUpper);
    title && set.add(title);
    set.add(lower);
    altLower && set.add(altLower);
    return [...set];
  }
  var JsUnicodePropertyMap = /* @__PURE__ */ new Map(
    `C Other
Cc Control cntrl
Cf Format
Cn Unassigned
Co Private_Use
Cs Surrogate
L Letter
LC Cased_Letter
Ll Lowercase_Letter
Lm Modifier_Letter
Lo Other_Letter
Lt Titlecase_Letter
Lu Uppercase_Letter
M Mark Combining_Mark
Mc Spacing_Mark
Me Enclosing_Mark
Mn Nonspacing_Mark
N Number
Nd Decimal_Number digit
Nl Letter_Number
No Other_Number
P Punctuation punct
Pc Connector_Punctuation
Pd Dash_Punctuation
Pe Close_Punctuation
Pf Final_Punctuation
Pi Initial_Punctuation
Po Other_Punctuation
Ps Open_Punctuation
S Symbol
Sc Currency_Symbol
Sk Modifier_Symbol
Sm Math_Symbol
So Other_Symbol
Z Separator
Zl Line_Separator
Zp Paragraph_Separator
Zs Space_Separator
ASCII
ASCII_Hex_Digit AHex
Alphabetic Alpha
Any
Assigned
Bidi_Control Bidi_C
Bidi_Mirrored Bidi_M
Case_Ignorable CI
Cased
Changes_When_Casefolded CWCF
Changes_When_Casemapped CWCM
Changes_When_Lowercased CWL
Changes_When_NFKC_Casefolded CWKCF
Changes_When_Titlecased CWT
Changes_When_Uppercased CWU
Dash
Default_Ignorable_Code_Point DI
Deprecated Dep
Diacritic Dia
Emoji
Emoji_Component EComp
Emoji_Modifier EMod
Emoji_Modifier_Base EBase
Emoji_Presentation EPres
Extended_Pictographic ExtPict
Extender Ext
Grapheme_Base Gr_Base
Grapheme_Extend Gr_Ext
Hex_Digit Hex
IDS_Binary_Operator IDSB
IDS_Trinary_Operator IDST
ID_Continue IDC
ID_Start IDS
Ideographic Ideo
Join_Control Join_C
Logical_Order_Exception LOE
Lowercase Lower
Math
Noncharacter_Code_Point NChar
Pattern_Syntax Pat_Syn
Pattern_White_Space Pat_WS
Quotation_Mark QMark
Radical
Regional_Indicator RI
Sentence_Terminal STerm
Soft_Dotted SD
Terminal_Punctuation Term
Unified_Ideograph UIdeo
Uppercase Upper
Variation_Selector VS
White_Space space
XID_Continue XIDC
XID_Start XIDS`.split(/\s/).map((p2) => [w2(p2), p2])
  );
  var LowerToAlternativeLowerCaseMap = /* @__PURE__ */ new Map([
    ["s", cp(383)],
    // s, ſ
    [cp(383), "s"]
    // ſ, s
  ]);
  var LowerToAlternativeUpperCaseMap = /* @__PURE__ */ new Map([
    [cp(223), cp(7838)],
    // ß, ẞ
    [cp(107), cp(8490)],
    // k, K (Kelvin)
    [cp(229), cp(8491)],
    // å, Å (Angstrom)
    [cp(969), cp(8486)]
    // ω, Ω (Ohm)
  ]);
  var LowerToTitleCaseMap = new Map([
    titleEntry(453),
    titleEntry(456),
    titleEntry(459),
    titleEntry(498),
    ...titleRange(8072, 8079),
    ...titleRange(8088, 8095),
    ...titleRange(8104, 8111),
    titleEntry(8124),
    titleEntry(8140),
    titleEntry(8188)
  ]);
  var PosixClassMap = /* @__PURE__ */ new Map([
    ["alnum", r3`[\p{Alpha}\p{Nd}]`],
    ["alpha", r3`\p{Alpha}`],
    ["ascii", r3`\p{ASCII}`],
    ["blank", r3`[\p{Zs}\t]`],
    ["cntrl", r3`\p{Cc}`],
    ["digit", r3`\p{Nd}`],
    ["graph", r3`[\P{space}&&\P{Cc}&&\P{Cn}&&\P{Cs}]`],
    ["lower", r3`\p{Lower}`],
    ["print", r3`[[\P{space}&&\P{Cc}&&\P{Cn}&&\P{Cs}]\p{Zs}]`],
    ["punct", r3`[\p{P}\p{S}]`],
    // Updated value from Onig 6.9.9; changed from Unicode `\p{punct}`
    ["space", r3`\p{space}`],
    ["upper", r3`\p{Upper}`],
    ["word", r3`[\p{Alpha}\p{M}\p{Nd}\p{Pc}]`],
    ["xdigit", r3`\p{AHex}`]
  ]);
  function range(start, end) {
    const range2 = [];
    for (let i2 = start; i2 <= end; i2++) {
      range2.push(i2);
    }
    return range2;
  }
  function titleEntry(codePoint) {
    const char = cp(codePoint);
    return [char.toLowerCase(), char];
  }
  function titleRange(start, end) {
    return range(start, end).map((codePoint) => titleEntry(codePoint));
  }
  var UnicodePropertiesWithSpecificCase = /* @__PURE__ */ new Set([
    "Lower",
    "Lowercase",
    "Upper",
    "Uppercase",
    "Ll",
    "Lowercase_Letter",
    "Lt",
    "Titlecase_Letter",
    "Lu",
    "Uppercase_Letter"
    // The `Changes_When_*` properties (and their aliases) could be included, but they're very rare.
    // Some other properties include a handful of chars with specific cases only, but these chars are
    // generally extreme edge cases and using such properties case insensitively generally produces
    // undesired behavior anyway
  ]);
  function transform(ast, options) {
    const opts = {
      // A couple edge cases exist where options `accuracy` and `bestEffortTarget` are used:
      // - `CharacterSet` kind `text_segment` (`\X`): An exact representation would require heavy
      //   Unicode data; a best-effort approximation requires knowing the target.
      // - `CharacterSet` kind `posix` with values `graph` and `print`: Their complex Unicode
      //   representations would be hard to change to ASCII versions after the fact in the generator
      //   based on `target`/`accuracy`, so produce the appropriate structure here.
      accuracy: "default",
      asciiWordBoundaries: false,
      avoidSubclass: false,
      bestEffortTarget: "ES2025",
      ...options
    };
    addParentProperties(ast);
    const firstPassState = {
      accuracy: opts.accuracy,
      asciiWordBoundaries: opts.asciiWordBoundaries,
      avoidSubclass: opts.avoidSubclass,
      flagDirectivesByAlt: /* @__PURE__ */ new Map(),
      jsGroupNameMap: /* @__PURE__ */ new Map(),
      minTargetEs2024: isMinTarget(opts.bestEffortTarget, "ES2024"),
      passedLookbehind: false,
      strategy: null,
      // Subroutines can appear before the groups they ref, so collect reffed nodes for a second pass 
      subroutineRefMap: /* @__PURE__ */ new Map(),
      supportedGNodes: /* @__PURE__ */ new Set(),
      digitIsAscii: ast.flags.digitIsAscii,
      spaceIsAscii: ast.flags.spaceIsAscii,
      wordIsAscii: ast.flags.wordIsAscii
    };
    S(ast, FirstPassVisitor, firstPassState);
    const globalFlags = {
      dotAll: ast.flags.dotAll,
      ignoreCase: ast.flags.ignoreCase
    };
    const secondPassState = {
      currentFlags: globalFlags,
      prevFlags: null,
      globalFlags,
      groupOriginByCopy: /* @__PURE__ */ new Map(),
      groupsByName: /* @__PURE__ */ new Map(),
      multiplexCapturesToLeftByRef: /* @__PURE__ */ new Map(),
      openRefs: /* @__PURE__ */ new Map(),
      reffedNodesByReferencer: /* @__PURE__ */ new Map(),
      subroutineRefMap: firstPassState.subroutineRefMap
    };
    S(ast, SecondPassVisitor, secondPassState);
    const thirdPassState = {
      groupsByName: secondPassState.groupsByName,
      highestOrphanBackref: 0,
      numCapturesToLeft: 0,
      reffedNodesByReferencer: secondPassState.reffedNodesByReferencer
    };
    S(ast, ThirdPassVisitor, thirdPassState);
    ast._originMap = secondPassState.groupOriginByCopy;
    ast._strategy = firstPassState.strategy;
    return ast;
  }
  var FirstPassVisitor = {
    AbsenceFunction({ node, parent, replaceWith }) {
      const { body: body3, kind } = node;
      if (kind === "repeater") {
        const innerGroup = A2();
        innerGroup.body[0].body.push(
          // Insert own alts as `body`
          K2({ negate: true, body: body3 }),
          Q2("Any")
        );
        const outerGroup = A2();
        outerGroup.body[0].body.push(
          _2("greedy", 0, Infinity, innerGroup)
        );
        replaceWith(setParentDeep(outerGroup, parent), { traverse: true });
      } else {
        throw new Error(`Unsupported absence function "(?~|"`);
      }
    },
    Alternative: {
      enter({ node, parent, key: key2 }, { flagDirectivesByAlt }) {
        const flagDirectives = node.body.filter((el) => el.kind === "flags");
        for (let i2 = key2 + 1; i2 < parent.body.length; i2++) {
          const forwardSiblingAlt = parent.body[i2];
          getOrInsert(flagDirectivesByAlt, forwardSiblingAlt, []).push(...flagDirectives);
        }
      },
      exit({ node }, { flagDirectivesByAlt }) {
        if (flagDirectivesByAlt.get(node)?.length) {
          const flags = getCombinedFlagModsFromFlagNodes(flagDirectivesByAlt.get(node));
          if (flags) {
            const flagGroup = A2({ flags });
            flagGroup.body[0].body = node.body;
            node.body = [setParentDeep(flagGroup, node)];
          }
        }
      }
    },
    Assertion({ node, parent, key: key2, container, root: root2, remove, replaceWith }, state) {
      const { kind, negate } = node;
      const { asciiWordBoundaries, avoidSubclass, supportedGNodes, wordIsAscii } = state;
      if (kind === "text_segment_boundary") {
        throw new Error(`Unsupported text segment boundary "\\${negate ? "Y" : "y"}"`);
      } else if (kind === "line_end") {
        replaceWith(setParentDeep(K2({ body: [
          b2({ body: [F2("string_end")] }),
          b2({ body: [m2(10)] })
          // `\n`
        ] }), parent));
      } else if (kind === "line_start") {
        replaceWith(setParentDeep(parseFragment(r3`(?<=\A|\n(?!\z))`, { skipLookbehindValidation: true }), parent));
      } else if (kind === "search_start") {
        if (supportedGNodes.has(node)) {
          root2.flags.sticky = true;
          remove();
        } else {
          const prev = container[key2 - 1];
          if (prev && isAlwaysNonZeroLength(prev)) {
            replaceWith(setParentDeep(K2({ negate: true }), parent));
          } else if (avoidSubclass) {
            throw new Error(r3`Uses "\G" in a way that requires a subclass`);
          } else {
            replaceWith(setParent(F2("string_start"), parent));
            state.strategy = "clip_search";
          }
        }
      } else if (kind === "string_end" || kind === "string_start") {
      } else if (kind === "string_end_newline") {
        replaceWith(setParentDeep(parseFragment(r3`(?=\n?\z)`), parent));
      } else if (kind === "word_boundary") {
        if (!wordIsAscii && !asciiWordBoundaries) {
          const b3 = `(?:(?<=${defaultWordChar})(?!${defaultWordChar})|(?<!${defaultWordChar})(?=${defaultWordChar}))`;
          const B3 = `(?:(?<=${defaultWordChar})(?=${defaultWordChar})|(?<!${defaultWordChar})(?!${defaultWordChar}))`;
          replaceWith(setParentDeep(parseFragment(negate ? B3 : b3), parent));
        }
      } else {
        throw new Error(`Unexpected assertion kind "${kind}"`);
      }
    },
    Backreference({ node }, { jsGroupNameMap }) {
      let { ref } = node;
      if (typeof ref === "string" && !isValidJsGroupName(ref)) {
        ref = getAndStoreJsGroupName(ref, jsGroupNameMap);
        node.ref = ref;
      }
    },
    CapturingGroup({ node }, { jsGroupNameMap, subroutineRefMap }) {
      let { name } = node;
      if (name && !isValidJsGroupName(name)) {
        name = getAndStoreJsGroupName(name, jsGroupNameMap);
        node.name = name;
      }
      subroutineRefMap.set(node.number, node);
      if (name) {
        subroutineRefMap.set(name, node);
      }
    },
    CharacterClassRange({ node, parent, replaceWith }) {
      if (parent.kind === "intersection") {
        const cc = C2({ body: [node] });
        replaceWith(setParentDeep(cc, parent), { traverse: true });
      }
    },
    CharacterSet({ node, parent, replaceWith }, { accuracy, minTargetEs2024, digitIsAscii, spaceIsAscii, wordIsAscii }) {
      const { kind, negate, value } = node;
      if (digitIsAscii && (kind === "digit" || value === "digit")) {
        replaceWith(setParent(E2("digit", { negate }), parent));
        return;
      }
      if (spaceIsAscii && (kind === "space" || value === "space")) {
        replaceWith(setParentDeep(setNegate(parseFragment(asciiSpaceChar), negate), parent));
        return;
      }
      if (wordIsAscii && (kind === "word" || value === "word")) {
        replaceWith(setParent(E2("word", { negate }), parent));
        return;
      }
      if (kind === "any") {
        replaceWith(setParent(Q2("Any"), parent));
      } else if (kind === "digit") {
        replaceWith(setParent(Q2("Nd", { negate }), parent));
      } else if (kind === "dot") {
      } else if (kind === "text_segment") {
        if (accuracy === "strict") {
          throw new Error(r3`Use of "\X" requires non-strict accuracy`);
        }
        const eBase = "\\p{Emoji}(?:\\p{EMod}|\\uFE0F\\u20E3?|[\\x{E0020}-\\x{E007E}]+\\x{E007F})?";
        const emoji = r3`\p{RI}{2}|${eBase}(?:\u200D${eBase})*`;
        replaceWith(setParentDeep(parseFragment(
          // Close approximation of an extended grapheme cluster; see <unicode.org/reports/tr29/>
          r3`(?>\r\n|${minTargetEs2024 ? r3`\p{RGI_Emoji}` : emoji}|\P{M}\p{M}*)`,
          // Allow JS property `RGI_Emoji` through
          { skipPropertyNameValidation: true }
        ), parent));
      } else if (kind === "hex") {
        replaceWith(setParent(Q2("AHex", { negate }), parent));
      } else if (kind === "newline") {
        replaceWith(setParentDeep(parseFragment(negate ? "[^\n]" : "(?>\r\n?|[\n\v\f\x85\u2028\u2029])"), parent));
      } else if (kind === "posix") {
        if (!minTargetEs2024 && (value === "graph" || value === "print")) {
          if (accuracy === "strict") {
            throw new Error(`POSIX class "${value}" requires min target ES2024 or non-strict accuracy`);
          }
          let ascii = {
            graph: "!-~",
            print: " -~"
          }[value];
          if (negate) {
            ascii = `\0-${cp(ascii.codePointAt(0) - 1)}${cp(ascii.codePointAt(2) + 1)}-\u{10FFFF}`;
          }
          replaceWith(setParentDeep(parseFragment(`[${ascii}]`), parent));
        } else {
          replaceWith(setParentDeep(setNegate(parseFragment(PosixClassMap.get(value)), negate), parent));
        }
      } else if (kind === "property") {
        if (!JsUnicodePropertyMap.has(w2(value))) {
          node.key = "sc";
        }
      } else if (kind === "space") {
        replaceWith(setParent(Q2("space", { negate }), parent));
      } else if (kind === "word") {
        replaceWith(setParentDeep(setNegate(parseFragment(defaultWordChar), negate), parent));
      } else {
        throw new Error(`Unexpected character set kind "${kind}"`);
      }
    },
    Directive({ node, parent, root: root2, remove, replaceWith, removeAllPrevSiblings, removeAllNextSiblings }) {
      const { kind, flags } = node;
      if (kind === "flags") {
        if (!flags.enable && !flags.disable) {
          remove();
        } else {
          const flagGroup = A2({ flags });
          flagGroup.body[0].body = removeAllNextSiblings();
          replaceWith(setParentDeep(flagGroup, parent), { traverse: true });
        }
      } else if (kind === "keep") {
        const firstAlt = root2.body[0];
        const hasWrapperGroup = root2.body.length === 1 && // Not emulatable if within a `CapturingGroup`
        o2(firstAlt, { type: "Group" }) && firstAlt.body[0].body.length === 1;
        const topLevel = hasWrapperGroup ? firstAlt.body[0] : root2;
        if (parent.parent !== topLevel || topLevel.body.length > 1) {
          throw new Error(r3`Uses "\K" in a way that's unsupported`);
        }
        const lookbehind = K2({ behind: true });
        lookbehind.body[0].body = removeAllPrevSiblings();
        replaceWith(setParentDeep(lookbehind, parent));
      } else {
        throw new Error(`Unexpected directive kind "${kind}"`);
      }
    },
    Flags({ node, parent }) {
      if (node.posixIsAscii) {
        throw new Error('Unsupported flag "P"');
      }
      if (node.textSegmentMode === "word") {
        throw new Error('Unsupported flag "y{w}"');
      }
      [
        "digitIsAscii",
        // Flag D
        "extended",
        // Flag x
        "posixIsAscii",
        // Flag P
        "spaceIsAscii",
        // Flag S
        "wordIsAscii",
        // Flag W
        "textSegmentMode"
        // Flag y{g} or y{w}
      ].forEach((f3) => delete node[f3]);
      Object.assign(node, {
        // JS flag g; no Onig equiv
        global: false,
        // JS flag d; no Onig equiv
        hasIndices: false,
        // JS flag m; no Onig equiv but its behavior is always on in Onig. Onig's only line break
        // char is line feed, unlike JS, so this flag isn't used since it would produce inaccurate
        // results (also allows `^` and `$` to be used in the generator for string start and end)
        multiline: false,
        // JS flag y; no Onig equiv, but used for `\G` emulation
        sticky: node.sticky ?? false
        // Note: Regex+ doesn't allow explicitly adding flags it handles implicitly, so leave out
        // properties `unicode` (JS flag u) and `unicodeSets` (JS flag v). Keep the existing values
        // for `ignoreCase` (flag i) and `dotAll` (JS flag s, but Onig flag m)
      });
      parent.options = {
        disable: {
          // Onig uses different rules for flag x than Regex+, so disable the implicit flag
          x: true,
          // Onig has no flag to control "named capture only" mode but contextually applies its
          // behavior when named capturing is used, so disable Regex+'s implicit flag for it
          n: true
        },
        force: {
          // Always add flag v because we're generating an AST that relies on it (it enables JS
          // support for Onig features nested classes, intersection, Unicode properties, etc.).
          // However, the generator might disable flag v based on its `target` option
          v: true
        }
      };
    },
    Group({ node }) {
      if (!node.flags) {
        return;
      }
      const { enable, disable } = node.flags;
      enable?.extended && delete enable.extended;
      disable?.extended && delete disable.extended;
      enable?.dotAll && disable?.dotAll && delete enable.dotAll;
      enable?.ignoreCase && disable?.ignoreCase && delete enable.ignoreCase;
      enable && !Object.keys(enable).length && delete node.flags.enable;
      disable && !Object.keys(disable).length && delete node.flags.disable;
      !node.flags.enable && !node.flags.disable && delete node.flags;
    },
    LookaroundAssertion({ node }, state) {
      const { kind } = node;
      if (kind === "lookbehind") {
        state.passedLookbehind = true;
      }
    },
    NamedCallout({ node, parent, replaceWith }) {
      const { kind } = node;
      if (kind === "fail") {
        replaceWith(setParentDeep(K2({ negate: true }), parent));
      } else {
        throw new Error(`Unsupported named callout "(*${kind.toUpperCase()}"`);
      }
    },
    Quantifier({ node }) {
      if (node.body.type === "Quantifier") {
        const group = A2();
        group.body[0].body.push(node.body);
        node.body = setParentDeep(group, node);
      }
    },
    Regex: {
      enter({ node }, { supportedGNodes }) {
        const leadingGs = [];
        let hasAltWithLeadG = false;
        let hasAltWithoutLeadG = false;
        for (const alt of node.body) {
          if (alt.body.length === 1 && alt.body[0].kind === "search_start") {
            alt.body.pop();
          } else {
            const leadingG = getLeadingG(alt.body);
            if (leadingG) {
              hasAltWithLeadG = true;
              Array.isArray(leadingG) ? leadingGs.push(...leadingG) : leadingGs.push(leadingG);
            } else {
              hasAltWithoutLeadG = true;
            }
          }
        }
        if (hasAltWithLeadG && !hasAltWithoutLeadG) {
          leadingGs.forEach((g) => supportedGNodes.add(g));
        }
      },
      exit(_3, { accuracy, passedLookbehind, strategy }) {
        if (accuracy === "strict" && passedLookbehind && strategy) {
          throw new Error(r3`Uses "\G" in a way that requires non-strict accuracy`);
        }
      }
    },
    Subroutine({ node }, { jsGroupNameMap }) {
      let { ref } = node;
      if (typeof ref === "string" && !isValidJsGroupName(ref)) {
        ref = getAndStoreJsGroupName(ref, jsGroupNameMap);
        node.ref = ref;
      }
    }
  };
  var SecondPassVisitor = {
    Backreference({ node }, { multiplexCapturesToLeftByRef, reffedNodesByReferencer }) {
      const { orphan, ref } = node;
      if (!orphan) {
        reffedNodesByReferencer.set(node, [...multiplexCapturesToLeftByRef.get(ref).map(({ node: node2 }) => node2)]);
      }
    },
    CapturingGroup: {
      enter({
        node,
        parent,
        replaceWith,
        skip
      }, {
        groupOriginByCopy,
        groupsByName,
        multiplexCapturesToLeftByRef,
        openRefs,
        reffedNodesByReferencer
      }) {
        const origin = groupOriginByCopy.get(node);
        if (origin && openRefs.has(node.number)) {
          const recursion2 = setParent(createRecursion(node.number), parent);
          reffedNodesByReferencer.set(recursion2, openRefs.get(node.number));
          replaceWith(recursion2);
          return;
        }
        openRefs.set(node.number, node);
        multiplexCapturesToLeftByRef.set(node.number, []);
        if (node.name) {
          getOrInsert(multiplexCapturesToLeftByRef, node.name, []);
        }
        const multiplexNodes = multiplexCapturesToLeftByRef.get(node.name ?? node.number);
        for (let i2 = 0; i2 < multiplexNodes.length; i2++) {
          const multiplex = multiplexNodes[i2];
          if (
            // This group is from subroutine expansion, and there's a multiplex value from either the
            // origin node or a prior subroutine expansion group with the same origin
            origin === multiplex.node || origin && origin === multiplex.origin || // This group is not from subroutine expansion, and it comes after a subroutine expansion
            // group that refers to this group
            node === multiplex.origin
          ) {
            multiplexNodes.splice(i2, 1);
            break;
          }
        }
        multiplexCapturesToLeftByRef.get(node.number).push({ node, origin });
        if (node.name) {
          multiplexCapturesToLeftByRef.get(node.name).push({ node, origin });
        }
        if (node.name) {
          const groupsWithSameName = getOrInsert(groupsByName, node.name, /* @__PURE__ */ new Map());
          let hasDuplicateNameToRemove = false;
          if (origin) {
            hasDuplicateNameToRemove = true;
          } else {
            for (const groupInfo of groupsWithSameName.values()) {
              if (!groupInfo.hasDuplicateNameToRemove) {
                hasDuplicateNameToRemove = true;
                break;
              }
            }
          }
          groupsByName.get(node.name).set(node, { node, hasDuplicateNameToRemove });
        }
      },
      exit({ node }, { openRefs }) {
        openRefs.delete(node.number);
      }
    },
    Group: {
      enter({ node }, state) {
        state.prevFlags = state.currentFlags;
        if (node.flags) {
          state.currentFlags = getNewCurrentFlags(state.currentFlags, node.flags);
        }
      },
      exit(_3, state) {
        state.currentFlags = state.prevFlags;
      }
    },
    Subroutine({ node, parent, replaceWith }, state) {
      const { isRecursive, ref } = node;
      if (isRecursive) {
        let reffed = parent;
        while (reffed = reffed.parent) {
          if (reffed.type === "CapturingGroup" && (reffed.name === ref || reffed.number === ref)) {
            break;
          }
        }
        state.reffedNodesByReferencer.set(node, reffed);
        return;
      }
      const reffedGroupNode = state.subroutineRefMap.get(ref);
      const isGlobalRecursion = ref === 0;
      const expandedSubroutine = isGlobalRecursion ? createRecursion(0) : (
        // The reffed group might itself contain subroutines, which are expanded during sub-traversal
        cloneCapturingGroup(reffedGroupNode, state.groupOriginByCopy, null)
      );
      let replacement = expandedSubroutine;
      if (!isGlobalRecursion) {
        const reffedGroupFlagMods = getCombinedFlagModsFromFlagNodes(getAllParents(
          reffedGroupNode,
          (p2) => p2.type === "Group" && !!p2.flags
        ));
        const reffedGroupFlags = reffedGroupFlagMods ? getNewCurrentFlags(state.globalFlags, reffedGroupFlagMods) : state.globalFlags;
        if (!areFlagsEqual(reffedGroupFlags, state.currentFlags)) {
          replacement = A2({
            flags: getFlagModsFromFlags(reffedGroupFlags)
          });
          replacement.body[0].body.push(expandedSubroutine);
        }
      }
      replaceWith(setParentDeep(replacement, parent), { traverse: !isGlobalRecursion });
    }
  };
  var ThirdPassVisitor = {
    Backreference({ node, parent, replaceWith }, state) {
      if (node.orphan) {
        state.highestOrphanBackref = Math.max(state.highestOrphanBackref, node.ref);
        return;
      }
      const reffedNodes = state.reffedNodesByReferencer.get(node);
      const participants = reffedNodes.filter((reffed) => canParticipateWithNode(reffed, node));
      if (!participants.length) {
        replaceWith(setParentDeep(K2({ negate: true }), parent));
      } else if (participants.length > 1) {
        const group = A2({
          atomic: true,
          body: participants.reverse().map((reffed) => b2({
            body: [k2(reffed.number)]
          }))
        });
        replaceWith(setParentDeep(group, parent));
      } else {
        node.ref = participants[0].number;
      }
    },
    CapturingGroup({ node }, state) {
      node.number = ++state.numCapturesToLeft;
      if (node.name) {
        if (state.groupsByName.get(node.name).get(node).hasDuplicateNameToRemove) {
          delete node.name;
        }
      }
    },
    Regex: {
      exit({ node }, state) {
        const numCapsNeeded = Math.max(state.highestOrphanBackref - state.numCapturesToLeft, 0);
        for (let i2 = 0; i2 < numCapsNeeded; i2++) {
          const emptyCapture = P2();
          node.body.at(-1).body.push(emptyCapture);
        }
      }
    },
    Subroutine({ node }, state) {
      if (!node.isRecursive || node.ref === 0) {
        return;
      }
      node.ref = state.reffedNodesByReferencer.get(node).number;
    }
  };
  function addParentProperties(root2) {
    S(root2, {
      "*"({ node, parent }) {
        node.parent = parent;
      }
    });
  }
  function areFlagsEqual(a2, b3) {
    return a2.dotAll === b3.dotAll && a2.ignoreCase === b3.ignoreCase;
  }
  function canParticipateWithNode(capture, node) {
    let rightmostPoint = node;
    do {
      if (rightmostPoint.type === "Regex") {
        return false;
      }
      if (rightmostPoint.type === "Alternative") {
        continue;
      }
      if (rightmostPoint === capture) {
        return false;
      }
      const kidsOfParent = getKids(rightmostPoint.parent);
      for (const kid of kidsOfParent) {
        if (kid === rightmostPoint) {
          break;
        }
        if (kid === capture || isAncestorOf(kid, capture)) {
          return true;
        }
      }
    } while (rightmostPoint = rightmostPoint.parent);
    throw new Error("Unexpected path");
  }
  function cloneCapturingGroup(obj, originMap, up, up2) {
    const store = Array.isArray(obj) ? [] : {};
    for (const [key2, value] of Object.entries(obj)) {
      if (key2 === "parent") {
        store.parent = Array.isArray(up) ? up2 : up;
      } else if (value && typeof value === "object") {
        store[key2] = cloneCapturingGroup(value, originMap, store, up);
      } else {
        if (key2 === "type" && value === "CapturingGroup") {
          originMap.set(store, originMap.get(obj) ?? obj);
        }
        store[key2] = value;
      }
    }
    return store;
  }
  function createRecursion(ref) {
    const node = O2(ref);
    node.isRecursive = true;
    return node;
  }
  function getAllParents(node, filterFn) {
    const results = [];
    while (node = node.parent) {
      if (!filterFn || filterFn(node)) {
        results.push(node);
      }
    }
    return results;
  }
  function getAndStoreJsGroupName(name, map) {
    if (map.has(name)) {
      return map.get(name);
    }
    const jsName = `$${map.size}_${name.replace(/^[^$_\p{IDS}]|[^$\u200C\u200D\p{IDC}]/ug, "_")}`;
    map.set(name, jsName);
    return jsName;
  }
  function getCombinedFlagModsFromFlagNodes(flagNodes) {
    const flagProps = ["dotAll", "ignoreCase"];
    const combinedFlags = { enable: {}, disable: {} };
    flagNodes.forEach(({ flags }) => {
      flagProps.forEach((prop) => {
        if (flags.enable?.[prop]) {
          delete combinedFlags.disable[prop];
          combinedFlags.enable[prop] = true;
        }
        if (flags.disable?.[prop]) {
          combinedFlags.disable[prop] = true;
        }
      });
    });
    if (!Object.keys(combinedFlags.enable).length) {
      delete combinedFlags.enable;
    }
    if (!Object.keys(combinedFlags.disable).length) {
      delete combinedFlags.disable;
    }
    if (combinedFlags.enable || combinedFlags.disable) {
      return combinedFlags;
    }
    return null;
  }
  function getFlagModsFromFlags({ dotAll, ignoreCase }) {
    const mods = {};
    if (dotAll || ignoreCase) {
      mods.enable = {};
      dotAll && (mods.enable.dotAll = true);
      ignoreCase && (mods.enable.ignoreCase = true);
    }
    if (!dotAll || !ignoreCase) {
      mods.disable = {};
      !dotAll && (mods.disable.dotAll = true);
      !ignoreCase && (mods.disable.ignoreCase = true);
    }
    return mods;
  }
  function getKids(node) {
    if (!node) {
      throw new Error("Node expected");
    }
    const { body: body3 } = node;
    return Array.isArray(body3) ? body3 : body3 ? [body3] : null;
  }
  function getLeadingG(els) {
    const firstToConsider = els.find((el) => el.kind === "search_start" || isLoneGLookaround(el, { negate: false }) || !isAlwaysZeroLength(el));
    if (!firstToConsider) {
      return null;
    }
    if (firstToConsider.kind === "search_start") {
      return firstToConsider;
    }
    if (firstToConsider.type === "LookaroundAssertion") {
      return firstToConsider.body[0].body[0];
    }
    if (firstToConsider.type === "CapturingGroup" || firstToConsider.type === "Group") {
      const gNodesForGroup = [];
      for (const alt of firstToConsider.body) {
        const leadingG = getLeadingG(alt.body);
        if (!leadingG) {
          return null;
        }
        Array.isArray(leadingG) ? gNodesForGroup.push(...leadingG) : gNodesForGroup.push(leadingG);
      }
      return gNodesForGroup;
    }
    return null;
  }
  function isAncestorOf(node, descendant) {
    const kids = getKids(node) ?? [];
    for (const kid of kids) {
      if (kid === descendant || isAncestorOf(kid, descendant)) {
        return true;
      }
    }
    return false;
  }
  function isAlwaysZeroLength({ type }) {
    return type === "Assertion" || type === "Directive" || type === "LookaroundAssertion";
  }
  function isAlwaysNonZeroLength(node) {
    const types = [
      "Character",
      "CharacterClass",
      "CharacterSet"
    ];
    return types.includes(node.type) || node.type === "Quantifier" && node.min && types.includes(node.body.type);
  }
  function isLoneGLookaround(node, options) {
    const opts = {
      negate: null,
      ...options
    };
    return node.type === "LookaroundAssertion" && (opts.negate === null || node.negate === opts.negate) && node.body.length === 1 && o2(node.body[0], {
      type: "Assertion",
      kind: "search_start"
    });
  }
  function isValidJsGroupName(name) {
    return /^[$_\p{IDS}][$\u200C\u200D\p{IDC}]*$/u.test(name);
  }
  function parseFragment(pattern, options) {
    const ast = J2(pattern, {
      ...options,
      // Providing a custom set of Unicode property names avoids converting some JS Unicode
      // properties (ex: `\p{Alpha}`) to Onig POSIX classes
      unicodePropertyMap: JsUnicodePropertyMap
    });
    const alts = ast.body;
    if (alts.length > 1 || alts[0].body.length > 1) {
      return A2({ body: alts });
    }
    return alts[0].body[0];
  }
  function setNegate(node, negate) {
    node.negate = negate;
    return node;
  }
  function setParent(node, parent) {
    node.parent = parent;
    return node;
  }
  function setParentDeep(node, parent) {
    addParentProperties(node);
    node.parent = parent;
    return node;
  }
  function generate(ast, options) {
    const opts = getOptions(options);
    const minTargetEs2024 = isMinTarget(opts.target, "ES2024");
    const minTargetEs2025 = isMinTarget(opts.target, "ES2025");
    const recursionLimit = opts.rules.recursionLimit;
    if (!Number.isInteger(recursionLimit) || recursionLimit < 2 || recursionLimit > 20) {
      throw new Error("Invalid recursionLimit; use 2-20");
    }
    let hasCaseInsensitiveNode = null;
    let hasCaseSensitiveNode = null;
    if (!minTargetEs2025) {
      const iStack = [ast.flags.ignoreCase];
      S(ast, FlagModifierVisitor, {
        getCurrentModI: () => iStack.at(-1),
        popModI() {
          iStack.pop();
        },
        pushModI(isIOn) {
          iStack.push(isIOn);
        },
        setHasCasedChar() {
          if (iStack.at(-1)) {
            hasCaseInsensitiveNode = true;
          } else {
            hasCaseSensitiveNode = true;
          }
        }
      });
    }
    const appliedGlobalFlags = {
      dotAll: ast.flags.dotAll,
      // - Turn global flag i on if a case insensitive node was used and no case sensitive nodes were
      //   used (to avoid unnecessary node expansion).
      // - Turn global flag i off if a case sensitive node was used (since case sensitivity can't be
      //   forced without the use of ES2025 flag groups)
      ignoreCase: !!((ast.flags.ignoreCase || hasCaseInsensitiveNode) && !hasCaseSensitiveNode)
    };
    let lastNode = ast;
    const state = {
      accuracy: opts.accuracy,
      appliedGlobalFlags,
      captureMap: /* @__PURE__ */ new Map(),
      currentFlags: {
        dotAll: ast.flags.dotAll,
        ignoreCase: ast.flags.ignoreCase
      },
      inCharClass: false,
      lastNode,
      originMap: ast._originMap,
      recursionLimit,
      useAppliedIgnoreCase: !!(!minTargetEs2025 && hasCaseInsensitiveNode && hasCaseSensitiveNode),
      useFlagMods: minTargetEs2025,
      useFlagV: minTargetEs2024,
      verbose: opts.verbose
    };
    function gen(node) {
      state.lastNode = lastNode;
      lastNode = node;
      const fn = throwIfNullish(generator[node.type], `Unexpected node type "${node.type}"`);
      return fn(node, state, gen);
    }
    const result = {
      pattern: ast.body.map(gen).join("|"),
      // Could reset `lastNode` at this point via `lastNode = ast`, but it isn't needed by flags
      flags: gen(ast.flags),
      options: { ...ast.options }
    };
    if (!minTargetEs2024) {
      delete result.options.force.v;
      result.options.disable.v = true;
      result.options.unicodeSetsPlugin = null;
    }
    result._captureTransfers = /* @__PURE__ */ new Map();
    result._hiddenCaptures = [];
    state.captureMap.forEach((value, key2) => {
      if (value.hidden) {
        result._hiddenCaptures.push(key2);
      }
      if (value.transferTo) {
        getOrInsert(result._captureTransfers, value.transferTo, []).push(key2);
      }
    });
    return result;
  }
  var FlagModifierVisitor = {
    "*": {
      enter({ node }, state) {
        if (isAnyGroup(node)) {
          const currentModI = state.getCurrentModI();
          state.pushModI(
            node.flags ? getNewCurrentFlags({ ignoreCase: currentModI }, node.flags).ignoreCase : currentModI
          );
        }
      },
      exit({ node }, state) {
        if (isAnyGroup(node)) {
          state.popModI();
        }
      }
    },
    Backreference(_3, state) {
      state.setHasCasedChar();
    },
    Character({ node }, state) {
      if (charHasCase(cp(node.value))) {
        state.setHasCasedChar();
      }
    },
    CharacterClassRange({ node, skip }, state) {
      skip();
      if (getCasesOutsideCharClassRange(node, { firstOnly: true }).length) {
        state.setHasCasedChar();
      }
    },
    CharacterSet({ node }, state) {
      if (node.kind === "property" && UnicodePropertiesWithSpecificCase.has(node.value)) {
        state.setHasCasedChar();
      }
    }
  };
  var generator = {
    /**
    @param {AlternativeNode} node
    */
    Alternative({ body: body3 }, _3, gen) {
      return body3.map(gen).join("");
    },
    /**
    @param {AssertionNode} node
    */
    Assertion({ kind, negate }) {
      if (kind === "string_end") {
        return "$";
      }
      if (kind === "string_start") {
        return "^";
      }
      if (kind === "word_boundary") {
        return negate ? r3`\B` : r3`\b`;
      }
      throw new Error(`Unexpected assertion kind "${kind}"`);
    },
    /**
    @param {BackreferenceNode} node
    */
    Backreference({ ref }, state) {
      if (typeof ref !== "number") {
        throw new Error("Unexpected named backref in transformed AST");
      }
      if (!state.useFlagMods && state.accuracy === "strict" && state.currentFlags.ignoreCase && !state.captureMap.get(ref).ignoreCase) {
        throw new Error("Use of case-insensitive backref to case-sensitive group requires target ES2025 or non-strict accuracy");
      }
      return "\\" + ref;
    },
    /**
    @param {CapturingGroupNode} node
    */
    CapturingGroup(node, state, gen) {
      const { body: body3, name, number: number2 } = node;
      const data = { ignoreCase: state.currentFlags.ignoreCase };
      const origin = state.originMap.get(node);
      if (origin) {
        data.hidden = true;
        if (number2 > origin.number) {
          data.transferTo = origin.number;
        }
      }
      state.captureMap.set(number2, data);
      return `(${name ? `?<${name}>` : ""}${body3.map(gen).join("|")})`;
    },
    /**
    @param {CharacterNode} node
    */
    Character({ value }, state) {
      const char = cp(value);
      const escaped = getCharEscape(value, {
        escDigit: state.lastNode.type === "Backreference",
        inCharClass: state.inCharClass,
        useFlagV: state.useFlagV
      });
      if (escaped !== char) {
        return escaped;
      }
      if (state.useAppliedIgnoreCase && state.currentFlags.ignoreCase && charHasCase(char)) {
        const cases = getIgnoreCaseMatchChars(char);
        return state.inCharClass ? cases.join("") : cases.length > 1 ? `[${cases.join("")}]` : cases[0];
      }
      return char;
    },
    /**
    @param {CharacterClassNode} node
    */
    CharacterClass(node, state, gen) {
      const { kind, negate, parent } = node;
      let { body: body3 } = node;
      if (kind === "intersection" && !state.useFlagV) {
        throw new Error("Use of character class intersection requires min target ES2024");
      }
      if (envFlags.bugFlagVLiteralHyphenIsRange && state.useFlagV && body3.some(isLiteralHyphen)) {
        body3 = [m2(45), ...body3.filter((kid) => !isLiteralHyphen(kid))];
      }
      const genClass = () => `[${negate ? "^" : ""}${body3.map(gen).join(kind === "intersection" ? "&&" : "")}]`;
      if (!state.inCharClass) {
        if (
          // Already established `kind !== 'intersection'` if `!state.useFlagV`; don't check again
          (!state.useFlagV || envFlags.bugNestedClassIgnoresNegation) && !negate
        ) {
          const negatedChildClasses = body3.filter(
            (kid) => kid.type === "CharacterClass" && kid.kind === "union" && kid.negate
          );
          if (negatedChildClasses.length) {
            const group = A2();
            const groupFirstAlt = group.body[0];
            group.parent = parent;
            groupFirstAlt.parent = group;
            body3 = body3.filter((kid) => !negatedChildClasses.includes(kid));
            node.body = body3;
            if (body3.length) {
              node.parent = groupFirstAlt;
              groupFirstAlt.body.push(node);
            } else {
              group.body.pop();
            }
            negatedChildClasses.forEach((cc) => {
              const newAlt = b2({ body: [cc] });
              cc.parent = newAlt;
              newAlt.parent = group;
              group.body.push(newAlt);
            });
            return gen(group);
          }
        }
        state.inCharClass = true;
        const result = genClass();
        state.inCharClass = false;
        return result;
      }
      const firstEl = body3[0];
      if (
        // Already established that the parent is a char class via `inCharClass`; don't check again
        kind === "union" && !negate && firstEl && // Allows many nested classes to work with `target` ES2018 which doesn't support nesting
        ((!state.useFlagV || !state.verbose) && parent.kind === "union" && !(envFlags.bugFlagVLiteralHyphenIsRange && state.useFlagV) || !state.verbose && parent.kind === "intersection" && // JS doesn't allow intersection with union or ranges
        body3.length === 1 && firstEl.type !== "CharacterClassRange")
      ) {
        return body3.map(gen).join("");
      }
      if (!state.useFlagV && parent.type === "CharacterClass") {
        throw new Error("Uses nested character class in a way that requires min target ES2024");
      }
      return genClass();
    },
    /**
    @param {CharacterClassRangeNode} node
    */
    CharacterClassRange(node, state) {
      const min = node.min.value;
      const max = node.max.value;
      const escOpts = {
        escDigit: false,
        inCharClass: true,
        useFlagV: state.useFlagV
      };
      const minStr = getCharEscape(min, escOpts);
      const maxStr = getCharEscape(max, escOpts);
      const extraChars = /* @__PURE__ */ new Set();
      if (state.useAppliedIgnoreCase && state.currentFlags.ignoreCase) {
        const charsOutsideRange = getCasesOutsideCharClassRange(node);
        const ranges = getCodePointRangesFromChars(charsOutsideRange);
        ranges.forEach((value) => {
          extraChars.add(
            Array.isArray(value) ? `${getCharEscape(value[0], escOpts)}-${getCharEscape(value[1], escOpts)}` : getCharEscape(value, escOpts)
          );
        });
      }
      return `${minStr}-${maxStr}${[...extraChars].join("")}`;
    },
    /**
    @param {CharacterSetNode} node
    */
    CharacterSet({ kind, negate, value, key: key2 }, state) {
      if (kind === "dot") {
        return state.currentFlags.dotAll ? state.appliedGlobalFlags.dotAll || state.useFlagMods ? "." : "[^]" : (
          // Onig's only line break char is line feed, unlike JS
          r3`[^\n]`
        );
      }
      if (kind === "digit") {
        return negate ? r3`\D` : r3`\d`;
      }
      if (kind === "property") {
        if (state.useAppliedIgnoreCase && state.currentFlags.ignoreCase && UnicodePropertiesWithSpecificCase.has(value)) {
          throw new Error(`Unicode property "${value}" can't be case-insensitive when other chars have specific case`);
        }
        return `${negate ? r3`\P` : r3`\p`}{${key2 ? `${key2}=` : ""}${value}}`;
      }
      if (kind === "word") {
        return negate ? r3`\W` : r3`\w`;
      }
      throw new Error(`Unexpected character set kind "${kind}"`);
    },
    /**
    @param {FlagsNode} node
    */
    Flags(node, state) {
      return (
        // The transformer should never turn on the properties for flags d, g, m since Onig doesn't
        // have equivs. Flag m is never used since Onig uses different line break chars than JS
        // (node.hasIndices ? 'd' : '') +
        // (node.global ? 'g' : '') +
        // (node.multiline ? 'm' : '') +
        (state.appliedGlobalFlags.ignoreCase ? "i" : "") + (node.dotAll ? "s" : "") + (node.sticky ? "y" : "")
      );
    },
    /**
    @param {GroupNode} node
    */
    Group({ atomic: atomic2, body: body3, flags, parent }, state, gen) {
      const currentFlags = state.currentFlags;
      if (flags) {
        state.currentFlags = getNewCurrentFlags(currentFlags, flags);
      }
      const contents = body3.map(gen).join("|");
      const result = !state.verbose && body3.length === 1 && // Single alt
      parent.type !== "Quantifier" && !atomic2 && (!state.useFlagMods || !flags) ? contents : `(?${getGroupPrefix(atomic2, flags, state.useFlagMods)}${contents})`;
      state.currentFlags = currentFlags;
      return result;
    },
    /**
    @param {LookaroundAssertionNode} node
    */
    LookaroundAssertion({ body: body3, kind, negate }, _3, gen) {
      const prefix = `${kind === "lookahead" ? "" : "<"}${negate ? "!" : "="}`;
      return `(?${prefix}${body3.map(gen).join("|")})`;
    },
    /**
    @param {QuantifierNode} node
    */
    Quantifier(node, _3, gen) {
      return gen(node.body) + getQuantifierStr(node);
    },
    /**
    @param {SubroutineNode & {isRecursive: true}} node
    */
    Subroutine({ isRecursive, ref }, state) {
      if (!isRecursive) {
        throw new Error("Unexpected non-recursive subroutine in transformed AST");
      }
      const limit = state.recursionLimit;
      return ref === 0 ? `(?R=${limit})` : r3`\g<${ref}&R=${limit}>`;
    }
  };
  var BaseEscapeChars = /* @__PURE__ */ new Set([
    "$",
    "(",
    ")",
    "*",
    "+",
    ".",
    "?",
    "[",
    "\\",
    "]",
    "^",
    "{",
    "|",
    "}"
  ]);
  var CharClassEscapeChars = /* @__PURE__ */ new Set([
    "-",
    "\\",
    "]",
    "^",
    // Literal `[` doesn't require escaping with flag u, but this can help work around regex source
    // linters and regex syntax processors that expect unescaped `[` to create a nested class
    "["
  ]);
  var CharClassEscapeCharsFlagV = /* @__PURE__ */ new Set([
    "(",
    ")",
    "-",
    "/",
    "[",
    "\\",
    "]",
    "^",
    "{",
    "|",
    "}",
    // Double punctuators; also includes already-listed `-` and `^`
    "!",
    "#",
    "$",
    "%",
    "&",
    "*",
    "+",
    ",",
    ".",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "@",
    "`",
    "~"
  ]);
  var CharCodeEscapeMap = /* @__PURE__ */ new Map([
    [9, r3`\t`],
    // horizontal tab
    [10, r3`\n`],
    // line feed
    [11, r3`\v`],
    // vertical tab
    [12, r3`\f`],
    // form feed
    [13, r3`\r`],
    // carriage return
    [8232, r3`\u2028`],
    // line separator
    [8233, r3`\u2029`],
    // paragraph separator
    [65279, r3`\uFEFF`]
    // ZWNBSP/BOM
  ]);
  var casedRe = /^\p{Cased}$/u;
  function charHasCase(char) {
    return casedRe.test(char);
  }
  function getCasesOutsideCharClassRange(node, options) {
    const firstOnly = !!options?.firstOnly;
    const min = node.min.value;
    const max = node.max.value;
    const found = [];
    if (min < 65 && (max === 65535 || max >= 131071) || min === 65536 && max >= 131071) {
      return found;
    }
    for (let i2 = min; i2 <= max; i2++) {
      const char = cp(i2);
      if (!charHasCase(char)) {
        continue;
      }
      const charsOutsideRange = getIgnoreCaseMatchChars(char).filter((caseOfChar) => {
        const num = caseOfChar.codePointAt(0);
        return num < min || num > max;
      });
      if (charsOutsideRange.length) {
        found.push(...charsOutsideRange);
        if (firstOnly) {
          break;
        }
      }
    }
    return found;
  }
  function getCharEscape(codePoint, { escDigit, inCharClass, useFlagV }) {
    if (CharCodeEscapeMap.has(codePoint)) {
      return CharCodeEscapeMap.get(codePoint);
    }
    if (
      // Control chars, etc.; condition modeled on the Chrome developer console's display for strings
      codePoint < 32 || codePoint > 126 && codePoint < 160 || // Unicode planes 4-16; unassigned, special purpose, and private use area
      codePoint > 262143 || // Avoid corrupting a preceding backref by immediately following it with a literal digit
      escDigit && isDigitCharCode(codePoint)
    ) {
      return codePoint > 255 ? `\\u{${codePoint.toString(16).toUpperCase()}}` : `\\x${codePoint.toString(16).toUpperCase().padStart(2, "0")}`;
    }
    const escapeChars = inCharClass ? useFlagV ? CharClassEscapeCharsFlagV : CharClassEscapeChars : BaseEscapeChars;
    const char = cp(codePoint);
    return (escapeChars.has(char) ? "\\" : "") + char;
  }
  function getCodePointRangesFromChars(chars) {
    const codePoints = chars.map((char) => char.codePointAt(0)).sort((a2, b3) => a2 - b3);
    const values = [];
    let start = null;
    for (let i2 = 0; i2 < codePoints.length; i2++) {
      if (codePoints[i2 + 1] === codePoints[i2] + 1) {
        start ??= codePoints[i2];
      } else if (start === null) {
        values.push(codePoints[i2]);
      } else {
        values.push([start, codePoints[i2]]);
        start = null;
      }
    }
    return values;
  }
  function getGroupPrefix(atomic2, flagMods, useFlagMods) {
    if (atomic2) {
      return ">";
    }
    let mods = "";
    if (flagMods && useFlagMods) {
      const { enable, disable } = flagMods;
      mods = (enable?.ignoreCase ? "i" : "") + (enable?.dotAll ? "s" : "") + (disable ? "-" : "") + (disable?.ignoreCase ? "i" : "") + (disable?.dotAll ? "s" : "");
    }
    return `${mods}:`;
  }
  function getQuantifierStr({ kind, max, min }) {
    let base;
    if (!min && max === 1) {
      base = "?";
    } else if (!min && max === Infinity) {
      base = "*";
    } else if (min === 1 && max === Infinity) {
      base = "+";
    } else if (min === max) {
      base = `{${min}}`;
    } else {
      base = `{${min},${max === Infinity ? "" : max}}`;
    }
    return base + {
      greedy: "",
      lazy: "?",
      possessive: "+"
    }[kind];
  }
  function isAnyGroup({ type }) {
    return type === "CapturingGroup" || type === "Group" || type === "LookaroundAssertion";
  }
  function isDigitCharCode(value) {
    return value > 47 && value < 58;
  }
  function isLiteralHyphen({ type, value }) {
    return type === "Character" && value === 45;
  }
  var EmulatedRegExp = class _EmulatedRegExp extends RegExp {
    /**
    @type {Map<number, {
      hidden?: true;
      transferTo?: number;
    }>}
    */
    #captureMap = /* @__PURE__ */ new Map();
    /**
    @type {RegExp | EmulatedRegExp | null}
    */
    #compiled = null;
    /**
    @type {string}
    */
    #pattern;
    /**
    @type {Map<number, string>?}
    */
    #nameMap = null;
    /**
    @type {string?}
    */
    #strategy = null;
    /**
    Can be used to serialize the instance.
    @type {EmulatedRegExpOptions}
    */
    rawOptions = {};
    // Override the getter with one that works with lazy-compiled regexes
    get source() {
      return this.#pattern || "(?:)";
    }
    /**
    @overload
    @param {string} pattern
    @param {string} [flags]
    @param {EmulatedRegExpOptions} [options]
    */
    /**
    @overload
    @param {EmulatedRegExp} pattern
    @param {string} [flags]
    */
    constructor(pattern, flags, options) {
      const lazyCompile = !!options?.lazyCompile;
      if (pattern instanceof RegExp) {
        if (options) {
          throw new Error("Cannot provide options when copying a regexp");
        }
        const re3 = pattern;
        super(re3, flags);
        this.#pattern = re3.source;
        if (re3 instanceof _EmulatedRegExp) {
          this.#captureMap = re3.#captureMap;
          this.#nameMap = re3.#nameMap;
          this.#strategy = re3.#strategy;
          this.rawOptions = re3.rawOptions;
        }
      } else {
        const opts = {
          hiddenCaptures: [],
          strategy: null,
          transfers: [],
          ...options
        };
        super(lazyCompile ? "" : pattern, flags);
        this.#pattern = pattern;
        this.#captureMap = createCaptureMap(opts.hiddenCaptures, opts.transfers);
        this.#strategy = opts.strategy;
        this.rawOptions = options ?? {};
      }
      if (!lazyCompile) {
        this.#compiled = this;
      }
    }
    /**
    Called internally by all String/RegExp methods that use regexes.
    @override
    @param {string} str
    @returns {RegExpExecArray?}
    */
    exec(str) {
      if (!this.#compiled) {
        const { lazyCompile, ...rest } = this.rawOptions;
        this.#compiled = new _EmulatedRegExp(this.#pattern, this.flags, rest);
      }
      const useLastIndex = this.global || this.sticky;
      const pos = this.lastIndex;
      if (this.#strategy === "clip_search" && useLastIndex && pos) {
        this.lastIndex = 0;
        const match = this.#execCore(str.slice(pos));
        if (match) {
          adjustMatchDetailsForOffset(match, pos, str, this.hasIndices);
          this.lastIndex += pos;
        }
        return match;
      }
      return this.#execCore(str);
    }
    /**
    Adds support for hidden and transfer captures.
    @param {string} str
    @returns
    */
    #execCore(str) {
      this.#compiled.lastIndex = this.lastIndex;
      const match = super.exec.call(this.#compiled, str);
      this.lastIndex = this.#compiled.lastIndex;
      if (!match || !this.#captureMap.size) {
        return match;
      }
      const matchCopy = [...match];
      match.length = 1;
      let indicesCopy;
      if (this.hasIndices) {
        indicesCopy = [...match.indices];
        match.indices.length = 1;
      }
      const mappedNums = [0];
      for (let i2 = 1; i2 < matchCopy.length; i2++) {
        const { hidden, transferTo } = this.#captureMap.get(i2) ?? {};
        if (hidden) {
          mappedNums.push(null);
        } else {
          mappedNums.push(match.length);
          match.push(matchCopy[i2]);
          if (this.hasIndices) {
            match.indices.push(indicesCopy[i2]);
          }
        }
        if (transferTo && matchCopy[i2] !== void 0) {
          const to = mappedNums[transferTo];
          if (!to) {
            throw new Error(`Invalid capture transfer to "${to}"`);
          }
          match[to] = matchCopy[i2];
          if (this.hasIndices) {
            match.indices[to] = indicesCopy[i2];
          }
          if (match.groups) {
            if (!this.#nameMap) {
              this.#nameMap = createNameMap(this.source);
            }
            const name = this.#nameMap.get(transferTo);
            if (name) {
              match.groups[name] = matchCopy[i2];
              if (this.hasIndices) {
                match.indices.groups[name] = indicesCopy[i2];
              }
            }
          }
        }
      }
      return match;
    }
  };
  function adjustMatchDetailsForOffset(match, offset, input, hasIndices) {
    match.index += offset;
    match.input = input;
    if (hasIndices) {
      const indices = match.indices;
      for (let i2 = 0; i2 < indices.length; i2++) {
        const arr = indices[i2];
        if (arr) {
          indices[i2] = [arr[0] + offset, arr[1] + offset];
        }
      }
      const groupIndices = indices.groups;
      if (groupIndices) {
        Object.keys(groupIndices).forEach((key2) => {
          const arr = groupIndices[key2];
          if (arr) {
            groupIndices[key2] = [arr[0] + offset, arr[1] + offset];
          }
        });
      }
    }
  }
  function createCaptureMap(hiddenCaptures, transfers) {
    const captureMap = /* @__PURE__ */ new Map();
    for (const num of hiddenCaptures) {
      captureMap.set(num, {
        hidden: true
      });
    }
    for (const [to, from] of transfers) {
      for (const num of from) {
        getOrInsert(captureMap, num, {}).transferTo = to;
      }
    }
    return captureMap;
  }
  function createNameMap(pattern) {
    const re3 = /(?<capture>\((?:\?<(?![=!])(?<name>[^>]+)>|(?!\?)))|\\?./gsu;
    const map = /* @__PURE__ */ new Map();
    let numCharClassesOpen = 0;
    let numCaptures = 0;
    let match;
    while (match = re3.exec(pattern)) {
      const { 0: m3, groups: { capture, name } } = match;
      if (m3 === "[") {
        numCharClassesOpen++;
      } else if (!numCharClassesOpen) {
        if (capture) {
          numCaptures++;
          if (name) {
            map.set(numCaptures, name);
          }
        }
      } else if (m3 === "]") {
        numCharClassesOpen--;
      }
    }
    return map;
  }
  function toRegExp(pattern, options) {
    const d2 = toRegExpDetails(pattern, options);
    if (d2.options) {
      return new EmulatedRegExp(d2.pattern, d2.flags, d2.options);
    }
    return new RegExp(d2.pattern, d2.flags);
  }
  function toRegExpDetails(pattern, options) {
    const opts = getOptions(options);
    const onigurumaAst = J2(pattern, {
      flags: opts.flags,
      normalizeUnknownPropertyNames: true,
      rules: {
        captureGroup: opts.rules.captureGroup,
        singleline: opts.rules.singleline
      },
      skipBackrefValidation: opts.rules.allowOrphanBackrefs,
      unicodePropertyMap: JsUnicodePropertyMap
    });
    const regexPlusAst = transform(onigurumaAst, {
      accuracy: opts.accuracy,
      asciiWordBoundaries: opts.rules.asciiWordBoundaries,
      avoidSubclass: opts.avoidSubclass,
      bestEffortTarget: opts.target
    });
    const generated = generate(regexPlusAst, opts);
    const recursionResult = recursion(generated.pattern, {
      captureTransfers: generated._captureTransfers,
      hiddenCaptures: generated._hiddenCaptures,
      mode: "external"
    });
    const possessiveResult = possessive(recursionResult.pattern);
    const atomicResult = atomic(possessiveResult.pattern, {
      captureTransfers: recursionResult.captureTransfers,
      hiddenCaptures: recursionResult.hiddenCaptures
    });
    const details = {
      pattern: atomicResult.pattern,
      flags: `${opts.hasIndices ? "d" : ""}${opts.global ? "g" : ""}${generated.flags}${generated.options.disable.v ? "u" : "v"}`
    };
    if (opts.avoidSubclass) {
      if (opts.lazyCompileLength !== Infinity) {
        throw new Error("Lazy compilation requires subclass");
      }
    } else {
      const hiddenCaptures = atomicResult.hiddenCaptures.sort((a2, b3) => a2 - b3);
      const transfers = Array.from(atomicResult.captureTransfers);
      const strategy = regexPlusAst._strategy;
      const lazyCompile = details.pattern.length >= opts.lazyCompileLength;
      if (hiddenCaptures.length || transfers.length || strategy || lazyCompile) {
        details.options = {
          ...hiddenCaptures.length && { hiddenCaptures },
          ...transfers.length && { transfers },
          ...strategy && { strategy },
          ...lazyCompile && { lazyCompile }
        };
      }
    }
    return details;
  }

  // node_modules/@shikijs/engine-javascript/dist/shared/engine-javascript.hzpS1_41.mjs
  var MAX = 4294967295;
  var JavaScriptScanner = class {
    constructor(patterns, options = {}) {
      this.patterns = patterns;
      this.options = options;
      const {
        forgiving = false,
        cache,
        regexConstructor
      } = options;
      if (!regexConstructor) {
        throw new Error("Option `regexConstructor` is not provided");
      }
      this.regexps = patterns.map((p2) => {
        if (typeof p2 !== "string") {
          return p2;
        }
        const cached = cache?.get(p2);
        if (cached) {
          if (cached instanceof RegExp) {
            return cached;
          }
          if (forgiving)
            return null;
          throw cached;
        }
        try {
          const regex = regexConstructor(p2);
          cache?.set(p2, regex);
          return regex;
        } catch (e) {
          cache?.set(p2, e);
          if (forgiving)
            return null;
          throw e;
        }
      });
    }
    regexps;
    findNextMatchSync(string, startPosition, _options) {
      const str = typeof string === "string" ? string : string.content;
      const pending = [];
      function toResult(index, match, offset = 0) {
        return {
          index,
          captureIndices: match.indices.map((indice) => {
            if (indice == null) {
              return {
                start: MAX,
                end: MAX,
                length: 0
              };
            }
            return {
              start: indice[0] + offset,
              end: indice[1] + offset,
              length: indice[1] - indice[0]
            };
          })
        };
      }
      for (let i2 = 0; i2 < this.regexps.length; i2++) {
        const regexp = this.regexps[i2];
        if (!regexp)
          continue;
        try {
          regexp.lastIndex = startPosition;
          const match = regexp.exec(str);
          if (!match)
            continue;
          if (match.index === startPosition) {
            return toResult(i2, match, 0);
          }
          pending.push([i2, match, 0]);
        } catch (e) {
          if (this.options.forgiving)
            continue;
          throw e;
        }
      }
      if (pending.length) {
        const minIndex = Math.min(...pending.map((m3) => m3[1].index));
        for (const [i2, match, offset] of pending) {
          if (match.index === minIndex) {
            return toResult(i2, match, offset);
          }
        }
      }
      return null;
    }
  };

  // node_modules/@shikijs/engine-javascript/dist/engine-compile.mjs
  function defaultJavaScriptRegexConstructor(pattern, options) {
    return toRegExp(
      pattern,
      {
        global: true,
        hasIndices: true,
        // This has no benefit for the standard JS engine, but it avoids a perf penalty for
        // precompiled grammars when constructing extremely long patterns that aren't always used
        lazyCompileLength: 3e3,
        rules: {
          // Needed since TextMate grammars merge backrefs across patterns
          allowOrphanBackrefs: true,
          // Improves search performance for generated regexes
          asciiWordBoundaries: true,
          // Follow `vscode-oniguruma` which enables this Oniguruma option by default
          captureGroup: true,
          // Oniguruma uses depth limit `20`; lowered here to keep regexes shorter and maybe
          // sometimes faster, but can be increased if issues reported due to low limit
          recursionLimit: 5,
          // Oniguruma option for `^`->`\A`, `$`->`\Z`; improves search performance without any
          // change in meaning since TM grammars search line by line
          singleline: true
        },
        ...options
      }
    );
  }
  function createJavaScriptRegexEngine(options = {}) {
    const _options = Object.assign(
      {
        target: "auto",
        cache: /* @__PURE__ */ new Map()
      },
      options
    );
    _options.regexConstructor ||= (pattern) => defaultJavaScriptRegexConstructor(pattern, { target: _options.target });
    return {
      createScanner(patterns) {
        return new JavaScriptScanner(patterns, _options);
      },
      createString(s2) {
        return {
          content: s2
        };
      }
    };
  }

  // shiki.bundle.b.ts
  var bundledLanguages = {
    typescript: () => Promise.resolve().then(() => (init_typescript(), typescript_exports)),
    ts: () => Promise.resolve().then(() => (init_typescript(), typescript_exports)),
    cts: () => Promise.resolve().then(() => (init_typescript(), typescript_exports)),
    mts: () => Promise.resolve().then(() => (init_typescript(), typescript_exports)),
    javascript: () => Promise.resolve().then(() => (init_javascript(), javascript_exports)),
    js: () => Promise.resolve().then(() => (init_javascript(), javascript_exports)),
    cjs: () => Promise.resolve().then(() => (init_javascript(), javascript_exports)),
    mjs: () => Promise.resolve().then(() => (init_javascript(), javascript_exports)),
    html: () => Promise.resolve().then(() => (init_html(), html_exports)),
    xml: () => Promise.resolve().then(() => (init_xml(), xml_exports)),
    json: () => Promise.resolve().then(() => (init_json(), json_exports)),
    diff: () => Promise.resolve().then(() => (init_diff(), diff_exports)),
    dotenv: () => Promise.resolve().then(() => (init_dotenv(), dotenv_exports)),
    css: () => Promise.resolve().then(() => (init_css(), css_exports)),
    json5: () => Promise.resolve().then(() => (init_json5(), json5_exports)),
    jsonc: () => Promise.resolve().then(() => (init_jsonc(), jsonc_exports)),
    jsonl: () => Promise.resolve().then(() => (init_jsonl(), jsonl_exports)),
    regexp: () => Promise.resolve().then(() => (init_regexp(), regexp_exports)),
    regex: () => Promise.resolve().then(() => (init_regexp(), regexp_exports))
  };
  var bundledThemes = {
    "light-plus": () => Promise.resolve().then(() => (init_light_plus(), light_plus_exports)),
    "dark-plus": () => Promise.resolve().then(() => (init_dark_plus(), dark_plus_exports))
  };
  var createHighlighter = /* @__PURE__ */ createBundledHighlighter({
    langs: bundledLanguages,
    themes: bundledThemes,
    engine: () => createJavaScriptRegexEngine()
  });
  var {
    codeToHtml: codeToHtml2,
    codeToHast: codeToHast2,
    codeToTokensBase: codeToTokensBase2,
    codeToTokens: codeToTokens2,
    codeToTokensWithThemes: codeToTokensWithThemes2,
    getSingletonHighlighter,
    getLastGrammarState: getLastGrammarState2
  } = /* @__PURE__ */ createSingletonShorthands(
    createHighlighter
  );
})();
