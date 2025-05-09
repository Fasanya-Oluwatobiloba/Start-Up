const questions = [
  //100Level
  {
    level: "100 Level",
    courses: [
      {
        code: "MTS101",
        questions: [
          {
            question:
              "__________ is used to prove the validity of proposition of the set of non-negative integers.",
            options: [
              "Real number system",
              "Real line",
              "Associativity",
              "The principle of mathematical induction",
            ],
            answer: "The principle of mathematical induction",
          },
          {
            question:
              "Which of the following statements is false for all positive integers using the principle of mathematical induction?",
            options: [
              "2n > n",
              "52n + 3n + 1 is a multiple of 9",
              "5n − 1 is a multiple of 4",
              "72n+1 + 1 is a multiple of 3",
            ],
            answer: "72n+1 + 1 is a multiple of 3",
          },
          {
            question:
              "If α and β are the roots of the equation and their sum is 5, find the value of k.",
            options: ["8", "-8", "9", "-9"],
            answer: "8",
          },
          {
            question:
              "If α and β are the roots of the equation and their sum is 5, find the value of k.",
            options: ["-9", "9", "8", "-8"],
            answer: "9",
          },
          {
            question:
              "If α and β are the roots of the equation and their sum is 5, find the value of k.",
            options: ["-8", "9", "18", "-18"],
            answer: "-18",
          },
          {
            question:
              "If α and β are the roots of the equation and their sum is 5, find the values of the roots.",
            options: ["1, -3, 6", "-1, 3, 6", "-1, -3, 6", "-1, 3, -6"],
            answer: "-1, 3, 6",
          },
          {
            question:
              "Find the sum of the roots of the equation x² + 7x + 12 = 0.",
            options: ["-7", "-3.5", "2", "3.5"],
            answer: "3.5",
          },
          {
            question:
              "How many terms of the series must be taken for the sum to exceed 30?",
            options: ["4", "3", "6", "5"],
            answer: "6",
          },
          {
            question:
              "Insert three arithmetic means between 3 and 19. What is the sum of the linear function?",
            options: ["4", "15", "19", "55"],
            answer: "55",
          },
          {
            question:
              "How many terms are there in a sequence of arithmetic progression whose sum of the first and last term are 4 and 26 respectively, and the total sum is 180?",
            options: ["12", "10", "4", "30"],
            answer: "12",
          },
          {
            question:
              "A father places a sum of money in a savings account for his daughter when she was born. On each succeeding birthday, he deposits two more than the previous birthday without interest. The total of the first thirteen deposits is __. How large were the last three deposits?",
            options: ["₦2591", "₦1259", "₦9521", "₦5912"],
            answer: "₦9521",
          },
          {
            question: "Given a sequence, find the sum of the first ten terms.",
            options: ["513", "153", "155", "551"],
            answer: "155",
          },
          {
            question:
              "The sixth and thirteenth terms of an arithmetic progression are __ and __ respectively. Find the sum of the first twenty terms.",
            options: ["0", "14", "-20", "-10"],
            answer: "-20",
          },
          {
            question:
              "What is the first term and common difference of the arithmetic sequence whose third and seventh terms are __ and __?",
            options: ["39, 20", "20, 39", "39, -20", "-20, -39"],
            answer: "39, -20",
          },
          {
            question: "Evaluate sin²θ / (cos²θ − 1).",
            options: ["−1", "1", "2", "−2"],
            answer: "−1",
          },
          {
            question: "Simplify sin²x / tanx.",
            options: ["sin x", "cosx", "sin xcosx", "sin² x cos² x"],
            answer: "sin xcosx",
          },
          {
            question: "If tan(½x) = b, express tanx in terms of b.",
            options: ["2b", "1 − b²", "(1 − b²) / 2b", "2b / (1 − b²)"],
            answer: "2b / (1 − b²)",
          },
          {
            question: "If tan(½x) = f, what is sinx in terms of f?",
            options: [
              "2f / (1 + f²)",
              "2f / (1 + f)",
              "2f² / (1 + f)",
              "2f² / (1 + f²)",
            ],
            answer: "2f / (1 + f²)",
          },
          {
            question: "If tan(½x) = k, what is cosx in terms of k?",
            options: [
              "2k² / (1 + k²)",
              "(1 − 2k²) / (1 + k²)",
              "(1 − k²) / (1 + k²)",
              "(1 + k²) / (1 − k²)",
            ],
            answer: "(1 + k²) / (1 − k²)",
          },
          {
            question: "What is the result of 1 + tan²θ?",
            options: ["sin²θ", "sec²θ", "cos²θ", "tan²θ"],
            answer: "sec²θ",
          },
          {
            question: "Evaluate 1 + cot²θ.",
            options: ["sin²θ", "cosec²θ", "cos²θ", "tan²θ"],
            answer: "cosec²θ",
          },
          {
            question: "Simplify sin²p + (1 + cos²p)².",
            options: ["2(1 + cosp)", "2 cosp", "1 + cosp", "cosp − 1"],
            answer: "2(1 + cosp)",
          },
          {
            question:
              "Evaluate (1 + sin∅)/(1 + cos∅) × (1 + sec∅)/(1 + cosec∅).",
            options: ["sin ∅", "cos∅", "tan ∅", "cot∅"],
            answer: "tan ∅",
          },
          {
            question: "Expand tan(45° + A).",
            options: [
              "(1 + tanA) / (1 + tanA)",
              "(1 − tanA) / (1 − tanA)",
              "(1 + tanA) / tanA",
              "(1 + tanA) / (1 − tanA)",
            ],
            answer: "(1 + tanA) / (1 − tanA)",
          },
          {
            question: "Evaluate tan(90° + A).",
            options: ["0", "∞", "−1", "1"],
            answer: "∞",
          },
          {
            question: "Evaluate sin(75°).",
            options: [
              "(√2 + √6)/4",
              "(√2 − √6)/4",
              "(√6 − √2)/4",
              "(√2 + √3)/4",
            ],
            answer: "(√2 + √6)/4",
          },
          {
            question: "Evaluate cos(75°).",
            options: [
              "(√6 + √2)/4",
              "(√2 + √3)/4",
              "(√6 − √2)/4",
              "(√2 − √6)/4",
            ],
            answer: "(√6 − √2)/4",
          },
          {
            question: "Find cos(105°).",
            options: [
              "(√2 + √6)/4",
              "(√2 − √6)/4",
              "(√2 − √6)/5",
              "(√2 − √3)/4",
            ],
            answer: "(√2 − √6)/4",
          },
          {
            question: "Which of these evaluates to 1?",
            options: [
              "sec²x − tan²x",
              "sec²x + tan²x",
              "tan²x − sec²x",
              "tanx − sec²x",
            ],
            answer: "sec²x − tan²x",
          },
          {
            question: "Which of these evaluates to 1?",
            options: [
              "coty − cosecy",
              "cot²y − cosec²y",
              "cosecy − coty",
              "cosec²y − cot²y",
            ],
            answer: "cosec²y − cot²y",
          },
          {
            question: "Evaluate sec²p − 1.",
            options: ["tanp", "tanpsecp", "tan²p", "tan³p"],
            answer: "tan²p",
          },
          {
            question: "Evaluate tan²q − sec²q.",
            options: ["1", "−1", "2", "−2"],
            answer: "−1",
          },
          {
            question: "What is the result of sec²x − tan²x?",
            options: ["1", "−1", "2", "−2"],
            answer: "1",
          },
          {
            question: "Which of these evaluates to −1?",
            options: [
              "cot²r + cosec²r",
              "cotr",
              "cot²r − cosec²r",
              "cotr − cosecr",
            ],
            answer: "cot²r − cosec²r",
          },
          {
            question: "Which of these is equivalent to sin(2w)?",
            options: ["2sinwcosw", "2sin²w", "2cos²w", "sinwcosw"],
            answer: "2sinwcosw",
          },
          {
            question: "Which of these is equivalent to cos(2z)?",
            options: ["1 − cos²z", "1 + cosz", "2cos²z − 1", "1 + 2cos²z"],
            answer: "2cos²z − 1",
          },
          {
            question: "Which of these is equivalent to tan(2t)?",
            options: [
              "(1 − tan²t)/t",
              "(2tan t)/(1 − tan²t)",
              "(1 − tan²t)/(2tan t)",
              "(tan t + 1)/(2tan t)",
            ],
            answer: "(1 − tan²t)/(2tan t)",
          },
          {
            question: "Expand sin(v).",
            options: [
              "sin(½v)cos(½v)",
              "sin²(½v)",
              "cos²(½v)",
              "2sin(½v)cos(½v)",
            ],
            answer: "2sin(½v)cos(½v)",
          },
          {
            question: "Expand cos(a).",
            options: [
              "cos²a / 2 + 1",
              "2cos²a / 2",
              "2cos²a / 2",
              "(2 − cos²a) / 2",
            ],
            answer: "(2 − cos²a) / 2",
          },
          {
            question: "What is the equivalence of sin(p + q)?",
            options: [
              "sinp·sinq + cosp·cosq",
              "sinp·sinq − cosp·cosq",
              "sinp·cosq − cosp·sinq",
              "sinp·cosq + cosp·sinq",
            ],
            answer: "sinp·cosq + cosp·sinq",
          },
          {
            question: "What is the equivalence of sin(p − q)?",
            options: [
              "sinp·sinq + cosp·cosq",
              "sinp·sinq − cosp·cosq",
              "sinp·cosq − cosp·sinq",
              "sinp·cosq + cosp·sinq",
            ],
            answer: "sinp·cosq − cosp·sinq",
          },
          {
            question: "Expand cos(x + y).",
            options: [
              "cosx·cosy − sinx·siny",
              "cosx·cosy + sinx·siny",
              "sinx·siny − cosx·cosy",
              "sinx·siny + cosx·cosy",
            ],
            answer: "cosx·cosy − sinx·siny",
          },
          {
            question: "Expand cos(x − y).",
            options: [
              "cosx·cosy − sinx·siny",
              "cosx·cosy + sinx·siny",
              "sinx·siny − cosx·cosy",
              "sinx·siny + cosx·cosy",
            ],
            answer: "cosx·cosy + sinx·siny",
          },
          {
            question: "Express sin(60°) in surd form.",
            options: ["1/2", "√3/2", "1/√2", "0"],
            answer: "√3/2",
          },
          {
            question:
              "The first term of an arithmetic series is __, the common difference is __, and the sum of all terms is __. Find the number of terms and the last term.",
            options: ["79, 20", "20, 79", "-20.5, 80", "80, -20.5"],
            answer: "20, 79",
          },
          {
            question:
              "What is the second term of the series, if the three numbers in a geometric sequence sum to 13 and their product is 64?",
            options: ["4", "3", "5", "6"],
            answer: "4",
          },
          {
            question:
              "The first and last terms of a geometric series are 3 and 768 respectively. If the sum of the terms is 1533, find the common ratio.",
            options: ["3", "1/2", "2", "-1/2"],
            answer: "1/2",
          },
          {
            question:
              "Find in terms of k, the remainder when (2k² - k + 1) is divisible by (k - 2).",
            options: [
              "-2k+2",
              "(not provided)",
              "(not provided)",
              "(not provided)",
            ],
            answer: "(not provided)",
          },
          {
            question:
              "Find the quotient if (x² + 2x - 15) is divided by (x + 5).",
            options: [
              "(not provided)",
              "(not provided)",
              "(not provided)",
              "(not provided)",
            ],
            answer: "(not provided)",
          },
          {
            question:
              "If (x - 3) and (x + 2) are factors of x³ - x² - 6x, where a and b are constants, find a and b.",
            options: ["0, 6", "2, 3", "3, 2", "1, 6"],
            answer: "0, 6",
          },
          {
            question:
              "Which of the following mathematical statements is correct for all positive integers M?",
            options: [
              "f(1) = 8",
              "f(M) = 4(5M + 1)",
              "f(k + 1) = 4(5M + 1)",
              "f(k) = 4(5M + 1)",
            ],
            answer: "f(k + 1) = 4(5M + 1)",
          },
          {
            question:
              "Which of the following is not one of the properties of real numbers?",
            options: [
              "Existence of the multiplicative inverse",
              "Closure",
              "It satisfies the principle of mathematical induction",
              "Existence of the zero of the set",
            ],
            answer: "It satisfies the principle of mathematical induction",
          },
          {
            question:
              "Let a, b, c and d be real numbers. Which of the following statements is false?",
            options: [
              "If a > b, then a + c < b + c",
              "If a > b and c > 0, then ac > bc",
              "If a > b and c < 0, then ac < bc",
              "If a > b and c > d, then a + c > b + d",
            ],
            answer: "If a > b, then a + c < b + c",
          },
          {
            question:
              "For what values of x can the identity ∑xi = (1−xⁿ⁺¹)/(1−x) be proven using induction?",
            options: [
              "For all real numbers x",
              "For all real numbers x satisfying x ≠ 1",
              "For all real numbers x satisfying x = 1",
              "For all positive integers n",
            ],
            answer: "For all real numbers x satisfying x ≠ 1",
          },
          {
            question:
              "What are the possible values of n such that f(n) = n⁴ + 4n² + 11 is divisible by 16 for all odd positive integers?",
            options: [
              "1, 2, 3, …, k, k+1 where k is a positive integer",
              "1, 2, 3, …, k, k+1, …, ∞ where k is a positive integer",
              "1, 3, …, 2k-1, 2k+1, … where k is a positive integer",
              "None of the above",
            ],
            answer: "1, 3, …, 2k-1, 2k+1, … where k is a positive integer",
          },
          {
            question:
              "In proving f(n) = 72ⁿ⁺¹ + 1 is a multiple of 8, which of the following is correct?",
            options: [
              "f(k + 1) = 344",
              "f(k + 1) = 8(49M − 6) where M is a positive integer",
              "f(k + 1) = 8M − 1 where M is a positive integer",
              "f(k + 1) = 8(49M + 6) where M is a positive integer",
            ],
            answer: "f(k + 1) = 8(49M − 6) where M is a positive integer",
          },
          {
            question:
              "Which law of algebra of natural numbers is incorrect for all x, y, z ∈ N?",
            options: [
              "Closure: (i) x + y ∈ N, (ii) x·y ∈ N",
              "Commutative: (i) x + y = y + x, (ii) x·y = y·x",
              "Associative: (i) x + (y + z) = (x + y) + z, (ii) x·(y + z) = (x·y)·z",
              "Distributive: (i) x·(y + z) = x·y + x·z, (ii) (y + z)·x = y·x + z·x",
            ],
            answer: "Associative: (ii) x·(y + z) = (x·y)·z",
          },
          {
            question:
              "Given 52n + 3n − 1 is an integer multiple of 9, which expression supports induction?",
            options: [
              "f(k + 1) = 9(25M + 8k + 3) where M is a positive integer",
              "f(k + 1) = 9(25M − 8k + 3) where M is a positive integer",
              "f(k + 1) = 52(k+1) + 3k + 2 where M is a positive integer",
              "f(k) = 52(k+1) + 3k + 2 where M is a positive integer",
            ],
            answer: "f(k + 1) = 9(25M − 8k + 3) where M is a positive integer",
          },
          {
            question:
              "Which of the following is the sequential arrangement of the application of the principle of mathematical induction?",
            options: [
              "ii, i and iii",
              "i, ii and iii",
              "i, iii and ii",
              "iii, ii and i",
            ],
            answer: "i, iii and ii",
          },
          {
            question:
              "Given that 1/1·2 + 1/2·3 + 1/3·4 + ⋯ + 1/n(n+1) = n/(n+1), what is f(k + 1) by induction?",
            options: [
              "(k+3)/((k+1)(k+2))",
              "(k+3)/((k+1)(k+3))",
              "1/((k+1)(k+2))",
              "k/(k+1)",
            ],
            answer: "(k+3)/((k+1)(k+2))",
          },
          {
            question:
              "Given that 1/1·3 + 1/3·5 + 1/5·7 + ⋯ + 1/(2n−1)(2n+1) = n/(2n+1), what is f(k + 1)?",
            options: [
              "(k+1)/(2k+3)",
              "k/(2k+3)",
              "k/(2k+1)",
              "1/((2k+1)(2k+3))",
            ],
            answer: "(k+1)/(2k+3)",
          },
          {
            question:
              "Given that 1/x + 1/x² + 1/x³ + ⋯ + 1/xⁿ = 1/(x−1) − 1/(xⁿ(x−1)), what is f(k + 1)?",
            options: [
              "1/(x−1) − 1/(xk+1(x−1))",
              "1/(x−1) − 1/(xk(x−1))",
              "xk−1/(xk+1(x−1))",
              "(xk+1 − 1)/(xk+1(x−1))",
            ],
            answer: "(xk+1 − 1)/(xk+1(x−1))",
          },
          {
            question:
              "Which of the following is not an element of the power set of A = {a, b, c, d}?",
            options: ["{a,b}", "{Ø}", "A", "{a,b,c}"],
            answer: "{Ø}",
          },
          {
            question: "How many subsets will a set containing 5 elements have?",
            options: ["32", "25", "36", "64"],
            answer: "32",
          },
          {
            question:
              "If µ = {e,f,g,h,p,q,r,s}, M = {e,h,q,s} and N = {h,p,r}, find Mᶜ ∪ Nᶜ.",
            options: [
              "{f,p,r}",
              "{e,f,q,s}",
              "{e,f,g,p,q,r,s}",
              "{e,g,p,q,r,s}",
            ],
            answer: "{e,f,g,p,q,r,s}",
          },
          {
            question:
              "Given: µ = {x: 1 < x < 15}, P = {x is odd}, Q = {x is prime}. Find the cardinal number of Pᶜ ∩ Qᶜ.",
            options: ["3", "4", "5", "6"],
            answer: "6",
          },
          {
            question: "Express sin 450° in surd form.",
            options: ["1/2", "√3/2", "1/√2", "0"],
            answer: "1/√2",
          },
          {
            question: "Which of these is equal to sinϑ?",
            options: ["1 − cosϑ", "cos (90° − ϑ)", "sin (90° − ϑ)", "cosϑ − 1"],
            answer: "cos (90° − ϑ)",
          },
          {
            question: "Which of these is equivalent to cos 130°?",
            options: ["sin 77°", "cos 77°", "sin 87°", "cos 87°"],
            answer: "sin 77°",
          },
          {
            question: "Which of these is equivalent to cos β?",
            options: [
              "cos (90° − β)",
              "sin (90° − β)",
              "sec (90° − β)",
              "cosec (90° − β)",
            ],
            answer: "sin (90° − β)",
          },
          {
            question: "sin 81° is the same as …….",
            options: ["cos 90°", "sin 90°", "tan 90°", "sec 90°"],
            answer: "cos 90°",
          },
          {
            question: "What is the equivalence of tan (A + B)?",
            options: [
              "cos (A + B)",
              "sin (A + B) / 1",
              "(tan A + tan B) / (1 − tan A tan B)",
              "(tan A − tan B) / (1 + tan A tan B)",
            ],
            answer: "(tan A − tan B) / (1 + tan A tan B)",
          },
          {
            question: "Which of the following is the same as tan (A − B)?",
            options: [
              "cos (A + B)",
              "sin (A + B) / 1",
              "(tan A + tan B) / (1 − tan A tan B)",
              "(tan A − tan B) / (1 + tan A tan B)",
            ],
            answer: "(tan A − tan B) / (1 + tan A tan B)",
          },
          {
            question: "What is the equivalence of tan 90°?",
            options: ["0", "1", "−1", "∞"],
            answer: "∞",
          },
          {
            question: "If cos δ = a/b, find 1 + tan²δ.",
            options: ["b/a", "b²/a", "a²/b", "b²/a²"],
            answer: "b²/a²",
          },
          {
            question: "If cos δ = a/b, find 1 − tan²δ.",
            options: ["b/a", "(2b² − a²)/a", "(2a² − b²)/a²", "(a² − b²)/b"],
            answer: "(2a² − b²)/a²",
          },
          {
            question: "If cos δ = a/b, find tan²δ − 1.",
            options: ["b/a", "b²/a²", "b²/a", "a²/b"],
            answer: "b²/a²",
          },
          {
            question: "If cos δ = a/b, find cosec²δ − 1.",
            options: [
              "a²/(b² − a²)",
              "b²/(b² − a²)",
              "b²/(a − b²)",
              "(a² − b)/b",
            ],
            answer: "a²/(b² − a²)",
          },
          {
            question: "If cos δ = a/b, find cosec²δ + 1.",
            options: [
              "(2b² − a²)/(b² − a²)",
              "b²/(b² − a²)",
              "b²/(a − b²)",
              "(a² − b)/b",
            ],
            answer: "(2b² − a²)/(b² − a²)",
          },
          {
            question: "If cos δ = a/b, find cot²δ + cos²δ.",
            options: [
              "(2b² − a²)/(b² − a²)",
              "a⁴/[b²(b² − a²)]",
              "b⁴/(a − b²)",
              "(a² − b)/b",
            ],
            answer: "a⁴/[b²(b² − a²)]",
          },
          {
            question: "Given that tan q = 7/2, evaluate sin 2q.",
            options: ["28/35", "35/28", "28/53", "53/28"],
            answer: "28/53",
          },
          {
            question: "Given that tan q = 7/2, evaluate cos 2q.",
            options: ["−53/45", "53/45", "45/53", "−45/53"],
            answer: "−45/53",
          },
          {
            question: "Given that tan q = 7/2, evaluate tan 2q.",
            options: ["−45/28", "54/29", "29/54", "−28/45"],
            answer: "−28/45",
          },
          {
            question: "Given that tan q = 7/2, evaluate sin 2q − cos 2q.",
            options: ["−53/73", "54/29", "73/53", "−28/45"],
            answer: "73/53",
          },
          {
            question: "If sin γ = a/(1 − b), find cot γ.",
            options: [
              "a / [(1 − a − b)(1 + a − b)]",
              "(1 − a − b)(1 + a − b)",
              "a/b(1 − a + b)(1 + a − b)",
              "(1 − a + b)(1 + a − b)/b",
            ],
            answer: "a/b(1 − a + b)(1 + a − b)",
          },
          {
            question: "If sin γ = a/(1 − b), find cos γ.",
            options: [
              "(1 − a − b)(1 + a − b)/(1 − b)",
              "(1 + a − b)(1 + a − b)/(1 − b)",
              "(1 − a − b)(1 + a + b)/(1 − b)",
              "(1 − a + b)(1 + a − b)/(1 − b)",
            ],
            answer: "(1 + a − b)(1 + a − b)/(1 − b)",
          },
          {
            question:
              "If P = {1,2,3,4,5,6,7,8}, Q = {1,4,9}, R = {2,4,8}, find (P∩Q) ∪ R.",
            options: [
              "{1,2,4,8}",
              "{1,2,4,8,9}",
              "{1,2,4,7,8}",
              "{1,2,3,4,5,6,7,8}",
            ],
            answer: "{1,2,4,8,9}",
          },
          {
            question:
              "In a class of 40 students, 24 play football, 18 play volleyball, and 6 play neither. How many play both?",
            options: ["2", "7", "8", "9"],
            answer: "8",
          },
          {
            question:
              "Four members of a cricket team are also in the rugby team. How many play only one of the two?",
            options: ["25", "21", "17", "29"],
            answer: "17",
          },
          {
            question: "If S = {x: x² = 9, x < 2}, then S is equal to?",
            options: ["{-3}", "{3}", "Ø", "{-3,3}"],
            answer: "{-3}",
          },
          {
            question: "Express 𝑛 in factorial form.",
            options: ["𝑛!", "(𝑛−1)!", "𝑛! / (𝑛−1)!", "𝑛! / (𝑛−1)"],
            answer: "𝑛! / (𝑛−1)",
          },
          {
            question:
              "Find the binomial expansion of (1 + (3/4)x)^4 in descending powers of x.",
            options: [
              "81/256 x⁴ + 27/16 x³ + 27/8 x² + 3x + 1",
              "1 + 3x + 27/8 x² + 27/16 x³ + 81/256 x⁴",
              "81/256 x⁴ − 27/16 x³ + 27/8 x² − 3x + 1",
              "81/256 x⁴ − 27/16 x³ − 27/8 x² + 3x − 1",
            ],
            answer: "81/256 x⁴ + 27/16 x³ + 27/8 x² + 3x + 1",
          },
          {
            question:
              "Find the coefficient of x⁴ in the expansion of (1 + (3/4)x)^4.",
            options: ["8/25", "81/25", "81/256", "81/26"],
            answer: "81/256",
          },
          {
            question:
              "Find the coefficient of x in the expansion of (1 + (3/4)x)^4.",
            options: ["1", "2", "3", "31"],
            answer: "3",
          },
          {
            question: "Expand (𝑥 + 2𝑦)^7 in ascending powers of 𝑥.",
            options: [
              "x⁷ + 14x⁶y + 84x⁵y² + 280x⁴y³ + 560x³y⁴ + 672x²y⁵ + 448xy⁶ + 128y⁷",
              "128y⁷ + 448xy⁶ + 672x²y⁵ + 560x³y⁴ + 280x⁴y³ + 84x⁵y² + 14x⁶y + x⁷",
              "x⁷ + 4x⁶y + 84x⁵y² + 28x⁴y³ + 56x³y⁴ + 672x²y⁵ + 448xy⁶ + 128y⁷",
              "128y⁷ + 448xy⁶ + 62x²y⁵ + 560x³y⁴ + 280x⁴y³ + 8x⁵y² + 14x⁶y + x⁷",
            ],
            answer:
              "128y⁷ + 448xy⁶ + 672x²y⁵ + 560x³y⁴ + 280x⁴y³ + 84x⁵y² + 14x⁶y + x⁷",
          },
          {
            question:
              "Find the term independent of y in the expansion of ((x⁴ / y³) + (y² / 2x))^10.",
            options: ["(105/32)x¹¹", "(15/32)x¹⁰", "(105/32)x¹⁰", "105x¹⁰"],
            answer: "(105/32)x¹⁰",
          },
          {
            question:
              "Find the maximum coefficient in the expansion of (3x + 5)^10.",
            options: ["26581250", "26578250", "26578125", "265781250"],
            answer: "265781250",
          },
          {
            question:
              "Obtain the first four terms of the expansion of (1 + 3x)^(1/3) in ascending powers of x.",
            options: [
              "1 + x − x² + (5/3)x³",
              "1 − x − x² + (5/3)x³",
              "1 − x + x² + (5/3)x³",
              "1 + x − x² − (3/5)x³",
            ],
            answer: "1 + x − x² + (5/3)x³",
          },
          {
            question:
              "Obtain the expansion of √(9 + x²) as far as the term in x⁴.",
            options: [
              "3 + (1/3)x² + x − (1/216)x⁴",
              "3 + (1/6)x² − (1/216)x⁴",
              "3 − (1/6)x² − (1/216)x⁴",
              "3 + (1/6)x² + (1/216)x⁴",
            ],
            answer: "3 + (1/6)x² − (1/216)x⁴",
          },
          {
            question:
              "Find the constant term in the expansion of (2z² + (1/z))⁹.",
            options: ["670", "671", "672", "673"],
            answer: "672",
          },
          {
            question: "Find the middle term in the expansion of (x² + y²)^8.",
            options: ["60xy", "70x⁸y⁸", "70x⁶y⁸", "70x⁸y⁶"],
            answer: "70x⁸y⁸",
          },
          {
            question:
              "Find the fifth term in the expansion of (−3x − 4y)^6 in descending order of x.",
            options: ["345x³y³", "34560x³y³", "34560x²y⁴", "3456x³y³"],
            answer: "34560x³y³",
          },
          {
            question:
              "For what value of x is the expansion of 1 / (a + bx) valid?",
            options: ["|x| < a/b", "|x| > a/b", "|x| < 1/b", "|x| < a/2"],
            answer: "|x| < a/2",
          },
          {
            question:
              "Find the sum of the constant coefficients in the expansion of (3 + 2x)^4.",
            options: ["620", "630", "625", "216"],
            answer: "625",
          },
          {
            question:
              "Find the first four terms in the expansion of (1 − 3x²)^5 in ascending powers of x.",
            options: [
              "1 − 15x² + 90x⁴ − 270x⁶",
              "1 + 15x² + 90x⁴ − 270x⁶",
              "1 − 15x² − 90x⁴ + 270x⁶",
              "1 + 15x² + 90x⁴ + 270x⁶",
            ],
            answer: "1 − 15x² + 90x⁴ − 270x⁶",
          },
          {
            question:
              "State the value of |x| for which the expression (27 − 6x)^(-2/3) can be expanded as a series of ascending powers of x.",
            options: ["|x| < 2/9", "|x| < 9/2", "|x| < 1/9", "|x| > 2/9"],
            answer: "|x| < 9/2",
          },
          {
            question:
              "State the condition under which the expansion of (x + 2y)^−5 will be valid in ascending powers of y.",
            options: ["|y/x| < 1/2", "|y/x| < 1", "|y/x| > 1/2", "|x/y| < 1/2"],
            answer: "|y/x| < 1/2",
          },
          {
            question: "Simplify (n choose r+1) / (n choose r).",
            options: ["(r+1)/(n−r)", "n−r", "r+1", "(n−r)/(r+1)"],
            answer: "(n−r)/(r+1)",
          },
          {
            question:
              "Find the term independent of y in the expansion of ((4/x⁵) − (2x/3y))^10.",
            options: [
              "1048576 / x⁵⁰",
              "1048576 / x²⁰",
              "1048576 / x³⁰",
              "1048576 / x³⁰",
            ],
            answer: "1048576 / x⁵⁰",
          },
          {
            question:
              "Find the fifth term in the expansion of (3x + 2y²)^12 in descending powers of x.",
            options: [
              "5196312x⁸y⁸",
              "51963120x⁶y⁹",
              "51963120x⁷y⁸",
              "51963120x⁸y⁸",
            ],
            answer: "51963120x⁸y⁸",
          },
          {
            question: "Find the value of 𝑛 when (𝑛 choose 2) = 120.",
            options: ["-15", "15", "-16", "16"],
            answer: "16",
          },
          {
            question: "Express (n + r / n − r) in factorial form.",
            options: [
              "(n + r)! / [(2r)! (n − r)!]",
              "(n + r)! / [(2r)! (n − r + 1)!]",
              "n! / (2! r!)",
              "(n − r)! / [(2r)! (n + r)!]",
            ],
            answer: "(n + r)! / [(2r)! (n − r)!]",
          },
          {
            question: "Find the value of n when (n − 2 choose 1) = 5.",
            options: ["5", "6", "7", "8"],
            answer: "7",
          },
          {
            question: "Express n(n−1)/2 in factorial form.",
            options: [
              "n(n−1)! / 2!",
              "n(n+1)! / 2!",
              "n! / 2!",
              "n! / [(n−2)! 2!]",
            ],
            answer: "n! / [(n−2)! 2!]",
          },
          {
            question:
              "Find the term independent of y in the expansion of ((1/2)x + 3y)^1000.",
            options: ["(x/2)^1000", "x^21000", "(x/2)^100", "x^2100"],
            answer: "(x/2)^1000",
          },
          {
            question:
              "In the expansion of ((1/2)x + 3y)^1000, find the coefficient of x in the term independent of y.",
            options: ["1/2^100", "1/2^1000", "x^2100", "x^21000"],
            answer: "1/2^1000",
          },
          {
            question:
              "In a school of 38 teachers, 15 are married women and 6 couples work there. How many teachers are single or have spouses outside?",
            options: ["17", "23", "20", "21"],
            answer: "20",
          },
          {
            question:
              "Which of the following is equivalent to [Pᶜ ∪ (Q ∩ Qᶜ)]?",
            options: ["P", "Pᶜ", "Q", "Qᶜ"],
            answer: "Pᶜ",
          },
          {
            question: "If A and B are partitions of E, what is A ∩ (E∩B)ᶜ?",
            options: ["A", "Ø", "B", "E"],
            answer: "A",
          },
          {
            question: "Which set is equivalent to (P ∪ Q) ∩ (P ∩ Qᶜ)?",
            options: ["P ∪ Q", "P ∪ Qᶜ", "P ∩ Qᶜ", "Ø"],
            answer: "P ∩ Qᶜ",
          },
          {
            question:
              "If U = {x: x³ − x² − x + 1 = 0}, P = {x ∈ ℤ}, Q = {x is odd}, find P ∩ Q.",
            options: ["{-1,1,1}", "{-1,1}", "{1,1,-1}", "{-1,-1}"],
            answer: "{-1,1}",
          },
          {
            question:
              "If E = {1,2,3,4} and A = {1,3,5}, the symmetric difference A Δ E is?",
            options: ["{1,2}", "{2,4,5}", "{1,2,3,4,5}", "{1,3}"],
            answer: "{2,4,5}",
          },
          {
            question:
              "If U = {x ∈ ℕ, 1≤ x≤ 9}, P = {x: 1 ≤ x < 4}, Q = {2,4,6,8}, find (P ∪ Q)ᶜ.",
            options: [
              "{1,2,3,4,5,6,7,8,9}",
              "{1,2,3,4,6,8}",
              "{1,5,6,7}",
              "{5,7,9}",
            ],
            answer: "{5,7,9}",
          },
          {
            question:
              "In a class of 41 students, all offer either Maths or Physics. If 22 offer Physics, 28 offer Maths, how many offer Physics only?",
            options: ["19", "9", "13", "14"],
            answer: "13",
          },
          {
            question:
              "If U = {0,2,3,6,7,8,9,10}, E = {0,6,8,10}, and F = {x | x⁴ = 14}, find (E ∪ F)ᶜ.",
            options: ["{3,7,9}", "{2,3,7,9}", "[3,7,9]", "Ø"],
            answer: "{3,7,9}",
          },
          {
            question:
              "If X = {prime factors of 44}, Y = {prime factors of 60}, what are X ∪ Y and X ∩ Y?",
            options: [
              "{2,4,3,5,11} and {4}",
              "{4,3,5,1} and {3,4}",
              "{2,5,11} and {2}",
              "{2,3,5,11} and {2}",
            ],
            answer: "{2,3,5,11} and {2}",
          },
          {
            question: "Simplify (A ∪ B)ᶜ ∩ (A ∩ Bᶜ)",
            options: ["Aᶜ ∪ B", "A ∪ Bᶜ", "(A ∪ B)ᶜ", "ϕ"],
            answer: "ϕ",
          },
          {
            question: "Simplify (A ∪ B)ᶜ ∩ Aᶜ",
            options: ["A ∪ B", "A ∩ Bᶜ", "Aᶜ ∩ B", "Aᶜ ∩ Bᶜ"],
            answer: "Aᶜ ∩ Bᶜ",
          },
          {
            question:
              "In a village, 56% speak Hausa, 63% speak English. What percentage speak both?",
            options: ["19%", "119%", "62%", "38%"],
            answer: "19%",
          },
          {
            question: "…………………. is a set that contains another set.",
            options: ["Power set", "Super set", "Subset", "Proper set"],
            answer: "Super set",
          },
          {
            question:
              "In a youth club of 94 members, 60 like modern music, 50 like traditional. How many like only one type if those liking both = 3× non-likers?",
            options: ["8", "24", "62", "86"],
            answer: "62",
          },
          {
            question: "A △ B is equivalent to …………………",
            options: [
              "(A−B) ∩ (B−A)",
              "(A−B) ∪ (B−A)",
              "(A ∩ B) ∪ (B ∩ A)",
              "(A ∪ B) ∩ (B ∪ A)",
            ],
            answer: "(A−B) ∪ (B−A)",
          },
          {
            question:
              "Given ξ = {e,f,g,h,p,q,r,s}, M = {e,h,q,s}, N = {h,p,r}, find Mᶜ ∪ Nᶜ.",
            options: [
              "{f,p,r}",
              "{e,f,q,s}",
              "{e,f,g,p,q,r,s}",
              "{e,g,p,q,r,s}",
            ],
            answer: "{e,f,g,p,q,r,s}",
          },
          {
            question: "How many subsets will a set with 6 elements have?",
            options: ["25", "32", "36", "64"],
            answer: "64",
          },
          {
            question:
              "What is the number of subsets of A = {x: x is an integer and 0 < x < 5}?",
            options: ["8", "16", "32", "64"],
            answer: "16",
          },
          {
            question: "Let A = {a,b,c}, B = {a,c,d}. What is A △ B?",
            options: ["{a,b,c,d}", "{b,d}", "{a,d}", "{a,b}"],
            answer: "{b,d}",
          },
          {
            question:
              "How many elements are in the power set of a set with 4 elements?",
            options: ["8", "12", "16", "20"],
            answer: "16",
          },
          {
            question:
              "Let U = {1,2,3,4,5,6}, A = {1,2,3}, B = {3,4,5}. Find (A ∪ B)ᶜ.",
            options: ["{6}", "{1,2,3}", "{1,2,3,4,5}", "{4,5,6}"],
            answer: "{6}",
          },
          {
            question:
              "Let A = {1,2,3}, B = {2,3,4}, C = {3,4,5}. What is (A ∩ B) ∪ C?",
            options: ["{2,3,4,5}", "{1,2,3,4,5}", "{3,4,5}", "{2,3}"],
            answer: "{2,3,4,5}",
          },
          {
            question: "If A ∩ B = A, then what is A ∪ B?",
            options: ["A", "B", "A ∪ B", "B ∪ A"],
            answer: "B",
          },
          {
            question:
              "What is the symmetric difference of A = {1,2,3} and B = {3,4,5}?",
            options: ["{1,2,4,5}", "{1,2,3,4,5}", "{3}", "{1,2}"],
            answer: "{1,2,4,5}",
          },
          {
            question:
              "If the universal set U = {1,2,3,4,5,6}, and A = {2,4,6}, what is Aᶜ?",
            options: ["{1,3,5}", "{1,2,3,4,5}", "{1,2,3}", "{3,4,5,6}"],
            answer: "{1,3,5}",
          },
          {
            question: "If A = {1,2,3,4} and B = {3,4,5,6}, then A ∩ B = ?",
            options: ["{3,4}", "{1,2}", "{5,6}", "{1,2,3,4,5,6}"],
            answer: "{3,4}",
          },
          {
            question:
              "Let A = {x: x is even and x ≤ 6}, B = {x: x is divisible by 3 and x ≤ 6}. What is A ∩ B?",
            options: ["{3,6}", "{2,4}", "{6}", "{2,4,6}"],
            answer: "{6}",
          },
        ],
      },
      {
        code: "PHY101",
        questions: [
          {
            question: "In a perfectly inelastic collision:",
            options: [
              "heat is gained",
              "energy is lost",
              "energy is gained",
              "power is lost",
            ],
            answer: "energy is lost",
          },
          {
            question:
              "In an inelastic collision, which of the following is not true?",
            options: [
              "kinetic energy is not conserved",
              "kinetic energy is conserved",
              "potential energy is conserved",
              "potential energy is not conserved",
            ],
            answer: "kinetic energy is conserved",
          },
          {
            question:
              "The collision between two or more objects during which no energy is lost is called:",
            options: [
              "conserved collision",
              "material collision",
              "inelastic collision",
              "elastic collision",
            ],
            answer: "elastic collision",
          },
          {
            question:
              "The sudden impact felt between two or more objects is called:",
            options: [
              "explosion",
              "conservation",
              "collision",
              "None of these",
            ],
            answer: "collision",
          },
          {
            question:
              "Linear momentum is always conserved when the rate of change of momentum is:",
            options: ["zero", "one", "linear", "circular"],
            answer: "zero",
          },
          {
            question: "Work is a product of:",
            options: [
              "force x distance",
              "force x time",
              "force x momentum",
              "force x velocity",
            ],
            answer: "force x distance",
          },
          {
            question: "The path followed by the projectile is known as:",
            options: ["curve", "range", "flight time", "trajectory"],
            answer: "trajectory",
          },
          {
            question:
              "The range of a projectile launched from the ground is the:",
            options: [
              "vertical distance",
              "perpendicular distance",
              "horizontal distance",
              "None of these",
            ],
            answer: "horizontal distance",
          },
          {
            question:
              "In projectile motion, at maximum height, the vertical component of velocity is:",
            options: ["greatest", "zero", "downwards", "upwards"],
            answer: "zero",
          },
          {
            question:
              "Projectile motion is an example of motion in how many dimensions?",
            options: ["one", "two", "three", "four"],
            answer: "two",
          },
          {
            question: "The transfer of heat through solids is known as:",
            options: ["conduction", "radiation", "convection", "thermodition"],
            answer: "conduction",
          },
          {
            question:
              "The constant-volume gas thermometer is normally referred to as the:",
            options: [
              "mercury thermometer",
              "liquid thermometer",
              "standard thermometer",
              "gas thermometer",
            ],
            answer: "standard thermometer",
          },
          {
            question: "Force is equal to the product of mass and:",
            options: ["acceleration", "velocity", "time", "distance"],
            answer: "acceleration",
          },
          {
            question: "Which of the following is the SI unit of momentum?",
            options: ["N/s", "kgm", "N", "kg/m"],
            answer: "kgm",
          },
          {
            question: "The product of force and time is equal to:",
            options: ["momentum", "watts", "acceleration", "impulse"],
            answer: "impulse",
          },
          {
            question:
              "A symmetrical body rotating about an axis with one point fixed at the centre of gravity is called:",
            options: ["Top", "gyroscope", "rotor", "None of these"],
            answer: "Top",
          },
          {
            question:
              "A body starts from rest and accelerates uniformly at a rate of 5 m/s². Calculate its velocity after 90 m:",
            options: ["18 m/s", "30 m/s", "25 m/s", "13 m/s"],
            answer: "30 m/s",
          },
          {
            question:
              "A ball is thrown vertically upwards from the ground with an initial velocity of 50 m/s. The total time spent by the ball in the air will be:",
            options: ["10 sec", "15 sec", "20 sec", "25 sec"],
            answer: "10 sec",
          },
          {
            question:
              "A man will exert the greatest pressure on a bench when he:",
            options: [
              "lies flat on his back",
              "lies flat on his belly",
              "stands on the toes of one foot",
              "stands on both feet",
            ],
            answer: "stands on the toes of one foot",
          },
          {
            question:
              "The slope of a straight-line displacement-time graph gives:",
            options: [
              "distance travelled",
              "uniform velocity",
              "acceleration",
              "uniform speed",
            ],
            answer: "uniform velocity",
          },
          {
            question:
              "The force that allows cars to move on the roads without skidding is:",
            options: ["engine", "centripetal", "centrifugal", "friction"],
            answer: "friction",
          },
          {
            question: "Acceleration due to gravity is:",
            options: ["minimal", "tighter", "greater", "lost"],
            answer: "greater",
          },
          {
            question:
              "The velocity needed by an object to be sent to space from the surface of the earth is called:",
            options: ["escape", "vertical", "initial", "final"],
            answer: "escape",
          },
          {
            question: "Acceleration due to gravity increases with:",
            options: ["magnitude", "altitude", "latitude", "longitude"],
            answer: "latitude",
          },
          {
            question:
              "Below the earth's surface, the acceleration due to gravity decreases linearly with:",
            options: ["density", "depth", "height", "None of these"],
            answer: "depth",
          },
          {
            question: "Which of the following is not a fundamental force?",
            options: ["gravitational", "electroweak", "strong", "minute"],
            answer: "minute",
          },
          {
            question:
              "The acceleration due to gravity varies from location to location because of the effect of earth’s:",
            options: ["rotation", "radius", "weight", "mass"],
            answer: "rotation",
          },
          {
            question: "The √2gr is known as the:",
            options: [
              "uniform velocity",
              "escape velocity",
              "fixed velocity",
              "constant velocity",
            ],
            answer: "escape velocity",
          },
          {
            question:
              "The height of the parking orbit above the surface of the Earth is given by:",
            options: ["h = R + r", "h = R - V", "h = R - r", "h = r - R"],
            answer: "h = R + r",
          },
          {
            question: "The internal energy (U) of a system depends on the:",
            options: [
              "power of the system",
              "state of the system",
              "energy equation",
              "internal resistance",
            ],
            answer: "state of the system",
          },
          {
            question: "The velocity of orbiting satellite is given by",
            options: ["√2gr", "√GM", "r/t", "√GM/r"],
            answer: "√GM/r",
          },
          {
            question:
              "The gravitational force on a satellite produces the centripetal acceleration that keeps the satellite in",
            options: ["orbit", "constant position", "radial path", "freefall"],
            answer: "orbit",
          },
          {
            question: "The path described by a satellite round the sun is a",
            options: [
              "conical section",
              "spherical",
              "full circle",
              "None of these",
            ],
            answer: "conical section",
          },
          {
            question:
              "When there is no reaction force to an object's weight, the object becomes",
            options: ["strong", "weightless", "gravitating", "freefall"],
            answer: "weightless",
          },
          {
            question:
              "The path of a satellite whose period of revolution is equal to the period of rotation of the earth about its axis is known as",
            options: [
              "rotating orbit",
              "stationary orbit",
              "parking orbit",
              "space orbit",
            ],
            answer: "stationary orbit",
          },
          {
            question:
              "The process in which energy is transferred by means of electromagnetic waves is known as",
            options: ["Conduction", "convection", "radiation", "resistation"],
            answer: "radiation",
          },
          {
            question: "1kg mass placed on the moon will weigh",
            options: ["9.8N", "9.7N", "1.67kg", "1.67N"],
            answer: "1.67N",
          },
          {
            question:
              "Which of the quantities vary from point to point on the surface of the earth?",
            options: ["mass", "moon", "weight", "gravitational constant"],
            answer: "weight",
          },
          {
            question: "Energy expended per time is called",
            options: ["power", "work", "joule", "kinetic"],
            answer: "power",
          },
          {
            question: "The quantity of matter contained in a body is called",
            options: ["weight", "mass", "matter", "gravity"],
            answer: "mass",
          },
          {
            question:
              "Newton's second law states that the rate of change of momentum is directly proportional to the",
            options: ["pressure", "force", "energy", "power"],
            answer: "force",
          },
          {
            question:
              "Stable equilibrium happens when the forces in the displaced position act such that they return the body to its",
            options: [
              "original position",
              "unstable position",
              "final position",
              "neutral position",
            ],
            answer: "original position",
          },
          {
            question:
              "In a circular motion, which of the following is constant?",
            options: ["velocity", "time", "mass", "acceleration"],
            answer: "mass",
          },
          {
            question: "When a body accelerates in motion, it means that its",
            options: [
              "path is linear",
              "velocity is uniform",
              "velocity changes continuously",
              "None of these",
            ],
            answer: "velocity changes continuously",
          },
          {
            question:
              "The velocity of a particle at some point of its path is called",
            options: [
              "uniform velocity",
              "instantaneous velocity",
              "regular velocity",
              "All of these",
            ],
            answer: "instantaneous velocity",
          },
          {
            question: "Velocity is defined as",
            options: [
              "distance/time",
              "speed/time",
              "displacement/time",
              "variation/time",
            ],
            answer: "displacement/time",
          },
          {
            question:
              "A car that takes 2 hrs to travel from Kaduna to Kagoro along a winding road over a distance of 200 km is said to have an average speed of",
            options: ["100km/hr", "10km/hr", "1000km/hr", "10,000km/hr"],
            answer: "100km/hr",
          },
          {
            question:
              "If you run on a winding path from point A to point B and travel a distance of 240m in 20 sec, then your average speed is",
            options: ["6m/s", "12m/s", "16m/s", "20m/s"],
            answer: "12m/s",
          },
          {
            question: "Which of the following is a vector quantity?",
            options: ["distance", "speed", "temperature", "displacement"],
            answer: "displacement",
          },
          {
            question: "The result of the cross product of two vectors is a",
            options: ["scalar", "zero quantity", "determinant", "vector"],
            answer: "vector",
          },
          {
            question:
              "The scalar product of any two vectors at right angles to each other is always",
            options: ["1", "90", "zero", "None of these"],
            answer: "zero",
          },
          {
            question: "The degree of hotness or coldness of a body is called",
            options: ["pressure", "heat", "temperature", "kelvin"],
            answer: "temperature",
          },
          {
            question:
              "If Vector P = 5i - 2j and Q = 3i + 3j and R = 4i - j. What is P + Q + R?",
            options: ["6i", "12i", "7i", "14i"],
            answer: "12i",
          },
          {
            question: "A Null vector is a vector whose magnitude is",
            options: ["zero", "very large", "continuous", "available"],
            answer: "zero",
          },
          {
            question:
              "If a force of 40N acting due East and a force of 30N is acting due North. Then the magnitude of the resultant force will be",
            options: ["40N", "30N", "20N", "50N"],
            answer: "50N",
          },
          {
            question: "A Scalar quantity has only",
            options: ["direction", "velocity", "magnitude", "time"],
            answer: "magnitude",
          },
          {
            question: "A Vector quantity has both direction and",
            options: ["unit", "magnitude", "speed", "quantity"],
            answer: "magnitude",
          },
          {
            question:
              "The change in the thermo-electric e.m.f per degree Celsius in temperature between the hot and cold junctions is known as",
            options: [
              "clinical power",
              "thermo-electric power",
              "electric",
              "power",
            ],
            answer: "thermo-electric power",
          },
          {
            question: "The dimension of coefficient of linear expansion is",
            options: ["K", "degrees", "L × degrees", "L"],
            answer: "1/K", // Assuming typo; dimension is 1/temperature
          },
          {
            question:
              "The thermometer that is constructed by using the Seebeck effect is known as",
            options: [
              "Thermo-electric",
              "clinical",
              "mercury",
              "None of these",
            ],
            answer: "Thermo-electric",
          },
          {
            question: "Which of the following gives the dimension of velocity?",
            options: ["TxLxL", "LxT", "L/T", "L/M"],
            answer: "L/T",
          },
          {
            question: "Which of the following will give the dimension of Area?",
            options: ["LxL", "LxLxL", "MxM", "MxMxM"],
            answer: "LxL",
          },
          {
            question: "The SI unit of time is",
            options: ["minute", "seconds", "day", "year"],
            answer: "seconds",
          },
          {
            question: "Which of the following quantities have a derived unit?",
            options: ["length", "time", "area", "mass"],
            answer: "area",
          },
          {
            question:
              "The rope shown in the figure attached hereto is wound around a cylinder of mass 4.0kg, radius 10cm, and I = 0.020kgm². If the cylinder rolls without slipping, what is the linear acceleration of its center of mass?",
            options: ["6.7m/s²", "3.3m/s²", "11.2m/s²", "1.5m/s²"],
            answer: "3.3m/s²",
          },
          {
            question:
              "The frictional force between the block and the table is 20N. If the moment of inertia of the wheel is 4.0kgm², find how long it will take the block to drop 60cm after the system is released.",
            options: ["7.37s", "1.34s", "3.71s", "4.22s"],
            answer: "3.71s",
          },
          {
            question:
              "The mass shown in the figure attached starts from rest and falls a distance h. Find the angular speed of the wheel in terms of the radius of the wheel and I, m, and h.",
            options: [
              "ω = √(2mgI/mb² − h)",
              "ω = √(2mgI/mb² + h)",
              "ω = √(2mgh/mb² − I)",
              "ω = √(2mgh/mb² + I)",
            ],
            answer: "ω = √(2mgh/mb² + I)",
          },
          {
            question: "Find the equation for the simple harmonic motion shown.",
            options: [
              "y = 0.08sin(0.40πt − 0.40π)",
              "y = 0.06sin(0.80πt + 0.40π)",
              "y = 0.08sin(0.40πt + 0.40π)",
              "y = 0.06sin(0.80πt − 0.40π)",
            ],
            answer: "y = 0.08sin(0.40πt + 0.40π)",
          },
          {
            question:
              "For the simple harmonic motion shown, evaluate y at t = 1.35s.",
            options: ["0.034m", "0.023m", "0.047m", "0.012m"],
            answer: "0.047m",
          },
          {
            question:
              "When a 30-g mass is hung from the end of a spring, the spring stretches 8.0cm. The same spring with a mass of 200g at its end is stretched 5.0cm. If released and allowed to oscillate on a frictionless horizontal surface, find the frequency of the oscillation.",
            options: ["0.54Hz", "0.68Hz", "0.34Hz", "9.5Hz"],
            answer: "0.68Hz",
          },
          {
            question:
              "The system shown is an example of the Atwood's machine. What is the acceleration of the masses? Assume the pulley is frictionless and the rope is massless. Take g = 9.8m/s².",
            options: ["4.2m/s²", "2.5m/s²", "9.8m/s²", "3.3m/s²"],
            answer: "4.2m/s²",
          },
          {
            question:
              "A boy intends to move an m-kg crate across the floor by applying a constant force P newtons on it. The coefficient of friction between the floor and the crate is μ. Which of these is the best option for his task?",
            options: [
              "Push the crate with P applied horizontally",
              "Push the crate with P inclined at an angle above the horizontal",
              "Pull the crate with P inclined at an angle above the horizontal",
              "Pull the crate with P inclined at an angle below the horizontal",
            ],
            answer: "Push the crate with P applied horizontally",
          },
          {
            question:
              "A boat propelled so as to travel with a speed of 0.50m/s in still water, moves directly across a river that is 60m wide. The river flows with a speed of 0.30m/s. How long in seconds does it take the boat to cross the river?",
            options: ["150", "120", "300", "200"],
            answer: "120",
          },
          {
            question: "Which of the following statements is correct?",
            options: [
              "An object can have a constant velocity even though its speed is changing",
              "An object can have a constant speed even though its velocity is changing",
              "An object can have zero acceleration and eventually reverses its direction",
              "An object can have constant velocity even though its acceleration is not zero",
            ],
            answer:
              "An object can have a constant speed even though its velocity is changing",
          },
          {
            question:
              "Which of these is NOT a statement of Newton's law of universal gravitation?",
            options: [
              "Gravitational force between two particles is attractive as well as repulsive",
              "Gravitational force acts along the line joining the two particles",
              "Gravitational force is directly proportional to the product of the masses of the particles",
              "Gravitational force is inversely proportional to the square of the distance between the particles",
            ],
            answer:
              "Gravitational force between two particles is attractive as well as repulsive",
          },
          {
            question:
              "How large an average force is required to stop a 1400-kg car in 5.0s if the car's speed is 25m/s?",
            options: ["2000N", "3500N", "9000N", "7000N"],
            answer: "7000N",
          },
          {
            question:
              "A 10-g bullet of unknown speed is shot horizontally into a 2-kg block of wood suspended from the ceiling by a cord. The bullet hits the block and becomes lodged in it. After the collision, the block and the bullet swing to a height of 30cm above the original position. What was the speed of the bullet? (Take g = 9.8m/s²)",
            options: ["487m/s", "640m/s", "354m/s", "700m/s"],
            answer: "640m/s",
          },
          {
            question:
              "A 40-g ball traveling to the right at 30cm/s collides with a 10-g elastic ball that is at rest. If the collision is perfectly elastic, find the velocity of each ball after the collision.",
            options: [
              "The first ball is going to the right at 10m/s, while the other is going to the left at 20m/s",
              "The first ball is going to the left at 10m/s, while the other is going to the right at 20m/s",
              "The first ball is going to the left at 20m/s, while the other is going to the right at 10m/s",
              "The first ball is going to the right at 10m/s, while the other is going to the left at 10m/s",
            ],
            answer:
              "The first ball is going to the left at 10m/s, while the other is going to the right at 20m/s",
          },
          {
            question:
              "A gun of mass M is used to fire a bullet of mass m. The exit velocity of the bullet is v. Find the recoil velocity of the gun.",
            options: ["Mv/m", "mv/M", "−Mv/m", "−mv/M"],
            answer: "−mv/M",
          },
          {
            question:
              "A 30,000-kg truck traveling at 10.0m/s collides with a 1700-kg car moving at 25m/s in the opposite direction. If they stick together after the collision, how fast and in what direction will they be moving?",
            options: [
              "8.1m/s in the direction of the truck",
              "12.3m/s in the direction of the car's motion",
              "24.2m/s in the direction of the car's motion",
              "17.6m/s in the direction of the truck's motion",
            ],
            answer: "8.1m/s in the direction of the truck",
          },
          {
            question:
              "Sand drops at the rate of 2000kg/min from the bottom of a hopper onto a belt conveyor moving horizontally at 250m/min. Determine the force needed to drive the conveyor, neglecting friction.",
            options: ["500N", "800N", "139N", "152N"],
            answer: "500N",
          },
          {
            question:
              "The exhaust gas of a rocket is expelled at the rate of 1300kg/s, at the velocity of 50,000m/s. Find the thrust on the rocket in newtons.",
            options: ["65,000N", "150,000N", "200,000N", "3,000,000N"],
            answer: "65,000N",
          },
          {
            question:
              "A force of 2i⃗ + 7j⃗ N acts on a body of mass 5 kg for 10 seconds. The body was initially moving with a constant velocity of i⃗ + 2j⃗ m/s. Find the final velocity of the body in m/s, in vector form.",
            options: [
              "A. 5i⃗ + 12j⃗",
              "B. 12i⃗ + 5j⃗",
              "C. 10i⃗ + 7j⃗",
              "D. 7i⃗ + 10j⃗",
            ],
            answer: "A. 5i⃗ + 12j⃗",
          },
          {
            question:
              "Two trolleys X and Y with momenta 20 Ns and 12 Ns, respectively, travel along a straight line in opposite directions before collision. After collision, the direction of motion of both trolleys is reversed and the magnitude of the momentum of X is 2 Ns. What is the magnitude of the corresponding momentum of Y?",
            options: ["A. 6 Ns", "B. 8 Ns", "C. 10 Ns", "D. 30 Ns"],
            answer: "B. 8 Ns",
          },
        ],
      },
      {
        code: "PHY103",
        questions: [
          {
            question:
              "Kinetic energy of molecule is highest in which state of matter.",
            options: ["Solid", "Liquid", "Gas", "Solid and Gas"],
            answer: "Gas",
          },
          {
            question:
              "A bulk modulus of a liquid is 3.2 GPa, compute the volume contraction of 100 cm³ liquid subjected to a pressure of 1.6 GPa.",
            options: ["50", "0.5", "5.0", "0.05"],
            answer: "5.0",
          },
          {
            question:
              "Calculate the density of a fluid in a container of height 30 cm which has a pressure of 6.2 Pa.",
            options: ["0.021 kg/m³", "106 kg/m³", "4.83 kg/m³", "2.1 kg/m³"],
            answer: "0.021 kg/m³",
          },
          {
            question:
              "A water bed is 5 cm long, 2 m wide and 50 cm deep. Find the weight of the bed.",
            options: ["50 N", "490 N", "500 N", "5 N"],
            answer: "490 N",
          },
          {
            question:
              "A hydraulic lift has an area of 19.64 cm² and wide area of 1256.8 cm². Calculate the force applied to lift a car of 1960 kg.",
            options: ["30.47 N", "12.65 N", "280 N", "112 N"],
            answer: "30.47 N",
          },
          {
            question:
              "A solid aluminum cylinder has a measured mass of 67 g in air and 45 g when immersed in kerosene. Calculate its buoyant force.",
            options: ["0.657 N", "0.400 N", "22 N", "0.216 N"],
            answer: "0.216 N",
          },
          {
            question:
              "When heat is absorbed or released during a phase change it is called?",
            options: [
              "Heat capacity",
              "Specific heat capacity",
              "Latent heat",
              "Substance heat",
            ],
            answer: "Latent heat",
          },
          {
            question:
              "The measure of an object’s ability to emit infrared rays is called",
            options: [
              "Radiation",
              "Convention",
              "Emissivity",
              "Radiation power",
            ],
            answer: "Emissivity",
          },
          {
            question: "Which of these is an adiabatic process?",
            options: ["ΔQ = ΔU", "ΔQ = −ΔW", "ΔU = ΔW", "ΔQ = 0"],
            answer: "ΔQ = 0",
          },
          {
            question:
              "Calculate the internal energy of a system when the work done on the system is 10 J and heat generated is 25 J.",
            options: ["-15 J", "15 J", "35 J", "-35 J"],
            answer: "35 J",
          },
          {
            question:
              "From the graph of Load Vs Extension, Point P, E, Y, and B are",
            options: [
              "Proportionality limit, Elastic limit, Yield point and Breaking point",
              "Elastic limit, Yield point, Breaking point and Proportionality limit",
              "Yield point, Proportionality limit, Elastic limit, and Breaking point",
              "Breaking point, Proportionality limit, Yield point and Elastic limit",
            ],
            answer:
              "Proportionality limit, Elastic limit, Yield point and Breaking point",
          },
          {
            question: "Regions OE and EB are called",
            options: [
              "Breaking region and Plastic region respectively",
              "Elastic region and Plastic region respectively",
              "Plastic region and Elastic region respectively",
              "Inelastic region and Plastic region respectively",
            ],
            answer: "Elastic region and Plastic region respectively",
          },
          {
            question:
              "By how much will a wrought iron bar shorten under 1000 N, if L = 1m, A = 0.001 m², Y = 5.0 × 10¹⁰ N/m²?",
            options: [
              "2.0 × 10⁻⁵ m",
              "1.20 × 10⁻⁵ m",
              "3.0 × 10⁻⁵ m",
              "2.9 × 10⁻⁵ m",
            ],
            answer: "2.0 × 10⁻⁵ m",
          },
          {
            question:
              "The density of Aluminum foil is 2.70 g/cm³. What will the density be in kg/m³?",
            options: ["270", "2700", "27000", "270000"],
            answer: "2700",
          },
          {
            question:
              "Which of the following is correct about Pascal’s principle?",
            options: [
              "Pressure change in one part of a confined fluid is transmitted equally throughout the fluid.",
              "Temperature change in one part of a confined fluid is transmitted equally.",
              "Pressure change in a confined solid is transmitted equally.",
              "Deformation is proportional to applied force below the proportionality limit.",
            ],
            answer:
              "Pressure change in one part of a confined fluid is transmitted equally throughout the fluid.",
          },
          {
            question:
              "Determine the diameter of xylem tubes required to move sap 25 m up a tree. (Surface tension = 5 × 10⁻² N/m, contact angle = 45°)",
            options: [
              "5.01 × 10⁻⁵ m",
              "1.20 × 10⁻⁵ m",
              "6.89 × 10⁻⁵ m",
              "2.89 × 10⁻⁵ m",
            ],
            answer: "5.01 × 10⁻⁵ m",
          },
          {
            question:
              "A scientist uses γ scale (water melts at 100γ, boils at 1300γ). Sodium melts at 1270γ. What is that in Kelvin?",
            options: ["370.65 K", "180.31 K", "150.65 K", "380.69 K"],
            answer: "370.65 K",
          },
          {
            question:
              "A spring stretches from 25 cm to 30 cm when 150 g to 250 g mass is added. What is the spring constant?",
            options: [
              "19.6 N/cm",
              "19.6 n/m",
              "109.6 N/m",
              "19.6 N/m",
              "19.6 N/km",
            ],
            answer: "19.6 N/m",
          },
          {
            question:
              "An iron rod stretches 1mm under 200kg. What is Young’s modulus if length = 3m and area = 0.4 cm²?",
            options: [
              "16.3 N/m",
              "153.3 N/m",
              "163.3 N/m²",
              "163.49 N/m²",
              "163.3 N/cm²",
            ],
            answer: "163.3 N/cm²",
          },
          {
            question:
              "A steel wire of 1.5mm diameter and 2.5m long is stretched by 6kg. Y = 195 MPa. How much does it stretch?",
            options: ["4.26 cm", "4.26 m", "4.26 km", "5.26 cm", "4.26 cm²"],
            answer: "4.26 cm",
          },
          {
            question:
              "A 60 kg, 3 m long cylinder with 22 cm² base area stands vertically. What pressure does it exert?",
            options: [
              "2.67 × 10⁻⁵ N",
              "2.67 × 10⁻⁵ P",
              "2.67 × 10⁵ Pa",
              "2.607 × 10⁻³ Pa",
              "2.67 J",
            ],
            answer: "2.67 × 10⁵ Pa",
          },
          {
            question:
              "A truck of 4500 kg is lifted by a hydraulic lift with a 3 m diameter piston. What pressure must be applied?",
            options: [
              "6239 N/mm²",
              "6239 J/m²",
              "6239 N/km²",
              "6239 N/cm²",
              "6239 N/m²",
            ],
            answer: "6239 N/m²",
          },
          {
            question:
              "Hydrogen liquifies at −235°C under 20 atm. What is this in Fahrenheit?",
            options: ["391°F", "-391°F", "-391°C", "-391 K", "-391F"],
            answer: "-391°F",
          },
          {
            question: "What is 20K in Fahrenheit?",
            options: ["423°F", "-43°F", "-423°F", "-423 K", "-423°F"],
            answer: "-423°F",
          },
          {
            question:
              "A gelatin block (60×60×20 mm) is displaced 5mm by a 0.245 N force. Find stress, strain, and shear modulus.",
            options: [
              "(68.1 N/m² , .25 , 272.4 N/m²)",
              "(68 N/m² , .25 , 272 N/m²)",
              "(67 N/m² , .26 , 270.4 N/m²)",
              "(68.5 N/m² , .27 , 272.4 N/m²)",
            ],
            answer: "(68.1 N/m² , .25 , 272.4 N/m²)",
          },
          {
            question:
              "A 4 mm steel wire has a breaking strength of 4×10⁵ N. What is it for a 2 mm wire?",
            options: ["1×10⁵ N", "4×10⁵ N", "16×10⁵ N", "none of these"],
            answer: "1×10⁵ N",
          },
          {
            question: "What is the SI unit of modulus of elasticity?",
            options: ["Nm⁻¹", "Nm⁻²", "Jm⁻¹", "Unitless"],
            answer: "Nm⁻²",
          },
          {
            question:
              "A rubber rope (density = 1.5 g/cm³, Y = 5×10⁶ Nm⁻², length = 8 m) stretches by how much under its own weight?",
            options: [".86 m", ".2 m", ".1 m", ".096 m"],
            answer: ".096 m",
          },
          {
            question:
              "A 2 kg load stretches a spring by 10 cm. What stretch occurs with 6 kg load?",
            options: ["0.03 cm", "0.3 cm", "3.0 cm", "30 cm"],
            answer: "30 cm",
          },
          {
            question:
              "γ scale: Water melts at 100γ, boils at 1300γ. Sodium melts at 1270γ. What is that in Kelvin?",
            options: ["370.65 K", "180.31 K", "150.65 K", "380.69 K"],
            answer: "370.65 K",
          },
          {
            question: "Which of the following is a good conductor of heat?",
            options: ["Brick", "Water", "Argon", "Silver"],
            answer: "Silver",
          },
          {
            question:
              "A solid cylindrical steel is 6.0 cm long and has a radius of 5 x 10⁻² m. What will be its decrease in length when carrying a load of 90000 kg? (Young modulus of steel is 1.9 x 10¹¹ Pa)",
            options: [
              "9.36 x 10⁻⁸ m",
              "3.5 x 10⁻⁵ m",
              "8.5 x 10⁻⁵ m",
              "10.5 x 10⁻⁵ m",
            ],
            answer: "9.36 x 10⁻⁸ m",
          },
          {
            question:
              "On a cold day, why does a metal doorknob feel colder than the wooden door?",
            options: [
              "Conduction of heat",
              "Convection of heat",
              "Radiation",
              "None of the above",
            ],
            answer: "Conduction of heat",
          },
          {
            question:
              "A piece of alloy has a measured mass of 100 g in air and 48 g when immersed in water. Determine its volume and density.",
            options: [
              "5.2 x 10⁻⁵ m³ and 1.92 x 10³ kg/m³",
              "2.24 x 10⁻⁵ m³ and 3.57 x 10³ kg/m³",
              "13.0 x 10⁻⁵ m³ and 0.6 x 10³ kg/m³",
              "130.0 x 10⁻⁵ m and 0.06 x 10³ kg/m³",
            ],
            answer: "2.24 x 10⁻⁵ m³ and 3.57 x 10³ kg/m³",
          },
          {
            question:
              "Which of the following thermometers can be used for taking very accurate measurement of temperature?",
            options: [
              "Mercury in glass thermometer",
              "Alcohol in glass thermometer",
              "Constant volume thermometer",
              "Electrical in glass thermometer",
            ],
            answer: "Constant volume thermometer",
          },
          {
            question:
              "The density of mercury is 13.6 g/cm³ and that of alcohol is 0.8 g/cm³. In which of these substances will a solid cube of brass (density is 8.6 x 10³ kg/m³) sink?",
            options: ["Mercury", "Alcohol", "Both"],
            answer: "Mercury",
          },
          {
            question: "What is the mass of ammonia (NH₃) molecule in kilogram?",
            options: [
              "2.82 X 10⁻²⁶ kg",
              "3.52 X 10⁻²⁶ kg",
              "0.82 X 10⁻²⁶ kg",
              "2.56 X 10⁻²⁶ kg",
            ],
            answer: "2.82 X 10⁻²⁶ kg",
          },
          {
            question:
              "Consider a 40kg young man to be a huge molecule. What is his mass in atomic units?",
            options: [
              "3.6 X 10²⁸ u",
              "7.9 X 10⁻²⁶ u",
              "3.6 X 10⁻²⁶ u",
              "2.82 X 10²⁸ u",
            ],
            answer: "3.6 X 10²⁸ u",
          },
          {
            question:
              "A monoatomic gas of mass 2.1212g occupies 1.49L when the temperature is 0°C at a pressure of 810.6 kPa. What is the gas?",
            options: ["Helium", "Hydrogen", "Oxygen", "Carbon"],
            answer: "Helium",
          },
          {
            question:
              "The temperature of the hydrogen molecules (H₂) is 373.15K (100°C). Calculate the root mean-square speed of the hydrogen molecules at this temperature.",
            options: ["3.15 km/s", "2.15 km/s", "2.755 km/s", "3.52 km/s"],
            answer: "3.15 km/s",
          },
          {
            question:
              "Determine the thermodynamic temperature at which the Celsius temperature is ¾ the Fahrenheit temperature.",
            options: ["204.58K", "215K", "307K", "305K"],
            answer: "204.58K",
          },
          {
            question:
              "What is the maximum amount of work that a Carnot engine can perform per kilojoules of heat input if it absorbs heat at 427°C and exhausts heat at 177°C?",
            options: ["1.49 kJ", "3.59 kJ", "1.89 kJ", "1.33 kJ"],
            answer: "1.49 kJ",
          },
          {
            question: "The dimensions of viscosity in terms of M, L, T is?",
            options: ["ML¹T⁻¹", "M⁻¹LT⁻¹", "ML⁻¹T⁻²", "ML⁻¹T⁻¹"],
            answer: "ML⁻¹T⁻¹",
          },
          {
            question:
              "A man is sitting in a boat which is floating on a pond. The man drinks some water from the pond. What happens to the water level in the pond?",
            options: [
              "Rises",
              "Falls",
              "Remains unchanging",
              "Not enough information",
            ],
            answer: "Falls",
          },
          {
            question:
              "A body floats in water with 40% of its volume outside water. When the same body floats in some liquid, 60% of its volume remains outside the liquid. The relative density of the liquid is?",
            options: ["1.5", "1.2", "0.6", "None of these"],
            answer: "1.5",
          },
          {
            question:
              "A closed compartment containing gas is moving with some acceleration in the horizontal direction. Then the pressure in the compartment is? Neglect the effect of gravity.",
            options: [
              "Lower in the front side",
              "Same everywhere",
              "Lower in the rear side",
              "Not enough information",
            ],
            answer: "Lower in the front side",
          },
          {
            question:
              "An object of relative density 10 is released from rest on the surface of a lake. If the viscous effects are ignored, the object sinks in the water with an acceleration?",
            options: ["10g", "9g/10", "11g/10", "None of these"],
            answer: "10g",
          },
          {
            question: "Machine parts are jammed in winter due to?",
            options: [
              "Increase in surface tension of lubricant",
              "Decrease in viscosity of lubricant",
              "Decrease in surface tension of lubricant",
              "Increase in viscosity of lubricant",
            ],
            answer: "Increase in viscosity of lubricant",
          },
          {
            question:
              "A horizontal pipeline carries water in a streamline flow. At point A along the pipe, the cross-sectional area is 10 cm², the water velocity is 1 m/s and pressure is 2000 Pa. What is the pressure at point B where cross-sectional area is 5.0 cm²?",
            options: ["500 Pa", "400 Pa", "300 Pa", "None of the above"],
            answer: "300 Pa",
          },
          {
            question:
              "A big drop of water is broken into a large number of small drops. The surface energy would?",
            options: [
              "Remain unchanged",
              "Will increase",
              "Will decrease",
              "Not enough information",
            ],
            answer: "Will increase",
          },
          {
            question:
              "A U-tube containing a liquid is accelerated horizontally with constant acceleration a. The separation between the limbs is L. The difference in the height of the liquid in the two arms would be?",
            options: ["L(a/g)¹/²", "aL/gL", "L/2", "a²L/g²L"],
            answer: "L(a/g)¹/²",
          },
          {
            question:
              "A block of wood has a mass of 25 g. When a 5 g metal piece with a volume of 2 cm³ is attached to the bottom of the block, the wood barely floats in water. What is the volume of the wood?",
            options: ["20 cm³", "38 cm³", "28 cm³", "None of these"],
            answer: "28 cm³",
          },
          {
            question:
              "A solid sphere of radius R, made up of a material of bulk modulus K, is surrounded by a liquid in a cylindrical container. A massless piston of area A floats on the surface of the liquid. When a mass M is placed on the piston to compress the liquid, the fractional change in the radius of the sphere is?",
            options: ["Mg/2AK", "3Mg/AK", "Mg/3AK", "Mg/AK"],
            answer: "Mg/AK",
          },
          {
            question:
              "A small hole is there near the bottom of the water-filled container. The speed of the water ejected depends on?",
            options: [
              "Density of the liquid",
              "Acceleration due to gravity",
              "Height of the liquid above the hole",
              "All of the above",
            ],
            answer: "All of the above",
          },
          {
            question:
              "If the hollow bob of a simple pendulum is filled with mercury that drains out slowly, its time period?",
            options: [
              "Increases continuously",
              "Decreases continuously",
              "Remains same",
              "First increases and then decreases",
            ],
            answer: "First increases and then decreases",
          },
          {
            question:
              "Water leaves a faucet with a downward velocity of 3 m/s. As the water falls below the faucet, it accelerates with acceleration g. The cross-sectional area of the water stream leaving the faucet is 1.0 cm². What is the cross-sectional area of the stream 0.5 m below the faucet?",
            options: [".50 cm²", ".9 cm²", ".1 cm²", ".69 cm²"],
            answer: ".50 cm²",
          },
          {
            question:
              "Water rises to a height of 13.6 cm in a capillary tube dipped in water. When the same tube is dipped in mercury, it is depressed by 3√2. The angle of contact in water = 0°, The angle of contact in mercury = 135°. Given: Relative density of mercury = 13.6. Find out the ratio of the surface tensions of mercury and water.",
            options: ["6", "5", "11", "None of these"],
            answer: "6",
          },
          {
            question: "Which of the following equations is not correct?",
            options: [
              "Force = mass x acceleration",
              "Density = Volume /Mass",
              "Pressure = density x acceleration x height",
              "Pressure = Force /Area",
            ],
            answer: "Density = Volume /Mass",
          },
          {
            question:
              "Air pressure at sea level is 14.5 lbs/sq. inch. Why do we not feel this pressure pushing on us?",
            options: [
              "The amount is negligible to the feeling of gravity",
              "We have grown accustomed to it since we were born",
              "The fluids in our body are pushing outward with the same force",
              "The force of gravity negates the feeling of pressure",
            ],
            answer:
              "The fluids in our body are pushing outward with the same force",
          },
          {
            question:
              "The static fluid pressure at any given depth depends on?",
            options: [
              "Total mass",
              "Surface area",
              "Distance below the surface",
              "All of the above",
            ],
            answer: "Distance below the surface",
          },
          {
            question:
              "In the equation for Pressure — P = rho x g x h, the units for g (SI system) are?",
            options: ["kg/m³", "m/sec", "kg-m/sec", "m/sec²"],
            answer: "m/sec²",
          },
          {
            question:
              "What is the pressure at the bottom of a swimming pool that is 3 meters in depth?",
            options: [
              "(1.01 x 10⁵) + (1.09 x 10⁵) Pa = 2.10 x 10⁵ Pa",
              "(1.01 x 10⁵) + (3.63 x 10⁴) Pa = 1.36 x 10⁵ Pa",
              "(1.01 x 10⁵) + (7 x 10⁴) Pa = 1.71 x 10⁵ Pa",
            ],
            answer: "(1.01 x 10⁵) + (3.63 x 10⁴) Pa = 1.36 x 10⁵ Pa",
          },
          {
            question:
              "Object A is 2 kg. It has a temperature of 40°C and has an internal energy of 500000 J. Object B is 2 kg. It has a temperature of 50°C and has an internal energy of 400000 J. Which of the following statements is correct?",
            options: [
              "Object A has more internal energy",
              "Object B has more internal energy",
              "Both have the same internal energy",
              "Insufficient data",
            ],
            answer: "Object A has more internal energy",
          },
          {
            question:
              "2 kg of ice at 0°C is floating on 5 kg of water at 0°C. Which of the following statements is true?",
            options: [
              "Ice is denser than water",
              "Water is denser than ice",
              "Both ice and water are the same density",
              "None of the above",
            ],
            answer: "Water is denser than ice",
          },
          {
            question: "Conduction is a transfer of thermal energy via",
            options: [
              "Liquid",
              "Gas",
              "Direct contact",
              "Electromagnetic waves",
            ],
            answer: "Direct contact",
          },
          {
            question: "Convection is transfer of thermal energy due to",
            options: [
              "Solid material",
              "Movement of particles",
              "Electromagnetic radiation",
              "All of the above",
            ],
            answer: "Movement of particles",
          },
          {
            question: "What is radiation?",
            options: [
              "Transfer of thermal energy through particles",
              "Transfer of thermal energy via direct contact",
              "Transfer of thermal energy through electromagnetic waves",
              "None of the above",
            ],
            answer: "Transfer of thermal energy through electromagnetic waves",
          },
          {
            question:
              "Give a reason why Aluminum is a better conductor than wood?",
            options: [
              "It has lower density",
              "It has high thermal conductivity",
              "It has a higher specific heat",
              "It is a better insulator",
            ],
            answer: "It has high thermal conductivity",
          },
          {
            question: "Conduction happens in",
            options: ["Fluids", "Solids", "Gases", "Vacuum"],
            answer: "Solids",
          },
          {
            question: "Convection happens in",
            options: ["Fluids", "Solids", "Gases", "Both fluids and gases"],
            answer: "Both fluids and gases",
          },
          {
            question:
              "Which of the following statements about radiation is true? 1. Radiation can pass through solids 2. Radiation can pass through liquids 3. Radiation can pass through gases",
            options: [
              "Only statement 1 is true",
              "Only statement 2 is true",
              "Only statement 3 is true",
              "All of the above",
            ],
            answer: "All of the above",
          },
          {
            question:
              "Which of the following heat transfer processes can take place in vacuum?",
            options: [
              "Conduction",
              "Convection",
              "Radiation",
              "None of the above",
            ],
            answer: "Radiation",
          },
          {
            question:
              "Which of the following heat transfer processes is/are caused by the movement of particles?",
            options: [
              "Conduction",
              "Convection",
              "Radiation",
              "All of the above",
            ],
            answer: "Convection",
          },
          {
            question:
              "Which of the following about conduction is/are true? 1. Conduction can transfer thermal energy faster in denser medium. 2. Conduction cannot happen together with convection. 3. Conduction can transfer thermal energy faster through good electrical conductors.",
            options: [
              "Only statement 1 is true",
              "Only statement 2 is true",
              "Only statement 3 is true",
              "All of the above",
            ],
            answer: "Only statement 3 is true",
          },
          {
            question:
              "The white porcelain lid of a cup of hot drink is to 1. reduce loss of thermal energy by evaporation. 2. reduce loss of thermal energy by radiation. 3. reduce loss of thermal energy by convection.",
            options: [
              "Statement 1",
              "Statement 2",
              "Statement 3",
              "All of the above",
            ],
            answer: "Statement 2",
          },
          {
            question: "The wooden handle of a pot",
            options: [
              "Increases heat transfer",
              "Decreases heat transfer",
              "Has no effect on heat transfer",
              "Increases the rate of conduction",
            ],
            answer: "Decreases heat transfer",
          },
          {
            question:
              "During a barbecue, why do we always cook food on top of the charcoal?",
            options: [
              "Because the food cooks faster",
              "Because the heat is more evenly distributed",
              "Because radiation heats the food from below",
              "None of the above",
            ],
            answer: "Because the food cooks faster",
          },
          {
            question:
              "Which of the following about the vacuum flask are correct? 1. The silvered surface reduces loss of thermal energy by radiation. 2. The vacuum in the flask reduces loss of thermal energy by radiation. 3. The stopper reduces loss of thermal energy by convection and evaporation.",
            options: [
              "Statement 1 only",
              "Statement 2 only",
              "Statement 3 only",
              "All of the above",
            ],
            answer: "All of the above",
          },
          {
            question:
              "Cooling fins are used in refrigerators, car radiators, and many other cooling devices to dissipate thermal energy out of the system to the environment. Which of the following statements about the cooling fins are correct? 1. The cooling fins are made of metal to ensure that thermal energy is being conducted quickly out to the environment. 2. The cooling fins are thin for heat to be dissipated to the environment quickly via convection and radiation. 3. Cooling fins are normally black to achieve higher rate of thermal energy radiation.",
            options: [
              "Statement 1 only",
              "Statement 2 only",
              "Statement 3 only",
              "All of the above",
            ],
            answer: "All of the above",
          },
          {
            question: "Petrol storage tanks are not painted black because",
            options: [
              "Black color increases temperature",
              "Black color causes more evaporation",
              "Black color decreases temperature",
              "None of the above",
            ],
            answer: "Black color increases temperature",
          },
          {
            question:
              "How does a polar bear keep itself warm? 1. By salivating 2. By having thick fur 3. By having white fur",
            options: [
              "Statement 1 only",
              "Statement 2 only",
              "Statement 3 only",
              "All of the above",
            ],
            answer: "Statement 2 only",
          },
          {
            question: "Which of the following is false?",
            options: [
              "Heat is transferred through conduction, convection, and radiation",
              "Radiation cannot travel through a vacuum",
              "Convection can only occur in fluids",
              "None of the above",
            ],
            answer: "Radiation cannot travel through a vacuum",
          },
          {
            question:
              "Which of the following will increase the rate of heat transfer? 1. Increase the temperature difference 2. Paint the surface black 3. Increase the surface area",
            options: [
              "Statement 1 only",
              "Statement 2 only",
              "Statement 3 only",
              "All of the above",
            ],
            answer: "All of the above",
          },
          {
            question:
              "Which of the following is true about pots? 1. Black pots are used for cooking because they increase the rate of cooking. 2. Silver pots are used for keeping food warm because they decrease the rate of heat dissipation. 3. Pots are made of clay to increase the rate of cooking.",
            options: [
              "Statement 1 only",
              "Statement 2 only",
              "Statement 3 only",
              "All of the above",
            ],
            answer: "Statement 1 only",
          },
          {
            question:
              "Which of the following can be done to increase the rate of cooking? 1. Use a black pot instead of silver pot. 2. Use a thick pot instead of thin pot 3. Cover the pot with a lid.",
            options: [
              "Statement 1 only",
              "Statement 2 only",
              "Statement 3 only",
              "All of the above",
            ],
            answer: "Statement 1 only",
          },
          {
            question:
              "Container A and container B are filled with equal amount of hot water and the temperature of the water in the containers is measured with a thermometer some time later. It is observed that container A has a much lower temperature than container B. What are the possible reason(s)? 1. Container A is black and container B is silver. 2. Container A has a lid and container B is not covered. 3. Container A is made of steel and container B is made of clay.",
            options: [
              "Statement 1 only",
              "Statement 2 only",
              "Statement 3 only",
              "All of the above",
            ],
            answer: "Statement 1 only",
          },
          {
            question: "Which of the following is true?",
            options: [
              "Heat can be transferred through conduction only",
              "Heat can be transferred through convection only",
              "Heat can be transferred through radiation only",
              "Heat can be transferred by all three methods",
            ],
            answer: "Heat can be transferred by all three methods",
          },
        ],
      },
      {
        code: "GNS101",
        questions: [
          {
            question:
              "One of the factors that inhibit efficient reading is ____",
            options: [
              "A. a well-equipped library",
              "B. good health",
              "C. noise",
              "D. proper feeding",
            ],
            answer: "C. noise",
          },
          {
            question:
              "The act of reading through a text to acquire superficial information is ____",
            options: [
              "A. scanning",
              "B. skimming",
              "C. anticipation",
              "D. writing",
            ],
            answer: "B. skimming",
          },
          {
            question: "The sentence that bears the main information is ____",
            options: [
              "A. introduction sentence",
              "B. main point sentence",
              "C. topic sentence",
              "D. all of the above",
            ],
            answer: "C. topic sentence",
          },
          {
            question: "An introductory paragraph is usually written in ____",
            options: [
              "A. past tense",
              "B. present tense",
              "C. present continuous tense",
              "D. past participle tense",
            ],
            answer: "B. present tense",
          },
          {
            question: "Which of the following is a signal word?",
            options: [
              "A. in addition",
              "B. similarly",
              "C. furthermore",
              "D. all of the above",
            ],
            answer: "D. all of the above",
          },
          {
            question: "Reading is important for all these except ____",
            options: [
              "A. achievement and advancement in life",
              "B. enjoyment or leisure",
              "C. professional development",
              "D. none of the above",
            ],
            answer: "D. none of the above",
          },
          {
            question: "All these are strategies of reading except ____",
            options: [
              "A. anticipation",
              "B. skimming",
              "C. scamming",
              "D. identifying",
            ],
            answer: "C. scamming",
          },
          {
            question:
              "One of these is NOT a factor that causes slow reading ____",
            options: [
              "A. word-by-word reading",
              "B. difficulty with the return sweep",
              "C. flexibility",
              "D. regression",
            ],
            answer: "C. flexibility",
          },
          {
            question: "A variety of reading skills involves ____",
            options: [
              "A. making inferences",
              "B. using word analysis strategies",
              "C. applying textbook reading strategies",
              "D. all of the above",
            ],
            answer: "D. all of the above",
          },
          {
            question:
              "Efficient reading is enhanced by these factors except ____",
            options: [
              "A. environmental factors",
              "B. physiological factors",
              "C. physiological factors",
              "D. psychological factors",
            ],
            answer: "C. physiological factors",
          },
          {
            question:
              "Reading efficiency, as the act of reading, is enhanced by the following except ____",
            options: [
              "A. phrase-by-phrase reading",
              "B. concentrating on the writer's purpose and comprehending well",
              "C. establishing a purpose for reading",
              "D. adjusting one’s reading to the complexity of the reading",
            ],
            answer:
              "B. concentrating on the writer's purpose and comprehending well",
          },
          {
            question: "All these are instances of skimming except ____",
            options: [
              "A. going through a passage rapidly in order to search for specific material",
              "B. determining a text’s main ideas",
              "C. looking out for the topic sentences",
              "D. running through a text rapidly to determine its main ideas",
            ],
            answer:
              "D. running through a text rapidly to determine its main ideas",
          },
          {
            question: "The topic sentence is usually found in ____",
            options: [
              "A. the initial position",
              "B. the medial position",
              "C. the final position",
              "D. all of the above",
            ],
            answer: "A. the initial position",
          },
          {
            question:
              "A good way to locate main ideas in a text includes the following except ____",
            options: [
              "A. Use the paragraph as a guide",
              "B. Locate the topic",
              "C. Locate the topic sentence",
              "D. Study the references",
            ],
            answer: "D. Study the references",
          },
          {
            question: "The topic sentence may be found in ____",
            options: [
              "A. the initial position",
              "B. the medial position",
              "C. the final position",
              "D. all of the above",
            ],
            answer: "D. all of the above",
          },
          {
            question:
              "The function of the word FURTHERMORE in this sentence: ‘examine these details’ is ____",
            options: [
              "A. Listing",
              "B. Transition",
              "C. Addition",
              "D. Summary",
            ],
            answer: "C. Addition",
          },
          {
            question: "The following are types of paragraphs except ____",
            options: [
              "A. Introductory",
              "B. Transformational",
              "C. Descriptive",
              "D. Defining",
            ],
            answer: "B. Transformational",
          },
          {
            question:
              "An advanced indicator of the content in the paper is known as ____",
            options: [
              "A. Definition",
              "B. Explanation",
              "C. Introduction",
              "D. Conclusion",
            ],
            answer: "C. Introduction",
          },
          {
            question:
              "Visual impairment is a factor that affects reading. It is an example of a ____ factor.",
            options: [
              "A. Psychological",
              "B. Physiological",
              "C. Environmental",
              "D. Technical",
            ],
            answer: "B. Physiological",
          },
          {
            question: "Pre-lecture preparations by students involve ____",
            options: [
              "A. arriving at lectures well ahead of the lecturer with notebook and pen at the ready",
              "B. making intelligent speculations about the lecturer’s courses",
              "C. conducting a survey of the course outline and topics beforehand",
              "D. validating the lecturer’s claims in the previous lecture",
            ],
            answer:
              "C. conducting a survey of the course outline and topics beforehand",
          },
          {
            question:
              "Which of the following reading habits should be avoided?",
            options: [
              "A. carefully concentrating on every word as you read",
              "B. making equal use of the two types of eye movement in reading",
              "C. not using a pen to trace each word but using a finger instead",
              "D. varying your reading speed",
            ],
            answer: "D. varying your reading speed",
          },
          {
            question: "Purposeful reading involves ____",
            options: [
              "A. seeking an overview or general impression only",
              "B. skipping some passages and dwelling on others",
              "C. adopting different reading strategies",
              "D. reading everything deliberately for different purposes",
            ],
            answer: "D. reading everything deliberately for different purposes",
          },
          {
            question:
              "Which of these is not recommended for efficient reading?",
            options: [
              "A. reading with pre-conceived ideas in mind",
              "B. generation of guide questions as you read",
              "C. adopting a flexible reading speed",
              "D. employing memory-enhancing devices",
            ],
            answer: "A. reading with pre-conceived ideas in mind",
          },
          {
            question:
              "The following are parts of the process involved in writing a term paper except ____",
            options: [
              "A. discussing the topic with group members",
              "B. gathering materials from different sources",
              "C. copying an essay from an online source",
              "D. preparing an outline",
            ],
            answer: "C. copying an essay from an online source",
          },
          {
            question:
              "The following are parts of the process involved in writing a term paper, except ____",
            options: [
              "A. narrowing the topic",
              "B. selecting the useful materials",
              "C. copying an essay from an online source",
              "D. editing and writing a clear copy",
            ],
            answer: "C. copying an essay from an online source",
          },
          {
            question:
              "The following are parts of the process involved in writing a term paper, except ____",
            options: [
              "A. gathering materials from different sources",
              "B. reading widely around the topic",
              "C. submitting the term paper online",
              "D. none of the above",
            ],
            answer: "C. submitting the term paper online",
          },
          {
            question:
              "The following are parts of the process involved in writing a term paper, except ____",
            options: [
              "A. getting others to read the essay and make suggestions",
              "B. selecting the useful materials",
              "C. preparing an outline",
              "D. copying an essay from an online source",
            ],
            answer: "D. copying an essay from an online source",
          },
          {
            question:
              "The following are parts of the process involved in writing a term paper, except ____",
            options: [
              "A. gathering materials from different sources",
              "B. structuring the essay",
              "C. submitting the term paper online",
              "D. none of the above",
            ],
            answer: "C. submitting the term paper online",
          },
          {
            question:
              "The following are parts of the process involved in writing a term paper, except ____",
            options: [
              "A. narrowing the topic",
              "B. preparing an outline",
              "C. submitting the term paper online",
              "D. none of the above",
            ],
            answer: "C. submitting the term paper online",
          },
          {
            question:
              "The following are parts of the process involved in writing a term paper, except:",
            options: [
              "A. discussing the topic with group members",
              "B. drafting; re-drafting",
              "C. getting others to read the essay and make suggestions",
              "D. none of the above",
            ],
            answer: "none of the above",
          },
          {
            question:
              "The following are parts of the process involved in writing a term paper, except:",
            options: [
              "A. gathering materials from different sources",
              "B. discussing the topic with group members",
              "C. drafting; re-drafting",
              "D. submitting the term paper online",
            ],
            answer: "submitting the term paper online",
          },
          {
            question:
              "The following are parts of the process involved in writing a term paper, except:",
            options: [
              "A. gathering materials from different sources",
              "B. selecting the useful materials",
              "C. copying an essay from an online source",
              "D. none of the above",
            ],
            answer: "copying an essay from an online source",
          },
          {
            question:
              "Of the following parts in the process involved in writing a term paper, which comes first?",
            options: [
              "A. drafting; re-drafting",
              "B. editing and writing a clear copy",
              "C. discussing the topic with group members",
              "D. getting others to read the essay and make suggestions",
            ],
            answer: "discussing the topic with group members",
          },
          {
            question:
              "Of the following parts in the process involved in writing a term paper, which comes first?",
            options: [
              "A. narrowing the topic",
              "B. preparing an outline",
              "C. selecting the useful materials",
              "D. gathering materials from different sources",
            ],
            answer: "narrowing the topic",
          },
          {
            question:
              "Of the following parts in the process involved in writing a term paper, which comes first?",
            options: [
              "A. structuring the essay",
              "B. drafting; re-drafting",
              "C. selecting the useful materials",
              "D. getting others to read the essay and make suggestions",
            ],
            answer: "selecting the useful materials",
          },
          {
            question:
              "Of the following parts in the process involved in writing a term paper, which comes first?",
            options: [
              "A. preparing an outline",
              "B. editing and writing a clear copy",
              "C. discussing the topic with group members",
              "D. gathering materials from different sources",
            ],
            answer: "discussing the topic with group members",
          },
          {
            question:
              "Of the following parts in the process involved in writing a term paper, which comes first?",
            options: [
              "A. drafting; re-drafting",
              "B. editing and writing a clear copy",
              "C. gathering materials from different sources",
              "D. getting others to read the essay and make suggestions",
            ],
            answer: "gathering materials from different sources",
          },
          {
            question:
              "Of the following parts in the process involved in writing a term paper, which comes first?",
            options: [
              "A. narrowing the topic",
              "B. selecting the useful materials",
              "C. drafting; re-drafting",
              "D. structuring the essay",
            ],
            answer: "narrowing the topic",
          },
          {
            question:
              "Of the following parts in the process involved in writing a term paper, which comes first?",
            options: [
              "A. selecting a topic",
              "B. narrowing the topic",
              "C. editing and writing a clear copy",
              "D. getting others to read the essay and make suggestions",
            ],
            answer: "selecting a topic",
          },
          {
            question:
              "Of the following parts in the process involved in writing a term paper, which comes last?",
            options: [
              "A. structuring the essay",
              "B. selecting the useful materials",
              "C. reading widely around the topic",
              "D. gathering materials from different sources",
            ],
            answer: "structuring the essay",
          },
          {
            question:
              "Of the following parts in the process involved in writing a term paper, which comes last?",
            options: [
              "A. drafting; re-drafting",
              "B. editing and writing a clear copy",
              "C. discussing the topic with group members",
              "D. getting others to read the essay and make suggestions",
            ],
            answer: "editing and writing a clear copy",
          },
          {
            question:
              "Of the following parts in the process involved in writing a term paper, which comes last?",
            options: [
              "A. narrowing the topic",
              "B. selecting the useful materials",
              "C. reading widely around the topic",
              "D. gathering materials from different sources",
            ],
            answer: "selecting the useful materials",
          },
          {
            question:
              "Of the following parts in the process involved in writing a term paper, which comes last?",
            options: [
              "A. drafting; re-drafting",
              "B. preparing an outline",
              "C. editing and writing a clear copy",
              "D. getting others to read the essay and make suggestions",
            ],
            answer: "getting others to read the essay and make suggestions",
          },
          {
            question:
              "Sleepiness may constitute a/an hindrance to effective reading, which type?",
            options: [
              "A. traditional",
              "B. environmental",
              "C. physiological",
              "D. psychological",
            ],
            answer: "physiological",
          },
          {
            question:
              "A badly ventilated classroom may constitute a/an hindrance to effective reading, which type?",
            options: [
              "A. traditional",
              "B. environmental",
              "C. physiological",
              "D. psychological",
            ],
            answer: "environmental",
          },
          {
            question:
              "Emotional problems may constitute a/an hindrance to effective reading, which type?",
            options: [
              "A. traditional",
              "B. environmental",
              "C. physiological",
              "D. psychological",
            ],
            answer: "psychological",
          },
          {
            question:
              "Hunger may constitute a/an hindrance to effective reading, which type?",
            options: [
              "A. traditional",
              "B. environmental",
              "C. physiological",
              "D. psychological",
            ],
            answer: "physiological",
          },
          {
            question:
              "A stuffy room may constitute a/an hindrance to effective reading, which type?",
            options: [
              "A. traditional",
              "B. environmental",
              "C. physiological",
              "D. psychological",
            ],
            answer: "environmental",
          },
          {
            question:
              "Extreme cold while studying may constitute a/an hindrance to effective reading, which type?",
            options: [
              "A. traditional",
              "B. environmental",
              "C. physiological",
              "D. psychological",
            ],
            answer: "environmental",
          },
          {
            question:
              "A bad headache may constitute a/an hindrance to effective reading, which type?",
            options: [
              "A. traditional",
              "B. environmental",
              "C. physiological",
              "D. psychological",
            ],
            answer: "physiological",
          },
          {
            question:
              "A feeling that the book is too difficult may constitute a/an hindrance to effective reading, which type?",
            options: [
              "A. traditional",
              "B. environmental",
              "C. physiological",
              "D. psychological",
            ],
            answer: "psychological",
          },
          {
            question:
              "Poor ventilation may constitute a/an hindrance to effective reading, which type?",
            options: [
              "A. traditional",
              "B. environmental",
              "C. physiological",
              "D. psychological",
            ],
            answer: "environmental",
          },
          {
            question:
              "Inadequate lighting may constitute a/an hindrance to effective reading, which type?",
            options: [
              "A. traditional",
              "B. environmental",
              "C. physiological",
              "D. psychological",
            ],
            answer: "environmental",
          },
          {
            question:
              "A noisy environment may constitute a/an hindrance to effective reading, which type?",
            options: [
              "A. traditional",
              "B. environmental",
              "C. physiological",
              "D. psychological",
            ],
            answer: "environmental",
          },
          {
            question:
              "Noisy music from the next room may constitute a/an hindrance to effective reading, which type?",
            options: [
              "A. traditional",
              "B. environmental",
              "C. physiological",
              "D. psychological",
            ],
            answer: "environmental",
          },
          {
            question:
              "Stress may constitute a/an hindrance to effective reading, which type?",
            options: [
              "A. traditional",
              "B. environmental",
              "C. physiological",
              "D. psychological",
            ],
            answer: "psychological",
          },
          {
            question:
              "Illness may constitute a/an hindrance to effective reading, which type?",
            options: [
              "A. traditional",
              "B. environmental",
              "C. physiological",
              "D. psychological",
            ],
            answer: "physiological",
          },
          {
            question:
              "Longsightedness may constitute a/an hindrance to effective reading.",
            options: [
              "A. traditional",
              "B. Environmental",
              "C. physiological",
              "D. psychological",
            ],
            answer: "physiological",
          },
          {
            question:
              "Fatigue may constitute a/an hindrance to effective reading.",
            options: [
              "A. traditional",
              "B. Environmental",
              "C. physiological",
              "D. psychological",
            ],
            answer: "physiological",
          },
          {
            question:
              "Lack of interest in the subject matter may constitute a/an hindrance to effective reading.",
            options: [
              "A. traditional",
              "B. Environmental",
              "C. physiological",
              "D. psychological",
            ],
            answer: "psychological",
          },
          {
            question:
              "Shortsightedness may constitute a/an hindrance to effective reading.",
            options: [
              "A. traditional",
              "B. Environmental",
              "C. physiological",
              "D. psychological",
            ],
            answer: "physiological",
          },
          {
            question:
              "In your term paper on appropriate technology, illustrations to be found in the...",
            options: [
              "A. the introduction",
              "B. the conclusion",
              "C. the main body",
              "D. all of the above",
            ],
            answer: "the main body",
          },
          {
            question:
              "Paragraphs that summarize all the major points made in the essay and may make recommendations are found in...",
            options: [
              "A. the introduction",
              "B. the conclusion",
              "C. the main body",
              "D. all of the above",
            ],
            answer: "the conclusion",
          },
          {
            question:
              "Paragraphs that present an advanced indicator of the content and in some cases the structure of the rest of your essay are found in...",
            options: [
              "A. the introduction",
              "B. the conclusion",
              "C. the main body",
              "D. all of the above",
            ],
            answer: "the introduction",
          },
          {
            question:
              "In your term paper on appropriate technology, ‘insummary’ are likely to be found in...",
            options: [
              "A. the introduction",
              "B. the conclusion",
              "C. the main body",
              "D. all of the above",
            ],
            answer: "the conclusion",
          },
          {
            question:
              "In your term paper on appropriate technology, signal phrases like ‘to summarize’ and moves like ‘general overview’ and ‘aim’ are likely to be found in...",
            options: [
              "A. the introduction",
              "B. the conclusion",
              "C. the main body",
              "D. all of the above",
            ],
            answer: "the introduction",
          },
          {
            question:
              "In your term paper on appropriate technology, ‘area under consideration’ are likely to be found in...",
            options: [
              "A. the introduction",
              "B. the conclusion",
              "C. the main body",
              "D. all of the above",
            ],
            answer: "the introduction",
          },
          {
            question:
              "The following are inefficient reading strategies except:",
            options: [
              "A. vocalization and sub-vocalization",
              "B. phrase-by-phrase reading",
              "C. finger pointing",
              "D. regression",
            ],
            answer: "phrase-by-phrase reading",
          },
          {
            question:
              "The following are inefficient reading strategies except:",
            options: [
              "A. word-by-word reading",
              "B. vocalization and sub-vocalization",
              "C. establishing a purpose for reading",
              "D. poor visual perception",
            ],
            answer: "establishing a purpose for reading",
          },
          {
            question:
              "The following are inefficient reading strategies except:",
            options: [
              "A. word-by-word reading",
              "B. reading critically",
              "C. finger pointing",
              "D. head movement",
            ],
            answer: "reading critically",
          },
          {
            question:
              "The following are inefficient reading strategies except:",
            options: [
              "A. word-by-word reading",
              "B. vocalization and sub-vocalization",
              "C. finger pointing and head movement",
              "D. establishing a purpose for reading",
            ],
            answer: "establishing a purpose for reading",
          },
          {
            question: "The following are efficient reading strategies except:",
            options: [
              "A. paying attention to signal words/phrases",
              "B. vocalization and sub-vocalization",
              "C. phrase-by-phrase reading",
              "D. concentrating on concepts rather than the words",
            ],
            answer: "vocalization and sub-vocalization",
          },
          {
            question: "The following are efficient reading strategies except:",
            options: [
              "A. concentrating on concepts rather than the words",
              "B. establishing a purpose for reading",
              "C. finger pointing and head movement",
              "D. adjusting one's reading rate to suit the reading material",
            ],
            answer: "finger pointing and head movement",
          },
          {
            question: "The following are efficient reading strategies except:",
            options: [
              "A. adjusting one's reading rate to suit the reading material",
              "B. concentrating on concepts rather than the words",
              "C. sensitivity to the structure of texts",
              "D. going back over the words",
            ],
            answer: "going back over the words",
          },
          {
            question: "The following are efficient reading strategies except:",
            options: [
              "A. word-by-word reading",
              "B. phrase-by-phrase reading",
              "C. establishing a purpose for reading",
              "D. reading critically",
            ],
            answer: "word-by-word reading",
          },
          {
            question:
              "The following are recommended strategies in reading for academic purposes except:",
            options: [
              "A. anticipation",
              "B. skimming",
              "C. scanning",
              "D. browsing",
            ],
            answer: "browsing",
          },
          {
            question:
              "The following are recommended strategies in reading for academic purposes except:",
            options: [
              "A. identifying main ideas and supporting details",
              "B. understanding the structure of texts",
              "C. identifying the writer's attitude",
              "D. finger pointing and head movement",
            ],
            answer: "finger pointing and head movement",
          },
          {
            question:
              "The following are recommended strategies in reading for academic purposes except:",
            options: [
              "A. applying textbook reading strategies",
              "B. using word analysis",
              "C. word-by-word reading",
              "D. using underlining as a reading technique",
            ],
            answer: "word-by-word reading",
          },
          {
            question:
              "The following are recommended strategies in reading for academic purposes except:",
            options: [
              "A. identifying main ideas and supporting details",
              "B. vocalization and sub-vocalization",
              "C. understanding the structure of texts",
              "D. making notes of key points",
            ],
            answer: "vocalization and sub-vocalization",
          },
          {
            question:
              "The following are recommended strategies in reading for academic purposes except:",
            options: [
              "A. anticipation",
              "B. skimming",
              "C. scanning",
              "D. cramming",
            ],
            answer: "cramming",
          },
          {
            question:
              "None of the following are recommended strategies in reading for academic purposes except:",
            options: [
              "A. vocalization and sub-vocalization",
              "B. word-by-word reading",
              "C. finger pointing and head movement",
              "D. underlining keywords",
            ],
            answer: "underlining keywords",
          },
          {
            question:
              "All the following signal words/phrases have the function of addition except:",
            options: [
              "A. in addition",
              "B. similarly",
              "C. furthermore",
              "D. all of the above",
            ],
            answer: "all of the above",
          },
          {
            question:
              "All the following signal words/phrases have the function of contrast except:",
            options: ["A. Also", "B. moreover", "C. however", "D. in addition"],
            answer: "however",
          },
          {
            question:
              "All the following signal words/phrases have the function of LISTING except:",
            options: ["A. first", "B. next", "C. in other words", "D. finally"],
            answer: "in other words",
          },
          {
            question:
              "All the following signal words/phrases have the function of REFERRING TO PREVIOUS SENTENCES except:",
            options: [
              "A. that is to say, namely",
              "B. nevertheless",
              "C. in other words",
              "D. as follows",
            ],
            answer: "nevertheless",
          },
          {
            question:
              "All the following signal words/phrases have the function of CONTRAST except:",
            options: [
              "A. but",
              "B. and",
              "C. on the contrary",
              "D. on the other hand",
            ],
            answer: "and",
          },
        ],
      },
      {
        code: "BIO101",
        questions: [
          {
            question:
              "When first proposed, Darwin's theory of natural selection did not fully explain how evolution could occur. This was due to:",
            options: [
              "A. Darwin's failure to recognize the tendency for organisms to over-reproduce",
              "B. Darwin's initial overemphasis of the significance of genetic drift",
              "C. The fact that accurate mechanisms explaining genetic inheritance were not widely known",
              "D. The absence of accurate descriptions of the embryological development of most plants and animals",
              "E. The absence of biochemical techniques to determine the genetic similarities between species",
            ],
            answer:
              "C. The fact that accurate mechanisms explaining genetic inheritance were not widely known",
          },
          {
            question:
              "Which of the following is not a part of Darwin's theory of natural selection?",
            options: [
              "A. Individuals of a population vary",
              "B. Organisms tend to over-reproduce themselves",
              "C. There are limited resources for which individuals compete",
              "D. Modifications an organism acquires during its lifetime can be passed to its offspring",
              "E. Variations possessed by individuals of a population are heritable",
            ],
            answer:
              "D. Modifications an organism acquires during its lifetime can be passed to its offspring",
          },
          {
            question: "The evolutionary theory proposed by Charles Darwin was:",
            options: [
              "A. Change in populations through time as a result of mutations",
              "B. The spontaneous generation of new organisms",
              "C. The passing on of genes from one generation to the next",
              "D. Change in populations through time as a response to environmental change",
              "E. The development of characteristics by organisms in response to need",
            ],
            answer:
              "D. Change in populations through time as a response to environmental change",
          },
          {
            question:
              "What is the only factor that can change allele frequencies in populations to produce adaptive evolutionary change?",
            options: [
              "A. Mutation",
              "B. Gene flow",
              "C. Non-random mating",
              "D. Genetic drift",
              "E. Selection",
            ],
            answer: "E. Selection",
          },
          {
            question: "A species is defined as:",
            options: [
              "A. A population of organisms similar in size, shape, and color",
              "B. A group of organisms that live in the same habitat",
              "C. A population of organisms that are able to interbreed",
              "D. A population of organisms that have the same number of chromosomes",
              "E. A population of organisms with a common ancestor",
            ],
            answer: "C. A population of organisms that are able to interbreed",
          },
          {
            question:
              "The correct sequence from the most to the least comprehensive, of the taxonomic levels listed here is:",
            options: [
              "A. Family, phylum, class, kingdom, order, species, and genus",
              "B. Kingdom, phylum, class, order, family, genus, and species",
              "C. Kingdom, phylum, order, class, family, genus, and species",
              "D. Phylum, kingdom, order, class, species, family, and genus",
              "E. Phylum, family, class, order, kingdom, genus, and species",
            ],
            answer:
              "B. Kingdom, phylum, class, order, family, genus, and species",
          },
          {
            question: "Organisms having many organelles are called:",
            options: [
              "A. Prokaryotes",
              "B. Eukaryotes",
              "C. Protist",
              "D. Unicellular",
            ],
            answer: "B. Eukaryotes",
          },
          {
            question:
              "Branch of biology 'paleontology' deals with the study of:",
            options: [
              "A. Insects",
              "B. Fossils",
              "C. Parasites",
              "D. Welfare of mankind",
            ],
            answer: "B. Fossils",
          },
          {
            question: "Study of life in a scientific manner is called:",
            options: [
              "A. Biology",
              "B. Geology",
              "C. Anatomy",
              "D. Entomology",
            ],
            answer: "A. Biology",
          },
          {
            question:
              "Example of an organism which shows colonial organization is:",
            options: ["A. Amoeba", "B. Euglena", "C. Paramecium", "D. Volvox"],
            answer: "D. Volvox",
          },
          {
            question: "Branch of biology 'embryology' deals with the study of:",
            options: [
              "A. Study of tissues",
              "B. Study of organelles",
              "C. Study of genetics",
              "D. Study of embryo development",
            ],
            answer: "D. Study of embryo development",
          },
          {
            question:
              "The group of similar plants which breed freely among themselves constitute a:",
            options: ["A. Species", "B. Family", "C. Order", "D. Genus"],
            answer: "A. Species",
          },
          {
            question:
              "The five kingdom arrangement of organisms was proposed by:",
            options: ["A. Whittakar", "B. John Ray", "C. Whitter"],
            answer: "A. Whittakar",
          },
          {
            question:
              "Which of the following definitions covers a greater number of organisms?",
            options: ["A. Class", "B. Genus", "C. Order", "D. Family"],
            answer: "C. Order",
          },
          {
            question: "Basic taxonomy unit is:",
            options: ["A. Kingdom", "B. Genus", "C. Species", "D. Order"],
            answer: "C. Species",
          },
          {
            question:
              "The replacement of two kingdom classification by five kingdom classification was proposed in the year:",
            options: ["A. 1853", "B. 1859", "C. 1969", "D. 1863"],
            answer: "C. 1969",
          },
          {
            question:
              "An example of the artificial system of classification is:",
            options: [
              "A. Bentham and Hooker",
              "B. Linnaeus system",
              "C. Engler and Prantl",
              "D. Hutchinson",
            ],
            answer: "B. Linnaeus system",
          },
          {
            question: "The first step in taxonomy is:",
            options: [
              "A. Naming",
              "B. Description",
              "C. Identification",
              "D. Classification",
            ],
            answer: "C. Identification",
          },
          {
            question:
              "Binomial nomenclature means writing the name of a plant in two words which designate:",
            options: [
              "A. Order and family",
              "B. Family and genus",
              "C. Species and variety",
              "D. Genus and species",
            ],
            answer: "D. Genus and species",
          },
          {
            question:
              "What is the correct descending sequence of taxonomic categories?",
            options: [
              "A. Division-class-order-family-tribe-genus",
              "B. Class-order-division-family-species-tribe",
              "C. Tribe-genus-class-division-family-order",
              "D. Family-order-genus-order-division-class",
            ],
            answer: "A. Division-class-order-family-tribe-genus",
          },
          {
            question: "The term systematic was proposed by:",
            options: [
              "A. John Ray",
              "B. Adanson",
              "C. De-Vries",
              "D. Julian Huxley",
            ],
            answer: "B. Adanson",
          },
          {
            question: "Modern classification is based on:",
            options: [
              "A. Physiology",
              "B. Fossils",
              "C. Phylogeny",
              "D. Morphology",
            ],
            answer: "C. Phylogeny",
          },
          {
            question:
              "A small group of individuals or organisms which resemble closely in structure as well as function is called:",
            options: ["A. Phylum", "B. Family", "C. Species", "D. Genus"],
            answer: "D. Genus",
          },
          {
            question: "Taxon is:",
            options: [
              "A. A genus",
              "B. A species",
              "C. A taxonomic unit",
              "D. A taxonomic category of any rank",
            ],
            answer: "C. A taxonomic unit",
          },
          {
            question: "‘Systema Naturae’ was written by:",
            options: [
              "A. Linnaeus",
              "B. Charles Darwin",
              "C. Aristotle",
              "D. Wallace",
            ],
            answer: "A. Linnaeus",
          },
          {
            question:
              "A system of classification based on all important morphological characters is termed as:",
            options: [
              "A. Artificial system",
              "B. Natural system",
              "C. Genetic system",
              "D. Both A and B",
            ],
            correctanswer: "B. Natural system",
          },
          {
            question: "Extra nuclear DNA is found in:",
            options: [
              "a) Chloroplast",
              "b) Endoplasmic reticulum",
              "c) Ribosomes",
              "d) Nucleus",
            ],
            answer: "a) Chloroplast",
          },
          {
            question: "Cell theory states that:",
            options: [
              "a) All cells have nuclei",
              "b) All cells are living",
              "c) Cell reproduce by mitosis and meiosis",
              "d) Cells are fundamental structural units of plants and animals",
            ],
            answer:
              "d) Cells are fundamental structural units of plants and animals",
          },
          {
            question: "Mitochondria were first seen by:",
            options: [
              "a) Robert Hooke",
              "b) Robert Brown",
              "c) Lipmann",
              "d) Altmann",
            ],
            answer: "d) Altmann",
          },
          {
            question: "Prokaryotic cells do not possess:",
            options: [
              "a) Cell wall",
              "b) Nuclear membrane",
              "c) Cytoplasm",
              "d) Plasma membrane",
            ],
            answer: "b) Nuclear membrane",
          },
          {
            question: "Plasma membrane is composed of:",
            options: [
              "a) Protein",
              "b) Lipids",
              "c) Cellulose",
              "d) Protein and Lipids",
            ],
            answer: "d) Protein and Lipids",
          },
          {
            question:
              "Cellular organelles containing hydrolytic enzymes are called:",
            options: [
              "a) Peroxisomes",
              "b) Lysosomes",
              "c) Ribosomes",
              "d) Mesosomes",
            ],
            answer: "b) Lysosomes",
          },
          {
            question:
              "The sedimentation constant of ribosome is generally 70S. It breaks up into two subunits whose sedimentation constants are:",
            options: [
              "a) 50 S and 20S",
              "b) 40 S and 30 S",
              "c) 60 S and 10 S",
              "d) 50 S and 30 S",
            ],
            answer: "d) 50 S and 30 S",
          },
          {
            question: "Ribosomes help in:",
            options: [
              "a) Photosynthesis",
              "b) Protein synthesis",
              "c) Lipid Synthesis",
              "d) Respiration",
            ],
            answer: "b) Protein synthesis",
          },
          {
            question: "Food is converted to energy in:",
            options: [
              "a) Nucleus",
              "b) Nucleolus",
              "c) Chloroplast",
              "d) Mitochondria",
            ],
            answer: "d) Mitochondria",
          },
          {
            question: "To enter or leave a cell, substances must pass through?",
            options: [
              "a) Microtubule",
              "b) The Golgi apparatus",
              "c) A ribosome",
              "d) The nucleus",
              "e) The plasma membrane",
            ],
            answer: "e) The plasma membrane",
          },
          {
            question:
              "Bacterial cells are prokaryotic; in comparison to a typical eukaryotic cell, they would:",
            options: [
              "a) Be smaller",
              "b) Have a smaller nucleus",
              "c) Lack a plasma membrane",
              "d) Have fewer internal membranous compartments",
              "e) Have a greater variety of organelles",
            ],
            answer: "a) Be smaller",
          },
          {
            question:
              "You would expect a cell with an extensive Golgi apparatus to:",
            options: [
              "a) Make a lot of ATP",
              "b) Secrete a lot of material",
              "c) Move actively",
              "d) Perform photosynthesis",
              "e) Store large quantities of food",
            ],
            answer: "b) Secrete a lot of material",
          },
          {
            question:
              "Which of the following correctly matches an organelle with its function?",
            options: [
              "a) Mitochondrion - Photosynthesis",
              "b) Nucleus - Cellular respiration",
              "c) Ribosome - Manufacture of lipids",
              "d) Lysosome - Movement",
              "e) Central vacuole - Storage",
            ],
            answer: "e) Central vacuole - Storage",
          },
          {
            question:
              "Of the following organelles, which group is involved in manufacturing substances needed by the cell?",
            options: [
              "a) Lysosome, vacuole, ribosome",
              "b) Ribosome, rough ER, smooth ER",
              "c) Vacuole, rough ER, smooth ER",
              "d) Smooth ER, ribosome, vacuole",
              "e) Rough ER, lysosome, vacuole",
            ],
            answer: "b) Ribosome, rough ER, smooth ER",
          },
          {
            question:
              "A cell has mitochondria, ribosomes, smooth and rough ER, and other parts. Based on this information, it could not be:",
            options: [
              "a) A cell from a pine tree",
              "b) A grasshopper cell",
              "c) A yeast (fungus) cell",
              "d) A bacterium",
              "e) Actually, it could be any of the above",
            ],
            answer: "d) A bacterium",
          },
          {
            question:
              "The electron microscope has been particularly useful in studying bacteria, because:",
            options: [
              "a) Electrons can penetrate tough bacterial cell walls",
              "b) Bacteria are so small",
              "c) Bacteria move so quickly they are hard to photograph",
              "d) With few organelles present, bacteria are distinguished by differences in individual macromolecules",
              "e) Their organelles are small and tightly packed together",
            ],
            answer: "b) Bacteria are so small",
          },
          {
            question:
              "Cell fractionation is the most appropriate procedure for preparing ____ for study.",
            options: [
              "a) Isolated cells which are normally found tightly attached to neighboring cells",
              "b) Cells without a functional cytoskeleton",
              "c) Isolated organelles",
              "d) The basic macromolecules",
              "e) Bone and other similar cells which are situated within a mineral framework",
            ],
            answer: "c) Isolated organelles",
          },
          {
            question:
              "Which of the following clues would tell you whether a cell is prokaryotic or eukaryotic?",
            options: [
              "a) The presence or absence of a rigid cell wall",
              "b) Whether or not the cell is partitioned by internal membranes",
              "c) The presence or absence of ribosomes",
              "d) Whether or not the cell carries out cellular metabolism",
              "e) Whether or not the cell contains DNA",
            ],
            answer:
              "b) Whether or not the cell is partitioned by internal membranes",
          },
          {
            question:
              "Sara would like to film the movement of chromosomes during cell division. Her best choice for a microscope would be:",
            options: [
              "a) Light microscope, because of its resolving power",
              "b) Transmission electron microscope, because of its magnifying power",
              "c) Scanning electron microscope, because the specimen is alive",
              "d) Transmission electron microscope, because of its great resolving power",
              "e) Light microscope, because the specimen is alive",
            ],
            answer: "e) Light microscope, because the specimen is alive",
          },
          {
            question: "Viruses are:",
            options: [
              "a) obligate parasites",
              "b) free living",
              "c) both free living and parasitic",
              "d) none of these",
            ],
            answer: "a) obligate parasites",
          },
          {
            question: "A fully formed infectious viral particle is called as:",
            options: ["a) viroid", "b) virusoid", "c) virion", "d) capsid"],
            answer: "c) virion",
          },
          {
            question: "The genetic material of viruses consists of either:",
            options: [
              "a) DNA",
              "b) RNA",
              "c) DNA or RNA",
              "d) ss DNA or ss RNA",
            ],
            answer: "c) DNA or RNA",
          },
          {
            question: "The protein coat of virus is called as:",
            options: [
              "a) nucleid",
              "b) capsid",
              "c) capsomere",
              "d) outer envelope",
            ],
            answer: "b) capsid",
          },
          {
            question: "Which of the following is the largest virus?",
            options: [
              "a) herpes virus",
              "b) arbovirus",
              "c) mumps virus",
              "d) pox virus",
            ],
            answer: "d) pox virus",
          },
          {
            question: "Tobacco mosaic virus is:",
            options: [
              "a) spherical shaped",
              "b) rod shaped",
              "c) cuboidal",
              "d) oval shaped",
            ],
            answer: "b) rod shaped",
          },
          {
            question: "The virus with the smallest genome is:",
            options: [
              "a) circovirus",
              "b) mimivirus",
              "c) herpes virus",
              "d) rabies virus",
            ],
            answer: "a) circovirus",
          },
          {
            question: "The functions of capsid include:",
            options: [
              "a) protect genetic material from nuclease attack",
              "b) attachment and injection of viral genome into the host",
              "c) determines the antigenic specificity of virus",
              "d) All of the above",
            ],
            answer: "d) All of the above",
          },
          {
            question:
              "The spike-like projections seen on the outer surface of enveloped viruses are called:",
            options: [
              "a) capsomeres",
              "b) peplomers",
              "c) proteomeres",
              "d) viroid",
            ],
            answer: "b) peplomers",
          },
          {
            question: "Viruses that attack bacteria are called:",
            options: [
              "a) Lysophage",
              "b) bacteriophage",
              "c) virophage",
              "d) none of these",
            ],
            answer: "b) bacteriophage",
          },
          {
            question: "T2 phage is a:",
            options: [
              "a) ds DNA phage",
              "b) ss DNA phage",
              "c) ss RNA phage",
              "d) ds RNA phage",
            ],
            answer: "a) ds DNA phage",
          },
          {
            question:
              "Viral genome attached to the bacterial genome is termed as:",
            options: [
              "a) prophage",
              "b) lysogeny",
              "c) lytic cycle",
              "d) virulent phages",
            ],
            answer: "a) prophage",
          },
          {
            question: "TMV is a:",
            options: [
              "a) DNA virus",
              "b) RNA virus",
              "c) ss DNA or ds DNA",
              "d) bacteriophage",
            ],
            answer: "b) RNA virus",
          },
          {
            question:
              "Bacteriophages that induce bacterial cell lysis are called:",
            options: [
              "a) temperate phages",
              "b) virulent phages",
              "c) lysogenic phages",
              "d) viroids",
            ],
            answer: "b) virulent phages",
          },
          {
            question: "Infectious RNA particles without protein coat are:",
            options: ["a) viroid", "b) virion", "c) virusoid", "d) prion"],
            answer: "a) viroid",
          },
          {
            question: "Kingdom Protista includes organisms like:",
            options: [
              "a) Euglena, Spirogyra and Penicillium",
              "b) Amoeba, Spirogyra and Penicillium",
              "c) Amoeba, Euglena and Penicillium",
              "d) Amoeba, Euglena and Diatoms",
            ],
            answer: "d) Amoeba, Euglena and Diatoms",
          },
          {
            question: "Protista differs from monera in having:",
            options: [
              "a) cell wall",
              "b) Nuclear membrane",
              "c) Flagella",
              "d) autotrophic nutrition",
            ],
            answer: "b) Nuclear membrane",
          },
          {
            question: "Single celled eukaryotes are included in:",
            options: ["a) fungi", "b) archae", "c) monera", "d) protista"],
            answer: "d) protista",
          },
          {
            question: "The slime moulds are characterized by the presence of:",
            options: [
              "a) Elaters",
              "b) pseudoelaters",
              "c) capillitium",
              "d) all of these",
            ],
            answer: "d) all of these",
          },
          {
            question: "Which of the following is not a character of Protista?",
            options: [
              "a) Protista are prokaryotic",
              "b) Body organization is cellular",
              "c) Some protists have cell walls",
              "d) Membrane bound organelles are present in cells",
            ],
            answer: "a) Protista are prokaryotic",
          },
          {
            question:
              "Which of the following combination of characters is true for slime moulds?",
            options: [
              "a) Parasitic, Plasmodium with true walls, spores dispersed by air currents",
              "b) Saprophytic, Plasmodium without walls, spores dispersed by water",
              "c) Parasitic, Plasmodium without walls, spores dispersed by water",
              "d) Saprophytic, Plasmodium without walls, spores dispersed by air currents",
            ],
            answer:
              "d) Saprophytic, Plasmodium without walls, spores dispersed by air currents",
          },
          {
            question: "Kingdom Protista includes:",
            options: [
              "a) life cycle showing sporic meiosis",
              "b) life cycle showing gametic meiosis",
              "c) life cycle showing zygotic meiosis",
              "d) both b and c",
            ],
            answer: "d) both b and c",
          },
          {
            question: "In diatoms, auxospores help in:",
            options: [
              "a) metabolism",
              "b) spore formation",
              "c) reproduction",
              "d) growth",
            ],
            answer: "d) growth",
          },
          {
            question:
              "Plants which are not differentiated into roots, stem and leaves are grouped under:",
            options: [
              "a) Gymnosperms",
              "b) Pteridophytes",
              "c) Thallophytes",
              "d) Spermatophytes",
            ],
            answer: "c) Thallophytes",
          },
          {
            question: "Which are the most primitive group of algae?",
            options: [
              "a) Blue green algae",
              "b) Red algae",
              "c) Brown algae",
              "d) Green algae",
            ],
            answer: "a) Blue green algae",
          },
          {
            question: "Iodine is obtained from:",
            options: [
              "a) Ulothrix",
              "b) Ectocarpus",
              "c) Laminaria",
              "d) Oedogonium",
            ],
            answer: "c) Laminaria",
          },
          {
            question:
              "Which of the following is the most advanced group of algae?",
            options: [
              "a) Cyanophyta",
              "b) Rhodophyta",
              "c) Phaeophyta",
              "d) Chlorophyta",
            ],
            answer: "b) Rhodophyta",
          },
          {
            question:
              "Which of the algae is responsible for red colour of red sea?",
            options: [
              "a) Chlamydomonas brauii",
              "b) Trichodesmium erythrium",
              "c) Ulothrix zonata",
              "d) None of the above",
            ],
            answer: "b) Trichodesmium erythrium",
          },
          {
            question: "One of the following is present in blue green algae:",
            options: [
              "a) Starch",
              "b) Cyanophacean granule",
              "c) Any polysaccharide",
              "d) Floridian starch",
            ],
            answer: "b) Cyanophacean granule",
          },
          {
            question: "Ability to fix atmospheric nitrogen is found in:",
            options: [
              "a) Leaves of some crop plants",
              "b) Chlorella",
              "c) Some marine red algae",
              "d) Some blue green algae",
            ],
            answer: "d) Some blue green algae",
          },
          {
            question: "Origin and evolution of sex in algae is best seen in:",
            options: [
              "a) Blue green algae",
              "b) Green algae",
              "c) Red algae",
              "d) Brown algae",
            ],
            answer: "b) Green algae",
          },
          {
            question: "Kelps is obtained from:",
            options: [
              "a) Algae",
              "b) Marine algae",
              "c) Aquatic algae",
              "d) Lichens",
            ],
            answer: "b) Marine algae",
          },
          {
            question: "Algae differ from Riccia and Marchantia in having:",
            options: [
              "a) Multicellular body",
              "b) Multicellular sex organs",
              "c) Pyrenoids in the cell",
              "d) Thalloid body",
            ],
            answer: "c) Pyrenoids in the cell",
          },
          {
            question: "Heterocysts are found in Anaebaena and are:",
            options: [
              "a) Green and thin walled",
              "b) Green and thick walled",
              "c) Colourless and thin walled",
              "d) Colourless and thick walled",
            ],
            answer: "d) Colourless and thick walled",
          },
          {
            question: "Zygotic meiosis is a characteristic feature of:",
            options: [
              "a) Algae",
              "b) Bryophytes",
              "c) Pteridophytes",
              "d) Gymnosperms",
            ],
            answer: "a) Algae",
          },
          {
            question: "Cephaleoures is:",
            options: [
              "a) An epiphytic green algae",
              "b) A parasitic green algae",
              "c) A freshwater green algae",
              "d) A colourless red algae",
            ],
            answer: "a) An epiphytic green algae",
          },
          {
            question:
              "Sargasso sea is named after an algae Sargassum, which is a:",
            options: [
              "a) Green algae",
              "b) Brown algae",
              "c) Red algae",
              "d) Blue green algae",
            ],
            answer: "b) Brown algae",
          },
          {
            question:
              "The unique feature of bryophytes compared to other green plant group is that:",
            options: [
              "a) They produce spores",
              "b) They lack vascular tissue",
              "c) They lack roots",
              "d) Their sporophyte is attached to the gametophyte",
            ],
            answer: "b) They lack vascular tissue",
          },
          {
            question: "Which group of plants constitute the lower bryophytes?",
            options: [
              "a) Liverworts",
              "b) Mosses",
              "c) Anthocerotales",
              "d) Jungermaniales",
            ],
            answer: "a) Liverworts",
          },
          {
            question: "Liverworts are closely related to:",
            options: ["a) Algae", "b) Fungi", "c) Lichens", "d) Mosses"],
            answer: "a) Algae",
          },
          {
            question: "The first land inhabitant plants are:",
            options: [
              "a) Pteridophytes",
              "b) Bryophytes",
              "c) Gymnosperms",
              "d) Angiosperms",
            ],
            answer: "b) Bryophytes",
          },
          {
            question:
              "The only positive evidence of aquatic ancestry of bryophyte is:",
            options: [
              "a) Thread like protonema",
              "b) Green colour",
              "c) Some forms are still aquatic",
              "d) Ciliated sperms",
            ],
            answer: "d) Ciliated sperms",
          },
          {
            question:
              "To which group would you assign a plant which produces spores and embryos, but lacks seeds and vasculature?",
            options: [
              "a) Algae",
              "b) Fungi",
              "c) Pteridophyte",
              "d) Bryophyte",
            ],
            answer: "d) Bryophyte",
          },
          {
            question: "Which is wrong in respect to bryophytes?",
            options: [
              "a) Water is essential for fertilization",
              "b) Presence of archegonia",
              "c) Presence of ciliated sperms",
              "d) Presence of autotrophic independent sporophyte",
            ],
            answer: "d) Presence of autotrophic independent sporophyte",
          },
          {
            question: "Conducting tissue in moss is made up of:",
            options: [
              "a) Xylem and phloem",
              "b) Xylem",
              "c) Collenchyma",
              "d) Parenchyma",
            ],
            answer: "d) Parenchyma",
          },
          {
            question: "Which of the following is diploid in moss plant?",
            options: [
              "a) Spore",
              "b) Leaves",
              "c) Spore mother cell",
              "d) Gametes",
            ],
            answer: "c) Spore mother cell",
          },
          {
            question:
              "A specialized organ of the sporophyte for attachment to the gametophyte is called:",
            options: ["a) Stalk", "b) Foot", "c) Apophysis", "d) Root"],
            answer: "b) Foot",
          },
          {
            question:
              "If the chromosome number in the leaf of Funaria is 20, what will be the chromosome number in the spores?",
            options: ["a) 20", "b) 40", "c) 10", "d) 5"],
            answer: "c) 10",
          },
          {
            question: "The protonema is a stage in the life cycle of:",
            options: [
              "a) Riccia",
              "b) Funaria",
              "c) All bryophytes",
              "d) Cycas",
            ],
            answer: "c) All bryophytes",
          },
          {
            question:
              "If the leaf of Funaria has 5 chromosomes, the primary protonema will have:",
            options: ["a) 10", "b) 5", "c) 15", "d) 20"],
            answer: "a) 10",
          },
          {
            question: "Bryophytes differ from pteridophytes in being:",
            options: [
              "a) Non-vascular",
              "b) Seeded",
              "c) Vascular",
              "d) Sporophytic",
            ],
            answer: "a) Non-vascular",
          },
          {
            question:
              "In which of the following groups would you place a plant which produces seeds but lacks flowers?",
            options: [
              "a) Fungi",
              "b) Pteridophytes",
              "c) Bryophytes",
              "d) Gymnosperms",
            ],
            answer: "d) Gymnosperms",
          },
          {
            question: "A gymnospermic plant:",
            options: [
              "a) Bears flowers",
              "b) Exhibits no vascular tissue",
              "c) Produces seeds in cones",
              "d) Does not produce seeds in cones",
            ],
            answer: "c) Produces seeds in cones",
          },
          {
            question:
              "Megasporophyll is the term used in gymnosperm to denote:",
            options: [
              "a) Carpels",
              "b) Stamens",
              "c) Leaves",
              "d) Female cone",
            ],
            answer: "d) Female cone",
          },
          {
            question: "The megasporium is also known as:",
            options: ["a) Ovule", "b) Nucellus", "c) Fruit", "d) Micropyle"],
            answer: "b) Nucellus",
          },
          {
            question: "Perisperm is:",
            options: [
              "a) Outgrowth of the outer integument",
              "b) Surviving nucellus in the seed",
              "c) Outgrowth of funicles",
              "d) All of these",
            ],
            answer: "b) Surviving nucellus in the seed",
          },
          {
            question: "Gymnosperms differ from angiosperms in:",
            options: [
              "a) Having seeds",
              "b) Having fruits",
              "c) Having naked ovules",
              "d) None of these",
            ],
            answer: "c) Having naked ovules",
          },
          {
            question: "Alternation of generation is exhibited by:",
            options: [
              "a) Bryophytes",
              "b) Pteridophytes",
              "c) Gymnosperms",
              "d) All plants",
            ],
            answer: "d) All plants",
          },
          {
            question:
              "In which of the following features do angiosperms resemble gymnosperms?",
            options: [
              "a) Presence of ovules",
              "b) Presence of vessels",
              "c) Nature of endosperm",
              "d) Mode of fertilization",
            ],
            answer: "a) Presence of ovules",
          },
          {
            question: "Endosperm in gymnosperms is formed:",
            options: [
              "a) At the time of fertilization",
              "b) Before fertilization",
              "c) After fertilization",
              "d) Along with the development of the embryo",
            ],
            answer: "c) After fertilization",
          },
          {
            question: "In gymnosperms, pollination is exclusively by:",
            options: ["a) Animals", "b) Wind", "c) Insects", "d) Water"],
            answer: "b) Wind",
          },
          {
            question: "Phloem of gymnosperms differs from angiosperms in:",
            options: [
              "a) Having parenchyma",
              "b) Having no companion cells",
              "c) Having no sieve tubes",
              "d) Having no sclerenchyma",
            ],
            answer: "b) Having no companion cells",
          },
          {
            question: "Largest sperms are found in:",
            options: ["a) Pinus", "b) Cedrus", "c) Cycas", "d) Gnetum"],
            answer: "c) Cycas",
          },
          {
            question: "Zooidogamy is seen in:",
            options: ["a) Cycas", "b) Gnetum", "c) Pinus", "d) Angiosperms"],
            answer: "a) Cycas",
          },
          {
            question: "Coralloid roots are found in:",
            options: ["a) Cycas", "b) Pinus", "c) Dryopteris", "d) Lycopodium"],
            answer: "a) Cycas",
          },
          {
            question: "The most advanced order in gymnosperms is:",
            options: [
              "a) Cycadales",
              "b) Coniferales",
              "c) Gnetales",
              "d) Taxales",
            ],
            answer: "c) Gnetales",
          },
          {
            question: "Angiosperms differ from gymnosperms in having:",
            options: [
              "a) Fruits",
              "b) Cotyledon",
              "c) Tracheid",
              "d) Broad leaves",
            ],
            answer: "a) Fruits",
          },
          {
            question:
              "If seed is defined as an ovule modified as a result of fertilization, one may expect to find seed in:",
            options: [
              "a) All vascular plants",
              "b) Angiosperm only",
              "c) Gymnosperm only",
              "d) Phanerogams",
            ],
            answer: "a) All vascular plants",
          },
          {
            question:
              "The branch of botany that deals with the form of the plant is known as:",
            options: [
              "a) Physiology",
              "b) Anatomy",
              "c) Morphology",
              "d) Cytology",
            ],
            answer: "c) Morphology",
          },
          {
            question:
              "The roots which develop from any portion of the plant except the radical are known as:",
            options: [
              "a) Tap roots",
              "b) Stilt roots",
              "c) Fibrous roots",
              "d) Adventitious roots",
            ],
            answer: "d) Adventitious roots",
          },
          {
            question: "The arrangement of leaves on branches is called:",
            options: [
              "a) Phyllotaxy",
              "b) Vernation",
              "c) Venation",
              "d) Phytotaxy",
            ],
            answer: "a) Phyllotaxy",
          },
          {
            question: "Bulb is a modification of:",
            options: ["a) Root", "b) Stem", "c) Radicle", "d) Plumule"],
            answer: "b) Stem",
          },
        ],
      },
      {
        code: "GNS103",
        questions: [
          {
            question: "A newspaper is a publication that is issued",
            options: ["Daily or Weekly", "Monthly", "Annually", "Biannually"],
            answer: "Daily or Weekly",
          },
          {
            question: "Most serials especially journals are acquired through",
            options: [
              "Donation",
              "Subscription",
              "Exchange",
              "Interlibrary loan",
            ],
            answer: "Subscription",
          },
          {
            question:
              "One of the factors that affect the production and acquisition of serials is:",
            options: [
              "Constant change of serials title",
              "Serials colour",
              "Low cost",
              "Lack of readership",
            ],
            answer: "Constant change of serials title",
          },
          {
            question: "A major advantage of Electronic Serials is that:",
            options: [
              "they can also be accessed from outside the library",
              "they are cheaper",
              "On-line articles are difficult to access",
              "None of the above",
            ],
            answer: "they can also be accessed from outside the library",
          },
          {
            question: "The Reference unit houses reference materials that are:",
            options: [
              "Meant only for consultation",
              "Meant for borrowing",
              "For binding",
              "for reserve",
            ],
            answer: "Meant only for consultation",
          },
          {
            question:
              "are reference materials that give general background information on a topic",
            options: ["Dictionaries", "Directories", "Encyclopedia", "Index"],
            answer: "Encyclopedia",
          },
          {
            question: "Is an example of a general encyclopedia",
            options: [
              "Encyclopedia of Biology",
              "Encyclopedia Britannica",
              "Encyclopedia of Agriculture",
              "Encyclopedia of Forestry",
            ],
            answer: "Encyclopedia Britannica",
          },
          {
            question:
              "Provide basics data and statistics on topics such as education, health etc and published annually",
            options: ["Abstracts", "Indexes", "Yearbooks", "Handbooks"],
            answer: "Yearbooks",
          },
          {
            question: "Bibliography refers to:",
            options: [
              "A list of works complied on some common organizing principle, such as authorship, subject etc.",
              "A book containing lists of names of residents, businesses organizations etc.",
              "A book of language which provides information regarding the meaning, origin, spellings etc",
              "Material that gives general background information on a topic.",
            ],
            answer:
              "A list of works complied on some common organizing principle, such as authorship, subject etc.",
          },
          {
            question:
              "The following are advantages of using Non-print resources except:",
            options: [
              "Aid retention",
              "preservation",
              "Group instruction",
              "Erratic power supply",
            ],
            answer: "Erratic power supply",
          },
          {
            question:
              "One of the following is not part of audio-visual resources",
            options: [
              "Television",
              "Video recordings",
              "Digital media",
              "World Atlas",
            ],
            answer: "World Atlas",
          },
          {
            question:
              "Physical parts of a book consist of the following except:",
            options: ["Dust jacket", "Binding", "publisher", "spine"],
            answer: "publisher",
          },
          {
            question: "Binding is:",
            options: [
              "That part of a book which holds the printed sheets together",
              "The edge of the book that holds the printed sheets together",
              "What contains the intellectual information",
              "A blank leaf found at the beginning and end of a book.",
            ],
            answer:
              "That part of a book which holds the printed sheets together",
          },
          {
            question:
              "Books as the oldest forms of printed media include the following sub types except:",
            options: ["Monographs", "Textbooks", "Reference books", "Realia"],
            answer: "Realia",
          },
          {
            question: "Copyright page is also known as:",
            options: ["Fly leaf", "Preface", "Title page", "Verso page"],
            answer: "Verso page",
          },
          {
            question: "Cartographic materials are also known as:",
            options: [
              "Maps",
              "Audio-visual materials",
              "Objects",
              "None of the above",
            ],
            answer: "Maps",
          },
          {
            question: "FUTA library was opened to users on:",
            options: ["1983", "1993", "1981", "2003"],
            answer: "1983",
          },
          {
            question: "National Libraries are also known as:",
            options: [
              "Virtual libraries",
              "Special libraries",
              "Depository",
              "Archival libraries",
            ],
            answer: "Depository",
          },
          {
            question: "The word library is from a:",
            options: [
              "German word",
              "French word",
              "Latin word",
              "Indonesia word",
            ],
            answer: "Latin word",
          },
          {
            question: "The word liber means:",
            options: ["Book", "Library", "Literature", "All of the above"],
            answer: "Book",
          },
          {
            question: "All these are functions of library except",
            options: [
              "Provision of seating and reading facilities",
              "Provision of reference services",
              "Keeping of academic records of students",
              "Provision of users education",
            ],
            answer: "Keeping of academic records of students",
          },
          {
            question: "Travel guide is an example of",
            options: [
              "Biographical reference source",
              "Geographical reference source",
              "Literature search tool",
              "Electro basic background reference source",
            ],
            answer: "Geographical reference source",
          },
          {
            question: "Types of library can depend on the following except",
            options: [
              "Types of services rendered to users",
              "Types of collections in the library",
              "Types of users",
              "Gender of the user",
            ],
            answer: "Gender of the user",
          },
          {
            question: "FUTA library is an example of............",
            options: [
              "School library",
              "Public library",
              "Special library",
              "Academic library",
            ],
            answer: "Academic library",
          },
          {
            question:
              "A journal can be found in ............. unit of a library",
            options: ["Circulation", "Reference", "Serial", "Porters"],
            answer: "Reference",
          },
          {
            question: "ISBN means ...............",
            options: [
              "International Standard Book Number",
              "International Standard Beaucratic Number",
              "International Standard Backlog Number",
              "International Standard Backcode Number",
            ],
            answer: "International Standard Book Number",
          },
          {
            question:
              "Transparency is an example of ........... form of recording knowledge",
            options: [
              "Print",
              "Non-print",
              "Both a and b",
              "None of the above",
            ],
            answer: "Non-print",
          },
          {
            question:
              "The library that acts as national information bank is ............",
            options: [
              "Public library",
              "National library",
              "National Institute of Information",
              "All of the above",
            ],
            answer: "National library",
          },
          {
            question:
              "A place where we have large number of historical records is called ................",
            options: [
              "Public library",
              "Archive",
              "National library",
              "School library",
            ],
            answer: "Archive",
          },
          {
            question:
              "Which unit in the library is responsible for the processing of books?",
            options: [
              "Serial unit are issued",
              "Circulation unit",
              "Reference unit",
              "Cataloguing and Classification unit",
            ],
            answer: "Cataloguing and Classification unit",
          },
          {
            question:
              "Users normally keep their personal belongings when entering the Library in the ............",
            options: [
              "Porters unit",
              "Cloak room",
              "Security room",
              "Circulation desk",
            ],
            answer: "Cloak room",
          },
          {
            question:
              "Works on a single subject or aspect of a subject are called ...........",
            options: [
              "Monographs",
              "Textbooks",
              "Reference books",
              "Pamphlets",
            ],
            answer: "Monographs",
          },
          {
            question:
              "A term used for some geographical reference sources are........",
            options: [
              "Cartographic sources",
              "Maps and Atlases",
              "Locational gazetteers",
              "Bibliographies",
            ],
            answer: "Cartographic sources",
          },
          {
            question:
              "Reference sources that provide information on individuals are called ...............",
            options: [
              "Fact ready reference sources",
              "Background reference sources",
              "Biographical reference sources",
              "Literature search tools",
            ],
            answer: "Biographical reference sources",
          },
          {
            question:
              "The index consulted by library staff to locate serial materials is..............",
            options: ["Kardex", "Catalogue", "Library card", "OPAC"],
            answer: "Kardex",
          },
          {
            question:
              "The maximum number of books that undergraduate can borrow in the library is ..............",
            options: ["Five", "Three", "Four", "Two"],
            answer: "Two",
          },
          {
            question:
              "Charging and discharging are performed in ............... unit of the library",
            options: ["Reference", "Acquisition", "Serial", "Circulation"],
            answer: "Circulation",
          },
          {
            question:
              "The skills combined in locating and retrieving information is called ......................",
            options: [
              "Information literacy",
              "Information process",
              "Information awareness",
              "Information protocol",
            ],
            answer: "Information literacy",
          },
          {
            question: "A library without wall is called.......",
            options: [
              "Digital library",
              "Electronic library",
              "Virtual library",
              "Public library",
            ],
            answer: "Virtual library",
          },
          {
            question:
              "A book borrowed by undergraduate will be for a period of ...............",
            options: ["Three weeks", "Four weeks", "Two weeks", "One week"],
            answer: "Two weeks",
          },
          {
            question:
              "The followings are essential parts of a library website except ............",
            options: [
              "Collection of materials",
              "User support",
              "Privacy and security",
              "Dynamic and static contents",
            ],
            answer: "Collection of materials",
          },
          {
            question:
              "A library designed to support a specialized field of study is called ...........",
            options: [
              "Special library",
              "Public library",
              "School library",
              "Academic library",
            ],
            answer: "Special library",
          },
          {
            question: "................ is not a type of library",
            options: [
              "Digital library",
              "Electronic library",
              "Virtual library",
              "none of the above",
            ],
            answer: "none of the above",
          },
          {
            question:
              "Selective dissemination of information is a typical library service performed mostly in the ........... library",
            options: ["Public", "Special", "Private", "Digital"],
            answer: "Special",
          },
          {
            question:
              "............... is not one of the functions of the circulation unit in the library",
            options: [
              "responding to users’ questions",
              "Charging and discharging of library materials",
              "Registration of users",
              "none of the above",
            ],
            answer: "none of the above",
          },
          {
            question:
              "User education comprises all of the following except ..............",
            options: [
              "Reference service",
              "Library tour",
              "Display and exhibition",
              "Library orientation",
            ],
            answer: "Reference service",
          },
          {
            question:
              "“J”  is a class mark that represents library materials under ..............",
            options: [
              "Political science",
              "Social science",
              "Science",
              "Military science",
            ],
            answer: "Political science",
          },
          {
            question:
              "The following except one are methods of acquiring information materials in the library.",
            options: [
              "Bequest",
              "accessioning",
              "Inter-library loan",
              "Library exchange",
            ],
            answer: "accessioning",
          },
          {
            question:
              "............. contains bibliographic details of a book including its copyright information",
            options: ["Title page", "Preface", "Verso page", "Half title page"],
            answer: "Verso page",
          },
          {
            question: "............ is an example of a cartographic material.",
            options: ["Encyclopedia", "Slide", "Realia", "Map"],
            answer: "Map",
          },
          {
            question:
              "All but one of the following are advantages of using non-print materials.",
            options: [
              "They are good for distance learning programmes",
              "They are not profitable for individualised learning",
              "They are better accessed using electric power",
              "They have large storage capacities",
            ],
            answer: "They are not profitable for individualised learning",
          },
          {
            question:
              "........... is an example of fact/ready reference resource",
            options: ["Directories", "Abstract", "Bibliography", "Thesauri"],
            answer: "Directories",
          },
          {
            question:
              "A systematic arrangement or list of bibliographic information is called ...........",
            options: ["Catalogue", "A year book", "A manual", "A textbook"],
            answer: "Catalogue",
          },
          {
            question:
              "An information material published in successive parts and intended to continue indefinitely is called ...........",
            options: [
              "A serial",
              "A magazine",
              "A periodical",
              "All of the above",
            ],
            answer: "All of the above",
          },
          {
            question: "............. is not a  characteristic of serial",
            options: [
              "It is dynamic",
              "It contains International Standard Book Number",
              "It dwells on specialized subjects",
              "It is written by experts.",
            ],
            answer: "It contains International Standard Book Number",
          },
          {
            question:
              "............. is an annual information material containing mostly statistical information on various topics",
            options: ["Encyclopedia", "Directory", "Yearbook", "Gazetteer"],
            answer: "Yearbook",
          },
          {
            question:
              ".............. is an example of a literature search tool.",
            options: ["Map", "Bibliography", "Handbook", "Dictionary"],
            answer: "Bibliography",
          },
          {
            question: "............. is a geographical dictionary",
            options: ["Gazette", "Thesaurus", "Bibliography", "Gazetteer"],
            answer: "Gazetteer",
          },
          {
            question:
              "The display of newly acquired information materials in the library is an example of ...........",
            options: [
              "Reference service",
              "Current awareness service",
              "Selective dissemination of information",
              "Reprographic service",
            ],
            answer: "Current awareness service",
          },
          {
            question: "One of the following is not a type of index",
            options: [
              "Book index",
              "Alphabetical index",
              "Author index",
              "Numerical index",
            ],
            answer: "Numerical index",
          },
          {
            question:
              "Information materials on technology are classified under ...............",
            options: ["S", "T", "Q", "R"],
            answer: "T",
          },
          {
            question:
              "............... serves as a depository for all publications written about a country.",
            options: [
              "Public library",
              "National library",
              "Government library",
              "Legislative library",
            ],
            answer: "National library",
          },
          {
            question:
              "A paper designed to cover a published book is called .............",
            options: ["Dust jacket", "Paper cover", "Fly leaf", "Spine"],
            answer: "Dust jacket",
          },
          {
            question:
              "An information material containing between five and forty-eight pages is known as  .........",
            options: ["Monograph", "Pamphlet", "Bulletin", "Book"],
            answer: "Pamphlet",
          },
          {
            question:
              "International Institute of Tropical Agriculture Library, Ibadan is an example of ............",
            options: [
              "Private library",
              "Virtual library",
              "Special library",
              "Academic library",
            ],
            answer: "Special library",
          },
          {
            question:
              "One of the following is not a service performed in academic libraries",
            options: [
              "User education",
              "Reprographic service",
              "Bindery service",
              "None of the above",
            ],
            answer: "None of the above",
          },
          {
            question:
              ".............. is an example of a miniature storage medium",
            options: [
              "CD-ROM",
              "Compact disk",
              "Memory card",
              "None of the above",
            ],
            answer: "Memory card",
          },
          {
            question: "ISSN refers to .........",
            options: [
              "International Standard Serial Number",
              "International Standard Subject Number",
              "International Subject Serial Number",
              "International Standard Sequence Number",
            ],
            answer: "International Standard Serial Number",
          },
          {
            question: "Nigeria who’s who is an example of a ...........",
            options: [
              "Background reference source",
              "Fact/ready reference source",
              "Biographical reference source",
              "Geographical reference source",
            ],
            answer: "Biographical reference source",
          },
          {
            question:
              ".............. is a routine task performed in the acquisitions unit",
            options: ["Accessioning", "Labelling", "Cataloguing", "Filing"],
            answer: "Accessioning",
          },
          {
            question:
              "A library set up according to owner’s subject interest is ............",
            options: [
              "Personal library",
              "Private library",
              "Special library",
              "Virtual library",
            ],
            answer: "Private library",
          },
          {
            question:
              "Providing information on where to get specific information materials is part of the function of ............unit",
            options: [
              "Reference",
              "Circulation",
              "Current awareness",
              "Reprographic",
            ],
            answer: "Reference",
          },
          {
            question:
              "................... is one of the problems encountered during the use of serials.",
            options: [
              "Change of technological development",
              "Authorship verification",
              "A and B",
              "None of the above",
            ],
            answer: "None of the above",
          },
          {
            question:
              "Another name for information literacy is ...............",
            options: [
              "Library literacy",
              "Media literacy",
              "Computer literacy",
              "All of the above",
            ],
            answer: "All of the above",
          },
          {
            question: "One of the following is a bibliographic part of a book",
            options: ["Title", "Text", "Binding", "Dust jacket"],
            answer: "Title",
          },
          {
            question: "............. is a physical part of a book",
            options: [
              "Table of contents",
              "Half title page",
              "Verso page",
              "Book Cover",
            ],
            answer: "Book Cover",
          },
          {
            question: "Another term for real object is.............",
            options: [
              "Realia",
              "Specimen",
              "Cartographic objects",
              "Microforms",
            ],
            answer: "Realia",
          },
          {
            question:
              "All but one of the following is an example of a graphic material.",
            options: ["Motion picture", "Slide", "Still picture", "Chart"],
            answer: "Chart",
          },
          {
            question:
              "An information resource containing list of names of residents or organisations in a place is known as ...............",
            options: ["Book list", "index", "Directory", "Bibliography"],
            answer: "Directory",
          },
          {
            question:
              "An information resource published in successive parts and contains information is called a ................",
            options: [
              "Newspaper",
              "Newsletter",
              "Magazine",
              "All of the above",
            ],
            answer: "All of the above",
          },
          {
            question:
              "A book is an information material containing ........ pages",
            options: [
              "Less than 48 pages",
              "49 pages and above",
              "50 pages and above",
              "Less than 49 pages",
            ],
            answer: "49 pages and above",
          },
          {
            question:
              "............... is an example of an audio-visual material",
            options: ["Still picture", "Realia", "Slides", "Television"],
            answer: "Television",
          },
          {
            question:
              "The following are aspects of information literacy except",
            options: [
              "Media literacy",
              "Computer literacy",
              "Numerical literacy",
              "Print sources of information",
            ],
            answer: "Print sources of information",
          },
          {
            question:
              "Education is not only an instrument of social change but viewed as;",
            options: [
              "an investment in the national development",
              "schools and other institutions",
              "education in modern societies",
              "necessary for the health and shelter",
            ],
            answer: "an investment in the national development",
          },
          {
            question: "Secondary information sources are",
            options: [
              "Created from primary materials interpreting original material",
              "Photographs and drama",
              "Created from articles in journals",
              "from reviews and textbooks",
            ],
            answer:
              "Created from primary materials interpreting original material",
          },
          {
            question: "The term study skill is used for",
            options: [
              "General approaches to learning skills for specific courses of study",
              "Theoretical works on the subject",
              "Retention of lists of information",
              "Efficient note-taking",
            ],
            answer:
              "General approaches to learning skills for specific courses of study",
          },
          {
            question:
              "One of the following is the role of the library resources in education",
            options: [
              "Library enables the individual to obtain spiritual inspiration",
              "Existing literacy institutions",
              "Provide educators with access to relevant curriculum",
              "All of the above",
            ],
            answer:
              "Library enables the individual to obtain spiritual inspiration",
          },
          {
            question: "The following are types of library except",
            options: [
              "National libraries",
              "Public libraries",
              "Private libraries",
              "Education libraries",
            ],
            answer: "Education libraries",
          },
          {
            question: "____________libraries are owned by an individual",
            options: ["Private", "Public", "National", "Special"],
            answer: "Private",
          },
          {
            question:
              "The following are examples of specialized libraries except",
            options: [
              "Museum library",
              "Hospital library",
              "Library research institution",
              "Social service library",
            ],
            answer: "Social service library",
          },
          {
            question:
              "__________ describes the activities that take place within the library, such as the processes involved in acquiring new materials and keeping track of materials",
            options: [
              "Functionalized library",
              "Library service",
              "Physical library",
              "None of the above",
            ],
            answer: "Library service",
          },
          {
            question:
              "Readers’ Services Division comprises the following units except",
            options: [
              "General unit",
              "Circulation unit",
              "Reference unit",
              "Porters/Security Unit",
            ],
            answer: "Porters/Security Unit",
          },
          {
            question:
              "__________________ is the unit where users are registered",
            options: [
              "Circulation unit",
              "Porters’ unit",
              "Security unit",
              "Reference unit",
            ],
            answer: "Circulation unit",
          },
          {
            question:
              "_____________ unit is responsible for maintaining security in the library.",
            options: [
              "Multimedia unit",
              "Serial unit",
              "Cataloguing and classification unit",
              "Porters’ unit",
            ],
            answer: "Porters’ unit",
          },
          {
            question:
              "____________ is the major method of acquiring resources in the Library.",
            options: [
              "Gift/donations",
              "Inter-library loan",
              "Purchase",
              "All of the above",
            ],
            answer: "All of the above",
          },
          {
            question:
              "Library resources in print format are those information carriers that exist on paper",
            options: ["Yes", "No", "Yes or no", "None of the above"],
            answer: "Yes",
          },
          {
            question:
              "___________ takes place when a library ______ some of its materials for the ones it lacks with another library that would have need for them",
            options: [
              "Library Exchange / systems",
              "Permanent /arrangement",
              "Library exchange/ exchanges",
              "Borrowing/Exchange",
              "None of the above",
            ],
            answer: "Library exchange/ exchanges",
          },
          {
            question:
              "_______________unit mainly stock postgraduate dissertations and the undergraduate projects",
            options: [
              "Publications and Repository Unit",
              "Collection Development unit.",
              "Acquisition Unit",
              "Bequest",
              "All of the above",
            ],
            answer: "Publications and Repository Unit",
          },
          {
            question:
              "____________ are the commonest forms of information carriers",
            options: [
              "Parts of a book",
              "Books",
              "Binding",
              "The spine",
              "None of the above",
            ],
            answer: "Books",
          },
          {
            question:
              "___________ is the edge of the book that holds the printed papers",
            options: [
              "The spine",
              "Content",
              "Text",
              "Intellectual information",
            ],
            answer: "The spine",
          },
          {
            question:
              "The preliminary pages of the book consist of the following features except",
            options: [
              "Fly leaf",
              "Half title page",
              "Title page",
              "Graphic materials",
            ],
            answer: "Graphic materials",
          },
          {
            question:
              "These resources appeal strictly to the sense of sight except",
            options: [
              "Graphic materials",
              "Cartographic materials or maps",
              "Objects",
              "All of the above",
            ],
            answer: "All of the above",
          },
          {
            question:
              "These information resources combine the qualities of sight and sound appear in one media",
            options: ["Television", "Graphics", "Books and Radio", "Microform"],
            answer: "Television",
          },
          {
            question:
              "Miniature mobile storage media are flash drives, memory cards, USB and smart cards",
            options: ["Yes", "No", "Yes and No", "Yes or No"],
            answer: "Yes",
          },
          {
            question:
              "The reference unit is a place in the library where the following materials except one are organised for consultation.",
            options: ["Dictionary", "Annuals", "Journals", "Encyclopedia"],
            answer: "Journals",
          },
          {
            question:
              "_____________ treat specific subjects like agriculture, medicine etc",
            options: [
              "General Encyclopedia",
              "Subject encyclopedia",
              "Encyclopedia Americana",
              "Dictionaries",
            ],
            answer: "Subject encyclopedia",
          },
          {
            question:
              "Word entries are arranged alphabetically in the following materials except……..",
            options: [
              "Reference sources",
              "Dictionaries",
              "Directories",
              "None of the above",
            ],
            answer: "None of the above",
          },
          {
            question:
              "These sources provide basic data and statistics on topics such as education, health, sports, personalities or professions and are usually published annually.",
            options: [
              "Almanacs and yearbooks",
              "Handbooks, manuals and guides",
              "Literature search reference sources",
              "Abstracts",
            ],
            answer: "Almanacs and yearbooks",
          },
          {
            question:
              "_______________ is a list of the books of a specific author, publisher or on a specific subject.",
            options: [
              "Periodical index",
              "Bibliography",
              "Citation index",
              "Book index",
            ],
            answer: "Bibliography",
          },
          {
            question:
              "Geographical sources are also known as cartographic sources.",
            options: ["Yes", "No", "Yes or No", "Yes and No"],
            answer: "Yes",
          },
          {
            question: "______________ are good source of primary information",
            options: [
              "Journals",
              "Volume",
              "Books",
              "Methods of acquiring series",
              "Purchase",
            ],
            answer: "Journals",
          },
          {
            question:
              "Which of the following departments has among its responsibilities the selection and accessioning of information resources bought by or donated to the library.",
            options: [
              "Circulation Unit",
              "Acquisition Unit",
              "Reference Unit",
              "Serials Unit",
            ],
            answer: "Acquisition Unit",
          },
          {
            question:
              "A publication issued in successive parts at regular or irregular intervals , intended to be continued indefinitely are ________________",
            options: [
              "Reference materials",
              "Serials",
              "Journals",
              "Documents",
            ],
            answer: "Serials",
          },
          {
            question: "Which of these resources is the odd one out",
            options: ["Journals", "Newsletters", "Newspapers", "Dictionaries"],
            answer: "Dictionaries",
          },
          {
            question:
              "Which of these resources are published as volumes and issues / numbers, possess ISSN and contain articles",
            options: ["Newspaper", "Encyclopaedia", "Dictionary", "Memo"],
            answer: "Newspaper",
          },
          {
            question: "Cards in a catalogue cabinet are arranged",
            options: [
              "Chronologically",
              "Serially",
              "Alphabetically",
              "Numerically",
            ],
            answer: "Alphabetically",
          },
          {
            question: "The Punch is a",
            options: [
              "Weekly journal",
              "Newsletter",
              "Daily journal",
              "Daily newspaper",
            ],
            answer: "Daily newspaper",
          },
          {
            question:
              "Guardian newspaper belongs to the class of materials called",
            options: ["Textbooks", "Serials", "Journals", "Newsletters"],
            answer: "Serials",
          },
          {
            question:
              "Undergraduate students are entitled to borrow maximum of _______ while postgraduate students are entitled to _________ number of books.",
            options: [
              "2 books and 4 books respectively",
              "3 books and 6 books respectively",
              "2 books and as many books as possible respectively",
              "one book and two books respectively",
            ],
            answer: "2 books and 4 books respectively",
          },
          {
            question: "All of the following are reference materials except",
            options: ["Dictionaries", "Biographies", "Serials", "Yearbook"],
            answer: "Serials",
          },
          {
            question:
              "One of the following is a reason why books may be found in the reserved collection",
            options: [
              "Books are reference materials",
              "Books are a gift to the library",
              "Books are recommended by teaching staff",
              "Books are in bad condition.",
            ],
            answer: "Books are recommended by teaching staff",
          },
          {
            question:
              "Services offered by the reference department include all except:",
            options: [
              "Answering reference questions",
              "Current awareness services",
              "Referral services",
              "Binding of library materials",
            ],
            answer: "Binding of library materials",
          },
          {
            question: "Which of these is not a library service:",
            options: [
              "Reprography",
              "Selective Dissemination of Information",
              "Book selling",
              "Current Awareness Services",
            ],
            answer: "Book selling",
          },
          {
            question:
              "The library of the International Institute of Tropical Agriculture is also called ________",
            options: [
              "Special library",
              "Academic library",
              "National library",
              "Archives",
            ],
            answer: "Special library",
          },
          {
            question: "Ondo State Library Board is an example of",
            options: [
              "Archives",
              "State library",
              "National library",
              "Public Library",
            ],
            answer: "Public Library",
          },
          {
            question:
              "The type of library that serves undergraduates and graduate students, researchers and faculty is called _____",
            options: [
              "Document center",
              "Academic library",
              "National library",
              "Archives",
            ],
            answer: "Academic library",
          },
          {
            question:
              "The unique 10 or 13 digit identification number assigned to editions of books by the publisher is",
            options: ["Accession number", "ISBN", "ISSN", "Call number"],
            answer: "ISBN",
          },
          {
            question:
              "In school libraries, which of the following group of resources is quite common:",
            options: [
              "Audiovisual resources and textbooks",
              "Thesis and dissertation",
              "Memos and documents",
              "FAO publications and dictionaries",
            ],
            answer: "Audiovisual resources and textbooks",
          },
          {
            question:
              "The age, qualifications and experience of Mohammdu Buhari, the president elect could best be found in",
            options: ["Who’s Who", "Directory", "Gazetteer", "Who was Who"],
            answer: "Who’s Who",
          },
          {
            question:
              "Encyclopedia Britannica and Encyclopedia Americana are examples of",
            options: [
              "Subject encyclopaedia",
              "Special encyclopaedia",
              "Juvenile encyclopaedia",
              "General encyclopaedia",
            ],
            answer: "General encyclopaedia",
          },
          {
            question: "Which of these options is odd:",
            options: ["Atlas", "Map", "Gazetteer", "Manual"],
            answer: "Manual",
          },
          {
            question: "Oxford English dictionary is a _______________",
            options: [
              "General dictionary",
              "Special dictionary",
              "Dual purpose dictionary",
              "Lexicon",
            ],
            answer: "General dictionary",
          },
          {
            question: "The following are subject dictionaries except",
            options: [
              "Dictionary of geology",
              "Longman Contemporary English Dictionary",
              "Dictionary of geology",
              "Dictionary of African Culture",
            ],
            answer: "Longman Contemporary English Dictionary",
          },
          {
            question:
              "All but one of these resources is available in the Multimedia Unit.",
            options: ["Microform", "Video", "Cassette", "Gazette"],
            answer: "Gazette",
          },
          {
            question: "Which of these options is odd:",
            options: ["Television", "Map", "Chart", "Picture"],
            answer: "Television",
          },
          {
            question:
              "The library that issues ISSN and ISBN is the ____________",
            options: [
              "Document center",
              "Academic library",
              "National library",
              "Archives",
            ],
            answer: "National library",
          },
          {
            question:
              "Which of the following resources can be classified as primary information resources:",
            options: [
              "Dictionaries",
              "Textbooks",
              "Theses and dissertations",
              "Handbooks",
            ],
            answer: "Theses and dissertations",
          },
          {
            question: "Appendices are the part of a book that _________.",
            options: [
              "states the authors intention for writing the book",
              "shows the topics in the book and where they can be found",
              "shows the outline of the book",
              "contains supporting but not too essential information in the book",
            ],
            answer:
              "contains supporting but not too essential information in the book",
          },
          {
            question: "ISSN means _______________",
            options: [
              "Internal Standard Serial Number",
              "International Social Standard Networking",
              "International Standard Social Number",
              "International Standard Serial Number",
            ],
            answer: "International Standard Serial Number",
          },
          {
            question:
              "Opening and closing hours of the University Library, FUTA are ______________ and ____________",
            options: [
              "9.00am and 10.00pm respectively",
              "8.00am and 10.00pm respectively",
              "8.00am and 4.00pm respectively",
              "8.00am and 5.00pm respectively",
            ],
            answer: "8.00am and 10.00pm respectively",
          },
          {
            question:
              "An information resource intended for consultation only and not thorough reading is called",
            options: [
              "Novel",
              "Reference material",
              "Serial material",
              "Reserved material",
            ],
            answer: "Reference material",
          },
          {
            question:
              "The Federal University of Technology Library Akure was established in 1982 but it was not officially opened to users community until",
            options: ["1982", "1983", "1984", "1985"],
            answer: "1983",
          },
          {
            question:
              "The copyright page of a book contains the following information except",
            options: [
              "Author’s Name",
              "Imprint",
              "Printer’s Name",
              "Printer’s Intention",
            ],
            answer: "Printer’s Intention",
          },
          {
            question: "Periodicals are identified by a number referred to as",
            options: ["ISSN", "ISBN", "ISSM", "DDC"],
            answer: "ISSN",
          },
          {
            question: "A typical example of an index is",
            options: [
              "Serial collection",
              "Book title",
              "Library Catalogue",
              "Glossary found in a book",
            ],
            answer: "Library Catalogue",
          },
          {
            question: "The following are the features of books except",
            options: ["Chapter", "Edition", "Volume number", "Preface"],
            answer: "Volume number",
          },
          {
            question: "One of the following is a subject reference book",
            options: [
              "Encyclopedia Americana",
              "Biographical reference sources",
              "Encyclopedia Britannica",
              "Dictionary of Proverbs",
            ],
            answer: "Dictionary of Proverbs",
          },
          {
            question:
              "Among other things, study skills include mnemonics which help in",
            options: [
              "Retention of information",
              "Effective reading",
              "Concentration techniques and note taking",
              "All of the above",
            ],
            answer: "Retention of information",
          },
          {
            question: "The call number or location number is combination of",
            options: [
              "Subject number and Author number",
              "Subject number and Accession number",
              "Volume number and Issue number",
              "Subject number and ISBN",
            ],
            answer: "Subject number and Author number",
          },
          {
            question:
              "The Library of Congress classification scheme is divided into ______ classes",
            options: ["21", "22", "23", "24"],
            answer: "21",
          },
          {
            question: "In Dewey decimal Classification, 300 stands for",
            options: [
              "Technology",
              "Languages",
              "Social sciences",
              "Generalities",
            ],
            answer: "Social sciences",
          },
          {
            question:
              "A running number carried by each library book indicating when it was acquired into the collection of the library is called",
            options: [
              "International Standard Book Number",
              "Call number",
              "Volume and issue number",
              "Accession Number",
            ],
            answer: "Accession Number",
          },
          {
            question:
              "A bulletin issued periodically to a group of defined individuals of a society, business or organization is known as",
            options: ["Newspaper", "Newsletter", "News item", "Journals"],
            answer: "Newsletter",
          },
          {
            question: "A distinguishing factor of a Journal is its",
            options: [
              "Volume and issue numbers",
              "Volume and serial numbers",
              "Volume and book numbers",
              "Volume, serial and book numbers",
            ],
            answer: "Volume and issue numbers",
          },
          {
            question:
              "Personal Digital Assistant can be used to organize one’s",
            options: [
              "Company’s appointments, tasks, address lists telephone information",
              "Ones business or personal schedules, calendar, addresses and book information",
              "Institution’s corporate overall information",
              "Students’ overall information while in their institutions of learning",
            ],
            answer:
              "Ones business or personal schedules, calendar, addresses and book information",
          },
          {
            question:
              "Current Awareness Services include all the following except",
            options: [
              "Selective Dissemination of Information",
              "Publication of Current Contents",
              "New Arrivals Lists",
              "Translation Services",
            ],
            answer: "Translation Services",
          },
          {
            question: "Which one of the following is an odd-man-out?",
            options: [
              "Basic background references sources",
              "Fact or ready reference sources",
              "Literature search tools",
              "Geomorphological references sources",
            ],
            answer: "Geomorphological references sources",
          },
          {
            question:
              "The name of the Federal University of Technology, Akure Library is",
            options: [
              "FUTA Library",
              "The Library",
              "Albert Ilemobade Library",
              "None of the above",
            ],
            answer: "Albert Ilemobade Library",
          },
          {
            question:
              "To evaluate a website, factors to be considered include all but",
            options: [
              "Time of download",
              "Authority",
              "Currency",
              "Name of organization/institution the website is affiliated to",
            ],
            answer: "Currency",
          },
          {
            question:
              "With advancing technologies, OPAC, MARC and others, library users can be ______ in the world",
            options: ["No one", "Any one", "FUTA Students", "Local"],
            answer: "Any one",
          },
          {
            question:
              "When classifying a book, one can get information about the nature, purpose and scope of the book from its",
            options: ["Dedication", "Preface", "Acknowledgement", "Title page"],
            answer: "Preface",
          },
          {
            question: "Classification schemes include the following except",
            options: [
              "Library of Congress",
              "Dewey decimal Classification",
              "Bloom’s Taxonomy Classification",
              "Universal Decimal Classification",
            ],
            answer: "Bloom’s Taxonomy Classification",
          },
          {
            question:
              "Libraries found in primary and secondary schools are classified as",
            options: [
              "Academic Libraries",
              "School Libraries",
              "Schools’ Libraries",
              "Private Libraries",
            ],
            answer: "School Libraries",
          },
          {
            question:
              "Registration of library users take place in a Unit of the library called",
            options: [
              "Reference Unit",
              "Porter’s Unit",
              "Cataloguing Unit",
              "Circulation Unit",
            ],
            answer: "Circulation Unit",
          },
          {
            question: "The Porters’ Unit among other things",
            options: [
              "See to the security of all library materials",
              "Check people as they come into the library and go out of the library",
              "Maintain order in the library",
              "All of the above",
            ],
            answer: "All of the above",
          },
          {
            question:
              "One of the ways of acquiring information in the library is",
            options: [
              "Seeking for information",
              "Bequest",
              "Passing information round",
              "Borrowing",
            ],
            answer: "Bequest",
          },
          {
            question:
              "Collation in a typical catalogue card entry gives information such",
            options: [
              "Books length",
              "Notation about maps or illustrations",
              "Pagination",
              "All of the above",
            ],
            answer: "All of the above",
          },
          {
            question:
              "Libraries found in the Central Bank of Nigeria, Nigerian Institute of International Affairs and Shell Development Company are;",
            options: [
              "Academic Libraries",
              "School Libraries",
              "Special Libraries",
              "Company Libraries",
            ],
            answer: "Special Libraries",
          },
          {
            question:
              "The place and organ that houses and is responsible for the collection and preservation of public and historic resources for use of the public and researchers is called",
            options: [
              "Archives",
              "Information Centres",
              "Libraries",
              "Bookshops and store houses",
            ],
            answer: "Archives",
          },
          {
            question:
              "Information literacy involves the abilities that require a person to",
            options: [
              "Identify when a particular information is needed",
              "Have the ability to locate the needed information",
              "Use effectively and efficiently the information",
              "All of the above",
            ],
            answer: "All of the above",
          },
          {
            question:
              "Collections in a Reference Unit can be identified by an acronym known as",
            options: ["FEF", "REF", "JOU", "BRD"],
            answer: "REF",
          },
          {
            question: "All these are browsers except",
            options: ["Mozilla", "Fire fox", "Opera mini", "Exposure"],
            correctAnswer: "Exposure",
          },
          {
            question:
              "The acquisition of knowledge and skill using electronic technologies with internet-based course ware and wide range networks is called",
            options: [
              "E-Learning",
              "Group learning",
              "Distance learning",
              "Project learning",
            ],
            correctAnswer: "E-Learning",
          },
          {
            question:
              "In library of congress classification scheme ‘R’ represents",
            options: ["Religion", "Medicine", "Social Science", "Fine arts"],
            correctAnswer: "Medicine",
          },
          {
            question: "A number 86-013575 on a catalogue card represents",
            options: [
              "Call mark",
              "No tuition number",
              "Accession number",
              "Author’s number",
            ],
            correctAnswer: "Accession number",
          },
          {
            question:
              "The library type that has collection for all categories of users is",
            options: [
              "Private library",
              "Public library",
              "School library",
              "Academic library",
            ],
            correctAnswer: "Public library",
          },
          {
            question: "A library without wall is called",
            options: [
              "Virtual library",
              "School library",
              "Public library",
              "Private library",
            ],
            correctAnswer: "Virtual library",
          },
          {
            question:
              "Factors to be considered when evaluating internet materials include these except",
            options: ["Credibility", "Objectivity", "Price", "Support"],
            correctAnswer: "Price",
          },
          {
            question: "WWW represents in ICT word",
            options: [
              "Wide world web",
              "Web world wide",
              "World web wide",
              "World wide web",
            ],
            correctAnswer: "World wide web",
          },
          {
            question:
              "The supplementary information that may be useful to a reader is",
            options: [
              "Appendices",
              "Conclusion",
              "Table of contents",
              "Title page",
            ],
            correctAnswer: "Appendices",
          },
          {
            question:
              "A reader can use the university library only if he/she has",
            options: [
              "Formally registered in the library",
              "Formally given admission by the university",
              "Formally matriculated in the university",
              "Formally introduced as a FUTA student",
            ],
            correctAnswer: "Formally registered in the library",
          },
          {
            question: "A good report should have one of the following",
            options: ["References", "Referees", "Dust jacket", "Monograph"],
            correctAnswer: "References",
          },
          {
            question:
              "When citing for scholarly publications one of the following is not required",
            options: [
              "Place of publication",
              "Bibliography",
              "Publisher’s name",
              "Author’s name",
            ],
            correctAnswer: "Bibliography",
          },
          {
            question: "is a type of geographical reference source",
            options: ["Gazetteer", "Manual", "Index", "Gazette"],
            correctAnswer: "Gazetteer",
          },
          {
            question: "is not a type of library catalogue",
            options: [
              "Card catalogue",
              "Classified catalogue",
              "Divided catalogue",
              "Union catalogue",
            ],
            correctAnswer: "Card catalogue",
          },
          {
            question: "is an example of an internet service",
            options: [
              "E-mail",
              "Mailing list",
              "File transfer protocol",
              "All of the above",
            ],
            correctAnswer: "All of the above",
          },
          {
            question:
              "One of the following is not a function of a library catalogue",
            options: [
              "It identifies the work of editors only",
              "It gives index to the library collection",
              "It shows the library’s holding",
              "It describes the materials in the library",
            ],
            correctAnswer: "It identifies the work of editors only",
          },
          {
            question: "is a collection of maps",
            options: ["Gazetteer", "Atlas", "Gazette", "none of the above"],
            correctAnswer: "Atlas",
          },
          {
            question:
              "All of the following are types of audio-visual materials EXCEPT",
            options: ["Realia", "MicroFilm", "Slide", "Furniture"],
            correctAnswer: "Furniture",
          },
          {
            question: "is one of the greatest offences in the library",
            options: ["Reading", "Eating", "Writing", "Studying"],
            correctAnswer: "Eating",
          },
          {
            question: "and are one of the routine duties of a librarian",
            options: [
              "Shelving and shelf-reading",
              "Reading in the library",
              "Writing",
              "Eating",
            ],
            correctAnswer: "Shelving and shelf-reading",
          },
          {
            question:
              "A place where Artefacts materials are organised, kept and made available on request is",
            options: ["Library", "Archive", "Zoology", "Museum"],
            correctAnswer: "Museum",
          },
          {
            question:
              "The act of imparting library instructional skills and use to students is called",
            options: [
              "Library operations",
              "Library guide",
              "Users Education",
              "Extension services",
            ],
            correctAnswer: "Users Education",
          },
          {
            question:
              "All EXCEPT one are reference materials that give geographical information to users",
            options: ["Travellers guide", "Maps", "Atlas", "Encyclopaedia"],
            correctAnswer: "Encyclopaedia",
          },
          {
            question:
              "All EXCEPT one are types of periodical information materials in the library",
            options: [
              "Library users manuals",
              "Journals",
              "Magazines",
              "Newspapers",
            ],
            correctAnswer: "Library users manuals",
          },
          {
            question: "What is the name of FUTA Library",
            options: [
              "Albert Ilemobade Library",
              "Albert Macaulay Library",
              "Albert Daramola Library",
              "Futa Resources Library",
            ],
            correctAnswer: "Albert Ilemobade Library",
          },
          {
            question:
              "A process in which all bibliographic information and other related information about any book are accessed through computer terminal is called",
            options: [
              "Public access catalogue",
              "Machine catalogue",
              "Colour classification scheme",
              "Online public access catalogue",
            ],
            correctAnswer: "Online public access catalogue",
          },
          {
            question:
              "The commonest classification scheme used in most academic libraries is",
            options: [
              "BLISS classification scheme",
              "Dewey decimal classification scheme",
              "Library of congress classification scheme",
              "Colon classification scheme",
            ],
            correctAnswer: "Library of congress classification scheme",
          },
          {
            question: "One of the common features of a dictionary catalogue is",
            options: [
              "Entries are made under author",
              "Entries are made under subject",
              "Entries are interfiled in alphabetical sequence",
              "Entries are made under title",
            ],
            correctAnswer: "Entries are interfiled in alphabetical sequence",
          },
          {
            question:
              "Charging and discharging of books is one of the major functions of the",
            options: [
              "Reference Unit",
              "Bindery Unit",
              "Serials Unit",
              "Circulation unit",
            ],
            correctAnswer: "Circulation unit",
          },
          {
            question: "One of the paramount functions of a National library is",
            options: [
              "To provide research information services",
              "To provide protection and security for information materials",
              "To publish National Bibliography",
              "To enhance the development of reading skills",
            ],
            correctAnswer: "To publish National Bibliography",
          },
          {
            question: "One of the filing methods in the library is",
            options: [
              "Word by word",
              "Letter by word",
              "Word by letter",
              "Letter by initial alphabet",
            ],
            correctAnswer: "Word by word",
          },
          {
            question: "A unique feature of a special library is",
            options: [
              "It serves all categories of users",
              "It extends its lending to all users",
              "Its collection cuts across all disciplines",
              "It serves only the employees of the organization",
            ],
            correctAnswer: "It serves only the employees of the organization",
          },
          {
            question:
              "A system designed to acquire printed and non-printed information materials, organized and interpreted with the aim of providing information to users in solving their information-related problems is referred to as",
            options: [
              "Collection development",
              "Research",
              "Library",
              "Catalogue",
            ],
            correctAnswer: "Library",
          },
          {
            question:
              "The primary motive of organizing library materials is to facilitate",
            options: [
              "Building up library catalogue",
              "Effective circulation operation",
              "Accessibility and retrieval of library resources",
              "Effective reference services",
            ],
            correctAnswer: "Accessibility and retrieval of library resources",
          },
          {
            question: "All except one is not a function of a library catalogue",
            options: [
              "It assists users to locate a new book written by a familiar author",
              "It helps users to locate books on a particular subject area",
              "It shows the series of a work on a subject",
              "It is durable and user-friendly",
            ],
            correctAnswer: "It is durable and user-friendly",
          },
          {
            question:
              "An uncommon situation which the library prepares against its occurrence is",
            options: ["Theft", "Bequeath", "Weeding", "Flood and fire"],
            correctAnswer: "Flood and fire",
          },
          {
            question:
              "Names and addresses of women organizations in Nigeria can be found in……..",
            options: [
              "a. Dictionaries",
              "b. Encyclopeadia",
              "c. Directory",
              "d. Travel guide",
            ],
            answer: "c. Directory",
          },
          {
            question:
              "All except one of these library materials is a serial publication",
            options: [
              "a. Magazine",
              "b. Scientific journal",
              "c. Atlas",
              "d. Newsletter",
            ],
            answer: "c. Atlas",
          },
          {
            question:
              "Gazetteer can be located at which of these sections of the library….",
            options: [
              "a. Serials Unit",
              "b. General reading Room",
              "c. Reference Unit",
              "d. Government Documents",
            ],
            answer: "d. Government Documents",
          },
          {
            question: "The National Library of Nigeria was established in……….",
            options: ["a. 1925", "b. 1960", "c. 1964", "d. 1971"],
            answer: "d. 1971",
          },
          {
            question: "ISBN means ………",
            options: [
              "a. International Standard Bibliographic Number",
              "b. International Standard Book Number",
              "c. International Serial Book Number",
              "d. International Standard Book Notation",
            ],
            answer: "b. International Standard Book Number",
          },
          {
            question:
              "Nigeria ………………… is the type of library responsible for collection of legal deposit in",
            options: [
              "a. Special library",
              "b. Public library",
              "c. National library",
              "d. Government library",
            ],
            answer: "c. National library",
          },
          {
            question:
              "Publications that give brief and concise information about the content of document especially scientific journals is known as …….",
            options: [
              "a. Bibliographies",
              "b. Abstracts",
              "c. Handbooks",
              "d. indexes",
            ],
            answer: "b. Abstracts",
          },
          {
            question:
              "Publication of any format issue in successive parts having chronological or numeric designation is known as ………………",
            options: [
              "a. References",
              "b. Serials",
              "c. Transactions",
              "d. Journals",
            ],
            answer: "b. Serials",
          },
          {
            question: "An Act of parliament is an example of ……………",
            options: [
              "a. Reference material",
              "b. Monographs",
              "c. Government publications",
              "d. Serial publication",
            ],
            answer: "c. Government publications",
          },
          {
            question:
              "Graphic information about the vegetation, relief and population of Ghana can be found in ……",
            options: [
              "a. Biographical References",
              "b. Serial publications",
              "c. Atlases",
              "d. Directories",
            ],
            answer: "c. Atlases",
          },
          {
            question:
              "Sketches about important personalities in the world can be obtained from ………. ",
            options: [
              "a. Directories",
              "b. Biographical references",
              "c. Geographic dictionaries",
              "d. Newspapers",
            ],
            answer: "b. Biographical references",
          },
          {
            question:
              "List of universities and Higher institutions in West Africa is an example of ……..",
            options: [
              "a. Dictionaries",
              "b. Geographic source",
              "c. Encyclopedia",
              "d. Directories",
            ],
            answer: "d. Directories",
          },
          {
            question:
              "GNS 103: Information Retrieval course is designed by university to achieve all of the following except ………..",
            options: [
              "a. Make librarian out of the students",
              "b. Inculcate information skills in the students so that they can become life long learners",
              "c. Teach students the importance of information to their academic pursuit",
              "d. Develop research skills in students",
            ],
            answer: "a. Make librarian out of the students",
          },
          {
            question: "Which of the following is not an audio visual material",
            options: [
              "a. Filmstrips",
              "b. Motion pictures",
              "c. Monographs",
              "d. Transparencies",
            ],
            answer: "c. Monographs",
          },
          {
            question:
              "An institution saddled with the responsibility of acquisition, processing and preservation of records of enduring value is called …….",
            options: [
              "a. Library",
              "b. Archive",
              "c. Documentation Centre",
              "d. Museum",
            ],
            answer: "b. Archive",
          },
          {
            question:
              "Registration of library users is the responsibility of …………..",
            options: [
              "a. Readers Service Division",
              "b. Reference unit",
              "c. Circulation Unit",
              "d. Porters Unit",
            ],
            answer: "c. Circulation Unit",
          },
          {
            question: "Undergraduate project can be obtained from",
            options: [
              "a. Main Library",
              "b. Document unit",
              "c. General Reading Room",
              "d. School Library",
            ],
            answer: "d. School Library",
          },
          {
            question:
              "A user of University Library Federal University of Technology Akure intending to use the Library of Adekunle Ajasin University Library must ………",
            options: [
              "a. Present his /her university ID card",
              "b. Library Card",
              "c. Letter from his / her HOD",
              "d. Letter of introduction from his library",
            ],
            answer: "d. Letter of introduction from his library",
          },
          {
            question: "Albert Ilemobade Library FUTA is an example of ………. ",
            options: [
              "a. school Libraries",
              "b. University Libraries",
              "c. Academic Libraries",
              "d. Research Libraries",
            ],
            answer: "c. Academic Libraries",
          },
          {
            question:
              "One of the following statement is not true about library catalogue",
            options: [
              "a. Library catalogue contains list of all the library materials in the library",
              "b. Catalogue is to keep records of all the materials in the library for posterity",
              "c. To serve as search tool for retrieving information material available in the library without wasting their time",
              "d. Library catalogue gives information about author, title and subject to enhance quick retrieval of information materials",
            ],
            answer:
              "b. Catalogue is to keep records of all the materials in the library for posterity",
          },
          {
            question:
              "Constant changing of titles is one of the problems of ________",
            options: [
              "a. clippings",
              "b. Abstracts",
              "c. Serials",
              "d. Audio-visual",
            ],
            answer: "c. Serials",
          },
          {
            question:
              "Encyclopaedia resources can be located in ________ units of the library",
            options: [
              "a. Reference Unit",
              "b. Circulation Unit",
              "c. Bindery Unit",
              "d. Cataloguing Unit",
            ],
            answer: "a. Reference Unit",
          },
          {
            question:
              "______ directs users to the exact location of a book on the shelf",
            options: [
              "a. Accession number",
              "b. Entry Heading",
              "c. Catalogue",
              "d. Call marks",
            ],
            answer: "c. Catalogue",
          },
          {
            question:
              "A basic reference collection is made up of all EXCEPT ________",
            options: [
              "a. Dictionaries",
              "b. Encyclopaedias",
              "c. Textbooks",
              "d. Gazetteers",
            ],
            answer: "c. Textbooks",
          },
          {
            question: "______ is a serious offence in the Library",
            options: [
              "a. writing",
              "b. reading",
              "c. noise making",
              "d. research",
            ],
            answer: "c. noise making",
          },
          {
            question:
              "The following are the methods used to acquire serials materials in the library EXCEPT ________",
            options: ["a. Purchase", "b. Gift", "c. Donation", "d. Supply"],
            answer: "d. Supply",
          },
          {
            question: "All of these EXCEPT one is not an information source",
            options: [
              "a. primary information sources",
              "b. secondary information sources",
              "c. Tertiary information sources",
              "d. Universal information sources",
            ],
            answer: "d. Universal information sources",
          },
          {
            question:
              "A library owned by an individual is an example of a ________",
            options: [
              "a. personal library",
              "b. school library",
              "c. private library",
              "d. individual library",
            ],
            answer: "c. private library",
          },
          {
            question: "______ are example of academic libraries",
            options: [
              "a. University libraries, college of education libraries, and polytechnics libraries",
              "b. college libraries, schools libraries",
              "c. polytechnics libraries, college of education libraries, and private libraries",
              "d. None of the above",
            ],
            answer:
              "a. University libraries, college of education libraries, and polytechnics libraries",
          },
          {
            question:
              "All of the following are types of library EXCEPT ________",
            options: [
              "a. Academic Libraries",
              "b. National Archives",
              "c. National Libraries",
              "d. School libraries",
            ],
            answer: "b. National Archives",
          },
          {
            question:
              "The information required for ordering and cataloguing of books includes all EXCEPT one of these ________",
            options: [
              "a. ISBN",
              "b. Author",
              "c. Accession number",
              "d. Title",
            ],
            answer: "c. Accession number",
          },
          {
            question:
              "A process in which all bibliographic information of a particular book are listed in a definite pattern is called ________",
            options: [
              "a. collection development",
              "b. title entry",
              "c. Added entries",
              "d. Bibliographic description",
            ],
            answer: "d. Bibliographic description",
          },
          {
            question:
              "The routines in the circulation units in the library are to enable ________ make the best use of the library",
            options: [
              "a. Porters",
              "b. Users",
              "c. Technicians",
              "d. Professionals",
            ],
            answer: "b. Users",
          },
          {
            question: "All except one is not a social media site",
            options: ["a. Whatsapp", "b. OPAC", "c. Facebook", "d. Twitter"],
            answer: "b. OPAC",
          },
          {
            question:
              "All of the following are types of library catalogue EXCEPT ________",
            options: [
              "a. Dictionary Catalogue",
              "b. Union Catalogue",
              "c. Divided Catalogue",
              "d. Card Catalogue",
            ],
            answer: "c. Divided Catalogue",
          },
          {
            question:
              "All except one is not a Bibliographic detail of an information material",
            options: ["a. Author", "b. OPAC", "c. Title", "d. Publisher"],
            answer: "b. OPAC",
          },
          {
            question: "______ is a geographical location of places",
            options: [
              "a. Dictionary",
              "b. Encyclopaedia",
              "c. Year book",
              "d. Map",
            ],
            answer: "d. Map",
          },
          {
            question:
              "All of the following are printed collections EXCEPT ________",
            options: [
              "a. Dictionaries",
              "b. Encyclopaedias",
              "c. Textbooks",
              "d. E-Resources",
            ],
            answer: "d. E-Resources",
          },
          {
            question:
              "All EXCEPT one is not a classification scheme used in the library",
            options: ["a. DDC", "b. UDC", "c. OPAC", "d. LC"],
            answer: "c. OPAC",
          },
          {
            question:
              "A good report basically has the following section EXCEPT one",
            options: [
              "a. Flyer",
              "b. Title",
              "c. Table of contents",
              "d. Introduction",
            ],
            answer: "a. Flyer",
          },
          {
            question:
              "All EXCEPT one are sources of information in a report writing",
            options: [
              "a. The library",
              "b. Bookshop",
              "c. Bibliographies",
              "d. Catalogue",
            ],
            answer: "b. Bookshop",
          },
          {
            question: "______ is the library software used in FUTA library",
            options: [
              "a. CDS/ISIS",
              "b. Alice for Windows",
              "c. SLAM",
              "d. GLASS",
            ],
            answer: "c. SLAM",
          },
          {
            question:
              "All EXCEPT one is not a storage device in a computer system",
            options: [
              "a. Portable hard disks",
              "b. Floppy Disk",
              "c. SLAM Disc",
              "d. CD-DVDs",
            ],
            answer: "c. SLAM Disc",
          },
          {
            question: "______ is a serious offence in the Library",
            options: [
              "a. writing",
              "b. reading",
              "c. noise making",
              "d. research",
            ],
            answer: "c. noise making",
          },
          {
            question:
              "The following are the methods used to acquire serials materials in the library EXCEPT ________",
            options: ["a. Purchase", "b. Gift", "c. Donation", "d. Supply"],
            answer: "d. Supply",
          },
          {
            question: "All of these EXCEPT one is not an information source",
            options: [
              "a. primary information sources",
              "b. secondary information sources",
              "c. Tertiary information sources",
              "d. Universal information sources",
            ],
            answer: "d. Universal information sources",
          },
          {
            question:
              "A library owned by an individual is an example of a ________",
            options: [
              "a. personal library",
              "b. school library",
              "c. private library",
              "d. individual library",
            ],
            answer: "c. private library",
          },
          {
            question: "______ are examples of academic libraries",
            options: [
              "a. University libraries, college of education libraries, and polytechnics libraries",
              "b. College libraries, school libraries",
              "c. Polytechnics libraries, college of education libraries, and private libraries",
              "d. None of the above",
            ],
            answer:
              "a. University libraries, college of education libraries, and polytechnics libraries",
          },
          {
            question:
              "Which of the following best describes Information literacy",
            options: [
              "a. The ability to read",
              "b. The ability to use a computer",
              "c. The ability to reference",
              "d. The ability to define an information need and satisfy it",
            ],
            answer:
              "d. The ability to define an information need and satisfy it",
          },
          {
            question:
              "To find ALL books a library has on Cost analysis, one needs to consult the:",
            options: [
              "a. The subject catalogue",
              "b. The author catalogue",
              "c. The universal catalogue",
              "d. The title catalogue",
            ],
            answer: "a. The subject catalogue",
          },
          {
            question:
              "To find materials on the shelf in the library, one would need to use:",
            options: [
              "a. The call number",
              "b. The shelf number",
              "c. The ISBN number",
              "d. The title",
            ],
            answer: "a. The call number",
          },
          {
            question: "Which is not true about scholarly journals",
            options: [
              "a. The articles usually have citations and references",
              "b. Their articles are often peer-reviewed",
              "c. The information is usually technical in nature",
              "d. The articles are usually authored by journalists",
            ],
            answer: "d. The articles are usually authored by journalists",
          },
          {
            question: "Which of this is NOT part of a citation",
            options: [
              "a. Author",
              "b. Title",
              "c. Date of publication",
              "d. Call number",
            ],
            answer: "d. Call number",
          },
          {
            question: "A common reference style used by students is:",
            options: ["a. ATA", "b. CMA", "c. APA", "d. TAA"],
            answer: "c. APA",
          },
          {
            question: "An article abstract is:",
            options: [
              "a. The full text of an article",
              "b. Information about where the article can be found",
              "c. A summary of the article",
              "d. The cost of the article",
            ],
            answer: "c. A summary of the article",
          },
          {
            question:
              "Which of the following would not be considered a primary source material",
            options: [
              "a. A 1975 newspaper on the political situation of Nigeria",
              "b. A report from a study about students' use of social media for educational purposes",
              "c. An article in a journal about the effectiveness of a nutritional supplement",
              "d. A chapter in a course book that discusses information literacy",
            ],
            answer:
              "d. A chapter in a course book that discusses information literacy",
          },
          {
            question:
              "Using call numbers, books are arranged on the shelves based on:",
            options: [
              "a. Author",
              "b. Title",
              "c. Year of publication",
              "d. Subject",
            ],
            answer: "d. Subject",
          },
          {
            question: "Journals are preferred for research because __________",
            options: [
              "They contain outdated information",
              "They contain up-to-date information of a technical nature",
              "They contain popular information",
              "They contain general information for public consumption",
            ],
            answer: "They contain up-to-date information of a technical nature",
          },
          {
            question:
              "Information in journals have all of the following characteristics except:",
            options: [
              "Technical information",
              "Factual information",
              "Information of general interest",
              "Research findings",
            ],
            answer: "Information of general interest",
          },
          {
            question: "Most scholarly journals are published by _________",
            options: [
              "Newspaper houses",
              "Internet and the World Wide Web",
              "NGOs",
              "Academic institutions and professional bodies",
            ],
            answer: "Academic institutions and professional bodies",
          },
          {
            question:
              "“Popular” articles for general readership can be found in:",
            options: [
              "Journals",
              "Government documents",
              "Conference proceedings",
              "Magazines",
            ],
            answer: "Magazines",
          },
          {
            question: "Which of these is a subject encyclopedia?",
            options: [
              "Encyclopedia Americana",
              "Encyclopedia of Genetic engineering",
              "Encyclopedia Britannica",
              "Wikipedia",
            ],
            answer: "Encyclopedia of Genetic engineering",
          },
          {
            question:
              "Which of these would be good for providing background information on a topic?",
            options: [
              "Encyclopedia Americana",
              "Gazetteer",
              "Journal of Contemporary Water Research",
              "FUTA Yellow pages",
            ],
            answer: "Encyclopedia Americana",
          },
          {
            question:
              "One of this is common to Magazines, Journals, and Newspapers:",
            options: [
              "Chapters",
              "ISBN",
              "New Edition",
              "Volume and/or Issue Number",
            ],
            answer: "Volume and/or Issue Number",
          },
          {
            question:
              "You have been asked to find articles that discuss a political issue currently being debated in the media. What type of source should you look for?",
            options: [
              "Daily newspaper",
              "Encyclopedia",
              "Textbook",
              "Scholarly journals",
            ],
            answer: "Daily newspaper",
          },
          {
            question:
              "Which of the following should be the least important consideration when developing a topic for your GNS 101 Term Paper assignment?",
            options: [
              "It meets the requirement of the assignment",
              "It will be interesting to you and your readers",
              "It supports your personal values",
              "Enough high quality sources are available to back up your statements",
            ],
            answer: "It supports your personal values",
          },
          {
            question: "All the following are Boolean operators except:",
            options: ["WITH", "OR", "NOT", "AND"],
            answer: "WITH",
          },
          {
            question: "When OR is used between key words in a search engine:",
            options: [
              "When any of two or more search terms must be present in search results",
              "When you need to increase or broaden search results",
              "When any two or more words are close and any of the two can appear in the search results",
              "When you need to eliminate a word from your results",
            ],
            answer: "When you need to increase or broaden search results",
          },
          {
            question: "Which of the following statements is true:",
            options: [
              "Only experts can publish Web pages",
              "An author’s motivations can impact the information that he/she publishes on the Web",
              "Websites don’t have authors",
              "Website authors are unbiased",
            ],
            answer:
              "An author’s motivations can impact the information that he/she publishes on the Web",
          },
          {
            question:
              "The URL address: http://www.epa.gov/climatechange shows that the website is published by _________",
            options: [
              "an educational institution",
              "is trying to sell something",
              "is used for public awareness",
              "is published by a government agency",
            ],
            answer: "is published by a government agency",
          },
          {
            question:
              "The URL address: http://ui.edu.ng/content/centres-excellence shows that the website is published by _________",
            options: [
              "an educational institution",
              "is trying to sell something",
              "is used for public awareness",
              "is published by a government agency",
            ],
            answer: "an educational institution",
          },
          {
            question:
              "Which of the following is not a reason to cite your sources?",
            options: [
              "They lend authority to your work",
              "They let readers retrieve sources that you have cited",
              "They give credit to the cited sources",
              "They increase the grade of the author",
            ],
            answer: "They increase the grade of the author",
          },
          {
            question: "The maximum number of characters allowed on twitter is:",
            options: ["120", "140", "160", "180"],
            answer: "140",
          },
          {
            question:
              "Which of the following is not a social media application?",
            options: ["Facebook", "Fickr", "YouTube", "Likedblog"],
            answer: "Likedblog",
          },
          {
            question: "The largest online professional network website:",
            options: ["Instagram", "Facebook", "Twitter", "LinkedIn"],
            answer: "LinkedIn",
          },
          {
            question: "Instagram is __________",
            options: [
              "The largest professional network website",
              "A photo and video sharing social networking website",
              "A microblogging platform",
              "A blog site",
            ],
            answer: "A photo and video sharing social networking website",
          },
          {
            question:
              "A website through which users create online communities to share information, ideas, personal messages and other content is called ____________________",
            options: ["Social media", "Scholarly database", "Database", "OPAC"],
            answer: "Social media",
          },
          {
            question: "One of the following is an odd option:",
            options: ["Google+", "LinkedIn", "Naijagist", "My Space"],
            answer: "Naijagist",
          },
          {
            question: "The founder of Facebook is:",
            options: [
              "Mark Zuckerburg",
              "Bill Gate",
              "Micheal Townsend",
              "Innocent Emagwali",
            ],
            answer: "Mark Zuckerburg",
          },
          {
            question: "Twitter is an example of ____________ service",
            options: ["Blogging", "Programming", "Gaming", "Microblogging"],
            answer: "Microblogging",
          },
          {
            question:
              "Facebook, My Space, and Google+ are all examples of what type of service:",
            options: ["E-learning", "Social networking", "Web portal", "Wiki"],
            answer: "Social networking",
          },
          {
            question: "Hashtag (#) is used in which of these services:",
            options: ["Facebook", "Instagram", "LinkedIn", "Twitter"],
            answer: "Twitter",
          },
          {
            question: "What are the four steps involved in report writing?",
            options: [
              "Plan, think, write and revise",
              "Revise Plan, think, write",
              "Think, plan, write and revise",
              "Write, plan revise and think",
            ],
            answer: "Think, plan, write and revise",
          },
          {
            question: "What is an executive summary used for in a report?",
            options: [
              "To grab the attention of the reader",
              "To keep the summary brief",
              "To discourage further reading of the main report",
              "To reduce the number of the pages of the report",
            ],
            answer: "To grab the attention of the reader",
          },
          {
            question: "The sections in a report are arranged in this order:",
            options: [
              "Body of report, Introduction, title page, conclusion, table of contents",
              "Table of contents, title page, conclusion, Introduction, body of report",
              "Title page, abstract, introduction, body of report, conclusion, reference",
              "Title page, abstract, body of report, conclusion, reference, introduction",
            ],
            answer:
              "Title page, abstract, introduction, body of report, conclusion, reference",
          },
          {
            question: "In report writing, recommendations are based on ______",
            options: ["Findings", "Conclusion", "Introduction", "Title page"],
            answer: "Findings",
          },
          {
            question: "In APA style, in-text citation consists of:",
            options: [
              "Author and year of publication",
              "Publisher and year of publication",
              "Author and cost",
              "Year of publication and publisher",
            ],
            answer: "Author and year of publication",
          },
          {
            question:
              "Each source listed in the reference list must be cited in the:",
            options: ["Text", "Table of contents", "Abstract", "Conclusion"],
            answer: "Text",
          },
          {
            question:
              "Which of the following is the correct APA Reference list entry?",
            options: [
              "Reese G. (2000). Database Programming with JDBC and Java. Beijing: O’Reilly Media",
              "Reese G. Database Programming with JDBC and Java. Beijing: O’Reilly Media (2000).",
              "Database Programming with JDBC and Java. Beijing: O’Reilly Media. Reese G. (2000).",
              "Reese G. (2000).Beijing: O’Reilly Media. Database Programming with JDBC and Java.",
            ],
            answer:
              "Reese G. (2000). Database Programming with JDBC and Java. Beijing: O’Reilly Media",
          },
          {
            question:
              "In the University Library, one can use SLAM to identify all of the following except:",
            options: [
              "The number of books on a specific subject",
              "The availability of a particular title",
              "The books published by a particular author",
              "The librarian who classified the book",
            ],
            answer: "The librarian who classified the book",
          },
          {
            question:
              "Journal articles can be found in all of the following places except:",
            options: [
              "Scholarly Databases like EBSCOHost",
              "Serials Unit",
              "General Reading Room",
              "The Internet (WWW)",
            ],
            answer: "General Reading Room",
          },
          {
            question:
              "To find facts and statistics about a country, I would need to search in:",
            options: ["Encyclopedia", "Dictionary", "Almanac", "Atlas"],
            answer: "Almanac",
          },
          {
            question: "To find if 'shroud' is a noun, adverb, adjective etc:",
            options: ["Encyclopedia", "Dictionary", "Almanac", "Atlas"],
            answer: "Dictionary",
          },
          {
            question:
              "To find a long detailed description of the United States of America:",
            options: ["Encyclopedia", "Dictionary", "Almanac", "Atlas"],
            answer: "Encyclopedia",
          },
          {
            question: "To find the locations of cities, states and rivers:",
            options: ["Encyclopedia", "Dictionary", "Almanac", "Atlas"],
            answer: "Atlas",
          },
          {
            question: "To find last year’s winners of the academy awards:",
            options: ["Encyclopedia", "Dictionary", "Almanac", "Atlas"],
            answer: "Almanac",
          },
          {
            question: "To find the longitude and latitude of Lagos, Nigeria:",
            options: ["Encyclopedia", "Dictionary", "Almanac", "Atlas"],
            answer: "Atlas",
          },
          {
            question: "To find how to pronounce the word 'Cygnet':",
            options: ["Encyclopedia", "Dictionary", "Almanac", "Atlas"],
            answer: "Dictionary",
          },
          {
            question:
              "The least important factor to consider when evaluating an informational website for use in a research paper is?",
            options: ["Authority", "Accuracy", "Currency", "Font size"],
            answer: "Font size",
          },
          {
            question:
              "As part of specific rules for the library, the library user who loses any library material will pay the cost of the material plus administrative charge of?",
            options: ["A. 20%", "B. 30%", "C. 15%", "D. 25%"],
            answer: "C. 15%",
          },
          {
            question: "The internet telephony is voice over?",
            options: [
              "A. Internet software",
              "B. Internet search engine",
              "C. Internet browser",
              "D. Internet protocol",
            ],
            answer: "D. Internet protocol",
          },
          {
            question:
              "The checklist for research evaluation include all except?",
            options: [
              "A. Credibility",
              "B. Injectibility",
              "C. Objectivity",
              "D. Accuracy",
            ],
            answer: "B. Injectibility",
          },
          {
            question:
              "When a researcher cites an electronic source he/she should have a copy of the material because?",
            options: [
              "A. Internet – based materials are short-lived on the web",
              "B. Internet – based materials are short",
              "C. Internet can be affected by power outage",
              "D. The author of the material may not be known.",
            ],
            answer: "A. Internet – based materials are short-lived on the web",
          },
          {
            question: "Some benefits of e- resources are?",
            options: [
              "A. Ability to write down the document in one’s language",
              "B. Easy copy of the material",
              "C. Manipulation of words",
              "D. None of the above",
            ],
            answer: "D. None of the above",
          },
          {
            question: "Albert Ilemobade Library has a publication titled?",
            options: [
              "A. Guide to the Library 2014-2018",
              "B. Guide to the University Library: 2014-2017",
              "C. Guide to the Library 2013-2014",
              "D. Guide to the Library to Albert Ilemobade Library",
            ],
            answer: "A. Guide to the Library 2014-2018",
          },
          {
            question:
              "FUTA Institutional Respiratory include all publications collected from inception of the?",
            options: [
              "A. University Library and kept in one database",
              "B. University and kept in one database",
              "C. School and kept in one database",
              "D. None of the above",
            ],
            answer: "B. University and kept in one database",
          },
          {
            question:
              "To find a book, a library patron should first consult the library?",
            options: [
              "A. Book shelves",
              "B. Reading areas",
              "C. Library catalogues",
              "D. Classification scheme",
            ],
            answer: "C. Library catalogues",
          },
          {
            question:
              "The library of Congress Classification Scheme is divided into ____________ main classes?",
            options: ["A. 30", "B. 10", "C. 21", "D. 15"],
            answer: "C. 21",
          },
          {
            question:
              "The Dewey Decimal Classification Scheme is used mainly by _______ libraries?",
            options: [
              "A. Small libraries",
              "B. Public and University libraries only",
              "C. University libraries only",
              "D. Very large libraries",
            ],
            answer: "A. Small libraries",
          },
          {
            question:
              "The International Standard Book Number is assigned by the?",
            options: [
              "A. National library",
              "B. School library",
              "C. Academic library",
              "D. Research and public libraries",
            ],
            answer: "A. National library",
          },
          {
            question: "Media Resources Centres refer to modern?",
            options: [
              "A. Academic libraries",
              "B. Special and research libraries",
              "C. Public libraries",
              "D. School libraries",
            ],
            answer: "D. School libraries",
          },
          {
            question: "An archive is a place housing large number of?",
            options: [
              "A. Publications",
              "B. Electronic information",
              "C. Historical records",
              "D. Records of publications",
            ],
            answer: "C. Historical records",
          },
          {
            question:
              "The library found in the Federal University of Technology was relocated to the present site in?",
            options: ["A. March 2006", "B. April 2006", "C. 1982", "D. 1983"],
            answer: "B. April 2006",
          },
          {
            question:
              "Some methods of acquiring information resources in the library are?",
            options: [
              "A. Purchase",
              "B. Bequest",
              "C. Library exchange",
              "D. All of the above",
            ],
            answer: "D. All of the above",
          },
          {
            question: "The Dust jacket contains the?",
            options: ["A. Blurb", "B. Binding", "C. Spine", "D. Fly leaf"],
            answer: "A. Blurb",
          },
          {
            question:
              "By AD 1543 anatomical drawings were in use in the University of?",
            options: [
              "A. Sweden",
              "B. California",
              "C. Padua",
              "D. Constantinople",
            ],
            answer: "C. Padua",
          },
          {
            question: "The 'Medium is the message' was declared by?",
            options: [
              "A. Marshall Mulan",
              "B. Marshall MuLuhan",
              "C. Marshall McMacgraw",
              "D. Marshall McPherson",
            ],
            answer: "B. Marshall MuLuhan",
          },
          {
            question: "Non-print resources can be categorized into?",
            options: [
              "A. Audio and visual resources",
              "B. Audio, Visual, electronic resources and hard copies",
              "C. Audio, visual and electronic resources",
              "D. A-V and their hard copies",
            ],
            answer: "C. Audio, visual and electronic resources",
          },
          {
            question:
              "iPod is a mobile device and portable digital player useful for accessing?",
            options: [
              "A. Video file formats",
              "B. Audio file formats",
              "C. Written file formats",
              "D. Any file formats",
            ],
            answer: "B. Audio file formats",
          },
          {
            question: "Podcasts as digitized files can be accessed with the?",
            options: [
              "A. Website",
              "B. Email",
              "C. Video format",
              "D. Audio format",
            ],
            answer: "A. Website",
          },
          {
            question:
              "Operating systems refer to a set of programs that help to control the?",
            options: [
              "A. Applications of a computer",
              "B. The way computers work and run other programs",
              "C. Suitability of computers and the application programs in them",
              "D. Way application programs of can be downloaded.",
            ],
            answer: "B. The way computers work and run other programs",
          },
          {
            question:
              "In order to connect professional and develop better relationships, the social media that can be used include?",
            options: [
              "A. Twitter",
              "B. Instagram",
              "C. Goggle+",
              "D. Facebook",
            ],
            answer: "D. Facebook",
          },
          {
            question:
              "To share information of professional interest and career experiences, it is better to use?",
            options: ["A. Goggle +", "B. Twitter", "C. LinkedIn", "D. YouTube"],
            answer: "C. LinkedIn",
          },
          {
            question: "Some disadvantages of the use of social media are?",
            options: [
              "A. Facilitating deception",
              "B. Defamatory content",
              "C. Subjective norms",
              "D. All of the above",
            ],
            answer: "D. All of the above",
          },
          {
            question:
              "File transfer protocol an internet standard permits on the internet the sharing of ____ with other computers?",
            options: [
              "A. Videos",
              "B. Files",
              "C. Sound",
              "D. Textual messages",
            ],
            answer: "B. Files",
          },
          {
            question: "One aspect of information literacy is ________?",
            options: [
              "A. Cultural literacy",
              "B. Building literacy",
              "C. Music literacy",
              "D. Trading literacy",
            ],
            answer: "A. Cultural literacy",
          },
          {
            question:
              "One of the following is a primary source of information?",
            options: ["A. Book", "B. Reviews", "C. Patents", "D. Databases"],
            answer: "C. Patents",
          },
          {
            question:
              "A library with manual and sclerotic catalogues is an example of one that uses?",
            options: [
              "A. Hybrid catalogue",
              "B. Electronic catalogues",
              "C. Manual catalogue",
              "D. MARC and OPAC",
            ],
            answer: "A. Hybrid catalogue",
          },
          {
            question:
              "Added entries can be used in locating publication by the provision of?",
            options: [
              "A. Title, subject, author, translator, compiler and publisher",
              "B. Title, subject, author, and printer",
              "C. Title, subject, author, compiler and press",
              "D. Title, subject, author, publisher, printer and press",
            ],
            answer:
              "A. Title, subject, author, translator, compiler and publisher",
          },
          {
            question: "Call number is made of?",
            options: [
              "A. Location number",
              "B. Address number",
              "C. Subject number and author number",
              "D. Subject number and book number",
            ],
            answer: "C. Subject number and author number",
          },
          {
            question: "Call number is?",
            options: [
              "A. Numeric",
              "B. Alphanumeric",
              "C. Words only",
              "D. Pictorial only",
            ],
            answer: "B. Alphanumeric",
          },
          {
            question:
              "The unique number assigned to any book showing when it was acquired is called?",
            options: [
              "A. Accession number",
              "B. Subject number",
              "C. Location number",
              "D. International Standard Book Number",
            ],
            answer: "A. Accession number",
          },
          {
            question:
              "Information on the publisher of a book, place and date of publication is known as?",
            options: [
              "A. Collation",
              "B. Author entry",
              "C. Series entry",
              "D. Imprint",
            ],
            answer: "D. Imprint",
          },
          {
            question:
              "Information on a book’s length and size as well as notations about maps or illustrations is called?",
            options: [
              "A. Author’s entry",
              "B. Series entry",
              "C. Collation",
              "D. Imprint",
            ],
            answer: "C. Collation",
          },
          {
            question:
              "The largest and most detailed of all encyclopedias is called?",
            options: [
              "A. World Bank Encyclopedia",
              "B. Encyclopedia Britannica",
              "C. New Age Encyclopedia",
              "D. Encyclopedia of physics",
            ],
            answer: "B. Encyclopedia Britannica",
          },
          {
            question:
              "Date of copyright, name of copyright holder, book’s number, library of congress catalogue number, previous editions, printers name can all be found on the?",
            options: [
              "A. Copyright page",
              "B. Title page",
              "C. Preface",
              "D. Foreword",
            ],
            answer: "A. Copyright page",
          },
          {
            question:
              "Sources of information when listed and arranged in an alphabetical order can be referred to as?",
            options: [
              "A. Biography",
              "B. Bibliography",
              "C. Bibliology",
              "D. References",
            ],
            answer: "B. Bibliography",
          },
          {
            question:
              "When a source of information is all about a person’s life history authored by self it is called?",
            options: [
              "A. Biography",
              "B. Bibliography",
              "C. Autobiography",
              "D. Encyclopedia",
            ],
            answer: "C. Autobiography",
          },
          {
            question:
              "An additional explanation and elaboration not essential to a text is known as?",
            options: [
              "A. Appendix",
              "B. Glossary",
              "C. Index",
              "D. List of illustrations",
            ],
            answer: "A. Appendix",
          },
          {
            question:
              "To have reduced photographic images of printed pages and make it possible to house much more materials, the library needs",
            options: [
              "A. Computers",
              "B. Softwares",
              "C. Books",
              "D. Microforms",
            ],
            answer: "D. Microforms",
          },
          {
            question: "In the Dewey Decimal System, 300 represents",
            options: [
              "A. Language",
              "B. Social sciences",
              "C. The Arts",
              "D. Pure Sciences",
            ],
            answer: "B. Social sciences",
          },
          {
            question: "In the Library of Congress, system V stands for",
            options: [
              "A. Natural Science",
              "B. Political science",
              "C. Education",
              "D. Law",
            ],
            answer: "A. Natural Science",
          },
          {
            question:
              "____________ represents social sciences in the Library of Congress System",
            options: ["A. A", "B. H", "C. S", "D. T"],
            answer: "B. H",
          },
          {
            question: "MARC can be used only by",
            options: [
              "A. One library",
              "B. Three libraries",
              "C. Many libraries",
              "D. City libraries",
            ],
            answer: "C. Many libraries",
          },
          {
            question: "To identify a serial, it must have",
            options: [
              "A. Volume and serial numbers",
              "B. Volume and book numbers",
              "C. Volume, serial and book numbers",
              "D. Volume and issue numbers",
            ],
            answer: "D. Volume and issue numbers",
          },
          {
            question: "Any library can be categorized using",
            options: [
              "A. Ownership",
              "B. Users served",
              "C. Type of collection",
              "D. All of the above",
            ],
            answer: "D. All of the above",
          },
          {
            question: "Another name given to yearbook is",
            options: [
              "A. Annual",
              "B. Gazetters",
              "C. Handbooks",
              "D. Books of the year",
            ],
            answer: "A. Annual",
          },
          {
            question:
              "The Federal University of Technology Akure has its library called as",
            options: [
              "A. Special Library",
              "B. Academic Library",
              "C. School Library",
              "D. Research Library",
            ],
            answer: "B. Academic Library",
          },
        ],
      },
      {
        code: "CHE101",
        questions: [
          {
            question:
              "What determines the degree of completeness of a reaction?",
            options: [
              "catalyst",
              "intimacy of contact",
              "rate of reaction",
              "equilibrium constant",
            ],
            answer: "equilibrium constant",
          },
          {
            question:
              "What is the substance called that causes an alteration of the speed of a chemical reaction?",
            options: ["variable", "gas", "catalyst", "equilibrium constant"],
            answer: "catalyst",
          },
          {
            question:
              "What substance does not have catalytic capability, but does increase the effectiveness of a catalyst?",
            options: ["enzyme", "promoter", "anti-catalyst", "true constant"],
            answer: "promoter",
          },
          {
            question: "Who first proposed the atomic theory?",
            options: [
              "John Daltan",
              "Julius Robert",
              "Lord Kelvin",
              "William Thomson",
            ],
            answer: "John Daltan",
          },
          {
            question:
              "What is the temperature at which the vapour pressure of a liquid slightly exceeds the pressure of the atmosphere above the liquid?",
            options: [
              "absolute zero",
              "boiling point",
              "Kelvin",
              "melting point",
            ],
            answer: "boiling point",
          },
          {
            question:
              "When the pressure on a liquid is increased, the boiling point:",
            options: ["goes up", "goes down"],
            answer: "goes up",
          },
          {
            question:
              "What is the property of a fluid that prevents it from flowing when subjected to an applied force?",
            options: ["compressibility", "volume", "viscosity", "density"],
            answer: "viscosity",
          },
          {
            question: "High-viscosity fluids tend to:",
            options: ["resist flow", "flow easily"],
            answer: "resist flow",
          },
          {
            question:
              "What theory states that equal volumes of different gases contain the same number of molecules when compared under the same conditions.",
            options: [
              "Quantum Theory",
              "Kinetic Theory",
              "Molecular Law",
              "Avogadro's Law",
            ],
            answer: "Avogadro's Law",
          },
          {
            question:
              "What are atoms of the same element that differ in weight?",
            options: ["isotopes", "enzymes", "neutrons", "ions"],
            answer: "isotopes",
          },
          {
            question: "Who first came up with the periodic table?",
            options: [
              "Amedeo Avogadro",
              "Dmitry Mendeleyev",
              "Charles Darwin",
              "Isaac Newton",
            ],
            answer: "Dmitry Mendeleyev",
          },
          {
            question:
              "What is the number of the element on the Periodic Table called?",
            options: [
              "periodic number",
              "element number",
              "quantum number",
              "atomic number",
            ],
            answer: "atomic number",
          },
          {
            question: "What is the center of the atom?",
            options: ["atom core", "nucleus", "electron", "proton"],
            answer: "nucleus",
          },
          {
            question:
              "Who's theory proposed that electrons are arranged in shells, or quantum levels, at a distance from the nucleus?",
            options: ["Rutherford", "Newton", "Bohr", "Davis"],
            answer: "Bohr",
          },
          {
            question:
              "If helium has an atomic number of 2, how many electrons does it have?",
            options: ["1", "2", "3", "4"],
            answer: "2",
          },
          {
            question:
              "According to Bohr's Theory, what is the maximum number of electron orbital layers?",
            options: ["2", "3", "5", "7"],
            answer: "7",
          },
          {
            question: "Which gas is not an inert gas?",
            options: ["oxygen", "neon", "argon"],
            answer: "oxygen",
          },
          {
            question: "Inert gases have:",
            options: [
              "one electron in the outer shell",
              "completely filled outer shells",
              "two electrons in the outer shell",
              "no electrons",
            ],
            answer: "completely filled outer shells",
          },
          {
            question:
              "Do inert gases enter into chemical combinations in nature?",
            options: ["no", "yes"],
            answer: "no",
          },
          {
            question:
              "The inner-most electron shell can contain how many electrons?",
            options: ["7", "4", "2", "1"],
            answer: "2",
          },
          {
            question: "Which is a proton donor?",
            options: ["acid", "base"],
            answer: "acid",
          },
          {
            question: "Which is a proton acceptor?",
            options: ["acid", "base"],
            answer: "base",
          },
          {
            question: "Alkali metals have:",
            options: ["low melting points", "high melting points"],
            answer: "low melting points",
          },
          {
            question: "Which is not an Alkali metal?",
            options: ["lithium", "sodium", "gold", "potassium"],
            answer: "sodium",
          },
          {
            question:
              "What is the gradual change of a liquid into a gas without boiling?",
            options: ["evaporation", "melting", "combustion", "boiling"],
            answer: "evaporation",
          },
          {
            question:
              "What is the breaking down of a substance or compound into its simpler components?",
            options: ["combustion", "decomposition", "melting", "combination"],
            answer: "decomposition",
          },
          {
            question:
              "Which of the following elements must be present for fire to exist?",
            options: [
              "oxygen or chlorine",
              "oxygen or carbon",
              "carbon or lithium",
              "neon or iron",
            ],
            answer: "oxygen or carbon",
          },
          {
            question:
              "What is the number of electrons that an atom can give to or accept from another atom in a chemical reaction?",
            options: [
              "no more than 2",
              "valence",
              "atomic number",
              "electron shell",
            ],
            answer: "valence",
          },
          {
            question:
              "What is the temperature at which a liquid congeals into the solid state at a given pressure?",
            options: [
              "boiling point",
              "melting point",
              "solid point",
              "freezing point",
            ],
            answer: "freezing point",
          },
          {
            question:
              "What is the change of a substance from the solid to the liquid state called?",
            options: ["decomposition", "fusion", "combustion", "explosion"],
            answer: "fusion",
          },
          {
            question:
              "What process combines rubber and sulfur at a high temperature?",
            options: [
              "fulmination",
              "vulcanization",
              "fermentation",
              "distillation",
            ],
            answer: "vulcanization",
          },
          {
            question: "What elements are Hydrocarbons composed of?",
            options: [
              "Hydrogen and Chlorine",
              "Argon and Uranium",
              "Hydrogen and Carbon",
              "Oxygen and Carbon",
            ],
            answer: "Hydrogen and Carbon",
          },
          {
            question:
              "What is something called when it changes color in response to the nature of its chemical environment?",
            options: ["enzyme", "indicator", "promoter", "changer"],
            answer: "indicator",
          },
          {
            question: "What color does Litmus change to in acid solutions?",
            options: ["red", "orange", "blue", "green"],
            answer: "red",
          },
          {
            question: "What color does Litmus change to in basic solutions?",
            options: ["red", "blue", "orange", "green"],
            answer: "blue",
          },
          {
            question: "What does an atom that loses an electron form?",
            options: ["cation", "anion"],
            answer: "cation",
          },
          {
            question: "What does an atom that gains an electron form?",
            options: ["cation", "anion"],
            answer: "anion",
          },
          {
            question:
              "What is one of two or more species of atom having an identical atomic number but differing in mass number called?",
            options: ["metal", "enzyme", "resin", "isotope"],
            answer: "isotope",
          },
          {
            question: "Who invented the Carbon-14 dating method?",
            options: [
              "Irving Langmuir",
              "Williard Libby",
              "August Hofmann",
              "Otto Hahn",
            ],
            answer: "Williard Libby",
          },
          {
            question: "Amalgams are types of what?",
            options: ["alloys", "elements", "metals", "isotopes"],
            answer: "alloys",
          },
          {
            question: "Alloys are:",
            options: [
              "pure elements",
              "combinations of carbon and other elements",
              "combinations of metals",
              "always acids",
            ],
            answer: "combinations of metals",
          },
          {
            question:
              "What is the ability of a solid substance to resist abrasion and surface deformation called?",
            options: [
              "hardness",
              "softness",
              "conductivity",
              "tensile strength",
            ],
            answer: "hardness",
          },
          {
            question: "What is the resistance to breakage called?",
            options: [
              "hardness",
              "elasticity",
              "malleability",
              "tensile strength",
            ],
            answer: "elasticity",
          },
          {
            question: "What is the ability to be shaped called?",
            options: [
              "hardness",
              "elasticity",
              "malleability",
              "tensile strength",
            ],
            answer: "malleability",
          },
          {
            question:
              "What is the sum of all the atomic weights of all the atoms in a molecule?",
            options: [
              "Electron Weight",
              "Neutron Weight",
              "Molecular Weight",
              "Heaviness",
            ],
            answer: "Molecular Weight",
          },
          {
            question:
              "What is the smallest particle of a substance having the specific chemical properties of that substance?",
            options: ["atom", "molecule", "electron", "nucleus"],
            answer: "atom",
          },
          {
            question:
              "How many grams of Ca(OH)2 are contained in 1500 mL of 0.0250 M Ca(OH)2 solution?",
            options: ["3.17 g", "2.78 g", "1.85 g", "2.34 g", "4.25 g"],
            answer: "2.78 g",
          },
          {
            question:
              "What volume of 12.6 M HCl must be added to enough water to prepare 5.00 liters of 3.00 M HCl?",
            options: ["1.19 L", "21.0 L", "0.840 L", "7.56 L", "2.14 L"],
            answer: "1.19 L",
          },
          {
            question:
              "What is the molarity of the salt produced in the reaction of 200 mL of 0.100 M HCl with 100 mL of 0.500 M KOH?",
            options: [
              "0.0325 M",
              "0.0472 M",
              "0.0667 M",
              "0.0864 M",
              "0.0935 M",
            ],
            answer: "0.0667 M",
          },
          {
            question:
              "What volume of 0.50 M KOH would be required to neutralize completely 500 mL of 0.25 M H3PO4 solution?",
            options: [
              "2.5 x 102 mL",
              "1.4 x 103 mL",
              "83 mL",
              "7.5 x 102 mL",
              "5.2 x 102 mL",
            ],
            answer: "7.5 x 102 mL",
          },
          {
            question: "What is the oxidation number for carbon in CaC2O4?",
            options: ["0", "+2", "+3", "+4", "+6"],
            answer: "+3",
          },
          {
            question:
              "When the reaction MnO4⁻ + SO3²⁻ → MnO2 + SO4²⁻ is balanced in basic solution, how many OH⁻ ions are involved?",
            options: [
              "two on the right",
              "two on the left",
              "three on the right",
              "four on the right",
              "four on the left",
            ],
            answer: "four on the left",
          },
          {
            question: "From Rutherford’s experiment, he concluded that:",
            options: [
              "electrons are massive particles.",
              "the positively charged parts of atoms are moving about with a velocity approaching the speed of light.",
              "the positively charged parts of atoms are extremely small and extremely heavy particles.",
              "the diameter of an electron is approximately equal to that of the nucleus.",
              "electrons travel in circular orbits around the nucleus.",
            ],
            answer:
              "the positively charged parts of atoms are extremely small and extremely heavy particles.",
          },
          {
            question:
              "The neutral atoms of all isotopes of the same element have:",
            options: [
              "different numbers of protons.",
              "equal numbers of neutrons.",
              "the same number of electrons.",
              "the same mass numbers.",
              "the same masses.",
            ],
            answer: "the same number of electrons.",
          },
          {
            question:
              "Which statement about the four quantum numbers is incorrect?",
            options: [
              "n = principal quantum number, n = 1, 2, 3, ......",
              "l = subsidiary (or azimuthal) quantum number, l = 1, 2, 3, ... , (n+1)",
              "ml = magnetic quantum number, ml = (-l ), .... , 0, .... , (+l)",
              "ms = spin quantum number, ms = +1/2 or -1/2.",
              "The magnetic quantum number is related to the orientation of atomic orbitals in space.",
            ],
            answer:
              "l = subsidiary (or azimuthal) quantum number, l = 1, 2, 3, ... , (n+1)",
          },
          {
            question: "Which atomic orbital is spherical in shape?",
            options: ["2s", "3p", "3d", "4f", "they are all spherical"],
            answer: "2s",
          },
          {
            question:
              "The maximum number of electrons that can be accommodated in a sublevel for which l = 3 is:",
            options: ["2", "10", "6", "14", "8"],
            answer: "14",
          },
          {
            question: "The ground state electron configuration for arsenic is:",
            options: [
              "[Ar] 4s2 4p13",
              "[Kr] 4s2 4p1",
              "1s2 2s2 2p6 3s2 3p6 3d12 4s2 4p1",
              "1s2 2s2 2p6 3s2 3p6 4s2 3d8 4p5",
              "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p3",
            ],
            answer: "1s2 2s2 2p6 3s2 3p6 4s2 3d10 4p3",
          },
          {
            question:
              "Which of the following electron configurations is correct for nickel?",
            options: [
              "[Ar] 4s1 3d8",
              "[Kr] 4s1 4d8",
              "[Kr] 4s1 3d8",
              "[Kr] 4s2 3d8",
              "[Ar] 4s2 3d8",
            ],
            answer: "[Ar] 4s2 3d8",
          },
          {
            question:
              "In the ground state of a cobalt atom there are _____ unpaired electrons and the atom is _____.",
            options: [
              "3, paramagnetic",
              "5, paramagnetic",
              "2, diamagnetic",
              "0, diamagnetic",
              "2, paramagnetic",
            ],
            answer: "3, paramagnetic",
          },
          {
            question:
              "Which one of the following sets of quantum numbers could be those of the last electron of Mo?",
            options: [
              "n = 4, l = 0, ml = 0, ms = +1/2",
              "n = 5, l = 1, ml = 9, ms = -1/2",
              "n = 4, l = 2, ml = -1, ms = +1/2",
              "n = 5, l = 2, ml = +2, ms = -1/2",
              "n = 3, l = 2, ml = 0, ms = +1/2",
            ],
            answer: "n = 4, l = 2, ml = -1, ms = +1/2",
          },
          {
            question: "How many p electrons are there in an atom of rubidium?",
            options: ["12", "18", "24", "9", "6"],
            answer: "18",
          },
          {
            question:
              "Select the term best describing the series of elements: Mn, Fe, Co, Ni, Cu.",
            options: [
              "d-transition metals",
              "representative elements",
              "metalloids",
              "alkaline earth metals",
              "halogens",
            ],
            answer: "d-transition metals",
          },
          {
            question: "Which element has the largest atomic radius?",
            options: ["Li", "Na", "Rb", "F", "I"],
            answer: "Rb",
          },
          {
            question:
              "Which of the following terms accurately describes the energy associated with: Li(g) → Li⁺(g) + e⁻?",
            options: [
              "electron affinity",
              "binding energy",
              "ionization energy",
              "electronegativity",
              "none of these",
            ],
            answer: "ionization energy",
          },
          {
            question:
              "All of the following properties of the alkaline earth metals increase going down the group except:",
            options: [
              "atomic radius",
              "first ionization energy",
              "ionic radius",
              "atomic mass",
              "atomic volume",
            ],
            answer: "first ionization energy",
          },
          {
            question: "Which of the following is an ionic hydride?",
            options: ["PH₃", "H₂S", "HI", "KH", "CH₄"],
            answer: "KH",
          },
          {
            question: "Which of the following is the most basic oxide?",
            options: ["N₂O₃", "N₂O₅", "P₄O₆", "P₄O₁₀", "Bi₂O₅"],
            answer: "Bi₂O₅",
          },
          {
            question: "Arrhenius defined an acid as:",
            options: [
              "a species that can donate a proton",
              "a species that can accept a proton",
              "a source of OH⁻ ions in water",
              "a source of H⁺ ions in water",
              "a species that can accept a pair of electrons",
            ],
            answer: "a source of H⁺ ions in water",
          },
          {
            question: "In the Bronsted-Lowry system, a base is defined as:",
            options: [
              "a proton donor",
              "a hydroxide donor",
              "an electron-pair acceptor",
              "a water-former",
              "a proton acceptor",
            ],
            answer: "a proton acceptor",
          },
          {
            question: "In the equation: HF + H₂O ⇌ H₃O⁺ + F⁻",
            options: [
              "H₂O is a base and HF is its conjugate acid",
              "H₂O is an acid and HF is the conjugate base",
              "HF is an acid and F⁻ is its conjugate base",
              "HF is a base and H₃O⁺ is its conjugate acid",
              "HF is a base and F⁻ is its conjugate acid",
            ],
            answer: "HF is an acid and F⁻ is its conjugate base",
          },
          {
            question:
              "For the system shown here: HOBr + OH⁻ ⇌ H₂O + OBr⁻, Bronsted would classify the base species as:",
            options: [
              "OH⁻ and HOBr",
              "H₂O and OH⁻",
              "OBr⁻ and OH⁻",
              "OBr⁻ and HOBr",
              "H₂O and HOBr",
            ],
            answer: "OBr⁻ and OH⁻",
          },
          {
            question: "Which is the strongest acid?",
            options: ["HClO₄", "HClO₃", "HClO₂", "HClO", "HF"],
            answer: "HClO₄",
          },
          {
            question: "Which of these species is probably the weakest acid?",
            options: ["HCl", "H₃PO₄", "H₂PO₄⁻", "HPO₄²⁻", "HNO₃"],
            answer: "HPO₄²⁻",
          },
          {
            question:
              "Which one of the following represents the net ionic equation for the reaction of nitric acid with aluminum hydroxide?",
            options: [
              "3H⁺ + Al(OH)₃ → Al³⁺ + 3H₂O",
              "3HNO₃ + Al(OH)₃ → Al(NO₃)₃ + 3H₂O",
              "HNO₃ + OH⁻ → NO₃⁻ + H₂O",
              "H⁺ + OH⁻ → H₂O",
              "3NO₃⁻ + Al³⁺ → Al(NO₃)₃",
            ],
            answer: "3H⁺ + Al(OH)₃ → Al³⁺ + 3H₂O",
          },
          {
            question:
              "Which one of the following is an amphoteric metal hydroxide?",
            options: ["KOH", "Ba(OH)₂", "Pb(OH)₂", "LiOH", "Mg(OH)₂"],
            answer: "Pb(OH)₂",
          },
          {
            question: "According to the Lewis theory, a base _____ .",
            options: [
              "is a proton acceptor",
              "is a proton donor",
              "makes available a share in a pair of electrons",
              "produces OH⁻ ions in aqueous solution",
              "accepts a share in a pair of electrons",
            ],
            answer: "makes available a share in a pair of electrons",
          },
          {
            question:
              "What is the sum of all coefficients when the following net ionic equation is balanced using the smallest whole number coefficients possible? MnO₄⁻ + Mn²⁺ → MnO₂ (in basic solution)",
            options: ["19", "16", "13", "11", "7"],
            answer: "13",
          },
        ],
      },
      {
        code: "CHE102",
        questions: [
          {
    question: "Which of the following is otherwise known as grain alcohol?",
    options: ["Propanol", "Butanol", "Ethanol", "Methanol"],
    answer: "Ethanol"
  },
  {
    question: "Alcohols have higher boiling points than alkanes of similar molecular weight because:",
    options: [
      "Oxygen is present in alcohols which is deficient in alkanes",
      "Strong ionic bonding is present in alcohols while covalent bonding is present in alkanes",
      "Intermolecular hydrogen bonding is present between oxygen of the hydroxyl group with other molecules of alcohols which is absent in alkanes",
      "Alkanes are largely hydrocarbons which mostly are in gaseous states"
    ],
    answer: "Intermolecular hydrogen bonding is present between oxygen of the hydroxyl group with other molecules of alcohols which is absent in alkanes"
  },
  {
    question: "The carbon atom bonded to a hydroxyl group is called:",
    options: ["Carbol", "Carbocation", "Carbinol", "Carbene"],
    answer: "Carbinol"
  },
  {
    question: "Glycols have ______ hydroxyl group(s).",
    options: ["One", "Two", "Three", "Four"],
    answer: "Two"
  },
  {
    question: "Which of the alcohols is otherwise known as wood spirit?",
    options: ["Ethanol", "Propanol", "Methanol", "Butanol"],
    answer: "Methanol"
  },
  {
    question: "Which of these is not another name for 2-propanol?",
    options: ["Isopropanol", "Isopropyl alcohol", "Rubbing alcohol", "Vinylpropanol"],
    answer: "Vinylpropanol"
  },
  {
    question: "Alcohols react with active metals (Na, K, etc.) to produce ______ gas.",
    options: ["Oxygen", "Hydrogen", "Nitrogen", "Helium"],
    answer: "Hydrogen"
  },
  {
    question: "Which of these chemicals would you recommend for a person who has dry skin?",
    options: ["Ethane-1,2-diol", "Propane-1,2,3-triol", "Glycol", "Glyoxal"],
    answer: "Propane-1,2,3-triol"
  },
  {
    question: "The green engine coolant in an automobile radiator will likely contain one of these:",
    options: ["Glycerol", "Ethane-1,2-diol", "Ethylene", "2-propanol"],
    answer: "Ethane-1,2-diol"
  },
  {
    question: "An example of a polyhydric alcohol is:",
    options: ["Glycerol", "Glycol", "Cellulose", "Polymer"],
    answer: "Cellulose"
  },
  {
    question: "The formation of ethylene glycol from ethylene is an example of:",
    options: ["Oxidation", "Reduction", "Dehydration", "Hydrogenation"],
    answer: "Oxidation"
  },
  {
    question: "Which of these is a secondary alcohol?",
    options: ["CH3CH2OH", "CH3(CH3)CHOH", "CH3(CH3)2COH", "CH3CH2COH"],
    answer: "CH3(CH3)CHOH"
  },
  {
    question: "An example of a compound that contains a carbonyl group is:",
    options: ["H2CO", "CH3OH", "CH2CH2", "CH3OCH3"],
    answer: "H2CO"
  },
  {
    question: "One mole of NaBH4 reacts with 1 mole of acetone (CH3COCH3), to give after treatment with aqueous acid:",
    options: ["Propanoic acid", "2-propanone", "2-propanol", "2-propanal"],
    answer: "2-propanol"
  },
  {
    question: "Which of these is not true about alcohols?",
    options: [
      "The melting and boiling points of butanol is higher than ethanol",
      "Ethanol is more soluble in water than octanol",
      "Hexanol is more miscible with water than Methanol",
      "The boiling point of methanol is higher than that of ethane"
    ],
    answer: "Hexanol is more miscible with water than Methanol"
  },
  {
    question: "LAH reacts with glyoxal to give:",
    options: ["CH3CO2H", "HOCH2CH2OH", "H2C=CH2", "HOCH2CO2H"],
    answer: "HOCH2CH2OH"
  },
  {
    question: "The correct name for the structure drawn is:",
    options: [
      "4-isopropoxyl-3-methylhexan-2-ol",
      "4-ethyl-3-methyl-hexan-2,5-diol",
      "Nonan-2,5-diol",
      "4-ethyl-2,3,5-trimethylhexan-1,6-diol"
    ],
    answer: "4-ethyl-2,3,5-trimethylhexan-1,6-diol"
  },
  {
    question: "Which of these will not mix with water in all proportions?",
    options: ["Ethanol", "Methanol", "t-butanol", "Nonanol"],
    answer: "Nonanol"
  },
  {
    question: "LAH reacts with H2C=CH-CHO to give:",
    options: ["CH3CH2COH", "CH3CH2CH2OH", "H2C=CHCOOH", "H2C=CHCH2OH"],
    answer: "H2C=CHCH2OH"
  },
  {
  question: "Alcohol can be prepared by all the following ways except?",
  options: [
    "Addition of acid to alkene",
    "Addition of bromine water to alkene",
    "Addition of borane tetrahydrofuran + hydrogen peroxide",
    "Addition of Grignard reagent to alkene followed by alkaline hydrolysis"
  ],
  answer: "Addition of Grignard reagent to alkene followed by alkaline hydrolysis"
},
{
  question: "Which of these compounds has no carbonyl group present in it?",
  options: ["Alkanals", "Amides", "Acid chlorides", "Nitriles"],
  answer: "Nitriles"
},
{
  question: "In a carbonyl group, the oxygen atom is said to be:",
  options: [
    "Electrophilic and reacts with nucleophiles",
    "Nucleophilic and reacts with electrophiles",
    "Electronegative and reacts with bases",
    "Nucleophilic and reacts with bases"
  ],
  answer: "Nucleophilic and reacts with electrophiles"
},
{
  question: "In the reduction of ketone to a secondary alcohol by either NaBH₄ or LAH, why will you prefer not to add aqueous acid in the first step?",
  options: [
    "It will reduce a ketone to a primary alcohol instead",
    "There will be no reaction",
    "Acid will have reacted with the reagent before the carbonyl has any chance to undergo reduction",
    "It causes a serious explosion that can set the whole lab on fire"
  ],
  answer: "Acid will have reacted with the reagent before the carbonyl has any chance to undergo reduction"
},
{
  question: "Reaction involving the use of lithium aluminium hydride (LAH) must always be in inert solvents because:",
  options: [
    "LAH is inactive in any other solvent",
    "Reactive solvents will produce large amounts of side reaction products",
    "LAH will react with solvents having acidic hydrogen atoms",
    "LAH is very reactive and catches fire easily"
  ],
  answer: "LAH will react with solvents having acidic hydrogen atoms"
},
{
  question: "Why will you prefer LAH to NaBH₄ as reducing agent for carbonyl group?",
  options: [
    "LAH is cheaper than NaBH₄",
    "NaBH₄ is too slow to reduce carbonyl group",
    "NaBH₄ is not as selective as LAH",
    "LAH is more environment-friendly than LAH"
  ],
  answer: "NaBH₄ is too slow to reduce carbonyl group"
},
{
  question: "What are the products of the reaction of CH₃CH₂C(O)OCH₃ with LAH followed by treatment with acid?",
  options: [
    "1-propanol and methanol",
    "Propanal and methanol",
    "Ethanol and ethanoic acid",
    "2-propanol and methanol"
  ],
  answer: "1-propanol and methanol"
},
{
  question: "Which of these reagents will give a saturated alcohol with an unsaturated aldehyde?",
  options: ["NaBH₄/H₃O⁺", "LAH/H₃O⁺", "H₂/Raney Nickel", "CH₃MgBr"],
  answer: "H₂/Raney Nickel"
},
{
  question: "What is X in this reaction involving H₃O⁺ in the reaction of RMgX with a carbonyl compound?",
  options: [
    "CH₃CHCHCH₂COH",
    "CH₃CH₂CH₂CH₂COH",
    "CH₃CHCH₂CH₂COH",
    "CH₃CH₂CH₂CHCOH"
  ],
  answer: "CH₃CHCHCH₂COH"
},
{
  question: "What is the function of H₃O⁺ in Grignard reactions?",
  options: [
    "To produce magnesium salt of an alkoxide ion",
    "To convert the alkoxide ion to alcohol",
    "To neutralize the alkaline reaction medium",
    "To reduce the carbonyl group to alcohol"
  ],
  answer: "To neutralize the alkaline reaction medium"
},
{
  question: "Reactions involving RMgX must be carried out in inert solvents because:",
  options: [
    "Solvents having acidic protons will react with and destroy the reagent before it could react with the carbonyl compound",
    "Reactive solvents will interact with the reagent to form undesired products",
    "RMgX, being a form of salt, is very reactive toward solvents having acidic protons",
    "RMgX is a very sensitive reagent and becomes deactivated on contact with reactive solvents"
  ],
  answer: "Solvents having acidic protons will react with and destroy the reagent before it could react with the carbonyl compound"
},
{
  question: "Which of these groups does not possess an acidic proton?",
  options: ["−C≡CH", "−OH", "−OCH₃", "−NH₂"],
  answer: "−OCH₃"
},
{
  question: "What is (are) the product(s) of this reaction?",
  options: [
    "3-methyl-3-pentanone",
    "3-methyl-3-pentanone and methanol",
    "3-methylpentan-3-ol and methanol",
    "3-methylpentan-3-ol"
  ],
  answer: "3-methylpentan-3-ol and methanol"
},
{
  question: "What is the product of the reaction of 1 equivalent of a Grignard reagent with an ester, acyl chloride, or carboxylate salt?",
  options: ["Aldehyde", "Alkanone", "Alkanoic acid", "Alcohol"],
  answer: "Alkanone"
},
{
  question: "Which of these reagents will oxidize primary alcohols directly to aldehydes?",
  options: ["Cr₂O₇²⁻", "MnO₄⁻", "PCC", "HIO₄"],
  answer: "PCC"
},
{
  question: "Oxidation of secondary alcohols in either acidic or basic conditions will give:",
  options: ["Aldehydes", "Ketones", "Ozonides", "Carboxylic acids"],
  answer: "Ketones"
},
{
  question: "What is the product you would obtain if you oxidize a primary alcohol using dichromate or permanganate?",
  options: ["Alkanone only", "No product", "Alkanone and alkanal", "Alkanal only"],
  answer: "No product"
},
 {
    question: "A terminal ketone is otherwise known as",
    options: ["Aldehyde", "Alkanone", "Alkanoic acid", "Freon"],
    answer: "Aldehyde"
  },
  {
    question: "The carbonyl group is capable of undergoing the following reactions except",
    options: ["Oxidation", "Reduction", "Nucleophilic addition", "Elimination"],
    answer: "Elimination"
  },
  {
    question: "The preservative used for biological specimens contains",
    options: ["Ethanol", "Methanal", "Formic acid", "Trioxane"],
    answer: "Methanal"
  },
  {
    question: "To prepare formalin I would dissolve",
    options: [
      "73g formaldehyde in 17g water",
      "37g formaldehyde in 63g water",
      "37g formaldehyde in 100g water",
      "63g formaldehyde in 37g water"
    ],
    answer: "37g formaldehyde in 63g water"
  },
  {
    question: "A pure source of methanal is",
    options: ["Dry formaldehyde", "Trioxane", "Dioxane", "Acetone"],
    answer: "Trioxane"
  },
  {
    question: "Acetone is used in organic cleaning glassware because it is",
    options: ["Very cheap", "Highly volatile", "Colourless and non-viscous", "Colourless and soapy"],
    answer: "Highly volatile"
  },
  {
    question: "Which of these could wood varnishes contain?",
    options: ["Propanol", "2-butanone", "Benzene", "Ethanol"],
    answer: "2-butanone"
  },
  {
    question: "CH3CHO reacts first with CH3MgCl and then with dilute acid to give",
    options: ["Ethane", "Butan-2-ol", "Butane", "No reaction"],
    answer: "Butan-2-ol"
  },
  {
    question: "Lithium reacts with n-butyl chloride to give",
    options: ["n-butane", "n-butyllithium", "Chlorine", "Hydrogen"],
    answer: "n-butyllithium"
  },
  {
    question: "Formaldehyde (HCHO) reacts first with CH3MgCl and then with dilute acid to give a",
    options: ["Primary alcohol", "Secondary alcohol", "Tertiary alcohol", "Quaternary alcohol"],
    answer: "Primary alcohol"
  },
  {
    question: "The oxidation of CH3CH2OH with acidic dichromate (Cr2O7^2−) gives",
    options: ["A ketone", "Ethyl alcohol", "An aldehyde", "An acid"],
    answer: "An acid"
  },
  {
    question: "CH3CH2OH reacts with pyridinium chlorochromate (PCC) to give",
    options: ["A ketone", "An alcohol", "An aldehyde", "An acid"],
    answer: "An aldehyde"
  },
  {
    question: "PBr3 reacts with ethanol to give",
    options: ["Tribromoethane", "Bromoethanol", "Bromoethane", "No reaction"],
    answer: "Bromoethane"
  },
  {
    question: "Thionyl chloride, ClSOCl, reacts with isopropyl alcohol to give",
    options: ["2-chloropropane", "1-chloropropane", "2-propanol", "Acetone"],
    answer: "2-chloropropane"
  },
  {
    question: "Isopropyl alcohol, (CH3)2CHOH, reacts with hot concentrated H2SO4 to give",
    options: ["Propane", "2-propanol", "Propene", "Propyne"],
    answer: "Propene"
  },
  {
    question: "Aldehydes have ——— boiling points than/as alcohols of comparable molecular weight.",
    options: ["Higher", "Lower", "About the same", "Exactly the same"],
    answer: "Lower"
  },
  {
    question: "Acetone is the common name for",
    options: ["1-butanone", "1-propanone", "2-propanone", "2-butanone"],
    answer: "2-propanone"
  },
  {
    question: "Which material is most reactive toward nucleophilic addition?",
    options: ["Acetaldehyde", "Dimethylketone", "Diisopropylketone", "Di-tert-butylketone"],
    answer: "Acetaldehyde"
  },
  {
    question: "The oxidation of 1-propanol with chromic acid yields",
    options: ["An alcohol", "An aldehyde", "A ketone", "An acid"],
    answer: "An acid"
  },
  {
    question: "The oxidation of 2-propanol with chromic acid yields",
    options: ["An alcohol", "An aldehyde", "A ketone", "An acid"],
    answer: "A ketone"
  },
  {
    question: "The oxidation of 1-propanol with PCC gives",
    options: ["An alcohol", "An aldehyde", "A ketone", "An acid"],
    answer: "An aldehyde"
  },
  {
    question: "The oxidation of ——— with ozone followed by reduction with (CH3)2S yields one product, 1,5-pentanedial",
    options: ["1,5-pentanediol", "2,4-pentanedione", "Cyclopentene", "Cyclopentane"],
    answer: "Cyclopentene"
  },
  {
    question: "The acid-catalyzed hydration of cyclodecyne yields",
    options: ["Cyclodecanone", "Cyclodecadiene", "Cyclodecanediol", "Cyclodecanedial"],
    answer: "Cyclodecanone"
  },
  {
    question: "Reduction of acetic acid with Li(tri-tert-butoxy)AlH yields",
    options: ["An acid", "An aldehyde", "An alcohol", "A ketone"],
    answer: "An aldehyde"
  },
  {
    question: "The reaction of acetyl chloride with excess Grignard reagent followed by acidification yields",
    options: ["A ketone", "An ester", "A secondary alcohol", "A tertiary alcohol"],
    answer: "A tertiary alcohol"
  },
  {
    question: "Lithium dimethylcuprate (Gilman reagent) reacts with acyl chloride to give",
    options: ["A ketone", "An ester", "A secondary alcohol", "A tertiary alcohol"],
    answer: "A ketone"
  },
  {
    question: "The cyanide ion −C≡N reacts with a ketone to give",
    options: ["An acid", "A cyanohydrin", "An aldehyde", "An amine"],
    answer: "A cyanohydrin"
  },
  {
    question: "The acid-catalyzed addition of water to formaldehyde gives",
    options: ["A ketal", "A hemiacetal", "An acetal", "A hydrate"],
    answer: "A hydrate"
  },
  {
    question: "The acid-catalyzed addition of 2 mol of alcohol to 1 mol of aldehyde yields",
    options: ["A ketal", "A hemiacetal", "An acetal", "A hydrate"],
    answer: "An acetal"
  },
  {
    question: "Ammonia reacts with an aldehyde to give an",
    options: ["Alcohol", "Amide", "Imine", "Amine"],
    answer: "Imine"
  },
  {
    question: "The reaction of a Wittig reagent with ketones gives",
    options: ["Alkenes", "Ketones", "Aldehydes", "Alkanes"],
    answer: "Alkenes"
  },
  {
    question: "Silver ion, Ag+, reacts with aldehydes to form",
    options: ["A red precipitate", "A silver “mirror”", "A blue solution", "There is no reaction"],
    answer: "A silver “mirror”"
  },
  {
    question: "Dimethylamine reacts with a ketone to give an",
    options: ["Amide", "Imide", "Amine", "Enamine"],
    answer: "Enamine"
  },
  {
    question: "Carbocations are",
    options: [
      "Carbon atoms with a negative charge",
      "Carbon atoms with a positive charge",
      "Carbon atoms with no charge",
      "Any atom with a positive charge"
    ],
    answer: "Carbon atoms with a positive charge"
  },
  {
    question: "A ——— carbocation has the greatest stability.",
    options: ["Methyl", "Primary", "Secondary", "Tertiary"],
    answer: "Tertiary"
  },
  {
    question: "Carbocations are stabilized by adjacent groups that",
    options: ["Donate electrons to", "Withdraw electrons from", "Donate protons to", "Withdraw protons from"],
    answer: "Donate electrons to"
  },
  {
    question: "What is responsible for the high boiling point?",
    options: [
      "Hydrogen bonding existing between molecules",
      "Intermolecular forces of attraction between molecules",
      "Polar interactions between aldehydes and ketones",
      "Dispersion forces between molecules"
    ],
    answer: "Intermolecular forces of attraction between molecules"
  },
  {
    question: "The Markovnikov rule states that a hydrogen atom bonds to the carbon that already is bonded to",
    options: [
      "An equal number of hydrogen atoms",
      "The greatest number of hydrogen atoms",
      "The least number of hydrogen atoms",
      "No hydrogen atoms"
    ],
    answer: "The greatest number of hydrogen atoms"
  },
  {
    question: "Carbocations undergo rearrangement reactions to give",
    options: [
      "More stable carbocations",
      "By hydride shifts",
      "By methyl shifts",
      "For all of the above reasons"
    ],
    answer: "For all of the above reasons"
  },
  {
    question: "Alkenes undergo an acid-catalyzed addition of water to give",
    options: ["Alkynes", "Alkanes", "Ethers", "Alcohols"],
    answer: "Alcohols"
  },
  {
    question: "Borane reacts with alkenes to give",
    options: [
      "The anti-Markovnikov addition product",
      "By a concerted mechanism",
      "Syn addition",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "Diols are synthesized by reacting an alkene with",
    options: ["Water", "Borane", "Ozone", "Osmium tetroxide"],
    answer: "Osmium tetroxide"
  },
  {
    question: "Ozone reacts with 2,3-dimethyl-2-butene to give",
    options: ["One ketone", "Two different ketones", "One aldehyde", "One ketone and one aldehyde"],
    answer: "One ketone"
  },
  {
    question: "The rapid conversion between an enol and its keto form is called",
    options: ["Resonance", "Cationic rearrangement", "Tautomerization", "Hydrogenation"],
    answer: "Tautomerization"
  },
  {
    question: "The solubility of some aldehydes and ketones in water is due to",
    options: [
      "Hydrogen bonding between the molecules of water and those of aldehydes or ketones",
      "Polar interaction and hydrogen bonding between the molecules of water and those of aldehydes or ketones",
      "The intermolecular forces between the molecules of water and those of aldehydes or ketones",
      "Dispersion and van der Waals forces between the molecules of water and those of aldehydes or ketones"
    ],
    answer: "Polar interaction and hydrogen bonding between the molecules of water and those of aldehydes or ketones"
  },
  {
    question: "Aldehydes are said to be more reactive than ketones because",
    options: [
      "The carbonyl carbon in the former is more polar than that of the latter",
      "The carbonyl carbon in the latter is more sterically hindered from nucleophilic attack than in the former",
      "The carbonyl carbon in the former is in better contact with nucleophiles unlike in the latter",
      "The tetrahedral structure of the former possesses higher potential energy than the latter"
    ],
    answer: "The carbonyl carbon in the latter is more sterically hindered from nucleophilic attack than in the former"
  },
  {
    question: "Which of these has the most stable carbocation?",
    options: ["RCOR’", "RCOH", "RCH3", "CH4"],
    answer: "RCOR’"
  },
  {
    question: "The intermediate central carbon atom formed during the reaction of ozone with unsaturated compounds is called",
    options: ["Oxidizing agent", "Ozonide", "Trioxane", "Peroxide"],
    answer: "Ozonide"
  },
  {
    question: "Reaction of alkene with ozone in the presence of hydrogen peroxide produces",
    options: ["Two acids", "Ketone and acid", "Two ketones", "All of the above"],
    answer: "All of the above"
  },
  {
    question: "Ozonolysis is very important because",
    options: [
      "It is not toxic",
      "It can be used to characterize complex molecules",
      "It takes place at room temperature",
      "It is a means of reducing complex molecules"
    ],
    answer: "It can be used to characterize complex molecules"
  },
  {
    question: "Which of these has the highest boiling point?",
    options: ["Butane", "Butanal", "Butanol", "Butanone"],
    answer: "Butanol"
  },
  {
    question: "What is the product you would get from the hydration of CH3C≡CCH2CH3 using mercury salt?",
    options: [
      "CH3COCH2CH2CH3",
      "CH3CH2COCH2CH3",
      "CH3COCH2CH2CH3 and CH3CH2COCH2CH3",
      "CH3CH2C(OH)CH2CH3"
    ],
    answer: "CH3COCH2CH2CH3 and CH3CH2COCH2CH3"
  },
  {
    question: "Aromatic ketones are prepared by",
    options: [
      "Wittig reactions",
      "Friedel-Crafts acylation",
      "Clemmensen reaction",
      "Mercuration reaction"
    ],
    answer: "Friedel-Crafts acylation"
  },
  {
    question: "Cyanohydrins can be hydrolyzed in the presence of acid to produce",
    options: [
      "Compounds with both hydroxy and carboxylic groups",
      "Beta-amino alcohols",
      "Aldehydes",
      "Ketones"
    ],
    answer: "Compounds with both hydroxy and carboxylic groups"
  },
  {
    question: "What is the product of the reaction of water with ketones?",
    options: ["Acetal", "Hydrate", "Hemiacetal", "Geraniol"],
    answer: "Hydrate"
  },
  {
    question: "What is the final product of the reaction of alcohol with aldehyde?",
    options: ["Hemiacetal", "Acetal", "Hydrate", "Ketal"],
    answer: "Acetal"
  },
  {
    question: "The melting point of members of carboxylic acid homologous series",
    options: [
      "Increases up the series",
      "Decreases up the series",
      "The even carbon acids have higher melting points than their immediate higher and lower members",
      "Shown no definite trend in the series"
    ],
    answer: "The even carbon acids have higher melting points than their immediate higher and lower members"
  },
  {
    question: "The melting points of structural isomers of carboxylic acids are _____ their normal chain counterpart",
    options: [
      "Lower than",
      "Higher than",
      "The same as",
      "Not defined"
    ],
    answer: "Lower than"
  },
  {
    question: "Carboxylic acids have higher boiling points due to",
    options: ["The alkyl chain", "Hydrogen bonding", "Carboxyl group", "Carboxylic acid bonding"],
    answer: "Hydrogen bonding"
  },
  {
    question: "Hell-Volard-Zelinsky reaction is",
    options: ["Regioselective", "Regiospecific", "Stereoselective", "Stereospecific"],
    answer: "Regioselective"
  },
  {
    question: "Hell-Volard-Zelinsky reaction substitutes only",
    options: ["α-carbon atom", "β-carbon atom", "α-hydrogen", "β-hydrogen"],
    answer: "α-hydrogen"
  },
  {
    question: "In Hell-Volard-Zelinsky catalytic reaction, an amount of _____ is needed",
    options: ["Sodium", "Potassium", "Red phosphorus", "Bromonium ion"],
    answer: "Red phosphorus"
  },
  {
    question: "Which of these will reduce carboxylic acid to alcohol?",
    options: ["LiAlH4", "NaBH4", "H2/Pd", "H2/Ni"],
    answer: "LiAlH4"
  },
  {
    question: "ClCH2COOH is more acidic than CH3COOH by reason of",
    options: ["Resonance effect", "Conjugative effect", "Cumulative effect", "Inductive effect"],
    answer: "Inductive effect"
  },
  {
    question: "When the hydrogen of the –COOH is replaced by an alkyl group (R), it becomes",
    options: ["An amide", "An ester", "A ketone", "An alkane"],
    answer: "An ester"
  },
  {
    question: "The end result of the reduction of carboxylic acid by borane (B2H4) is",
    options: ["An aldehyde", "A ketone", "An alcohol", "An alkane"],
    answer: "An alcohol"
  },
  {
    question: "Benzene can be differentiated from an alkene by the reaction",
    options: [
      "It burns with a sooty luminous flame",
      "It boils at 78°C",
      "It does not decolorize bromine water",
      "It melts at 5.5°C"
    ],
    answer: "It does not decolorize bromine water"
  },
  {
    question: "Which of these groups will be a good meta-directing group?",
    options: ["-NH2", "-CH3", "-NO2", "-Cl"],
    answer: "-NO2"
  },
  {
    question: "Benzene is insoluble in",
    options: ["Chloroform", "Ethanol", "Water", "Acetone"],
    answer: "Water"
  },
  {
    question: "Benzene can be produced from",
    options: ["Ethylene", "Acetylene", "Methylene", "Propylene"],
    answer: "Acetylene"
  },
  {
    question: "Benzene is resistant to oxidation due to",
    options: ["Three conjugated bonds", "Cumulative addition and reduction", "Double bonds", "Conjugated bonds"],
    answer: "Conjugated bonds"
  },
  {
    question: "Group 18 elements like Ar, He, Ne, and Kr are known as:",
    options: ["Noble gases", "Noble metals", "Precious stones", "Alkali"],
    answer: "Noble gases"
  },
  {
    question: "Sucrose, ice cube, sulphur, phosphorus, and iodine are known as:",
    options: ["Metallic crystals", "Molecular crystals", "Jasmine", "Ionic crystals"],
    answer: "Molecular crystals"
  },
  {
    question: "Group 17 elements like I, Br, F, Cl are known as:",
    options: ["Hydrogen", "Halogens", "Petrogens", "Androgens"],
    answer: "Halogens"
  },
  {
    question: "The lattice points of ionic crystals are occupied by:",
    options: ["Molecules", "Tubers", "Charged ions", "Chronicles"],
    answer: "Charged ions"
  },
  {
    question: "Which of these is the property of diamond?",
    options: ["Hardness", "Softness", "Brittleness", "Ductility"],
    answer: "Hardness"
  },
  {
    question: "Metallic crystals contain:",
    options: [
      "Molecules",
      "Charged ions of the metal in a sea or cloud of electrons",
      "Butter",
      "Yam"
    ],
    answer: "Charged ions of the metal in a sea or cloud of electrons"
  },
  {
    question: "Electrovalent compounds are held together by:",
    options: ["Molecular forces", "Electrovalent forces", "Covalent forces", "Military forces"],
    answer: "Electrovalent forces"
  },
  {
    question: "The major use of graphite is:",
    options: ["Electrodes", "Portal", "Primer", "Emerald"],
    answer: "Electrodes"
  },
  {
    question: "Diamond is used primarily as:",
    options: ["Jewelry", "Pavement", "Food", "Farm"],
    answer: "Jewelry"
  },
  {
    question: "A solution of pH = 5 has a hydrogen ion concentration of...",
    options: [
      "10⁵ mol/dm³",
      "10⁻⁵ mol/dm³",
      "10 mol/dm³",
      "5 mol/dm³"
    ],
    answer: "10⁻⁵ mol/dm³"
  },
  {
    question: "Which of these is a strong acid?",
    options: [
      "HCl",
      "CH₃COOH",
      "H₂CO₃",
      "H₂SO₃"
    ],
    answer: "HCl"
  },
  {
    question: "A base is defined as a compound that...",
    options: [
      "accepts protons",
      "donates protons",
      "donates electrons",
      "accepts electrons"
    ],
    answer: "accepts protons"
  },
  {
    question: "A substance that changes color at different pH is called...",
    options: [
      "a salt",
      "a base",
      "an indicator",
      "an acid"
    ],
    answer: "an indicator"
  },
  {
    question: "An amphoteric substance is one that...",
    options: [
      "is both acidic and basic",
      "is neutral",
      "forms salts",
      "turns red litmus blue"
    ],
    answer: "is both acidic and basic"
  },
  {
    question: "When acids react with metals, the gas evolved is...",
    options: [
      "oxygen",
      "carbon dioxide",
      "hydrogen",
      "chlorine"
    ],
    answer: "hydrogen"
  },
  {
    question: "When an acid reacts with a base, the products are...",
    options: [
      "salt and water",
      "gas and salt",
      "water and oxygen",
      "acid and base"
    ],
    answer: "salt and water"
  },
  {
    question: "The pH scale is a measure of...",
    options: [
      "alkalinity",
      "hydrogen ion concentration",
      "electrolysis",
      "acid strength only"
    ],
    answer: "hydrogen ion concentration"
  },
  {
    question: "Which of the following is an alkali?",
    options: [
      "NaOH",
      "CuO",
      "MgO",
      "Al₂O₃"
    ],
    answer: "NaOH"
  },
  {
    question: "An acid that ionizes completely in water is said to be...",
    options: [
      "weak",
      "strong",
      "dilute",
      "concentrated"
    ],
    answer: "strong"
  },
  {
    question: "The reaction between an acid and a base is called...",
    options: [
      "electrolysis",
      "neutralization",
      "oxidation",
      "reduction"
    ],
    answer: "neutralization"
  },
  {
    question: "Which of the following gases turns limewater milky?",
    options: [
      "O₂",
      "CO₂",
      "NH₃",
      "H₂"
    ],
    answer: "CO₂"
  },
  {
    question: "Which of these is not a mineral acid?",
    options: [
      "HCl",
      "HNO₃",
      "H₂SO₄",
      "CH₃COOH"
    ],
    answer: "CH₃COOH"
  },
  {
    question: "A solution with a pH of 7 is...",
    options: [
      "acidic",
      "basic",
      "neutral",
      "alkaline"
    ],
    answer: "neutral"
  },
  {
    question: "Which of the following oxides is acidic?",
    options: [
      "CO₂",
      "Na₂O",
      "CaO",
      "MgO"
    ],
    answer: "CO₂"
  },
  {
    question: "Bases that dissolve in water are called...",
    options: [
      "alkalis",
      "salts",
      "acids",
      "neutral compounds"
    ],
    answer: "alkalis"
  },
  {
    question: "A substance that increases the concentration of OH⁻ in water is...",
    options: [
      "an acid",
      "a salt",
      "a base",
      "a buffer"
    ],
    answer: "a base"
  },
  {
    question: "Which of the following is a weak acid?",
    options: [
      "HCl",
      "HNO₃",
      "CH₃COOH",
      "H₂SO₄"
    ],
    answer: "CH₃COOH"
  },
  {
    question: "Which of the following is a strong base?",
    options: [
      "NH₃",
      "Ca(OH)₂",
      "NaOH",
      "Mg(OH)₂"
    ],
    answer: "NaOH"
  },
  {
    question: "Which of these indicators is used in titration involving strong acid and strong base?",
    options: [
      "methyl orange",
      "phenolphthalein",
      "litmus",
      "bromothymol blue"
    ],
    answer: "bromothymol blue"
  },
  {
    question: "Which of these elements will liberate hydrogen from cold water?",
    options: ["Phosphorus", "Sulphur", "Potassium", "Purine"],
    answer: "Potassium"
  },
  {
    question: "Electrolysis is:",
    options: [
      "Use of electrical current to break electrolytic compounds in molten or aqueous state into their constituent elements",
      "Use of hammer to break substances",
      "Use of adhesive to bind surfaces",
      "Use of water to spray"
    ],
    answer: "Use of electrical current to break electrolytic compounds in molten or aqueous state into their constituent elements"
  },
  {
    question: "Which of these is not an alkali element?",
    options: ["Lithium", "Gold", "Sodium", "Potassium"],
    answer: "Gold"
  },
  {
    question: "Which of these elements will displace hydrogen from cold water?",
    options: ["Rubidium", "Copper", "Gold", "Tungsten"],
    answer: "Rubidium"
  },
  {
    question: "The group in a periodic table shares:",
    options: [
      "Similar electronic configuration and physical and chemical properties",
      "Different properties",
      "Different mobility",
      "Different tools"
    ],
    answer: "Similar electronic configuration and physical and chemical properties"
  },
  {
    question: "What force holds covalent compounds together?",
    options: ["Ionic", "Vander Waals", "Cubic", "Rectangular"],
    answer: "Vander Waals"
  },
  {
    question: "Which of these are allotropes of carbon?",
    options: ["Diamond and graphite", "Procter and Gamble", "Silver", "Solar"],
    answer: "Diamond and graphite"
  },
  {
    question: "Gold is a:",
    options: ["Bullet", "Malt", "Metal", "Glass"],
    answer: "Metal"
  },
  {
    question: "Which of these is the characteristic of Transition Elements?",
    options: [
      "Partly filled d-orbitals",
      "Fully filled life cycle",
      "Nonmetals",
      "Polarizable electrodes"
    ],
    answer: "Partly filled d-orbitals"
  },
  {
    question: "Which of these is not the characteristic of Lanthanides and Actinides?",
    options: ["Nonmetals", "Radioactive", "Partially filled f-orbital", "Synthetic elements"],
    answer: "Nonmetals"
  },
  {
    question: "Which of these elements is not a transition metal?",
    options: ["Iron", "Manganese", "Zinc", "Fluorine"],
    answer: "Fluorine"
  },
  {
    question: "Which of these elements is not a halogen?",
    options: ["Fluorine", "Chlorine", "Iodine", "Boron"],
    answer: "Boron"
  },
  {
    question: "Which of these substances is not a good conductor of electricity?",
    options: ["Copper", "Silver", "Iron", "Diamond"],
    answer: "Diamond"
  },
  {
    question: "Why is graphite a good conductor of electricity?",
    options: ["It contains mobile π electrons", "It is rigid", "It flows", "It is a gas"],
    answer: "It contains mobile π electrons"
  },
  {
    question: "When an element with high electron affinity gains an electron to become an anion, its size:",
    options: ["Decreases", "Does not change", "Increases", "Not certain"],
    answer: "Decreases"
  },
  {
    question: "The ions in ionic crystal lattice have:",
    options: ["Same size", "Different sizes", "Unknown sizes", "Large sizes"],
    answer: "Different sizes"
  },
  {
    question: "Which of these substances is amorphous?",
    options: ["Glass", "Sodium chloride", "Calcium nitrate", "Diamond"],
    answer: "Glass"
  },
  {
    question: "Molecular crystals have this property:",
    options: ["Melt at below 100°C", "Very hard solid", "Flows", "Fluid"],
    answer: "Melt at below 100°C"
  },
  {
    question: "Can diamond be converted to graphite?",
    options: ["Yes", "No", "Not certain", "Possible"],
    answer: "No"
  },
  {
    question: "Halogens are highly reactive because they:",
    options: ["Have high electron affinity", "Low ionization energy", "Low boiling point", "Are inert"],
    answer: "Have high electron affinity"
  },
  {
    question: "The reactivity of alkali elements is due to:",
    options: ["Low ionization energy", "High electron affinity", "Inertness", "Not sure"],
    answer: "Low ionization energy"
  },
  {
    question: "Mendeleev’s Periodic Table was based on:",
    options: ["Atomic mass", "Ionization energy", "Atomic radius", "Ionic radius"],
    answer: "Atomic mass"
  },
  {
    question: "NaCl is an ionic compound because:",
    options: [
      "Ions are held in lattice",
      "It is covalent molecule",
      "The melting point is below freezing point",
      "It is formed by sharing of electrons"
    ],
    answer: "Ions are held in lattice"
  },
  {
    question: "Moseley’s Periodic Table was rather based on:",
    options: ["Covalent radius", "Atomic number", "Electron sharing", "Electrode potentials"],
    answer: "Atomic number"
  },
  {
    question: "Metal structure has a sea of delocalized electrons functioning for:",
    options: ["Conduction of electricity", "Covalent bonding", "Molecule", "Electron sharing"],
    answer: "Conduction of electricity"
  },
  {
    question: "Why are members of the same group having similar physical and chemical properties?",
    options: [
      "They have similar electronic configuration",
      "They conduct heat",
      "They are able to conduct electricity",
      "None at all"
    ],
    answer: "They have similar electronic configuration"
  },
  {
    question: "Alkali metals are highly electropositive because they:",
    options: [
      "Hold tightly their outermost electrons",
      "Easily release their outermost electrons for ionization",
      "Have moisture",
      "They are covalent"
    ],
    answer: "Easily release their outermost electrons for ionization"
  },
  {
    question: "Ice, Sulphur, and Iodine are examples of:",
    options: ["Molecular crystals", "Solids with high melting point", "No lattice", "None of the above"],
    answer: "Molecular crystals"
  },
  {
    question: "Graphite, diamond, and quartz are examples of:",
    options: ["Brittle materials", "Strongly covalent crystals", "No rigid structures", "Crude solids"],
    answer: "Strongly covalent crystals"
  },
  {
    question: "Diamond has:",
    options: ["sp³ hybridization", "sp hybridization", "spd hybridization", "spdf hybridization"],
    answer: "sp³ hybridization"
  },
  {
    question: "Graphite is mostly used as:",
    options: ["Glass cutter", "Electrode", "Jewelry", "Brittle material"],
    answer: "Electrode"
  },
  {
    question: "Diamond is an important:",
    options: ["Jewelry", "Lead pencil", "Lubricant", "Braille"],
    answer: "Jewelry"
  },
  {
    question: "Which of these elements is not an alkali metal?",
    options: ["Gold", "Sodium", "Caesium", "Rubidium"],
    answer: "Gold"
  },
  {
    question: "Which of these elements is not an alkaline earth metal?",
    options: ["Sulphur", "Calcium", "Barium", "Magnesium"],
    answer: "Sulphur"
  },
  {
    question: "Covalent compounds are held together by:",
    options: ["Van der Waals forces", "Collagen", "Gum", "Ionic forces"],
    answer: "Van der Waals forces"
  },
  {
    question: "Chlorine, fluorine, bromine, iodine and astatine belong to the group of:",
    options: ["Chalcogen", "Halogen", "Transition metals", "Inner transition metals"],
    answer: "Halogen"
  },
  {
    question: "Lanthanides and Actinides have:",
    options: [
      "Partially filled outermost f-orbitals",
      "No orbital",
      "s-orbital only",
      "None of the above"
    ],
    answer: "Partially filled outermost f-orbitals"
  },
  {
    question: "Noble gases have the following properties:",
    options: [
      "Vacancies in their s-orbitals",
      "No vacancies in their outermost s- or p-orbitals",
      "Vacancies in p-orbitals",
      "Vacancies in d-orbitals"
    ],
    answer: "No vacancies in their outermost s- or p-orbitals"
  },
  {
    question: "Elements in Period 7 in the Periodic Table are unstable with short half-lives because they are:",
    options: ["Synthetic elements", "Naturally occurring", "Stable", "None of the above"],
    answer: "Synthetic elements"
  },
  {
    question: "Helium, xenon, neon, krypton, and argon in Group 18 are called:",
    options: ["Noble gases", "Chalcogens", "Halogens", "Actinides"],
    answer: "Noble gases"
  },
  {
    question: "Is graphite convertible to diamond?",
    options: ["Not sure", "No", "Yes", "Uncertain"],
    answer: "Yes"
  },
  {
    question: "The alcoholic fermentation is a reaction of:",
    options: ["Dehydration", "Hydrolysis", "Esterification", "Catalyzed enzymatically"],
    answer: "Catalyzed enzymatically"
  },
  {
    question: "H₂ does not react with any of the isomers of the following molecular formula:",
    options: ["C₂H₄", "C₂H₂", "C₆H₆", "C₄H₁₀"],
    answer: "C₄H₁₀"
  },
  {
    question: "In which of the following reactions is a C–C bond broken:",
    options: [
      "CH₃–CN + 2H₂",
      "C₆H₅–CH₃ + 3H₂",
      "C₆H₅–NO₂ + 3H₂",
      "C₆H₆ + CH₄"
    ],
    answer: "CH₆ + CH₄"
  },
  {
    question: "Organic compounds can contain other elements such as oxygen or nitrogen. True or False?",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "Organic compounds are always derived from a living source. True or False?",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "An unlimited number of carbon atoms can bond together to form chains. True or False?",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "Most organic compounds contain ionic bonds. True or False?",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "There are more inorganic compounds than organic compounds. True or False?",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "Most inorganic compounds have a higher melting point than organic compounds. True or False?",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "Inorganic compounds are never found in living organisms. True or False?",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "Isomers always have the same empirical (molecular) formula. True or False?",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "Isomers have identical physical and chemical properties. True or False?",
    options: ["True", "False"],
    answer: "False"
  },
  {
    question: "Carbon-carbon bonds are usually strong and covalent. True or False?",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "A characteristic of the alkanes is that they burn in air. True or False?",
    options: ["True", "False"],
    answer: "True"
  },
  {
    question: "What is the reason why there are so many organic compounds?",
    options: [
      "Organic compounds are produced by living things",
      "There are cyclic organic compounds, and none of the inorganic compounds are cyclic",
      "Carbon atoms can form stable covalent bonds with other carbon atoms",
      "Organic compounds can be larger than inorganic compounds"
    ],
    answer: "Carbon atoms can form stable covalent bonds with other carbon atoms"
  },
  {
    question: "Which statement referring to functional groups is correct?",
    options: [
      "Where nothing happens in a chemical reaction",
      "The parts of molecules used to classify organic molecules",
      "Where most chemical reactions occur",
      "Both B and C"
    ],
    answer: "Both B and C"
  },
  {
    question: "Identify the correct statement: The alkanes represent one family of organic compounds composed of carbon compounds:",
    options: [
      "In which the halogens are a major component",
      "In which there is at least one double bond between carbons",
      "That are composed only of carbon and hydrogen",
      "In which hydrogens can be bonded to other hydrogens"
    ],
    answer: "That are composed only of carbon and hydrogen"
  },
  {
    question: "Which of the following is an alcohol?",
    options: ["CH₃CH₂COOH", "CH₃CH₂OH", "CH₃COCH₃", "CH₃CH₂Br"],
    answer: "CH₃CH₂OH"
  },
  {
    question: "What is meant by the term 'saturated' when describing hydrocarbons?",
    options: [
      "The hydrocarbons are saturated with water and are wet",
      "The hydrocarbons are saturated with carbon in its chain",
      "The hydrocarbons are saturated with hydrogens and have only single bonds between carbons",
      "The compound is pure"
    ],
    answer: "The hydrocarbons are saturated with hydrogens and have only single bonds between carbons"
  },
  {
    question: "Which of the following formulas represents a saturated hydrocarbon?",
    options: ["C₂H₆", "C₂H₄", "C₃H₆", "C₅H₁₀"],
    answer: "C₂H₆"
  },
  {
    question: "What is a characteristic shared by the alkanes?",
    options: ["Solids", "Polar", "Flammable", "Colored"],
    answer: "Flammable"
  },
  {
    question: "Which of the following compounds exhibits structural isomerism?",
    options: ["Propane", "Methane", "Butane", "Ethane"],
    answer: "Butane"
  },
  {
    question: "An alkane with 10 carbon atoms is a _____ at room temperature.",
    options: ["Solid", "Liquid", "Gas", "Not possible to tell"],
    answer: "Liquid"
  },
  {
    question: "Alkanes react readily with:",
    options: ["Sodium hydroxide", "Hydrochloric acid", "Sulfuric acid", "None of the above"],
    answer: "None of the above"
  },
  {
    question: "What are the products of this reaction: 2Na + 2H₂O?",
    options: ["2NaOH + H₂", "N₂ + HNO₃", "NO₂ + O₂ + BaO", "None of the above"],
    answer: "2NaOH + H₂"
  },
  {
    question: "The periodic table is a chart that arranges elements according to:",
    options: ["Atomic mass", "Atomic number", "Molecular mass", "None of the above"],
    answer: "Atomic number"
  },
  {
    question: "The principal use of diamond is in:",
    options: ["Lighting", "Jewelry", "Lead pencil", "Saw"],
    answer: "Jewelry"
  },
  {
    question: "The principal use of graphite is in:",
    options: ["Lighting", "Jewelry", "Lead pencil", "Saw"],
    answer: "Lead pencil"
  },
  {
    question: "The ability of metals to conduct electricity is due to:",
    options: ["Surface tension", "Presence of mobile ions", "Presence of mobile electrons", "High tension"],
    answer: "Presence of mobile electrons"
  },
  {
    question: "The reason why graphite is used as electrodes is due to:",
    options: ["Absence of free mobile electrons", "Presence of free mobile π electrons", "Rigid structure", "Flexible structure"],
    answer: "Presence of free mobile π electrons"
  },
  {
    question: "Which of these elements is not an alkaline-earth metal?",
    options: ["Ba", "Sr", "Mg", "Pd"],
    answer: "Pd"
  },
  {
    question: "Which of these elements is not an alkali metal?",
    options: ["Li", "Na", "Ba", "Cs"],
    answer: "Ba"
  },
  {
    question: "Which of these are not properties of hydrogen?",
    options: ["Conduction of electricity", "Reducing agent", "Hardening of oil", "Liberation of copper from copper salt"],
    answer: "Conduction of electricity"
  },
  {
    question: "Hydrogen can be produced in any of these groups except:",
    options: ["Group I", "Group IV", "Group VII", "Group III"],
    answer: "Group III"
  },
  {
    question: "What is a halogen?",
    options: ["Member of group 19 or 0 in the periodic table", "Most electronegative elements", "Member of group 1", "Member of group 2"],
    answer: "Most electronegative elements"
  },
  {
    question: "Which of the following elements is not a halogen?",
    options: ["H", "Cl", "I", "Br"],
    answer: "H"
  },
  {
    question: "Balance this equation: CH₃COOH + NaOH →",
    options: ["CH₃COONa + H₂O", "NaCl + H₂O", "K₂O", "MgCl₂ + H₂O"],
    answer: "CH₃COONa + H₂O"
  },
  {
    question: "What is the principal use of lithium salts?",
    options: ["Treatment of certain mental disorders", "Battery acid", "Commercial train", "Fertilizers"],
    answer: "Treatment of certain mental disorders"
  },
  {
    question: "Potassium sulphate and phosphate are used as:",
    options: ["Battery electrolyte", "Electrodes", "Fertilizers", "Fermentation"],
    answer: "Fertilizers"
  },
  {
    question: "The major use of bromine is in:",
    options: ["Production of insecticides", "Isolation of metals", "Finding of worms", "Grilling of meat"],
    answer: "Production of insecticides"
  },
  {
    question: "Calcium carbide is used in:",
    options: ["Calcinations", "Production of acetylene used for welding purposes", "Rat poisoning", "Chrome plating"],
    answer: "Production of acetylene used for welding purposes"
  },
  {
    question: "Complete the following reaction: 2Na + Cl₂ →",
    options: ["2NaCl", "BaSO₄", "MgO", "PbSO₄"],
    answer: "2NaCl"
  },
  {
    question: "The products of pyrolysis of 2NaNO₃ are:",
    options: ["2NaNO₂ + O₂", "NaCl", "KCl", "PbO"],
    answer: "2NaNO₂ + O₂"
  },
  {
    question: "Sodium and potassium are best prepared by:",
    options: [
      "Hydrolysis of their salts",
      "Electrolysis of their eutectic mixtures",
      "Reaction of their oxides with carbon",
      "Reduction of their oxides with hydrogen"
    ],
    answer: "Electrolysis of their eutectic mixtures"
  },
  {
    question: "Complete this reaction: Zn + 2HCl →",
    options: ["ZnO + O₂", "MgO + H₂", "ZnCl₂ + H₂", "ZnO + HCl"],
    answer: "ZnCl₂ + H₂"
  },
  {
    question: "Complete this reaction: 2Na + 2NH₃ →",
    options: ["NaH₂", "NaCl", "NaHg", "NaNH₂ + H₂"],
    answer: "NaNH₂ + H₂"
  },
  {
    question: "Radium is not stable because it is:",
    options: ["Radioactive with short half-life", "Very stable", "Dormant", "Ionic"],
    answer: "Radioactive with short half-life"
  },
  {
    question: "The product of the pyrolysis of Ca(NO₃)₂ is:",
    options: ["Ammonia", "Oxide", "CaO + NO₂ + O₂", "Barite"],
    answer: "CaO + NO₂ + O₂"
  },
  {
    question: "The reaction between Ca(HCO₃)₂ and 2HCl produces:",
    options: ["CaCl₂ + H₂O + CO₂", "CaSO₄", "Ca₃(PO₄)₂", "MnO"],
    answer: "CaCl₂ + H₂O + CO₂"
  },
  {
    question: "Metals on ionization become charged with smaller:",
    options: ["Sizes", "Sites", "Sources", "Momentum"],
    answer: "Sizes"
  },
  {
    question: "Ionization energy decreases along the period:",
    options: ["True", "False", "Neither true nor false", "None of the above"],
    answer: "False"
  },
  {
    question: "Ionization energy increases along the period:",
    options: ["True", "False", "Neither true nor false", "None of the above"],
    answer: "True"
  },
  {
    question: "Atomic radius decreases along the period:",
    options: ["True", "False", "Neither true nor false", "None of the above"],
    answer: "True"
  },
  {
    question: "Atomic radius increases along the period:",
    options: ["True", "False", "Neither true nor false", "None of the above"],
    answer: "False"
  },
  {
    question: "Ionization energy decreases down the group:",
    options: ["True", "False", "Neither true nor false", "None of the above"],
    answer: "True"
  },
  {
    question: "Ionization energy increases down the group:",
    options: ["True", "False", "Neither true nor false", "None of the above"],
    answer: "False"
  },
  {
    question: "Atomic radius decreases down the group:",
    options: ["True", "False", "Neither true nor false", "None of the above"],
    answer: "False"
  },
  {
    question: "Atomic radius increases down the group:",
    options: ["True", "False", "Neither true nor false", "None of the above"],
    answer: "True"
  },
  {
    question: "Atomic radius remains unchanged down the group:",
    options: ["True", "False", "Neither true nor false", "None of the above"],
    answer: "False"
  },
  {
    question: "Sodium chloride is less soluble in water than in solution of sodium sulphate:",
    options: ["True", "False", "Neither true nor false", "None of the above"],
    answer: "False"
  },
  {
    question: "Potassium chloride is more soluble in water than in solution of sodium chloride:",
    options: ["True", "False", "Neither true nor false", "None of the above"],
    answer: "True"
  },
  {
    question: "Balance the equation: 2LiH + H₂O →",
    options: ["Li₃N", "LiF", "LiCl", "LiOH + H₂"],
    answer: "LiOH + H₂"
  },
  {
    question: "Balance the equation: Na₂O + H₂SO₄ →",
    options: ["Na₂SO₄ + H₂O", "NaOH", "NaCl", "KCl"],
    answer: "Na₂SO₄ + H₂O"
  },
  {
    question: "Balance the equation: CaC₂ + 2H₂O →",
    options: ["C₂H₂ + Ca(OH)₂", "CaO", "CaOCl", "Ca₃(PO₄)₂"],
    answer: "C₂H₂ + Ca(OH)₂"
  },
  {
    question: "Mention the use of CaCO₃:",
    options: ["Manufacture of cement", "Blending of salt", "Cure of hepatitis", "Production of acetylene"],
    answer: "Manufacture of cement"
  },
  {
    question: "The most abundant element in the earth's crust is:",
    options: ["Oxygen", "Argon", "Neon", "Krypton"],
    answer: "Oxygen"
  },
  {
    question: "Lithium hydride is an example of:",
    options: ["Interstitial hydride", "Ionic hydride", "Covalent hydride", "None of the above"],
    answer: "Ionic hydride"
  },
  {
    question: "Lithium hydride is also an example of:",
    options: ["Interstitial hydride", "Ionic hydride", "Covalent hydride", "None of the above"],
    answer: "Covalent hydride"
  },
  {
    question: "Which of these is not a hydride?",
    options: ["Methane", "LiH", "MgH₂", "CaCl₂"],
    answer: "CaCl₂"
  },
  {
    question: "Diamond has which hybridization?",
    options: ["sp", "sp²", "sp³", "spd"],
    answer: "sp³"
  },
  {
    question: "Graphite has which hybridization?",
    options: ["sp", "sp²", "sp³", "spd"],
    answer: "sp²"
  },
  {
    question: "What is the major source of francium?",
    options: ["Nuclear reactor", "Nitrogen", "Gallium", "Cocaine"],
    answer: "Nuclear reactor"
  },
  {
    question: "Barite is the source of:",
    options: ["Barium", "Strontium", "Silver", "Gold"],
    answer: "Barium"
  },
  {
    question: "Is graphite convertible to diamond?",
    options: ["Yes", "No", "Uncertain", "None of the above"],
    answer: "Yes"
  },
  {
    question: "Electrolysis of water produces:",
    options: ["Hydrogen and oxygen", "Nitrogen and coke", "Colanut", "Bitter cola"],
    answer: "Hydrogen and oxygen"
  },
  {
    question: "Balance this equation: Sr(OH)₂ + 2HNO₃ →",
    options: ["Sr(NO₃)₂ + 2H₂O", "BaSO₄", "BaO", "Phosphorus"],
    answer: "Sr(NO₃)₂ + 2H₂O"
  },
  {
    question: "Balance the reaction equation: CaC₂ + N₂ →",
    options: ["Chlorine", "Argon", "Ca(CN)₂", "Methane"],
    answer: "Ca(CN)₂"
  },
  {
    question: "What is a crystal?",
    options: [
      "A solid with lattice points occupied by ions, atoms or molecules",
      "Glass",
      "Cold room",
      "Liquid"
    ],
    answer: "A solid with lattice points occupied by ions, atoms or molecules"
  },
  {
    question: "Example of an amorphous solid is:",
    options: ["Gold", "Glass", "Silver", "Mites"],
    answer: "Glass"
  },
  {
    question: "The product of this reaction: Ca + 2C is:",
    options: ["CaC₂", "Mallot", "Margot", "Mould"],
    answer: "CaC₂"
  },
  {
    question: "What is a metal?",
    options: [
      "A malleable, ductile, lustrous solid that conducts electricity and heat",
      "Perforator",
      "Plate",
      "Insulator"
    ],
    answer: "A malleable, ductile, lustrous solid that conducts electricity and heat"
  },
  {
    question: "The characteristics of alkali metal compounds is that they are:",
    options: [
      "White and form colourless solution in water",
      "Insoluble in water",
      "Black in colour",
      "None of the above"
    ],
    answer: "White and form colourless solution in water"
  },
  {
    question: "Hydrogen belongs to group VIIb because of the presence of one electron in its outermost shell.",
    options: ["True", "False", "Neither true nor false", "None of the above"],
    answer: "False"
  },
  {
    question: "Which of these is the correct balanced equation: 2LiH + H₂O →",
    options: ["Li₃N", "LiF", "LiCl", "LiOH + H₂"],
    answer: "LiOH + H₂"
  },
  {
    question: "Balance the equation: Na₂O + H₂SO₄ →",
    options: ["Na₂SO₄ + H₂O", "NaOH", "NaCl", "KCl"],
    answer: "Na₂SO₄ + H₂O"
  },
  {
    question: "Balance the equation: CaC₂ + 2H₂O →",
    options: ["C₂H₂ + Ca(OH)₂", "CaO", "CaOCl", "Ca₃(PO₄)₂"],
    answer: "C₂H₂ + Ca(OH)₂"
  },
  {
    question: "Mention the use of CaCO₃:",
    options: ["Manufacture of cement", "Blending of salt", "Cure of hepatitis", "Production of acetylene"],
    answer: "Manufacture of cement"
  },
  {
    question: "The most abundant element in the earth’s crust is:",
    options: ["Oxygen", "Argon", "Neon", "Krypton"],
    answer: "Oxygen"
  },  
        ],
      },
      {
        code: "PHY102",
        questions: [
          {
            question: "The surface integral of the electric field over a surface is called",
            options: [
              "electric field",
              "permitivity",
              "charge",
              "electric flux"
            ],
            answer: "electric flux"
          },
          {
            question: "The potential difference between two points B and A is equal to the ————— in taking a unit positive charge from A to B",
            options: [
              "distance dependent",
              "force",
              "difference",
              "work done"
            ],
            answer: "work done"
          },
          {
            question: "For capacitors in parallel, the potential difference across each capacitor is",
            options: [
              "zero",
              "shared",
              "different",
              "the same"
            ],
            answer: "the same"
          },
          {
            question: "The electrostatic force is conservative because the work done in taking a charge round a closed path is",
            options: [
              "one",
              "infinite",
              "large",
              "zero"
            ],
            answer: "zero"
          },
          {
            question: "When a dielectric material is subjected to a sufficiently strong electric field, it becomes a",
            options: [
              "capacitor",
              "conductor",
              "resistor",
              "transistor"
            ],
            answer: "conductor"
          },
          {
            question: "The work done per unit charge moving from infinity to the point is called",
            options: [
              "universal potential",
              "electric potential",
              "zero potential",
              "magnetic potential"
            ],
            answer: "electric potential"
          },
          {
            question: "The charges on capacitors connected in parallel are in the ratio of their",
            options: [
              "resistivity",
              "capacitance",
              "effective charge",
              "charge"
            ],
            answer: "capacitance"
          },
          {
            question: "Electric potential is measured in",
            options: [
              "J/V",
              "J/C",
              "J C",
              "N C"
            ],
            answer: "J/C"
          },
          {
            question: "The work done in taking a unit positive charge from one point to another in an electric field is ———— of the path chosen between the two points",
            options: [
              "independent",
              "parallel",
              "dependent",
              "perpendicular"
            ],
            answer: "independent"
          },
          {
            question: "The electric field due to an infinite sheet of charge is ———— to the plane of the sheet",
            options: [
              "parallel",
              "circular",
              "opposite",
              "perpendicular"
            ],
            answer: "perpendicular"
          },
          {
            question: "When a dielectric material is inserted between the plates of a capacitor, it increases its",
            options: [
              "permitivity",
              "resistance",
              "capacitance",
              "charge"
            ],
            answer: "capacitance"
          },
          {
            question: "The SI unit of potential difference is the",
            options: [
              "volt",
              "coulomb",
              "metre",
              "ohm"
            ],
            answer: "volt"
          },
          {
            question: "When a positive charge is repelled by another positively charged body, its potential energy becomes",
            options: [
              "increased",
              "decreased",
              "transferred",
              "constant"
            ],
            answer: "decreased"
          },
          {
            question: "When the charge density at any point depends only on the distance of the point from a central point and not on the direction of the charge distribution, it is said to be",
            options: [
              "ellipsoidal",
              "distance dependent",
              "spherically symmetric",
              "directionless"
            ],
            answer: "distance dependent"
          },
          {
            question: "Which of the following is a device that can store electric charge?",
            options: [
              "capacitor",
              "voltmeter",
              "resistor",
              "iron"
            ],
            answer: "capacitor"
          },
          {
            question: "For capacitors connected in series, each has the same",
            options: [
              "charge",
              "wire",
              "current",
              "potential difference"
            ],
            answer: "charge"
          },
          {
            question: "The energy stored in a system of charges is known as",
            options: [
              "total charge",
              "electrostatic potential energy",
              "potential energy",
              "electrokinetics"
            ],
            answer: "electrostatic potential energy"
          },
          {
            question: "The electric field outside a spherically symmetrical shell with radius r and total charge q is directed",
            options: [
              "centrally",
              "linearly",
              "radially",
              "diagonally"
            ],
            answer: "radially"
          },
          {
            question: "A body when raised above the earth’s surface is said to acquire",
            options: [
              "weight",
              "kinetic energy",
              "energy",
              "potential energy"
            ],
            answer: "kinetic energy"
          },
          {
            question: "Which of the following is not an example of dielectric material?",
            options: [
              "mica",
              "glass",
              "wood",
              "steel"
            ],
            answer: "steel"
          },
          {
            question: "The SI unit of electric charge is",
            options: [
              "hertz",
              "joule",
              "newton",
              "coulomb"
            ],
            answer: "coulomb"
          },
          {
            question: "Gauss’s law applies to any hypothetical closed surface called",
            options: [
              "lower point",
              "Gaussians surface",
              "Gaussor",
              "free surface"
            ],
            answer: "Gaussians surface"
          },
          {
            question: "The relation between an electric charge and electric field is expressed by",
            options: [
              "Ohm’s law",
              "Gauss’s law",
              "Newton’s law",
              "Coulomb’s law"
            ],
            answer: "Coulomb’s law"
          },
          {
            question: "Coulomb’s law applies to",
            options: [
              "solids",
              "point charges",
              "point masses",
              "liquid bodies"
            ],
            answer: "point charges"
          },
          {
            question: "Electric field is which type of physical quantity?",
            options: [
              "vector",
              "None of these",
              "scalar",
              "charge"
            ],
            answer: "vector"
          },
          {
            question: "What will happen to two glass rods after being rubbed with silk?",
            options: [
              "repel each other",
              "attract each other",
              "break",
              "displace each other"
            ],
            answer: "repel each other"
          },
          {
            question: "The direction of the electric field is opposite to that of the force if the charge is",
            options: [
              "negative",
              "positive",
              "neutral",
              "large"
            ],
            answer: "negative"
          },
          {
            question: "Electric charge is quantized, occurring only in",
            options: [
              "discrete amounts",
              "None of these",
              "continuous amounts",
              "few amounts"
            ],
            answer: "discrete amounts"
          },
          {
            question: "The electric field is measured in",
            options: [
              "Newton",
              "N/K",
              "Newton per coulomb",
              "coulomb"
            ],
            answer: "Newton per coulomb"
          },
          {
            question: "In conservation of charge, the algebraic sum of the equal and opposite charges on the two bodies is",
            options: [
              "zero",
              "1C",
              "converted",
              "terminal"
            ],
            answer: "zero"
          },
          {
            question: "The fact that electric forces add vectorially is known as the",
            options: [
              "charge addition",
              "principle of charge",
              "Coulomb’s law",
              "superposition principle"
            ],
            answer: "superposition principle"
          },
          {
            question: "The number of lines of force crossing any surface depends on the field strength, the surface orientation of the",
            options: [
              "charge",
              "electric flux",
              "voltage",
              "surface"
            ],
            answer: "electric flux"
          },
          {
            question: "The process of charging two bodies by means of rubbing them together is called charging by",
            options: [
              "None of these",
              "friction",
              "electrons",
              "lightning"
            ],
            answer: "friction"
          },
          {
            question: "The quantity of charge flowing per second through a conductor of 1A is known as",
            options: [
              "Total Amperes",
              "coulomb",
              "volt",
              "watts"
            ],
            answer: "coulomb"
          },
          {
            question: "A region where an electric charge experiences a force is known as",
            options: [
              "magnetic field",
              "charge field",
              "force field",
              "electric field"
            ],
            answer: "electric field"
          },
          {
            question: "The unit of permitivity is",
            options: [
              "farad per metre",
              "farad per coulomb",
              "farad",
              "farad per ampere"
            ],
            answer: "farad per metre"
          },
          {
            question: "Which of the following is the origin of the negative charge?",
            options: [
              "nucleus",
              "electron",
              "proton",
              "neutron"
            ],
            answer: "electron"
          },
          {
            question: "The smallest charge that is possible to obtain is that of",
            options: [
              "battery",
              "electricity",
              "neutron",
              "proton and electron"
            ],
            answer: "proton and electron"
          },
          {
            question: "The electric flux is a",
            options: [
              "vector and scalar",
              "scalar",
              "None of these",
              "vector"
            ],
            answer: "vector"
          },
          {
            question: "The number of lines of force crossing any closed surface is proportional to the net charge",
            options: [
              "electric flux",
              "temperature",
              "net charge",
              "electric field"
            ],
            answer: "electric flux"
          },
          {
            question: "A charge particle velocity in a plane perpendicular to a magnetic field describes a",
            options: ["A. circular trajectory", "B. charge point", "C. horizontal parabola", "D. None of these"],
            answer: "A. circular trajectory"
          },
          {
            question: "According to Faraday’s law, the mass of a substance liberated in electrolysis is proportional to the",
            options: ["A. voltage passed", "B. quantity of electricity passed", "C. electrolytes", "D. charges"],
            answer: "B. quantity of electricity passed"
          },
          {
            question: "In the cathode ray oscilloscope, the electron beam can be deflected either by an electric field or by",
            options: ["A. iron flux", "B. current density", "C. charge particles", "D. magnetic field"],
            answer: "D. magnetic field"
          },
          {
            question: "In the cathode ray oscilloscope, when fast moving electrons strike the glass screen coated with zinc and sulphide they cause",
            options: ["A. fluorescence", "B. incandescence", "C. losses", "D. magnetic field"],
            answer: "A. fluorescence"
          },
          {
            question: "The electrode by which the flow of electrons leaves the electrolyte is called",
            options: ["A. cathode", "B. corridor", "C. anode", "D. None of these"],
            answer: "C. anode"
          },
          {
            question: "Which of the following is not an element of a cathode ray tube",
            options: ["A. bryer", "B. control grid", "C. electron gun", "D. heater"],
            answer: "A. bryer"
          },
          {
            question: "The cyclotron is a machine for accelerating charged particles and ions to a high",
            options: ["A. velocity", "B. cyclons", "C. power", "D. voltage"],
            answer: "A. velocity"
          },
          {
            question: "The chemical equivalent of a substance is its __________ divided by its valency",
            options: ["A. molecular weight", "B. energy", "C. mass", "D. molecular weight"],
            answer: "A. molecular weight"
          },
          {
            question: "When the direction of motion of the charged particle is neither parallel nor perpendicular to the direction of the magnetic field, it describes a",
            options: ["A. magnet", "B. circular trajectory", "C. helical trajectory", "D. scalar"],
            answer: "C. helical trajectory"
          },
          {
            question: "Which of the following is not magnetic",
            options: ["A. steel", "B. nickel", "C. iron", "D. copper"],
            answer: "D. copper"
          },
          {
            question: "A charged particle moving in a uniform electric field follows a parabolic path because it is subjected to a",
            options: ["A. high velocity", "B. constant acceleration", "C. low voltage", "D. uniform speed"],
            answer: "B. constant acceleration"
          },
          {
            question: "The __________ of a substance is the number of times the average mass of one of the molecules is greater than the atomic mass unit",
            options: ["A. molecular weight", "B. atomic mass", "C. atomic weight", "D. molecular mass"],
            answer: "A. molecular weight"
          },
          {
            question: "The process of conducting electricity by an electric solution is known as",
            options: ["A. electrolysis", "B. conduction", "C. None of these", "D. electrification"],
            answer: "A. electrolysis"
          },
          {
            question: "The number of grammes of a substance equal to its molecular weight is called",
            options: ["A. None of these", "B. Amole", "C. Atom", "D. node"],
            answer: "B. Amole"
          },
          {
            question: "A cell designed for the study of electrolysis is called a __________",
            options: ["A. generator", "B. battery", "C. cathode", "D. voltameter"],
            answer: "B. Battery"
          },
          {
            question: "The electrode by which the flow of electrons enters the electrolyte is called",
            options: ["A. passage", "B. cathode", "C. Anode", "D. electrolysis"],
            answer: "B. cathode"
          },
          {
            question: "The direction of magnetic force is perpendicular to",
            options: ["A. only the total velocity", "B. only magnetic field", "C. total velocity and magnetic field", "D. flux density"],
            answer: "C. total velocity and magnetic field"
          },
          {
            question: "The __________ is the use of electrolysis to coat one metal with another",
            options: ["A. galvanization", "B. electroplating", "C. drilling", "D. casting"],
            answer: "B. electroplating"
          },
          {
            question: "When current flows in one direction only, it is called",
            options: ["A. Eddy", "B. A.C", "C. None of these", "D. D.C"],
            answer: "D. D.C"
          },
          {
            question: "The motion of a charged particle moving through a combination of the electric and magnetic fields is described by the",
            options: ["A. Faraday’s law", "B. charge force", "C. Coulomb’s law", "D. Lorenz force"],
            answer: "D. Lorenz force"
          },
          {
            question: "________________ forces hold electrons to nuclei, atoms, and molecules together to give rise to bulk matter",
            options: ["A. electrostatic", "B. electrolyte", "C. electromotive", "D. electric"],
            answer: "A. electrostatic"
          },
          {
            question: "A _________________ is the amount of charge that flows through a cross-section of a wire in one second if there is a steady current of one ampere (IA) in the wire",
            options: ["A. coulomb", "B. potential", "C. Hooke’s", "D. electric charge"],
            answer: "D. electric charge"
          },
          {
            question: "There are ____________ types of electric charges",
            options: ["A. four", "B. three", "C. two", "D. one"],
            answer: "C. two"
          },
          {
            question: "Two ebonite rods rubbed with fur and suspended from a rigid support close to each other by threads will _________________ each other",
            options: ["A. relax", "B. contract", "C. attract", "D. repel"],
            answer: "D. repel"
          },
          {
            question: "A voltmeter connected across a 60Hz ac source reads 240V. Write down the expression of the instantaneous voltage as a function of time.",
            options: ["A. 240cos339.4t", "B. 240sin339.4t", "C. 339.4sin377t", "D. 377cos339.4t"],
            answer: "C. 339.4sin377t"
          },
          {
            question: "The work function of a metal is 3.45eV. Calculate the maximum wavelength of a photon that can eject photoelectrons from the metal",
            options: ["A. 3.6×10−7m", "B. 3.4×10−7m", "C. 2.4×10−8m", "D. 1.6×10−6m"],
            answer: "A. 3.6×10−7m"
          },
          {
            question: "The half-life of a certain radioactive isotope is 32 hours. What fraction of the sample would remain after 16 hours?",
            options: ["A. 0.25", "B. 0.71", "C. 0.62", "D. 0.50"],
            answer: "B. 0.71"
          },
          {
            question: "A potentiometer wire of length 100cm has a resistance of 10Ω. It is connected in series to a resistance R and a cell of emf 2V and negligible internal resistance. A source of emf of 10mV is balanced by a length of 40cm of the potentiometer wire. What is the value of the resistance R?",
            options: ["A. 2000Ω", "B. 950Ω", "C. 200Ω", "D. 790Ω"],
            answer: "D. 790Ω"
          },
          {
            question: "A spectral line is emitted when an atom undergoes transition between two levels with a difference in energy of 2.4eV. What is the wavelength of the line?",
            options: ["A. 287nm", "B. 377 angstrom units", "C. 518nm", "D. 507 angstrom units"],
            answer: "C. 518nm"
          },
          {
            question: "The law of _________________ of charge states that the total electric charge in an isolated system, that is, the algebraic sum of the positive and negative charge present at any time, does not change",
            options: ["A. moment", "B. energy", "C. conservation", "D. momentum"],
            answer: "C. conservation"
          },
          {
            question: "An RLC circuit contains an ac voltage source with rms value of 50V and has a frequency of 600Hz. Suppose that a resistance R = 20Ω, capacitance C = 10.0μF and an inductance L = 4.0mH are connected in series to the source. Find the current in the circuit and the voltmeter reading across the inductor.",
            options: ["A. 0.13A and 12.1V", "B. 4.0A and 23.1V", "C. 2.17A and 32.8V", "D. 1.6A and 24.2V"],
            answer: "C. 2.17A and 32.8V"
          },
          {
            question: "The electric field due to a distribution of charges, according to the _________________________ principle, is the vector sum of the fields of the individual charges making up the distribution",
            options: ["A. permeability", "B. permittivity", "C. superposition", "D. distributive"],
            answer: "C. superposition"
          },
          {
            question: "An air-cored transformer is assumed to be 100% efficient. The ratio of the secondary turns to the primary turns is 1:20. A 240V ac supply is connected to the primary coil and a 6Ω load is connected to the secondary coil. What is the current in the primary coil?",
            options: ["A. 40.0A", "B. 2.0A", "C. 0.14A", "D. 0.10A"],
            answer: "A. 40.0A"
          },
          {
            question: "When a copper surface is illuminated by radiation of wavelength 2537 angstrom units, the value of the stopping potential is found to be 0.24 volts. Calculate the work function of copper.",
            options: ["A. 7.46eV", "B. 3.26eV", "C. 2.67eV", "D. 4.48eV"],
            answer: "D. 4.48eV"
          },
          {
            question: "An RLC circuit is used to tune a radio set to receive NOUN RADIO broadcasting at 105.9MHz in the FM band. The resistance and the inductance of the circuit of the radio set are 12Ω and 1.4μH respectively. What capacitance should the circuit have?",
            options: ["A. 1.64pF", "B. 1.33mF", "C. 2.11pF", "D. 1.51μF"],
            answer: "A. 1.64pF"
          },
          {
            question: "In the relation k = 14πϵo, ϵo is the ___________________ of free space",
            options: ["A. permeability", "B. permittivity", "C. momentum", "D. Coulomb"],
            answer: "B. permittivity"
          },
          {
            question: "The force exerted by charged particles on each other when they are at rest in a frame of reference is called _________________ force",
            options: ["A. electromotive", "B. electrostatic", "C. electrolyte", "D. electric"],
            answer: "B. electrostatic"
          },
          {
            question: "An ac circuit consists of a voltage source v = 200sin120πt and a 6μF capacitor in series. Calculate the current established in the circuit",
            options: ["A. 0.32A", "B. 1.13A", "C. 2.45A", "D. 3.29A"],
            answer: "B. 1.13A"
          },
          {
            question: "The relationship between the electric and magnetic fields of an electromagnetic wave is given by",
            options: ["A. Maxwell’s law", "B. Faraday’s law", "C. Lenz’s law", "D. Ampere’s law"],
            answer: "A. Maxwell’s law"
          },
          {
            question: "______________________ forces, hold electrons to nuclei, atoms and molecules together to give rise to bulk matter",
            options: ["A. electrostatic", "B. electrolite", "C. electromotive", "D. electric"],
            answer: "A. electrostatic"
          },
          {
            question: "A______________________ is the amount of charge that flows through a cross-section of a wire in one second if there is a steady current of one ampere (1A) in the wire",
            options: ["A. coulomb", "B. potential", "C. Hooke’s", "D. electric charge"],
            answer: "D. electric charge"
          },
          {
            question: "There are _____________ types of electric charges",
            options: ["A. four", "B. three", "C. two", "D. one"],
            answer: "C. two"
          },
          {
            question: "Two ebonite rods rubbed with fur and suspended from a rigid support close to each other by threads will____________________ each other",
            options: ["A. relax", "B. contract", "C. attract", "D. repel"],
            answer: "D. repel"
          },
          {
            question: "A voltmeter connected across a 60Hz ac source reads 240V. Write down the expression of the instantaneous voltage as a function of time.",
            options: ["A. 240cos(339.4t)", "B. 240sin(339.4t)", "C. 339.4sin(377t)", "D. 377cos(339.4t)"],
            answer: "C. 339.4sin(377t)"
          },
          {
            question: "The work function of a metal is 3.45eV. Calculate the maximum wavelength of a photon that can eject photoelectrons from the metal",
            options: ["A. 3.6×10−7m", "B. 3.4×10−7m", "C. 2.4×10−8m", "D. 1.6×10−6m"],
            answer: "A. 3.6×10−7m"
          },
          {
            question: "The half-life of a certain radioactive isotope is 32 hours. What fraction of the sample would remain after 16 hours?",
            options: ["A. 0.25", "B. 0.71", "C. 0.62", "D. 0.50"],
            answer: "B. 0.71"
          },
          {
            question: "A potentiometer wire of length 100cm has a resistance of 10Ω. It is connected in series to a resistance R and a cell of emf 2V and negligible internal resistance. A source of emf of 10mV is balanced by a length of 40cm of the potentiometer wire. What is the value of the resistance R?",
            options: ["A. 2000Ω", "B. 950Ω", "C. 200Ω", "D. 790Ω"],
            answer: "D. 790Ω"
          },
          {
            question: "A spectral line is emitted when an atom undergoes transition between two levels with a difference in energy of 2.4eV. What is the wavelength of the line?",
            options: ["A. 287nm", "B. 377 angstrom units", "C. 518nm", "D. 507 angstrom units"],
            answer: "C. 518nm"
          },
          {
            question: "The law of _____________________ of charge states that the total electric charge in an isolated system, that is, the algebraic sum of the positive and negative charge present at any time, does not change",
            options: ["A. moment", "B. energy", "C. conservation", "D. momentum"],
            answer: "C. conservation"
          },
          {
            question: "An RLC circuit contains an ac voltage source with rms value of 50V and has a frequency of 600Hz. Suppose that a resistance R = 20 Ω, capacitance C = 10.0μF, and an inductance L = 4.0mH are connected in series to the source. Find the current in the circuit and the voltmeter reading across the inductor.",
            options: ["A. 0.13A and 12.1V", "B. 4.0A and 23.1V", "C. 2.17A and 32.8V", "D. 1.6A and 24.2V"],
            answer: "C. 2.17A and 32.8V"
          },
          {
            question: "The electric field due to a distribution of charges, according to the _________________________ principle, is the vector sum of the fields of the individual charges making up the distribution",
            options: ["A. permeability", "B. permittivity", "C. superposition", "D. distributive"],
            answer: "C. superposition"
          },
          {
            question: "An air-cored transformer is assumed to be 100% efficient. The ratio of the secondary turns to the primary turns is 1:20. A 240V ac supply is connected to the primary coil and a 6Ω load is connected to the secondary coil. What is the current in the primary coil?",
            options: ["A. 40.0A", "B. 2.0A", "C. 0.14A", "D. 0.10A"],
            answer: "A. 40.0A"
          },
          {
            question: "When a copper surface is illuminated by radiation of wavelength 2537 angstrom units, the value of the stopping potential is found to be 0.24 volts. Calculate the work function of copper.",
            options: ["A. 7.46eV", "B. 3.26eV", "C. 2.67eV", "D. 4.48eV"],
            answer: "D. 4.48eV"
          },
          {
            question: "An RLC circuit is used to tune a radio set to receive NOUN RADIO broadcasting at 105.9MHz in the FM band. The resistance and the inductance of the circuit of the radio set are 12Ω and 1.4μH respectively. What capacitance should the circuit have?",
            options: ["A. 1.64pF", "B. 1.33mF", "C. 2.11pF", "D. 1.51μF"],
            answer: "A. 1.64pF"
          },
          {
            question: "In the relation k = 14πϵ₀, ϵ₀ is the ___________________ of free space",
            options: ["A. permeability", "B. permittivity", "C. momentum", "D. Coulomb"],
            answer: "B. permittivity"
          },
          {
            question: "The force exerted by charged particles on each other when they are at rest in a frame of reference is called __________________ force",
            options: ["A. electromotive", "B. electrostatic", "C. electrolite", "D. electric"],
            answer: "B. electrostatic"
          },
          {
            question: "An ac circuit consists of a voltage source v = 200sin(120πt) and a 6μF capacitor in series. Calculate the current established in the circuit",
            options: ["A. 0.32A", "B. 0.64A", "C. 2.13A", "D. 1.24A"],
            answer: "A. 0.32A"
          },
          {
            question: "Objects with net unlike charges ____________________ each other",
            options: ["A. attract", "B. repel", "C. contract", "D. relax"],
            answer: "A. attract"
          },
          {
            question: "If Q1 and Q2 are the magnitudes of two charges and r is the distance between them, ________________’s law states that the electric force exerted by one charge on the other F is F = kQ1Q2 / r², where k is a constant",
            options: ["A. electric charge", "B. Hooke’s", "C. potential", "D. Coulomb"],
            answer: "D. Coulomb"
          },
        ],
      },
      {
        code: "GNS102",
        questions: [],
      },
      {
        code: "GNS106",
        questions: [
          {
            question: "Aristotle holds that understanding philosophy entails mastering ___",
            options: ["A.God", "B.atheism", "C.theology", "D.othersciences"],
            answer: "D.othersciences"
          },
          {
            question: "The Greek word for wisdom is ___",
            options: ["A.philo", "B.alethia", "C.sophia", "D.philosophy"],
            answer: "C.sophia"
          },
          {
            question: "The natural sciences broke away from philosophy in ___",
            options: ["A.17th century", "B.20th century", "C.19th century", "D.18th century"],
            answer: "D.18th century"
          },
          {
            question: "Thales identified ___ as the primary substance of the universe",
            options: ["A.sand", "B.cold", "C.ashes", "D.water"],
            answer: "D.water"
          },
          {
            question: "___ regarded fire as the primary substance of all reality",
            options: ["A.Anaximenes", "B.Heraclitus", "C.Anaximander", "D.Locke"],
            answer: "B.Heraclitus"
          },
          {
            question: "Anaximenes was the first to explain ___",
            options: ["A.eclipse of the sun", "B.the regenerative power of music", "C.cause of rainbow", "D.that man evolved from fishes"],
            answer: "C.cause of rainbow"
          },
          {
            question: "The first standard comment about the nature and definition of philosophy was made by ___",
            options: ["A.Plato", "B.Aristotle", "C.Isaac Newton", "D.Pythagoras"],
            answer: "B.Aristotle"
          },
          {
            question: "Logos, the Greek word from which Logic derived does not mean___",
            options: ["A.study", "B.discourse", "C.life", "D.word"],
            answer: "D.word"
          },
          {
            question: "Which of these was not among the pre-colonial regional capitals",
            options: ["A.Lagos", "B.Kaduna", "C.Ibadan", "D.Enugu"],
            answer: "C.Ibadan"
          },
          {
            question: "Every philosopher defines philosophy in his or her own way because philosophy is ___",
            options: ["A.old discipline", "B.hard", "C.everyday wisdom", "D.complex"],
            answer: "D.complex"
          },
          {
            question: "The hotel manager with a degree in food and nutrition is heard referring to herself as a philosopher. Her doing so is regarded as ___",
            options: ["A.false identification", "B.impersonation", "C.double assumption of identity", "D.layman use of the term"],
            answer: "D.layman use of the term"
          },
          {
            question: "___ is not a source of knowledge",
            options: ["A. reason", "B. faith", "C. intuition", "D. gossip"],
            answer: "D. gossip"
          },
          {
            question: "___ branch of philosophy is regarded as the theory of knowledge",
            options: ["A. physicalism", "B. metaphysics", "C. epistemology", "D. logic"],
            answer: "C. epistemology"
          },
          {
            question: "___ and ___ qualify a statement as logical",
            options: ["A. truth and observability", "B. contradiction and inferability", "C. deniability and assertability", "D. conditionality and proportionality"],
            answer: "C. deniability and assertability"
          },
          {
            question: "___ is the logical process exhibited in this statement: All lecturers are homosexuals",
            options: ["A. judgement", "B. simple apprehension", "C. reasoning", "D. intuition"],
            answer: "A. judgement"
          },
          {
            question: "__ is not among the three divisions of formal logic",
            options: ["A. logic of propositions", "B. logic of terms", "C. logic of assumptions", "D. logic of relations"],
            answer: "C. logic of assumptions"
          },
          {
            question: "“It shall be well with you,” the pastor thundered to the congregation___ Function of language is at play here",
            options: ["A. Declarative function", "B. Emotive function", "C. Blessing function", "D. Deductive function"],
            answer: "A. Declarative function"
          },
          {
            question: "The type of argument that proceeds from particular to the general is called __",
            options: ["A. Inductive argument", "B. Voluntary argument", "C. Syllogistic", "D. Deductive argument"],
            answer: "A. Inductive argument"
          },
          {
            question: "All Nigerians are rich; Dr Eric Omazu is a Nigerian; Therefore, Dr Eric Omazu is rich",
            options: ["A. All Nigerians are rich", "B. Therefore, Dr Eric Omazu is rich", "C. Dr Eric Omazu is a Nigerian", "D. I do not know whether Dr Eric Omazu is rich or not"],
            answer: "B. Therefore, Dr Eric Omazu is rich"
          },
          {
            question: "An argument that contains three propositions is called___",
            options: ["A. Conclusion", "B. Induction", "C. Premises", "D. Syllogism"],
            answer: "D. Syllogism"
          },
          {
            question: "“The NOUN vice-chancellor is good” The predicate term of the proposition is ___",
            options: ["A. Unknown", "B. NOUN", "C. Vice-chancellor", "D. Good"],
            answer: "D. Good"
          },
          {
            question: "__ is not a conclusion indicator",
            options: ["A. Therefore", "B. For the reason that", "C. Since", "D. Because"],
            answer: "D. Because"
          },
          {
            question: "Evidence for holding a conclusion is called ___",
            options: ["A. Truth table", "B. Inferred parts", "C. Premise", "D. Justification"],
            answer: "C. Premise"
          },
          {
            question: "___ type of definition has truth value",
            options: ["A.extensional definition", "B.theoretical definition", "C.Heuristic definition", "D.Lexical definition"],
            answer: "D.Lexical definition"
          },
          {
            question: "“We are going to deal with anyone who fails to vote Mr. Ajayi in the upcoming election” This is an example of ___fallacy",
            options: ["A.ad baculum", "B.argument against the man", "C.strawman", "D.tu quoque"],
            answer: "B.argument against the man"
          },
          {
            question: "“Let’s eat grandma,” is an example of ___fallacy",
            options: ["A.fallacy of pity", "B.fallacy of amphiboly", "C.fallacy of composition", "D.fallacy of equivocation"],
            answer: "A.fallacy of pity"
          },
          {
            question: "Categorical syllogism asserts or denies ___ between classes",
            options: ["A.premises", "B.logic", "C.relationship", "D.propositions"],
            answer: "C.relationship"
          },
          {
            question: "___ is not an example of fallacy of ambiguity",
            options: ["A.fallacy of pity", "B.fallacy of amphiboly", "C.fallacy of equivocation", "D.fallacy of composition"],
            answer: "A.fallacy of pity"
          },
          {
            question: "Every categorical syllogism contains ___",
            options: ["A.one term", "B.three terms", "C.two terms", "D.four terms"],
            answer: "B.three terms"
          },
          {
            question: "“All students are good” is an example of __",
            options: ["A.universal positive proposition", "B.universal negative proposition", "C.particular negative proposition", "D.particular positive proposition"],
            answer: "A.universal positive proposition"
          },
          {
            question: "___ is the branch of ethics concerned with logic of ethical arguments",
            options: ["A.metaethics", "B.normative ethics", "C.applied ethics", "D.prescriptive ethics"],
            answer: "A.metaethics"
          },
          {
            question: "“I am having my girlfriend for dinner,” is a fallacy of ambiguity because",
            options: ["A.It is an euphemism for saying I will have sex with my girlfriend this evening", "B.I want to eat dinner with a girl who is not married to me", "C.It conveys more than one meaning", "D.I want to practice cannibalism on my girlfriend"],
            answer: "C.It conveys more than one meaning"
          },
          {
            question: "The letter “P” in categorical syllogism represents ___",
            options: ["A.Minor term", "B.Major term", "C.Middle term", "D.Inclusive term"],
            answer: "B.Major term"
          },
          {
            question: "___ is not a characteristic of a syllogism",
            options: ["A.Has independent conclusion", "B.Has at least three propositions", "C.Has at least two propositions", "D.Has one conclusion"],
            answer: "C.Has at least two propositions"
          },
          {
            question: "___ is not a type of definition",
            options: ["A.Lexical definition", "B.Heuristic definition", "C.theoretical definition", "D.extensional definition"],
            answer: "B.Heuristic definition"
          },
          {
            question: "My car is heavy. Therefore, the side mirrors to my car are heavy. This is an example of ___fallacy",
            options: ["A.fallacy of division", "B.fallacy of composition", "C.adcumbum fallacy", "D.dubiosity fallacy"],
            answer: "A.fallacy of division"
          },
          {
            question: "“A is A” expresses __ law of thought",
            options: ["A.law of excluded middle", "B.law of contradiction", "C.identity", "D.inclusivity"],
            answer: "C.identity"
          },
          {
            question: "Teachers are good. Adamu is a teacher. Therefore, Adamu is good. ___ is the major term of this categorical syllogism",
            options: ["A.Teachers", "B.Good", "C.Adamu", "D.None of the above"],
            answer: "A.Teachers"
          },
          {
            question: "The art of attributing qualities of part of a whole to the whole is referred to as ____",
            options: ["A.fallacy of division", "B.adcumbum fallacy", "C.fallacy of composition", "D.dubiosity fallacy"],
            answer: "C.fallacy of composition"
          },
          {
            question: "The Greek word for knowledge is __",
            options: ["A.euthyphro", "B.episteme", "C.apologia", "D.alithia"],
            answer: "B.episteme"
          },
          {
            question: "The terms of a categorical syllogism does not include ___",
            options: ["A.middle term", "B.major term", "C.minor term", "D.inclusive term"],
            answer: "D.inclusive term"
          },
          {
            question: "“Pastor, you are advising me against armed robbery, were you not the one caught with Ogbuefi’s wife?” This is an example of ____",
            options: ["A.situational ad hominem", "B.abusive ad hominem", "C.circumstantial ad hominem", "D.tu quoque ad hominem"],
            answer: "C.circumstantial ad hominem"
          },
          {
            question: "___ and __ are two types of affirmo",
            options: ["A.universal and essential", "B.universal and particular", "C.particular and incubative", "D.particular and essential"],
            answer: "B.universal and particular"
          },
          {
            question: "____ is a function of language",
            options: ["A. Echoistic function", "B. Normative function", "C. Literary function", "D. Expressive function"],
            answer: "D. Expressive function"
          },
          {
            question: "___ is not among Halliday’s functions of language",
            options: ["A. Imaginative", "B. Heuristic", "C. Commissive", "D. Regulatory"],
            answer: "C. Commissive"
          },
          {
            question: "The fallacy that misrepresents a fact, and then goes ahead to attack that misrepresentation is called ___ fallacy",
            options: ["A. Bandwagon", "B. Ad hominem", "C. Accusatory", "D. Strawman"],
            answer: "D. Strawman"
          },
          {
            question: "“If you see any lecturer supporting the current administration, that person has been paid heavily” This is an example of ___ fallacy",
            options: ["A. Strawman", "B. Accusatory", "C. Bandwagon", "D. Ad hominem"],
            answer: "D. Ad hominem"
          },
          {
            question: "__ is not a logical sentence",
            options: ["A. Shut up", "B. You are stupid", "C. Mr Amosi is a drunkard", "D. My father is good"],
            answer: "B. You are stupid"
          },
          {
            question: "Jamiu raised the veil that covered the face of his new bride, “I will be with you till the end of my life” ___ is the function of language expressed here",
            options: ["A. Commissive function", "B. Informative function", "C. Expressive function", "D. Directive function"],
            answer: "A. Commissive function"
          },
          {
            question: "If you have ever heard of the book; “How to do things with words”, kindly identify ___ as the author",
            options: ["A. Wole Soyinka", "B. J.L. Austin", "C. Socrates", "D. Nelson Mandela"],
            answer: "B. J.L. Austin"
          },
          {
            question: "___ is the middle term of the following syllogism: All Kanuris live in the North East; Galadima is a Kanuri; Therefore, Galadima lives in the North East",
            options: ["A. North East", "B. Lives", "C. Galadima", "D. Kanuri"],
            answer: "D. Kanuri"
          },
          {
            question: "All students cheat in exams; I am a student; Therefore, I cheat in exams __ is the major premise of this statement",
            options: ["A. I have never cheated in my exams", "B. All students cheat in exams", "C. Therefore, I cheat in exams", "D. I am a student"],
            answer: "B. All students cheat in exams"
          },
          {
            question: "Errors in reasoning are called ___",
            options: ["A. Irrationality", "B. Fallacies", "C. Mindset", "D. Aberration"],
            answer: "B. Fallacies"
          },
          {
            question: "The abbreviation, LAD means ____",
            options: ["A. Logic and Development", "B. Legal Advancement Digital", "C. Linguistic Advancement Conference", "D. Language Acquisition Device"],
            answer: "D. Language Acquisition Device"
          },
          {
            question: "In informal fallacies ___ does not render an argument fallacious",
            options: ["A. Emotions are appeal to", "B. Argument lacks structure", "C. Arguments are not about the thesis under consideration", "D. At least one premise is false"],
            answer: "D. At least one premise is false"
          },
          {
            question: "In logic, another name for statement is ___",
            options: ["A. truth", "B. proposition", "C. conceptual analysis", "D. fact of matter"],
            answer: "B. proposition"
          },
          {
            question: "Deny the following statement: 'I am a thief'",
            options: ["A. It is my father that was once a thief", "B. There is no single thief in my family", "C. It is you that is a thief", "D. No, I am not a thief"],
            answer: "D. No, I am not a thief"
          },
          {
            question: "The saying that an unexamined life is not worth living is attributable to ___",
            options: ["A. Aristotle", "B. Kukah", "C. Manford", "D. Socrates"],
            answer: "D. Socrates"
          },
          {
            question: "Another name for ethics is called ____",
            options: ["A. moral philosophy", "B. empiricism", "C. character", "D. materialism"],
            answer: "A. moral philosophy"
          },
          {
            question: "In a standard argument, the conclusion is inferred from ___",
            options: ["A. debate", "B. formality", "C. premises", "D. symbolism"],
            answer: "C. premises"
          },
          {
            question: "___ is regarded as the study of first principles",
            options: ["A. politics", "B. metaphysics", "C. metalogical deontic logics", "D. ethics"],
            answer: "B. metaphysics"
          },
          {
            question: "Aristotle named his book that deals with nature ___",
            options: ["A. Physics", "B. De Anima", "C. Versmeneutic", "D. Oncology"],
            answer: "A. Physics"
          },
          {
            question: "Arguments are either deductive or ___",
            options: ["A. imperative", "B. argumentative", "C. inductive", "D. doxastic"],
            answer: "C. inductive"
          },
          {
            question: "_____ is the concern of ethics",
            options: ["A. what ought to be", "B. what is", "C. what was", "D. what will be"],
            answer: "A. what ought to be"
          },
          {
            question: "Deductive arguments move from __ to ___",
            options: ["A. particular to general", "B. general to particular", "C. from horizontal to perpendicular", "D. up to down"],
            answer: "B. general to particular"
          },
          {
            question: "An argument that rests on probability is called ___",
            options: ["A. deductive argument", "B. inductive argument", "C. empirical argument", "D. rational argument"],
            answer: "D. rational argument"
          },
          {
            question: "In logic, when the mind forms the concept of anything, we say that ___ has taken place",
            options: ["A. simple apprehension", "B. intuition", "C. judgement", "D. reasoning"],
            answer: "D. reasoning"
          },
          {
            question: "___ is not a branch of ethics",
            options: ["A. normative ethics", "B. causative ethics", "C. descriptive ethics", "D. metaethics"],
            answer: "B. causative ethics"
          },
          {
            question: "Man’s ability to think is regarded as ___",
            options: ["A. sensibility", "B. reason", "C. productivity", "D. ethics"],
            answer: "B. reason"
          },
          {
            question: "Draw the conclusion of this argument: All lecturers will go to heaven; Dr Uthman is a lecturer; therefore ___",
            options: ["A. Dr Uthman will go to heaven", "B. I have seen a lecturer involved in evil", "C. Dr Uthman is an exception", "D. False, bad lecturers will not go to heaven"],
            answer: "A. Dr Uthman will go to heaven"
          },
          {
            question: "Philosophy is the only discipline that is ___ in nature",
            options: ["A.scientific", "B.universal", "C.old", "D.atheistic"],
            answer: "B.universal"
          },
          {
            question: "___ writings were regarded as Encyclopedia of philosophy by the medieval men",
            options: ["A.Pythagoras", "B.Augustine", "C.Plato", "D.Aristotle"],
            answer: "D.Aristotle"
          },
          {
            question: "___ had his philosophical training in Africa",
            options: ["A.Pythagoras", "B.Plato", "C.Confucius", "D.Augustine"],
            answer: "A.Pythagoras"
          },
          {
            question: "“Honesty is my best policy” is an expression of ____",
            options: ["A.Manifestation of one’s righteousness", "B.One’s philosophy of life", "C.One’s religious belief", "D.Declaration of one’s honesty"],
            answer: "A.Manifestation of one’s righteousness"
          },
          {
            question: "__ is regarded as a group of propositions whose function is to make a claim about something",
            options: ["A.dissertation", "B.law", "C.philosophy", "D.argument"],
            answer: "D.argument"
          },
          {
            question: "In dividing Nigeria into Eastern and Western regions __ was used as the boundary",
            options: ["A.Ikom River", "B.Ndiukwuenu Forest", "C.River Niger", "D.River Benue"],
            answer: "C.River Niger"
          },
          {
            question: "Western Philosophy originated in___",
            options: ["A.Athens", "B.Rome", "C.Miletus", "D.Sicily"],
            answer: "B.Rome"
          },
          {
            question: "___ is not among the sources of philosophy",
            options: ["A.desire for knowledge for its sake", "B.sense of wonder", "C.idleness and poverty", "D.curiosity"],
            answer: "C.idleness and poverty"
          },
          {
            question: "Thales predicted ___ in 585 BC",
            options: ["A.Global famine", "B.death of King Herod", "C.Coming of Jesus", "D.Eclipse"],
            answer: "D.Eclipse"
          }
        ],
      },
      {
        code: "CSC102",
        questions: [
          {
            question: "UNIVAC is",
            options: ["A) Universal Automatic Computer", "B) Universal Array Computer", "C) Unique Automatic Computer", "D) Unvalued Automatic Computer"],
            answer: "A) Universal Automatic Computer"
          },
          {
            question: "The basic operations performed by a computer are",
            options: ["A) Arithmetic operation", "B) Logical operation", "C) Storage and relative", "D) All the above"],
            answer: "D) All the above"
          },
          {
            question: "The two major types of computer chips are",
            options: ["A) External memory chip", "B) Primary memory chip", "C) Microprocessor chip", "D) Both b and c"],
            answer: "D) Both b and c"
          },
          {
            question: "Microprocessors as switching devices are for which generation computers",
            options: ["A) First Generation", "B) Second Generation", "C) Third Generation", "D) Fourth Generation"],
            answer: "D) Fourth Generation"
          },
          {
            question: "What is the main difference between a mainframe and a supercomputer?",
            options: ["A) Super computer is much larger than mainframe computers", "B) Super computers are much smaller than mainframe computers", "C) Supercomputers are focused to execute few programs as fast as possible while mainframe uses its power to execute as many programs concurrently", "D) Supercomputers are focused to execute as many programs as possible while mainframe uses its power to execute few programs as fast as possible."],
            answer: "C) Supercomputers are focused to execute few programs as fast as possible while mainframe uses its power to execute as many programs concurrently"
          },
          {
            question: "ASCII and EBCDIC are the popular character coding systems. What does EBCDIC stand for?",
            options: ["A) Extended Binary Coded Decimal Interchange Code", "B) Extended Bit Code Decimal Interchange Code", "C) Extended Bit Case Decimal Interchange Code", "D) Extended Binary Case Decimal Interchange Code"],
            answer: "A) Extended Binary Coded Decimal Interchange Code"
          },
          {
            question: "The brain of any computer system is",
            options: ["A) ALU", "B) Memory", "C) CPU", "D) Control unit"],
            answer: "C) CPU"
          },
          {
            question: "Storage capacity of magnetic disk depends on",
            options: ["A) tracks per inch of surface", "B) bits per inch of tracks", "C) disk pack in disk surface", "D) All of above"],
            answer: "D) All of above"
          },
          {
            question: "The two kinds of main memory are:",
            options: ["A) Primary and secondary", "B) Random and sequential", "C) ROM and RAM", "D) All of above"],
            answer: "C) ROM and RAM"
          },
          {
            question: "A storage area used to store data to compensate for the difference in speed at which the different units can handle data is",
            options: ["A) Memory", "B) Buffer", "C) Accumulator", "D) Address"],
            answer: "B) Buffer"
          },
          {
            question: "Computer is free from tiresome and boredom. We call it",
            options: ["A) Accuracy", "B) Reliability", "C) Diligence", "D) Versatility"],
            answer: "C) Diligence"
          },
          {
            question: "Integrated Circuits (ICs) are related to which generation of computers?",
            options: ["A) First generation", "B) Second generation", "C) Third generation", "D) Fourth generation"],
            answer: "C) Third generation"
          },
          {
            question: "CD-ROM is a",
            options: ["A) Semiconductor memory", "B) Memory register", "C) Magnetic memory", "D) None of above"],
            answer: "D) None of above"
          },
          {
            question: "A hybrid computer",
            options: ["A) Resembles digital computer", "B) Resembles analogue computer", "C) Resembles both a digital and analogue computer", "D) None of the above"],
            answer: "C) Resembles both a digital and analogue computer"
          },
          {
            question: "Which type of computers uses the 8-bit code called EBCDIC?",
            options: ["A) Minicomputers", "B) Microcomputers", "C) Mainframe computers", "D) Super computer"],
            answer: "C) Mainframe computers"
          },
          {
            question: "The ALU of a computer responds to the commands coming from",
            options: ["A) Primary memory", "B) Control section", "C) External memory", "D) Cache memory"],
            answer: "B) Control section"
          },
          {
            question: "Chief component of first generation computer was",
            options: ["A) Transistors", "B) Vacuum Tubes and Valves", "C) Integrated Circuits", "D) None of above"],
            answer: "B) Vacuum Tubes and Valves"
          },
          {
            question: "To produce high quality graphics (hardcopy) in color, you would want to use a/n",
            options: ["A) RGB monitor", "B) Plotter", "C) Ink-jet printer", "D) Laser printer"],
            answer: "B) Plotter"
          },
          {
            question: "What are the stages in the compilation process?",
            options: ["A) Feasibility study, system design and testing", "B) Implementation and documentation", "C) Lexical Analysis, syntax analysis, and code generation", "D) None of the above"],
            answer: "C) Lexical Analysis, syntax analysis, and code generation"
          },
          {
            question: "Which of the following IC was used in third generation of computers?",
            options: ["A) SSI", "B) MSI", "C) LSI", "D) Both a and b"],
            answer: "C) LSI"
          },
          {
            question: "The main electronic component used in first generation computers was",
            options: ["A) Transistors", "B) Vacuum Tubes and Valves", "C) Integrated Circuits", "D) None of above"],
            answer: "B) Vacuum Tubes and Valves"
          },
          {
            question: "A dumb terminal has",
            options: ["A) an embedded microprocessor", "B) extensive memory", "C) independent processing capability", "D) a keyboard and screen"],
            answer: "D) a keyboard and screen"
          },
          {
            question: "One millisecond is",
            options: ["A) 1 second", "B) 10th of a second", "C) 1000th of a second", "D) 10000th of a second"],
            answer: "C) 1000th of a second"
          },
          {
            question: "The output quality of a printer is measured by",
            options: ["A) Dot per sq. inch", "B) Dot per inch", "C) Dots printed per unit time", "D) All of the above"],
            answer: "D) All of the above"
          },
          {
            question: "Which of the following was a special purpose computer?",
            options: ["A) ABC", "B) ENIAC", "C) EDVAC", "D) All of the above"],
            answer: "A) ABC"
          },
          {
            question: "What was the computer invented by Attanasoff and Clifford?",
            options: ["A) Mark I", "B) ABC", "C) Z3", "D) None of above"],
            answer: "B) ABC"
          },
          {
            question: "Which of the following storage devices can store maximum amount of data?",
            options: ["A) Floppy Disk", "B) Hard Disk", "C) Compact Disk", "D) Magneto Optic Disk"],
            answer: "B) Hard Disk"
          },
          {
            question: "Which computer was considered the first electronic computer until 1973 when court invalidated the patent?",
            options: ["A) ENIAC", "B) MARK I", "C) Z3", "D) ABC"],
            answer: "A) ENIAC"
          },
          {
            question: "A physical connection between the microprocessor memory and other parts of the microcomputer is known as",
            options: ["A) Path", "B) Address bus", "C) Route", "D) All of the above"],
            answer: "B) Address bus"
          },
          {
            question: "High density double sided floppy disks could store _____ of data",
            options: ["A) 1.40 MB", "B) 1.44 GB", "C) 1.40 GB", "D) 1.44 MB"],
            answer: "D) 1.44 MB"
          },
          {
            question: "A high quality CAD system uses the following for printing drawing and graphs",
            options: ["A) Dot matrix printer", "B) Digital plotter", "C) Line printer", "D) All of the above"],
            answer: "B) Digital plotter"
          },
          {
            question: "Which of the following is not an input device?",
            options: ["A) OCR", "B) Optical scanners", "C) Voice recognition device", "D) COM (Computer Output to Microfilm)"],
            answer: "D) COM (Computer Output to Microfilm)"
          },
          {
            question: "The accuracy of the floating-point numbers representable in two 16-bit words of a computer is approximately",
            options: ["A) 16 digits", "B) 6 digits", "C) 9 digits", "D) All of above"],
            answer: "B) 6 digits"
          },
          {
            question: "In most of the IBM PCs, the CPU, the device drivers, memory, expansion slots and active components are mounted on a single board. What is the name of the board?",
            options: ["A) Motherboard", "B) Daughterboard", "C) Bredboard", "D) Fatherboard"],
            answer: "A) Motherboard"
          },
          {
            question: "Magnetic disks are the most popular medium for",
            options: ["A) Direct access", "B) Sequential access", "C) Both of above", "D) None of above"],
            answer: "A) Direct access"
          },
          {
            question: "What is the difference between high-level and low-level language?",
            options: ["A) High-level languages are machine dependent and low-level languages are machine independent", "B) High-level languages are closer to human languages, and low-level languages are closer to machine code", "C) Both are the same", "D) High-level languages are easier to understand than low-level languages"],
            answer: "B) High-level languages are closer to human languages, and low-level languages are closer to machine code"
          },
          {
            question: "Today’s computer giant IBM was earlier known by different name which was changed in 1924. What was that name?",
            options: ["A) Tabulator Machine Co.", "B) Computing Tabulating Recording Co.", "C) The Tabulator Ltd.", "D) International Computer Ltd."],
            answer: "B) Computing Tabulating Recording Co."
          },
          {
            question: "Before a disk drive can access any sector record, a computer program has to provide the record’s disk address. What information does this address specify?",
            options: ["A) Track number", "B) Sector number", "C) Surface number", "D) All of above"],
            answer: "D) All of above"
          },
          {
            question: "The arranging of data in a logical sequence is called",
            options: ["A) Sorting", "B) Classifying", "C) Reproducing", "D) Summarizing"],
            answer: "A) Sorting"
          },
          {
            question: "What is the responsibility of the logical unit in the CPU of a computer?",
            options: ["A) To produce result", "B) To compare numbers", "C) To control flow of information", "D) To do math’s works"],
            answer: "B) To compare numbers"
          },
          {
            question: "Abacus was the first",
            options: ["A) electronic computer", "B) mechanical computer", "C) electronic calculator", "D) mechanical calculator"],
            answer: "D) mechanical calculator"
          },
          {
            question: "If in a computer, 16 bits are used to specify address in a RAM, the number of addresses will be",
            options: ["A) 216", "B) 65,536", "C) 64K", "D) Any of the above"],
            answer: "D) Any of the above"
          },
          {
            question: "Instructions and memory address are represented by",
            options: ["A) Character code", "B) Binary codes", "C) Binary word", "D) Parity bit"],
            answer: "B) Binary codes"
          },
          {
            question: "The terminal device that functions as a cash register, computer terminal, and OCR reader is the:",
            options: ["A) Data collection terminal", "B) OCR register terminal", "C) Video Display terminal", "D) POS terminal"],
            answer: "D) POS terminal"
          },
          {
            question: "A set of flip flops integrated together is called ____",
            options: ["A) Counter", "B) Adder", "C) Register", "D) None of the above"],
            answer: "C) Register"
          },
          {
            question: "People often call ______ as the brain of computer system",
            options: ["A) Control Unit", "B) Arithmetic Logic Unit", "C) Central Processing Unit", "D) Storage Unit"],
            answer: "C) Central Processing Unit"
          },
          {
            question: "Which is used for manufacturing chips?",
            options: ["A) Bus", "B) Control unit", "C) Semiconductors", "D) A and b only"],
            answer: "C) Semiconductors"
          },
          {
            question: "The value of each bead in heaven is",
            options: ["A) 1", "B) 3", "C) 5", "D) 7"],
            answer: "C) 5"
          },
          {
            question: "The first computer introduced in Nepal was",
            options: ["A) IBM 1400", "B) IBM 1401", "C) IBM 1402", "D) IBM1402"],
            answer: "B) IBM 1401"
          },
          {
            question: "Mnemonic a memory trick is used in which of the following language?",
            options: ["A) Machine language", "B) Assembly language", "C) High level language", "D) None of above"],
            answer: "B) Assembly language"
          },
          {
            question: "Instruction in computer languages consists of",
            options: ["A) OPCODE", "B) OPERAND", "C) Both of above", "D) None of above"],
            answer: "C) Both of above"
          },
          {
            question: "Which generation of computer is still under development?",
            options: ["A) Fourth Generation", "B) Fifth Generation", "C) Sixth Generation", "D) Seventh Generation"],
            answer: "B) Fifth Generation"
          },
          {
            question: "A register organized to allow to move left or right operations is called a ____",
            options: ["A) Counter", "B) Loader", "C) Adder", "D) Shift register"],
            answer: "D) Shift register"
          },
          {
            question: "Which was the most popular first generation computer?",
            options: ["A) IBM 650", "B) IBM 360", "C) IBM 1130", "D) IBM 2700"],
            answer: "A) IBM 650"
          },
          {
            question: "Which is considered a direct entry input device?",
            options: ["A) Optical scanner", "B) Mouse and digitizer", "C) Light pen", "D) All of the above"],
            answer: "D) All of the above"
          },
          {
            question: "A set of information that defines the status of resources allocated to a process is",
            options: ["A) Process control", "B) ALU", "C) Register Unit", "D) Process description"],
            answer: "D) Process description"
          },
          {
            question: "Each set of Napier’s bones consisted of ______ rods.",
            options: ["A) 5", "B) 9", "C) 11", "D) 13"],
            answer: "B) 9"
          },
          {
            question: "BCD is",
            options: ["A) Binary Coded Decimal", "B) Bit Coded Decimal", "C) Binary Coded Digit", "D) Bit Coded Digit"],
            answer: "A) Binary Coded Decimal"
          },
          {
            question: "When was the world’s first laptop computer introduced in the market and by whom?",
            options: ["A) Hewlett-Packard, 1980", "B) Epson, 1981", "C) Laplink Traveling Software Inc, 1982", "D) Tandy Model-200, 1985"],
            answer: "B) Epson, 1981"
          },
          {
            question: "From which generation operating systems were developed?",
            options: ["A) First", "B) Second", "C) Third", "D) Fourth"],
            answer: "C) Third"
          },
          {
            question: "The first firm to mass-market a microcomputer as a personal computer was",
            options: ["IBM", "Super UNIVAC", "Radio Shaks", "Data General Corporation"],
            answer: "Radio Shaks"
          },
          {
            question: "How many address lines are needed to address each machine location in a 2048 x 4 memory chip?",
            options: ["10", "11", "8", "12"],
            answer: "11"
          },
          {
            question: "Properly arranged data is called",
            options: ["Field", "Words", "Information", "File"],
            answer: "Information"
          },
          {
            question: "A computer consists of",
            options: ["A central processing unit", "A memory", "Input and output unit", "All of the above"],
            answer: "All of the above"
          },
          {
            question: "Why are vacuum tubes also called valves?",
            options: ["Because they can amplify the weak signals and make them strong", "Because they can stop or allow the flow of current", "Both of above", "None of above"],
            answer: "Both of above"
          },
          {
            question: "John Napier invented Logarithm in",
            options: ["1614", "1617", "1620", "None of above"],
            answer: "1614"
          },
          {
            question: "An integrated circuit is",
            options: ["A complicated circuit", "An integrating device", "Much costlier than a single transistor", "Fabricated on a tiny silicon chip"],
            answer: "Fabricated on a tiny silicon chip"
          },
          {
            question: "What type of control pins are needed in a microprocessor to regulate traffic on the bus, in order to prevent two devices from trying to use it at the same time?",
            options: ["Bus control", "Interrupts", "Bus arbitration", "Status"],
            answer: "Bus arbitration"
          },
          {
            question: "Whereas a computer mouse moves over the table surface, the trackball is",
            options: ["Stationary", "Difficult to move", "Dragged", "Moved in small steps"],
            answer: "Stationary"
          },
          {
            question: "Which of the following is used as a primary storage device?",
            options: ["Magnetic drum", "Hard Disks", "Floppy", "All of above"],
            answer: "Magnetic drum"
          },
          {
            question: "Multi-user systems provided cost savings for small business because they use a single processing unit to link several",
            options: ["Personal computers", "Workstations", "Dumb terminals", "Mainframes"],
            answer: "Dumb terminals"
          },
          {
            question: "What are the three decision making operations performed by the ALU of a computer?",
            options: ["Grater than", "Less than", "Equal to", "All of the above"],
            answer: "All of the above"
          },
          {
            question: "The word processing task associated with changing the appearance of a document is",
            options: ["Editing", "Writing", "Formatting", "All of above"],
            answer: "Formatting"
          },
          {
            question: "Nepal brought a computer for census of 2028 BS. This computer was of",
            options: ["first generation", "second generation", "third generation", "fourth generation"],
            answer: "second generation"
          },
          {
            question: "Algorithm and Flow chart help us to",
            options: ["Know the memory capacity", "Identify the base of a number system", "Direct the output to a printer", "Specify the problem completely and clearly"],
            answer: "Specify the problem completely and clearly"
          },
          {
            question: "Which statement is valid about computer program?",
            options: ["It is understood by a computer", "It is understood by programmer", "It is understood user", "Both a & b"],
            answer: "Both a & b"
          },
          {
            question: "The difference between memory and storage is that memory is _____ and storage is __",
            options: ["Temporary, permanent", "Permanent, temporary", "Slow, fast", "All of above"],
            answer: "Temporary, permanent"
          },
          {
            question: "When was Pascaline invented?",
            options: ["1617", "1620", "1642", "1837"],
            answer: "1642"
          },
          {
            question: "Which of the following statement is valid?",
            options: [
              "Lady Augusta is the first programmer",
              "Ada is the daughter of Lord Byron, a famous English poet",
              "ADA is a programming language developed by US Defense",
              "All of above"
            ],
            answer: "All of above"
          },
          {
            question: "A compiler is a translating program which",
            options: [
              "Translates instruction of a high level language into machine language",
              "Translates entire source program into machine language program",
              "It is not involved in program’s execution",
              "All of above"
            ],
            answer: "All of above"
          },
          {
            question: "What is required when more than one person uses a central computer at the same time?",
            options: ["Light pen", "Mouse", "Digitizer", "Terminal"],
            answer: "Terminal"
          },
          {
            question: "Which of the following is the first computer to use Stored Program Concept?",
            options: ["UNIVAC", "ENIAC", "EDSAC", "None of above"],
            answer: "EDSAC"
          },
          {
            question: "The term gigabyte refers to",
            options: ["1024 bytes", "1024 kilobytes", "1024 megabytes", "1024 gigabyte"],
            answer: "1024 megabytes"
          },
          {
            question: "In which year was UK’s premier computing event started?",
            options: ["1980", "1985", "1986", "1987"],
            answer: "1980"
          },
          {
            question: "Once you load the suitable program and provide required data, computer does not need human intervention. This feature is known as",
            options: ["Accuracy", "Reliability", "Versatility", "Automatic"],
            answer: "Automatic"
          },
          {
            question: "What is a brand?",
            options: [
              "The name of companies that made computers",
              "The name of product a company gives to identify its product in market",
              "A name of class to indicate all similar products from different companies",
              "All of above"
            ],
            answer: "All of above"
          },
          {
            question: "Machine language is",
            options: ["Machine dependent", "Difficult to program", "Error prone", "All of above"],
            answer: "All of above"
          },
          {
            question: "A byte consists of",
            options: ["One bit", "Four bits", "Eight bits", "Sixteen bits"],
            answer: "Eight bits"
          },
          {
            question: "Modern Computers are very reliable but they are not",
            options: ["Fast", "Powerful", "Infallible", "Cheap"],
            answer: "Infallible"
          },
          {
            question: "What is the date when Babbage conceived Analytical engine",
            options: ["1642", "1837", "1880", "1850"],
            answer: "1837"
          },
          {
            question: "What was the expected feature of fifth generation computers when Japan started FGCS?",
            options: ["Operating Systems", "Parallel Processing", "ULSI", "None of above"],
            answer: "Parallel Processing"
          },
          {
            question: "Which of the following memory medium is not used as main memory system?",
            options: ["Magnetic core", "Semiconductor", "Magnetic tape", "Both semiconductor and magnetic tape"],
            answer: "Magnetic tape"
          },
          {
            question: "The storage subsystem in a microcomputer consists mainly of __ or __ media with varying capacities",
            options: ["Memory or video", "Magnetic or optical", "Optical or memory", "Video or magnetic"],
            answer: "Magnetic or optical"
          },
          {
            question: "Programs designed to perform specific tasks is known as",
            options: ["system software", "application software", "utility programs", "operating system"],
            answer: "application software"
          },
          {
            question: "Computer operators",
            options: [
              "writes computer programs for specific problems",
              "operate the device which input and output data from the computer",
              "normally require a college degree in computer science",
              "all of the above"
            ],
            answer: "operate the device which input and output data from the computer"
          },
          {
            question: "Which of the following is not anti-viruses software?",
            options: ["NAV", "F-Prot", "Oracle", "McAfee"],
            answer: "Oracle"
          },
          {
            question: "What is a compiler?",
            options: [
              "A compiler does a conversion line by line as the program is run",
              "A compiler converts the whole of a higher level program code into machine code in one step",
              "A compiler is a general purpose language providing very efficient execution",
              "None of the above"
            ],
            answer: "A compiler converts the whole of a higher level program code into machine code in one step"
          },
          {
            question: "_______ computers are also called personal computers",
            options: ["Mainframe Computer", "Mini Computers", "Micro Computers", "Super Computers"],
            answer: "Micro Computers"
          },
          {
            question: "Which of the following is not input unit device?",
            options: ["scanner", "camera", "plotter", "digitizer"],
            answer: "plotter"
          },
          {
            question: "Identify the correct statement",
            options: [
              "IBM PCs used RISC CPU designs",
              "Macintosh used CISC CPU design",
              "IBM used CISC CPU design",
              "None of above is true"
            ],
            answer: "IBM used CISC CPU design"
          },
          {
            question: "Which of the following statement is false?",
            options: [
              "Mechanical analog computers have existed for thousands of years",
              "There are mechanical analog computers and electronic analog computers.",
              "All electronic computers are digital computers",
              "All of above are false"
            ],
            answer: "All electronic computers are digital computers"
          },
          {
            question: "Which of the following require large computer memory?",
            options: ["Imaging", "Graphics", "Voice", "All of Above"],
            answer: "All of Above"
          },
          {
            question: "Which of the following is machine independence program?",
            options: ["High level language", "Low level language", "Assembly language", "Machine language"],
            answer: "High level language"
          },
          {
            question: "When was the first electro-mechanical computer developed?",
            options: ["1880", "1990", "1944", "None of above"],
            answer: "1944"
          },
          {
            question: "The first machine to successfully perform a long series of arithmetic and logical operations was:",
            options: ["ENIAC", "Mark-I", "Analytic Engine", "UNIVAC-1"],
            answer: "Mark-I"
          },
          {
            question: "Which one is the largest space?",
            options: ["kilobyte", "petabyte", "terabyte", "gigabyte"],
            answer: "petabyte"
          },
          {
            question: "FORTRAN programming language is more suitable for ____",
            options: ["Business Applications", "Marketing Applications", "Scientific Applications", "None of the above"],
            answer: "Scientific Applications"
          },
          {
            question: "The brain of any computer system is",
            options: ["A) Control Unit", "B) Arithmetic Logic Unit", "C) Central Processing Unit", "D) Storage Unit"],
            answer: "C) Central Processing Unit"
          },
          {
            question: "Analog computer works on the supply of",
            options: ["A) Continuous electrical pulses", "B) Electrical pulses but not continuous", "C) Magnetic strength", "D) None of the above"],
            answer: "A) Continuous electrical pulses"
          },
          {
            question: "An error in software or hardware is called a bug. What is the alternative computer jargon for it?",
            options: ["A) Leech", "B) Squid", "C) Slug", "D) Glitch"],
            answer: "D) Glitch"
          },
          {
            question: "The advantage of COM are its __ and __",
            options: ["A) Compact size; speed readability", "B) Compact size, speed", "C) Readability; speed", "D) Low cost; readability"],
            answer: "B) Compact size, speed"
          },
          {
            question: "The BIOS is the abbreviation of ________.",
            options: ["A) Basic Input Output System", "B) Best Input Output System", "C) Basic Input Output Symbol", "D) Base Input Output System"],
            answer: "A) Basic Input Output System"
          },
          {
            question: "Which printer is very commonly used for desktop publishing?",
            options: ["A) Laser printer", "B) Inkjet printer", "C) Daisywheel printer", "D) Dot matrix printer"],
            answer: "A) Laser printer"
          },
          {
            question: "IBM 1401 is",
            options: ["A) First Generation Computer", "B) Second Generation Computer", "C) Third Generation Computer", "D) Fourth Generation Computer"],
            answer: "B) Second Generation Computer"
          },
          {
            question: "Most of the first generation computers were",
            options: ["A) Special purpose computers", "B) General purpose computers", "C) Both of above", "D) None of above"],
            answer: "A) Special purpose computers"
          },
          {
            question: "Floppy disks typically in diameter",
            options: ["A) 3", "B) 5.25", "C) 8", "D) All of above"],
            answer: "D) All of above"
          },
          {
            question: "The output quality of a printer is measured by",
            options: ["A) Dot per inch", "B) Dot per sq. inch", "C) Dots printed per unit time", "D) All of above"],
            answer: "A) Dot per inch"
          },
          {
            question: "On a PC, how much memory is available to application software?",
            options: ["A) 1024 KB", "B) 760 KB", "C) 640 KB", "D) 560 KB"],
            answer: "C) 640 KB"
          },
          {
            question: "In a computer _____ is capable to store single binary bit.",
            options: ["A) Capacitor", "B) Flip flop", "C) Register", "D) Inductor"],
            answer: "B) Flip flop"
          },
          {
            question: "What does DMA stand for?",
            options: ["A) Distinct Memory Access", "B) Direct Memory Access", "C) Direct Module Access", "D) Direct Memory Allocation"],
            answer: "B) Direct Memory Access"
          },
          {
            question: "Who invented Integrated Circuits?",
            options: ["A) Jack Kilby", "B) Robert Noyce", "C) Both of above", "D) None of above"],
            answer: "C) Both of above"
          },
          {
            question: "Operating system, editors, and debuggers comes under?",
            options: ["A) System Software", "B) Application Software", "C) Utilities", "D) None of the above"],
            answer: "A) System Software"
          },
          {
            question: "One computer that is not considered a portable is",
            options: ["A) Minicomputer", "B) Laptop computer", "C) Notebook computer", "D) All of above"],
            answer: "A) Minicomputer"
          },
          {
            question: "Which of the following is not an electronic computer?",
            options: ["A) ENIAC", "B) ABC", "C) UNIVAC", "D) EDVAC"],
            answer: "B) ABC"
          },
          {
            question: "What is the name of the display feature that highlights area of the screen which requires operator attention?",
            options: ["A) Pixel", "B) Reverse video", "C) Touch screen", "D) Cursor"],
            answer: "B) Reverse video"
          },
          {
            question: "Which is the largest computer?",
            options: ["A) Mainframe Computer", "B) Mini Computers", "C) Micro Computers", "D) Super Computers"],
            answer: "D) Super Computers"
          },
          {
            question: "Which of the following are the best units of data on an external storage device?",
            options: ["A) Bits", "B) Bytes", "C) Hertz", "D) Clock cycles"],
            answer: "B) Bytes"
          },
          {
            question: "The personal computer industry was started by",
            options: ["A) IBM", "B) Apple", "C) Compaq", "D) HCL"],
            answer: "B) Apple"
          },
          {
            question: "What is meant by a dedicated computer?",
            options: ["A) Which is used by one person only", "B) Which is assigned one and only one task", "C) Which uses one kind of software", "D) Which is meant for application software"],
            answer: "B) Which is assigned one and only one task"
          },
          {
            question: "Which programming languages are classified as low level languages?",
            options: ["A) Basic, COBOL, FORTRAN", "B) Prolog 2, Expert Systems", "C) Knowledge based Systems", "D) Assembly Languages"],
            answer: "D) Assembly Languages"
          },
          {
            question: "What was the main disadvantage of vacuum tubes?",
            options: ["A) They were larger in size", "B) They consumed a lot of electricity", "C) They produced heat and often burned out", "D) The operation cost was high"],
            answer: "C) They produced heat and often burned out"
          },
          {
            question: "Registers, which are partially visible to users and used to hold conditional, are known as",
            options: ["A) PC", "B) Memory address registers", "C) General purpose register", "D) Flags"],
            answer: "D) Flags"
          },
          {
            question: "Which is not a computer of first generation?",
            options: ["A) ENIAC", "B) UNIVAC", "C) IBM 360", "D) IBM 1401"],
            answer: "C) IBM 360"
          },
          {
            question: "Registers which are partially visible to users and used to hold conditional codes (bits set by the CPU hardware as the result of operations), are known as",
            options: ["A) PC", "B) Flags", "C) Memory Address Registers", "D) General Purpose Registers"],
            answer: "B) Flags"
          },
          {
            question: "Who invented vacuum tubes?",
            options: ["A) John Bardeen", "B) William Shockley", "C) Lee de Forest", "D) All of above"],
            answer: "C) Lee de Forest"
          },
          {
            question: "An approach that permits the computer to work on several programs instead of one is",
            options: ["A) On-line thesaurus", "B) Multiprogramming", "C) Over lapped processing", "D) Outline processor"],
            answer: "B) Multiprogramming"
          },
          {
            question: "Who suggested Stored Program Concept",
            options: ["A) John Mauchley", "B) J.P. Eckert", "C) John Neumann", "D) Joseph Jacquard"],
            answer: "C) John Neumann"
          },
          {
            question: "The central processing unit (CPU) consists of",
            options: ["A) Input, output and processing", "B) Control unit, primary storage, and secondary storage", "C) Control unit, arithmetic-logic unit and primary storage", "D) Control unit, processing, and primary storage"],
            answer: "C) Control unit, arithmetic-logic unit and primary storage"
          },
          {
            question: "The notable features like keyboards, monitors, GUI were developed in",
            options: ["A) First generation", "B) Second generation", "C) Third generation", "D) Fourth generation"],
            answer: "C) Third generation"
          },
          {
            question: "UNIVAC is",
            options: ["A) Universal Automatic Computer", "B) Universal Array Computer", "C) Unique Automatic Computer", "D) Unvalued Automatic Computer"],
            answer: "A) Universal Automatic Computer"
          },
          {
            question: "Which is the highest form?",
            options: ["A) Data", "B) Information", "C) Knowledge", "D) All of above"],
            answer: "C) Knowledge"
          },
          {
            question: "Who is credited with the idea of using punch cards to control patterns in a waving machine?",
            options: ["A) Pascal", "B) Hollerith", "C) Babbage", "D) Jacquard"],
            answer: "D) Jacquard"
          },
          {
            question: "What is an interpreter?",
            options: ["A) An interpreter does the conversion line by line as the program is run", "B) An interpreter is the representation of the system being designed", "C) An interpreter is a general purpose language providing very efficient execution", "D) None of the above"],
            answer: "A) An interpreter does the conversion line by line as the program is run"
          },
          {
            question: "Which is a semi conductor memory?",
            options: ["A) Dynamic", "B) Static", "C) Bubble", "D) Both a & b"],
            answer: "D) Both a & b"
          },
          {
            question: "RJ45 UTP cable has ________ Cables.",
            options: ["A) 2 pair", "B) 3 pair", "C) 4 pair", "D) 5 pair"],
            answer: "C) 4 pair"
          },
          {
            question: "Which of the following is not a valid size of a Floppy Disk?",
            options: ["A) 8?", "B) 5 ¼?", "C) 3 ½?", "D) 5 ½?"],
            answer: "D) 5 ½?"
          },
          {
            question: "The earliest calculating devices are",
            options: ["A) Abacus", "B) Clock", "C) Difference Engine", "D) None of these"],
            answer: "A) Abacus"
          },
          {
            question: "Word length of a Personal Computer is ___",
            options: ["A) 4 bits", "B) 8 bits", "C) 16 bits", "D) 64 bits"],
            answer: "D) 64 bits"
          },
          {
            question: "What was the first computer to perform all calculation using electronics rather than wheels, ratchets, or mechanical switches?",
            options: ["A) Mark I", "B) ABC", "C) Z3", "D) None of above"],
            answer: "B) ABC"
          },
          {
            question: "A directly accessible appointment calendar is feature of a __ resident package",
            options: ["A) CPU", "B) Memory", "C) Buffer", "D) ALU"],
            answer: "B) Memory"
          },
          {
            question: "Which unit converts computer data into human readable form?",
            options: ["A) Input unit", "B) Output unit", "C) ALU", "D) Control Unit"],
            answer: "B) Output unit"
          },
          {
            question: "The full form of ALU is",
            options: ["A) Arithmetic Logic Unit", "B) Array Logic Unit", "C) Application Logic Unit", "D) None of above"],
            answer: "A) Arithmetic Logic Unit"
          },
          {
            question: "What produces useful information out of data?",
            options: ["A) Computer", "B) Processing", "C) Programming", "D) none of above"],
            answer: "B) Processing"
          },
          {
            question: "Which of the following device was not invented by Babbage?",
            options: ["A) Pascaline", "B) Difference Engine", "C) Analytical Engine", "D) None of above"],
            answer: "A) Pascaline"
          },
          {
            question: "A digital computer did not score over an analog computer in terms of",
            options: ["A) Speed", "B) Accuracy", "C) Reliability", "D) Cost"],
            answer: "D) Cost"
          },
          {
            question: "Find out who is not the inventor of transistors among the following names",
            options: ["John Burdeen", "William Shockley", "Walter Brattain", "Lee de Forest"],
            answer: "Lee de Forest"
          },
          {
            question: "Which of the following is not true for a magnetic disk?",
            options: [
              "It is expensive relative to magnetic tape",
              "It provides only sequential access to stored data",
              "Users can easily update records by writing over the old data",
              "All of above"
            ],
            answer: "It provides only sequential access to stored data"
          },
          {
            question: "A disadvantage of the laser printer is",
            options: ["It is quieter than an impact printer", "It is very slow", "The output is of a lower quality", "None of the above"],
            answer: "None of the above"
          },
          {
            question: "The most commonly used standard data code to represent alphabetical, numerical and punctuation characters used in electronic data processing system is called",
            options: ["ASCII", "EBCDIC", "BCD", "All of above"],
            answer: "ASCII"
          },
          {
            question: "Which access method is used to access cassette tape?",
            options: ["Direct", "Sequential", "Both of the above", "None of the above"],
            answer: "Sequential"
          },
          {
            question: "A Compiler is ____",
            options: [
              "a combination of computer hardware",
              "a program which translates from one high-level language to another",
              "a program which translates from one high-level to a machine level language",
              "None of these"
            ],
            answer: "a program which translates from one high-level to a machine level language"
          },
          {
            question: "Which unit holds data temporarily?",
            options: ["Input unit", "Secondary storage unit", "Output Unit", "Primary Memory Unit"],
            answer: "Primary Memory Unit"
          },
          {
            question: "The computer size was very large in",
            options: ["First Generation", "Second Generation", "Third Generation", "Fourth Generation"],
            answer: "First Generation"
          },
          {
            question: "A name or number used to identify storage location devices?",
            options: ["A byte", "A record", "An address", "All of above"],
            answer: "An address"
          },
          {
            question: "Which of the following is not computer language?",
            options: ["High level language", "Medium level language", "Low level language", "All of the above"],
            answer: "Medium level language"
          },
          {
            question: "Reading data is performed in magnetic disk by",
            options: ["Read/write leads", "Sectors", "Track", "Lower surface"],
            answer: "Read/write leads"
          },
          {
            question: "IBM 7000 digital computer",
            options: ["Belongs to second generation", "Uses VLSI", "Employs semiconductor memory", "Has modular constructions"],
            answer: "Belongs to second generation"
          },
          {
            question: "Which of the following is not electro-mechanical computer?",
            options: ["Mark I", "ABC", "Zuse", "UNIVAC"],
            answer: "UNIVAC"
          },
          {
            question: "The term ‘computer’ is derived from",
            options: ["Greek language", "Sanskrit language", "Latin language", "German language"],
            answer: "Latin language"
          },
          {
            question: "Which statement is valid about magnetic tape?",
            options: ["It is a plastic ribbon", "It is coated on both sides with iron oxide", "It can be erased and reused", "All of above"],
            answer: "All of above"
          },
          {
            question: "Which of the following is first generation computer?",
            options: ["EDSAC", "IBM 1401", "CDC 1604", "ICL 2950"],
            answer: "EDSAC"
          },
          {
            question: "A hard copy would be prepared on a",
            options: ["Line printer", "Dot matrix Printer", "Typewriter terminal", "All of the above"],
            answer: "All of the above"
          },
          {
            question: "The term GIGO is relate to which characteristics of computers?",
            options: ["Speed", "Automatic", "Accuracy", "Reliability"],
            answer: "Accuracy"
          },
          {
            question: "Which of the following programming language were used in first generation computers?",
            options: ["Machine language", "Assembly language", "Both of above", "None of above"],
            answer: "Machine language"
          },
          {
            question: "To locate a data item for storage is",
            options: ["Field", "Feed", "Database", "Fetch"],
            answer: "Fetch"
          },
          {
            question: "Who used punched cards practically for the first time in the history of computers?",
            options: ["Charles Babbage", "Dr. Herman Hollerith", "Howard Aikin", "Joseph Jacquard"],
            answer: "Dr. Herman Hollerith"
          },
          {
            question: "Hard disk is coated in both sides with",
            options: ["Magnetic metallic oxide", "Optical metallic oxide", "Carbon layer", "All of the above"],
            answer: "Magnetic metallic oxide"
          },
          {
            question: "Which of the following term means to reckon?",
            options: ["putare", "com", "computa", "computar"],
            answer: "putare"
          },
          {
            question: "An input/output device at which data enters or leaves a computer system is",
            options: ["Keyboard", "Terminal", "Printer", "Plotter"],
            answer: "Terminal"
          },
          {
            question: "Which of the following is first generation of computer",
            options: ["EDSAC", "IBM-1401", "CDC-1604", "ICL-2900"],
            answer: "EDSAC"
          },
          {
            question: "A name or number used to identify a storage location is called",
            options: ["A byte", "A record", "An address", "All of above"],
            answer: "An address"
          },
          {
            question: "Computer professionals working in a computer centre are",
            options: ["Software", "Firmware", "Hardware", "Humanware"],
            answer: "Humanware"
          },
          {
            question: "The first general purpose electronic computer in the world was",
            options: ["UNIVAC", "EDVAC", "ENIAC", "All of above"],
            answer: "ENIAC"
          },
          {
            question: "The contents of information are stored in",
            options: ["Memory data register", "Memory address register", "Memory arithmetic registers", "Memory access register"],
            answer: "Memory data register"
          },
          {
            question: "Which of the following is correct full form of BCD?",
            options: ["Binary Coded Decimal", "Bit Coded Decimal", "Binary Coded Digit", "Bit Coded Digit"],
            answer: "Binary Coded Decimal"
          },
          {
            question: "Which was the world’s first microcomputer that used Intel 80386 microprocessor chip?",
            options: ["IBM PS/2", "HP-9830", "DeskPro-386", "IBM-360"],
            answer: "DeskPro-386"
          },
          {
            question: "The qualitative or quantitative attribute of a variable or set of variables is termed as",
            options: ["data", "information", "both of above", "none of above"],
            answer: "data"
          },
          {
            question: "Main storage is also called",
            options: ["Accumulator", "Control Unit", "Register Unit", "Memory"],
            answer: "Memory"
          },
          {
            question: "Which of the following are (is) considered to be video component?",
            options: ["Resolution", "Color depth", "Refresh rate", "All of the alcove"],
            answer: "All of the alcove"
          },
          {
            question: "For what Antikyathera was used?",
            options: ["For counting", "For Calculating tax collection", "For calculating astronomical positions", "For calculating firing weapons"],
            answer: "For calculating astronomical positions"
          },
          {
            question: "Memory unit is one part of",
            options: ["Input device", "Control unit", "Output device", "Central Processing Unit"],
            answer: "Central Processing Unit"
          },
          {
            question: "Microprocessors can be used to make",
            options: ["Computer", "Digital systems", "Calculators", "All of the above"],
            answer: "All of the above"
          },
          {
            question: "Which statement is valid about computer program?",
            options: [
              "High level languages must be converted into machine language to execute",
              "High level language programs are more efficient and faster to execute",
              "It is more difficult to identify errors in high level language program than in low level programs",
              "All of above"
            ],
            answer: "High level languages must be converted into machine language to execute"
          },
          {
            question: "By programmable machine we mean",
            options: ["computers", "modern television", "washing machines", "anything that can be set to perform different tasks with suitable programs"],
            answer: "anything that can be set to perform different tasks with suitable programs"
          },
          {
            question: "Which of the following is a secondary memory device?",
            options: ["Keyboard", "Disk", "ALU", "All of the above"],
            answer: "Disk"
          },
          {
            question: "The memory which is programmed at the time it is manufactured",
            options: ["ROM", "RAM", "PROM", "EPROM"],
            answer: "ROM"
          },
          {
            question: "One of the popular mass storage device is CD ROM. What does CD ROM stand for?",
            options: [
              "Compactable Read Only Memory",
              "Compact Data Read Only Memory",
              "Compactable Disk Read Only Memory",
              "Compact Disk Read Only Memory"
            ],
            answer: "Compact Disk Read Only Memory"
          },
          {
            question: "Identify the true statement",
            options: [
              "Computers are 100% accurate but it can suffer from GIGO",
              "Computers are reliable because they use electronic component which have very low failure rate",
              "Computer is never tired and does not suffer from boredom",
              "All of above"
            ],
            answer: "All of above"
          },
          {
            question: "FORTRAN is",
            options: ["File Translation", "Format Translation", "Formula Translation", "Floppy Translation"],
            answer: "Formula Translation"
          },
          {
            question: "The programs which are as permanent as hardware and stored in ROM is known as",
            options: ["Hardware", "Software", "Firmware", "ROM ware"],
            answer: "Firmware"
          },
          {
            question: "Which of the following memories must be refreshed many times per second?",
            options: ["Static RAM", "Dynamic RAM", "EPROM", "ROM"],
            answer: "Dynamic RAM"
          },
          {
            question: "What do you call the translator which takes assembly language program as input & produce machine language code as output?",
            options: ["Compiler", "Interpreter", "Debugger", "Assembler"],
            answer: "Assembler"
          },
          {
            question: "Which number system is usually followed in a typical 32-bit computer?",
            options: ["Binary", "Decimal", "Hexadecimal", "Octal"],
            answer: "Binary"
          },
          {
            question: "A computer has very low failure rate because it uses electronic components. It produces very consistent results. This is highlighted by which of the feature of computer?",
            options: ["Accuracy", "Reliability", "Versatility", "Automatic"],
            answer: "Reliability"
          },
          {
            question: "A paper printout of a document is known as",
            options: ["Softcopy output", "Hardcopy output", "Permanent Output", "All of above"],
            answer: "Hardcopy output"
          },
          {
            question: "Which electronic component was made out of semiconductor material?",
            options: ["Vacuum tubes", "Transistors", "ICs", "All of above"],
            answer: "All of above"
          },
          {
            question: "The act of retrieving existing data from memory is called",
            options: ["Read-out", "Read from", "Read", "All of above"],
            answer: "Read"
          },
          {
            question: "Which part of the computer is used for calculating and comparing?",
            options: ["Disk unit", "Control unit", "ALU", "Modem"],
            answer: "ALU"
          },
          {
            question: "ABC is a",
            options: ["Special purpose computer", "General purpose computer", "All Purpose Computer", "None of above"],
            answer: "Special purpose computer"
          },
          {
            question: "The computer code for the interchange of information between terminals is",
            options: ["ASCII", "BCD", "EBCDIC", "All of above"],
            answer: "ASCII"
          },
          {
            question: "When was the X window system born?",
            options: ["1984", "1989", "1988", "1990"],
            answer: "1984"
          },
          {
            question: "What is the first stage in software development?",
            options: ["Specification and design", "Testing", "System Analysis", "Maintenance"],
            answer: "System Analysis"
          },
          {
            question: "Which of the following is valid statement?",
            options: [
              "Data in itself is useless unless it is processed",
              "The data that is processed is called a program",
              "The data which is not yet processed is information",
              "Information is processed by computer to generate data."
            ],
            answer: "Data in itself is useless unless it is processed"
          },
          {
            question: "The Second Generation Computer was based on ________.",
            options: ["Vacuum Tube", "Silicon Chips", "Transistor", "Bio Chips"],
            answer: "Transistor"
          },
          {
            question: "EBCDIC stands for",
            options: [
              "Extended Binary Coded Decimal Interchange Code",
              "Extended Bit Code Decimal Interchange Code",
              "Extended Bit Case Decimal Interchange Code",
              "Extended Binary Case Decimal Interchange Code"
            ],
            answer: "Extended Binary Coded Decimal Interchange Code"
          },
          {
            question: "Personnel who design, program, operate and maintain computer equipment refers to",
            options: ["Console-operator", "Programmer", "Peopleware", "System Analyst"],
            answer: "Peopleware"
          },
          {
            question: "IBM System/360 is",
            options: ["Mainframe Computer", "Mini Computers", "Micro Computers", "None of above"],
            answer: "Mainframe Computer"
          },
          {
            question: "A system is",
            options: [
              "an integration of different units so as to achieve an objective",
              "input unit",
              "input and output unit",
              "input, output and storage units"
            ],
            answer: "an integration of different units so as to achieve an objective"
          },
          {
            question: "Which of the following programming language started from second generation?",
            options: ["Cobol", "BASIC", "C", "LISP"],
            answer: "Cobol"
          },
          {
            question: "The translator program used in assembly language is called",
            options: ["Compiler", "Interpreter", "Assembler", "Translator"],
            answer: "Assembler"
          },
          {
            question: "EEPROM stands for",
            options: [
              "Electrically Erasable Programmable Read Only Memory",
              "Easily Erasable Programmable Read Only Memory",
              "Electronic Erasable Programmable Read Only Memory",
              "None of the above"
            ],
            answer: "Electrically Erasable Programmable Read Only Memory"
          },
          {
            question: "Regarding data, computers are very good at",
            options: ["store", "Processing", "retrieve", "All of above"],
            answer: "All of above"
          },
          {
            question: "Bit map terminal",
            options: [
              "support display containing multiple windows",
              "require considerable amount of video RAM",
              "requires tremendous amount of copying and hence low performance",
              "all of above"
            ],
            answer: "all of above"
          },
          {
            question: "First generation computers used _________ for memory",
            options: ["vacuum tubes", "silicon chips", "magnetic drum", "RAM"],
            answer: "magnetic drum"
          },
          {
            question: "Which of the following memories allows simultaneous read and write operations?",
            options: ["ROM", "RAM", "EPROM", "None of above"],
            answer: "RAM"
          },
          {
            question: "EPROM can be used for",
            options: [
              "Erasing the contents of ROM",
              "Reconstructing the contents of ROM",
              "Erasing and reconstructing the contents of ROM",
              "Duplicating ROM"
            ],
            answer: "Erasing and reconstructing the contents of ROM"
          },
          {
            question: "ENIAC uses",
            options: ["Decimal Numbering System", "Octal Numbering System", "Binary Numbering System", "Hexadecimal Numbering System"],
            answer: "Decimal Numbering System"
          },
          {
            question: "A term associated with the comparison of processing speeds of different computer systems is:",
            options: ["EFTS", "MPG", "MIPS", "CPS"],
            answer: "MIPS"
          },
          {
            question: "Which of the following is problem oriented language?",
            options: ["High level language", "Machine language", "Assembly language", "Low level language"],
            answer: "High level language"
          },
          {
            question: "A 32 bit microprocessor has the word length equal to",
            options: ["2 byte", "32 byte", "4 byte", "8 byte"],
            answer: "4 byte"
          },
          {
            question: "The term GIGO is related to",
            options: ["Accuracy", "Reliability", "Versatility", "Automatic"],
            answer: "Accuracy"
          },
          {
            question: "Web cam is an",
            options: ["input unit device", "output unit device", "processing device", "Input and Output device"],
            answer: "input unit device"
          },
          {
            question: "Bit stands for",
            options: ["Binary digits", "bit of system", "a part of byte", "All of above"],
            answer: "Binary digits"
          },
          {
            question: "Access time is",
            options: ["seek time + latency time", "seek time", "seek time ? latency time", "latency time"],
            answer: "seek time + latency time"
          },
          {
            question: "Which device can understand difference between data & programs?",
            options: ["Input device", "Output device", "Memory", "Microprocessor"],
            answer: "Microprocessor"
          },
          {
            question: "Which of the following is a read only memory storage device?",
            options: ["Floppy Disk", "CD-ROM", "Hard Disk", "None of these"],
            answer: "CD-ROM"
          },
          {
            question: "Symbolic logic was discovered by",
            options: ["George Boole", "Herman Hollerith", "Van Neumann", "Basic Pascal"],
            answer: "George Boole"
          },
          {
            question: "Which of the following is not valid statement?",
            options: [
              "Hard is referred to mean something temporary",
              "Hard is used to mean something tangible",
              "Soft is used to mean something permanent",
              "Soft is used to mean something tangible"
            ],
            answer: "Soft is used to mean something tangible"
          },
          {
            question: "Digital devices are",
            options: ["Digital Clock", "Automobile speed meter", "Clock with a dial and two hands", "All of them"],
            answer: "Digital Clock"
          },
          {
            question: "Primary memory stores",
            options: ["Data alone", "Programs alone", "Results alone", "All of these"],
            answer: "All of these"
          },
          {
            question: "After copying the content how many times can you paste?",
            options: ["1", "16", "32", "Many"],
            answer: "Many"
          },
          {
            question: "WAN stands for",
            options: ["Wap Area Network", "Wide Area Network", "Wide Array Net", "Wireless Area Network"],
            answer: "Wide Area Network"
          },
          {
            question: "An error in computer data is called",
            options: ["Chip", "Bug", "CPU", "Storage device"],
            answer: "Bug"
          },
          {
            question: "The instructions for starting the computer are house on",
            options: ["Random access memory", "CD-Rom", "Read only memory chip", "All of above"],
            answer: "Read only memory chip"
          },
          {
            question: "1 nibble equals to",
            options: ["1 bits", "2 bits", "4 bits", "8 bits"],
            answer: "4 bits"
          },
          {
            question: "Perforated paper used as input or output media is known as",
            options: ["paper tapes", "magnetic tape", "punched papers tape", "card punch"],
            answer: "paper tapes"
          },
          {
            question: "The secondary storage devices can only store data but they cannot perform",
            options: ["Arithmetic Operation", "Logic operation", "Fetch operations", "Either of the above"],
            answer: "Arithmetic Operation"
          },
          {
            question: "Which American computer company is called Big Blue?",
            options: ["Microsoft", "Compaq Corp", "IBM", "Tandy Svenson"],
            answer: "IBM"
          },
          {
            question: "It was in 2028 BS the _________ was brought in to calculate census data.",
            options: ["IBM 1400", "IBM 1401", "ICL 2950", "None of above"],
            answer: "IBM 1401"
          },
          {
            question: "Who is the inventor of ABC Computer?",
            options: ["John v. Atanasoff", "Clifford Berry", "Both of above", "None of above"],
            answer: "Both of above"
          },
          {
            question: "Which of the following is the largest unit?",
            options: ["data", "field", "record", "database file"],
            answer: "database file"
          },
          {
            question: "Serial access memories are useful in applications where",
            options: ["Data consists of numbers", "Short access time is required", "Each stored word is processed differently", "Data naturally needs to flow in and out in serial form"],
            answer: "Data naturally needs to flow in and out in serial form"
          },
          {
            question: "In ________ mode, the communication channel is used in both directions at the same time?",
            options: ["Full-duplex", "Simplex", "Half-duplex", "None of the above"],
            answer: "Full-duplex"
          },
          {
            question: "Who invented Slide Rules?",
            options: ["John Napier", "William Oughtred", "Gottfried Leibnitz", "Blaise Pascal"],
            answer: "William Oughtred"
          },
          {
            question: "The proper definition of a modern digital computer is",
            options: ["An electronic automated machine that can solve problems involving words and numbers", "A more sophistic and modified electronic pocket calculator", "Any machine that can perform mathematical operations", "A machine that works on binary code"],
            answer: "An electronic automated machine that can solve problems involving words and numbers"
          },
          {
            question: "Memory is made up of",
            options: ["Set of wires", "Set of circuits", "Large number of cells", "All of these"],
            answer: "All of these"
          },
          {
            question: "Which of the following is the most powerful computers?",
            options: ["Mainframe Computer", "Mini Computers", "Micro Computers", "Super Computers"],
            answer: "Super Computers"
          },
          {
            question: "Which of the printers used in conjunction with computers uses dry ink powder?",
            options: ["Daisy wheel printer", "Line printer", "Laser printer", "Thermal printer"],
            answer: "Laser printer"
          },
          {
            question: "What is the path from which data flow in a computer system is known as",
            options: ["Car", "Bus", "Truck", "Road"],
            answer: "Bus"
          },
          {
            question: "Which term is used to describe RAM?",
            options: ["Dynamic RAM (DRAM)", "Static RAM (SRAM)", "Video RAM (VRAM)", "All of the above"],
            answer: "All of the above"
          },
          {
            question: "In which year was chip used inside the computer for the first time?",
            options: ["1964", "1975", "1999", "1944"],
            answer: "1964"
          },
          {
            question: "Assembly language started to be used from",
            options: ["first generation computers", "second generation computers", "third generation computers", "fourth generation computers"],
            answer: "second generation computers"
          },
          {
            question: "Which technology is more reliable?",
            options: ["Mechanical", "Electro-Mechanical", "Electronic", "For reliability it does not matter. So all of above are reliable"],
            answer: "Electronic"
          },
          {
            question: "Which of the following is not an XT microprocessor?",
            options: ["8006", "8086", "8088", "None of above"],
            answer: "8006"
          },
          {
            question: "Hard disk is coated in both side with",
            options: ["Magnetic metallic oxide", "Optical metallic oxide", "Carbon layer", "All of the above"],
            answer: "Magnetic metallic oxide"
          },
          {
            question: "ASCII stands for",
            options: ["American Stable Code for International Interchange", "American Standard Case for Institutional Interchange", "American Standard Code for Information Interchange", "American Standard Code for Interchange Information"],
            answer: "American Standard Code for Information Interchange"
          },
          {
            question: "Raw facts and figures about any particular topic are",
            options: ["Information", "facts", "data", "none of above"],
            answer: "data"
          },
          {
            question: "A computer can solve more than one kind of problem. This is related to which of the following characteristics?",
            options: ["Accuracy", "Reliability", "Versatility", "Automatic"],
            answer: "Versatility"
          },
          {
            question: "From which generation computers the printers were used?",
            options: ["first", "second", "third", "fourth"],
            answer: "second"
          },
          {
            question: "How many symbols exist in Baudot code?",
            options: ["32", "116", "58", "76"],
            answer: "32"
          },
          {
            question: "Following IC chip integrates 100 thousands electronic components per chip",
            options: ["SSI", "MSI", "LSI", "VLSI"],
            answer: "VLSI"
          },
          {
            question: "An application program that helps the user to change any number and immediately see the result of that change is",
            options: ["Desktop publishing program", "Database", "Spreadsheet", "All of above"],
            answer: "Spreadsheet"
          },
          {
            question: "In 1830, Charles Babbage designed a machine called the Analytical Engine which he showed at the Paris Exhibition. In which year was it exhibition?",
            options: ["1820", "1860", "1855", "1870"],
            answer: "1855"
          },
          {
            question: "What is the name of the new color laptop computer which is powered by a 386 processor at 33 MHz and is built by Epson?",
            options: ["AX3/33", "NEC-20", "Magnum 2000", "HCL-3000"],
            answer: "AX3/33"
          },
          {
            question: "In analog computer",
            options: ["Input is first converted to digital form", "Input is never converted to digital form", "Output is displayed in digital form", "All of the above"],
            answer: "Input is never converted to digital form"
          },
          {
            question: "Which of the following computer is not invented by J.P. Eckert and John Mauchly?",
            options: ["ENIAC", "EDVAC", "UNIVAC", "EDSAC"],
            answer: "EDSAC"
          },
          {
            question: "When was the company named IBM?",
            options: ["1914", "1924", "1975", "None of above"],
            answer: "1924"
          },
          {
            question: "Which of the following storage device can store the largest amount of data?",
            options: ["Hard Disks", "Flash Disks", "Blu-Ray Disks", "DVDs"],
            answer: "Hard Disks"
          },
          {
            question: "Who invented Mark I?",
            options: ["Howard Aikin", "J. P. Eckert", "John Mauchley", "John v. Atanasoff"],
            answer: "Howard Aikin"
          },
          {
            question: "ALU is",
            options: ["Arithmetic Logic Unit", "Array Logic Unit", "Application Logic Unit", "None of above"],
            answer: "Arithmetic Logic Unit"
          },
          {
            question: "A computer program that converts an entire program into machine language at one time is called a/an",
            options: ["Interpreter", "CPU", "Compiler", "Simulator"],
            answer: "Compiler"
          },
          {
            question: "When did arch rivals IBM and Apple Computers Inc. decide to join hands?",
            options: ["1978", "1984", "1990", "1991"],
            answer: "1991"
          },
          {
            question: "The purpose of vacuum tube was to NOT act like",
            options: ["an amplifier", "a switch", "a router", "None of above"],
            answer: "a router"
          },
          {
            question: "As compared to diskettes, the hard disks are",
            options: ["More expensive", "More portable", "Less rigid", "Slowly accessed"],
            answer: "More expensive"
          },
          {
            question: "Which of the following is the most quickly accessible storage?",
            options: ["RAM", "Registers", "Disks", "Pen Drive"],
            answer: "Registers"
          },
          {
            question: "The octal equivalence of 111010 is",
            options: ["81", "72", "71", "None of above"],
            answer: "72"
          },
          {
            question: "Excessive parallel processing is related to",
            options: ["First generation", "Fourth generation", "Fifth Generation", "Third generation"],
            answer: "Fifth Generation"
          },
          {
            question: "Second generation computers were developed during",
            options: ["1949 to 1955", "1956 to 1965", "1965 to 1970", "1970 to 1990"],
            answer: "1956 to 1965"
          },
          {
            question: "What do you call a single point on a computer screen?",
            options: ["Cell", "Element", "Pixel", "Bit"],
            answer: "Pixel"
          },
          {
            question: "Mostly which of the following device is used to carry user files?",
            options: ["Floppy Disk", "Hard Disk", "RAM", "CDROM"],
            answer: "Hard Disk"
          },
          {
            question: "Which of the following computer implemented binary numbers, perform calculations using electronics and implemented separate computation and memory for the first time?",
            options: ["Mark I", "ABC", "Z3", "None of above"],
            answer: "ABC"
          },
          {
            question: "FORTRAN is a programming language. What does FORTRAN stand for?",
            options: ["File Translation", "Format Translation", "Formula Translation", "Floppy Translation"],
            answer: "Formula Translation"
          },
          {
            question: "Which of the following memories needs refreshing?",
            options: ["SRAM", "DRAM", "ROM", "All of above"],
            answer: "DRAM"
          },
          {
            question: "Can you tell what passes into and out from the computer via its ports?",
            options: ["Data", "Bytes", "Graphics", "Pictures"],
            answer: "Data"
          },
          {
            question: "An output device that uses words or messages recorded on a magnetic medium to produce audio response is",
            options: ["Magnetic tape", "Voice response unit", "Voice recognition unit", "Voice band"],
            answer: "Voice response unit"
          },
          {
            question: "Which of the items below are considered removable storage media?",
            options: ["Removable hard disk cartridges", "(Magneto-optical) disk", "Flexible disks cartridges", "All of the above"],
            answer: "All of the above"
          },
          {
            question: "Which of the following is not purely output device?",
            options: ["Screen", "Printer", "Speaker", "Plotter"],
            answer: "Screen"
          },
          {
            question: "The first Macintosh computer was from",
            options: ["First generation", "Second generation", "Third generation", "Fourth generation"],
            answer: "Fourth generation"
          },
          {
            question: "Which of the following is not a form of data?",
            options: ["numbers and characters", "images", "sound", "none of above"],
            answer: "none of above"
          },
          {
            question: "Which is not a computer classification?",
            options: ["mainframe", "maxframe", "mini", "notebook"],
            answer: "maxframe"
          },
          {
            question: "The control unit of a microprocessor",
            options: ["Stores data in the memory", "Accepts input data from keyboard", "Performs arithmetic/logic function", "None of above"],
            answer: "None of above"
          },
          {
            question: "Which of the following is internal memory?",
            options: ["Disks", "Pen Drives", "RAM", "CDs"],
            answer: "RAM"
          },
          {
            question: "Which operation is not performed by computer",
            options: ["Inputting", "Processing", "Controlling", "Understanding"],
            answer: "Understanding"
          },
          {
            question: "Floppy disks which are made from flexible plastic material are also called?",
            options: ["Hard disks", "High-density disks", "Diskettes", "Templates"],
            answer: "Diskettes"
          },
          {
            question: "The magnetic storage chip used to provide non-volatile direct access storage of data and that have no moving parts are known as",
            options: ["Magnetic core memory", "Magnetic tape memory", "Magnetic disk memory", "Magnetic bubble memory"],
            answer: "Magnetic bubble memory"
          },
          {
            question: "A collection of related instructions organized for a common purpose is referred to as",
            options: ["File", "Database", "Program", "None of above"],
            answer: "Program"
          },
          {
            question: "Plotter accuracy is measured in terms of repeatability and",
            options: ["Buffer size", "Resolution", "Vertical dimensions", "Intelligence"],
            answer: "Resolution"
          },
          {
            question: "Computer instructions written with the use of English words instead of binary machine code is called",
            options: ["Mnemonics", "Symbolic code", "Gray codes", "Opcode"],
            answer: "Symbolic code"
          },
          {
            question: "Which language is directly understood by the computer without translation program?",
            options: ["Machine language", "Assembly language", "High level language", "None of above"],
            answer: "Machine language"
          },
          {
            question: "On which aspect the analog computers are better than digital?",
            options: ["Speed", "Accuracy", "Reliability", "Automatic"],
            answer: "Speed"
          },
          {
            question: "Which of the following processors use RISC technology?",
            options: ["486dx", "Power PC", "486sx", "6340"],
            answer: "Power PC"
          },
          {
            question: "Which of the following machine was not invented by Charles Babbage?",
            options: ["Tabulating Machine", "Analytical Engine", "Difference Engine", "Both C and D"],
            answer: "Tabulating Machine"
          },
          {
            question: "How many numbers could ENIAC store in its internal memory",
            options: ["100", "20", "80", "40"],
            answer: "20"
          },
          {
            question: "The subject of cybernetics deals with the science of",
            options: ["Genetics", "Control and communication", "Molecular biology", "Biochemistry"],
            answer: "Control and communication"
          },
          {
            question: "Why ABC is considered electro-mechanical computer?",
            options: [
              "Because it was invented before electronic computers were developed",
              "Because there are wheels, drums, bars to rotate and move to produce result",
              "Because they use the flow of electrons in different component",
              "None of above"
            ],
            answer: "Because there are wheels, drums, bars to rotate and move to produce result"
          },
          {
            question: "Binary circuit elements have",
            options: ["One stable state", "Two stable state", "Three stable state", "None of above"],
            answer: "Two stable state"
          },
          {
            question: "Which of the following is used for manufacturing chips?",
            options: ["Control bus", "Control unit", "Parity unit", "Semiconductor"],
            answer: "Semiconductor"
          },
          {
            question: "Which of the following is not a micro computer?",
            options: ["Laptop PCs", "Tablet PCs", "Desktop PCs", "None of above"],
            answer: "None of above"
          },
          {
            question: "The value of each bead in earth is",
            options: ["1", "3", "5", "7"],
            answer: "1"
          },
          {
            question: "When did John Napier develop logarithm?",
            options: ["1416", "1614", "1641", "1804"],
            answer: "1614"
          },
          {
            question: "Which of the following terms is the most closely related to main memory?",
            options: ["Non volatile", "Permanent", "Control unit", "Temporary"],
            answer: "Temporary"
          },
          {
            question: "Which was the world’s first minicomputer and when was it introduced?",
            options: ["PDP-I, 1958", "IBM System/36, 1960", "PDP-II, 1961", "VAX 11/780, 1962"],
            answer: "PDP-I, 1958"
          },
          {
            question: "A group of magnetic tapes, videos or terminals usually under the control of one master is",
            options: ["Cylinder", "Surface", "Track", "Cluster"],
            answer: "Cluster"
          },
          {
            question: "The word length of a computer is measured in",
            options: ["Bytes", "Millimeters", "Meters", "Bits"],
            answer: "Bits"
          },
          {
            question: "What type of memory is not directly addressable by the CPU and requires special software called EMS (expanded memory specification)?",
            options: ["Extended", "Expanded", "Base", "Conventional"],
            answer: "Expanded"
          },
          {
            question: "Which unit holds data permanently?",
            options: ["Input unit", "Secondary storage unit", "Output Unit", "Primary Memory Unit"],
            answer: "Secondary storage unit"
          },
          {
            question: "Before a disk can be used to store data. It must be_______",
            options: ["Formatted", "Reformatted", "Addressed", "None of the above"],
            answer: "Formatted"
          },
          {
            question: "Computer system comprises of major units",
            options: [
              "input unit, output unit, control unit",
              "input unit, output unit, control unit and storage",
              "input unit, output unit, central processing unit and storage unit",
              "input, output and storage units"
            ],
            answer: "input unit, output unit, central processing unit and storage unit"
          },
          {
            question: "The first general purpose electronic digital computer in the world was",
            options: ["UNIVAC", "EDVAC", "ENIAC", "All of above"],
            answer: "ENIAC"
          },
          {
            question: "Signals can be analog or digital and a computer that processes both types of signals is known as",
            options: ["Analog computer", "Digital Computer", "Hybrid Computer", "Mainframe Computer"],
            answer: "Hybrid Computer"
          },
          {
            question: "High level language is also called",
            options: ["Problem oriented language", "Business oriented language", "Mathematically oriented language", "All of the above"],
            answer: "All of the above"
          },
          {
            question: "Human beings are referred to as Homosapien, which device is called Sillico Sapiens?",
            options: ["Monitor", "Hardware", "Robot", "Computer"],
            answer: "Computer"
          },
          {
            question: "Which of the following file organization is most efficient for a file with a high degree of file activity?",
            options: ["Sequential", "ISAM", "VSAM", "B-Tree Index"],
            answer: "B-Tree Index"
          },
          {
            question: "Which of the following is associated with error detector?",
            options: ["Odd parity bit", "Even parity bit", "Both of the above", "None of above"],
            answer: "Both of the above"
          },
          {
            question: "Magnetic tape can serve as",
            options: ["Secondary storage media", "Output media", "Input media", "All of the above"],
            answer: "All of the above"
          },
          {
            question: "Which company is the biggest player in the microprocessor industry?",
            options: ["Motorola", "IBM", "Intel", "AMD"],
            answer: "Intel"
          },
          {
            question: "The first digital computer built with IC chips was known as",
            options: ["IBM 7090", "Apple ? 1", "IBM System / 360", "VAX-10"],
            answer: "IBM System / 360"
          },
          {
            question: "EBCDIC can code up to how many different characters?",
            options: ["256", "16", "32", "64"],
            answer: "256"
          },
          {
            question: "MICR stands for",
            options: ["Magnetic Ink Character Reader", "Magnetic Ink Code Reader", "Magnetic Ink Cases Reader", "None"],
            answer: "Magnetic Ink Character Reader"
          },
          {
            question: "Number cruncher is the informal name for",
            options: ["Mini computer", "Super computer", "Microcomputer", "Mainframe computer"],
            answer: "Super computer"
          },
          {
            question: "RATS stands for",
            options: ["Regression Analysis Time Series", "Regression Analysis Time Sharing", "Real Analysis Series", "All of above"],
            answer: "Regression Analysis Time Series"
          },
          {
            question: "Which technology is used in Compact disks?",
            options: ["Mechanical", "Electrical", "Electro Magnetic", "Laser"],
            answer: "Laser"
          },
          {
            question: "Different components of the motherboard of a PC unit are linked together by sets of parallel electrical conducting lines. What are these lines called?",
            options: ["Conductors", "Buses", "Connectors", "Consequents"],
            answer: "Buses"
          },
          {
            question: "Which is the first electronic digital computer?",
            options: ["ENIAC", "MARK I", "Z3", "ABC"],
            answer: "ENIAC"
          },
          {
            question: "Which of the following is a storage device?",
            options: ["Tape", "Hard Disk", "Floppy Disk", "All of the above"],
            answer: "All of the above",
          },
          {
            question: "The metal disks, which are permanently housed in, sealed and contamination free containers are called",
            options: ["Hard disks", "Floppy disk", "Winchester disk", "Flexible disk"],
            answer: "Winchester disk",
          },
          {
            question: "A computer program that converts an entire program into machine language is called a/an",
            options: ["Interpreter", "Simulator", "Compiler", "Commander"],
            answer: "Compiler",
          },
          {
            question: "Intel corporation produces chips for which computers?",
            options: ["IBM PCs", "Apple/Macintosh PCs", "Both of above", "None of above"],
            answer: "Both of above",
          },
          {
            question: "The first microprocessor built by the Intel corporation was called",
            options: ["8008", "8080", "4004", "8800"],
            answer: "4004",
          },
          {
            question: "Which of the following is not a class of computers based on size?",
            options: ["Mainframe Computers", "Mini Computers", "Micro Computers", "Super Computers"],
            answer: "Super Computers",
          },
          {
            question: "Who invented EDSAC?",
            options: ["John v. Neumann", "J.P. Eckert and John Mauchley", "Maurice Wilkes", "Howard Aiken"],
            answer: "Maurice Wilkes",
          },
          {
            question: "EEPROM stands for",
            options: [
              "Electrically Erasable Programmable Read Only Memory",
              "Electronic Erasable Programmable Read Only Memory",
              "Easily Erasable Programmable Read Only Memory",
              "Easily Erasable Programmable Read Only Memory"
            ],
            answer: "Electrically Erasable Programmable Read Only Memory",
          },
          {
            question: "Which of the following is a class of computers based on model?",
            options: ["Digital Computer", "Hybrid Computers", "Analog Computers", "AT Computers"],
            answer: "AT Computers",
          },
          {
            question: "What are the computers called that performs calculations and comparisons usually in the binary numbering system?",
            options: ["Analog Computers", "Digital Computers", "Hybrid Computers", "None of above"],
            answer: "Digital Computers",
          },
          {
            question: "ASCII stands for",
            options: [
              "American Standard Code for Information Interchange",
              "American Scientific Code for International Interchange",
              "American Standard Code for Intelligence Interchange",
              "American Scientific Code for Information Interchange"
            ],
            answer: "American Standard Code for Information Interchange",
          },
          {
            question: "The data recording format in most of the modern magnetic tape is",
            options: ["7-bit ASCII", "7-bit EBCDIC", "8-bit ASCII", "8-bit EBCDIC"],
            answer: "8-bit EBCDIC",
          },
          {
            question: "Why ABC computer is called so?",
            options: [
              "Because it was developed by Atanasoff and Berry",
              "Because it was thought to be the first computer so named with first alphabets of English",
              "Both of above are the reason to name the computer ABC",
              "None of above are true"
            ],
            answer: "Both of above are the reason to name the computer ABC",
          },
          {
            question: "Who designed the first electronics computer ? ENIAC/",
            options: [
              "Von Neumann",
              "Joseph M Jacquard",
              "J. P. Eckert and J. W. Mauchly",
              "All of above"
            ],
            answer: "J. P. Eckert and J. W. Mauchly",
          },
          {
            question: "Central Processing Unit is combination of",
            options: [
              "Control and storage",
              "Control and output unit",
              "Arithmetic logic and input unit",
              "Arithmetic logic and control unit"
            ],
            answer: "Arithmetic logic and control unit",
          },
          {
            question: "IBM 1401 computer was",
            options: ["Mainframe Computer", "Mini Computers", "Micro Computers", "None of above"],
            answer: "Mainframe Computer",
          },
          {
            question: "Time during which a job is processed by the computer is",
            options: ["Delay times", "Real time", "Execution time", "Down time"],
            answer: "Execution time",
          },
          {
            question: "CD-ROM stands for",
            options: [
              "Compactable Read Only Memory",
              "Compact Data Read Only Memory",
              "Compactable Disk Read Only Memory",
              "Compact Disk Read Only Memory"
            ],
            answer: "Compact Disk Read Only Memory",
          },
          {
            question: "Which unit converts user data into machine readable form?",
            options: ["Input unit", "Output unit", "ALU", "Control Unit"],
            answer: "Input unit",
          },
          {
            question: "Which unit is known as nerve center of computer?",
            options: ["ALU", "CU", "Memory", "Registers"],
            answer: "CU",
          },
          {
            question: "VGA is",
            options: ["Video Graphics Array", "Visual Graphics Array", "Volatile Graphics Array", "Video Graphics Adapter"],
            answer: "Video Graphics Array"
          },
          {
            question: "A kind of scanner MICR is the short form of",
            options: ["Magnetic Ink Character Reader", "Magnetic Ink Code Reader", "Magnetic Ink Cases Reader", "None"],
            answer: "Magnetic Ink Character Reader"
          },
          {
            question: "Which of the following is not a class based on size?",
            options: ["Mainframe Computer", "Micro Computer", "Mini Computer", "Digital Computer"],
            answer: "Digital Computer"
          },
          {
            question: "Which 8-bit chip was used in many of today’s TRS-80 computers?",
            options: ["Z-8000", "Motorola 6809", "Z-8808", "Z-80"],
            answer: "Z-80"
          },
          {
            question: "Which of the following disk is fixed disk?",
            options: ["Hard Disks", "Flash Disks", "Blu-Ray Disks", "DVDs"],
            answer: "Hard Disks"
          },
          {
            question: "Which of the following professions has not been affected by personal computers?",
            options: ["Medical", "Clerical and law", "Accounting", "None of the above"],
            answer: "None of the above"
          },
          {
            question: "The word Abacus is derived from Abax, a word from",
            options: ["Latin language", "Greek Language", "Sanskrit language", "Ancient Egypt"],
            answer: "Greek Language"
          },
          {
            question: "In latest generation computers, the instructions are executed",
            options: ["Parallel only", "Sequentially only", "Both sequentially and parallel", "All of above"],
            answer: "Both sequentially and parallel"
          },
          {
            question: "Which of the following memory medium is not used as main memory system?",
            options: ["Magnetic core", "Semiconductor", "Magnetic tape", "Both a and b"],
            answer: "Magnetic tape"
          },
          {
            question: "An online backing storage system capable of storing larger quantities of data is",
            options: ["CPU", "Memory", "Mass storage", "Secondary storage"],
            answer: "Mass storage"
          },
          {
            question: "A kind of serial dot-matrix printer that forms characters with magnetically-charged ink sprayed dots is called",
            options: ["Laser printer", "Ink-jet printer", "Drum printer", "Chan printer"],
            answer: "Ink-jet printer"
          },
          {
            question: "Which of the following does not affect the resolution of a video display image?",
            options: ["Bandwidth", "Raster scan rage", "Vertical and horizontal lines of resolution", "Screen size"],
            answer: "Screen size"
          },
          {
            question: "Which of the following printing devices an output composed of a series of data?",
            options: ["Wire matrix printer", "Band printer", "Wang image printer", "Both a and c"],
            answer: "Both a and c"
          },
          {
            question: "Which of the following is an example of fifth generation computer?",
            options: ["PIM/m", "ICL 2950", "IBM 1401", "None of above"],
            answer: "PIM/m"
          },
          {
            question: "Magnetic disks are the most popular medium for",
            options: ["Direct access", "Sequential access", "Both of above", "None of above"],
            answer: "Both of above"
          },
          {
            question: "Which of the following is not a third generation computer?",
            options: ["IBM 360", "IBM 1401", "PDP-8", "HP2115"],
            answer: "IBM 1401"
          },
          {
            question: "The number of records contained within a block of data on magnetic tape is defined by the",
            options: ["Block definition", "Record contain clause", "Blocking factor", "Record per block"],
            answer: "Blocking factor"
          },
          {
            question: "Mark I is also known as",
            options: ["American Sequence Controlled Calculator", "Automatic Sequence Calculating Controller", "American Sequence Controlled Computer", "Automatic Sequence Controlled Calculator"],
            answer: "Automatic Sequence Controlled Calculator"
          },
          {
            question: "Which of the following registers is loaded with the contents of the memory location pointed by the PC?",
            options: ["Memory address registers", "Memory data registers", "Instruction register", "Program counter"],
            answer: "Memory data registers"
          },
          {
            question: "Which of the following are the cheapest memory devices in terms of Cost/Bit?",
            options: ["Semiconductor memories", "Magnetic Disks", "Compact Disks", "Magnetic Tapes"],
            answer: "Magnetic Tapes"
          },
          {
            question: "MIS is designed to provide information needed for effective decision making by?",
            options: ["Consumers", "Workers", "Foremen", "Managers"],
            answer: "Managers"
          },
          {
            question: "Which is valid statement",
            options: ["1 KB = 1024 Bytes", "1 MB = 1024 Bytes", "1 KB = 1000 Bytes", "1 MB = 1000 Bytes"],
            answer: "1 KB = 1024 Bytes"
          },
          {
            question: "Latency time is",
            options: ["Time to spin the needed data under head", "Time to spin the needed data under track", "Time to spin data under sector", "All of above"],
            answer: "All of above"
          },
          {
            question: "Who built the first Mechanical Calculator",
            options: ["Joseph Marie Jacquard", "John Mauchly", "Blaise Pascal", "Howard Aiken"],
            answer: "Blaise Pascal"
          },
          {
            question: "The most important advantage of a video disk is",
            options: ["Compactness", "Potential capacity", "Durability", "Cost effectiveness"],
            answer: "Potential capacity"
          },
          {
            question: "Which of the following generation computers had expensive operation cost?",
            options: ["First", "Second", "Third", "Fourth"],
            answer: "First"
          },
          {
            question: "An IBM system/38 represents the computer class of:",
            options: ["Small-scale computer", "Medium-scale computer", "Large-scale computer", "Super computer"],
            answer: "Medium-scale computer"
          },
          {
            question: "Another word for a daisy wheel printer",
            options: ["Petal printer", "Golf ball printer", "Laser printer", "Line printer"],
            answer: "Petal printer"
          },
          {
            question: "Cursor is a ____",
            options: ["Pixel", "Thin blinking line", "Pointing device", "None of these"],
            answer: "Thin blinking line"
          },
          {
            question: "Which device is used to backup the data?",
            options: ["Floppy Disk", "Tape", "Network Drive", "All of the above"],
            answer: "All of the above"
          },
          {
            question: "Which of the following printers are you sure will not to use if your objective is to print on multi carbon forms?",
            options: ["Daisy wheel", "Dot matrix", "Laser", "Thimble"],
            answer: "Laser"
          },
          {
            question: "Which of the following items are examples of storage devices?",
            options: ["Floppy / hard disks", "CD-ROMs", "Tape devices", "All of the above"],
            answer: "All of the above"
          },
          {
            question: "ASCII and EBCDIC are the popular character coding systems. What does ASCII stand for?",
            options: [
              "American Stable Code for International Interchange",
              "American Standard Case for Institutional Interchange",
              "American Standard Code for Information Interchange",
              "American Standard Code for Interchange Information"
            ],
            answer: "American Standard Code for Information Interchange"
          },
          {
            question: "Which computers are used as servers for any medium sized organizations?",
            options: ["Mainframe Computer", "Mini Computers", "Micro Computers", "Super Computers"],
            answer: "Mini Computers"
          },
          {
            question: "Slide Rules was invented in",
            options: ["1614", "1617", "1620", "None of above"],
            answer: "1620"
          },
          {
            question: "A normal CD-ROM usually can store up to __________data?",
            options: ["680 KB", "680 Bytes", "680 MB", "680 GB"],
            answer: "680 MB"
          },
          {
            question: "Which of the following required large computer memory?",
            options: ["Imaging", "Graphics", "Voice", "All of above"],
            answer: "All of above"
          },
          {
            question: "Which was the computer conceived by Babbage?",
            options: ["Analytical engine", "Arithmetic machine", "Donald Knuth", "All of above"],
            answer: "Analytical engine"
          },
          {
            question: "The lower deck of an abacus is known as",
            options: ["heaven", "sky", "earth", "floor"],
            answer: "earth"
          },
          {
            question: "All modern computer operate on",
            options: ["Information", "Floppies", "Data", "Word"],
            answer: "Data"
          },
          {
            question: "The computer that can input analog signals and return result in digital form",
            options: ["Analog Computers", "Digital Computers", "Hybrid Computers", "Mainframe Computers"],
            answer: "Hybrid Computers"
          },
          {
            question: "Offline device is",
            options: ["A device which is not connected to CPU", "A device which is connected to CPU", "A direct access storage device", "An I/O device"],
            answer: "A device which is not connected to CPU"
          },
          {
            question: "What is the latest write-once optical storage media?",
            options: ["Digital paper", "Magneto-optical disk", "WORM disk", "CD-ROM disk"],
            answer: "WORM disk"
          },
          {
            question: "Which of the following programming language started from second generation?",
            options: ["LISP", "C", "QBASIC", "FORTRAN"],
            answer: "FORTRAN"
          },
          {
            question: "Which one of the following input device is user programmable?",
            options: ["Dumb terminal", "Smart terminal", "VDT", "Intelligent terminal"],
            answer: "Intelligent terminal"
          },
          {
            question: "Floppy disks typically in diameter",
            options: ["3?", "5.25?", "8?", "All of above"],
            answer: "All of above"
          },
          {
            question: "Current SIMMs have either __ or __ connectors (pins)",
            options: ["9 or 32", "30 or 70", "28 or 72", "30 or 72"],
            answer: "30 or 72"
          },
          {
            question: "Dot-matrix is a type of",
            options: ["Tape", "Printer", "Disk", "Bus"],
            answer: "Printer"
          },
          {
            question: "Which is not consisted in a processor?",
            options: ["ALU", "CU", "Memory", "Registers"],
            answer: "Memory"
          },
          {
            question: "IBM 1401 is the first computer to enter in Nepal. It belonged to",
            options: ["First Generation", "Second Generation", "Third Generation", "Fourth Generation"],
            answer: "Second Generation"
          },
          {
            question: "The Third Generation Computer was made with ________.",
            options: ["Vacuum Tube", "Discrete Components", "IC", "Bio Chips"],
          aAnswer: "IC"
          },
          {
            question: "Which of the following are the two main components of the CPU?",
            options: ["Control Unit and Registers", "Registers and Main Memory", "Control unit and ALU", "ALU and bus"],
            answer: "Control unit and ALU"
          },
          {
            question: "Fifth generation computer is also known as",
            options: ["Knowledge information processing system", "Very large scale integration", "Both of above", "None of above"],
            answer: "Both of above"
          },
          {
            question: "Second Generation computers were developed during",
            options: ["1949 to 1955", "1956 to 1965", "1965 to 1970", "1970 to 1990"],
            answer: "1956 to 1965"
          },
          {
            question: "What is the name of the computer terminal which gives paper printout?",
            options: ["Display screen", "Soft copy terminal", "Hard copy terminal", "Plotter"],
            answer: "Hard copy terminal"
          },
          {
            question: "Programs are executed on the basis of a priority number in a",
            options: ["Batch processing system", "Multiprogramming", "Time sharing", "None of these"],
            answer: "Batch processing system"
          },
          {
            question: "When was Apple Macintosh II microcomputer introduced in the market?",
            options: ["1964", "1970", "1983", "1986"],
            answer: "1983"
          },
          {
            question: "When was the world’s first laptop computer introduced in the market and by whom?",
            options: ["Hewlett-Packard", "Epson, 1981", "Laplink traveling software In1982", "Tandy model-2000, 1985"],
            answer: "Epson, 1981"
          },
          {
            question: "Today’s computer giant IBM was earlier known by different name which was changed in 1924. What was that name?",
            options: ["Computer Tabulating Recording Co.", "The Tabulator Ltd.", "International Computer Ltd.", "None of above"],
            answer: "Computer Tabulating Recording Co."
          },
          {
            question: "The personnel who deals with the computer and its management put together are called",
            options: ["Software", "Human ware", "Firmware", "Hardware"],
            answer: "Human ware"
          },
          {
            question: "Which of the following is input device?",
            options: ["scanner", "speaker", "monitor", "projector"],
            answer: "scanner"
          },
          {
            question: "Which of the following is true?",
            options: ["Fields are composed of bytes", "Records are composed of fields", "Fields are composed of characters", "All of above"],
            answer: "All of above"
          },
          {
            question: "Who built the world’s first electronic calculator using telephone relays, light bulbs and batteries?",
            options: ["Claude Shannon", "Konrard Zues", "George Stibits", "Howard H. Aiken"],
            answer: "George Stibits"
          },
          {
            question: "WAN is a most used abbreviation in Networking, what is its full form?",
            options: ["WAP Area Network", "Wide Area Network", "Wide Array of Network", "Wireless Access Network"],
            answer: "Wide Area Network"
          },
          {
            question: "In which language is source program written?",
            options: ["English", "Symbolic", "High level", "Temporary"],
            answer: "High level"
          },
          {
            question: "Which of the following is correct acronym of VGA?",
            options: ["Video Graphics Array", "Visual Graphics Array", "Volatile Graphics Array", "Video Graphics Adapter"],
            answer: "Video Graphics Array"
          },
          {
            question: "A song being played on computer speaker is",
            options: ["hard output", "soft output", "both hard and soft output", "neither hard nor soft output"],
            answer: "soft output"
          },
          {
            question: "In the IBM PC-At, what do the words AT stand for",
            options: ["Additional Terminals", "Advance technology", "Applied technology", "Advanced terminology"],
            answer: "Advance technology"
          },
          {
            question: "Size of the primary memory of a PC ranges between",
            options: ["2KB to 8KB", "64KB & 256KB", "256KB & 640KB", "None of these"],
            answer: "256KB & 640KB"
          },
          {
            question: "What is the number of read-write heads in the drive for a 9 trac magnetic tape?",
            options: ["9", "16", "18", "27"],
            answer: "9"
          },
          {
            question: "Apple company used chips from ______ for its computers",
            options: ["Intel", "Motorola", "Both of above", "None of above"],
            answer: "Motorola"
          },
          {
            question: "Which of the following is a feature of fifth generation computers?",
            options: ["Use of natural language", "artificial intelligence", "bio-chips", "All of above"],
            answer: "All of above"
          },
          {
            question: "Charles Babbage was awarded by Royal Society for his",
            options: ["Difference Engine", "Analytic Engine", "Binary System in Analytic Engine", "His concept of input, mill, output and storage"],
            answer: "Analytic Engine"
          },
          {
            question: "A computer which CPU speed around 100 million instruction per second and with the word length of around 64 bits is known as",
            options: ["Super computer", "Mini computer", "Micro computer", "Macro computer"],
            answer: "Super computer"
          },
          {
            question: "When we look at the cost, which of the following computer is most expensive?",
            options: ["Mainframe Computer", "Mini Computers", "Micro Computers", "Super Computers"],
            answer: "Super Computers"
          },
          {
            question: "Which of the following will happen when data is entered into a memory location?",
            options: ["It will add to the content of the location", "It will change the address of the memory location", "It will erase the previous content", "It will not be fruitful if there is already some data at the location"],
            answer: "It will erase the previous content"
          },
          {
            question: "Which device is used as the standard pointing device in a Graphical User Environment?",
            options: ["Keyboard", "Mouse", "Joystick", "Track ball"],
            answer: "Mouse"
          },
          {
            question: "The silicon chips used for data processing are called",
            options: ["A) RAM chips", "B) ROM chips", "C) Micro processors", "D) PROM chips"],
            answer: "C) Micro processors"
          },
          {
            question: "Which computers used operating systems by Microsoft?",
            options: ["A) IBM PCs", "B) Apple/Macintosh PCs", "C) IBM Compatibles", "D) Both A & C"],
            answer: "D) Both A & C"
          },
          {
            question: "One of the main feature that distinguish microprocessors from micro-computer is",
            options: ["A) Words are usually large in microprocessors", "B) Words are shorter in microprocessors", "C) Microprocessor does not contain I/O device", "D) Exactly the same as the machine cycle time"],
            answer: "C) Microprocessor does not contain I/O device"
          },
          {
            question: "Napier’s Bones were invented in",
            options: ["A) 1614", "B) 1617", "C) 1620", "D) None of above"],
            answer: "A) 1614"
          },
          {
            question: "One computer that is not considered a portable computer is",
            options: ["A) Minicomputer", "B) A laptop computer", "C) Tablet PC", "D) All of the above"],
            answer: "A) Minicomputer"
          },
          {
            question: "Computers built before the First Generation of computers were:",
            options: ["A) Mechanical", "B) Electro-mechanical", "C) Electrical", "D) None of these"],
            answer: "B) Electro-mechanical"
          },
          {
            question: "Which of the following is a way to access secondary memory?",
            options: ["A) Random access memory", "B) Action method", "C) Transfer method", "D) Density method"],
            answer: "C) Transfer method"
          },
          {
            question: "What is System Analysis?",
            options: ["A) The design of the screen the user will see and use to enter or display data", "B) System analysis defines the format and type of data the program will use", "C) System Analysis involves creating formal model of the problem to be solved", "D) None of the above"],
            answer: "C) System Analysis involves creating formal model of the problem to be solved"
          },
          {
            question: "Which of the following devices have a limitation that we can only store information to it but cannot erase or modify it?",
            options: ["A) Floppy Disk", "B) Hard Disk", "C) Tape Drive", "D) CDROM"],
            answer: "D) CDROM"
          },
          {
            question: "Which is an item of storage medium in the form of circular plate?",
            options: ["A) Disk", "B) CPU", "C) Printer", "D) ALU"],
            answer: "A) Disk"
          },
          {
            question: "Daisy wheel printer is a type of",
            options: ["A) Matrix printer", "B) Impact printer", "C) Laser printer", "D) Manual printer"],
            answer: "B) Impact printer"
          },
          {
            question: "A number system that has eight different symbols to represent any quantity is known as",
            options: ["A) Binary", "B) Octal", "C) Decimal", "D) Hexadecimal"],
            answer: "B) Octal"
          },
          {
            question: "The two basic types of record access methods are:",
            options: ["A) Sequential and random", "B) Sequential and indexed", "C) Direct and immediate", "D) Online and real time"],
            answer: "A) Sequential and random"
          },
          {
            question: "Artificial Intelligence is associated with which generation?",
            options: ["A) First Generation", "B) Second Generation", "C) Fifth Generation", "D) Sixth Generation"],
            answer: "C) Fifth Generation"
          },
          {
            question: "One of a class of storage device devices that can access storage locations in any order is",
            options: ["A) DTE", "B) DASD", "C) DDE", "D) DDE"],
            answer: "B) DASD"
          },
          {
            question: "The actual execution of instructions happens in",
            options: ["A) ALU", "B) CU", "C) Memory", "D) None of above"],
            answer: "A) ALU"
          },
          {
            question: "Floppy disks are available in",
            options: ["A) Single side single density", "B) Single side double density", "C) Both of above", "D) None of above"],
            answer: "C) Both of above"
          },
          {
            question: "Which of the following is not electro-mechanical computer?",
            options: ["A) Z3", "B) ABC", "C) mark I", "D) ENIAC"],
            answer: "D) ENIAC"
          },
          {
            question: "Which of the following is a programming language?",
            options: ["A) Lotus", "B) Pascal", "C) MS-Excel", "D) Netscape"],
            answer: "B) Pascal"
          },
          {
            question: "Which converts the user data into machine readable form?",
            options: ["A) input unit, output unit, control unit", "B) central processing unit", "C) output unit", "D) decoder unit"],
            answer: "B) central processing unit"
          },
          {
            question: "A factor which would strongly influence a business person to adopt a computer is its",
            options: ["Accuracy", "Reliability", "Speed", "All of the above"],
            answer: "All of the above"
          },
          {
            question: "Who invented punched cards?",
            options: ["Charles Babbage", "Dr. Herman Hollerith", "Howard Aikin", "Joseph Jacquard"],
            answer: "Dr. Herman Hollerith"
          },
          {
            question: "Each model of a computer has a unique",
            options: ["Assembly of a computer", "Machine language", "High level language", "All of the above"],
            answer: "Machine language"
          },
          {
            question: "Which of the following is not a primary storage device?",
            options: ["Magnetic tape", "Magnetic disk", "Optical disk", "All of the above"],
            answer: "Magnetic tape"
          },
          {
            question: "In a punched card system, data is processed by a",
            options: ["Keypunch machine, sorter and posting machine", "Accounting machine, posting machine, and billing machine", "Sorter, posting machine, and billing machine", "Accounting machine, keypunch machine and sorter"],
            answer: "Keypunch machine, sorter and posting machine"
          },
          {
            question: "Which device is required for the Internet connection?",
            options: ["Joystick", "Modem", "CD Drive", "NIC Card"],
            answer: "Modem"
          },
          {
            question: "A set of rods where numbers were carved and used for multiplication and division aids is known as",
            options: ["Pascaline", "Napier’s Bones", "Stepped Reckoner", "Slide Rule"],
            answer: "Napier’s Bones"
          },
          {
            question: "Seek time is",
            options: ["time to position the head over proper track", "time to position the head over proper sector", "time to position the head over proper cylinder", "none of above"],
            answer: "time to position the head over proper track"
          },
          {
            question: "Tape speed is measured in",
            options: ["Feet per second", "Inch per second", "Meter per second", "Centimeter per second"],
            answer: "Feet per second"
          },
          {
            question: "Punched cards were first introduced by",
            options: ["Powers", "Pascal", "Jacquard", "Herman Hollerith"],
            answer: "Herman Hollerith"
          },
          {
            question: "Which computer support co-processors?",
            options: ["XT computer", "AT computers", "None of these", "Both of these"],
            answer: "AT computers"
          },
          {
            question: "A floppy disk contains",
            options: ["Circular tracks only", "Sectors only", "Both circular tracks and sectors", "None of the above"],
            answer: "Both circular tracks and sectors"
          },
          {
            question: "The capacity of 3.5 inch floppy disk is",
            options: ["1.40 MB", "1.44 GB", "1.40 GB", "1.44 MB"],
            answer: "1.44 MB"
          },
          {
            question: "The contribution of Konrad Zuse was long ignored because",
            options: ["He made the computers secretly", "his computers were very complicated and it took time for the people to recognize its power", "of political reasons. He was German.", "All of the above"],
            answer: "All of the above"
          },
          {
            question: "Any method for controlling access to or use of memory is known",
            options: ["Memory map", "Memory protection", "Memory management", "Memory instruction"],
            answer: "Memory protection"
          },
          {
            question: "In what respect computers are superior to human beings?",
            options: ["Diligence", "Intelligence", "Both of above", "None of above"],
            answer: "Diligence"
          },
          {
            question: "Com in Latin is",
            options: ["intensifying prefix", "intensifying suffix", "a term that means to reckon", "None of above"],
            answer: "intensifying prefix"
          },
          {
            question: "The system unit of a personal computer typically contains all of the following except:",
            options: ["Microprocessor", "Disk controller", "Serial interface", "Modem"],
            answer: "Modem"
          },
          {
            question: "Which of the following is related to fifth generation computers?",
            options: ["Knowledge information processing system", "Very large scale integration (VLSI)", "Both of above", "Only b"],
            answer: "Both of above"
          },
          {
            question: "The process of starting a or restarting a computer system by loading instructions from a secondary storage device into the computer memory is called",
            options: ["Duping", "Booting", "Padding", "CPS"],
            answer: "Booting"
          },
          {
            question: "MSI stands for",
            options: ["Medium Scale Integrated Circuits", "Medium System Integrated Circuits", "Medium Scale Intelligent Circuit", "Medium System Intelligent Circuit"],
            answer: "Medium Scale Integrated Circuits"
          },
          {
            question: "A Pixel is _________",
            options: ["A computer program that draws picture", "A picture stored in secondary memory", "The smallest resolvable part of a picture", "None of these"],
            answer: "The smallest resolvable part of a picture"
          },
          {
            question: "A/n _____ Device is any device that provides information, which is sent to the CPU",
            options: ["Input", "Output", "CPU", "Memory"],
            answer: "Input"
          },
          {
            question: "What was the nickname of the computer used by the Americans in 1952 for their H-bomb project?",
            options: ["ENIAC", "EDSAC", "MANIAC", "UNIVAC"],
            answer: "MANIAC"
          },
          {
            question: "Which is the type of memory for information that does not change on your computer?",
            options: ["RAM", "ROM", "ERAM", "RW / RAM"],
            answer: "ROM"
          },
          {
            question: "LSI, VLSI & ULSI chips were used in which generation?",
            options: ["First", "Second", "Third", "Fourth"],
            answer: "Fourth"
          },
          {
            question: "Which of the following is the largest manufacturer of Hard Disk Drives?",
            options: ["IBM", "Seagate", "Microsoft", "3M"],
            answer: "Seagate"
          },
          {
            question: "Networking such as LAN, MAN started from",
            options: ["First generation", "Second generation", "Third generation", "Fourth generation"],
            answer: "Fourth generation"
          },
          {
            question: "Which characteristic of computer distinguishes it from electronic calculators?",
            options: ["Accuracy", "Storage", "Versatility", "Automatic"],
            answer: "Versatility"
          },
          {
            question: "Which of the following registers is used to keep track of address of the memory location where the next instruction is located?",
            options: ["Memory address register", "Memory data register", "Instruction register", "Program counter"],
            answer: "Program counter"
          },
          {
            question: "Which of the following is not the classification of computers based on application?",
            options: ["Electronic Computers", "Analog Computers", "Digital Computers", "Hybrid Computers"],
            answer: "Electronic Computers"
          },
          {
            question: "Which of the following is not a type of Software",
            options: ["System Software", "Application Software", "Utility Software", "Entertainment Software"],
            answer: "Entertainment Software"
          },
          {
            question: "Who invented the high level language C?",
            options: ["Dennis M. Ritchie", "Niklaus Writh", "Seymour Papert", "Donald Kunth"],
            answer: "Dennis M. Ritchie"
          },
          {
            question: "What do you call the programs that are used to find out possible faults and their causes?",
            options: ["Operating system extensions", "Cookies", "Diagnostic software", "Boot diskettes"],
            answer: "Diagnostic software"
          },
          {
            question: "Which computer memory is used for storing programs and data currently being processed by the CPU?",
            options: ["Mass memory", "Internal memory", "Non-volatile memory", "PROM"],
            answer: "Internal memory"
          },
          {
            question: "Which of the following code used in present day computing was developed by IBM Corporation?",
            options: ["ASCII", "Hollerith Code", "Baudot Code", "EBCDIC Code"],
            answer: "EBCDIC Code"
          },
          {
            question: "When was the transistor invented?",
            options: ["1948", "1938", "1958", "1968"],
            answer: "1948"
          },
          {
            question: "In the third Generation of computers",
            options: ["Distributed data processing first became popular", "An operating system was first developed", "High level procedural language were first used", "Online real time systems first become popular"],
            answer: "High level procedural language were first used"
          },
          {
            question: "Most important advantage of an IC is its",
            options: ["Easy replacement in case of circuit failure", "Extremely high reliability", "Reduced cost", "Lower power consumption"],
            answer: "Reduced cost"
          },
          {
            question: "Which of the following magazines covers only the IBM PC and its compatibles?",
            options: ["Byte", "PC Magazine", "Personal Computing", "Interface Age"],
            answer: "PC Magazine"
          },
          {
            question: "UNIVAC was a first generation computer. What is its full form?",
            options: ["Universal Automatic Computer", "Universal Array Computer", "Unique Automatic Computer", "Unvalued Automatic Computer"],
            answer: "Universal Automatic Computer"
          },
          {
            question: "Which of the following is required when more than one person uses a central computer at the same time?",
            options: ["Terminal", "Light pen", "Digitizer", "Mouse"],
            answer: "Terminal"
          },
          {
            question: "Which of the following is not an output device?",
            options: ["Scanner", "Printer", "Flat Screen", "Touch Screen"],
            answer: "Scanner"
          },
          {
            question: "Personal computers used a number of chips mounted on a main circuit board. What is the common name for such boards?",
            options: ["Daughterboard", "Motherboard", "Father board", "Childboard"],
            answer: "Motherboard"
          },
          {
            question: "In what respect human beings are superior to computers?",
            options: ["A) Diligence", "B) Intelligence", "C) Slavery", "D) Reliability"],
            answer: "B) Intelligence"
          },
          {
            question: "As compared to the secondary memory, the primary memory of a computer is",
            options: ["A) Large", "B) Cheap", "C) Fast", "D) Slow"],
            answer: "C) Fast"
          },
          {
            question: "The language that the computer can understand and execute is called",
            options: ["A) Machine language", "B) Application software", "C) System program", "D) All of above"],
            answer: "A) Machine language"
          },
          {
            question: "How was the generation of computer classified?",
            options: ["A) by the device used in memory & processor", "B) by the speed of computer", "C) by the model of the computer", "D) by the accuracy of computer"],
            answer: "A) by the device used in memory & processor"
          },
          {
            question: "Which of the following is not a feature of first generation computers?",
            options: ["A) They used vacuum tubes or valves as main electronic component", "B) They consumed lots of electricity and produced excessive heat", "C) They used machine language and assembly language to program the machine", "D) None of above"],
            answer: "D) None of above"
          },
          {
            question: "CAD stands for",
            options: ["A) Computer aided design", "B) Computer algorithm for design", "C) Computer application in design", "D) All of the above"],
            answer: "A) Computer aided design"
          },
          {
            question: "Which of the following memories has the shortest access times?",
            options: ["A) Cache memory", "B) Magnetic bubble memory", "C) Magnetic core memory", "D) RAM"],
            answer: "A) Cache memory"
          },
          {
            question: "A small or intelligent device is so called because it contains within it a",
            options: ["A) Computer", "B) Microcomputer", "C) Programmable", "D) Sensor"],
            answer: "B) Microcomputer"
          },
          {
            question: "Which of the following is not a primary storage device?",
            options: ["A) Magnetic tape", "B) Magnetic disk", "C) Optical disk", "D) All of above"],
            answer: "D) All of above"
          },
          {
            question: "Who invented Analytical engine?",
            options: ["A) Blaise Pascal", "B) George Bool", "C) Charles Babbage", "D) Dr. Herman Hollerith"],
            answer: "C) Charles Babbage"
          },
        ],
      },
    ],
  },

  //200Level
  {
    level: "200 Level",
    courses: [
      {
        code: "CSC201",
        questions: [
          {
            question: "Which of these is not a core datatype?",
            options: ["Lists", "Dictionary", "Tuples", "Class"],
            answer: "Class",
          },
          {
            question:
              "Given a function that does not return any value, what value is thrown by it by default when executed in shell?",
            options: ["int", "bool", "void", "None"],
            answer: "None",
          },
          {
            question:
              "What will be the output of the following?\n>>> str = 'hello'\n>>> str[:2]",
            options: ["he", "lo", "olleh", "hello"],
            answer: "he",
          },
          {
            question: "Which of the following will run without errors?",
            options: [
              "round(45.8)",
              "round(6352.898,2)",
              "round()",
              "round(7463.123,2,1)",
            ],
            answer: ["round(45.8)"],
          },
          {
            question: "What is the return type of function id?",
            options: ["int", "float", "bool", "dict"],
            answer: "int",
          },
          {
            question: "What error occurs when you execute? apple = mango",
            options: ["SyntaxError", "NameError", "ValueError", "TypeError"],
            answer: "NameError",
          },
          {
            question:
              "What datatype is the object below?\nL = [1, 23, ‘hello’, 1]",
            options: ["List", "dictionary", "array", "tuple"],
            answer: "List",
          },
          {
            question:
              "In order to store values in terms of key and value we use what core datatype?",
            options: ["List", "tuple", "class", "dictionary"],
            answer: "dictionary",
          },
          {
            question: "Which of the following results in a SyntaxError?",
            options: [
              '’"Once upon a time…", she said.’',
              "“He said, “Yes!””",
              "‘3\\’",
              "”’That’s okay”’",
            ],
            answer: ["“He said, “Yes!””", "‘3\\’"],
          },
          {
            question:
              "What is the average value of the code that is executed below?\n>>>grade1 = 80\n>>>grade2 = 90\n>>>average = (grade1 + grade2) / 2",
            options: ["85", "85.0", "95", "95.0"],
            answer: "85.0",
          },
        ],
      },
      {
        code: "MTS201",
        questions: [],
      },
      {
        code: "GNS201",
        questions: [],
      },
      {
        code: "GNS203",
        questions: [],
      },
      {
        code: "CHE205",
        questions: [],
      },
    ],
  },
];

export default questions;
