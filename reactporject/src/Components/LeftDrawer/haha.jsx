{/* ---------- USER INTERFACE分隔符---------------
        {/* 三目判断，当抽屉关闭时只显示分隔符 */}
        {open ? (
          <Box sx={{ display: "flex", alignItems: "center", p: 1 }}>
            <Divider sx={{ width: 20 }} />
            <Typography variant="caption" sx={{ px: 2, color: "#32475c61" }}>
              USER INTERFACE
            </Typography>
          </Box>
        ) : (
          <Divider /> // Only show the line when the drawer is closed
        )}
        {/* 挂载UserInterface 没有连环套的部分 */}
        <UserInterface open={open}></UserInterface>
        {/* ----------Cards nestedlist--------------- */}
        <CardsNestedList open={open}></CardsNestedList>

        {/* ----------Components nestedlist--------------- */}
        <ComponentsNestedList open={open}></ComponentsNestedList>

        {/* ---------- FORM ELEMENT分隔符--------------- */}
        {/* 三目判断，当抽屉关闭时只显示分隔符 */}
        {open ? (
          <Box sx={{ display: "flex", alignItems: "center", p: 1 }}>
            <Divider sx={{ width: 20 }} />
            <Typography variant="caption" sx={{ px: 2, color: "#32475c61" }}>
              FORMS & TABLES
            </Typography>
          </Box>
        ) : (
          <Divider /> // Only show the line when the drawer is closed
        )}
        {/* ----------Form Element nestedlist--------------- */}
        <FormElement open={open}></FormElement>
        {/* 挂载FormAndTable 没有连环套的部分 */}
        <FormTable open={open}></FormTable>

        {/* ---------- Charts & Misc 分隔符--------------- */}
        {/* 三目判断，当抽屉关闭时只显示分隔符 */}
        {open ? (
          <Box sx={{ display: "flex", alignItems: "center", p: 1 }}>
            <Divider sx={{ width: 20 }} />
            <Typography variant="caption" sx={{ px: 2, color: "#32475c61" }}>
              CHARTS & MISC
            </Typography>
          </Box>
        ) : (
          <Divider /> // Only show the line when the drawer is closed
        )}
        {/* ----------Charts nestedlist--------------- */}
        <ChartsNestedList open={open}></ChartsNestedList>
        {/* ----------Others nestedlist--------------- */}
        <OthersNestedList open={open}></OthersNestedList> */}