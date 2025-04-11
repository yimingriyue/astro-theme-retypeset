

以下是一些基本的 Markdown 语法示例，及其在 Retypeset 主题中的样式效果。

## 标题

在文本前添加井号 `#` 与空格，即可创建标题。井号数量对应标题等级。

### 语法

```
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

### 效果

# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

## 段落

使用空行分隔文本，即可创建段落。

### 语法

```
孔乙己一到店，所有喝酒的人便都看着他笑，
```

### 效果

引得众人都哄笑起来：店内外充满了快活的空气。

听人家背地里谈论，孔乙己原来也读过书，但终于没有进学，又不会营生；于是愈过愈穷，弄到将要讨饭了。

## 图片

使用感叹号 `!` 方括号 `[]` 与圆括号 `()`，即可添加图片。这些符号都是英文半角符号，而非中文全角符号。

### 语法

```markdown
![图片描述](./full/or/relative/path/of/image)
```

### 效果

![图片描述](/image-placeholder)

## 块引用

在段落前添加 `>` 符号和空格，即可创建块引用。在段落间的空行添加 `>` 符号，即可包含多个段落。若需标注引用来源，可使用 `<cite>`  或 `<footer>` 标签添加文献来源，同时可通过 `[^1]` 或 `[^note]` 格式插入脚注。

### 多个段落

#### 语法

```markdown
> 天地不仁，以万物为刍狗。
>
> **提示**：引用块内可使用 _Markdown 语法_。
```

#### 效果

> 天地不仁，以万物为刍狗。
>
> **提示**：引用块内可使用 _Markdown 语法_。


## 表格

使用三个或多个连字符 `---` 分隔标题，并使用管道符 `|` 分隔每列，即可创建表格。

### 语法

```markdown
| 斜体   | 粗体     | 代码   |
| ----- | ------- | ------ |
| _斜体_ | **粗体** | `代码` |
| _斜体_ | **粗体** | `代码` |
```

### 效果

| 斜体   | 粗体     | 代码   |
| ----- | -------- | ----- |
| _斜体_ | **粗体** | `代码` |
| _斜体_ | **粗体** | `代码` |

## 代码块

在代码的顶部与底部添加三个反引号 ```` ``` ````，即可创建代码块。在顶部的反引号后标注语言类型，例如 html、javascript、css、markdown 等，即可实现语法高亮。

### 语法

````markdown
```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>HTML5 示例文档</title>
  </head>
  <body>
    <p>测试</p>
  </body>
</html>
```
````

### 效果

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>HTML5 示例文档</title>
  </head>
  <body>
    <p>测试</p>
  </body>
</html>
```

## 列表

### 有序列表

#### 语法

```markdown
1. 第一项
2. 第二项
3. 第三项
```

#### 效果

1. 第一项
2. 第二项
3. 第三项

### 无序列表

#### 语法

```markdown
- 列表项
- 图表项
- 更多项
```

#### 效果

- 列表项
- 图表项
- 更多项

### 嵌套列表

#### 语法

```markdown
- 水果
  - 苹果
  - 橙子
  - 香蕉
- 蔬菜
  - 青菜
  - 萝卜
```

#### 效果

- 水果
  - 苹果
  - 橙子
  - 香蕉
- 蔬菜
  - 青菜
  - 萝卜

## 其他元素

包括 `<sup>` 上标，`<sub>` 下标，`<abbr>` 缩写，`<del>` 删除线，`<u>` 波浪线，`<kbd>` 键盘输入，`<mark>` 高亮。

### 语法

```markdown
H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

<abbr title="Graphics Interchange Format">GIF</abbr> 是一种位图图像格式。

书籍是人类进步的<del>楼梯</del>阶梯。

优秀的作者总是会仔细检查<u title="拼">拚</u>写错误。

按下 <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Delete</kbd> 以结束会话。

大多数<mark>蝾螈</mark>昼伏夜出，以昆虫、蠕虫等小生物为食。
```

### 效果

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

<abbr title="Graphics Interchange Format">GIF</abbr> 是一种位图图像格式。

书籍是人类进步的<del>楼梯</del>阶梯。

优秀的作家总是会仔细检查<u title="拼写">拚写</u>问题。

按下 <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Delete</kbd> 以结束会话。

大多数<mark>蝾螈</mark>昼伏夜出，以昆虫、蠕虫等小生物为食。



![示例图片.png](:/6de78d0a3f404eda86c246f066c6626c)
# 有趣网站分享
[这位卖货小姐姐天赋如何？.mp4](https://streamshare.wireway.ch/download/6e8h6xq6)

分享一些有趣、新奇的网站或 在线工具 等，可以通过以下网站找到一些有趣的内容！  

| 网站名称 | 网址 | 描述 |
|---------|------|------|
| RemoveBG | [remove.bg](https://www.remove.bg) | 在线去除图片背景 |
| Photopea | [photopea.com](https://www.photopea.com) | 在线PS工具 |
