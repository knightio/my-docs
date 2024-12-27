import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,b as l,o as r}from"./app-DZr1m2BJ.js";const n={};function i(p,t){return r(),a("div",null,t[0]||(t[0]=[l('<h1 id="_2-java内存区域与内存溢出异常" tabindex="-1"><a class="header-anchor" href="#_2-java内存区域与内存溢出异常"><span>2.Java内存区域与内存溢出异常</span></a></h1><h2 id="运行时数据区域" tabindex="-1"><a class="header-anchor" href="#运行时数据区域"><span>运行时数据区域</span></a></h2><figure><img src="https://docs-r2.hanhan12.cc/Java/JVM/UTJVM/jvm2-1.jpg" alt="Java虚拟机运行时数据区" tabindex="0" loading="lazy"><figcaption>Java虚拟机运行时数据区</figcaption></figure><h3 id="程序计数器" tabindex="-1"><a class="header-anchor" href="#程序计数器"><span>程序计数器</span></a></h3><p>线程私有</p><p>如果线程正在执行的是一个Java方法，这个计数器记录的是正在执行的虚拟机字节码指令的地址；</p><p>如果正在执行的是本地（Native）方法，这个计数器值则应为空（Undefined）。</p><p>此内存区域是唯一一个在《Java虚拟机规范》中没有规定任何OutOfMemoryError情况的区域。</p><h3 id="java虚拟机栈" tabindex="-1"><a class="header-anchor" href="#java虚拟机栈"><span>Java虚拟机栈</span></a></h3><p>线程私有</p><p>虚拟机栈描述的是Java方法执行的线程内存模型：每个方法被执行的时候，Java虚拟机都会同步创建一个<strong>栈帧（Stack Frame）<strong>用于存储</strong>局部变量表、操作数栈、动态连接、方法出口</strong>等信息。每一个方法被调用直至执行完毕的过程，就对应着一个栈帧在虚拟机栈中从入栈到出栈的过程。</p><p>局部变量表存放了编译期可知的各种Java虚拟机基本数据类型（boolean、byte、char、short、int、float、long、double）、对象引用（reference类型，它并不等同于对象本身，可能是一个指向对象起始地址的引用指针，也可能是指向一个代表对象的句柄或者其他与此对象相关的位置）和returnAddress类型（指向了一条字节码指令的地址）。</p><blockquote><p>局部变量表所需的内存空间在编译期间完成分配，当进入一个方法时，这个方法需要在栈帧中分配多大的局部变量空间是完全确定的，在方法运行期间不会改变局部变量表的大小。</p></blockquote><p>在《Java虚拟机规范》中，对这个内存区域规定了两类异常状况：</p><ul><li><p>如果线程请求的栈深度大于虚拟机所允许的深度，将抛出StackOverflowError异常。</p></li><li><p>如果Java虚拟机栈容量可以动态扩展，当栈扩展时无法申请到足够的内存会抛出OutOfMemoryError异常。</p></li></ul><h3 id="本地方法栈" tabindex="-1"><a class="header-anchor" href="#本地方法栈"><span>本地方法栈</span></a></h3><p>线程私有</p><p>虚拟机栈为虚拟机执行Java方法（也就是字节码）服务，而本地方法栈则是为虚拟机使用到的本地（Native）方法服务。</p><p>与虚拟机栈一样，本地方法栈也会在栈深度溢出或者栈扩展失败时分别抛出StackOverflowError和OutOfMemoryError异常。</p><h3 id="java堆" tabindex="-1"><a class="header-anchor" href="#java堆"><span>Java堆</span></a></h3><p>线程共享</p><p>Java堆唯一目的就是<strong>存放对象实例</strong>，是垃圾收集器管理的内存区域</p><p>如果在Java堆中没有内存完成实例分配，并且堆也无法再扩展时，Java虚拟机将会抛出OutOfMemoryError异常。</p><h3 id="方法区" tabindex="-1"><a class="header-anchor" href="#方法区"><span>方法区</span></a></h3><p>线程共享</p><p>用于存储<strong>已被虚拟机加载的类型信息、常量、静态变量、即时编译器编译后的代码缓存等数据</strong>。</p><p>根据《Java虚拟机规范》的规定，如果方法区无法满足新的内存分配需求时，将抛出OutOfMemoryError异常。</p><h4 id="运行时常量池" tabindex="-1"><a class="header-anchor" href="#运行时常量池"><span>运行时常量池</span></a></h4><p>Class文件中除了有类的版本、字段、方法、接口等描述信息外，还有一项信息是常量池表（Constant Pool Table），用于存放编译期生成的各种字面量与符号引用，这部分内容将在类加载后存放到方法区的运行时常量池中。</p><p><strong>todo ???</strong> 除了保存Class文件中描述的符号引用外，还会把由符号引用翻译出来的直接引用也存储在运行时常量池中。</p><p>运行时常量池相对于Class文件常量池的另外一个重要特征是具备动态性，Java语言并不要求常量一定只有编译期才能产生，也就是说，并非预置入Class文件中常量池的内容才能进入方法区运行时常量池，运行期间也可以将新的常量放入池中，这种特性被开发人员利用得比较多的便是String类的intern()方法。</p><h3 id="直接内存" tabindex="-1"><a class="header-anchor" href="#直接内存"><span>直接内存</span></a></h3><p>在JDK 1.4中新加入了NIO（New Input/Output）类，引入了一种基于通道（Channel）与缓冲区（Buffer）的I/O方式，它可以使用Native函数库直接分配堆外内存，然后通过一个存储在Java堆里面的DirectByteBuffer对象作为这块内存的引用进行操作。这样能在一些场景中显著提高性能，因为避免了在Java堆和Native堆中来回复制数据。</p><h2 id="hotspot虚拟机对象探秘" tabindex="-1"><a class="header-anchor" href="#hotspot虚拟机对象探秘"><span>HotSpot虚拟机对象探秘</span></a></h2><h3 id="对象的创建" tabindex="-1"><a class="header-anchor" href="#对象的创建"><span>对象的创建</span></a></h3><ol><li><p>类加载检查</p><p>当Java虚拟机遇到一条字节码new指令时，首先将去检查这个指令的参数是否能在常量池中定位到一个类的符号引用，并且检查这个符号引用代表的类是否已被加载、解析和初始化过。如果没有，那必须先执行相应的类加载过程。</p></li><li><p>分配内存</p><p>对象所需内存的大小在类加载完成后便可完全确定，为对象分配空间的任务实际上便等同于把一块确定大小的内存块从Java堆中划分出来。</p><ul><li><p>分配方式</p><ul><li><p>Java堆中内存是绝对规整</p><p>把那个指针向空闲空间方向挪动一段与对象大小相等的距离，这种分配方式称为“指针碰撞”（Bump ThePointer）。</p></li><li><p>Java堆中的内存并不是规整</p><p>须维护一个列表，记录上哪些内存块是可用的，在分配的时候从列表中找到一块足够大的空间划分给对象实例，并更新列表上的记录，这种分配方式称为“空闲列表”（Free List）。</p></li></ul><blockquote><p>Java堆是否规整又由所采用的垃圾收集器是否带有空间压缩整理（Compact）的能力决定。</p></blockquote></li><li><p>保证线程安全方式</p><ol><li>采用CAS配上失败重试的方式保证更新操作的原子性</li><li>把内存分配的动作按照线程划分在不同的空间之中进行，即每个线程在Java堆中预先分配一小块内存，称为本地线程分配缓冲（Thread Local AllocationBuffer，TLAB） <blockquote><p>通过-XX：+/-UseTLAB参数来设定是否使用TLAB</p></blockquote></li></ol></li></ul></li><li><p>初始化</p><p>内存分配完成之后，虚拟机必须将分配到的内存空间（但不包括对象头）都初始化为零值，如果使用了TLAB的话，这一项工作也可以提前至TLAB分配时顺便进行。这步操作保证了对象的实例字段在Java代码中可以不赋初始值就直接使用，使程序能访问到这些字段的数据类型所对应的零值。</p><p>Java虚拟机还要对对象进行必要的设置，例如这个对象是哪个类的实例、如何才能找到类的元数据信息、对象的哈希码（实际上对象的哈希码会延后到真正调用Object::hashCode()方法时才计算）、对象的GC分代年龄等信息。这些信息存放在对象的对象头（Object Header）之中。根据虚拟机当前运行状态的不同，如是否启用偏向锁等，对象头会有不同的设置方式。</p></li></ol><h3 id="对象的内存布局" tabindex="-1"><a class="header-anchor" href="#对象的内存布局"><span>对象的内存布局</span></a></h3><p>在HotSpot虚拟机里，对象在堆内存中的存储布局可以划分为三个部分：对象头（Header）、实例数据（Instance Data）和对齐填充（Padding）。</p><ul><li><p>对象头部分包括两类信息。</p><ol><li><p>第一类是用于存储对象自身的运行时数据，如哈希码（HashCode）、GC分代年龄、锁状态标志、线程持有的锁、偏向线程ID、偏向时间戳等。官方称它为“Mark Word”。</p><table><thead><tr><th style="text-align:center;">存储内容</th><th style="text-align:center;">标志位</th><th style="text-align:center;">状态位</th></tr></thead><tbody><tr><td style="text-align:center;">对象哈希码、对象分代对象</td><td style="text-align:center;">01</td><td style="text-align:center;">未锁定</td></tr><tr><td style="text-align:center;">偏向线程ID、偏向时间戳、对象分代年龄</td><td style="text-align:center;">01</td><td style="text-align:center;">可偏向</td></tr><tr><td style="text-align:center;">指向锁记录的指针</td><td style="text-align:center;">00</td><td style="text-align:center;">轻量级锁定</td></tr><tr><td style="text-align:center;">指向重量级锁的指针</td><td style="text-align:center;">10</td><td style="text-align:center;">膨胀（重量级锁定）</td></tr><tr><td style="text-align:center;">空，不需要记录信息</td><td style="text-align:center;">11</td><td style="text-align:center;">GC标记</td></tr></tbody></table><table><thead><tr><th style="text-align:right;">Mark Word (64 bits)</th><th style="text-align:center;">State</th></tr></thead><tbody><tr><td style="text-align:right;">unused:25 | hashcode:31 | unused:1 | age:4 | biased_lock:0 | 01</td><td style="text-align:center;">Normal</td></tr><tr><td style="text-align:right;">thread:54 | epoch:2 | unused:1 | age:4 | biased_lock:1 | 01</td><td style="text-align:center;">Biased</td></tr><tr><td style="text-align:right;">ptr_to_lock_record:62 | 00</td><td style="text-align:center;">Lightweight Locked</td></tr><tr><td style="text-align:right;">ptr_to_heavyweight_monitor:62 | 10</td><td style="text-align:center;">Heavyweight Locked</td></tr><tr><td style="text-align:right;">| 11</td><td style="text-align:center;">Marked for GC</td></tr></tbody></table><blockquote><p>Mark Word被设计成一个有着动态定义的数据结构，以便在极小的空间内存储尽量多的数据，根据对象的状态复用自己的存储空间。</p></blockquote></li><li><p>另外一部分是类型指针，即对象指向它的类型元数据的指针，Java虚拟机通过这个指针来确定该对象是哪个类的实例。</p></li></ol></li><li><p>实例数据部分</p><p>是对象真正存储的有效信息，即我们在程序代码里面所定义的各种类型的字段内容，无论是从父类继承下来的，还是在子类中定义的字段都必须记录起来。</p></li><li><p>对齐填充</p><p>它仅仅起着占位符的作用，任何对象的大小都必须是8字节的整数倍。</p></li></ul><h3 id="对象的访问定位" tabindex="-1"><a class="header-anchor" href="#对象的访问定位"><span>对象的访问定位</span></a></h3><p>Java程序会通过栈上的reference数据来操作堆上的具体对象。</p><p>对象访问方式也是由虚拟机实现而定的，主流的访问方式主要有使用句柄和直接指针两种：</p><ul><li><p>句柄访问</p><p>Java堆中将可能会划分出一块内存来作为句柄池，reference中存储的就是对象的句柄地址，而句柄中包含了对象实例数据与类型数据各自具体的地址信息</p><figure><img src="https://docs-r2.hanhan12.cc/Java/JVM/UTJVM/jvm2-2.jpg" alt="通过句柄访问对象" tabindex="0" loading="lazy"><figcaption>通过句柄访问对象</figcaption></figure></li><li><p>直接指针访问</p><p>Java堆中对象的内存布局就必须考虑如何放置访问类型数据的相关信息，reference中存储的直接就是对象地址，如果只是访问对象本身的话，就不需要多一次间接访问的开销</p><figure><img src="https://docs-r2.hanhan12.cc/Java/JVM/UTJVM/jvm2-3.jpg" alt="通过直接指针访问对象" tabindex="0" loading="lazy"><figcaption>通过直接指针访问对象</figcaption></figure></li></ul><p>使用句柄来访问的最大好处就是reference中存储的是稳定句柄地址，在对象被移动（垃圾收集时移动对象是非常普遍的行为）时只会改变句柄中的实例数据指针。直接指针来访问最大的好处就是速度更快，它节省了一次指针定位的时间开销。</p>',44)]))}const s=e(n,[["render",i],["__file","2.Java内存区域与内存溢出异常.html.vue"]]),c=JSON.parse('{"path":"/books/UnderStandingTheJvm/2.Java%E5%86%85%E5%AD%98%E5%8C%BA%E5%9F%9F%E4%B8%8E%E5%86%85%E5%AD%98%E6%BA%A2%E5%87%BA%E5%BC%82%E5%B8%B8.html","title":"2.Java内存区域与内存溢出异常","lang":"zh-CN","frontmatter":{"description":"2.Java内存区域与内存溢出异常 运行时数据区域 Java虚拟机运行时数据区Java虚拟机运行时数据区 程序计数器 线程私有 如果线程正在执行的是一个Java方法，这个计数器记录的是正在执行的虚拟机字节码指令的地址； 如果正在执行的是本地（Native）方法，这个计数器值则应为空（Undefined）。 此内存区域是唯一一个在《Java虚拟机规范》中...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/books/UnderStandingTheJvm/2.Java%E5%86%85%E5%AD%98%E5%8C%BA%E5%9F%9F%E4%B8%8E%E5%86%85%E5%AD%98%E6%BA%A2%E5%87%BA%E5%BC%82%E5%B8%B8.html"}],["meta",{"property":"og:site_name","content":"一切为了更好的自己"}],["meta",{"property":"og:title","content":"2.Java内存区域与内存溢出异常"}],["meta",{"property":"og:description","content":"2.Java内存区域与内存溢出异常 运行时数据区域 Java虚拟机运行时数据区Java虚拟机运行时数据区 程序计数器 线程私有 如果线程正在执行的是一个Java方法，这个计数器记录的是正在执行的虚拟机字节码指令的地址； 如果正在执行的是本地（Native）方法，这个计数器值则应为空（Undefined）。 此内存区域是唯一一个在《Java虚拟机规范》中..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://docs-r2.hanhan12.cc/Java/JVM/UTJVM/jvm2-1.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-02T05:37:18.000Z"}],["meta",{"property":"article:author","content":"憨憨十二"}],["meta",{"property":"article:modified_time","content":"2024-09-02T05:37:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2.Java内存区域与内存溢出异常\\",\\"image\\":[\\"https://docs-r2.hanhan12.cc/Java/JVM/UTJVM/jvm2-1.jpg\\",\\"https://docs-r2.hanhan12.cc/Java/JVM/UTJVM/jvm2-2.jpg\\",\\"https://docs-r2.hanhan12.cc/Java/JVM/UTJVM/jvm2-3.jpg\\"],\\"dateModified\\":\\"2024-09-02T05:37:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"憨憨十二\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"运行时数据区域","slug":"运行时数据区域","link":"#运行时数据区域","children":[{"level":3,"title":"程序计数器","slug":"程序计数器","link":"#程序计数器","children":[]},{"level":3,"title":"Java虚拟机栈","slug":"java虚拟机栈","link":"#java虚拟机栈","children":[]},{"level":3,"title":"本地方法栈","slug":"本地方法栈","link":"#本地方法栈","children":[]},{"level":3,"title":"Java堆","slug":"java堆","link":"#java堆","children":[]},{"level":3,"title":"方法区","slug":"方法区","link":"#方法区","children":[{"level":4,"title":"运行时常量池","slug":"运行时常量池","link":"#运行时常量池","children":[]}]},{"level":3,"title":"直接内存","slug":"直接内存","link":"#直接内存","children":[]}]},{"level":2,"title":"HotSpot虚拟机对象探秘","slug":"hotspot虚拟机对象探秘","link":"#hotspot虚拟机对象探秘","children":[{"level":3,"title":"对象的创建","slug":"对象的创建","link":"#对象的创建","children":[]},{"level":3,"title":"对象的内存布局","slug":"对象的内存布局","link":"#对象的内存布局","children":[]},{"level":3,"title":"对象的访问定位","slug":"对象的访问定位","link":"#对象的访问定位","children":[]}]}],"git":{"createdTime":1691573366000,"updatedTime":1725255438000,"contributors":[{"name":"consen3464","email":"wangkai@consen.net","commits":2}]},"readingTime":{"minutes":8.8,"words":2639},"filePathRelative":"books/UnderStandingTheJvm/2.Java内存区域与内存溢出异常.md","localizedDate":"2023年8月9日","autoDesc":true}');export{s as comp,c as data};
